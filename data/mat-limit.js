/* Matematik keşfi: Limit — "yaklaşmak" ile "ulaşmak" farkı. Özgün içerik (CC BY-NC-SA 4.0). */
KESIF.lessons["mat-limit"] = {
  id: "mat-limit", subject: "mat", title: "Limit: yaklaşırken ne oluyor?", minutes: 25,
  grade: "12. sınıf / AYT (11. sınıf için ön keşif) — Maarif kazanım eşlemesi doğrulanacak",
  hook: "Hız kamerası 'tam şu anki' hızı nasıl bilir?",
  steps: [
    { type: "text", title: "Hız kamerası sana neyi saklıyor?",
      say: "Bir araç, t saniyede t kare metre yol alıyor. Üçüncü saniyedeki hızı bulmak istiyoruz. Hız, yol bölü süredir. Ama tam üçüncü saniye bir andır; süre sıfır, yol sıfır. Sıfır bölü sıfır nasıl hesaplanır? Hız kameraları iki ölçüm arasındaki süreyi küçülterek bu sorunu çözer.",
      html: `<p class="big">Bir araç, <span class="math">t</span> saniyede <span class="math">t²</span> metre yol alıyor.</p>
<p>3. saniyedeki <b>tam o anki hızı</b> bilmek istiyoruz. Hız = yol ÷ süre. Ama "tam o an" bir <i>an</i>dır: geçen süre 0, alınan yol 0.</p>
<p class="callout">0 ÷ 0 hesaplanamaz. Peki yol kenarındaki hız kamerası neden yine de bir hız söyleyebiliyor?</p>
<svg viewBox="0 0 640 150" role="img" aria-label="Yolda iki noktada araç: 3. saniye ve 3 artı h saniye" style="width:100%;height:auto;background:var(--card2);border-radius:12px">
 <line x1="20" y1="100" x2="620" y2="100" stroke="var(--muted)" stroke-width="3"/>
 <g font-size="34" text-anchor="middle"><text x="140" y="92">🚗</text><text x="400" y="92">🚗</text></g>
 <line x1="140" y1="108" x2="140" y2="124" stroke="var(--accent)" stroke-width="3"/><line x1="400" y1="108" x2="400" y2="124" stroke="var(--accent)" stroke-width="3"/>
 <text x="140" y="144" text-anchor="middle" fill="var(--ink)" font-size="16">t = 3</text><text x="400" y="144" text-anchor="middle" fill="var(--ink)" font-size="16">t = 3 + h</text>
 <path d="M146 40 H394" stroke="var(--cyan)" stroke-width="3" marker-end="url(#a)"/><defs><marker id="a" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0L8 4L0 8z" fill="var(--cyan)"/></marker></defs>
 <text x="270" y="30" text-anchor="middle" fill="var(--cyan)" font-size="16">ölçüm aralığı h</text></svg>
<p class="muted small" style="margin-top:10px">İpucu: kamera iki nokta arasını ölçer. Aralığı küçültürsek ne olur?</p>` },

    { type: "explorer", id: "hiz", title: "Aralığı küçült, ortalama hıza bak",
      say: "Kaydırıcıyla ölçüm aralığı h'yi küçült. Ortalama hızın hangi sayıya yaklaştığını izle.",
      intro: "<b>Ne yapıyoruz?</b> Arabanın hızını, 3. saniyeden <b>h saniye sonrasına</b> kadar ölçüyoruz (h = ölçüm aralığı). <b>Kaydırıcıyı sağa çek:</b> h küçülür. Grafikte yatay eksen h, dikey eksen o aralıktaki <b>ortalama hız</b>. Sarı nokta eğri üstünde sola kayarken <b>tabloya</b> bak: sayılar hangi değere yaklaşıyor?",
      cfg: { varName: "h", xTitle: "h: ölçüm aralığı (sn)", yTitle: "ortalama hız (m/s)", sliderLabel: "Ölçüm aralığı h  (sağa çek: aralık küçülsün)", a: 0, sides: ["right"], f: h => ((3 + h) * (3 + h) - 9) / h, L: 6, xmin: -1, xmax: 1.5, ymin: 4, ymax: 8,
             fLabel: "ortalama hız", unit: "m/s", dmax: 1 } },

    { type: "mcq", predict: true, q: "h sıfıra çok çok yaklaşırken ortalama hız hangi sayıya yaklaşıyor?",
      opts: [
        { t: "6", ok: true, why: "Tablodaki değerler 6,1 → 6,01 → 6,001 diye 6'ya sokuluyor. Bu sayıya 'limit' diyoruz." },
        { t: "0", why: "Süre sıfıra gidiyor ama yol da sıfıra gidiyor. İkisinin oranı 0 olmak zorunda değil; oran ayrı bir sayıya oturuyor." },
        { t: "Hesaplanamaz, bu yüzden bir cevap yok", why: "h = 0 olduğu anda işlem gerçekten tanımsız. Ama sorduğumuz şey h = 0 değil, h → 0. Yaklaşırken değerler düzenli bir yere gidiyor." },
        { t: "7", why: "7, h = 1 iken (3'ten 4'e) bulduğumuz ilk ölçüm. Aralığı küçülttükçe değer değişti." }
      ],
      explain: "Önemli fikir: h = 0 yasak. Ama h'yi 0'a istediğimiz kadar yaklaştırabiliriz ve sonuç tek bir sayıya gidiyor." },

    { type: "text", title: "Limit: ulaşmak değil, yaklaşmak",
      say: "Limit şunu söyler: x, bir a sayısına yaklaşırken fonksiyon hangi değere yaklaşıyor? Kritik nokta: x tam a olmak zorunda değil. Fonksiyonun orada tanımsız olması limiti bozmaz.",
      html: `<p class="big">Limit şu soruyu sorar: <span class="math">x</span>, <span class="math">a</span>'ya <i>yaklaşırken</i> <span class="math">f(x)</span> nereye gidiyor?</p>
<p class="callout why"><b>Neden böyle?</b> Gerçek hayatta "tam o an" ölçemeyiz; hep küçük bir aralıktan ölçeriz. Limit, aralık daraldıkça ölçümün nereye oturduğunu söyler. Anlık hız, eğim, birim zamandaki değişim… hepsi bu fikrin üstüne kurulu.</p>
<p>Üç şeyi ayır: <b>f(a)</b> (fonksiyonun orada ne yaptığı), <b>soldan limit</b>, <b>sağdan limit</b>. Limit varsa iki taraf aynı yere gider.</p>` },

    { type: "explorer", id: "delik", title: "Haritada bir delik: f(x) = (x² − 4) ÷ (x − 2)",
      say: "Şimdi x'i 2'ye soldan ve sağdan yaklaştır. x tam 2 olduğunda fonksiyon tanımsız, ama etrafında ne oluyor?",
      intro: "Bu eğride x = 2 noktasında <b>bir boşluk</b> var: orada f(x) hesaplanamıyor (0 ÷ 0). Ama boşluğa <b>çok yaklaşırsan</b> eğri nereye gidiyor? <b>Kaydırıcıyı sağa çek</b>, sarı nokta boşluğa yaklaşsın; <b>Soldan</b> ve <b>Sağdan</b> düğmeleriyle iki yönü de dene. Tablodaki f(x) sayılarına bak.",
      cfg: { varName: "x", xTitle: "x", yTitle: "f(x)", sliderLabel: "Boşluğa uzaklık  (sağa çek: boşluğa yaklaş)", a: 2, sides: ["left", "right"], f: x => (x * x - 4) / (x - 2), L: 4, xmin: -1, xmax: 5, ymin: 0, ymax: 7, fLabel: "f(x)", unit: "", dmax: 1 } },

    { type: "text", title: "Delik yolu değiştirmez — sadeleştirme",
      say: "x iki değilken, x kare eksi dört, x eksi iki çarpı x artı iki olarak yazılır. Sadeleşince f(x) eşittir x artı iki olur. x ikiye yaklaşırken bu dörde yaklaşır.",
      html: `<p class="big math">(x² − 4) ÷ (x − 2) = (x − 2)(x + 2) ÷ (x − 2) = x + 2 &nbsp;&nbsp;(x ≠ 2)</p>
<p>x, 2'ye <b>yaklaşırken</b> x ≠ 2'dir; yani sadeleştirme serbest. Geriye <span class="math">x + 2</span> kalır ve o da 4'e gider.</p>
<p class="callout why"><b>Neden işe yarıyor?</b> Limit, "x tam a" anını sormaz, a'nın <i>çevresini</i> sorar. Çevrede fonksiyon düz bir doğru gibi davranıyor; tek eksik nokta orada.</p>
<p class="callout">Sınav alışkanlığı: önce yerine koy. <b>0 ÷ 0</b> çıkarsa dur — bu bir cevap değil, "bir adım daha işlem yap" uyarısı (çarpanlara ayır, sadeleştir, eşleniğiyle çarp).</p>` },

    { type: "mcq", q: "lim (x→3) (x² − 9) ÷ (x − 3) kaçtır?",
      opts: [
        { t: "6", ok: true, why: "x² − 9 = (x−3)(x+3). Sadeleşince x + 3 kalır; x → 3 iken 6." },
        { t: "0", why: "Payda 0 olduğu için pay da 0 gibi görünüyor ve '0' demek cazip. Ama 0 ÷ 0 bir değer değil; sadeleştirmeden bir şey söylenemez." },
        { t: "Limit yoktur çünkü payda 0", why: "Payda 0'a gidiyor ama pay da gidiyor ve sadeleşiyor. 'Payda 0 ise limit yok' kuralı her zaman doğru değil; önce sadeleşip sadeleşmediğine bak." },
        { t: "9", why: "9, x² − 9'daki sabit. Sadeleştirmeyi atlayıp bir sayı seçilmiş gibi duruyor." }
      ],
      explain: "Yöntem: yerine koy → 0/0 çıktı → çarpanlara ayır → sadeleştir → tekrar yerine koy." },

    { type: "mcq", q: "f(x) = x + 1 (x < 1 için), f(x) = 5 − x (x ≥ 1 için). lim (x→1) f(x) için hangisi doğrudur?",
      opts: [
        { t: "Limit yoktur: soldan 2'ye, sağdan 4'e gider", ok: true, why: "Soldan x+1 → 2. Sağdan 5−x → 4. İki taraf farklı yere gidiyorsa limit yoktur." },
        { t: "4", why: "f(1) = 4. Ama limit, f(1)'e değil yaklaşma yönlerine bakar. Soldan gelen değerleri unutmuşsun." },
        { t: "2", why: "Sadece soldan gelen kola bakmışsın. Limit için iki taraf da kontrol edilir." },
        { t: "3", why: "İki sayının ortalaması (2 ile 4 → 3) bir limit değil. Yaklaşılan iki yer farklıysa 'ortası' diye bir şey söz konusu değil." }
      ],
      explain: "Limitin varlığı için: soldan limit = sağdan limit. f(1)'in değeri bu karşılaştırmada rol oynamaz." },

    { type: "mcq", q: "lim (x→−2) (x² + x − 2) ÷ (x + 2) kaçtır?",
      opts: [
        { t: "−3", ok: true, why: "x² + x − 2 = (x+2)(x−1). Sadeleşince x − 1 kalır; x → −2 iken −3." },
        { t: "3", why: "x yerine −2 değil +2 koyulmuş gibi: işaret hatası. x → −2 olduğunu not alıp koyarken parantez kullan: (−2) − 1." },
        { t: "0", why: "Pay −2'de 0 oluyor ama payda da 0. 0 ÷ 0 için 'sonuç 0' demek yanlış; sadeleştirmeden önce hiçbir şey söylenemez." },
        { t: "Tanımsız", why: "f(−2) tanımsız, evet. Ama soru f(−2)'yi değil limiti soruyor; limit −3 olarak var." }
      ],
      explain: "Çarpanlara ayırırken ipucu: payda (x+2) var, o halde payın da (x+2) çarpanı olması bekleniyor. Bunu hedef alarak ayır." },

    { type: "explorer", id: "bir-bolu-x", title: "Peki ya neden? Bu yöntem her zaman işe yarar mı?",
      say: "Şimdi f(x) eşittir bir bölü x fonksiyonunu inceleyelim. x sıfıra soldan ve sağdan yaklaşırken ne oluyor?",
      intro: "Sorgulayalım: payda 0'a gidince hep sadeleşip güzel bir sayı çıkar mı? <b>f(x) = 1 ÷ x</b> ile x → 0'ı dene, hem soldan hem sağdan.",
      cfg: { varName: "x", a: 0, sides: ["left", "right"], f: x => 1 / x, xmin: -3, xmax: 3, ymin: -8, ymax: 8, fLabel: "f(x)", unit: "", dmax: 1 } },

    { type: "reflect", q: "Gözlemin ne? Neden bu sefer sadeleşen bir şey yok ve limit neden 'bir sayı' olmuyor?",
      hint: "Örnek düşünce: Soldan değerler eksi sonsuza, sağdan artı sonsuza gidiyor. Hiçbir sayıya oturmuyorlar ve iki taraf da farklı yönde. Bu yüzden limit (bir sayı olarak) yok. Demek ki 'payda 0 → limit yok' her zaman yanlış, 'payda 0 → hep sayı çıkar' da her zaman yanlış: önce pay ile paydanın birlikte davranışına bakılır." },

    { type: "reflect", q: "Kendi cümlenle yaz: Limit gerçek hayatta ne işe yarar? Bir örnek ver.",
      hint: "Örnek düşünce: Limit, 'tam o an' ölçemediğimiz şeyleri küçülen aralıklarla yakalamamızı sağlar: anlık hız, bir eğrinin teğet eğimi, bir ilacın kandaki değişim hızı, bir köprünün anlık yükü. Bugün öğrendiğin fikir, ileride türevin tanımı olacak." },

    { type: "text", title: "Bugünün özeti",
      say: "Bugünkü keşif tamamlandı. Limit, yaklaşırken ne olduğunu sorar. Sıfır bölü sıfır bir cevap değil, bir uyarıdır. Soldan ve sağdan limit aynıysa limit vardır.",
      html: `<ul class="body"><li>Limit = <b>yaklaşırken</b> değer nereye gidiyor? (Ulaşmak şart değil.)</li>
<li><b>0 ÷ 0</b> bir cevap değil, "devam et" uyarısı.</li>
<li>Limit varsa <b>soldan = sağdan</b>.</li>
<li>Her yöntemin bir sınırı var: <b>1 ÷ x</b> örneği.</li></ul>
<p class="callout">Bu dersin amacı hız değil, bakış. Sınav hızı, bu bakış oturduktan sonra tekrarla gelir. Günlük sorulara geçmek için ana sayfaya dön.</p>` }
  ]
};
