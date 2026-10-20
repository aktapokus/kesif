# Doğrulama isteği

Sen bir lise öğretmeni ve sınav hazırlık uzmanısın. Aşağıdaki içerik 11./12. sınıf öğrencileri için yazıldı (MEB Maarif müfredatı, TYT/AYT). Her öğe için ŞUNLARI KONTROL ET:
1. İşaretli (✔) cevap gerçekten tek doğru cevap mı? Diğer seçenekler kesin yanlış mı?
2. Çözüm adımları ve açıklamalar bilimsel/matematiksel/dilsel olarak doğru mu?
3. Tarih, isim, formül, birim gibi olgular doğru mu?
4. Dil çocuğa uygun, açık ve kafa karıştırmayan mı? (Ders için ayrıca: merak uyandırıyor mu, sade mi?)

CEVAP BİÇİMİ (yalnızca JSON döndür, dosya olarak kaydet):
```json
{ "model": "<senin model adın>", "tarih": "<bugün>", "sonuclar": { "<id>": { "d": "ok" }, "<id>": { "d": "duzelt", "not": "ne yanlış ve doğrusu ne" }, "<id>": { "d": "sil", "not": "neden" } } }
```
Her öğe için bir sonuç yaz. Emin değilsen "duzelt" yaz ve belirsizliği açıkla; "ok" yalnızca emin olduğun durumlarda.

---
### ders:mat-limit — Limit: yaklaşırken ne oluyor? [mat] (12. sınıf / AYT konusu (MEB 11. sınıf matematik kitabında yok; ön keşif) — Maarif kazanım eşlemesi doğrulanacak)
Kanca: Hız kamerası 'tam şu anki' hızı nasıl bilir?
- Adım 1 (text): Hız kamerası sana neyi saklıyor?
  - Anlatım: Bir araç, t saniyede t² metre yol alıyor. Üçüncü saniyedeki hızı bulmak istiyoruz. Hız, yol bölü süredir. Ama tam üçüncü saniye bir andır; süre sıfır, yol sıfır. Sıfır bölü sıfır nasıl hesaplanır? Hız kameraları iki ölçüm arasındaki süreyi küçülterek bu sorunu çözer.
  - İçerik: Bir araç duruyor ve hareket ediyor: başladığından t saniye sonra toplam t² metre yol yapmış oluyor. Geçen süre t (s) Toplam yol (m) 1 1 2 4 3 9 4 16 Hız nedir? Birim sürede alınan yol: hız = alınan yol ÷ geçen süre . Örneğin 3. saniyeden 4. saniyeye: yol 16 − 9 = 7 m , süre 1 s → ortalama hız 7 m/s . Bu hesabı harflerle yazalım. t = 3 s anından Δt sonrasına bakıyoruz (Δt = ölçüm aralığı). Alınan yol = (t = 3 + Δt anındaki toplam yol) − (t = 3 anındaki toplam yol); geçen süre = Δt. Toplam yola s(t) dersek: ortalama hız = (s(3+Δt) − s(3)) ÷ Δt Yeni bir kural değil; "alınan yol ÷ geçen süre"nin harfli yazılışı. Δt = 1 için (16 − 9) ÷ 1 = 7. Ama bizim istediğimiz tam o anki hız . "Tam o an" bir an dır: geçen süre 0, alınan yol da 0. 0 ÷ 0 hesaplanamaz. Peki yol kenarındaki hız kamerası neden yine de bir hız söyleyebiliyor? 🚗 🚗 t = 3 t = 3 + Δt ölçüm aralığı Δt İpucu: kamera iki nokta arasını ölçer. Aralığı küçültürsek ne olur?
- Adım 2 (explorer): Aralığı küçült, ortalama hıza bak
  - Anlatım: Kaydırıcıyla ölçüm aralığı Δt'yi küçült. Ortalama hızın hangi sayıya yaklaştığını izle.
- Adım 3 (mcq)
  - Soru: Δt sıfıra çok çok yaklaşırken ortalama hız hangi sayıya yaklaşıyor?
    ✔ 6 — Tablodaki değerler 6,1 → 6,01 → 6,001 diye 6'ya sokuluyor. Bu sayıya 'limit' diyoruz.
    ✘ 0 — Süre sıfıra gidiyor ama yol da sıfıra gidiyor. İkisinin oranı 0 olmak zorunda değil; oran ayrı bir sayıya oturuyor.
    ✘ Hesaplanamaz, bu yüzden bir cevap yok — Δt = 0 olduğu anda işlem gerçekten tanımsız. Ama sorduğumuz şey Δt = 0 değil, Δt → 0. Yaklaşırken değerler düzenli bir yere gidiyor.
    ✘ 7 — 7, Δt = 1 iken (3'ten 4'e) bulduğumuz ilk ölçüm. Aralığı küçülttükçe değer değişti.
  - Açıklama: Önemli fikir: Δt = 0 yasak. Ama Δt'yi 0'a istediğimiz kadar yaklaştırabiliriz ve sonuç tek bir sayıya gidiyor.
- Adım 4 (text): Limit: ulaşmak değil, yaklaşmak
  - Anlatım: Limit şunu söyler: x, bir a sayısına yaklaşırken fonksiyon hangi değere yaklaşıyor? Kritik nokta: x tam a olmak zorunda değil. Fonksiyonun orada tanımsız olması limiti bozmaz.
  - İçerik: Limit şu soruyu sorar: x , a 'ya yaklaşırken f(x) nereye gidiyor? Neden böyle? Gerçek hayatta "tam o an" ölçemeyiz; hep küçük bir aralıktan ölçeriz. Limit, aralık daraldıkça ölçümün nereye oturduğunu söyler. Anlık hız, eğim, birim zamandaki değişim… hepsi bu fikrin üstüne kurulu. Üç şeyi ayır: f(a) (fonksiyonun orada ne yaptığı), soldan limit , sağdan limit . Limit varsa iki taraf aynı yere gider.
- Adım 5 (explorer): Haritada bir delik: f(x) = (x² − 4) ÷ (x − 2)
  - Anlatım: Şimdi x'i 2'ye soldan ve sağdan yaklaştır. x tam 2 olduğunda fonksiyon tanımsız, ama etrafında ne oluyor?
- Adım 6 (text): Delik yolu değiştirmez — sadeleştirme
  - Anlatım: x iki değilken, x kare eksi dört, x eksi iki çarpı x artı iki olarak yazılır. Sadeleşince f(x) eşittir x artı iki olur. x ikiye yaklaşırken bu dörde yaklaşır.
  - İçerik: (x² − 4) ÷ (x − 2) = (x − 2)(x + 2) ÷ (x − 2) = x + 2 &nbsp;&nbsp;(x ≠ 2) x, 2'ye yaklaşırken x ≠ 2'dir; yani sadeleştirme serbest. Geriye x + 2 kalır ve o da 4'e gider. Neden işe yarıyor? Limit, "x tam a" anını sormaz, a'nın çevresini sorar. Çevrede fonksiyon düz bir doğru gibi davranıyor; tek eksik nokta orada. Sınav alışkanlığı: önce yerine koy. 0 ÷ 0 çıkarsa dur — bu bir cevap değil, "bir adım daha işlem yap" uyarısı (çarpanlara ayır, sadeleştir, eşleniğiyle çarp).
- Adım 7 (mcq)
  - Soru: lim (x→3) (x² − 9) ÷ (x − 3) kaçtır?
    ✔ 6 — x² − 9 = (x−3)(x+3). Sadeleşince x + 3 kalır; x → 3 iken 6.
    ✘ 0 — Payda 0 olduğu için pay da 0 gibi görünüyor ve '0' demek cazip. Ama 0 ÷ 0 bir değer değil; sadeleştirmeden bir şey söylenemez.
    ✘ Limit yoktur çünkü payda 0 — Payda 0'a gidiyor ama pay da gidiyor ve sadeleşiyor. 'Payda 0 ise limit yok' kuralı her zaman doğru değil; önce sadeleşip sadeleşmediğine bak.
    ✘ 9 — 9, x² − 9'daki sabit. Sadeleştirmeyi atlayıp bir sayı seçilmiş gibi duruyor.
  - Açıklama: Yöntem: yerine koy → 0/0 çıktı → çarpanlara ayır → sadeleştir → tekrar yerine koy.
- Adım 8 (mcq)
  - Soru: f(x) = x + 1 (x < 1 için), f(x) = 5 − x (x ≥ 1 için). lim (x→1) f(x) için hangisi doğrudur?
    ✔ Limit yoktur: soldan 2'ye, sağdan 4'e gider — Soldan x+1 → 2. Sağdan 5−x → 4. İki taraf farklı yere gidiyorsa limit yoktur.
    ✘ 4 — f(1) = 4. Ama limit, f(1)'e değil yaklaşma yönlerine bakar. Soldan gelen değerleri unutmuşsun.
    ✘ 2 — Sadece soldan gelen kola bakmışsın. Limit için iki taraf da kontrol edilir.
    ✘ 3 — İki sayının ortalaması (2 ile 4 → 3) bir limit değil. Yaklaşılan iki yer farklıysa 'ortası' diye bir şey söz konusu değil.
  - Açıklama: Limitin varlığı için: soldan limit = sağdan limit. f(1)'in değeri bu karşılaştırmada rol oynamaz.
- Adım 9 (mcq)
  - Soru: lim (x→−2) (x² + x − 2) ÷ (x + 2) kaçtır?
    ✔ −3 — x² + x − 2 = (x+2)(x−1). Sadeleşince x − 1 kalır; x → −2 iken −3.
    ✘ 3 — x yerine −2 değil +2 koyulmuş gibi: işaret hatası. x → −2 olduğunu not alıp koyarken parantez kullan: (−2) − 1.
    ✘ 0 — Pay −2'de 0 oluyor ama payda da 0. 0 ÷ 0 için 'sonuç 0' demek yanlış; sadeleştirmeden önce hiçbir şey söylenemez.
    ✘ Tanımsız — f(−2) tanımsız, evet. Ama soru f(−2)'yi değil limiti soruyor; limit −3 olarak var.
  - Açıklama: Çarpanlara ayırırken ipucu: payda (x+2) var, o halde payın da (x+2) çarpanı olması bekleniyor. Bunu hedef alarak ayır.
- Adım 10 (explorer): Peki ya neden? Bu yöntem her zaman işe yarar mı?
  - Anlatım: Şimdi f(x) eşittir bir bölü x fonksiyonunu inceleyelim. x sıfıra soldan ve sağdan yaklaşırken ne oluyor?
- Adım 11 (reflect)
  - Soru: Gözlemin ne? Neden bu sefer sadeleşen bir şey yok ve limit neden 'bir sayı' olmuyor?
  - Örnek düşünce: Örnek düşünce: Soldan değerler eksi sonsuza, sağdan artı sonsuza gidiyor. Hiçbir sayıya oturmuyorlar ve iki taraf da farklı yönde. Bu yüzden limit (bir sayı olarak) yok. Demek ki 'payda 0 → limit yok' her zaman yanlış, 'payda 0 → hep sayı çıkar' da her zaman yanlış: önce pay ile paydanın birlikte davranışına bakılır.
- Adım 12 (reflect)
  - Soru: Kendi cümlenle yaz: Limit gerçek hayatta ne işe yarar? Bir örnek ver.
  - Örnek düşünce: Örnek düşünce: Limit, 'tam o an' ölçemediğimiz şeyleri küçülen aralıklarla yakalamamızı sağlar: anlık hız, bir eğrinin teğet eğimi, bir ilacın kandaki değişim hızı, bir köprünün anlık yükü. Bugün öğrendiğin fikir, ileride türevin tanımı olacak.
- Adım 13 (text): Bugünün özeti
  - Anlatım: Bugünkü keşif tamamlandı. Limit, yaklaşırken ne olduğunu sorar. Sıfır bölü sıfır bir cevap değil, bir uyarıdır. Soldan ve sağdan limit aynıysa limit vardır.
  - İçerik: Limit = yaklaşırken değer nereye gidiyor? (Ulaşmak şart değil.) 0 ÷ 0 bir cevap değil, "devam et" uyarısı. Limit varsa soldan = sağdan . Her yöntemin bir sınırı var: 1 ÷ x örneği. Bu dersin amacı hız değil, bakış. Sınav hızı, bu bakış oturduktan sonra tekrarla gelir. Günlük sorulara geçmek için ana sayfaya dön.

### ders:mat-iki-degisken — Sıcak hava, çok dondurma: iki değişken arasındaki ilişki [mat] (11. sınıf — 1. Tema, 1.1 İki niceliksel değişkenli veriler (MEB 11. sınıf ders kitabı içindekiler); kazanım kodu MEB ODSGM dağılım tablosundan (MAT.11.x) alınmıştır)
Kanca: Dondurma satışı ile hava sıcaklığı arasında bir ilişki var mı, varsa ne kadar güçlü?
- Adım 1 (text): Her gün için iki sayı
  - Anlatım: Bir dondurma tezgâhı her gün iki şeyi not ediyor: hava sıcaklığını ve o gün sattığı dondurma sayısını. Her gün iki sayıdan oluşan bir çift. İki sayı arasında bir ilişki var mı?
  - İçerik: Bir tezgâh her gün iki şeyi not ediyor: hava sıcaklığı ve satılan dondurma sayısı . Gün Sıcaklık (°C) Satış (adet) 1 14 42 2 20 70 3 28 110 4 34 140 Her gün için iki sayılık bir çift var: (sıcaklık, satış). Buna iki niceliksel değişkenli veri diyoruz: iki sayısal özellik, aynı gözlem. Tabloya bakınca "sıcaklık arttıkça satış da artıyor" gibi görünüyor. Peki bunu bir bakışta görmenin ve ne kadar güçlü olduğunu söylemenin yolu var mı? Her çifti haritada bir nokta yaparsak olur.
- Adım 2 (scatter): Her gün bir nokta: saçılım grafiği
  - Anlatım: Her çift, yatay eksende sıcaklık, dikey eksende satış olacak şekilde bir nokta. Üç farklı veri kümesine bak ve eğilim doğrusunu aç.
- Adım 3 (mcq)
  - Soru: Ekran süresi arttıkça uyku süresi (örnek veride) nasıl değişiyor?
    ✔ Azalıyor: noktalar sağa gittikçe aşağı iniyor (ters yönlü ilişki) — Nokta bulutu soldan sağa doğru aşağı iniyor, r negatif. Buna ters yönlü (negatif) ilişki denir.
    ✘ Artıyor: noktalar sağa gittikçe yukarı çıkıyor — Yükselen bulut dondurma örneğiydi. Ekran–uyku bulutu aşağı iniyor.
    ✘ Hiç değişmiyor: ilişki yok — İlişkisiz veri ayakkabı–not kümesiydi; orada nokta bulutu dağınıktı. Ekran–uyku noktaları belirgin bir doğru boyunca diziliyor.
    ✘ Ekran süresi uykuyu kesinlikle azaltıyor — Grafik yalnızca birlikte değiştiklerini gösterir; sebep olduğunu kanıtlamaz. Başka etkenler olabilir.
  - Açıklama: Yön: aşağı iniyorsa negatif, yukarı çıkıyorsa pozitif. 'Birlikte değişmek' ile 'sebep olmak' ayrı şeylerdir (birazdan göreceğiz).
- Adım 4 (text): Bir saçılım grafiğini nasıl okurum?
  - Anlatım: Saçılım grafiğinde üç şeye bak: yön, güç ve biçim. Yön, noktaların yukarı mı aşağı mı gittiği. Güç, noktaların bir çizgi etrafında ne kadar toplandığı. Biçim, çizgi mi eğri mi.
  - İçerik: Yön: sağa gittikçe yukarı → pozitif (aynı yönlü); aşağı → negatif (ters yönlü); belirgin eğilim yok → ilişki yok. Güç: noktalar bir doğrunun çevresinde ne kadar sıkışık? Sıkışıksa güçlü, dağınıksa zayıf. Biçim: doğru gibi mi (doğrusal) yoksa bir eğri gibi mi? Doğrusal ilişki katsayısı r güçlü ve yönü tek sayıda özetler: r ≈ 1 : güçlü pozitif doğrusal &nbsp; r ≈ −1 : güçlü negatif doğrusal &nbsp; r ≈ 0 : doğrusal ilişki yok denecek kadar zayıf. r hep −1 ile 1 arasında kalır; 1,3 gibi bir değer olamaz. Eğilim doğrusu noktaların arasından geçen "en uygun" doğrudur. Denklemi y = a·x + b ise a , x'in 1 birim artışında y'nin tahmini değişimidir. Neden böyle? Gözle "güçlü gibi duruyor" demek kişiden kişiye değişir. r bu yargıyı ölçülebilir kılar; eğilim doğrusu ise gelecekteki bir gün için tahmin yapmamızı sağlar.
