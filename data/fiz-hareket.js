/* Fizik keşfi (9. sınıf 3. ünite): Hız, yol, zaman ve ivme — kazanım 9.3.1.2–9.3.1.5. Özgün içerik (CC BY-NC-SA 4.0). Simgeler: x konum/yol, v hız, a ivme, t zaman; birimler m, s, m/s, m/s². */
(function () {
  var AX = function (xt, yt) { return '<line x1="70" y1="240" x2="610" y2="240" stroke="var(--muted)"/><line x1="70" y1="20" x2="70" y2="240" stroke="var(--muted)"/><text x="610" y="262" text-anchor="end" fill="var(--ink)" font-size="16" font-weight="700">' + xt + ' →</text><text x="76" y="18" fill="var(--ink)" font-size="16" font-weight="700">↑ ' + yt + '</text>'; };
  KESIF.lessons["fiz-hareket"] = {
    id: "fiz-hareket", subject: "fiz", title: "Hız kamerası ve yolculuk: yol, süre, hız ve ivme", minutes: 25,
    grade: "9. sınıf Fizik, 3. ünite (Hareket ve Kuvvet), kazanım 9.3.1.2–9.3.1.5 (MEB–ÖSYM 2026 belgesindeki kod)",
    hook: "Bir araç 3 saatte 270 km gittiyse hep aynı hızla mı gitti?",
    steps: [
      { type: "text", title: "Yolculukta üç büyüklük",
        say: "Bir yolculukta üç şeyi ölçeriz: alınan yol, geçen süre ve hız. Hız, birim zamanda alınan yoldur.",
        html: `<p class="big">Bir yolculukta üç büyüklük birbirine bağlıdır: <b>yol</b> (x), <b>süre</b> (t) ve <b>hız</b> (v).</p>
<p>Hız, <b>birim sürede alınan yol</b>: <span class="math">v = x ÷ t</span>. Birimler: yol <b>m</b>, süre <b>s</b>, hız <b>m/s</b>. Günlük hayatta km/sa de kullanılır.</p>
<p class="callout">Sabit hızla giden bir araç için yol ile süre arasındaki ilişkiyi kendin keşfet: aşağıda hızı ve süreyi değiştir, konum–zaman grafiğine bak.</p>` },
      { type: "sim", title: "Hızı ve süreyi değiştir: konum–zaman grafiği",
        say: "Hız ve süre kaydırıcılarını değiştir. Grafikte yatay eksen süre, dikey eksen yol. Doğrunun eğimi hızı verir.",
        intro: "Kaydırıcılarla <b>hız (v)</b> ve <b>süre (t)</b>'yi değiştir. Grafikte <b>yatay eksen süre (s)</b>, <b>dikey eksen yol (m)</b>. Sabit hızda grafik düz bir doğru; <b>doğru ne kadar dik, hız o kadar büyük</b>.",
        cfg: { vb: "0 0 640 280", vars: [{ k: "v", label: "Hız v", min: 0, max: 30, step: 1, value: 10, unit: "m/s" }, { k: "t", label: "Süre t", min: 0, max: 20, step: 1, value: 8, unit: "s" }],
          out: [{ label: "Alınan yol x = v · t", fn: function (v) { return v.v + " × " + v.t + " = " + (v.v * v.t) + " m"; } }],
          svg: function (v) { var X = function (t) { return 70 + t * 27; }, Y = function (x) { return 240 - x * 0.333; }, h = AX("t (s)", "x (m)"); [5, 10, 15, 20].forEach(function (t) { h += '<text x="' + X(t) + '" y="258" text-anchor="middle" fill="var(--muted)" font-size="14">' + t + '</text>'; }); [200, 400, 600].forEach(function (x) { h += '<text x="62" y="' + (Y(x) + 5) + '" text-anchor="end" fill="var(--muted)" font-size="14">' + x + '</text><line x1="70" y1="' + Y(x) + '" x2="610" y2="' + Y(x) + '" stroke="var(--line)" stroke-dasharray="2 5"/>'; }); h += '<line x1="' + X(0) + '" y1="' + Y(0) + '" x2="' + X(20) + '" y2="' + Y(v.v * 20) + '" stroke="var(--accent)" stroke-opacity=".3" stroke-width="2"/><line x1="' + X(0) + '" y1="' + Y(0) + '" x2="' + X(v.t) + '" y2="' + Y(v.v * v.t) + '" stroke="var(--accent)" stroke-width="4"/><line x1="' + X(v.t) + '" y1="' + Y(v.v * v.t) + '" x2="' + X(v.t) + '" y2="240" stroke="var(--cyan)" stroke-dasharray="4 4"/><line x1="70" y1="' + Y(v.v * v.t) + '" x2="' + X(v.t) + '" y2="' + Y(v.v * v.t) + '" stroke="var(--cyan)" stroke-dasharray="4 4"/><circle cx="' + X(v.t) + '" cy="' + Y(v.v * v.t) + '" r="7" fill="var(--accent)"/>'; var px = X(v.t), py = Y(v.v * v.t), right = px > 470; h += '<text x="' + (right ? px - 12 : px + 12) + '" y="' + Math.max(18, py - 12) + '" text-anchor="' + (right ? 'end' : 'start') + '" fill="var(--accent)" font-size="16" font-weight="700">(t = ' + v.t + ' s, x = ' + (v.v * v.t) + ' m)</text>'; return h; } } },
      { type: "mcq", predict: true, q: "Sabit 10 m/s hızla giden bir araç 8 s'de kaç m yol alır?",
        opts: [
          { t: "80 m", ok: true, why: "x = v · t = 10 · 8 = 80 m. Grafikte t = 8 s'deki nokta 80 m'de." },
          { t: "18 m", why: "10 + 8 toplanmış; yol hızla süre çarpılarak bulunur." },
          { t: "1,25 m", why: "8 ÷ 10 gibi bir hata; hız ile süre çarpılır." },
          { t: "800 m", why: "Birim hatası ya da 10 kat fazla çarpma." }
        ], explain: "Düzgün hareket: x = v · t." },
      { type: "text", title: "Birim dönüşümü ve ortalama hız",
        say: "Kilometre bölü saati metre bölü saniyeye çevirmek için üç virgül altıya böleriz. Ortalama hız toplam yolun toplam zamana oranıdır.",
        html: `<ul class="body"><li><b>km/sa → m/s:</b> 3,6'ya böl. (72 km/sa = 20 m/s). <b>m/s → km/sa:</b> 3,6 ile çarp.</li><li>Yol ve süre farklı bölümlerde farklı hızlarla alınırsa <b>ortalama hız = toplam yol ÷ toplam süre</b> (hızların ortalaması değil).</li><li>Yer değiştirme başlangıç ve bitiş noktasına bağlıdır; <b>yol</b> ise izlenen yolun uzunluğu.</li></ul>
<p class="callout why"><b>Neden 3,6?</b> 1 km/sa = 1000 m ÷ 3600 s = 1 ÷ 3,6 m/s.</p>` },
      { type: "mcq", q: "72 km/sa hız kaç m/s'dir?", opts: [
          { t: "20 m/s", ok: true, why: "72 ÷ 3,6 = 20 m/s." },
          { t: "259,2 m/s", why: "3,6 ile çarpılmış; km/sa'ten m/s'ye bölünür." },
          { t: "7,2 m/s", why: "10'a bölünmüş; çevirme çarpanı 3,6." },
          { t: "72 m/s", why: "Birim değişmeden aynı sayı yazılmış." }
        ], explain: "km/sa ÷ 3,6 = m/s." },
      { type: "sim", title: "İvme: hız zamanla değişince",
        say: "İvme, hızın birim zamandaki değişimidir. İvmeyi ve süreyi değiştir; hız zaman grafiğine bak.",
        intro: "Durgun halden harekete geçen bir araç düşün. <b>İvme (a)</b> hızın her saniyede ne kadar arttığını söyler. Kaydırıcılarla a ve t'yi değiştir; <b>hız–zaman grafiği</b> bir doğru olur ve <b>eğimi ivmedir</b>.",
        cfg: { vb: "0 0 640 280", vars: [{ k: "a", label: "İvme a", min: 0, max: 6, step: 0.5, value: 3, unit: "m/s²" }, { k: "t", label: "Süre t", min: 0, max: 10, step: 1, value: 5, unit: "s" }],
          out: [{ label: "Son hız v = a · t", fn: function (v) { return (v.a * v.t + "").replace(".", ",") + " m/s"; } }, { label: "Alınan yol x = ½ · a · t²", fn: function (v) { return (Math.round(0.5 * v.a * v.t * v.t * 10) / 10 + "").replace(".", ",") + " m"; } }],
          svg: function (v) { var X = function (t) { return 70 + t * 54; }, Y = function (s) { return 240 - s * 3.3; }, h = AX("t (s)", "v (m/s)"); [2, 4, 6, 8, 10].forEach(function (t) { h += '<text x="' + X(t) + '" y="258" text-anchor="middle" fill="var(--muted)" font-size="14">' + t + '</text>'; }); [20, 40, 60].forEach(function (s) { h += '<text x="62" y="' + (Y(s) + 5) + '" text-anchor="end" fill="var(--muted)" font-size="14">' + s + '</text><line x1="70" y1="' + Y(s) + '" x2="610" y2="' + Y(s) + '" stroke="var(--line)" stroke-dasharray="2 5"/>'; }); h += '<line x1="' + X(0) + '" y1="' + Y(0) + '" x2="' + X(10) + '" y2="' + Y(v.a * 10) + '" stroke="var(--accent)" stroke-opacity=".3" stroke-width="2"/><line x1="' + X(0) + '" y1="' + Y(0) + '" x2="' + X(v.t) + '" y2="' + Y(v.a * v.t) + '" stroke="var(--accent)" stroke-width="4"/><circle cx="' + X(v.t) + '" cy="' + Y(v.a * v.t) + '" r="7" fill="var(--accent)"/>'; return h; } } },
      { type: "mcq", q: "Durgun halden harekete geçen bir araç 5 s'de 20 m/s hıza ulaşıyor. İvmesi kaç m/s²'dir?", opts: [
          { t: "4 m/s²", ok: true, why: "a = Δv ÷ t = 20 ÷ 5 = 4 m/s²." },
          { t: "100 m/s²", why: "Hız ile süre çarpılmış; ivme bölme ile bulunur." },
          { t: "0,25 m/s²", why: "Süre hıza bölünmüş; ters yazılmış." },
          { t: "15 m/s²", why: "Hız ile süre çıkarılmış; birimler uymuyor." }
        ], explain: "a = Δv ÷ Δt." },
      { type: "reflect", q: "Peki ya neden? Bir araç 5 s boyunca sabit ivmeyle hızlanırken hız artıyor; neden hız–zaman grafiği düz bir doğru olur?",
        hint: "Örnek düşünce: İvme sabit olduğundan her saniyede hız aynı miktar artar (örneğin her saniye 4 m/s). Aynı artışlarla ilerleyen büyüklüğün grafiği doğrudur; eğimi bu artış miktarı, yani ivmedir." },
      { type: "text", title: "Bugünün özeti",
        say: "Bugünkü keşif tamamlandı. Hız yol bölü zamandır. Sabit hızda konum zaman grafiği doğrudur ve eğimi hızdır. İvme hızın birim zamandaki değişimidir.",
        html: `<ul class="body"><li><b>v = x ÷ t</b>; sabit hızda konum–zaman grafiği doğru, <b>eğim = hız</b>.</li><li>km/sa ÷ 3,6 = m/s.</li><li>Ortalama hız = toplam yol ÷ toplam süre.</li><li><b>a = Δv ÷ Δt</b>; hız–zaman grafiğinin eğimi ivmedir.</li></ul><p class="callout">Sorularda önce <b>birimleri</b> aynı sisteme getir (m, s, m/s).</p>` }
    ]
  };
})();
