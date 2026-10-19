/* Doğrulama aracı (soru ve ders içeriği için ikinci göz).
   Kullanım:
     node tools/dogrula.js durum                         ders ders doğrulanmış / bekleyen sayıları
     node tools/dogrula.js dis [--ders tur] [--onek tq] [--konu "Paragraf"] [--max 60] [--dersler]
                                                         bekleyen içeriği docs/dogrulama/bekleyen-*.md dosyasına yazar (Opus'a verilecek)
     node tools/dogrula.js uygula <sonuc.json>           Opus'un sonucunu işler: onaylananlara data/dogrulama.js'e damga, düzeltilecekleri listeler
   Sonuç dosyası biçimi: { "model": "opus-5.5", "tarih": "2026-10-19", "sonuclar": { "tq1": {"d":"ok"}, "tq2": {"d":"duzelt","not":"..."}, "tq3": {"d":"sil","not":"..."} } }
   Damga yalnızca "ok" olanlara yazılır. İçerik sonradan değişirse (özet değişir) damga geçersiz sayılır. */
const fs = require('fs'), path = require('path'), crypto = require('crypto');
const root = path.join(__dirname, '..');
global.window = {}; window.KESIF = global.KESIF = { lessons: {}, daily: [] };
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const files = [...html.matchAll(/src="([^"?]+)/g)].map(m => m[1]).filter(f => f.startsWith('data/') && f !== 'data/dogrulama.js');
for (const f of files) eval(fs.readFileSync(path.join(root, f), 'utf8'));
let DV = {}; try { global.KESIF.dv = {}; eval(fs.readFileSync(path.join(root, 'data/dogrulama.js'), 'utf8')); DV = KESIF.dv || {}; } catch (e) { }
const K = KESIF, args = process.argv.slice(2), cmd = args[0];
const opt = n => { const i = args.indexOf('--' + n); return i > -1 ? args[i + 1] : null; };
const hash = o => crypto.createHash('sha1').update(JSON.stringify(o)).digest('hex').slice(0, 8);
const items = [];
K.daily.forEach(q => items.push({ id: q.id, kind: 'soru', subject: q.subject, obj: q, konu: ((K.meta || {})[q.id] || {}).kn || ((K.meta || {})[q.id] || {}).yks || ((K.meta || {})[q.id] || {}).s11 || '' }));
Object.values(K.lessons).forEach(L => items.push({ id: 'ders:' + L.id, kind: 'ders', subject: L.subject, obj: L, konu: L.title }));
const ok = it => DV[it.id] && DV[it.id].h === hash(it.obj);
const stale = it => DV[it.id] && DV[it.id].h !== hash(it.obj);

function show(it) {
  const o = it.obj, out = [];
  if (it.kind === 'ders') {
    out.push(`### ${it.id} — ${o.title} [${o.subject}] (${o.grade || ''})`, `Kanca: ${o.hook || ''}`);
    o.steps.forEach((s, i) => {
      out.push(`- Adım ${i + 1} (${s.type})${s.title ? ': ' + s.title : ''}`);
      if (s.say) out.push(`  - Anlatım: ${s.say}`);
      if (s.html) out.push(`  - İçerik: ${s.html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()}`);
      if (s.passage) out.push(`  - Parça: ${s.passage}`);
      if (s.q) out.push(`  - Soru: ${s.q}`);
      (s.opts || []).forEach(x => out.push(`    ${x.ok ? '✔' : '✘'} ${x.t} — ${x.why || ''}`));
      (s.sents || []).forEach(x => out.push(`    ${x.ok ? '✔' : '✘'} ${x.t} — ${x.why || ''}`));
      if (s.explain) out.push(`  - Açıklama: ${s.explain}`);
      if (s.hint) out.push(`  - Örnek düşünce: ${s.hint}`);
    });
    return out.join('\n');
  }
  out.push(`### ${it.id} [${o.subject}] ${it.konu} ${o.type || 'çoktan seçmeli'}`);
  if (o.passage) out.push(`Parça: ${o.passage}`);
  out.push(`Soru: ${o.q}`);
  if (o.type === 'open') { (o.answers || []).forEach(a => out.push(`  Cevap: ${a.label} = ${a.v}`)); (o.rubric || []).forEach(r => out.push(`  Puan: ${r[0]} — ${r[1]}`)); }
  else (o.opts || []).forEach(x => out.push(`  ${x.ok ? '✔' : '✘'} ${x.t} — ${x.why || ''}`));
  if (o.hint) out.push(`İpucu: ${o.hint}`);
  if (o.think) out.push(`Nasıl düşünmeliyiz: ${o.think}`);
  (Array.isArray(o.solution) ? o.solution : []).forEach((s, i) => out.push(`  ${i + 1}. ${s}`));
  return out.join('\n');
}