- Adım 5 (scatter): r her şeyi anlatır mı? Tek bir nokta ve eğri ilişki
  - Anlatım: Şimdi son noktayı yukarı aşağı oynat. Bir tek nokta r değerini ne kadar değiştiriyor? Sonra hız ve yakıt verisine bak: ilişki güçlü ama doğru değil, r ne diyor?
- Adım 6 (mcq)
  - Soru: Hız–yakıt verisinde noktalar belirgin bir U eğrisi çiziyor ama r değeri sıfıra yakın çıkıyor. Bu ne demek?
    ✔ Doğrusal ilişki yok, ama başka türden (eğri) bir ilişki var — r yalnızca doğrusal ilişkiyi ölçer. U biçimi doğru değil; sol yarı aşağı, sağ yarı yukarı gittiği için birbirini götürür.
    ✘ Hız ile yakıt arasında hiçbir ilişki yoktur — Bulut belirgin bir desen çiziyor; ilişki var ama doğrusal değil. r ≈ 0 'ilişki yok' demek değil, 'doğrusal ilişki yok' demek.
    ✘ Veri yanlış toplanmıştır — Veri gayet düzenli. Sorun veride değil, r'nin yalnızca doğrusal ilişkiyi görmesinde.
    ✘ Hız arttıkça yakıt tüketimi hep artar — Önce azalıp sonra artıyor (U); 'hep artar' yanlış.
  - Açıklama: Her zaman önce saçılım grafiğine bak, sonra r'ye. r tek başına yanıltabilir.
- Adım 7 (mcq)
  - Soru: Bir eğilim doğrusunun denklemi y = 5x − 28 (x: sıcaklık °C, y: günlük satış). 30 °C için tahmin edilen satış kaçtır?
    ✔ 122 — y = 5·30 − 28 = 150 − 28 = 122.
    ✘ 150 — 5·30 = 150'yi bulup −28'i unutmuşsun.
    ✘ 178 — −28 yerine +28 işlemi yapılmış.
    ✘ 30 — x'in kendisi yazılmış; denklemde y'yi bulmak için x yerine koymak gerekiyor.
  - Açıklama: Tahmin = x'i denklemde yerine koy.
- Adım 8 (mcq)
  - Soru: Aynı doğruya göre 0 °C için tahmin y = 5·0 − 28 = −28 çıkıyor (satış −28 adet!). Bu sonuç ne anlatıyor?
    ✔ Doğru yalnızca verinin ölçüldüğü aralık (14–34 °C) için güvenilir; dışına taşınca anlamsız sonuç çıkabilir — Satış negatif olamaz. Eğilim doğrusu elimizdeki aralığı özetler; çok dışına çıkmak (dış tahmin) tehlikelidir.
    ✘ 0 °C'de gerçekten dondurma iade ediliyordur — Negatif satış gerçek bir olay değil; modelin sınırının dışında kalmanın işareti.
    ✘ Doğrunun denklemi yanlış yazılmıştır — Denklem veri aralığı içinde gayet iyi çalışıyor. Sorun, aralığın dışında kullanılması.
    ✘ Sıcaklık ile satış arasında ilişki yoktur — İlişki aralık içinde güçlü; 0 °C'deki saçma sonuç ilişkiyi yok etmez, kapsamı sınırlar.
  - Açıklama: Tahmin yaparken veri aralığının içinde kal; dışına çıkmak varsayım ister.
- Adım 9 (text): Birlikte artmak, sebep olmak demek midir?
  - Anlatım: Dondurma satışı ve plajdaki yüzme kazaları aynı günlerde birlikte artıyor. Dondurma yemek kazaya mı yol açıyor? Büyük ihtimalle üçüncü bir etken var: sıcak hava.
  - İçerik: Az önce sıcaklık ile dondurma satışı güçlü pozitif ilişkiliydi. Şimdi aynı 8 günde plajdaki yüzme kazası sayısına bakalım. Kazalar dondurma satışıyla birlikte artıyor. Peki dondurma yemek kazaya sebep oluyor mu? Büyük ihtimalle hayır. Sıcak günlerde hem dondurma satışı artıyor hem daha çok kişi denize giriyor, dolayısıyla kaza sayısı artıyor. Dondurmayı da kazaları da artıran üçüncü bir etken var: sıcak hava . Neden önemli? r büyük çıkınca "biri diğerine sebep oluyor" demek kanıt değildir . Haberlerde "X yapanlarda Y daha yüksek" cümlesini gördüğünde sorulacak soru: ikisini birden etkileyen başka bir şey olabilir mi?
- Adım 10 (scatter): Dondurma ve kaza: ilişki var, sebep başka
  - Anlatım: Dondurma satışı ve yüzme kazası kümesini aç. r büyük mü? Peki dondurma kazaya mı yol açıyor?
- Adım 11 (mcq)
  - Soru: Bir şehirde yaz aylarında hem boğulma vakaları hem de klima satışları artıyor. En makul açıklama hangisidir?
    ✔ Sıcak hava hem klima satışını hem denize girme (dolayısıyla boğulma) sayısını artırıyor olabilir — Ortak neden (sıcaklık) iki değişkeni birden artırıyor: ilişki var ama biri ötekinin sebebi değil.
    ✘ Klima satın almak boğulmalara yol açıyor — Klima ile boğulma arasında doğrudan bir neden-sonuç mekanizması yok.
    ✘ Boğulmalar arttığı için insanlar klima alıyor — Ters yön de mantıksız; klima satışı bu yüzden artmaz.
    ✘ İlişki yoktur, veriler tesadüfen birlikte artmıştır — İkisi mevsimle birlikte düzenli artıyor; ilişki var, yalnızca nedeni doğrudan değil.
  - Açıklama: Ortak neden (karıştırıcı değişken): iki değişkenin birlikte değişmesini sağlayan üçüncü etken.
- Adım 12 (reflect)
  - Soru: Peki ya neden? Bir saçılım grafiğinde r = 0,95 çıkıyor. Bu, 'x'i artırırsam y mutlaka artar' demek midir? Kendi cümlenle açıkla.
  - Örnek düşünce: Örnek düşünce: Hayır. r = 0,95, x ve y'nin bu verilerde birlikte ve yaklaşık bir doğru boyunca değiştiğini söyler. x'i kendim artırdığımda y'nin artacağını (sebep-sonuç) söylemez; ortak bir üçüncü etken olabilir. Üstelik r, veri aralığının dışı için de bir garanti vermez.
- Adım 13 (reflect)
  - Soru: Kendi hayatından iki niceliksel değişken seç (örneğin ders çalışma süresi ve deneme notu). Sence ilişkinin yönü ne olur? Sebebin ortak bir etken olabileceği bir örnek de ver.
  - Örnek düşünce: Örnek düşünce: Günlük çalışma süresi ve deneme neti büyük ihtimalle pozitif ilişkili olur. Ama ilişki doğrusal sürmez: gece geç saate kadar çalışıp uykusuz kalınca net düşebilir (U ters biçimi). Ortak etken örneği: 'çok kitabı olan öğrencilerin notları yüksek' → sebep kitap sayısı değil, evdeki çalışma ortamı ve motivasyon olabilir.
- Adım 14 (text): Bugünün özeti
  - Anlatım: Bugünkü keşif tamamlandı. İki niceliksel değişkenli veride her gözlem bir noktadır. Saçılım grafiğinde yön, güç ve biçime bakılır. r doğrusal ilişkiyi ölçer ve eksi bir ile bir arasındadır. Birlikte değişmek sebep olmak demek değildir.
  - İçerik: Her gözlem = bir nokta (x, y): saçılım grafiği . Oku: yön (pozitif/negatif), güç (sıkışık/dağınık), biçim (doğru/eğri). r : doğrusal ilişkinin gücü ve yönü, −1 ≤ r ≤ 1. r ≈ 0 "doğrusal ilişki yok" demektir, "ilişki yok" değil. Eğilim doğrusu y = a·x + b ile tahmin; veri aralığının dışına çıkma . Tek bir uç nokta r'yi oynatabilir. İlişki ≠ sebep : üçüncü bir etken ikisini birden etkiliyor olabilir. Hız değil bakış: bir grafik ya da "araştırmalara göre…" cümlesi gördüğünde önce noktalara , sonra sebebe bak.

### ders:mat-veri-inceleme — Bu grafiğe güvenebilir miyim? Başkasının verisini sorgula [mat] (11. sınıf — 1. Tema, 1.2 Başkaları tarafından oluşturulan iki niceliksel değişkenli verileri inceleme (MEB 11. sınıf ders kitabı içindekiler); kazanım kodu MEB ODSGM dağılım tablosundan (MAT.11.x) alınmıştır)
Kanca: Bir haberde 'kahve içenlerin notları daha yüksek' diyor. Doğru mu, yoksa grafik seni mi kandırıyor?
- Adım 1 (text): Haberde bir grafik gördün
  - Anlatım: Bir haber sitesi, kahve içenlerin notlarının daha yüksek olduğunu söylüyor ve bir grafik gösteriyor. Veriyi başkası topladı. Sen neye bakmalısın?
  - İçerik: HABER (uydurma örnek): "Araştırma: Günde 3 fincan kahve içen öğrencilerin notları %25 daha yüksek!" Veriyi sen toplamadın; başkası topladı, çizdi ve bir sonuç söyledi. Senin işin kabul etmek ya da reddetmek değil, sorgulamak. Bugün şu soruları sormayı öğreneceksin: Eksen: grafiğin eksenleri nereden başlıyor, ölçek ne? Örneklem: kimler ölçülmüş, kaç kişi, nasıl seçilmiş? Gruplar: farklı gruplar karışmış olabilir mi? Sebep: ilişki mi var, sebep mi var? Kaynak: kim topladı, neden?
- Adım 2 (bar): Aynı veri, iki farklı hikâye: eksen nereden başlıyor?
  - Anlatım: İki okulun ortalama neti çok yakın. Dikey eksenin başlangıcını değiştir. Çubuklar arasındaki fark nasıl değişiyor?
- Adım 3 (mcq)
  - Soru: Bir grafikte dikey eksen 90'dan başlıyor ve çubuklar 92 ile 95 gösteriyor. Bu grafik ne yapabilir?
    ✔ Küçük bir farkı olduğundan çok daha büyük gösterebilir — Eksen 90'dan başlayınca çubuk yükseklikleri 2 ile 5 gibi görünür: B'nin çubuğu A'nınkinin 2,5 katı. Gerçekte oran sadece 1,03.
    ✘ Farkı olduğundan küçük gösterir — Eksen başlangıcını yukarı çektikçe fark büyümüş görünür; tersi olmaz.
    ✘ Hiçbir şeyi değiştirmez, çubuklar hep aynı oranı korur — Çubuk uzunluğu eksen başlangıcından ölçülür; başlangıç değişirse oran değişir.
    ✘ Veriyi yanlış yapar — Veri aynı; yanıltan, verinin sunuluş biçimidir.
  - Açıklama: Çubuk grafiklerde eksenin 0'dan başlayıp başlamadığına her zaman bak.
- Adım 4 (text): Grafiği okurken kontrol listesi
  - Anlatım: Başkasının grafiğine bakarken eksen, örneklem, gruplar, sebep ve kaynak sorularını sor.
  - İçerik: Eksen ve ölçek: çubuk grafik 0'dan mı başlıyor? Eksendeki aralıklar eşit mi? Eksen başlıkları ve birimler var mı? Örneklem: kaç kişi/gözlem ( n )? Rastgele mi seçilmiş, yoksa ancak belli bir gruba mı sorulmuş? 12 kişilik bir veriden büyük sonuç çıkmaz. Aralık: hangi zaman dilimi/değer aralığı gösterilmiş? İşine yarayan kısım mı seçilmiş (cherry-picking)? Aralık dışına tahmin yapılıyor mu? Gruplar: farklı alt gruplar karışmış olabilir mi? Gruplara ayırınca yön değişir mi? (Birazdan göreceksin.) Sebep: ilişki sebep demek değil. Üçüncü bir etken var mı? Kaynak: veriyi kim topladı? Bir şey satmaya çalışan biri mi? Neden? Aynı veriyle birbirine zıt iki hikâye anlatılabilir. Sorgulayan okur, hangisinin veriden mi yoksa anlatıcının tercihinden mi geldiğini görür.
- Adım 5 (scatter): Gruplar karışınca yön tersine dönebilir
  - Anlatım: Çalışma süresi ile deneme neti arasındaki ilişkiye bak. Tüm veriye bakınca ne görüyorsun? Sonra grupları renkle ayır.
- Adım 6 (mcq)
  - Soru: Tüm veride çalışma süresi arttıkça net düşüyor görünüyor, ama iki grup ayrı ayrı incelenince her grupta net artıyor. Doğru yorum hangisidir?
    ✔ Gruplar hazırlık düzeyi bakımından çok farklı; genel eğilim bu fark yüzünden yanıltıcı, grup bilgisi hesaba katılmalı — Hazırlığı az olanlar daha çok çalışıyor ama başlangıçta daha düşük netteler; güçlüler az çalışıp yüksek netteler. Gruplar karışınca genel eğilim tersine dönüyor.
    ✘ Çalışmak neti düşürür — Her grubun kendi içinde çalışmanın neti artırdığını görüyoruz. Genel eğilim, gruplar karıştığı için yanıltıyor.
    ✘ Veri yanlış toplanmıştır — Veri gayet tutarlı; yanıltan, grupları ayırmadan tek bir doğruyla özetlemek.
    ✘ Gruplara ayırmak veriyi bozar — Ayırmak veriyi bozmaz; gizlenen yapıyı görünür kılar.
  - Açıklama: Alt gruplara bakmadan çıkarılan genel sonuç yanıltıcı olabilir (bu olay 'Simpson paradoksu' diye bilinir).
- Adım 7 (mcq)
  - Soru: Bir kütüphanede çıkış kapısında 100 kişiye 'Düzenli kitap okur musunuz?' sorulmuş, %98'i 'evet' demiş. Haber: 'Türkiye'de gençlerin %98'i düzenli kitap okuyor.' Sorun nedir?
    ✔ Örneklem taraflı: kütüphaneye gelenler zaten okuma alışkanlığı olan bir grup — Veri kimlerden toplandı? Kütüphaneden çıkan insanlardan. Bu, tüm gençleri temsil etmez.
    ✘ 100 kişi her zaman yeterli, sorun yok — Sayı kadar, kişilerin nasıl seçildiği de önemli. Taraflı seçilmiş büyük bir örneklem de yanıltır.
    ✘ Yüzde değerleri tam sayı olmamalı — Sorun yüzdelerin biçimi değil, kimlerin ölçüldüğü.
    ✘ Anket soruları Türkçe olmalıydı — Soru dilinin bu örnekle ilgisi yok; temsil sorunu var.
  - Açıklama: Genelleme için örneklem, hedef kitleyi temsil etmeli (rastgele seçim).
- Adım 8 (mcq)
  - Soru: Bir enerji içeceği firması 'içeceğimizi kullananların dikkat süresi %30 daha uzun' diyor ve bir grafik gösteriyor. İlk sormak gereken soru hangisi?
    ✔ Veriyi kim, hangi koşullarda, kaç kişiyle topladı? — Kaynak ve yöntem belirsizse sonuca güvenilmez. Ürün satan kişinin kendi araştırması çıkar çatışması içerir.
    ✘ Grafik renkli mi? — Renk, verinin güvenilirliğiyle ilgili değil.
    ✘ Başka marka içecekler de var mı? — İlginç ama ilk soru kaynak ve yöntem; bu sonra gelir.
    ✘ %30 sayısı yuvarlak mı? — Yuvarlaklık güvenilirlik göstermez; asıl soru verinin nasıl elde edildiği.
  - Açıklama: Kaynak, yöntem ve n (gözlem sayısı) güvenilirliğin ilk üç sorusudur.
- Adım 9 (mcq)
  - Soru: Bir araştırmada 12 öğrenciyle yapılan ölçümde r = 0,85 bulunmuş ve 'bütün öğrencilerde bu ilişki geçerlidir' denmiş. En uygun eleştiri hangisidir?
    ✔ 12 gözlem az: örneklem küçükken r çok oynak olur, tüm öğrencilere genelleme yapmak için yeterli değil — Küçük n'de birkaç nokta r'yi çok değiştirir ve genellemek tehlikelidir.
    ✘ r = 0,85 yüksek değildir — 0,85 güçlü bir değer; sorun değerin kendisi değil, kaç gözleme dayandığı.
    ✘ r hiçbir zaman genellenemez — Yeterince büyük ve temsil edici örneklemle r genellenebilir; mesele küçük ve belirsiz örneklem.
    ✘ Öğrenciler yerine yetişkinler ölçülmeli — Soru kim ölçüldüğünden çok, kaç kişinin ölçüldüğü ve genellemenin yetip yetmediği.
  - Açıklama: Kural: n küçükse temkinli ol; sonuçlar yalnızca ölçülen gruba aittir.
