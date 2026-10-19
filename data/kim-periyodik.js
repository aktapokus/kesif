/* Kimya keşfi (9. sınıf 2. ünite): Periyodik sistem ve katman elektron dağılımı — kazanım 9.2.3.1–9.2.3.3. Özgün içerik (CC BY-NC-SA 4.0). İlk 18 element. */
(function () {
  var EL = ["H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar"];
  var AD = ["Hidrojen", "Helyum", "Lityum", "Berilyum", "Bor", "Karbon", "Azot", "Oksijen", "Flor", "Neon", "Sodyum", "Magnezyum", "Alüminyum", "Silisyum", "Fosfor", "Kükürt", "Klor", "Argon"];
  function dag(z) { var cap = [2, 8, 8], r = z, o = []; for (var i = 0; i < 3 && r > 0; i++) { var k = Math.min(cap[i], r); o.push(k); r -= k; } return o; }
  function grup(z) { var d = dag(z), e = d[d.length - 1]; return z === 2 ? "8A" : e + "A"; }
  KESIF.lessons["kim-periyodik"] = {
    id: "kim-periyodik", subject: "kim", title: "Elementlerin adresi: katmanlar, periyot ve grup", minutes: 20,
    grade: "9. sınıf Kimya, 2. ünite, kazanım 9.2.3.1–9.2.3.3 (periyodik sistem); MEB–ÖSYM 2026 belgesindeki kod. İlk 18 element.",
    hook: "Bir elementin periyodik sistemdeki yerini elektronlarına bakarak bulabilir misin?",
    steps: [
      { type: "text", title: "Atomun adresi: elektron katmanları",
        say: "Elektronlar çekirdeğin etrafında katmanlarda bulunur. Birinci katman en fazla iki, ikinci katman en fazla sekiz elektron alır. Periyot katman sayısını, grup dış katmandaki elektron sayısını gösterir.",
        html: `<p class="big">Elektronlar çekirdeğin çevresinde <b>katmanlarda</b> bulunur. İlk 18 elementte katmanların alabileceği en fazla elektron: <b>2, 8, 8</b>.</p>
<ul class="body"><li><b>Periyot</b> (yatay sıra) = <b>katman sayısı</b>.</li><li><b>A grubu</b> (düşey sütun) = <b>dış katmandaki elektron sayısı</b> (He ve soy gazlar 8A).</li></ul>
<p class="callout">Kaydırıcıyla atom numarasını (elektron sayısını) değiştir ve katmanların nasıl dolduğunu izle.</p>` },
      { type: "sim", title: "Atom numarasını değiştir: elektronlar katmanlara yerleşiyor",
        say: "Atom numarasını artır. Elektronlar önce birinci katmanı, sonra ikinci katmanı doldurur. Katman sayısı periyodu, dış katmandaki elektron sayısı grubu verir.",
        intro: "<b>Atom numarası</b> (Z) elementin proton ve nötr atomda elektron sayısıdır. Kaydırıcıyı çek: elektronlar katmanlara <b>2, 8, 8</b> sırasıyla yerleşir. Altta <b>periyot</b> ve <b>grup</b> görünür.",
        cfg: { vb: "0 0 640 290", vars: [{ k: "z", label: "Atom numarası Z", min: 1, max: 18, step: 1, value: 11 }],
          out: [{ label: "Element", fn: function (v) { return EL[v.z - 1] + " (" + AD[v.z - 1] + ")"; } }, { label: "Katman elektron dağılımı", fn: function (v) { return dag(v.z).join(", "); } }, { label: "Periyot (katman sayısı)", fn: function (v) { return dag(v.z).length + ". periyot"; } }, { label: "Grup (dış katman elektronu)", fn: function (v) { return grup(v.z) + " grubu"; } }],
          svg: function (v) {
            var cx = 320, cy = 145, d = dag(v.z), R = [38, 75, 112], h = '';
            for (var i = 2; i >= 0; i--) h += '<circle cx="' + cx + '" cy="' + cy + '" r="' + R[i] + '" fill="none" stroke="' + (i < d.length ? "var(--muted)" : "var(--line)") + '" stroke-width="' + (i < d.length ? 2 : 1) + '" stroke-dasharray="' + (i < d.length ? "" : "3 6") + '"/>';
            h += '<circle cx="' + cx + '" cy="' + cy + '" r="22" fill="var(--accent)"/><text x="' + cx + '" y="' + (cy + 6) + '" text-anchor="middle" fill="var(--accent-ink)" font-size="17" font-weight="800">' + EL[v.z - 1] + '</text>';
            d.forEach(function (n, i) { for (var k = 0; k < n; k++) { var a = -Math.PI / 2 + 2 * Math.PI * k / n + i * 0.4; h += '<circle cx="' + (cx + R[i] * Math.cos(a)).toFixed(1) + '" cy="' + (cy + R[i] * Math.sin(a)).toFixed(1) + '" r="7" fill="' + (i === d.length - 1 ? "var(--cyan)" : "var(--ink)") + '"/>'; } });
            h += '<text x="20" y="30" fill="var(--ink)" font-size="16" font-weight="700">Mavi: dış katman (değerlik) elektronları</text>';
            return h; } } },
      { type: "mcq", predict: true, q: "Atom numarası 11 olan sodyumun (Na) katman elektron dağılımı ve periyot–grup bilgisi hangisidir?",
        opts: [
          { t: "2, 8, 1 → 3. periyot, 1A grubu", ok: true, why: "11 elektron: 2 + 8 + 1. Üç katman (3. periyot), dış katmanda 1 elektron (1A)." },
          { t: "2, 8, 1 → 1. periyot, 3A grubu", why: "Periyot katman sayısı (3), grup dış elektron sayısı (1); ikisi yer değiştirmiş." },
          { t: "2, 9 → 2. periyot, 1A grubu", why: "İkinci katman en fazla 8 elektron alır; 9 olamaz." },
          { t: "11 → 1. periyot, 1A grubu", why: "Elektronlar katmanlara 2, 8, … sırasıyla dağılır." }
        ], explain: "Elektronları 2, 8, 8 sırasıyla yerleştir; sonra periyot ve grubu oku." },
      { type: "text", title: "Periyodik özellik: soldan sağa ne değişir?",
        say: "Aynı periyotta soldan sağa gidildikçe çekirdek yükü artar ve atom yarıçapı küçülür. Aynı grupta yukarıdan aşağıya katman sayısı arttığı için yarıçap büyür.",
        html: `<ul class="body"><li><b>Aynı periyotta soldan sağa:</b> katman sayısı sabit, çekirdek yükü artar → elektronlar daha çok çekilir → <b>atom yarıçapı küçülür</b>.</li><li><b>Aynı grupta yukarıdan aşağı:</b> katman sayısı artar → <b>atom yarıçapı büyür</b>.</li><li>Aynı gruptaki elementlerin <b>dış katman elektron sayısı aynı</b>, bu yüzden kimyasal özellikleri benzer.</li></ul>` },
      { type: "mcq", q: "Aşağıdakilerden hangisinin atom yarıçapı en küçüktür? (Na, Mg, Al, Si — aynı periyot)", opts: [
          { t: "Si", ok: true, why: "Aynı periyotta soldan sağa atom yarıçapı küçülür; Si en sağdadır." },
          { t: "Na", why: "Na en solda; yarıçapı en büyük." },
          { t: "Mg", why: "Na'dan küçük ama Al ve Si'den büyük." },
          { t: "Al", why: "Si'den büyük." }
        ], explain: "Periyotta soldan sağa atom yarıçapı azalır." },
      { type: "reflect", q: "Peki ya neden? Aynı grupta yukarıdan aşağı inildikçe atom yarıçapı neden büyür?",
        hint: "Örnek düşünce: Yukarıdan aşağı inildikçe katman sayısı artar; yeni bir katman eklenince dış elektronlar çekirdekten daha uzakta bulunur ve atom büyür." },
      { type: "text", title: "Bugünün özeti",
        say: "Bugünkü keşif tamamlandı. Periyot katman sayısı, grup dış katman elektron sayısıdır. Periyotta soldan sağa atom yarıçapı küçülür.",
        html: `<ul class="body"><li>Katmanlar: <b>2, 8, 8</b> (ilk 18 element).</li><li><b>Periyot = katman sayısı</b>; <b>A grubu = dış katman elektronu</b> (He: 8A).</li><li>Periyotta soldan sağa atom yarıçapı <b>azalır</b>; grupta yukarıdan aşağı <b>artar</b>.</li></ul>` }
    ]
  };
})();
