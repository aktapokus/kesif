/* Matematik keşfi (11. sınıf, 1. Tema 1.1): İki niceliksel değişkenli veriler. Özgün içerik (CC BY-NC-SA 4.0).
   Tüm veri kümeleri ÖĞRETİM İÇİN UYDURULMUŞ örneklerdir; gerçek ölçüm değildir. */
(function () {
  var D = {
    dondurma: { title: "Sıcaklık ↔ dondurma", xt: "hava sıcaklığı (°C)", yt: "günlük dondurma satışı (adet)",
      x: [14, 17, 20, 22, 25, 28, 31, 34], y: [42, 55, 70, 78, 96, 110, 128, 140], note: "Örnek (uydurma) veri: bir tezgâhın 8 günü." },
    ekran: { title: "Ekran süresi ↔ uyku", xt: "günlük ekran süresi (saat)", yt: "uyku süresi (saat)",
      x: [1, 2, 3, 4, 5, 6, 7, 8], y: [9.0, 8.8, 8.3, 8.0, 7.4, 7.1, 6.6, 6.2], note: "Örnek (uydurma) veri: 8 öğrenci." },
    ayakkabi: { title: "Ayakkabı no ↔ not", xt: "ayakkabı numarası", yt: "matematik notu",
      x: [36, 37, 38, 39, 40, 41, 42, 43], y: [62, 81, 55, 90, 70, 58, 85, 66], note: "Örnek (uydurma) veri: 8 öğrenci." },
    hiz: { title: "Hız ↔ yakıt", xt: "araç hızı (km/sa)", yt: "yakıt tüketimi (L/100 km)",
      x: [30, 50, 70, 90, 110, 130, 150], y: [10.5, 7.6, 6.2, 5.9, 6.2, 7.6, 10.5], note: "Örnek (uydurma) veri: ilişki güçlü ama doğru biçimde değil (U biçimi)." },
    yuzme: { title: "Dondurma ↔ yüzme kazası", xt: "günlük dondurma satışı (adet)", yt: "plajda günlük yüzme kazası sayısı",
      x: [42, 55, 70, 78, 96, 110, 128, 140], y: [1, 1, 2, 2, 3, 4, 5, 6], note: "Örnek (uydurma) veri: aynı 8 gün." }
  };
  function pick() { return Array.prototype.map.call(arguments, function (k) { return D[k]; }); }
  KESIF.lessons["mat-iki-degisken"] = {
    id: "mat-iki-degisken", subject: "mat", title: "Sıcak hava, çok dondurma: iki değişken arasındaki ilişki", minutes: 25,
    grade: "11. sınıf — 1. Tema, 1.1 İki niceliksel değişkenli veriler (MEB 11. sınıf ders kitabı içindekiler); kazanım kodu resmî programdan doğrulanacak",
    hook: "Dondurma satışı ile hava sıcaklığı arasında bir ilişki var mı, varsa ne kadar güçlü?",
    steps: [
      { type: "text", title: "Her gün için iki sayı",
        say: "Bir dondurma tezgâhı her gün iki şeyi not ediyor: hava sıcaklığını ve o gün sattığı dondurma sayısını. Her gün iki sayıdan oluşan bir çift. İki sayı arasında bir ilişki var mı?",
        html: `<p class="big">Bir tezgâh her gün iki şeyi not ediyor: <b>hava sıcaklığı</b> ve <b>satılan dondurma sayısı</b>.</p>
<table class="tbl" style="max-width:520px"><thead><tr><th>Gün</th><th>Sıcaklık (°C)</th><th>Satış (adet)</th></tr></thead><tbody><tr><td>1</td><td>14</td><td>42</td></tr><tr><td>2</td><td>20</td><td>70</td></tr><tr><td>3</td><td>28</td><td>110</td></tr><tr><td>4</td><td>34</td><td>140</td></tr></tbody></table>
<p>Her gün için <b>iki sayılık bir çift</b> var: (sıcaklık, satış). Buna <b>iki niceliksel değişkenli veri</b> diyoruz: iki sayısal özellik, aynı gözlem.</p>
<p class="callout">Tabloya bakınca "sıcaklık arttıkça satış da artıyor" gibi görünüyor. Peki bunu <b>bir bakışta</b> görmenin ve <b>ne kadar güçlü</b> olduğunu söylemenin yolu var mı? Her çifti haritada bir <b>nokta</b> yaparsak olur.</p>` },

      { type: "scatter", title: "Her gün bir nokta: saçılım grafiği",
        say: "Her çift, yatay eksende sıcaklık, dikey eksende satış olacak şekilde bir nokta. Üç farklı veri kümesine bak ve eğilim doğrusunu aç.",
        intro: "Her nokta <b>bir gözlemi</b> gösteriyor: yatay eksen ilk değişken, dikey eksen ikinci değişken. Üstteki düğmelerle üç veri kümesini gez. <b>Eğilim doğrusunu göster</b> kutusunu işaretle. <b>r</b> değeri, noktaların bir doğrunun çevresinde ne kadar toplandığını söyler (−1 ile 1 arası).",
        cfg: { sets: pick("dondurma", "ekran", "ayakkabi") } },

      { type: "mcq", predict: true, q: "Ekran süresi arttıkça uyku süresi (örnek veride) nasıl değişiyor?",
        opts: [
          { t: "Azalıyor: noktalar sağa gittikçe aşağı iniyor (ters yönlü ilişki)", ok: true, why: "Nokta bulutu soldan sağa doğru aşağı iniyor, r negatif. Buna ters yönlü (negatif) ilişki denir." },
          { t: "Artıyor: noktalar sağa gittikçe yukarı çıkıyor", why: "Yükselen bulut dondurma örneğiydi. Ekran–uyku bulutu aşağı iniyor." },
          { t: "Hiç değişmiyor: ilişki yok", why: "İlişkisiz veri ayakkabı–not kümesiydi; orada nokta bulutu dağınıktı. Ekran–uyku noktaları belirgin bir doğru boyunca diziliyor." },
          { t: "Ekran süresi uykuyu kesinlikle azaltıyor", why: "Grafik yalnızca birlikte değiştiklerini gösterir; sebep olduğunu kanıtlamaz. Başka etkenler olabilir." }
        ],
        explain: "Yön: aşağı iniyorsa negatif, yukarı çıkıyorsa pozitif. 'Birlikte değişmek' ile 'sebep olmak' ayrı şeylerdir (birazdan göreceğiz)." },

      { type: "text", title: "Bir saçılım grafiğini nasıl okurum?",
        say: "Saçılım grafiğinde üç şeye bak: yön, güç ve biçim. Yön, noktaların yukarı mı aşağı mı gittiği. Güç, noktaların bir çizgi etrafında ne kadar toplandığı. Biçim, çizgi mi eğri mi.",
        html: `<ul class="body"><li><b>Yön:</b> sağa gittikçe yukarı → <b>pozitif</b> (aynı yönlü); aşağı → <b>negatif</b> (ters yönlü); belirgin eğilim yok → ilişki yok.</li>
<li><b>Güç:</b> noktalar bir doğrunun çevresinde ne kadar sıkışık? Sıkışıksa güçlü, dağınıksa zayıf.</li>
<li><b>Biçim:</b> doğru gibi mi (doğrusal) yoksa bir eğri gibi mi?</li></ul>
<p><b>Doğrusal ilişki katsayısı r</b> güçlü ve yönü tek sayıda özetler:</p>
<ul class="body"><li><b>r ≈ 1</b>: güçlü pozitif doğrusal &nbsp; <b>r ≈ −1</b>: güçlü negatif doğrusal &nbsp; <b>r ≈ 0</b>: doğrusal ilişki yok denecek kadar zayıf.</li>
<li>r hep <b>−1 ile 1 arasında</b> kalır; 1,3 gibi bir değer olamaz.</li></ul>
<p><b>Eğilim doğrusu</b> noktaların arasından geçen "en uygun" doğrudur. Denklemi y = a·x + b ise <b>a</b>, x'in 1 birim artışında y'nin tahmini değişimidir.</p>
<p class="callout why"><b>Neden böyle?</b> Gözle "güçlü gibi duruyor" demek kişiden kişiye değişir. r bu yargıyı ölçülebilir kılar; eğilim doğrusu ise gelecekteki bir gün için <b>tahmin</b> yapmamızı sağlar.</p>` },

      { type: "scatter", title: "r her şeyi anlatır mı? Tek bir nokta ve eğri ilişki",
        say: "Şimdi son noktayı yukarı aşağı oynat. Bir tek nokta r değerini ne kadar değiştiriyor? Sonra hız ve yakıt verisine bak: ilişki güçlü ama doğru değil, r ne diyor?",
        intro: "Kırmızı halkalı <b>son noktayı</b> kaydırıcıyla oynat: tek bir nokta <b>r</b>'yi ne kadar oynatıyor? Sonra <b>Hız ↔ yakıt</b> kümesine geç: noktalar bir U çiziyor. İlişki <i>var</i> ama doğru değil; <b>r</b> ne söylüyor?",
        cfg: { sets: pick("dondurma", "hiz", "ayakkabi"), outlier: true } },

      { type: "mcq", predict: true, q: "Hız–yakıt verisinde noktalar belirgin bir U eğrisi çiziyor ama r değeri sıfıra yakın çıkıyor. Bu ne demek?",
        opts: [
          { t: "Doğrusal ilişki yok, ama başka türden (eğri) bir ilişki var", ok: true, why: "r yalnızca doğrusal ilişkiyi ölçer. U biçimi doğru değil; sol yarı aşağı, sağ yarı yukarı gittiği için birbirini götürür." },
          { t: "Hız ile yakıt arasında hiçbir ilişki yoktur", why: "Bulut belirgin bir desen çiziyor; ilişki var ama doğrusal değil. r ≈ 0 'ilişki yok' demek değil, 'doğrusal ilişki yok' demek." },
          { t: "Veri yanlış toplanmıştır", why: "Veri gayet düzenli. Sorun veride değil, r'nin yalnızca doğrusal ilişkiyi görmesinde." },
          { t: "Hız arttıkça yakıt tüketimi hep artar", why: "Önce azalıp sonra artıyor (U); 'hep artar' yanlış." }
        ],
        explain: "Her zaman önce saçılım grafiğine bak, sonra r'ye. r tek başına yanıltabilir." },

      { type: "mcq", q: "Bir eğilim doğrusunun denklemi y = 5x − 28 (x: sıcaklık °C, y: günlük satış). 30 °C için tahmin edilen satış kaçtır?",
        opts: [
          { t: "122", ok: true, why: "y = 5·30 − 28 = 150 − 28 = 122." },
          { t: "150", why: "5·30 = 150'yi bulup −28'i unutmuşsun." },
          { t: "178", why: "−28 yerine +28 işlemi yapılmış." },
          { t: "30", why: "x'in kendisi yazılmış; denklemde y'yi bulmak için x yerine koymak gerekiyor." }
        ],
        explain: "Tahmin = x'i denklemde yerine koy." },

      { type: "mcq", q: "Aynı doğruya göre 0 °C için tahmin y = 5·0 − 28 = −28 çıkıyor (satış −28 adet!). Bu sonuç ne anlatıyor?",
        opts: [
          { t: "Doğru yalnızca verinin ölçüldüğü aralık (14–34 °C) için güvenilir; dışına taşınca anlamsız sonuç çıkabilir", ok: true, why: "Satış negatif olamaz. Eğilim doğrusu elimizdeki aralığı özetler; çok dışına çıkmak (dış tahmin) tehlikelidir." },
          { t: "0 °C'de gerçekten dondurma iade ediliyordur", why: "Negatif satış gerçek bir olay değil; modelin sınırının dışında kalmanın işareti." },
          { t: "Doğrunun denklemi yanlış yazılmıştır", why: "Denklem veri aralığı içinde gayet iyi çalışıyor. Sorun, aralığın dışında kullanılması." },
          { t: "Sıcaklık ile satış arasında ilişki yoktur", why: "İlişki aralık içinde güçlü; 0 °C'deki saçma sonuç ilişkiyi yok etmez, kapsamı sınırlar." }
        ],
        explain: "Tahmin yaparken veri aralığının içinde kal; dışına çıkmak varsayım ister." },

      { type: "text", title: "Birlikte artmak, sebep olmak demek midir?",
        say: "Dondurma satışı ve plajdaki yüzme kazaları aynı günlerde birlikte artıyor. Dondurma yemek kazaya mı yol açıyor? Büyük ihtimalle üçüncü bir etken var: sıcak hava.",
        html: `<p>Az önce sıcaklık ile dondurma satışı güçlü pozitif ilişkiliydi. Şimdi aynı 8 günde <b>plajdaki yüzme kazası sayısına</b> bakalım.</p>
<p class="callout">Kazalar dondurma satışıyla birlikte artıyor. Peki <b>dondurma yemek kazaya sebep oluyor</b> mu?</p>
<p>Büyük ihtimalle hayır. Sıcak günlerde <b>hem</b> dondurma satışı artıyor <b>hem</b> daha çok kişi denize giriyor, dolayısıyla kaza sayısı artıyor. Dondurmayı da kazaları da artıran <b>üçüncü bir etken</b> var: <b>sıcak hava</b>.</p>
<p class="callout why"><b>Neden önemli?</b> r büyük çıkınca "biri diğerine sebep oluyor" demek <i>kanıt değildir</i>. Haberlerde "X yapanlarda Y daha yüksek" cümlesini gördüğünde sorulacak soru: <b>ikisini birden etkileyen başka bir şey olabilir mi?</b></p>` },

      { type: "scatter", title: "Dondurma ve kaza: ilişki var, sebep başka",
        say: "Dondurma satışı ve yüzme kazası kümesini aç. r büyük mü? Peki dondurma kazaya mı yol açıyor?",
        intro: "<b>Dondurma ↔ yüzme kazası</b> kümesini aç: noktalar çok düzenli, r yüksek. Yine de sebep dondurma değil. Sonra <b>Sıcaklık ↔ dondurma</b> kümesiyle karşılaştır.",
        cfg: { sets: pick("yuzme", "dondurma", "ekran") } },

      { type: "mcq", q: "Bir şehirde yaz aylarında hem boğulma vakaları hem de klima satışları artıyor. En makul açıklama hangisidir?",
        opts: [
          { t: "Sıcak hava hem klima satışını hem denize girme (dolayısıyla boğulma) sayısını artırıyor olabilir", ok: true, why: "Ortak neden (sıcaklık) iki değişkeni birden artırıyor: ilişki var ama biri ötekinin sebebi değil." },
          { t: "Klima satın almak boğulmalara yol açıyor", why: "Klima ile boğulma arasında doğrudan bir neden-sonuç mekanizması yok." },
          { t: "Boğulmalar arttığı için insanlar klima alıyor", why: "Ters yön de mantıksız; klima satışı bu yüzden artmaz." },
          { t: "İlişki yoktur, veriler tesadüfen birlikte artmıştır", why: "İkisi mevsimle birlikte düzenli artıyor; ilişki var, yalnızca nedeni doğrudan değil." }
        ],
        explain: "Ortak neden (karıştırıcı değişken): iki değişkenin birlikte değişmesini sağlayan üçüncü etken." },

      { type: "reflect", q: "Peki ya neden? Bir saçılım grafiğinde r = 0,95 çıkıyor. Bu, 'x'i artırırsam y mutlaka artar' demek midir? Kendi cümlenle açıkla.",
        hint: "Örnek düşünce: Hayır. r = 0,95, x ve y'nin bu verilerde birlikte ve yaklaşık bir doğru boyunca değiştiğini söyler. x'i kendim artırdığımda y'nin artacağını (sebep-sonuç) söylemez; ortak bir üçüncü etken olabilir. Üstelik r, veri aralığının dışı için de bir garanti vermez." },

      { type: "reflect", q: "Kendi hayatından iki niceliksel değişken seç (örneğin ders çalışma süresi ve deneme notu). Sence ilişkinin yönü ne olur? Sebebin ortak bir etken olabileceği bir örnek de ver.",
        hint: "Örnek düşünce: Günlük çalışma süresi ve deneme neti büyük ihtimalle pozitif ilişkili olur. Ama ilişki doğrusal sürmez: gece geç saate kadar çalışıp uykusuz kalınca net düşebilir (U ters biçimi). Ortak etken örneği: 'çok kitabı olan öğrencilerin notları yüksek' → sebep kitap sayısı değil, evdeki çalışma ortamı ve motivasyon olabilir." },

      { type: "text", title: "Bugünün özeti",
        say: "Bugünkü keşif tamamlandı. İki niceliksel değişkenli veride her gözlem bir noktadır. Saçılım grafiğinde yön, güç ve biçime bakılır. r doğrusal ilişkiyi ölçer ve eksi bir ile bir arasındadır. Birlikte değişmek sebep olmak demek değildir.",
        html: `<ul class="body"><li>Her gözlem = bir <b>nokta</b> (x, y): <b>saçılım grafiği</b>.</li>
<li>Oku: <b>yön</b> (pozitif/negatif), <b>güç</b> (sıkışık/dağınık), <b>biçim</b> (doğru/eğri).</li>
<li><b>r</b>: doğrusal ilişkinin gücü ve yönü, −1 ≤ r ≤ 1. r ≈ 0 "doğrusal ilişki yok" demektir, "ilişki yok" değil.</li>
<li><b>Eğilim doğrusu</b> y = a·x + b ile tahmin; <b>veri aralığının dışına çıkma</b>.</li>
<li>Tek bir uç nokta r'yi oynatabilir.</li>
<li><b>İlişki ≠ sebep</b>: üçüncü bir etken ikisini birden etkiliyor olabilir.</li></ul>
<p class="callout">Hız değil bakış: bir grafik ya da "araştırmalara göre…" cümlesi gördüğünde önce <b>noktalara</b>, sonra <b>sebebe</b> bak.</p>` }
    ]
  };
})();
