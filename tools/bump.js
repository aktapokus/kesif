/* Sürüm parametresini yeniler (tarayıcı önbelleği eski dosyayı göstermesin diye). Yayından önce çalıştır:  node tools/bump.js */
const fs = require('fs'), path = require('path');
const f = path.join(__dirname, '..', 'index.html');
const d = new Date(), p = n => String(n).padStart(2, '0');
const v = `${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}${p(d.getHours())}${p(d.getMinutes())}`;
let html = fs.readFileSync(f, 'utf8');
html = html.replace(/((?:src|href)="(?:data\/[^"?]+|[a-z]+\.(?:js|css)))(\?v=[^"]*)?"/g, `$1?v=${v}"`);
fs.writeFileSync(f, html);
console.log('Sürüm: ' + v);
