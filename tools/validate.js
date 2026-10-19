/* İçerik ve yapı doğrulaması. Yayından önce çalıştır:  node tools/validate.js
   Hata varsa çıkış kodu 1 döner. Matematiksel doğruluğu DENETLEMEZ (bunu bir insan/öğretmen yapmalı);
   yapısal tutarlılığı denetler: kimlikler, doğru seçenek sayısı, etiketler, ders adımları, dosya bağlantıları. */
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..');
global.window = {}; window.KESIF = global.KESIF = { lessons: {}, daily: [] };
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const errors = [], warns = [];
const err = m => errors.push(m), warn = m => warns.push(m);

/* 1) index.html: yerel dosyalar var mı, sürüm parametresi tutarlı mı */
const refs = [...html.matchAll(/(?:src|href)="([^"#:]+?)(\?v=([^"]+))?"/g)].filter(m => !m[1].startsWith('http'));
const versions = new Set(refs.filter(m => m[3]).map(m => m[3]));
for (const m of refs) if (!fs.existsSync(path.join(root, m[1]))) err(`index.html: dosya yok → ${m[1]}`);
if (versions.size > 1) warn(`index.html: farklı sürüm parametreleri var (${[...versions].join(', ')}); tools/bump.js çalıştır.`);
const dataFiles = refs.map(m => m[1]).filter(f => f.startsWith('data/'));
for (const f of fs.readdirSync(path.join(root, 'data'))) if (f.endsWith('.js') && !dataFiles.includes('data/' + f)) warn(`data/${f} index.html'de yüklenmiyor`);
for (const f of dataFiles) { try { eval(fs.readFileSync(path.join(root, f), 'utf8')); } catch (e) { err(`${f}: yüklenemedi → ${e.message}`); } }

/* 2) sorular */
const K = KESIF, ids = new Set();
const LAB_TYPES = ['text', 'explorer', 'circle', 'expo', 'scatter', 'bar', 'polygon', 'sim', 'mcq', 'tap', 'reflect'];
const s11ids = new Set(K.s11 ? K.s11.themes.flatMap(t => t.topics.map(p => p.id)) : []);
const yksIds = new Set(K.yks ? K.yks.levels.flatMap(l => l.areas.flatMap(a => a.topics.map(t => t[0]))) : []);
const kzHas = id => { const i = id.indexOf(':'); if (i < 0) return yksIds.has(id); const sub = K.kz && K.kz[id.slice(0, i)]; return !!(sub && sub.items.some(x => x.c === id.slice(i + 1))); };
for (const q of K.daily) {
  if (!q.id) { err('kimliksiz soru: ' + (q.q || '').slice(0, 40)); continue; }
  if (ids.has(q.id)) err(`yinelenen kimlik: ${q.id}`); ids.add(q.id);
  if (!K.subjects[q.subject]) err(`${q.id}: bilinmeyen ders "${q.subject}"`);
  if (!q.q || q.q.length < 8) err(`${q.id}: soru metni eksik`);
  if (q.type === 'open') {
    if (!Array.isArray(q.rubric) || !q.rubric.length) err(`${q.id}: açık uçlu soruda puanlama anahtarı yok`);
    if (!Array.isArray(q.solution) || !q.solution.length) err(`${q.id}: açık uçlu soruda çözüm yok`);
    (q.answers || []).forEach(a => { if (!a.label || a.v === undefined || a.v === '') err(`${q.id}: kısa cevap kutusu eksik`); });
  } else {
    const ok = (q.opts || []).filter(o => o.ok).length;
    if (ok !== 1) err(`${q.id}: doğru seçenek sayısı ${ok} (1 olmalı)`);
    if ((q.opts || []).length < 3) err(`${q.id}: en az 3 seçenek olmalı`);
    (q.opts || []).forEach(o => { if (!o.why) warn(`${q.id}: "${o.t}" seçeneğinde açıklama yok`); });
    const texts = (q.opts || []).map(o => String(o.t).trim()); if (new Set(texts).size !== texts.length) err(`${q.id}: aynı seçenek iki kez`);
    if (!q.solution && q.subject === 'mat' && !/^(m|t|mt|mu|ms)\d/.test(q.id)) warn(`${q.id}: adım adım çözüm yok`);
  }
  const m = (K.meta || {})[q.id];
  if (m) {
    if (m.s11 && !s11ids.has(m.s11)) err(`${q.id}: s11 konusu yok → ${m.s11}`);
    if (m.yks && !kzHas(m.yks)) err(`${q.id}: kazanım kodu bulunamadı → ${m.yks}`);
    if (m.sinav && !m.sinav.every(x => ['s11', 'tyt', 'ayt'].includes(x))) err(`${q.id}: geçersiz sınav etiketi`);
  } else if (q.subject !== 'tur' || !/^t\d/.test(q.id)) warn(`${q.id}: etiket (meta) yok`);
  const h = (K.help || {})[q.id];
  if (h && h.topic) { const L = K.lessons[h.topic.lesson]; const st = L && L.steps[h.topic.step]; if (!st || !(st.type === 'text' || LAB_TYPES.includes(st.type))) err(`${q.id}: yardım konusu geçersiz → ${h.topic.lesson}#${h.topic.step}`); }
}
for (const id of Object.keys(K.meta || {})) if (!ids.has(id)) warn(`meta var ama soru yok: ${id}`);

/* 3) dersler */
for (const L of Object.values(K.lessons)) {
  if (!K.subjects[L.subject]) err(`${L.id}: bilinmeyen ders`);
  L.steps.forEach((st, i) => {
    if (!LAB_TYPES.includes(st.type)) err(`${L.id}#${i}: bilinmeyen adım türü "${st.type}"`);
    if (st.type === 'mcq' && st.opts.filter(o => o.ok).length !== 1) err(`${L.id}#${i}: doğru seçenek sayısı 1 değil`);
    if (st.type === 'tap' && st.sents.filter(o => o.ok).length !== 1) err(`${L.id}#${i}: kilit cümle sayısı 1 değil`);
  });
  if (!(K.tracks || {})[L.id]) warn(`${L.id}: sekme etiketi (KESIF.tracks) yok`);
}
if (K.s11) for (const t of K.s11.themes) for (const p of t.topics) if (p.lesson && !K.lessons[p.lesson]) err(`11. sınıf ${p.id}: ders bulunamadı → ${p.lesson}`);

/* 4) app.js: kayıtlı her laboratuvar fonksiyonu tanımlı mı (silinmiş fonksiyon yakalama) */
const app = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
const reg = (app.match(/const LABS = \{([^}]*)\}/) || [])[1] || '';
const regTypes = {};
for (const m of reg.matchAll(/(\w+):\s*(\w+)/g)) { regTypes[m[1]] = 1; if (!app.includes('function ' + m[2] + '(')) err(`app.js: "${m[1]}" adım türünün fonksiyonu yok → ${m[2]}`); }
if (!reg) err('app.js: LABS kaydı bulunamadı');
for (const L of Object.values(K.lessons)) L.steps.forEach((st, i) => { if (!['text', 'mcq', 'tap', 'reflect'].includes(st.type) && !regTypes[st.type]) err(`${L.id}#${i}: "${st.type}" türü LABS kaydında yok`); });

/* sonuç */
const by = {}; K.daily.forEach(q => { by[q.subject] = (by[q.subject] || 0) + 1; });
console.log(`Sorular: ${K.daily.length} (${Object.entries(by).map(([k, v]) => k + ' ' + v).join(', ')}) · Dersler: ${Object.keys(K.lessons).length}`);
warns.forEach(w => console.log('UYARI  ' + w));
errors.forEach(e => console.log('HATA   ' + e));
console.log(errors.length ? `\n${errors.length} hata, ${warns.length} uyarı.` : `\nHata yok (${warns.length} uyarı).`);
process.exit(errors.length ? 1 : 0);