- Adım 10 (reflect)
  - Soru: Peki ya neden? Bir grafiğin eksenini nereden başlatacağını seçen kişi neden sonucu etkileyebilir? Dürüst bir grafik çizen kişi ne yapmalıdır?
  - Örnek düşünce: Örnek düşünce: Eksen başlangıcı, çubuklar arasındaki görsel oranı belirler; kısaltılmış bir eksen küçük farkı büyük gösterir. Dürüst grafikte çubuk grafikler 0'dan başlar (çizgi grafiklerde bile değişim kısa eksenle abartılabilir, o zaman eksen açıkça belirtilir), eksen başlıkları ve birimler yazılır, veri kaynağı ve gözlem sayısı verilir.
- Adım 11 (reflect)
  - Soru: Kendi hayatından 'iki şey birlikte artıyor' ama sebep olmayabilecek bir örnek yaz (haberlerde ya da sosyal medyada gördüğün bir iddia olabilir). Sence ortak etken ne olabilir?
  - Örnek düşünce: Örnek düşünce: 'Çok video izleyen öğrencilerin notu düşük' → belki ikisini birden etkileyen uyku düzeni ya da ders çalışma ortamı vardır. 'Spor yapanlar daha mutlu' → belki zaman ve imkâna sahip olmak hem sporu hem mutluluğu etkiliyor. Önemli olan: önce sebebin yönünü, sonra üçüncü bir etkeni sorgulamak.
- Adım 12 (text): Bugünün özeti
  - Anlatım: Bugünkü keşif tamamlandı. Başkasının grafiğine bakarken eksene, örneklemin kim ve kaç kişi olduğuna, alt gruplara, sebep-sonuç iddiasına ve kaynağa bak.
  - İçerik: Eksen: 0'dan mı başlıyor? Kısaltılmış eksen farkı büyütür. Örneklem: kim, kaç kişi (n), nasıl seçildi? Taraflı seçim → genelleme yok. Gruplar: alt grupları ayırınca eğilim tersine dönebilir. Sebep: ilişki ≠ sebep; üçüncü etken olabilir. Kaynak: kim topladı, neden? Hız değil bakış: bir haberdeki grafik sana "ne olduğunu" değil, birinin ne göstermek istediğini anlatıyor olabilir.

### ders:mat-cokgen — Bal peteği neden altıgen? Çokgenlerin açıları ve köşegenleri [mat] (11. sınıf — 2. Tema, 2.1–2.4 (dörtgenler, çokgenlerin sınıflandırılması, dışbükey çokgenler); kazanım kodu MEB ODSGM dağılım tablosundan (MAT.11.x) alınmıştır)
Kanca: Bir çokgeni üçgenlere bölersen iç açıların toplamını bulursun: kaç üçgene bölünüyor?
- Adım 1 (text): Üçgenden çokgene
  - Anlatım: Üçgenin iç açılarının toplamı yüz seksen derecedir. Dörtgen, beşgen ve altıgeni üçgenlere bölersek toplamlarını bulabiliriz.
  - İçerik: Üçgenin iç açıları toplamı 180° . Peki dörtgen, beşgen, altıgen için? Bal peteğinin gözleri, futbol topundaki parçalar, karo döşemeler… hepsi çokgen . Çokgenin açılarını ezberlemek yerine üçgenlere bölerek bulacağız. Soru: n kenarlı bir çokgeni bir köşesinden çizilen köşegenlerle üçgenlere bölersek kaç üçgen oluşur? Kaydırıcıyla kendin dene.
- Adım 2 (polygon): Kenar sayısını değiştir: üçgenler, açılar, köşegenler
  - Anlatım: Kaydırıcıyla kenar sayısını değiştir. Bir köşeden çizilen köşegenler çokgeni üçgenlere ayırıyor. Tabloda üçgen sayısı, iç açılar toplamı ve köşegen sayısı güncelleniyor.
- Adım 3 (mcq)
  - Soru: Bir köşesinden çizilen köşegenlerle 7 kenarlı dışbükey bir çokgen kaç üçgene ayrılır?
    ✔ 5 — n = 7 için n − 2 = 5 üçgen oluşur (kaydırıcıda n = 7 yaparak da görebilirsin).
    ✘ 7 — Üçgen sayısı kenar sayısıyla aynı değil; iki komşu kenar ve onları birleştiren yan yana üçgenler çıkıyor.
    ✘ 4 — n − 3 = 4 bir köşeden çizilen köşegen sayısı; üçgen sayısı bir fazla: 5.
    ✘ 6 — n − 1 değil, n − 2 üçgen oluşur.
  - Açıklama: Bir köşeden n − 3 köşegen çizilir ve çokgen n − 2 üçgene ayrılır.
- Adım 4 (text): Formüller nereden geliyor?
  - Anlatım: Bir köşeden n eksi iki üçgen oluşur, her üçgenin iç açıları toplamı yüz seksen. O hâlde iç açılar toplamı n eksi iki çarpı yüz seksen. Dış açılar her çokgende üç yüz altmıştır.
  - İçerik: İç açılar toplamı: n − 2 üçgen, her biri 180° → (n − 2) · 180° . (n = 4 için 360°, n = 6 için 720°.) Dış açılar toplamı: her köşede iç + dış = 180°. Toplam n · 180°; iç toplam (n − 2) · 180°; fark 360° . Dışbükey çokgende dış açılar toplamı her zaman 360° . Düzgün çokgen: tüm kenarlar ve tüm açılar eşit. Bir iç açı: (n − 2) · 180° ÷ n ; bir dış açı: 360° ÷ n . Köşegen sayısı: her köşeden n − 3 köşegen, n köşe → n(n − 3). Her köşegen iki uçtan sayıldığı için n(n − 3) ÷ 2 . Neden böyle? Formülleri ezberlemene gerek yok: bir çokgen çiz, bir köşeden üçgenle ve gerisi geliyor.
- Adım 5 (mcq)
  - Soru: Dışbükey 10 kenarlı bir çokgenin kaç köşegeni vardır?
    ✔ 35 — n(n − 3) ÷ 2 = 10 · 7 ÷ 2 = 35.
    ✘ 70 — n(n − 3) = 70; her köşegen iki uçtan sayıldığı için ikiye bölmeyi unutmuşsun.
    ✘ 45 — 10 · 9 ÷ 2 = 45 bütün doğru parçaları (kenarlar dahil); köşegen için 10 kenar çıkarılır: 35.
    ✘ 30 — 10 · 3 gibi bir hata; bir köşeden n − 3 = 7 köşegen çıkar.
  - Açıklama: Köşegen = tüm doğru parçaları − kenarlar: 45 − 10 = 35.
- Adım 6 (text): Dörtgen ailesi: kim kimin özel hâli?
  - Anlatım: Kare hem dikdörtgen hem eşkenar dörtgendir. Dikdörtgen ve eşkenar dörtgen de birer paralelkenardır. Köşegenlerin özellikleri bu şekilleri ayırır.
  - İçerik: Şekil Kenarlar Köşegenler Paralelkenar karşılıklı paralel ve eşit birbirini ortalar Dikdörtgen açılar 90° eşit, birbirini ortalar Eşkenar dörtgen 4 kenar eşit birbirini dik ortalar, açıortay Kare 4 kenar eşit, açılar 90° eşit ve dik ortalar Kapsama: kare ⊂ dikdörtgen ⊂ paralelkenar ve kare ⊂ eşkenar dörtgen ⊂ paralelkenar. Yani her kare bir dikdörtgendir ama her dikdörtgen kare değildir.
- Adım 7 (mcq)
  - Soru: Hem eşkenar dörtgen hem dikdörtgen olan şekil hangisidir?
    ✔ Kare — Dört kenarı eşit (eşkenar dörtgen) ve dört açısı 90° (dikdörtgen).
    ✘ Paralelkenar — Genel paralelkenarın kenarları eşit ya da açıları 90° olmak zorunda değil.
    ✘ Yamuk — Yamuk bu özelliklerin ikisini birden taşımak zorunda değildir.
    ✘ Deltoid — Deltoidin 4 kenarı eşit olmak zorunda değildir.
  - Açıklama: Kare = eşkenar dörtgen ∩ dikdörtgen.
- Adım 8 (reflect)
  - Soru: Peki ya neden? Her dışbükey çokgende dış açılar toplamı neden hep 360°'dir? (Çokgenin çevresinde bir tur yürüdüğünü düşün.)
  - Örnek düşünce: Örnek düşünce: Çokgenin çevresinde bir tur yürürken her köşede dış açı kadar dönersin; başladığın yöne geri döndüğünde toplam dönüşün tam bir tur, yani 360° olur. Kenar sayısı ne olursa olsun bu değişmez.
- Adım 9 (reflect)
  - Soru: Gerçek hayatta (mimari, doğa, mühendislik) çokgenlerin kullanıldığı bir örnek yaz. Neden o çokgen seçilmiş olabilir?
  - Örnek düşünce: Örnek düşünce: Bal peteği altıgendir; düzlemi boşluk bırakmadan örtebilen düzgün çokgenler (eşkenar üçgen, kare, düzgün altıgen) arasında aynı alanı en az çevreyle (yani en az balmumuyla) kaplayan altıgendir. Dörtgenler ve üçgenler de köprü ve çatılarda sağlamlık için kullanılır (üçgen biçimini bozmaz).
- Adım 10 (text): Bugünün özeti
  - Anlatım: Bugünkü keşif tamamlandı. İç açılar toplamı n eksi iki çarpı yüz seksen. Dış açılar toplamı üç yüz altmış. Köşegen sayısı n çarpı n eksi üç bölü iki.
  - İçerik: Bir köşeden n − 3 köşegen , n − 2 üçgen . İç açılar toplamı (n − 2) · 180° ; dış açılar toplamı 360° . Düzgün çokgende iç açı (n − 2) · 180° ÷ n, dış açı 360° ÷ n. Köşegen sayısı n(n − 3) ÷ 2 . Kare ⊂ dikdörtgen ⊂ paralelkenar; kare ⊂ eşkenar dörtgen ⊂ paralelkenar. Hız değil bakış: bir çokgenle karşılaşınca "üçgenlere bölsem?" diye sor; formül zaten orada.

### ders:fiz-hareket — Hız kamerası ve yolculuk: yol, süre, hız ve ivme [fiz] (9. sınıf Fizik, 3. ünite (Hareket ve Kuvvet), kazanım 9.3.1.2–9.3.1.5 (MEB–ÖSYM 2026 belgesindeki kod))
Kanca: Bir araç 3 saatte 270 km gittiyse hep aynı hızla mı gitti?
- Adım 1 (text): Yolculukta üç büyüklük
  - Anlatım: Bir yolculukta üç şeyi ölçeriz: alınan yol, geçen süre ve hız. Hız, birim zamanda alınan yoldur.
  - İçerik: Bir yolculukta üç büyüklük birbirine bağlıdır: yol (x), süre (t) ve hız (v). Hız, birim sürede alınan yol : v = x ÷ t . Birimler: yol m , süre s , hız m/s . Günlük hayatta km/sa de kullanılır. Sabit hızla giden bir araç için yol ile süre arasındaki ilişkiyi kendin keşfet: aşağıda hızı ve süreyi değiştir, konum–zaman grafiğine bak.
- Adım 2 (sim): Hızı ve süreyi değiştir: konum–zaman grafiği
  - Anlatım: Hız ve süre kaydırıcılarını değiştir. Grafikte yatay eksen süre, dikey eksen yol. Doğrunun eğimi hızı verir.
- Adım 3 (mcq)
  - Soru: Sabit 10 m/s hızla giden bir araç 8 s'de kaç m yol alır?
    ✔ 80 m — x = v · t = 10 · 8 = 80 m. Grafikte t = 8 s'deki nokta 80 m'de.
    ✘ 18 m — 10 + 8 toplanmış; yol hızla süre çarpılarak bulunur.
    ✘ 1,25 m — 8 ÷ 10 gibi bir hata; hız ile süre çarpılır.
    ✘ 800 m — Birim hatası ya da 10 kat fazla çarpma.
  - Açıklama: Düzgün hareket: x = v · t.
- Adım 4 (text): Birim dönüşümü ve ortalama hız
  - Anlatım: Kilometre bölü saati metre bölü saniyeye çevirmek için üç virgül altıya böleriz. Ortalama hız toplam yolun toplam zamana oranıdır.
  - İçerik: km/sa → m/s: 3,6'ya böl. (72 km/sa = 20 m/s). m/s → km/sa: 3,6 ile çarp. Yol ve süre farklı bölümlerde farklı hızlarla alınırsa ortalama hız = toplam yol ÷ toplam süre (hızların ortalaması değil). Yer değiştirme başlangıç ve bitiş noktasına bağlıdır; yol ise izlenen yolun uzunluğu. Neden 3,6? 1 km/sa = 1000 m ÷ 3600 s = 1 ÷ 3,6 m/s.
- Adım 5 (mcq)
  - Soru: 72 km/sa hız kaç m/s'dir?
    ✔ 20 m/s — 72 ÷ 3,6 = 20 m/s.
    ✘ 259,2 m/s — 3,6 ile çarpılmış; km/sa'ten m/s'ye bölünür.
    ✘ 7,2 m/s — 10'a bölünmüş; çevirme çarpanı 3,6.
    ✘ 72 m/s — Birim değişmeden aynı sayı yazılmış.
  - Açıklama: km/sa ÷ 3,6 = m/s.
- Adım 6 (sim): İvme: hız zamanla değişince
  - Anlatım: İvme, hızın birim zamandaki değişimidir. İvmeyi ve süreyi değiştir; hız zaman grafiğine bak.
- Adım 7 (mcq)
  - Soru: Durgun halden harekete geçen bir araç 5 s'de 20 m/s hıza ulaşıyor. İvmesi kaç m/s²'dir?
    ✔ 4 m/s² — a = Δv ÷ t = 20 ÷ 5 = 4 m/s².
    ✘ 100 m/s² — Hız ile süre çarpılmış; ivme bölme ile bulunur.
    ✘ 0,25 m/s² — Süre hıza bölünmüş; ters yazılmış.
    ✘ 15 m/s² — Hız ile süre çıkarılmış; birimler uymuyor.
  - Açıklama: a = Δv ÷ Δt.
- Adım 8 (reflect)
  - Soru: Peki ya neden? Bir araç 5 s boyunca sabit ivmeyle hızlanırken hız artıyor; neden hız–zaman grafiği düz bir doğru olur?
  - Örnek düşünce: Örnek düşünce: İvme sabit olduğundan her saniyede hız aynı miktar artar (örneğin her saniye 4 m/s). Aynı artışlarla ilerleyen büyüklüğün grafiği doğrudur; eğimi bu artış miktarı, yani ivmedir.
- Adım 9 (text): Bugünün özeti
  - Anlatım: Bugünkü keşif tamamlandı. Hız yol bölü zamandır. Sabit hızda konum zaman grafiği doğrudur ve eğimi hızdır. İvme hızın birim zamandaki değişimidir.
  - İçerik: v = x ÷ t ; sabit hızda konum–zaman grafiği doğru, eğim = hız . km/sa ÷ 3,6 = m/s. Ortalama hız = toplam yol ÷ toplam süre. a = Δv ÷ Δt ; hız–zaman grafiğinin eğimi ivmedir. Sorularda önce birimleri aynı sisteme getir (m, s, m/s).

### ders:cog-boylam — Dünya dönüyor: boylam ve yerel saat [cog] (9. sınıf Coğrafya, 9.1.4–9.1.5 (Dünya'nın hareketleri, koordinat sistemi ve zaman); MEB–ÖSYM 2026 belgesindeki kod)
Kanca: Türkiye'de öğle yemeği yenirken Japonya'da neden gün ağarıyor?
- Adım 1 (text): Dünya 24 saatte bir tur atıyor
  - Anlatım: Dünya kendi ekseni etrafında yirmi dört saatte üç yüz altmış derece döner. Yani her saat on beş derece döner. Bu yüzden her boylamın saati farklıdır.
  - İçerik: Dünya 24 saatte 360° döner. Her saatte kaç derece? 360° ÷ 24 = 15° / saat &nbsp;·&nbsp; 1° = 4 dakika Bu yüzden iki yer arasında 15° boylam farkı varsa 1 saat yerel saat farkı vardır. Doğuya gidince saat ileri , batıya gidince geri .
- Adım 2 (sim): Boylamı ve Greenwich saatini değiştir
  - Anlatım: Greenwich saatini ve şehrin boylamını değiştir. Şehrin yerel saati Greenwich saatine boylamın on beşe bölümü kadar eklenir.
