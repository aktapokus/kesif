/* İçerik dökümü: tüm soruları okunabilir biçimde yazdırır (denetim için). Kullanım: node tools/dump.js [önek] */
global.window = {}; window.KESIF = global.KESIF = { lessons: {}, daily: [] };
const fs = require('fs'), path = require('path');
const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const files = [...html.matchAll(/src="([^"?]+)/g)].map(m => m[1]).filter(f => f.startsWith('data/'));
for (const f of files) eval(fs.readFileSync(path.join(__dirname, '..', f), 'utf8'));
const pre = process.argv[2] || '';
for (const q of KESIF.daily.filter(q => q.id.startsWith(pre))) {
  const m = (KESIF.meta || {})[q.id] || {};
  console.log(`\n#${q.id} [${q.subject}] ${m.s11 || ''} ${m.yks || ''} ${q.type || 'mc'}`);
  if (q.passage) console.log('  P: ' + q.passage);
  console.log('  Q: ' + q.q);
  if (q.type === 'open') (q.answers || []).forEach(a => console.log('  A: ' + a.label + ' = ' + a.v));
  else q.opts.forEach(o => console.log((o.ok ? '  ✔ ' : '  ✘ ') + o.t + ' — ' + o.why));
  (Array.isArray(q.solution) ? q.solution : []).forEach((s, i) => console.log(`  ${i + 1}. ${s}`));
}
