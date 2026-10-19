/* Açık uçlu soru seti 2: 11. sınıf 1. dönem 1. ve 2. yazılı (MEB ODSGM dağılımındaki konular: 1.1, 2.1–2.5, 3.1).
   Amaç yalnızca doğru cevap değil, DÜŞÜNME YOLU: her soruda "think" (nasıl düşünmeliyiz?) + adım adım çözüm + puanlama anahtarı. Özgün sorular. */
(function () {
  var M = (KESIF.meta = KESIF.meta || {});
  function A(id, s11, zor, q, answers, think, hint, steps, rubric, explain) {
    KESIF.daily.push({ id: id, subject: "mat", type: "open", q: q, answers: answers, think: think, hint: hint, solution: steps, rubric: rubric, explain: explain || "", opts: [] });
    M[id] = { s11: s11, sinav: ["s11"], zor: zor, kaynak: "özgün", tur: "açık uçlu" };
  }
  /* 1.1 İki nicel değişkenli veriler */
  A("ae1", "1.1", 2, "Bir öğrenci x (günlük çalışma süresi, saat) ve y (deneme neti) için şu verileri topladı: (1, 3), (2, 5), (3, 7), (4, 9), (5, 11). Noktalar bir doğru üzerindedir. Eğilim doğrusunun denklemini yazınız, r değerini söyleyiniz ve x = 10 için tahmin yapınız; bu tahmin ne kadar güvenilirdir?",
    [{ label: "Eğim", v: "2" }, { label: "Kesişim (y, x = 0)", v: "1" }, { label: "x = 10 için tahmin", v: "21" }],
    "Önce noktalara bak: x bir artınca y kaç artıyor? Bu sabitse doğrunun eğimidir. Sonra tahmini yaparken verinin hangi aralıktan geldiğini düşün.",
    "x 1 artınca y kaç artıyor? Bunu bulunca y = a·x + b'yi kur.",
    ["x bir artınca y hep 2 artıyor → eğim a = 2.", "(1, 3) noktasını yerine koy: 3 = 2·1 + b → b = 1; denklem y = 2x + 1.", "Noktalar tam bir doğru üzerinde olduğu için r = 1.", "x = 10: y = 2·10 + 1 = 21.", "Güvenilirlik: veri yalnızca x = 1–5 aralığında; x = 10 aralığın dışı (dış tahmin) → temkinli ol."],
    [[1, "Eğim 2 bulundu (sabit artış)"], [1, "y = 2x + 1 yazıldı"], [1, "r = 1 yorumlandı"], [1, "x = 10 için 21"], [1, "Veri aralığı dışı olduğu belirtildi"]]);
  A("ae2", "1.1", 2, "Bir araştırmada iki nicel değişken arasındaki ilişki katsayısı r = −0,9 bulunmuştur. Bu sonucu yön, güç ve sebep açısından yorumlayınız (üç ayrı cümle).",
    [], "Önce r'nin işaretine (yön), sonra mutlak değerine (güç) bak; en sonda kendine sor: 'Bu, biri öteki için sebep demek midir?'",
    "İşaret ne söylüyor? Mutlak değer ne söylüyor?",
    ["Yön: r negatif → değişkenler ters yönlü (biri artarken öteki azalma eğiliminde).", "Güç: |−0,9| = 0,9, 1'e yakın → güçlü doğrusal ilişki.", "Sebep: ilişki ≠ sebep; ortak bir üçüncü etken olabilir ve sonuç yalnızca incelenen gözlemler için geçerlidir."],
    [[1, "Yön (ters yönlü) doğru belirtildi"], [1, "Güç (güçlü) doğru belirtildi"], [1, "Sebep-sonuç iddiasının kanıtlanmadığı yazıldı"]]);
  /* 2.1 Dörtgenlerin özellikleri */
  A("ae3", "2.1", 2, "ABCD dışbükey dörtgeninde ∠A = 2x, ∠B = x + 20°, ∠C = 3x − 10° ve ∠D = 80° olduğuna göre x değerini ve en büyük iç açıyı bulunuz.",
    [{ label: "x (°)", v: "45" }, { label: "En büyük açı (°)", v: "125" }],
    "Bilinmeyen çok ama bildiğin bir toplam var: dörtgenin iç açıları. O toplamla bir denklem kur, sonra bulduğun x ile her açıyı hesaplayıp toplamı kontrol et.",
    "Dörtgenin iç açıları toplamı kaç derece?",
    ["Dörtgenin iç açıları toplamı 360°: 2x + (x + 20) + (3x − 10) + 80 = 360.", "6x + 90 = 360 → 6x = 270 → x = 45.", "Açılar: A = 90°, B = 65°, C = 125°, D = 80°.", "Kontrol: 90 + 65 + 125 + 80 = 360 ✓. En büyük açı 125°."],
    [[1, "İç açılar toplamı 360° ile denklem kuruldu"], [1, "x = 45"], [1, "En büyük açı 125°"], [1, "Toplam kontrolü yapıldı"]]);
  A("ae4", "2.1", 2, "ABCD paralelkenarında ∠A = 3x + 10° ve ∠B = 2x − 20° olduğuna göre x değerini ve ∠A'yı bulunuz.",
    [{ label: "x (°)", v: "38" }, { label: "∠A (°)", v: "124" }],
    "Paralelkenarda hangi iki açı yan yana? Yan yana (ardışık) açıların toplamı için bildiğin bir kural var mı?",
    "Paralelkenarda ardışık açılar için ne biliyorsun?",
    ["Paralelkenarda ardışık iki açı bütünlerdir: ∠A + ∠B = 180°.", "(3x + 10) + (2x − 20) = 180 → 5x − 10 = 180 → x = 38.", "∠A = 3·38 + 10 = 124°; kontrol: ∠B = 56°, 124 + 56 = 180 ✓."],
    [[1, "Ardışık açıların toplamı 180° kullanıldı"], [1, "x = 38"], [1, "∠A = 124°"]]);
  /* 2.2 Özel dörtgenler */
  A("ae5", "2.2", 3, "Bir kenarı 8 cm olan eşkenar dörtgenin köşegenlerinden biri de 8 cm'dir. Diğer köşegenin uzunluğunu ve eşkenar dörtgenin alanını bulunuz.",
    [{ label: "Diğer köşegen (cm)", v: "8√3", accept: ["8kök3", "8√3", "13.86", "13,86"] }, { label: "Alan (cm²)", v: "32√3", accept: ["32kök3", "32√3", "55.43", "55,43"] }],
    "Şekil çiz. Köşegen kenara eşitse oluşan üçgenlerin türü ne? Eşkenar dörtgenin köşegenleri birbirini dik ortalar: yarım köşegenlerle bir dik üçgen kur.",
    "Köşegen kenara eşit olunca hangi özel üçgen çıkıyor?",
    ["8 cm'lik köşegen, iki kenarla (8, 8, 8) bir eşkenar üçgen oluşturur; köşegenler dik ortalanır.", "Yarım köşegenler: 4 cm ve x. Dik üçgende hipotenüs 8: 4² + x² = 8² → x² = 48 → x = 4√3.", "Diğer köşegen 2x = 8√3 cm.", "Alan = (8 · 8√3) ÷ 2 = 32√3 cm²."],
    [[1, "Köşegenlerin dik ortaladığı kullanıldı"], [1, "Yarım köşegen 4√3 bulundu"], [1, "Diğer köşegen 8√3"], [1, "Alan 32√3"]]);
  A("ae6", "2.2", 3, "Bir dikdörtgenin köşegenleri 10 cm'dir ve kesişme noktasında 60°'lik bir açı oluşturur. Dikdörtgenin kenar uzunluklarını bulunuz.",
    [{ label: "Kısa kenar (cm)", v: "5" }, { label: "Uzun kenar (cm)", v: "5√3", accept: ["5kök3", "5√3", "8.66", "8,66"] }],
    "Dikdörtgenin köşegenleri eşit ve birbirini ortalar. Kesişme noktasından köşelere giden parçalar kaç cm? Hangi özel üçgen oluşuyor?",
    "Köşegenlerin kesişme noktasından köşelere kaç cm? Oluşan üçgenin kenarları ne?",
    ["Köşegenler eşit ve birbirini ortalar: kesişme noktasından her köşeye 5 cm.", "60° açı yapan iki kenarı 5 cm olan üçgen eşkenardır: karşısındaki kenar (dikdörtgenin kısa kenarı) 5 cm.", "Uzun kenar: Pisagor ile √(10² − 5²) = √75 = 5√3 cm."],
    [[1, "Köşegenlerin 5 cm'lik yarım parçalara bölündüğü yazıldı"], [1, "Eşkenar üçgen fark edildi: kısa kenar 5"], [1, "Pisagor ile uzun kenar 5√3"]]);
  /* 2.3 Çokgenlerin sınıflandırılması */
  A("ae7", "2.3", 3, "Bir dışbükey çokgenin köşegen sayısı, kenar sayısının 2 katıdır. Bu çokgenin kenar sayısını ve iç açıları toplamını bulunuz.",
    [{ label: "Kenar sayısı", v: "7" }, { label: "İç açılar toplamı (°)", v: "900" }],
    "Denklemi önce kur: köşegen sayısını n cinsinden yaz ve 2n'e eşitle. n'in sıfırdan farklı olduğunu kullanıp sadeleştirebilir misin?",
    "Köşegen sayısı formülü ve istenen eşitlik ne?",
    ["Köşegen sayısı n(n − 3) ÷ 2 ve bu 2n'e eşit: n(n − 3) ÷ 2 = 2n.", "n ≠ 0 → (n − 3) ÷ 2 = 2 → n − 3 = 4 → n = 7.", "İç açılar toplamı: (7 − 2) · 180 = 900°."],
    [[1, "Denklem n(n − 3) ÷ 2 = 2n kuruldu"], [1, "n ile sadeleştirildi, n = 7"], [1, "(n − 2) · 180 = 900°"]]);
  A("ae8", "2.3", 2, "\"Her çokgenin iç açılarının toplamı (n − 2) · 180°'dir\" iddiasını değerlendiriniz. İçbükey bir çokgen için de geçerli midir? Gerekçenizi bir üçgenleme düşüncesiyle açıklayınız.",
    [], "Bir köşegen ya da kenarla çokgeni üçgenlere ayırabilir misin? İçbükey çokgende her köşeden bütün köşelere köşegen çizilebilir mi, yoksa üçgenleme için başka bir yol mu gerekir?",
    "Formülün arkasındaki fikir ne: üçgenlere ayırmak. İçbükey çokgen de üçgenlere ayrılabilir mi?",
    ["Formül çokgenin n − 2 üçgene ayrılabilmesine dayanır; her üçgenin iç açıları toplamı 180°.", "İçbükey çokgen de (kendini kesmeyen basit çokgen) uygun köşegenlerle n − 2 üçgene ayrılabilir; bu yüzden iç açılar toplamı yine (n − 2) · 180°'dir.", "Fark: içbükey çokgende en az bir iç açı 180°'den büyüktür ve bir köşeden çizilen köşegenlerin hepsi çokgenin içinde kalmayabilir; üçgenleme yapılırken uygun köşegenler seçilir.", "Sonuç: iddia (kendini kesmeyen çokgenler için) doğrudur."],
    [[1, "Formülün üçgenlemeye dayandığı yazıldı"], [1, "İçbükey çokgenin de n − 2 üçgene ayrılabildiği söylendi"], [1, "Sonuç: iddia doğru (basit çokgenler için)"]]);
  /* 2.4 Dışbükey çokgenlerin özellikleri */
  A("ae9", "2.4", 3, "Düzgün bir çokgenin bir iç açısı, bir dış açısının 8 katıdır. Bu çokgenin kenar sayısını bulunuz.",
    [{ label: "Kenar sayısı", v: "18" }],
    "Aynı köşedeki iç ve dış açı arasında kesin bir ilişki var. Önce dış açıyı bul, sonra dış açıların toplamının ne olduğunu hatırla.",
    "Aynı köşedeki iç + dış açı kaç derece?",
    ["İç + dış = 180° ve iç = 8 · dış → 9 · dış = 180 → dış = 20°.", "Düzgün çokgende dış açılar eşit ve toplamları 360°: n = 360 ÷ 20.", "n = 18. Kontrol: iç açı 160°, (18 − 2) · 180 ÷ 18 = 160 ✓."],
    [[1, "İç + dış = 180° kullanıldı"], [1, "Dış açı 20°"], [1, "n = 360 ÷ 20 = 18"]]);
  A("ae10", "2.4", 2, "Bir köşesinden çizilen köşegenlerle 9 üçgene ayrılan dışbükey çokgenin iç açıları toplamını ve köşegen sayısını bulunuz.",
    [{ label: "İç açılar toplamı (°)", v: "1620" }, { label: "Köşegen sayısı", v: "44" }],
    "Üçgen sayısı kenar sayısıyla nasıl bağlı? Önce n'i bul; sonra iki ayrı formülü uygula.",
    "Üçgen sayısı = n − 2 mi, n − 3 mü?",
    ["Bir köşeden çizilen köşegenler çokgeni n − 2 üçgene ayırır: n − 2 = 9 → n = 11.", "İç açılar toplamı = 9 · 180 = 1620°.", "Köşegen sayısı = 11 · 8 ÷ 2 = 44."],
    [[1, "n − 2 = 9 → n = 11"], [1, "İç açılar toplamı 1620°"], [1, "Köşegen sayısı 44"]]);
  A("ae11", "2.4", 2, "Düzgün altıgenin kaç simetri ekseni vardır? Düzgün n kenarlı bir çokgenin simetri eksen sayısı için genel bir ifade öneriniz ve nedenini açıklayınız.",
    [{ label: "Düzgün altıgenin simetri ekseni sayısı", v: "6" }],
    "Şekil çiz ve eksenleri say: bir köşeden ve karşısındaki köşeden geçenler, bir de kenar orta noktalarından geçenler var mı?",
    "Hangi çizgiler çokgeni iki ayna görüntüsüne böler?",
    ["Altıgende köşegen eksenleri: karşılıklı köşelerden geçen 3 eksen.", "Kenar orta noktalarından geçen eksenler: karşılıklı kenar orta noktalarından geçen 3 eksen.", "Toplam 3 + 3 = 6.", "Genel: düzgün n-genin n simetri ekseni vardır (n çift ise n/2'si köşelerden, n/2'si kenar orta noktalarından; n tek ise her biri bir köşe ile karşı kenar orta noktasından geçer)."],
    [[1, "Köşe eksenleri sayıldı (3)"], [1, "Kenar orta noktası eksenleri sayıldı (3)"], [1, "Toplam 6 ve genel ifade: n"]]);
  /* 2.5 Çokgenlerle ilgili problemler */
  A("ae12", "2.5", 2, "Paralel kenarları 6 cm ve 14 cm, yüksekliği 8 cm olan bir yamuğun orta taban uzunluğunu ve alanını bulunuz.",
    [{ label: "Orta taban (cm)", v: "10" }, { label: "Alan (cm²)", v: "80" }],
    "Yamuğun alanı ile orta tabanı arasında nasıl bir bağ var? Önce orta tabanı bul, sonra yükseklikle çarp.",
    "Orta taban, paralel kenarların neyi olur?",
    ["Orta taban, paralel kenarların ortalamasıdır: (6 + 14) ÷ 2 = 10 cm.", "Alan = orta taban · yükseklik = 10 · 8 = 80 cm²."],
    [[1, "Orta taban 10"], [1, "Alan = orta taban · yükseklik = 80"]]);
  A("ae13", "2.5", 2, "Kenar uzunlukları 9 cm ve 12 cm olan bir paralelkenarda 9 cm'lik kenara ait yükseklik 8 cm'dir. 12 cm'lik kenara ait yüksekliği bulunuz.",
    [{ label: "Alan (cm²)", v: "72" }, { label: "12 cm'lik kenara ait yükseklik (cm)", v: "6" }],
    "Aynı şeklin alanı hangi kenarı taban alırsan al aynıdır. Önce alanı hesapla, sonra diğer tabana göre yüksekliği bul.",
    "Paralelkenarın alanını iki farklı tabanla yazabilir misin?",
    ["Alan = 9 · 8 = 72 cm².", "Aynı alanı 12 cm'lik tabanla yaz: 12 · h = 72.", "h = 6 cm."],
    [[1, "Alan 72"], [1, "12 · h = 72 denklemi kuruldu"], [1, "h = 6"]]);
  A("ae14", "2.5", 2, "Bir düzgün altıgenle bir karenin çevreleri eşittir. Altıgenin bir kenarı 4 cm olduğuna göre karenin kenar uzunluğunu ve alanını bulunuz.",
    [{ label: "Karenin kenarı (cm)", v: "6" }, { label: "Karenin alanı (cm²)", v: "36" }],
    "Bilinen şeyi yaz: altıgenin çevresi. Sonra aynı çevreyi karede 4 kenara dağıt.",
    "Önce altıgenin çevresini bul.",
    ["Düzgün altıgenin çevresi 6 · 4 = 24 cm.", "Karenin çevresi de 24 cm: 4a = 24 → a = 6 cm.", "Karenin alanı 6² = 36 cm²."],
    [[1, "Altıgenin çevresi 24"], [1, "Karenin kenarı 6"], [1, "Alan 36"]]);
  /* 3.1 Trigonometrik fonksiyonlar */
  A("ae15", "3.1", 2, "f(x) = 3 cos 2x fonksiyonunun periyodunu, en büyük ve en küçük değerini bulunuz.",
    [{ label: "Periyot", v: "π", accept: ["π", "pi", "3.14"] }, { label: "En büyük değer", v: "3" }, { label: "En küçük değer", v: "-3", accept: ["−3"] }],
    "cos x'in temel özelliklerini hatırla: periyodu ve değer aralığı. x'in katsayısı periyodu nasıl, başındaki 3 değer aralığını nasıl değiştirir?",
    "Katsayı 2 periyodu büyütür mü küçültür mü? Başındaki 3 neyi etkiler?",
    ["cos x'in periyodu 2π; cos(bx)'in periyodu 2π ÷ |b|: 2π ÷ 2 = π.", "cos 2x ∈ [−1, 1] → 3 cos 2x ∈ [−3, 3].", "En büyük değer 3, en küçük değer −3."],
    [[1, "Periyot formülü: 2π ÷ 2 = π"], [1, "Değer aralığı [−1, 1] ile 3 çarpıldı"], [1, "3 ve −3"]]);
  A("ae16", "3.1", 3, "sin 120° + cos 150° − tan 135° ifadesinin değerini bulunuz.",
    [{ label: "Değer", v: "1" }],
    "Her açıyı birim çemberde yerleştir: hangi bölgede? İşareti belirle, sonra büyüklüğü referans açıdan al.",
    "Üç terimi ayrı ayrı hesaplamak için hangi bilgi gerekli?",
    ["sin 120° = sin 60° = √3/2 (II. bölge, sinüs pozitif).", "cos 150° = −cos 30° = −√3/2 (II. bölge, kosinüs negatif).", "tan 135° = sin 135° ÷ cos 135° = (√2/2) ÷ (−√2/2) = −1.", "Toplam: √3/2 + (−√3/2) − (−1) = 1."],
    [[1, "sin 120° = √3/2"], [1, "cos 150° = −√3/2"], [1, "tan 135° = −1"], [1, "Sonuç 1"]]);
})();