- Adım 3 (mcq)
  - Soru: Greenwich'te saat 12.00 iken 45° doğu boylamındaki bir şehirde yerel saat kaçtır?
    ✔ 15.00 — 45° ÷ 15° = 3 saat; doğuda saat ileri: 12.00 + 3 = 15.00.
    ✘ 09.00 — Doğuya gidildikçe saat ileri gider; geri alınmış.
    ✘ 13.00 — 45° için 1 saat değil, 3 saat.
    ✘ 12.45 — 45° saat değil dakika gibi alınmış; 1° = 4 dakika, 45° = 180 dakika.
  - Açıklama: Boylam farkı ÷ 15 = saat farkı.
- Adım 4 (text): Hesap yöntemi
  - Anlatım: İki yer arasındaki boylam farkını on beşe böl; doğuya doğru saat ileri, batıya doğru geri. İki yer farklı yarım kürelerdeyse boylamları toplanır.
  - İçerik: İki yerin boylam farkını bul. Aynı yönde (ikisi de doğu ya da batı) ise çıkar ; farklı yönde (biri doğu, biri batı) ise topla . Farkı 15 'e böl: saat farkı. Doğudaki yerin saati ileri . Örnek: 30°D ile 45°B arası fark 30 + 45 = 75° → 75 ÷ 15 = 5 saat. Doğudaki yerde saat 5 saat ileri.
- Adım 5 (mcq)
  - Soru: A şehri 30° doğu, B şehri 45° batı boylamındadır. A'da saat 14.00 iken B'de saat kaçtır?
    ✔ 09.00 — Boylam farkı 30 + 45 = 75° → 5 saat. B batıda: 14.00 − 5 = 09.00.
    ✘ 19.00 — Batıya gidildikçe saat geri gider; ileri alınmış.
    ✘ 11.00 — 75° yerine 45 − 30 = 15° (1 saat) hesaplanmış gibi; farklı yarım kürelerde boylamlar toplanır.
    ✘ 13.00 — 1 saat fark 15° içindir; fark 75°.
  - Açıklama: Farklı yarım kürelerde boylamlar toplanır.
- Adım 6 (reflect)
  - Soru: Peki ya neden? Neden sabah güneşi doğudaki bir şehirde batıdakinden önce görürüz?
  - Örnek düşünce: Örnek düşünce: Dünya batıdan doğuya doğru döndüğü için doğudaki yerler Güneş'in ışığına batıdaki yerlerden önce girer. Bu yüzden doğuda güneş önce doğar, yerel saat daha ileridir.
- Adım 7 (text): Bugünün özeti
  - Anlatım: Bugünkü keşif tamamlandı. Dünya her saatte on beş derece döner. Yerel saat farkı boylam farkının on beşe bölümüdür. Doğuya gidince saat ileri, batıya gidince geri.
  - İçerik: 360° ÷ 24 saat = 15° / saat ; 1° = 4 dk . Saat farkı = boylam farkı ÷ 15. Doğu → ileri, batı → geri. Farklı yarım kürelerde boylamlar toplanır, aynı yarım kürede çıkarılır.

### ders:kim-periyodik — Elementlerin adresi: katmanlar, periyot ve grup [kim] (9. sınıf Kimya, 2. ünite, kazanım 9.2.3.1–9.2.3.3 (periyodik sistem); MEB–ÖSYM 2026 belgesindeki kod. İlk 18 element.)
Kanca: Bir elementin periyodik sistemdeki yerini elektronlarına bakarak bulabilir misin?
- Adım 1 (text): Atomun adresi: elektron katmanları
  - Anlatım: Elektronlar çekirdeğin etrafında katmanlarda bulunur. Birinci katman en fazla iki, ikinci katman en fazla sekiz elektron alır. Periyot katman sayısını, grup dış katmandaki elektron sayısını gösterir.
  - İçerik: Elektronlar çekirdeğin çevresinde katmanlarda bulunur. İlk 18 elementte katmanların alabileceği en fazla elektron: 2, 8, 8 . Periyot (yatay sıra) = katman sayısı . A grubu (düşey sütun) = dış katmandaki elektron sayısı (He ve soy gazlar 8A). Kaydırıcıyla atom numarasını (elektron sayısını) değiştir ve katmanların nasıl dolduğunu izle.
- Adım 2 (sim): Atom numarasını değiştir: elektronlar katmanlara yerleşiyor
  - Anlatım: Atom numarasını artır. Elektronlar önce birinci katmanı, sonra ikinci katmanı doldurur. Katman sayısı periyodu, dış katmandaki elektron sayısı grubu verir.
- Adım 3 (mcq)
  - Soru: Atom numarası 11 olan sodyumun (Na) katman elektron dağılımı ve periyot–grup bilgisi hangisidir?
    ✔ 2, 8, 1 → 3. periyot, 1A grubu — 11 elektron: 2 + 8 + 1. Üç katman (3. periyot), dış katmanda 1 elektron (1A).
    ✘ 2, 8, 1 → 1. periyot, 3A grubu — Periyot katman sayısı (3), grup dış elektron sayısı (1); ikisi yer değiştirmiş.
    ✘ 2, 9 → 2. periyot, 1A grubu — İkinci katman en fazla 8 elektron alır; 9 olamaz.
    ✘ 11 → 1. periyot, 1A grubu — Elektronlar katmanlara 2, 8, … sırasıyla dağılır.
  - Açıklama: Elektronları 2, 8, 8 sırasıyla yerleştir; sonra periyot ve grubu oku.
- Adım 4 (text): Periyodik özellik: soldan sağa ne değişir?
  - Anlatım: Aynı periyotta soldan sağa gidildikçe çekirdek yükü artar ve atom yarıçapı küçülür. Aynı grupta yukarıdan aşağıya katman sayısı arttığı için yarıçap büyür.
  - İçerik: Aynı periyotta soldan sağa: katman sayısı sabit, çekirdek yükü artar → elektronlar daha çok çekilir → atom yarıçapı küçülür . Aynı grupta yukarıdan aşağı: katman sayısı artar → atom yarıçapı büyür . Aynı gruptaki elementlerin dış katman elektron sayısı aynı , bu yüzden kimyasal özellikleri benzer.
- Adım 5 (mcq)
  - Soru: Aşağıdakilerden hangisinin atom yarıçapı en küçüktür? (Na, Mg, Al, Si — aynı periyot)
    ✔ Si — Aynı periyotta soldan sağa atom yarıçapı küçülür; Si en sağdadır.
    ✘ Na — Na en solda; yarıçapı en büyük.
    ✘ Mg — Na'dan küçük ama Al ve Si'den büyük.
    ✘ Al — Si'den büyük.
  - Açıklama: Periyotta soldan sağa atom yarıçapı azalır.
- Adım 6 (reflect)
  - Soru: Peki ya neden? Aynı grupta yukarıdan aşağı inildikçe atom yarıçapı neden büyür?
  - Örnek düşünce: Örnek düşünce: Yukarıdan aşağı inildikçe katman sayısı artar; yeni bir katman eklenince dış elektronlar çekirdekten daha uzakta bulunur ve atom büyür.
- Adım 7 (text): Bugünün özeti
  - Anlatım: Bugünkü keşif tamamlandı. Periyot katman sayısı, grup dış katman elektron sayısıdır. Periyotta soldan sağa atom yarıçapı küçülür.
  - İçerik: Katmanlar: 2, 8, 8 (ilk 18 element). Periyot = katman sayısı ; A grubu = dış katman elektronu (He: 8A). Periyotta soldan sağa atom yarıçapı azalır ; grupta yukarıdan aşağı artar .

### ders:mat-trig-cember — Dönme dolap: sinüs ve kosinüs nereden çıkıyor? [mat] (11. sınıf — 3. Tema, 3.1 Trigonometrik fonksiyonlar ve nitel özellikleri (MAT.11.3.1; MEB ODSGM dağılım tablosu). Bu keşif konunun birim çember bölümünü kapsar.)
Kanca: Dönme dolapta kabinin yerden yüksekliği nasıl bir desen çizer?
- Adım 1 (text): Dönme dolabın tepesindeki kabin
  - Anlatım: Dönme dolap saat yönünün tersine dönüyor. Bir kabin dolabın yan tarafından başlıyor. Merkeze göre yüksekliğini ve yatay uzaklığını, dönme açısına göre izleyeceğiz.
  - İçerik: Dönme dolap dönüyor. Bir kabinin merkeze göre yüksekliği zamanla nasıl değişir? Basit düşünelim: dolabın yarıçapı 1 birim , kabin saat yönünün tersine dönüyor. Kabin ilk anda sağ yanda (0°), yükseklik 0. Biraz sonra yükseliyor, tepeye (90°) varıyor, sonra iniyor… yükseklik merkez açı Soru: yükseklik düzgün bir hızla mı artıp azalır, yoksa başka bir desen mi var? Birazdan kendin döndürerek göreceksin.
- Adım 2 (circle): Kabini döndür, yüksekliğe bak
  - Anlatım: Kaydırıcıyla açıyı değiştir. Kalın dikey çizgi kabinin yüksekliği, kalın yatay çizgi merkezden yatay uzaklığı. Sağdaki eğri, yüksekliğin açıya göre çizdiği izi gösteriyor.
- Adım 3 (mcq)
  - Soru: Açı 90°'den 180°'ye giderken kabinin yüksekliği (sinüs) ne yapar?
    ✔ 1'den 0'a azalır — 90°'de tepedeyiz (yükseklik 1). 180°'de dolabın sol yanındayız, merkezle aynı seviye (yükseklik 0). Eğri aynı yoldan geri iniyor.
    ✘ 0'dan 1'e artar — Yükselme 0°'den 90°'ye kadardı. 90°'yi geçince kabin tepeyi aşıp inmeye başlıyor.
    ✘ 1'de sabit kalır — Sabit kalan bir şey yok; kabin sürekli dönüyor. Yalnızca tepe noktasında bir an en yüksek, sonra hemen iniyor.
    ✘ 0'dan −1'e iner — −1 değerine ancak 270°'de (en altta) ulaşılır. 180°'de henüz merkez seviyesindeyiz.
  - Açıklama: Eğriye bak: 0°→90° çıkış, 90°→180° iniş, 180°→270° merkezin altına iniş, 270°→360° geri yükseliş.
- Adım 4 (text): Neden 30° için tam olarak 1/2? Bir üçgen saklıyor
  - Anlatım: Otuz derece ve eksi otuz derece noktalarını birleştir. Merkezle birlikte bir eşkenar üçgen oluşur, kenarı bir. Dikey uzaklığın yarısı, otuz derecenin sinüsüdür ve yarım eder.
  - İçerik: Tabloda sin 30° = 1/2 çıktı. Ezberlemek yerine nedenine bakalım. 1 1 1 sin 30° 30° 30° ve −30° noktaları, x ekseninin iki yanında ayna görüntüsü. Merkezle birleştirince tepe açısı 60° olan ve iki kenarı yarıçap (1) olan bir üçgen çıkar: iki kenarı eşit ve açısı 60° ise üçüncü kenar da 1'dir, yani eşkenar üçgen . Alttaki kenar 1 uzunluğunda; x ekseni onu tam ortadan böler. Yarısı 1/2 . İşte sin 30° = 1/2 . Neden böyle? 60° için de aynı çizim geçerli: 60° noktasının x'e uzaklığı (cos 60°) bu sefer 1/2 olur. Ezber tabloyu bu iki resimle yeniden kurabilirsin.
- Adım 5 (mcq)
  - Soru: sin 150° kaçtır?
    ✔ 1/2 — 150° noktası, 30° noktasının dikey eksene göre ayna görüntüsü: aynı yükseklik, yalnızca sol tarafa geçmiş. Yükseklik değişmediği için sinüs de 1/2.
    ✘ √3/2 — √3/2 bu açının yüksekliği değil: 60° ve 120° için yükseklik. 150°'de nokta tepeden daha aşağıda.
    ✘ −1/2 — 150° hâlâ x ekseninin üstünde; yükseklik pozitif. Negatif işaret ancak 180°'den sonra gelir.
    ✘ 0 — Yükseklik 180°'de 0 olur. 150° bu noktaya yakın ama henüz orada değil.
  - Açıklama: Sinüs yüksekliktir; 150° ile 30° aynı yükseklikte olduğu için sin 150° = sin 30°. Genel hâli: sin(180° − x) = sin x.
- Adım 6 (circle): Sinüs ve kosinüs: aynı dalga, kaymış
  - Anlatım: Şimdi hem yüksekliğin hem yatay uzaklığın izine bak. İki eğri birbirinin aynısı, ama biri doksan derece kaymış.
- Adım 7 (text): Çemberin denklemi bir kural verir
  - Anlatım: Birim çemberde her noktanın yatay uzaklığının karesi artı yüksekliğinin karesi birdir. Bu yüzden kosinüs kare artı sinüs kare her zaman birdir.
  - İçerik: Nokta çember üzerinde ve yarıçap 1: (yatay)² + (yükseklik)² = 1 Yatay uzaklık cos x , yükseklik sin x olduğundan: sin²x + cos²x = 1 Bu bir ezber formül değil; Pisagor 'un çember üstündeki hâli. Sinüs ve kosinüs −1 ile 1 arasında kalır: kabin, yarıçaptan (1) daha yüksek ya da daha uzak olamaz. Açı tam tur (360°) dönünce kabin başladığı yere gelir: değerler her 360°'de tekrarlanır . Neden önemli? Biri biliniyorsa diğeri bulunur: yükseklik 3/5 ise yatay uzaklık 4/5 (3-4-5 üçgeni). Hangi işaretle olduğuna ise kabinin hangi bölgede olduğuna bakarak karar verirsin.
- Adım 8 (mcq)
  - Soru: x birinci bölgede (0° < x < 90°) ve sin x = 3/5 ise cos x kaçtır?
    ✔ 4/5 — sin²x + cos²x = 1 → cos²x = 1 − 9/25 = 16/25. Birinci bölgede yatay uzaklık pozitif: cos x = 4/5.
    ✘ 16/25 — 16/25, cos²x. Kare kökü almadan bırakılmış.
    ✘ 2/5 — 1 − 3/5 yapılmış. Karesel ilişkiyi (Pisagor) atlayıp doğrusal çıkarma yapmış olabilirsin.
    ✘ 3/4 — 3/4, yüksekliğin yatay uzaklığa oranı (tanjant). Soru yatay uzaklığın kendisini istiyor.
  - Açıklama: Yöntem: karesini kur (1 − sin²), karekökünü al, işareti bölgeye göre seç.
- Adım 9 (mcq)
  - Soru: sin 210° kaçtır?
    ✔ −1/2 — 210° = 180° + 30°. Nokta, 30°'nin merkeze göre karşı tarafında: aynı uzaklık ama aşağıda. Yükseklik −1/2.
    ✘ 1/2 — Büyüklük doğru ama kabin x ekseninin altında; yükseklik negatif olmalı.
    ✘ −√3/2 — Bu değer 240° ve 300° için geçerli. 210°'de nokta eksene daha yakın.
    ✘ √3/2 — Hem işaret hem büyüklük kaymış: √3/2 hem pozitif hem 60° çevresine ait.
  - Açıklama: Hep önce işareti (hangi bölge?), sonra büyüklüğü (hangi 'referans açı'?) belirle.
- Adım 10 (mcq)
  - Soru: cos 120° kaçtır?
    ✔ −1/2 — 120° = 180° − 60°. Nokta sol tarafta: yatay uzaklık negatif. 60°'nin yatay uzaklığı 1/2 idi → −1/2.
    ✘ 1/2 — Büyüklük doğru ama nokta merkezin solunda; kosinüs (yatay uzaklık) negatif.
    ✘ −√3/2 — √3/2, 120°'nin yüksekliği (sinüs) ile ilişkili. Burada kosinüs sorulmuş.
    ✘ √3/2 — Sinüs ve kosinüsü karıştırmış olabilirsin: 120°'de sinüs √3/2'dir.
  - Açıklama: Kosinüs yatay uzaklıktır: sağda pozitif, solda negatif.
- Adım 11 (mcq)
  - Soru: 0° ≤ x < 360° için sin x = −1/2 denklemini sağlayan açılar hangileridir?
    ✔ 210° ve 330° — Yükseklik −1/2 olan iki nokta var: ikisi de x ekseninin altında, 180°+30° ve 360°−30°.
    ✘ 30° ve 150° — Bu iki nokta yüksekliği +1/2 olanlar. Eksi işareti atlanmış.
    ✘ Yalnızca 210° — Aynı yükseklikte iki nokta var: çemberde yatay bir doğru çemberi iki yerde keser.
    ✘ 120° ve 240° — Bu açılarda kosinüs −1/2'dir; sinüs değil. İki fonksiyon karıştırılmış.
  - Açıklama: Çemberde yatay bir çizgi (sabit yükseklik) çemberi iki yerde keser: bu yüzden denklemin genelde iki çözümü vardır.
