/* 11. sınıf Fizik, 1. Ünite: Kuvvet ve Hareket — Serbest düşme (FİZ.11.1.1, FİZ.11.1.2). Maarif: tümevarımsal akıl yürütme + kanıt kullanma.
   Standart: docs/DERS-STANDARDI.md. Özgün içerik (CC BY-NC-SA 4.0). g = 10 m/s² alınır (hesap kolaylığı; programda g sabit kabul edilir, hava direnci ihmal edilir). Terminoloji: programın isteğine uygun olarak 'düşey/yatay/eğik atış' adları kullanılmaz. */
(function () {
  KESIF.lessons["fiz11-serbest-dusme"] = {
    id: "fiz11-serbest-dusme", subject: "fiz", title: "Serbest düşme: her şey aynı hızla mı düşer?", minutes: 25,
    grade: "11. sınıf Fizik, 1. Ünite Kuvvet ve Hareket, FİZ.11.1.1–11.1.2 (Maarif: tümevarımsal akıl yürütme, kanıt kullanma)",
    hook: "Tüy ve çekiç aynı anda bırakılırsa hangisi önce yere varır?",
    steps: [
      { type: "mcq", predict: true, q: "Havası tamamen boşaltılmış bir tüpte demir bir bilye ile bir tüy aynı yükseklikten aynı anda bırakılıyor. Hangisi önce dibe varır?",
        opts: [
          { t: "İkisi aynı anda varır.", ok: true, why: "Havanın direnci yok; ikisine de yalnızca yer çekimi etki ediyor ve ikisi de aynı ivmeyle düşüyor. (1971'de Ay'da, havasız ortamda, bir çekiç ile bir tüy aynı anda yere düştü.)" },
          { t: "Demir bilye önce varır.", why: "Günlük hayatta böyle görünür çünkü hava tüye karşı direnç uygular. Havası alınmış tüpte bu fark ortadan kalkar." },
          { t: "Tüy önce varır.", why: "Tüyün kütlesi daha küçük; küçük kütle daha hızlı düşmez." }
        ],
        explain: "Günlük hayattaki farkın nedeni havadır. Havayı çıkarınca ne olduğunu, bu derste ölçümlerle kendimiz çıkaracağız." },

      { type: "text", title: "Önce üç kavramı hatırlayalım",
        say: "Hız, bir cismin her saniyede kaç metre gittiğidir. İvme, hızın her saniyede ne kadar arttığıdır. Serbest düşmede ivme yaklaşık on metre bölü saniye karedir.",
        html: `<div class="grid"><div class="card"><h3>Hız (v)</h3><p class="small">Her saniyede kaç metre gidiyor? <b>20 m/s</b> = her saniye 20 m.</p></div>
<div class="card"><h3>İvme (a)</h3><p class="small">Hız her saniyede <b>ne kadar artıyor</b>? <b>10 m/s²</b> = her saniye hız 10 m/s artıyor.</p></div>
<div class="card pick"><h3>Serbest düşme</h3><p class="small">Yalnızca <b>yer çekimi</b> etkisinde, <b>ilk hızsız</b> bırakılan cismin hareketi. Hava direnci ihmal edilir.</p></div></div>
<p class="callout why" style="margin-top:12px"><b>Yer çekimi ivmesi g ≈ 10 m/s².</b> (Gerçek değeri yaklaşık 9,8'dir. Sorularda g çoğunlukla verilir; bu derste hesabı kolaylaştırmak için 10 alıyoruz.) Anlamı: serbest düşen cismin hızı <b>her saniye 10 m/s artar</b>: 1 s'de 10, 2 s'de 20, 3 s'de 30 m/s.</p>` },

      { type: "sim", title: "Cismi bırak, her saniyede nerede olduğuna bak",
        say: "Süreyi değiştir. Cismin düştüğü yüksekliğe ve hızına bak. Her saniyede alınan yol artıyor mu?",
        intro: "Cisim <b>durgun</b> bırakılıyor. Süre kaydırıcısıyla her saniyede cismin <b>nerede olduğuna</b> bak. Soluk toplar önceki saniyelerdeki konumları gösteriyor. Cetvel üzerindeki mavi kutu şu anki düşme yüksekliğini veriyor.",
        cfg: { vb: "0 0 640 300", vars: [{ k: "t", label: "Süre t", min: 0, max: 4, step: 1, value: 2, unit: "s" }],
          out: [{ label: "Hız v = g · t", fn: function (v) { return "10 × " + v.t + " = " + (10 * v.t) + " m/s"; } }, { label: "Düşülen yol h", fn: function (v) { return (5 * v.t * v.t) + " m"; } }],
          svg: function (v) {
            var Y = function (h) { return 24 + h * 3; }, h = '<line x1="120" y1="' + Y(0) + '" x2="120" y2="' + Y(80) + '" stroke="var(--muted)"/>';
            [0, 20, 40, 60, 80].forEach(function (m) { h += '<line x1="114" y1="' + Y(m) + '" x2="126" y2="' + Y(m) + '" stroke="var(--muted)"/><text x="108" y="' + (Y(m) + 5) + '" text-anchor="end" fill="var(--muted)" font-size="14">' + m + '</text>'; });
            h += '<text x="120" y="14" text-anchor="middle" fill="var(--ink)" font-size="15" font-weight="700">↓ yükseklik h (m)</text>';
            for (var s = 0; s <= 4; s++) { var hh = 5 * s * s, on = s <= v.t, ly = 52 + s * 52; h += '<line x1="262" y1="' + Y(hh) + '" x2="330" y2="' + (ly - 5) + '" stroke="var(--muted)" stroke-width="1" opacity="' + (on ? 0.7 : 0.2) + '"/><circle cx="250" cy="' + Y(hh) + '" r="' + (s === v.t ? 12 : 8) + '" fill="' + (s === v.t ? "var(--accent)" : "var(--card)") + '" stroke="var(--accent)" stroke-width="' + (s === v.t ? 0 : 2) + '" opacity="' + (on ? 1 : 0.25) + '"/><text x="338" y="' + ly + '" fill="var(--ink)" font-size="17" font-weight="' + (s === v.t ? 700 : 400) + '" opacity="' + (on ? 1 : 0.35) + '">t = ' + s + ' s → ' + hh + ' m</text>'; }
            var py = Y(5 * v.t * v.t); h += '<line x1="120" y1="' + py + '" x2="238" y2="' + py + '" stroke="var(--cyan)" stroke-dasharray="4 4"/><rect x="2" y="' + (py - 11) + '" width="54" height="22" rx="7" fill="var(--accent)"/><text x="29" y="' + (py + 5) + '" text-anchor="middle" fill="var(--accent-ink)" font-size="15" font-weight="700">' + (5 * v.t * v.t) + ' m</text>';
            return h; } } },

      { type: "mcq", predict: true, q: "Tabloya bak: 1 s'de 5 m, 2 s'de 20 m, 3 s'de 45 m düşülmüş. Bu düzene göre 4 s'de kaç m düşülür?",
        opts: [
          { t: "80 m", ok: true, why: "Süreyi kendisiyle çarpıp 5 ile çarp: 1·1·5 = 5, 2·2·5 = 20, 3·3·5 = 45, 4·4·5 = 80. Aynı düzen devam ediyor." },
          { t: "65 m", why: "Yol her saniye 5 m artıyor sanılmış (45 + 20). Oysa artışın kendisi büyüyor: 15, 25, 35." },
          { t: "60 m", why: "Her saniye 15 m ekleniyor sanılmış (45 + 15). Artışlar da değişiyor: 15, 25, 35." },
          { t: "180 m", why: "45 × 4 yapılmış; bu düzen çarpmayla değil süre karesiyle büyüyor." }
        ],
        explain: "Veriden düzeni kendin buldun: yol = 5 × (süre)². Bunun nedenini ve formülünü şimdi çıkaracağız." },

      { type: "text", title: "Neden süre karesi? Neden ½?",
        say: "Hız artarken ortalama hız başlangıç ve son hızın ortalamasıdır. Yol, ortalama hız çarpı süredir. Bu yüzden yarım g t kare çıkar.",
        html: `<ol class="body"><li><b>Hız artıyor:</b> v = g·t. Başlangıçta hız 0, t anında g·t.</li><li><b>Ortalama hız</b> bu ikisinin ortasıdır: (0 + g·t) ÷ 2 = <b>g·t ÷ 2</b>.</li><li><b>Yol = ortalama hız × süre</b> = (g·t ÷ 2) · t = <b>½ · g · t²</b></li></ol>
<p class="callout why">g = 10 yazarsak <b>h = 5·t²</b>. Tablodaki düzenin nedeni bu: 5·1², 5·2², 5·3², 5·4².<br><b>Ardışık saniyelerde alınan yollar:</b> 5, 15, 25, 35 m (oran 1 : 3 : 5 : 7). Hız arttığı için her saniye bir öncekinden daha çok yol alınır.</p>` },

      { type: "mcq", q: "Serbest düşen bir cisim 3 s sonra kaç m/s hıza ulaşır? (g = 10 m/s²)",
        opts: [
          { t: "30 m/s", ok: true, why: "v = g·t = 10 × 3 = 30 m/s. Her saniye hız 10 m/s artar." },
          { t: "45 m/s", why: "Bu 3 s'de düşülen yol (½·10·3² = 45 m), hız değil." },
          { t: "13 m/s", why: "10 + 3 toplanmış; hız ivme ile süre çarpılarak bulunur." },
          { t: "3,3 m/s", why: "10 ÷ 3 yapılmış; bölme değil çarpma gerekir." }
        ], explain: "v = g·t. Yol ve hızı karıştırmamak için birime bak: m mi, m/s mi?" },

      { type: "mcq", q: "Bir bina çatısından ilk hızsız bırakılan taş 45 m yüksekliği kaç saniyede düşer? (g = 10 m/s²)",
        opts: [
          { t: "3 s", ok: true, why: "h = ½·g·t² → 45 = 5·t² → t² = 9 → t = 3 s." },
          { t: "9 s", why: "t² = 9 bulunup karekök alınmamış." },
          { t: "4,5 s", why: "45 ÷ 10 yapılmış; formülde süre karesi var." },
          { t: "22,5 s", why: "45 ÷ 2 yapılmış; ½ ile g birlikte 5 eder, 45 ÷ 5 = 9 = t²." }
        ], explain: "Basamaklar: formülü yaz, sayıları yerine koy, t²'yi bul, karekök al." },

      { type: "text", title: "Üç yaygın tuzak",
        say: "Ağır cisim daha hızlı düşer sanmak, yarım unutmak ve yol ile hızı karıştırmak.",
        html: `<div class="grid"><div class="card"><h3>1. "Ağır olan önce düşer"</h3><p class="small">Havasız ortamda ivme kütleye bağlı değil. Günlük farkı <b>hava direnci</b> yapar.</p></div>
<div class="card"><h3>2. ½ unutmak</h3><p class="small">h = <b>½</b>·g·t². "g·t²" yazarsan yol iki katı çıkar.</p></div>
<div class="card pick"><h3>3. Hız mı, yol mu?</h3><p class="small">v = g·t (<b>m/s</b>), h = ½·g·t² (<b>m</b>). Birim hangisini istediğini söyler.</p></div></div>` },

      { type: "mcq", q: "Bir öğrenci 'ağır cisimler hafiflerden daha hızlı düşer' savını sınamak istiyor. Hangi gözlem bu savı çürütür?",
        opts: [
          { t: "Havası boşaltılmış bir ortamda farklı kütleli iki cismin aynı anda yere varması.", ok: true, why: "Hava direnci ortadan kalktığında kütle farkı düşme süresini değiştirmiyor; bu da savın genel olarak yanlış olduğunu gösteren kanıttır." },
          { t: "Bir kağıt parçasının taştan geç düşmesi.", why: "Bu gözlem hava direncini de içerir; kütle farkının mı hava farkının mı sonucu olduğunu ayıramaz." },
          { t: "Taşın kağıttan daha ağır olması.", why: "Bu bir veri değil, savın kendisine dair bir bilgi; savı sınamaz." },
          { t: "Bir tüyün havada salınarak düşmesi.", why: "Yine hava direncinin etkisini gösterir; kütle ile ilgisi ayrılamaz." }
        ], explain: "Kanıt kullanırken değişkenleri ayırmak gerekir: yalnızca kütle değişsin, hava durumu aynı kalsın." },

      { type: "reflect", q: "Peki ya neden? Havasız ortamda ağır cisme daha büyük çekim kuvveti etki ediyor, yine de ikisi aynı ivmeyle düşüyor. Sence bu nasıl olabilir?",
        hint: "Örnek düşünce: Ağır cisme daha büyük kuvvet etki eder ama aynı zamanda hareket ettirilmesi de daha zordur (kütlesi büyüktür). Kuvvet de kütle de aynı oranda büyüdüğü için ivme (kuvvet ÷ kütle) değişmez. Bunu Newton'ın ikinci yasası dersinde formülle göstereceğiz." },

      { type: "text", title: "Özet ve sınavda ne işe yarar",
        say: "Serbest düşmede ivme yer çekimi ivmesidir ve yaklaşık on metre bölü saniye karedir. Hız g çarpı t, yol yarım g t karedir.",
        html: `<ul class="body"><li>Serbest düşme: yalnız yer çekimi, ilk hız 0, hava direnci yok.</li><li><b>v = g·t</b> ve <b>h = ½·g·t²</b> (g = 10 m/s²).</li><li>Ardışık saniyelerde yollar <b>1 : 3 : 5 : 7</b> oranında.</li><li>Ağırlık düşme süresini değiştirmez (hava yoksa).</li></ul>
<p class="callout">Sınavda şöyle görürsün: "Bir cisim h yüksekliğinden bırakılıyor; süresi, hızı ya da son saniyedeki yolu soruluyor." Önce hangi büyüklüğü istediğine bak: v mi, h mi, t mi.</p>` }
    ]
  };
})();
