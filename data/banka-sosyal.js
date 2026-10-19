/* Soru bankası: Edebiyat, Tarih, Coğrafya — özgün sorular; ipucu, "nasıl düşünmeliyiz" ve adım adım çözümle.
   Etiket: meta.kn = konu adı. Gerçek bilgiler (tarih, yer, eser) MEB ders kitabı bilgileriyle örtüşen temel olgulardır; yayından önce öğretmen kontrolü önerilir. */
(function () {
  var M = (KESIF.meta = KESIF.meta || {});
  function Qk(id, ders, sinav, kn, zor, q, right, rightWhy, wrongs, hint, think, steps) {
    var opts = [{ t: right, ok: true, why: rightWhy }];
    wrongs.forEach(function (w) { opts.push({ t: w[0], why: w[1] }); });
    KESIF.daily.push({ id: id, subject: ders, q: q, opts: opts, hint: hint, think: think, solution: steps });
    M[id] = { kn: kn, sinav: sinav, zor: zor, kaynak: "özgün" };
  }
  var T = ["tyt", "ayt"], Y = ["tyt"], A = ["ayt"];
  /* ---------- Coğrafya ---------- */
  var KO = "Koordinat ve zaman", HA = "Harita bilgisi", DU = "Dünya'nın hareketleri", IK = "İklim";
  Qk("gc1", "cog", Y, KO, 1, "Başlangıç meridyeni (0°) hangi yerden geçer?", "Greenwich (Londra)", "Boylamlar Greenwich'ten başlayarak doğu ve batı olarak 180°'ye kadar sayılır.",
    [["Ankara", "Türkiye'nin başkenti, başlangıç meridyeni değil."], ["Kahire", "Başlangıç meridyeni değil."], ["Ekvator", "Ekvator bir paraleldir, meridyen değil."]],
    "Boylamlar için uluslararası başlangıç noktası.", "Meridyen ile paraleli ayır: meridyen kuzey–güney, paralel doğu–batı doğrultusunda çizgidir.",
    ["Meridyenler (boylam daireleri) kutuplardan geçer.", "Başlangıç meridyeni 0° Greenwich'ten geçer."]);
  Qk("gc2", "cog", Y, KO, 2, "Dünya 24 saatte 360° döner. Buna göre 1 boylam derecesi kaç dakikalık yerel saat farkı oluşturur?", "4 dakika", "360° ÷ 24 saat = 15° / saat → 60 dk ÷ 15 = 4 dk.",
    [["1 dakika", "360° için 24 saat var; 1° için 1 dk çıkmaz."], ["15 dakika", "15, 1 saatteki derece sayısı; dakika değil."], ["60 dakika", "60 dk bir saattir; 15 boylamlık fark."]],
    "Önce 1 saatte kaç derece döndüğünü bul.", "Birim dönüşümü: derece/saat → dakika/derece.",
    ["Dünya 24 saatte 360° döner → 1 saatte 360 ÷ 24 = 15°.", "15° = 60 dakika → 1° = 60 ÷ 15 = 4 dakika."]);
  Qk("gc3", "cog", Y, KO, 2, "30° doğu boylamı ile 45° doğu boylamı arasındaki yerel saat farkı kaç dakikadır?", "60 dakika", "Fark 45 − 30 = 15 boylam; 15 × 4 = 60 dk.",
    [["15 dakika", "Boylam farkını 4 ile çarpmak unutulmuş."], ["45 dakika", "Hesapta 3 ile çarpılmış."], ["120 dakika", "İki katı alınmış."]],
    "Aynı yarım kürede (ikisi de doğu) boylamlar çıkarılır.", "Boylam farkı × 4 dk. Aynı yönde çıkar, zıt yönde topla.",
    ["Aynı yönde (ikisi de D): 45 − 30 = 15°.", "15 × 4 = 60 dakika.", "Doğuda olanın saati ileridedir."]);
  Qk("gc4", "cog", Y, HA, 1, "Ölçeği 1/100 000 olan haritada 5 cm'lik uzunluk gerçekte kaç km'dir?", "5 km", "5 cm × 100 000 = 500 000 cm = 5 km.",
    [["0,5 km", "Dönüşümde bir sıfır eksik."], ["50 km", "Dönüşümde bir sıfır fazla."], ["500 km", "cm → km dönüşümü yapılmamış."]],
    "Önce cm olarak gerçek uzunluğu bul, sonra km'ye çevir.", "100 000 cm = 1 km olduğunu hatırla.",
    ["Gerçek uzunluk = harita uzunluğu × ölçeğin paydası.", "5 × 100 000 = 500 000 cm.", "100 000 cm = 1 km → 5 km."]);
  Qk("gc5", "cog", Y, DU, 1, "Gece–gündüz oluşumu Dünya'nın hangi hareketinin sonucudur?", "Kendi ekseni etrafında dönmesi", "Dünya dönerken sürekli Güneş'e bakan yüz değişir.",
    [["Güneş etrafında dolanması", "Mevsimlerin oluşumunu etkiler."], ["Eksen eğikliği", "Tek başına mevsim farkı doğurur."], ["Ay'ın Dünya etrafında dönmesi", "Gelgit ve tutulmalarla ilgilidir."]],
    "Bir günün uzunluğu kaç saat?", "Her sonucu doğuran tek bir hareket ve sürede ilişki var: dönme ≈ 24 saat → gece–gündüz.",
    ["Dönme hareketi 24 saat sürer.", "Güneş'e bakan yüz sürekli değişir → gece ve gündüz."]);
  Qk("gc6", "cog", Y, DU, 2, "Mevsimlerin oluşmasının temel nedeni aşağıdakilerden hangisidir?", "Eksen eğikliği ile Güneş çevresinde dolanma birlikte", "Eksen eğik olduğu için Güneş ışınlarının geliş açısı ve gün uzunluğu yıl boyunca değişir; bu değişim yörüngede dolanırken yaşanır.",
    [["Dünya'nın Güneş'e uzaklığının değişmesi", "Uzaklık değişimi çok küçüktür, asıl neden değildir."], ["Dünya'nın kendi çevresinde dönmesi", "Gece–gündüzü oluşturur."], ["Ay'ın çekimi", "Gelgit ile ilgilidir."]],
    "Tek bir hareket yetmez: iki şey birlikte gerekir.", "Eksen dik olsaydı mevsim olur muydu? Hayır → eksen eğikliği şart. Dolanma olmasaydı? Hep aynı mevsim → dolanma şart.",
    ["Eksen eğikliği 23°27'.", "Dolanma sırasında eksen hep aynı yöne bakar.", "Güneş ışınlarının geliş açısı değişir → mevsimler."]);
  Qk("gc7", "cog", Y, IK, 2, "Yazları sıcak ve kurak, kışları ılık ve yağışlı geçen iklim aşağıdakilerden hangisidir?", "Akdeniz iklimi", "Akdeniz iklimi kışın yağış getiren cephelerin etkisinde, yazın kurak tropikal hava kütlesi altındadır.",
    [["Karadeniz iklimi", "Her mevsim yağışlıdır."], ["Karasal iklim", "Kışlar soğuk, yazlar sıcaktır; yağış az."], ["Ekvatoral iklim", "Her mevsim sıcak ve çok yağışlıdır."]],
    "Anahtar: yazlar kurak.", "İklimleri sıcaklık ve yağış rejimi çifti olarak hatırla.",
    ["Yaz: sıcak + kurak.", "Kış: ılık + yağışlı.", "Bu rejim Akdeniz iklimidir."]);
  /* ---------- Tarih ---------- */
  var AN = "Anadolu'nun Türkleşmesi", IS = "Islahat ve Meşrutiyet", KS = "Kurtuluş Savaşı", IN = "Cumhuriyet inkılapları";
  Qk("ths1", "tar", T, AN, 1, "Anadolu'nun kapılarını Türklere açan savaş aşağıdakilerden hangisidir?", "Malazgirt Meydan Muharebesi (1071)", "Selçuklu Sultanı Alparslan, Bizans İmparatoru Romen Diyojen'i yenmiş; Anadolu'ya Türk akınları hızlanmıştır.",
    [["Miryokefalon Savaşı", "1176; Bizans'ın Anadolu'yu geri alamamasına yol açtı ama kapıları açan savaş değil."], ["Dandanakan Savaşı", "1040; Gazneliler'e karşı kazanılan, Selçuklu devletinin kuruluşunu sağlayan savaş."], ["Kosova Savaşı", "1389; Balkanlarda Osmanlı."]],
    "Tarih 1071.", "Önce sonucu sor: hangi savaştan sonra Anadolu Türkleşmeye başladı? Tarih ve kişiyle bağla (Alparslan – Romen Diyojen).",
    ["1071'de Alparslan Bizans'ı yendi.", "Bu zaferle Anadolu'nun kapıları Türk akınlarına açıldı."]);
  Qk("ths2", "tar", T, IS, 2, "Osmanlı Devleti'nin ilk anayasası olan Kanun-i Esasi hangi yıl ilan edilmiştir?", "1876", "II. Abdülhamid döneminde, I. Meşrutiyet ile birlikte ilan edilmiştir.",
    [["1839", "Tanzimat Fermanı yılı."], ["1856", "Islahat Fermanı yılı."], ["1908", "II. Meşrutiyet yılı."]],
    "Meşrutiyetlerin sırasını düşün: ilkinin yılı.", "Dört temel tarihi kronolojik tek zincire koy: 1839 Tanzimat → 1856 Islahat → 1876 Kanun-i Esasi → 1908 II. Meşrutiyet.",
    ["Kronoloji: 1839 – 1856 – 1876 – 1908.", "Kanun-i Esasi ilk anayasa → I. Meşrutiyet yılı 1876."]);
  Qk("ths3", "tar", T, KS, 2, "Millî Mücadele'nin kronolojik sıralaması hangisinde doğru verilmiştir?", "Sakarya Meydan Muharebesi → Büyük Taarruz → Mudanya Ateşkesi → Lozan", "Sakarya (1921), Büyük Taarruz (26 Ağustos 1922), Mudanya (Ekim 1922), Lozan (1923).",
    [["Büyük Taarruz → Sakarya → Lozan → Mudanya", "Sakarya Büyük Taarruz'dan önce."], ["Lozan → Mudanya → Sakarya → Büyük Taarruz", "Lozan en sondadır."], ["Mudanya → Sakarya → Büyük Taarruz → Lozan", "Mudanya Büyük Taarruz'dan sonradır."]],
    "Savaşın bittiği, barışın en sonda yapıldığı ilkesini kullan.", "Önce hangi olayın en son olduğunu (Lozan) bul; sonra ateşkesin savaştan sonra geldiğini hatırla.",
    ["Sakarya savunması 1921.", "Büyük Taarruz 1922 Ağustos.", "Mudanya Ateşkesi 1922 Ekim.", "Lozan Barışı 1923."]);
  Qk("ths4", "tar", T, IN, 2, "Aşağıdaki inkılaplardan hangisi diğerlerinden önce yapılmıştır?", "Halifeliğin kaldırılması", "3 Mart 1924'te halifelik kaldırıldı; Harf İnkılabı 1928, Soyadı Kanunu 1934, kadınlara seçme ve seçilme hakkı 1934.",
    [["Harf İnkılabı", "1928."], ["Soyadı Kanunu", "1934."], ["Kadınlara milletvekili seçilme hakkı", "1934."]],
    "Cumhuriyetin ilanından (1923) hemen sonrasını düşün.", "Her inkılabı yıla bağla; en erken olanı bul.",
    ["Halifelik: 1924.", "Harf: 1928.", "Soyadı ve kadın hakları: 1934.", "En erken: halifeliğin kaldırılması."]);
  Qk("ths5", "tar", T, KS, 1, "Türkiye Büyük Millet Meclisi hangi tarihte açılmıştır?", "23 Nisan 1920", "Ankara'da açılan Meclis, Millî Mücadele'yi yürüten yasama organı olmuştur.",
    [["29 Ekim 1923", "Cumhuriyet'in ilanı."], ["19 Mayıs 1919", "Mustafa Kemal'in Samsun'a çıkışı."], ["30 Ağustos 1922", "Başkomutanlık Meydan Muharebesi'nin zaferi."]],
    "Çocuk Bayramı olan gün.", "Bayram tarihlerini olaylarla eşle: 23 Nisan = TBMM, 19 Mayıs = Samsun, 30 Ağustos = Zafer, 29 Ekim = Cumhuriyet.",
    ["23 Nisan 1920: TBMM açılışı.", "Diğer tarihler başka olaylara ait."]);
  /* ---------- Edebiyat ---------- */
  var SS = "Söz sanatları", DE = "Edebî dönemler", TR = "Edebî türler";
  Qk("ed1", "edeb", A, SS, 2, "\"Gözleri iki kara yıldız gibi parlıyordu.\" cümlesinde hangi söz sanatı vardır?", "Teşbih (benzetme)", "Benzetilen (gözler), benzeyen (kara yıldız), benzetme yönü (parlama) ve edatı (gibi) hepsi var.",
    [["Kişileştirme", "İnsana özgü bir özellik başka varlığa verilmemiş."], ["Abartma", "Gerçek dışı bir büyütme yok."], ["Kinaye", "Bir sözün hem gerçek hem mecaz anlamı kastedilmemiş."]],
    "\"gibi\" edatına dikkat et.", "Benzetmenin dört ögesi: benzeyen, benzetilen, yön, edat.",
    ["Gözler (benzeyen) → yıldız (kendisine benzetilen).", "Yön: parlamak. Edat: gibi.", "Dört öge tamam: teşbih."]);
  Qk("ed2", "edeb", A, SS, 2, "\"Rüzgâr ağaçlara fısıldadı.\" cümlesinde hangi söz sanatı vardır?", "Kişileştirme (teşhis)", "Rüzgâra insana özgü bir davranış (fısıldamak) yüklenmiştir.",
    [["Konuşturma (intak)", "Varlık konuşturulmuyor, sözü aktarılmıyor."], ["Zıtlık (tezat)", "Karşıt kavramlar yok."], ["Benzetme", "\"gibi\" benzeri ifade yok."]],
    "İnsan olmayan varlık insan gibi mi davranıyor?", "İki ayrı sanat arasında fark: kişileştirme davranış verir, konuşturma söz söyletir.",
    ["Fısıldamak insana özgü bir davranıştır.", "Rüzgâr insan gibi davranıyor → kişileştirme."]);
  Qk("ed3", "edeb", A, DE, 1, "Türk edebiyatının ilk yerli tiyatro eseri sayılan \"Şair Evlenmesi\" kimin eseridir?", "Şinasi", "Tanzimat edebiyatının öncüsü Şinasi, 1859'da bu eseri yazmıştır.",
    [["Namık Kemal", "Vatan Yahut Silistre ve İntibah'ın yazarı."], ["Ziya Paşa", "Tanzimat şairi, Zafername'nin yazarı."], ["Tevfik Fikret", "Servet-i Fünun şairi."]],
    "Tanzimat edebiyatının ilk sanatçısı.", "Dönemi ve türü eşle: Tanzimat → ilk tiyatro → Şinasi.",
    ["Tanzimat'ın ilk kuşağı: Şinasi.", "Şair Evlenmesi (1859) ilk yerli tiyatro denemesidir."]);
  Qk("ed4", "edeb", A, DE, 2, "\"Genç Kalemler\" dergisi ve \"Yeni Lisan\" makalesi hangi edebî akımla ilişkilidir?", "Millî Edebiyat", "1911'de Selanik'te çıkan dergi, sade dil ve millî konular çizgisini başlatmıştır.",
    [["Servet-i Fünun", "Süslü dil, Batı etkisi, \"sanat sanat içindir\"."], ["Tanzimat edebiyatı", "Daha önceki dönem."], ["Fecr-i Âti", "Servet-i Fünun'un sonunda, sanat için sanat savunan topluluk."]],
    "Dergi adı ve \"yeni lisan\" = sade dil.", "Sade dil + millî konular → Millî Edebiyat.",
    ["Genç Kalemler (Selanik, 1911).", "Sade Türkçe ve millî konular savunuldu.", "Millî Edebiyat Dönemi."]);
  Qk("ed5", "edeb", A, TR, 1, "Aşağıdakilerden hangisi halk edebiyatı nazım şeklidir?", "Koşma", "Halk şiirinde hece ölçüsüyle yazılan, genellikle 11'li ve dörtlüklü bir nazım şeklidir.",
    [["Gazel", "Divan edebiyatı."], ["Kaside", "Divan edebiyatı."], ["Mesnevi", "Divan edebiyatı."]],
    "Halk şiiri hece ölçüsüyle yazılır.", "Divan edebiyatı aruz ölçüsü ve beyit; halk edebiyatı hece ölçüsü ve dörtlük kullanır.",
    ["Divan: gazel, kaside, mesnevi (aruz).", "Halk: koşma, semai, destan (hece)."]);
})();