- Adım 12 (reflect)
  - Soru: Peki ya neden? Sinüs ve kosinüs neden hiçbir zaman 1'i aşamaz? Çemberle kendi cümlenle açıkla.
  - Örnek düşünce: Örnek düşünce: Yükseklik ve yatay uzaklık, çember üzerindeki bir noktanın merkeze uzaklığı olan 1'in 'bileşenleri'. Bir bileşen, parçası olduğu uzunluktan büyük olamaz; Pisagor'dan sin² + cos² = 1 olduğu için ikisi de karesi 1'den fazla olamaz. Bu yüzden değerler −1 ile 1 arasında kalır.
- Adım 13 (reflect)
  - Soru: Gerçek hayatta 'düzenli tekrarlanan' ve 'yükselip alçalan' hangi olaylar sinüs eğrisine benzeyebilir? İki örnek yaz ve neden benzediğini söyle.
  - Örnek düşünce: Örnek düşünce: Dönme dolap, sarkaç, deniz dalgası ya da müzikteki ses dalgası. Ortak nokta, bir dairesel hareketin tek bir yöndeki gölgesi gibi davranmaları. Mevsime göre gün uzunluğu da yaklaşık böyle tekrarlanır, ama tam bir sinüs eğrisi değildir; modelleme her zaman bir yaklaşıklıktır.
- Adım 14 (text): Bugünün özeti
  - Anlatım: Bugünkü keşif tamamlandı. Birim çemberde sinüs yükseklik, kosinüs yatay uzaklıktır. Sinüs kare artı kosinüs kare her zaman birdir. Değerler eksi bir ile bir arasındadır ve her üç yüz altmış derecede tekrarlanır.
  - İçerik: sin x = çember üzerindeki noktanın yüksekliği ; cos x = yatay uzaklığı . Önce bölgeyi (işaret), sonra referans açıyı (büyüklük) düşün. sin²x + cos²x = 1 : Pisagor'un çemberdeki hâli. Değerler −1 ile 1 arasında; her 360° 'de tekrar. Sinüs ve kosinüs aynı dalga ; biri 90° kaymış. Hız değil bakış: sınavda bir değer sorulduğunda zihninde çemberi canlandırabiliyorsan, tabloyu unutsan da yeniden kurabilirsin.

### ders:mat-ustel-log — Bakteri çoğalıyor: üstel büyüme ve logaritma [mat] (11. sınıf — MEB Maarif programında 'Nicelikler ve Değişimler' teması kapsamında; kazanım kodu ve metni resmî programdan doğrulanacak)
Kanca: Her saat ikiye katlanan bir şey ne kadar sürede bir milyona ulaşır?
- Adım 1 (text): Her saat ikiye katlanan bakteri
  - Anlatım: Bir kaba tek bir bakteri koyuyoruz. Her saat sonunda sayıları ikiye katlanıyor. Kaç saat sonra bir milyonu aşarlar?
  - İçerik: Bir bakteri her saat ikiye katlanıyor . Saat 0 1 2 3 4 10 Bakteri 1 2 4 8 16 1024 Her satır bir öncekinin 2 katı : eklemek değil, çarpmak . Bu yüzden büyüme önce yavaş görünür, sonra patlar. İki soru var: (1) t saat sonra kaç bakteri olur? (2) Bakteri sayısı bir milyonu geçsin: kaç saat beklemeliyiz? Birincisi üstel fonksiyon , ikincisi logaritma .
- Adım 2 (expo): Tabanı değiştir, eğriye bak
  - Anlatım: Kaydırıcıyla taban a'yı değiştir. a üzeri x eğrisinin nasıl değiştiğini izle. Tabloda x'in farklı değerleri için değerler var.
- Adım 3 (mcq)
  - Soru: Hangi nokta, tabanı ne olursa olsun (a > 0, a ≠ 1) y = aˣ eğrilerinin hepsinden geçer?
    ✔ (0, 1) — Tabloda x = 0 sütunu her tabanda 1 çıktı. Kaydırıcıyı nereye çekersen çek eğri aynı noktadan geçiyor.
    ✘ (1, 0) — x = 1'de değer tabanın kendisi (a¹ = a); tabana göre değişiyor. Üstel eğri y = 0'a hiç değmez.
    ✘ (0, 0) — Üstel eğri x eksenine yaklaşır ama onu asla kesmez: aˣ hiçbir zaman 0 olmaz.
    ✘ (1, 1) — (1, 1) yalnızca a = 1 için geçerli olurdu; a = 1 ise eğri düz bir çizgi. Diğer tabanlar için x = 1'de y = a.
  - Açıklama: Ortak nokta (0, 1). Peki neden a⁰ = 1? Sıradaki adımda bir örüntüden bulacağız.
- Adım 4 (mcq)
  - Soru: 0 < a < 1 iken (örneğin a = 1/2) x büyüdükçe y = aˣ ne yapar?
    ✔ Azalır ama hiçbir zaman 0 olmaz — (1/2)ˣ: 1, 1/2, 1/4, 1/8… Her adımda yarıya iniyor; küçülüyor ama 0'a ulaşmıyor.
    ✘ Artar — Artış için taban 1'den büyük olmalı. 1/2 ile çarpmak değeri küçültür.
    ✘ Sabit kalır — Sabit kalan taban 1'dir (1ˣ = 1). 1/2 ile çarpmak değeri değiştiriyor.
    ✘ Bir süre sonra negatif olur — Pozitif bir sayıyı 1/2 ile çarpmak hep pozitif sonuç verir; aˣ (a > 0) hiç negatif olmaz.
  - Açıklama: a > 1: üstel büyüme. 0 < a < 1: üstel azalma (örneğin ilacın kandaki miktarı).
- Adım 5 (text): Neden a⁰ = 1 ve neden a⁻ⁿ = 1/aⁿ? Örüntü söylüyor
  - Anlatım: İki üzeri üç sekiz, iki üzeri iki dört, iki üzeri bir iki. Her adım geri giderken ikiye bölünüyor. Bu yüzden iki üzeri sıfır bir, iki üzeri eksi bir bir bölü iki olmalı.
  - İçerik: 2³ = 8 2² = 4 &nbsp; (8 ÷ 2) 2¹ = 2 &nbsp; (4 ÷ 2) 2⁰ = 1 &nbsp; (2 ÷ 2) 2⁻¹ = 1/2 &nbsp; (1 ÷ 2) 2⁻² = 1/4 Üs 1 azaldıkça değer a'ya bölünüyor . Bu örüntü bozulmasın diye a⁰ = 1 ve a⁻ⁿ = 1/aⁿ olmak zorunda. Neden böyle? Bu bir keyfî tanım değil: üs kuralı aᵐ · aⁿ = aᵐ⁺ⁿ 'in bozulmaması için tek seçenek. Örneğin a⁰ · a³ = a³ ise a⁰ = 1 olmak zorunda.
- Adım 6 (mcq)
  - Soru: 3⁻² kaçtır?
    ✔ 1/9 — 3⁻² = 1/3² = 1/9. Negatif üs, tersini almak demek.
    ✘ −9 — Negatif üs sonucu negatif yapmaz; tersini alır. 3⁻² pozitiftir.
    ✘ −6 — 3 · (−2) yapılmış. Üs, çarpan değil, kaç kez çarpıldığını söyler.
    ✘ 1/6 — 3² yerine 3·2 = 6 alınmış. Üs 2 demek 3 · 3 demek, 3 · 2 değil.
  - Açıklama: Önce işareti değil işlemi düşün: negatif üs → ters çevir, pozitif üs gibi hesapla.
- Adım 7 (text): Soruyu ters çevir: logaritma = 'kaçıncı üs?'
  - Anlatım: Üstel fonksiyon, üssü verilince sonucu bulur. Logaritma tersini yapar: sonuç verilince üssü bulur. İki üzeri kaç sekiz eder? Üç. Bunu iki tabanında log sekiz eşittir üç diye yazarız.
  - İçerik: İki üzeri kaç 8 eder? 2 ? = 8 &nbsp;⟹&nbsp; ? = 3 &nbsp;⟹&nbsp; log₂ 8 = 3 logₐ b = "a'yı kaçıncı üssüne çıkarırsam b olur?" log₂ 8 = 3 ⟺ 2³ = 8 &nbsp;(aynı bilgi, iki yazılış) Bakteri sorumuz: 2ᵗ ≥ 1.000.000 olması için t ≈ log₂ 1.000.000 ≈ 20 saat. Neden böyle? Logaritma yeni bir işlem değil: üstel fonksiyonun ters sorusu . Toplama için çıkarma, çarpma için bölme ne ise, üs alma için logaritma o.
- Adım 8 (expo): Ayna: üstel ve logaritma aynı hikâye
  - Anlatım: Şimdi hem a üzeri x eğrisini hem de logaritma eğrisini görüyorsun. İkisi y eşittir x doğrusuna göre birbirinin ayna görüntüsü.