if (cmd === 'durum') {
  const by = {};
  items.forEach(it => { const b = by[it.subject + (it.kind === 'ders' ? ' (ders)' : '')] = by[it.subject + (it.kind === 'ders' ? ' (ders)' : '')] || { ok: 0, bek: 0, eski: 0 }; if (ok(it)) b.ok++; else if (stale(it)) b.eski++; else b.bek++; });
  console.log('Ders'.padEnd(14), 'doğrulandı'.padEnd(12), 'bekliyor'.padEnd(10), 'içerik değişmiş');
  Object.entries(by).forEach(([k, v]) => console.log(k.padEnd(14), String(v.ok).padEnd(12), String(v.bek).padEnd(10), v.eski));
} else if (cmd === 'dis') {
  let list = items.filter(it => !ok(it));
  if (!args.includes('--dersler')) list = list.filter(it => it.kind === 'soru');
  else list = list.filter(it => it.kind === 'ders');
  if (opt('ders')) list = list.filter(it => it.subject === opt('ders'));
  if (opt('onek')) list = list.filter(it => it.id.startsWith(opt('onek')));
  if (opt('konu')) list = list.filter(it => it.konu === opt('konu'));
  const max = +(opt('max') || 60); list = list.slice(0, max);
  if (!list.length) { console.log('Bekleyen içerik yok.'); process.exit(0); }
  const head = `# Doğrulama isteği\n\nSen bir lise öğretmeni ve sınav hazırlık uzmanısın. Aşağıdaki içerik 11./12. sınıf öğrencileri için yazıldı (MEB Maarif müfredatı, TYT/AYT). Her öğe için ŞUNLARI KONTROL ET:\n1. İşaretli (✔) cevap gerçekten tek doğru cevap mı? Diğer seçenekler kesin yanlış mı?\n2. Çözüm adımları ve açıklamalar bilimsel/matematiksel/dilsel olarak doğru mu?\n3. Tarih, isim, formül, birim gibi olgular doğru mu?\n4. Dil çocuğa uygun, açık ve kafa karıştırmayan mı? (Ders için ayrıca: merak uyandırıyor mu, sade mi?)\n\nCEVAP BİÇİMİ (yalnızca JSON döndür, dosya olarak kaydet):\n\`\`\`json\n{ "model": "<senin model adın>", "tarih": "<bugün>", "sonuclar": { "<id>": { "d": "ok" }, "<id>": { "d": "duzelt", "not": "ne yanlış ve doğrusu ne" }, "<id>": { "d": "sil", "not": "neden" } } }\n\`\`\`\nHer öğe için bir sonuç yaz. Emin değilsen "duzelt" yaz ve belirsizliği açıkla; "ok" yalnızca emin olduğun durumlarda.\n\n---\n`;
  fs.mkdirSync(path.join(root, 'docs/dogrulama'), { recursive: true });
  const tag = (opt('ders') || 'tum') + (args.includes('--dersler') ? '-dersler' : '') + (opt('konu') ? '-' + opt('konu').replace(/\W+/g, '_') : '') + (opt('onek') ? '-' + opt('onek') : '');
  const f = path.join(root, `docs/dogrulama/bekleyen-${tag}.md`);
  fs.writeFileSync(f, head + list.map(show).join('\n\n') + '\n');
  console.log(`${list.length} öğe → ${path.relative(root, f)}`);
} else if (cmd === 'uygula') {
  const r = JSON.parse(fs.readFileSync(args[1], 'utf8')); const model = r.model || 'bilinmiyor', tarih = r.tarih || new Date().toISOString().slice(0, 10);
  const byId = Object.fromEntries(items.map(it => [it.id, it])); const fix = [], miss = [];
  for (const [id, s] of Object.entries(r.sonuclar || {})) {
    const it = byId[id]; if (!it) { miss.push(id); continue; }
    if (s.d === 'ok') DV[id] = { m: model, t: tarih, h: hash(it.obj) }; else { delete DV[id]; fix.push(`- **${id}** (${s.d}): ${s.not || ''}`); }
  }
  const keys = Object.keys(DV).sort(); const body = keys.map(k => `${JSON.stringify(k)}:${JSON.stringify(DV[k])}`).join(',\n');
  fs.writeFileSync(path.join(root, 'data/dogrulama.js'), `/* Doğrulama damgaları (tools/dogrula.js uygula ile üretilir; elle düzenleme). h = içerik özeti; içerik değişirse damga geçersiz olur. */\nKESIF.dv = {\n${body}\n};\n`);
  if (fix.length) { fs.mkdirSync(path.join(root, 'docs/dogrulama'), { recursive: true }); fs.writeFileSync(path.join(root, 'docs/dogrulama/duzeltilecek.md'), `# Düzeltilecekler (${tarih}, ${model})\n\n${fix.join('\n')}\n`); }
  console.log(`Damgalanan: ${keys.length} · düzeltilecek/silinecek: ${fix.length}${miss.length ? ' · bulunamayan kimlik: ' + miss.join(', ') : ''}`);
} else console.log('Komut: durum | dis | uygula <sonuc.json>  (ayrıntı için dosya başlığına bak)');
