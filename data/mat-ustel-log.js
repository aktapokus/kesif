/* Matematik keşfi: Üstel fonksiyon ve logaritma — logaritma "kaçıncı üs?" sorusudur. Özgün içerik (CC BY-NC-SA 4.0). */
KESIF.lessons["mat-ustel-log"] = {
  id: "mat-ustel-log", subject: "mat", title: "Bakteri çoğalıyor: üstel büyüme ve logaritma", minutes: 25,
  grade: "11. sınıf — MEB Maarif programında 'Nicelikler ve Değişimler' teması kapsamında; kazanım kodu ve metni resmî programdan doğrulanacak",
  hook: "Her saat ikiye katlanan bir şey ne kadar sürede bir milyona ulaşır?",
  steps: [
    { type: "text", title: "Her saat ikiye katlanan bakteri",
      say: "Bir kaba tek bir bakteri koyuyoruz. Her saat sonunda sayıları ikiye katlanıyor. Kaç saat sonra bir milyonu aşarlar?",
      html: `<p class="big">Bir bakteri her saat <b>ikiye katlanıyor</b>.</p>
<table class="tbl" style="max-width:420px"><thead><tr><th>Saat</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>10</th></tr></thead><tbody><tr><td>Bakteri</td><td>1</td><td>2</td><td>4</td><td>8</td><td>16</td><td>1024</td></tr></tbody></table>
<p>Her satır bir öncekinin <b>2 katı</b>: eklemek değil, <b>çarpmak</b>. Bu yüzden büyüme önce yavaş görünür, sonra patlar.</p>
<p class="callout">İki soru var: (1) <i>t</i> saat sonra kaç bakteri olur? (2) Bakteri sayısı bir milyonu geçsin: <i>kaç saat</i> beklemeliyiz? Birincisi <b>üstel fonksiyon</b>, ikincisi <b>logaritma</b>.</p>` },

    { type: "expo", title: "Tabanı değiştir, eğriye bak",
      say: "Kaydırıcıyla taban a'yı değiştir. a üzeri x eğrisinin nasıl değiştiğini izle. Tabloda x'in farklı değerleri için değerler var.",
      intro: "Kaydırıcı <b>tabanı (a)</b> değiştiriyor. Eğri <b>y = a<sup>x</sup></b>. Tabanı 1'in altına ve üstüne al; tablodaki sıfır sütununa (x = 0) özellikle bak.",
      cfg: { inverse: false, snaps: [0.5, 2, 3], start: 2 } },

    { type: "mcq", predict: true, q: "Hangi nokta, tabanı ne olursa olsun (a > 0, a ≠ 1) y = aˣ eğrilerinin hepsinden geçer?",
      opts: [
        { t: "(0, 1)", ok: true, why: "Tabloda x = 0 sütunu her tabanda 1 çıktı. Kaydırıcıyı nereye çekersen çek eğri aynı noktadan geçiyor." },
        { t: "(1, 0)", why: "x = 1'de değer tabanın kendisi (a¹ = a); tabana göre değişiyor. Üstel eğri y = 0'a hiç değmez." },
        { t: "(0, 0)", why: "Üstel eğri x eksenine yaklaşır ama onu asla kesmez: aˣ hiçbir zaman 0 olmaz." },
        { t: "(1, 1)", why: "(1, 1) yalnızca a = 1 için geçerli olurdu; a = 1 ise eğri düz bir çizgi. Diğer tabanlar için x = 1'de y = a." }
      ],
      explain: "Ortak nokta (0, 1). Peki neden a⁰ = 1? Sıradaki adımda bir örüntüden bulacağız." },

    { type: "mcq", predict: true, q: "0 < a < 1 iken (örneğin a = 1/2) x büyüdükçe y = aˣ ne yapar?",
      opts: [
        { t: "Azalır ama hiçbir zaman 0 olmaz", ok: true, why: "(1/2)ˣ: 1, 1/2, 1/4, 1/8… Her adımda yarıya iniyor; küçülüyor ama 0'a ulaşmıyor." },
        { t: "Artar", why: "Artış için taban 1'den büyük olmalı. 1/2 ile çarpmak değeri küçültür." },
        { t: "Sabit kalır", why: "Sabit kalan taban 1'dir (1ˣ = 1). 1/2 ile çarpmak değeri değiştiriyor." },
        { t: "Bir süre sonra negatif olur", why: "Pozitif bir sayıyı 1/2 ile çarpmak hep pozitif sonuç verir; aˣ (a > 0) hiç negatif olmaz." }
      ],
      explain: "a > 1: üstel büyüme. 0 < a < 1: üstel azalma (örneğin ilacın kandaki miktarı)." },

    { type: "text", title: "Neden a⁰ = 1 ve neden a⁻ⁿ = 1/aⁿ? Örüntü söylüyor",
      say: "İki üzeri üç sekiz, iki üzeri iki dört, iki üzeri bir iki. Her adım geri giderken ikiye bölünüyor. Bu yüzden iki üzeri sıfır bir, iki üzeri eksi bir bir bölü iki olmalı.",
      html: `<table class="tbl" style="max-width:520px"><tbody>
<tr><td>2³</td><td>= 8</td></tr><tr><td>2²</td><td>= 4 &nbsp;<span class="muted small">(8 ÷ 2)</span></td></tr>
<tr><td>2¹</td><td>= 2 &nbsp;<span class="muted small">(4 ÷ 2)</span></td></tr>
<tr><td><b>2⁰</b></td><td>= <b>1</b> &nbsp;<span class="muted small">(2 ÷ 2)</span></td></tr>
<tr><td><b>2⁻¹</b></td><td>= <b>1/2</b> &nbsp;<span class="muted small">(1 ÷ 2)</span></td></tr>
<tr><td><b>2⁻²</b></td><td>= <b>1/4</b></td></tr></tbody></table>
<p>Üs <b>1 azaldıkça</b> değer <b>a'ya bölünüyor</b>. Bu örüntü bozulmasın diye <b>a⁰ = 1</b> ve <b>a⁻ⁿ = 1/aⁿ</b> olmak zorunda.</p>
<p class="callout why"><b>Neden böyle?</b> Bu bir keyfî tanım değil: üs kuralı <span class="math">aᵐ · aⁿ = aᵐ⁺ⁿ</span>'in bozulmaması için tek seçenek. Örneğin a⁰ · a³ = a³ ise a⁰ = 1 olmak zorunda.</p>` },

    { type: "mcq", q: "3⁻² kaçtır?",
      opts: [
        { t: "1/9", ok: true, why: "3⁻² = 1/3² = 1/9. Negatif üs, tersini almak demek." },
        { t: "−9", why: "Negatif üs sonucu negatif yapmaz; tersini alır. 3⁻² pozitiftir." },
        { t: "−6", why: "3 · (−2) yapılmış. Üs, çarpan değil, kaç kez çarpıldığını söyler." },
        { t: "1/6", why: "3² yerine 3·2 = 6 alınmış. Üs 2 demek 3 · 3 demek, 3 · 2 değil." }
      ],
      explain: "Önce işareti değil işlemi düşün: negatif üs → ters çevir, pozitif üs gibi hesapla." },

    { type: "text", title: "Soruyu ters çevir: logaritma = 'kaçıncı üs?'",
      say: "Üstel fonksiyon, üssü verilince sonucu bulur. Logaritma tersini yapar: sonuç verilince üssü bulur. İki üzeri kaç sekiz eder? Üç. Bunu iki tabanında log sekiz eşittir üç diye yazarız.",
      html: `<p class="big">İki üzeri <b>kaç</b> 8 eder?</p>
<p class="big math">2<sup>?</sup> = 8 &nbsp;⟹&nbsp; ? = 3 &nbsp;⟹&nbsp; log₂ 8 = 3</p>
<ul class="body"><li><b>logₐ b</b> = "a'yı <b>kaçıncı üssüne</b> çıkarırsam b olur?"</li>
<li>log₂ 8 = 3 ⟺ 2³ = 8 &nbsp;(aynı bilgi, iki yazılış)</li>
<li>Bakteri sorumuz: 2ᵗ ≥ 1.000.000 olması için t ≈ log₂ 1.000.000 ≈ 20 saat.</li></ul>
<p class="callout why"><b>Neden böyle?</b> Logaritma yeni bir işlem değil: üstel fonksiyonun <i>ters sorusu</i>. Toplama için çıkarma, çarpma için bölme ne ise, üs alma için logaritma o.</p>` },

    { type: "expo", title: "Ayna: üstel ve logaritma aynı hikâye",
      say: "Şimdi hem a üzeri x eğrisini hem de logaritma eğrisini görüyorsun. İkisi y eşittir x doğrusuna göre birbirinin ayna görüntüsü.",
      intro: "Sarı eğri <b>y = aˣ</b>, mavi eğri <b>y = logₐ x</b>. Kesikli doğru <b>y = x</b>. Tabanı değiştir: iki eğri her zaman bu doğruya göre <b>ayna görüntüsü</b>. Sarı eğrinin (0, 1) noktası, mavi eğride <b>(1, 0)</b> olarak karşına çıkıyor.",
      cfg: { inverse: true, snaps: [0.5, 2, 3], start: 2 } },

    { type: "mcq", predict: true, q: "Aynada (0, 1) noktası (1, 0) oluyorsa logₐ 1 kaçtır?",
      opts: [
        { t: "0", ok: true, why: "Aynadaki (1, 0) noktası: x = 1 iken y = 0. Yani logₐ 1 = 0: a'yı 0 üssüne çıkarınca 1 olur (a⁰ = 1)." },
        { t: "1", why: "logₐ a = 1 (a'yı 1. üsse çıkarınca a olur). Burada sorulan 1'in logaritması, a'nın değil." },
        { t: "a", why: "Logaritmanın sonucu bir üs; tabanın kendisi değil." },
        { t: "Tanımsız", why: "Tanımsız olan logₐ 0 ve logₐ (negatif sayı) ifadeleridir. 1'in logaritması her tabanda tanımlı." }
      ],
      explain: "Her tabanda logₐ 1 = 0 çünkü a⁰ = 1." },

    { type: "mcq", q: "log₂ 32 kaçtır?",
      opts: [
        { t: "5", ok: true, why: "2⁵ = 32. İki'yi 5 kez çarpınca 32 oluyor." },
        { t: "16", why: "32 ÷ 2 yapılmış. Logaritma bölmek değil, üssü sorar." },
        { t: "6", why: "2⁶ = 64. Bir üs fazla alınmış; 2'yi sırayla çarp: 2, 4, 8, 16, 32 — beşinci." },
        { t: "4", why: "2⁴ = 16. Bir üs eksik kalmış." }
      ],
      explain: "Sorunu tersine çevir: 2 üzeri kaç = 32?" },

    { type: "mcq", q: "log₃ (1/9) kaçtır?",
      opts: [
        { t: "−2", ok: true, why: "3⁻² = 1/9 olduğundan log₃ (1/9) = −2. Üs negatif olabilir; 1'den küçük sayılar negatif üs ister." },
        { t: "2", why: "3² = 9, 1/9 değil. 1/9 için ters çevirmek gerekir: üs negatif." },
        { t: "−3", why: "3⁻³ = 1/27. Bir üs fazla." },
        { t: "1/2", why: "3^(1/2) = √3. 1/9 ile ilgisi yok." }
      ],
      explain: "x < 1 ise (x > 0) log negatif, x > 1 ise pozitif (a > 1 için)." },

    { type: "text", title: "Çarpmayı toplamaya çeviren araç",
      say: "Üsler çarpılırken toplanır. Bu yüzden iki sayının çarpımının logaritması, logaritmalarının toplamıdır.",
      html: `<p>2² · 2³ = 2⁵ &nbsp;(üsler <b>toplanıyor</b>: 2 + 3 = 5). Aynı bilgiyi logaritmayla yazalım:</p>
<p class="big math">log₂ 4 + log₂ 8 = log₂ 32 &nbsp;&nbsp;(2 + 3 = 5)</p>
<p>Genel olarak: <span class="math">logₐ (m · n) = logₐ m + logₐ n</span> ve <span class="math">logₐ (m ÷ n) = logₐ m − logₐ n</span>.</p>
<p class="callout why"><b>Neden önemli?</b> Çarpma ve bölme, toplama ve çıkarmaya dönüşüyor. Depremde Richter ölçeği, ses şiddetinde desibel, asitlikte pH: çok büyük aralıklı niceliklerin ölçeğini küçültmek için logaritma kullanılır. (Ölçeklerin tam tanımı derse göre değişir; fikir aynıdır.)</p>` },

    { type: "mcq", q: "log₂ 4 + log₂ 8 kaçtır?",
      opts: [
        { t: "5", ok: true, why: "log₂ 4 = 2, log₂ 8 = 3; toplam 5. (= log₂ 32)" },
        { t: "6", why: "2 · 3 yapılmış. Logaritmalar toplanır; çarpımı ise içteki sayılar verir (4 · 8)." },
        { t: "12", why: "4 + 8 yapılmış: logaritmanın içindeki sayılar toplanmaz, logaritmaların kendileri toplanır." },
        { t: "log₂ 12", why: "log₂ (4 + 8) yazmışsın. Kural 'çarpım ↔ toplam': log₂ 4 + log₂ 8 = log₂ (4 · 8)." }
      ],
      explain: "Toplamı çarpıma çevir: log₂ 4 + log₂ 8 = log₂ 32 = 5." },

    { type: "reflect", q: "Peki ya neden? logₐ 0 ve negatif sayıların logaritması neden yok? Üstel eğrinin grafiğini hatırlayarak yaz.",
      hint: "Örnek düşünce: aˣ (a > 0) her zaman pozitif; hiçbir üs, sonucu 0 ya da negatif yapmıyor. Logaritma bu ters soruyu cevaplıyor: 'a kaçıncı üs b eder?' b 0 ya da negatifse böyle bir üs yok. Aynada da görünür: aˣ eğrisi x eksenine hiç değmez; ayna görüntüsü olan log eğrisi de y eksenine yaklaşır ama onu geçmez." },

    { type: "reflect", q: "Kendi cümlenle yaz: Hayatta üstel büyüme ya da üstel azalma nerede olabilir? Bir örnek ver ve 'her adımda neyle çarpılıyor?' sorusunu cevapla.",
      hint: "Örnek düşünce: bakteri çoğalması (her saat 2 ile çarpılıyor), faiz (her yıl 1 + faiz oranı ile), ilacın kandaki miktarı (her saat 0 ile 1 arasında bir sayı ile), bir haberin yayılması. Ortak: her adımda toplamayla değil, sabit bir sayıyla çarpma. Gerçek hayatta bu büyüme sonsuza dek sürmez (besin biter, nüfus doyar); model belli bir aralıkta geçerlidir." },

    { type: "text", title: "Bugünün özeti",
      say: "Bugünkü keşif tamamlandı. Üstel fonksiyon her adımda sabit bir sayıyla çarpar. Bütün üstel eğriler sıfır virgül bir noktasından geçer. Logaritma, kaçıncı üs sorusudur. Üstel ve logaritma eğrileri y eşittir x doğrusuna göre birbirinin aynadaki görüntüsüdür.",
      html: `<ul class="body"><li><b>aˣ</b>: her adımda <b>a ile çarpma</b>. a > 1 büyüme, 0 < a < 1 azalma.</li>
<li>Her taban için <b>(0, 1)</b> ortak nokta: <b>a⁰ = 1</b>, <b>a⁻ⁿ = 1/aⁿ</b> (örüntüden).</li>
<li><b>logₐ b</b> = "a kaçıncı üs b eder?" Logaritma = <b>ters soru</b>.</li>
<li>Eğriler <b>y = x</b>'e göre ayna: (0, 1) ↔ (1, 0) ⇒ <b>logₐ 1 = 0</b>.</li>
<li><b>logₐ (m·n) = logₐ m + logₐ n</b>: çarpma ↔ toplama.</li>
<li>Logaritma yalnızca <b>pozitif</b> sayılar için tanımlı.</li></ul>
<p class="callout">Hız değil bakış: logaritma gördüğünde "kaçıncı üs?" diye sorarsan formül aklına bir daha takılmaz.</p>` }
  ]
};