- Adım 9 (mcq)
  - Soru: Aynada (0, 1) noktası (1, 0) oluyorsa logₐ 1 kaçtır?
    ✔ 0 — Aynadaki (1, 0) noktası: x = 1 iken y = 0. Yani logₐ 1 = 0: a'yı 0 üssüne çıkarınca 1 olur (a⁰ = 1).
    ✘ 1 — logₐ a = 1 (a'yı 1. üsse çıkarınca a olur). Burada sorulan 1'in logaritması, a'nın değil.
    ✘ a — Logaritmanın sonucu bir üs; tabanın kendisi değil.
    ✘ Tanımsız — Tanımsız olan logₐ 0 ve logₐ (negatif sayı) ifadeleridir. 1'in logaritması her tabanda tanımlı.
  - Açıklama: Her tabanda logₐ 1 = 0 çünkü a⁰ = 1.
- Adım 10 (mcq)
  - Soru: log₂ 32 kaçtır?
    ✔ 5 — 2⁵ = 32. İki'yi 5 kez çarpınca 32 oluyor.
    ✘ 16 — 32 ÷ 2 yapılmış. Logaritma bölmek değil, üssü sorar.
    ✘ 6 — 2⁶ = 64. Bir üs fazla alınmış; 2'yi sırayla çarp: 2, 4, 8, 16, 32 — beşinci.
    ✘ 4 — 2⁴ = 16. Bir üs eksik kalmış.
  - Açıklama: Sorunu tersine çevir: 2 üzeri kaç = 32?
- Adım 11 (mcq)
  - Soru: log₃ (1/9) kaçtır?
    ✔ −2 — 3⁻² = 1/9 olduğundan log₃ (1/9) = −2. Üs negatif olabilir; 1'den küçük sayılar negatif üs ister.
    ✘ 2 — 3² = 9, 1/9 değil. 1/9 için ters çevirmek gerekir: üs negatif.
    ✘ −3 — 3⁻³ = 1/27. Bir üs fazla.
    ✘ 1/2 — 3^(1/2) = √3. 1/9 ile ilgisi yok.
  - Açıklama: x < 1 ise (x > 0) log negatif, x > 1 ise pozitif (a > 1 için).
- Adım 12 (text): Çarpmayı toplamaya çeviren araç
  - Anlatım: Üsler çarpılırken toplanır. Bu yüzden iki sayının çarpımının logaritması, logaritmalarının toplamıdır.
  - İçerik: 2² · 2³ = 2⁵ &nbsp;(üsler toplanıyor : 2 + 3 = 5). Aynı bilgiyi logaritmayla yazalım: log₂ 4 + log₂ 8 = log₂ 32 &nbsp;&nbsp;(2 + 3 = 5) Genel olarak: logₐ (m · n) = logₐ m + logₐ n ve logₐ (m ÷ n) = logₐ m − logₐ n . Neden önemli? Çarpma ve bölme, toplama ve çıkarmaya dönüşüyor. Depremde Richter ölçeği, ses şiddetinde desibel, asitlikte pH: çok büyük aralıklı niceliklerin ölçeğini küçültmek için logaritma kullanılır. (Ölçeklerin tam tanımı derse göre değişir; fikir aynıdır.)
- Adım 13 (mcq)
  - Soru: log₂ 4 + log₂ 8 kaçtır?
    ✔ 5 — log₂ 4 = 2, log₂ 8 = 3; toplam 5. (= log₂ 32)
    ✘ 6 — 2 · 3 yapılmış. Logaritmalar toplanır; çarpımı ise içteki sayılar verir (4 · 8).
    ✘ 12 — 4 + 8 yapılmış: logaritmanın içindeki sayılar toplanmaz, logaritmaların kendileri toplanır.
    ✘ log₂ 12 — log₂ (4 + 8) yazmışsın. Kural 'çarpım ↔ toplam': log₂ 4 + log₂ 8 = log₂ (4 · 8).
  - Açıklama: Toplamı çarpıma çevir: log₂ 4 + log₂ 8 = log₂ 32 = 5.
- Adım 14 (reflect)
  - Soru: Peki ya neden? logₐ 0 ve negatif sayıların logaritması neden yok? Üstel eğrinin grafiğini hatırlayarak yaz.
  - Örnek düşünce: Örnek düşünce: aˣ (a > 0) her zaman pozitif; hiçbir üs, sonucu 0 ya da negatif yapmıyor. Logaritma bu ters soruyu cevaplıyor: 'a kaçıncı üs b eder?' b 0 ya da negatifse böyle bir üs yok. Aynada da görünür: aˣ eğrisi x eksenine hiç değmez; ayna görüntüsü olan log eğrisi de y eksenine yaklaşır ama onu geçmez.
- Adım 15 (reflect)
  - Soru: Kendi cümlenle yaz: Hayatta üstel büyüme ya da üstel azalma nerede olabilir? Bir örnek ver ve 'her adımda neyle çarpılıyor?' sorusunu cevapla.
  - Örnek düşünce: Örnek düşünce: bakteri çoğalması (her saat 2 ile çarpılıyor), faiz (her yıl 1 + faiz oranı ile), ilacın kandaki miktarı (her saat 0 ile 1 arasında bir sayı ile), bir haberin yayılması. Ortak: her adımda toplamayla değil, sabit bir sayıyla çarpma. Gerçek hayatta bu büyüme sonsuza dek sürmez (besin biter, nüfus doyar); model belli bir aralıkta geçerlidir.
- Adım 16 (text): Bugünün özeti
  - Anlatım: Bugünkü keşif tamamlandı. Üstel fonksiyon her adımda sabit bir sayıyla çarpar. Bütün üstel eğriler sıfır virgül bir noktasından geçer. Logaritma, kaçıncı üs sorusudur. Üstel ve logaritma eğrileri y eşittir x doğrusuna göre birbirinin aynadaki görüntüsüdür.
  - İçerik: aˣ : her adımda a ile çarpma . a > 1 büyüme, 0 Her taban için (0, 1) ortak nokta: a⁰ = 1 , a⁻ⁿ = 1/aⁿ (örüntüden). logₐ b = "a kaçıncı üs b eder?" Logaritma = ters soru . Eğriler y = x 'e göre ayna: (0, 1) ↔ (1, 0) ⇒ logₐ 1 = 0 . logₐ (m·n) = logₐ m + logₐ n : çarpma ↔ toplama. Logaritma yalnızca pozitif sayılar için tanımlı. Hız değil bakış: logaritma gördüğünde "kaçıncı üs?" diye sorarsan formül aklına bir daha takılmaz.

### ders:tur-paragraf-giris — Paragraf nedir? (sıfırdan başlıyoruz) [tur] (TYT Türkçe — paragraf: konu, ana düşünce, yardımcı düşünce)
Kanca: Arkadaşın sana 'dün çok kötü bir gün geçirdim, önce telefonum bozuldu, sonra otobüsü kaçırdım' dedi. Sence asıl derdi ne?
- Adım 1 (mcq)
  - Soru: Arkadaşın şöyle anlatıyor: 'Dün çok kötü bir gün geçirdim. Sabah telefonum bozuldu, sonra otobüsü kaçırdım, akşam da şemsiyem yoktu, sırılsıklam oldum.' Arkadaşın sana ne söylemek istiyor?
    ✔ Dün her şey ters gitti, üzgün. — Telefon, otobüs ve yağmur tek bir sonuca işaret ediyor: “her şey ters gitti”. Ayrıntılar bu sonucu destekler; asıl söylenen o ortak sonuçtur.
    ✘ Telefonu bozuldu. — Bu üç olaydan sadece biri. Asıl söylemek istediği, hepsinin toplamı.
    ✘ Şemsiyesi yok. — Bu da yalnızca bir ayrıntı.
  - Açıklama: Paragraf de böyle işler: cümleler tek tek ayrıntıdır, hepsinin işaret ettiği ortak fikir ana düşüncedir. Bu derste bu ortak fikri bulmayı adım adım öğreneceğiz.
- Adım 2 (text): Paragraf nedir?
  - Anlatım: Paragraf, tek bir düşünceyi anlatan cümleler grubudur. Bir paragrafta bir konu vardır, bir de bu konu hakkında söylenen asıl düşünce vardır.
  - İçerik: Paragraf = tek bir fikri anlatan cümleler topluluğu. Cümle Tek bir anlam bildirir. Paragraf Birkaç cümle, tek ortak fikir . Sınavda paragraf sorusu = "Bu metin sana ne söylüyor?" sorusunun farklı biçimleri.
- Adım 3 (text): Üç kavram: konu, ana düşünce, yardımcı düşünce
  - Anlatım: Konu, metnin hakkında konuştuğu şeydir. Ana düşünce, o konu hakkında yazarın asıl söylediğidir. Yardımcı düşünceler ise ana düşünceyi destekleyen ayrıntılardır.
  - İçerik: Konu "Neyden bahsediyor?" Örnek: uyku Ana düşünce "Konu hakkında asıl ne diyor?" Örnek: Düzenli uyku başarıyı artırır. Yardımcı düşünce Ana düşünceyi destekleyen ayrıntı. Örnek: Uykusuz kalan öğrenci dersi öğrenemez. Benzetme: Konu = filmin adı. Ana düşünce = filmin vermek istediği mesaj. Yardımcı düşünceler = mesajı anlatan sahneler.
- Adım 4 (mcq)
  - Parça: Müzik dinlemek yalnızca eğlence değildir. Yorgun bir zihin müzikle dinlenir, sakinleşir ve yeniden odaklanır. Bu yüzden birçok kişi çalışmaya başlamadan önce sevdiği şarkıları açar.
  - Soru: Bu parçanın KONUSU nedir?
    ✔ Müzik dinlemek — Parça baştan sona müzik dinlemekten söz ediyor. Konu 'neyden bahsediliyor?' sorusunun cevabıdır.
    ✘ Müzik dinlemek zihni dinlendirir. — Bu, konu hakkında söylenen yargı: yani ana düşünce. Konu tek bir söz öbeğidir.
    ✘ Çalışmaya başlamak — Parçada çalışma yalnızca bir örnek olarak geçiyor.
  - Açıklama: Konu kısa bir ad gibidir ('müzik dinlemek'). Cümle gibi bir yargı değildir.
- Adım 5 (mcq)
  - Parça: Müzik dinlemek yalnızca eğlence değildir. Yorgun bir zihin müzikle dinlenir, sakinleşir ve yeniden odaklanır. Bu yüzden birçok kişi çalışmaya başlamadan önce sevdiği şarkıları açar.
  - Soru: Bu parçanın ANA DÜŞÜNCESİ nedir?
    ✔ Müzik, zihni dinlendirip odaklanmayı kolaylaştırır. — Yazar 'yalnızca eğlence değildir' diyerek asıl yargısına geliyor: müzik zihne iyi gelir. Bu tam cümle bir yargıdır.
    ✘ Müzik dinlemek — Bu konu. Ana düşünce, konu hakkındaki yargıdır.
    ✘ Herkes çalışmadan önce müzik açar. — 'Birçok kişi' denmiş, 'herkes' denmemiş. Üstelik bu sadece bir ayrıntı.
  - Açıklama: Ana düşünceyi bulurken: 'Yazar bu konu hakkında ne diyor?' diye sor.
- Adım 6 (text): Soru kökü sözlüğü: sınav sana nasıl sorar?
  - Anlatım: Aynı paragraf için sınav farklı sorular sorar. Köke bakıp neyi istediğini anlamak, çözümün yarısıdır.
  - İçerik: "Parçanın konusu" Kısa bir ad: hakkında ne? "Ana düşünce / vurgulanan / anlatılmak istenen" Yargı cümlesi: ne diyor? "Yardımcı düşünce" Destek ayrıntı. "Parçaya göre … söylenemez / çıkarılamaz" Metinde olmayanı bul.
- Adım 7 (tap)
  - Soru: Paragraftaki ANA DÜŞÜNCE cümlesine dokun.
    ✘ Sabahları kahvaltı yapan öğrenciler derse daha iyi odaklanır. — Bir gözlem; ana yargıyı destekleyen ayrıntı gibi duruyor.
    ✘ Çünkü beyin, güne enerji almadan başlamayı sevmez. — Nedenini açıklıyor; yardımcı düşünce.
    ✔ Bu yüzden kahvaltı, günün en önemli öğünüdür. — 'Bu yüzden' ile önceki cümlelerden bir yargıya varılıyor; asıl söylenen bu.
    ✘ Yine de birçok kişi sabah acelesinden bu öğünü atlıyor. — Durum tespiti; yargı değil.
  - Açıklama: Sonuç sözcükleri (bu yüzden, demek ki, bu nedenle) çoğu zaman ana düşünceyi işaret eder.
- Adım 8 (text): Üç yaygın tuzak
  - Anlatım: Birincisi: ayrıntıyı ana düşünce sanmak. İkincisi: metinde olmayanı eklemek. Üçüncüsü: bazı yerine her demek.
  - İçerik: 1. Ayrıntı ≠ ana düşünce Örnek ve sayı yardımcıdır. 2. Fazla yorum Yazar söylemediğini sen ekleme. 3. "Bazı" ≠ "her" Kelimenin kapsamına dikkat.
- Adım 9 (mcq)
  - Parça: Bazı insanlar sabah erken kalkınca günün daha verimli geçtiğini söylüyor. Ancak bu, herkes için geçerli bir kural değil; kimi insanın zihni akşam saatlerinde daha canlı çalışıyor. Önemli olan, kendi ritmini tanımak.
  - Soru: Bu parçada asıl vurgulanan düşünce nedir?
    ✔ Verimli olmanın saati kişiden kişiye değişir; kendi ritmini bilmek önemlidir. — 'Ancak' sonrasında yazarın asıl düşüncesi geliyor.
    ✘ Sabah erken kalkmak herkesi verimli yapar. — Metin bunu söyleyen 'bazı insanlar'ın görüşünü aktarıyor ve sonra çürütüyor.
    ✘ Akşam çalışmak sabahtan iyidir. — Metin böyle bir kıyas yapmıyor; sadece 'kimi insan' diyor.
  - Açıklama: 'Ancak, oysa, fakat' gibi bağlaçlar fikir dönüşü işaretidir; ana düşünce çoğu zaman dönüşten sonradır.
- Adım 10 (reflect)
  - Soru: Peki ya neden? Yazarlar düşüncelerini neden tek bir cümleyle söylemeyip örnekler ve ayrıntılar da ekler? Sen bir arkadaşına bir şey anlatırken ne yapıyorsun?
  - Örnek düşünce: Örnek düşünce: Sadece yargı söylersen karşındaki 'neden?' diye sorar. Örnek ve ayrıntı, söylediğine inanmasını sağlar. Paragraf okurken de örnekleri 'yargıyı destekleyen kanıt' olarak gör, yargının kendisi gibi değil.
- Adım 11 (text): Bugünün özeti ve sınavda ne işe yarar
  - Anlatım: Konu kısa bir addır, ana düşünce konu hakkında söylenen asıl yargıdır, yardımcı düşünce ise destektir.
  - İçerik: Konu : neyden bahsediliyor? Ana düşünce : konu hakkında asıl ne diyor? Yardımcı düşünce : ana düşünceyi destekleyen ayrıntı. Sınavda TYT Türkçe'nin yaklaşık 26–28 sorusu paragraf. Önce sorunun kökünü oku, sonra parçada dönüş ve sonuç bağlaçlarını ara.

### ders:tur-paragraf — Paragrafın kilit cümlesi [tur] (TYT Türkçe — paragraf (ana düşünce, yapı, anlatım biçimi); Maarif kazanım eşlemesi doğrulanacak)
Kanca: Bir paragrafı 'kaldırma testi' ile çöz.
- Adım 1 (text): Yazar bu paragrafı neden yazdı?
  - Anlatım: Her paragrafın bir konusu, bir ana düşüncesi ve bu düşünceyi destekleyen ayrıntıları vardır. Konu, hakkında konuşulan şeydir. Ana düşünce, o konuda söylenen şeydir. Kaldırma testi: hangi cümle çıkarılırsa paragraf anlamını yitirir?
  - İçerik: Bir tweet de, haber başlığı da, paragraf da aynı soruya cevap verir: "Yazar bana ne söylemek istiyor?" Konu Hakkında konuşulan şey. "Navigasyon" Ana düşünce Konu hakkında söylenen yargı . "Navigasyon bazı becerilerimizi kullanmamızı engelliyor." Destek Örnek, karşılaştırma, ayrıntı. Yargıyı ikna edici kılar. Kaldırma testi: Hangi cümleyi silersem paragraf asıl derdini kaybeder? O cümle kilit cümledir. Örnekleri silsen de dert aynı kalır.
- Adım 2 (tap)
  - Soru: Aşağıdaki paragrafta kilit cümleyi (yazarın asıl yargısını) dokunarak seç.
    ✘ Eskiden bir şehri tanımak için haritaya bakmak yeterliydi. — Zemin hazırlayan giriş. Silsen de yargı ortada kalır: asıl derdi söylemiyor.
    ✘ Bugün telefondaki konum noktası bizi hedefe götürüyor, ama yolu öğrenmemizi sağlamıyor. — Dikkat: 'ama' ile yargıya yaklaşıyor. Fakat bu hâlâ bir gözlem; yargı bir sonraki cümlelerde netleşiyor.
    ✘ Bazı sürücüler yıllarca aynı güzergâhı kullandığı hâlde, uygulama kapanınca evine dönmekte zorlanıyor. — Bu bir örnek. Örnek ayrıntıdır; ana düşünce değildir.
    ✔ Demek ki teknoloji bize kolaylık verirken bazı zihinsel becerilerimizi kullanmaktan alıkoyabiliyor. — 'Demek ki' bir sonuç bağlacı: yazar önceki cümlelerden yargısını çıkarıyor. Kilit cümle bu.
  - Açıklama: Kilit cümleyi bulmanın ipucu: sonuç bağlaçları (demek ki, bu nedenle, sonuç olarak) ve dönüş bağlaçları (ama, oysa, fakat) çoğu zaman yargının yanındadır.
- Adım 3 (mcq)
  - Parça: Eskiden bir şehri tanımak için haritaya bakmak yeterliydi. Bugün telefondaki konum noktası bizi hedefe götürüyor, ama yolu öğrenmemizi sağlamıyor. Bazı sürücüler yıllarca aynı güzergâhı kullandığı hâlde, uygulama kapanınca evine dönmekte zorlanıyor. Demek ki teknoloji bize kolaylık verirken bazı zihinsel becerilerimizi kullanmaktan alıkoyabiliyor.
  - Soru: Bu parçanın ana düşüncesi aşağıdakilerden hangisidir?
    ✔ Teknoloji, kolaylık sağlarken bazı zihinsel becerilerimizin kullanılmasını engelleyebilir. — Kilit cümlenin genel ifadesi. Hem kapsamı (teknoloji) hem yargıyı (kolaylık ↔ beceri kaybı) taşıyor.
    ✘ Sürücüler evlerine dönmekte zorlanıyor. — Örnek ayrıntıyı ana düşünce sanmak. Örnek, yargıyı desteklemek için seçilmiş.
    ✘ Haritalar artık işe yaramıyor. — Yazar bunu söylemiyor. 'Eskiden harita yeterliydi' demek, 'artık yaramıyor' demek değil; metinde olmayanı çıkarmışsın.
    ✘ Teknolojiden uzak durmalıyız. — Yazar öneri veya yasak getirmiyor, bir durumu tespit ediyor. 'Gereklidir/kaçınmalıyız' gibi bir yargı metinde yok.
    ✘ Her sürücü navigasyona bağımlı olmuştur. — Aşırı genelleme. Metin 'bazı sürücüler' diyor; 'her' demek kapsamı büyütmek.
  - Açıklama: Seçeneklerde sık görülen üç tuzak: ayrıntıyı ana düşünce yapmak, yazarın söylemediğini eklemek, 'bazı'yı 'her' yapmak.
- Adım 4 (text): Yazarın düşünce kurma araçları: bağlaçlar
  - Anlatım: Yazar düşüncesini işaret sözcükleriyle kurar. Demek ki, bu nedenle sonuç bildirir. Ama, oysa, fakat dönüş yapar, önceki fikri çevirir. Örneğin ise örnek verir.
  - İçerik: Sonuç demek ki, bu nedenle, dolayısıyla, sonuç olarak Yargı genelde burada. Dönüş ama, oysa, fakat, ancak Yazar bir fikri geri çevirip asıl fikrine geçer. Örnek örneğin, mesela Destek: yargı değil. Hızlı okumanın dürüst hâli: her kelimeyi hızlı okumak değil, işaret bağlaçlarını yakalayıp yargının yerini tahmin etmek. Önce ilk ve son cümleye, sonra bağlaçlara bak; geri kalanı destek olarak oku.
- Adım 5 (mcq)
  - Parça: Gençlere sık sık “Kitap okumuyorsunuz” denir. Oysa bugün hiçbir kuşak bu kadar çok yazı okumuyor: mesajlar, altyazılar, haber başlıkları, oyun diyalogları… Sorun okumanın azalması değil, okunanın kısa ve dağınık olması. Uzun bir metni baştan sona izlemek ise ayrı bir beceri ve bu beceri ancak sürekli denenerek güçleniyor.
  - Soru: Parçadaki “Oysa” sözcüğü ne işlev görüyor?
    ✔ Baştaki yargıyı çevirip yazarın asıl düşüncesine geçişi sağlıyor. — Önce yaygın görüş ('okumuyorsunuz'), 'oysa' ile bu görüşün karşısına yazarın düşüncesi (çok okuyoruz, sorun biçimde) geliyor.
    ✘ Bir örnek vermeye başlıyor. — 'Örneğin' örnek açar. 'Oysa' ise önceki cümleyle zıt bir şey söyler.
    ✘ Önceki cümleden bir sonuç çıkarıyor. — Sonuç bağlaçları 'demek ki, bu yüzden'. 'Oysa' tam tersi: önceki cümleyi çürütür.
    ✘ İki şeyi benzerlik yönünden karşılaştırıyor. — Karşılaştırma ile çelişme farklı. Burada iki fikir benzemiyor, biri diğerine karşı çıkıyor.
  - Açıklama: Dönüş bağlacından sonrası genelde yazarın 'asıl' dediği kısımdır.
- Adım 6 (mcq)
  - Parça: Gençlere sık sık “Kitap okumuyorsunuz” denir. Oysa bugün hiçbir kuşak bu kadar çok yazı okumuyor: mesajlar, altyazılar, haber başlıkları, oyun diyalogları… Sorun okumanın azalması değil, okunanın kısa ve dağınık olması. Uzun bir metni baştan sona izlemek ise ayrı bir beceri ve bu beceri ancak sürekli denenerek güçleniyor.
  - Soru: Bu parçada asıl vurgulanan düşünce hangisidir?
    ✔ Gençlerin okuma sorunu, azlıktan çok okunanın kısa ve dağınık olmasından kaynaklanır; uzun metin okuma ise pratikle gelişir. — Dönüşten sonraki yargıyı ve son cümledeki yargıyı birlikte taşıyor.
    ✘ Gençler hiç kitap okumuyor. — Yazar tam tersini söylüyor: bu, 'oysa' ile çevrilen görüş.
    ✘ Mesajlaşma okuma alışkanlığını bozar. — Yazar mesajları kötülemiyor; 'okunanın kısa olması'ndan söz ediyor. Metinde olmayan bir değerlendirme eklemişsin.
    ✘ Uzun metin okumak eskiden daha kolaydı. — Eskiyle kıyaslama metinde yok. Yazar bir beceriden ve pratikten söz ediyor.
  - Açıklama: Yapı: yaygın görüş → 'oysa' dönüşü → asıl yargı → sonuç. Böyle paragraflarda ana düşünce dönüşten sonrasında aranır.
- Adım 7 (tap)
  - Soru: 20 saniye: önce 'Demek ki' gibi yargı bağlacını bul, sonra kilit cümleyi seç.
    ✘ Kimi insan yeni bir şey öğrenirken hata yapmaktan çekinir. — Durumun tespiti. Yargı henüz yok.
    ✘ Oysa bisiklet sürmeyi öğrenen hiç kimse ilk denemede düşmeden pedal çeviremez. — Dönüş cümlesi, ama bisiklet bir örnek. Yargıyı örnekle destekliyor.
    ✘ Düşmek, dengeyi anlamanın bir parçasıdır. — Örneğin yorumu. Yargıya çok yakın ama genel bir ifade değil, bisikletin içinde kalıyor.
    ✔ Demek ki hatadan korkmak değil, hatadan ders çıkarmak öğrenmenin yoludur. — Sonuç bağlacı + genel yargı. Ana düşünce bu.
  - Açıklama: Önce bağlaca git. 'Demek ki' burada 'önceki ayrıntılardan şunu çıkarıyorum' diyor.
- Adım 8 (reflect)
  - Soru: Peki ya neden? Yazar yargısını anlatmak için neden bisiklet örneğini seçmiş? Başka bir örnek (ör. yüzme, yemek yapmak) olsaydı ne değişirdi?
  - Örnek düşünce: Örnek düşünce: Bisiklet herkesin bildiği, düşmenin öğrenmenin içinde olduğu somut bir deneyim. Okur 'ben de düşmüştüm' diye kendini örneğin içinde buluyor. Yüzme ya da yemek de olurdu ama düşmenin görünür bir 'hata' olduğu örnek bisiklettir. Örnek seçimi, yazarın okuru nasıl ikna edeceğini gösterir.
- Adım 9 (text): Bugünün özeti
  - Anlatım: Bugünkü keşif tamamlandı. Konu, ana düşünce ve destek farklı şeylerdir. Kilit cümleyi bağlaçlar işaret eder. Soru seçeneklerinde ayrıntıyı ana düşünce yapma, metinde olmayanı ekleme, bazıyı her yapma tuzaklarına dikkat et.
  - İçerik: Konu ≠ ana düşünce ≠ destek. Kilit cümle için: kaldırma testi + sonuç/dönüş bağlaçları. Üç tuzak: ayrıntıyı ana düşünce yapmak , metinde olmayanı eklemek , "bazı"yı "her" yapmak . Hız, bu bakış oturunca kendiliğinden gelir; bugün hız değil bakış çalıştık.

### ders:tar-malazgirt — Malazgirt: savaş neden dönüm noktası? [tar] (TYT Tarih — Anadolu'nun Türkleşmesi; neden–sonuç ve kronoloji düşüncesi)
Kanca: Tarihi tarih ezberleyerek değil, 'önce ne vardı, sonra ne değişti?' diye sorarak öğren.
- Adım 1 (text): Bir olayı anlamak = önce–sonra farkını görmek
  - Anlatım: Tarih yıl listesi değildir. Bir olaydan önceki durumu ve sonraki durumu karşılaştır; fark, olayın önemini verir.
  - İçerik: Bir yarışta takımın sahaya çıkması önemli değildir; maçtan önce ve sonra tabloda ne değişti? önemlidir. Önce 1071'den önce Türkler Anadolu'ya akınlar düzenler ama kalıcı yerleşmek zordur. Olay 26 Ağustos 1071: Malazgirt. Alparslan, Bizans İmparatoru Romen Diyojen'i yenip esir alır. Sonra Bizans savunması çöker, Türkmenler Anadolu'ya yerleşir; kısa sürede beylikler ve Anadolu Selçuklu Devleti kurulur. Soru kalıbı: Bu olay olmasaydı ne farklı olurdu?
- Adım 2 (mcq)
  - Soru: Malazgirt'in 'dönüm noktası' sayılmasının asıl nedeni aşağıdakilerden hangisidir?
    ✔ Bizans'ın Anadolu'daki savunmasını kıran bu zaferle Türklerin Anadolu'ya yerleşmesi hızlanmıştır. — Önce–sonra farkı: akın dönemi bitiyor, yerleşme başlıyor.
    ✘ Romen Diyojen'in esir alınmış olması. — Esir alınması sonuçlardan biri; dönüm noktası olmasının nedeni bu değil, ortaya çıkan siyasî ve askerî değişim.
    ✘ Savaşın Ağustos ayında yapılmış olması. — Tarih bilgisini nedene çevirme hatası: ay sonuç doğurmaz.
    ✘ Selçukluların ilk kez savaş kazanması. — Selçuklular daha önce de kazanmıştı (ör. Dandanakan 1040). Malazgirt'i özel yapan başka bir şey: Anadolu'nun kapılarının açılması.
  - Açıklama: Dönüm noktası = olaydan sonra durumun kalıcı biçimde değişmesi.
- Adım 3 (tap)
  - Soru: Aşağıdaki paragrafta olayın SONUCUNU anlatan cümleyi seç.
    ✘ Selçuklular 1040'ta Dandanakan'da Gazneliler'i yenerek devlet kurmuştu. — Malazgirt'ten önceki durum.
    ✘ Bizans, doğu sınırlarını savunmakta zorlanıyordu. — Savaştan önceki durum.
    ✘ Alparslan 1071'de Romen Diyojen'i yendi. — Olayın kendisi.
    ✔ Savaştan sonra Türkmenler Anadolu içlerine ilerleyip yerleşmeye başladı. — 'Savaştan sonra' ifadesi sonucu verir.
  - Açıklama: Zaman ifadeleri (önce, sonra, ardından, bu nedenle) neden–sonuç sırasını gösterir.
- Adım 4 (mcq)
  - Soru: Aşağıdaki olaylar eski tarihten yeniye doğru dizildiğinde ortadaki hangisidir? (Dandanakan, Malazgirt, Miryokefalon)
    ✔ Malazgirt — Dandanakan 1040 → Malazgirt 1071 → Miryokefalon 1176.
    ✘ Dandanakan — Dandanakan 1040; en eskisi.
    ✘ Miryokefalon — Miryokefalon 1176; en yenisi.
    ✘ Hiçbiri — Üç olay da farklı yıllarda.
  - Açıklama: Kronolojide yüzyıl düşün: 1040 (11. yy ilk yarısı), 1071 (11. yy ikinci yarısı), 1176 (12. yy).
- Adım 5 (reflect)
  - Soru: Peki ya neden? Selçuklu Devleti 1040'ta kurulduğu hâlde Anadolu'da kalıcı olmak neden 1071'den sonra hızlandı? Bizans'ın durumunu düşün.
  - Örnek düşünce: Örnek düşünce: Bizans ordusu Malazgirt'te yenilince imparatorun kendisi esir düştü, ülkede taht kavgaları başladı. Savunma zayıflayınca Türkmenler önlerinde engel bulamadı. Yani zafer, Bizans'ın iç sorunlarıyla birleşince etkili oldu.
- Adım 6 (text): Bugünün özeti
  - Anlatım: Bir olayın önemini anlamak için önceki ve sonraki durumu karşılaştır.
  - İçerik: Önce – olay – sonra üçlüsü ile düşün. Dönüm noktası: kalıcı değişim. Kronolojide yüzyıla bak, sonra yıla.

### ders:edeb-soz-sanatlari — Söz sanatları: yazar bunu neden böyle söyledi? [edeb] (AYT Edebiyat / okul Edebiyat — söz sanatları (benzetme, kişileştirme, abartma, zıtlık))
Kanca: Adları ezberlemeden, cümleye 'gerçekte ne olmuş?' diye sorarak ayır.
- Adım 1 (text): Anahtar soru: gerçek ne, söylenen ne?
  - Anlatım: Söz sanatı, gerçeğin başka bir biçimde söylenmesidir. Her cümlede gerçeği ve söylenişi karşılaştır.
  - İçerik: Benzetme İki şeyi ortak yönle yaklaştırır. "gibi, kadar" ipucudur. Kişileştirme İnsan olmayana insan davranışı verir. Rüzgâr fısıldadı. Abartma Gerçekten büyük/küçük söylenir. Bir ömür bekledim. Zıtlık Karşıt kavramlar yan yana. Acı tatlı bir gülümseme. Üç adım: 1) Gerçekte ne olmuş? 2) Cümle bunu nasıl söylemiş? 3) Arada hangi oyun var?
- Adım 2 (mcq)
  - Soru: "Bu çocuk kurnazlıkta tam bir tilki." cümlesinde hangi söz sanatı baskındır?
    ✔ Benzetme (insanın bir hayvana benzetilmesi) — Çocuk, kurnazlığı yüzünden tilkiye benzetiliyor.
    ✘ Kişileştirme — Hayvana insan özelliği verilmemiş; insan hayvana benzetilmiş. Yön ters.
    ✘ Abartma — Gerçek dışı büyütme yok; kurnazlık vurgulanıyor.
    ✘ Zıtlık — Karşıt kavram yok.
  - Açıklama: Kişileştirmede yön: insan olmayan → insan gibi. Benzetmede: insan/nesne → başka varlığa.
- Adım 3 (tap)
  - Soru: Hangi cümlede KİŞİLEŞTİRME vardır?
    ✘ Gözleri iki yıldız gibi parlıyordu. — Benzetme.
    ✔ Dağlar başını göğe dayayıp düşünüyordu. — Dağ düşünür, başını dayar: insana özgü davranışlar.
    ✘ Ağlamaktan gözyaşından göl oldu. — Abartma.
    ✘ Gülerek ağlıyordu. — Zıtlık.
  - Açıklama: Davranış fiillerine bak: düşünmek, fısıldamak, uyumak… insanı mı anlatıyor, yoksa doğayı mı?
- Adım 4 (mcq)
  - Soru: "Sana yüz kere söyledim, yine dinlemedin." cümlesindeki 'yüz kere' için ne denir?
    ✔ Abartma — Gerçekte belki 3–4 kez; vurgu için büyütülmüş.
    ✘ Kişileştirme — İnsan olmayan bir varlık yok.
    ✘ Zıtlık — Karşıt kavram yok.
    ✘ Benzetme — 'Gibi' ya da benzetme yönü yok.
  - Açıklama: Sayı ya da boyut gerçeği aşıyorsa abartma düşün.
- Adım 5 (reflect)
  - Soru: Peki ya neden? Yazar gerçeği doğrudan söylemek yerine neden söz sanatı kullanır? Kendi örneğinle düşün.
  - Örnek düşünce: Örnek düşünce: 'Çok üzüldüm' demek ile 'Yüreğime bir kor düştü' demek okurun hissini değiştirir. Söz sanatı duyguyu ve görüntüyü canlandırır, okur anlamı kendisi bulur.
- Adım 6 (text): Bugünün özeti
  - Anlatım: Söz sanatını ezberlemek yerine gerçek ile söylenişi karşılaştır.
  - İçerik: Gerçek ne? Söylenen ne? Benzetme : gibi/kadar. Kişileştirme : insan davranışı. Abartma : gerçeği aşan büyütme. Zıtlık : karşıt kavramlar.

### ders:fel-arguman — Argüman: doğru sonuç mu, geçerli akıl yürütme mi? [fel] (AYT Felsefe grubu — mantık (öncül, sonuç, geçerlilik))
Kanca: Bir sonucun doğru olması, ona götüren akıl yürütmenin sağlam olduğunu göstermez.
- Adım 1 (text): Argüman = öncüller + sonuç
  - Anlatım: Argüman, öncüllerden bir sonuca varan akıl yürütmedir. Geçerlilik, sonucun öncüllerden zorunlu çıkıp çıkmadığına bakar. Doğruluk ise öncüllerin gerçeğe uyup uymadığına bakar.
  - İçerik: Öncül Dayanak cümleler. Sonuç Öncüllerden çıkarılan yargı. İki ayrı soru: 1) Öncüller doğru mu? 2) Doğru olsalardı sonuç zorunlu çıkar mıydı?
- Adım 2 (mcq)
  - Soru: "Bütün kuşlar uçar. Penguen bir kuştur. O hâlde penguen uçar." argümanı için hangisi doğrudur?
    ✔ Geçerlidir ama bir öncülü yanlıştır. — Öncüller doğru olsaydı sonuç zorunlu çıkardı (geçerli); ama 'bütün kuşlar uçar' yanlış.
    ✘ Geçerli değildir, çünkü sonuç yanlıştır. — Geçerlilik sonucun doğruluğuna değil, öncüllerle bağına bakar.
    ✘ Hem geçerli hem öncülleri doğrudur. — 'Bütün kuşlar uçar' yanlış.
    ✘ Ne geçerli ne doğrudur diyemeyiz. — Geçerliliği yapı üzerinden belirleyebiliriz.
  - Açıklama: Önce öncüllerin doğruluğunu bir kenara bırak; sadece 'sonuç buradan çıkar mı?' diye sor.
- Adım 3 (mcq)
  - Soru: "Bazı öğrenciler çalışkandır. Ali öğrencidir. O hâlde Ali çalışkandır." argümanı için ne söylenir?
    ✔ Geçerli değildir; 'bazı' ifadesinden Ali için kesin sonuç çıkmaz. — Ali, çalışkan olan bazılarından biri olmayabilir.
    ✘ Geçerlidir. — 'Bazı' kesinlik vermez.
    ✘ Öncülleri yanlıştır. — Öncüller doğru olabilir; sorun akıl yürütmede.
    ✘ Sonucu doğrudur. — Doğruluğu bilemeyiz; zorunlu çıkmıyor.
  - Açıklama: 'Bütün' kesin sonuç verir; 'bazı' vermez.
- Adım 4 (tap)
  - Soru: Hangi argüman GEÇERLİDİR?
    ✔ Bütün insanlar ölümlüdür. Sokrates insandır. O hâlde Sokrates ölümlüdür. — Öncüller doğru ve sonuç zorunlu çıkıyor.
    ✘ Bazı canlılar uçar. Kedi canlıdır. O hâlde kedi uçar. — 'Bazı' kesin sonuç vermez.
    ✘ Yağmur yağarsa yol ıslanır. Yol ıslak. O hâlde yağmur yağdı. — Yol başka nedenle ıslanmış olabilir.
    ✘ Bazı kitaplar kalındır. Bu bir kitaptır. O hâlde bu kalındır. — Aynı hata.
  - Açıklama: Kesin kelimeler (bütün, her) geçerli sonuç üretir; bazı üretmez.
- Adım 5 (reflect)
  - Soru: Peki ya neden? Doğru bir sonuca yanlış akıl yürütmeyle varmak neden sorun olur? Günlük hayattan bir örnek düşün.
  - Örnek düşünce: Örnek düşünce: Şans eseri doğru tahmin, bir sonraki seferde aynı yöntemle yanlışa götürebilir. Sağlam akıl yürütme, farklı durumlarda da doğruya götürür; bu yüzden yöntem sonucun kendisi kadar önemlidir.
- Adım 6 (text): Bugünün özeti
  - Anlatım: Geçerlilik yapıya, doğruluk gerçeğe bakar.
  - İçerik: Argüman = öncül + sonuç. Geçerli : sonuç zorunlu çıkar. Doğru : öncüller gerçeğe uyar. 'Bazı' ile kesin sonuç çıkmaz.

### ders:biy-ozmos — Su hangi yöne gider? (Ozmos) [biy] (TYT Biyoloji — hücre zarından madde geçişi (difüzyon, ozmos))
Kanca: Tuzlu suya konan salatalık neden buruşur?
- Adım 1 (mcq)
  - Soru: Tahmin et: Çok tuzlu suya bırakılan bitki hücresine ne olur?
    ✔ Su hücreden dışarı çıkar, hücre büzülür. — Dışarının derişimi yüksek; su derişimi düşük taraf, yani yüksek derişime doğru gider.
    ✘ Su hücreye girer, hücre şişer. — Bu, saf suya bırakılırsa olur.
    ✘ Hiçbir şey olmaz. — Derişim farkı varsa su hareket eder.
    ✘ Tuz hücreden çıkar. — Zar tuza çok az geçirgendir; hareket eden esas olarak sudur.
  - Açıklama: Önce yönü sezgiyle söyle, sonra kuralı çıkar.
- Adım 2 (text): Kural: su, çözünen maddenin çok olduğu yere gider
  - Anlatım: Ozmos, suyun seçici geçirgen zardan geçişidir. Su, çözünen madde derişimi düşük taraftan yüksek tarafa doğru hareket eder.
  - İçerik: Difüzyon Maddeler çok olduğu yerden az olduğu yere yayılır. Ozmos Su, çözünen madde çok olan tarafa gider (seçici geçirgen zar). Dikkat: "Yüksek derişim" çözünen maddeyi (tuz, şeker) anlatır; su orada azdır , o yüzden su oraya akar.
- Adım 3 (mcq)
  - Soru: Saf suya bırakılan hayvan hücresi (örneğin alyuvar) için hangisi doğrudur?
    ✔ Hücre içine su girer, hücre şişer. — Hücre içi derişim yüksek, su içeri girer.
    ✘ Hücre büzülür. — Bu, derişik ortamda olur.
    ✘ Hiç değişmez. — Derişim farkı var.
    ✘ Hücreden su çıkar. — Yön ters.
  - Açıklama: Su, çözünen maddenin çok olduğu yere gider.
- Adım 4 (tap)
  - Soru: Aşağıdakilerden hangisi OZMOS örneğidir?
    ✘ Parfüm kokusunun odaya yayılması. — Difüzyon (gaz).
    ✔ Kuru üzümün suda şişmesi. — Su, şeker derişimi yüksek üzüme doğru hareket eder.
    ✘ Çayda şekerin çözünmesi. — Çözünme.
    ✘ Havadaki oksijenin akciğere girmesi. — Difüzyon.
  - Açıklama: Ozmos: su + seçici geçirgen zar + derişim farkı.
- Adım 5 (reflect)
  - Soru: Peki ya neden? Tuzlu su içmek neden susuzluğu artırır? Ozmosla açıkla.
  - Örnek düşünce: Örnek düşünce: Kan ve dokulardaki tuz derişimi artarsa su hücrelerden dışarı çekilir, hücreler su kaybeder; beyin bunu susuzluk olarak algılar.
- Adım 6 (text): Bugünün özeti
  - Anlatım: Ozmosta su, çözünen maddenin çok olduğu tarafa gider.
  - İçerik: Difüzyon: yayılma. Ozmos: su geçişi. Su → çözünen madde çok olan yere. Derişik ortamda hücre büzülür, saf suda şişer.

### ders:kim-mol — Mol: atomları nasıl sayarız? [kim] (TYT Kimya — mol kavramı ve mol kütlesi)
Kanca: Bir damla suda milyarlarca molekül var. Hepsini tek tek sayamazsın; peki ne yaparsın?
- Adım 1 (text): Düzine gibi, ama çok büyük
  - Anlatım: Bir düzine on iki tanedir. Bir mol altı virgül sıfır iki çarpı on üzeri yirmi üç tanedir. Mol, çok küçük taneciklerin sayısını kolay ifade eden birimdir.
  - İçerik: 1 düzine 12 tane 1 mol 6,02 × 10 23 tane (Avogadro sayısı) Mol kütlesi: 1 mol maddenin gram cinsinden kütlesidir. Atom kütlesi sayısal olarak bulunur: H = 1, C = 12, O = 16 g/mol.
- Adım 2 (mcq)
  - Soru: H₂O'nun mol kütlesi kaç g/mol'dür? (H = 1, O = 16)
    ✔ 18 — 2·1 + 16 = 18.
    ✘ 17 — Hidrojen sayısı (2) unutulmuş: 1 + 16.
    ✘ 32 — Oksijen iki kez sayılmış.
    ✘ 10 — Toplama yerine çıkarma.
  - Açıklama: Formüldeki alt sayılar atom sayısıdır; her atomun kütlesiyle çarp, topla.
- Adım 3 (mcq)
  - Soru: 36 gram su kaç moldür? (H₂O = 18 g/mol)
    ✔ 2 — n = m / M = 36 / 18 = 2 mol.
    ✘ 0,5 — Ters bölme: 18 / 36.
    ✘ 54 — Toplama: 36 + 18.
    ✘ 648 — Çarpma yapılmış.
  - Açıklama: Mol = kütle ÷ mol kütlesi (n = m / M).
- Adım 4 (mcq)
  - Soru: CO₂'nin mol kütlesi 44 g/mol ise 11 gram CO₂ kaç moldür?
    ✔ 0,25 — 11 / 44 = 0,25 mol.
    ✘ 4 — Ters bölme: 44 / 11.
    ✘ 33 — Çıkarma yapılmış.
    ✘ 0,5 — 11 yerine 22 alınmış.
  - Açıklama: Sonucun mantıklı olup olmadığına bak: 11 g, 44 g'ın dörtte biri → 0,25 mol.
- Adım 5 (reflect)
  - Soru: Peki ya neden? 1 mol su ile 1 mol demir aynı sayıda tanecik içerir ama kütleleri neden farklıdır?
  - Örnek düşünce: Örnek düşünce: Taneciklerin sayısı aynı, fakat bir demir atomu bir su molekülünden çok daha ağırdır. 1 mol demir 56 g, 1 mol su 18 g'dır.
- Adım 6 (text): Bugünün özeti
  - Anlatım: Mol tanecik sayısıdır, mol kütlesi bir molün gramıdır, mol hesabı n eşittir m bölü M ile yapılır.
  - İçerik: 1 mol = 6,02 × 10 23 tanecik. n = m / M Mol kütlesi atom kütlelerinin toplamıdır.

### ders:fiz-newton — Kuvvet, kütle ve ivme (sıfırdan) [fiz] (TYT Fizik — Newton'un hareket yasaları (F = m·a))
Kanca: Market arabasını boşken ve doluyken aynı gücle itersen ne olur?
- Adım 1 (mcq)
  - Soru: Markette boş bir arabayı ve içi su dolu bir arabayı aynı güçle itiyorsun. Hangisi daha çabuk hızlanır?
    ✔ Boş araba. — Aynı kuvvet, küçük kütleyi büyük kütleye göre daha çok hızlandırır. Boş arabanın kütlesi küçük olduğu için ivmesi büyük olur.
    ✘ Dolu araba. — Tersi: yük arttıkça arabayı hızlandırmak zorlaşır. Neden olduğunu birazdan göreceksin.
    ✘ İkisi de aynı. — Aynı güçle iterken yük farklıysa hızlanma da farklı olur.
  - Açıklama: Kural: aynı kuvvette kütle büyüdükçe ivme küçülür. Bu derste bu ilişkiyi tek bir formüle çevireceğiz.
- Adım 2 (text): Sözlük 1: Kuvvet nedir?
  - Anlatım: Kuvvet, bir cismi itme ya da çekmedir. Birimi newton, yazılışı N. Bir newton, yaklaşık yüz gramlık bir cismin ağırlığı kadardır.
  - İçerik: Kuvvet = itme ya da çekme . 1 N Avucunda duran küçük bir çikolatanın (100 g) seni aşağı çekişi. 10 N 1 kg'lık bir şişe suyun ağırlığı. Sembol: F (İngilizce force ). Birim: N (newton).
- Adım 3 (text): Sözlük 2: Kütle nedir?
  - Anlatım: Kütle, bir cismin ne kadar madde içerdiğini gösterir. Birimi kilogram. Kütle büyükse cismi hareket ettirmek ya da durdurmak zorlaşır.
  - İçerik: Kütle = cismin "inatçılığı" . Boş araba Kütle küçük → kolay hareket eder. Dolu araba Kütle büyük → zor hareket eder. Sembol: m . Birim: kg .
- Adım 4 (text): Sözlük 3: İvme nedir?
  - Anlatım: İvme, hızın ne kadar çabuk değiştiğidir. Arabada gaza basınca hız artar; bu hız artışının her saniyedeki miktarı ivmedir. Birimi metre bölü saniye kare.
  - İçerik: İvme = hız her saniyede ne kadar değişiyor? Örnek Bir araba duruyor, 3 saniyede 6 m/s hıza çıkıyor. Her saniye 6 ÷ 3 = 2 m/s artıyor. İvme: 2 m/s² . Sembol: a . Birim: m/s² (her saniye, saniyede kaç metre hız artıyor).
- Adım 5 (mcq)
  - Soru: Duran bir bisiklet 4 saniyede 8 m/s hıza ulaşıyor. İvmesi kaç m/s²'dir?
    ✔ 2 — Hız değişimi 8 m/s, süre 4 s → 8 ÷ 4 = 2 m/s².
    ✘ 32 — Çarpma yapılmış. İvme, hız değişiminin süreye bölünmesiyle bulunur.
    ✘ 4 — Süre (4) ivme sanılmış.
    ✘ 12 — Toplama yapılmış (8 + 4).
  - Açıklama: İlk bakacağın şey: hız ne kadar değişti? Sonra: bu kaç saniyede oldu?
- Adım 6 (text): Üçü nasıl birbirine bağlanır?
  - Anlatım: Aynı güçle iterken kütle büyüdükçe ivme küçülür. Kütle aynıyken kuvveti artırınca ivme büyür. Bu iki gözlemi tek formülde birleştiririz: kuvvet eşittir kütle çarpı ivme.
  - İçerik: F = m · a Kuvvet ↑ Kütle aynı kalırsa ivme artar . Kütle ↑ Kuvvet aynı kalırsa ivme azalır . İvmeyi bulmak için: a = F ÷ m. Önce neye bakacağız? Birimlere: N ÷ kg = m/s².
- Adım 7 (text): Net kuvvet: ip çekme oyunu
  - Anlatım: Bir cisme birden fazla kuvvet etki edebilir. Zıt yöndeki kuvvetler birbirini götürür. Geriye kalana net kuvvet denir. Formüldeki kuvvet her zaman net kuvvettir.
  - İçerik: İp çekme oyunu: sağdan 30 N, soldan 20 N çekiyorsun. Net kuvvet 30 − 20 = 10 N (daha güçlü tarafa doğru). Aynı yönde: topla . Zıt yönde: çıkar . Sürtünme hareketin tersine çeker; itme kuvvetinden çıkar.
- Adım 8 (mcq)
  - Soru: Kütlesi 2 kg olan cisme net 10 N kuvvet uygulanıyor. İvmesi kaç m/s²'dir?
    ✔ 5 — a = F ÷ m = 10 ÷ 2 = 5 m/s².
    ✘ 20 — F × m yapılmış. İvme bulunurken kuvvet kütleye bölünür.
    ✘ 12 — Toplama yapılmış.
    ✘ 0,2 — m ÷ F yapılmış; bölme ters.
  - Açıklama: Birim kontrolü: N ÷ kg = m/s². Bölme doğru yönde.
- Adım 9 (mcq)
  - Soru: Kütlesi 4 kg olan cismi 20 N ile itiyorsun; yüzey 8 N sürtünme uyguluyor. İvme kaç m/s²'dir?
    ✔ 3 — Önce net kuvvet: 20 − 8 = 12 N. Sonra a = 12 ÷ 4 = 3 m/s².
    ✘ 5 — Sürtünme unutulmuş: 20 ÷ 4.
    ✘ 7 — Sürtünme toplanmış (28 ÷ 4). Sürtünme hareketi engeller, çıkarılır.
    ✘ 2 — Yalnızca sürtünme (8 N) net kuvvet sanılmış; 20 N’luk itme hesaba katılmamış.
  - Açıklama: Basamaklar: 1) Net kuvveti bul. 2) Kütleye böl.
- Adım 10 (text): Üç yaygın tuzak
  - Anlatım: Birincisi: net kuvveti bulmayı unutmak. İkincisi: bölmeyi ters yapmak. Üçüncüsü: hareket varsa kuvvet vardır sanmak.
  - İçerik: 1. Net kuvvet unutuldu Sürtünme ya da zıt kuvvetler çıkarılmalı. 2. a = m ÷ F Doğrusu F ÷ m . Birim kontrol et. 3. "Hareket = kuvvet" Sabit hızla giden cisimde net kuvvet sıfır olabilir. Kuvvet hızı değiştirir .
- Adım 11 (mcq)
  - Soru: Pürüzsüz buzda sabit hızla kayan bir hokey diski için aşağıdakilerden hangisi doğrudur?
    ✔ Net kuvvet sıfırdır; ivme sıfırdır. — Hız değişmiyorsa ivme sıfırdır; F = m·a'dan net kuvvet de sıfır.
    ✘ Hareket ettiği için net kuvvet vardır. — En sık yapılan hata: kuvvet hareketi değil, hızın değişmesini açıklar.
    ✘ Disk yavaşlıyordur. — Soruda hız sabit denmiş.
    ✘ Net kuvvet diskin ağırlığına eşittir. — Ağırlık yüzeyin tepki kuvvetiyle dengelenir.
  - Açıklama: Hız sabitse ivme sıfır, net kuvvet sıfırdır.
- Adım 12 (reflect)
  - Soru: Peki ya neden? Alışveriş arabasını doluyken durdurmak neden boşken durdurmaktan zordur? F = m·a ile kendi cümlelerinle açıkla.
  - Örnek düşünce: Örnek düşünce: Aynı sürede durdurmak için aynı ivmeyle yavaşlamak gerekir. F = m·a olduğundan kütle büyükse gereken kuvvet de büyük olur. Yani dolu araba 'daha inatçı'.
- Adım 13 (text): Bugünün özeti ve sınavda ne işe yarar
  - Anlatım: Kuvvet eşittir kütle çarpı ivme. Önce net kuvveti bul, sonra kütleye böl.
  - İçerik: F : itme/çekme (N). m : kütle (kg). a : hızın değişme hızı (m/s²). a = F net ÷ m . Önce net kuvvet. Hız sabitse net kuvvet sıfırdır. Sınavda şöyle görürsün: "Cisme şu kuvvetler etki ediyor, ivmesi kaçtır?" Ne yapacağını artık biliyorsun: net kuvvet → kütleye böl.

### ders:cog-mevsim — Mevsimler neden oluşur? [cog] (TYT Coğrafya — Dünya'nın hareketleri ve sonuçları)
Kanca: Yazın Dünya Güneş'e daha mı yakındır? Önce tahmin et.
- Adım 1 (mcq)
  - Soru: Tahmin et: Türkiye'de yaz neden sıcak olur?
    ✔ Güneş ışınları daha dik gelir ve gündüz daha uzun sürer. — Eksen eğik olduğu için yazın Kuzey Yarımküre Güneş'e doğru eğilir: ışınlar dik gelir, gündüz uzar.
    ✘ Dünya Güneş'e daha yakındır. — Yaygın yanlış. Dünya Güneş'e en yakın konumda (Ocak başı) Kuzey Yarımküre'de kıştır.
    ✘ Dünya daha hızlı döner. — Dönme hızı yıl boyunca değişmez; gün uzunluğu ışınların açısıyla ilgilidir.
    ✘ Ay Dünya'ya yaklaşır. — Ay'ın mevsimle ilgisi yok.
  - Açıklama: Mevsimin sebebi uzaklık değil, ışınların geliş açısı ve gündüz süresidir.
- Adım 2 (text): Üç şeyi birleştir
  - Anlatım: Dünya'nın ekseni 23 derece 27 dakika eğiktir. Eksen yıl boyunca hep aynı yöne bakar. Dünya Güneş çevresinde dolanır. Bu yüzden Güneş ışınları farklı enlemlere dik gelir.
  - İçerik: 21 Haziran Işınlar Yengeç Dönencesi'ne (23°27' K) dik. Kuzey Yarımküre'de yaz, en uzun gündüz. 22 Aralık Işınlar Oğlak Dönencesi'ne (23°27' G) dik. Kuzey'de kış, en kısa gündüz. 21 Mart / 23 Eylül Işınlar Ekvator'a dik. Her yerde gece = gündüz. Düşünce deneyi: Eksen eğik olmasaydı? Işınlar yıl boyunca Ekvator'a dik gelir, mevsim olmazdı.
- Adım 3 (mcq)
  - Soru: 21 Haziran'da Güneş ışınlarının dik geldiği yer neresidir?
    ✔ Yengeç Dönencesi — 23°27' kuzey enlemi; Kuzey Yarımküre'de yaz başlangıcı.
    ✘ Oğlak Dönencesi — 22 Aralık.
    ✘ Ekvator — 21 Mart ve 23 Eylül.
    ✘ Kuzey Kutup Dairesi — Işınlar kutup dairesine hiçbir zaman dik gelmez.
  - Açıklama: Tarih–dönence eşleşmesi: Haziran → Yengeç (kuzey), Aralık → Oğlak (güney).
- Adım 4 (tap)
  - Soru: Aşağıdakilerden hangisi Dünya'nın EKSEN EĞİKLİĞİNİN sonucudur?
    ✘ Gece ile gündüzün oluşması. — Dönme hareketinin sonucu.
    ✔ Yıl boyunca Güneş ışınlarının geliş açısının değişmesi ve mevsimler. — Eğiklik + dolanma birlikte mevsimleri yapar.
    ✘ Yerel saat farkları. — Dönme hareketinin sonucu.
    ✘ Gelgit olayları. — Ay ve Güneş'in çekimi.
  - Açıklama: Dönme → gece–gündüz, saat. Eğiklik + dolanma → mevsim.
- Adım 5 (reflect)
  - Soru: Peki ya neden? Güney Yarımküre'de Aralık ayında yazın olduğunu eksen eğikliğiyle açıkla.
  - Örnek düşünce: Örnek düşünce: Aralık'ta eksenin güney ucu Güneş'e doğru eğiktir. Işınlar Güney'deki enlemlere daha dik gelir ve gündüz uzar; Kuzey'e ise eğik gelir. Aynı anda bir yarımkürede yaz, diğerinde kış olur.
- Adım 6 (text): Bugünün özeti
  - Anlatım: Mevsimin nedeni uzaklık değil, eksen eğikliği ve dolanmadır.
  - İçerik: Mevsim: eğiklik + dolanma . Gece–gündüz: dönme . 21 Haziran Yengeç, 22 Aralık Oğlak, 21 Mart/23 Eylül Ekvator.
