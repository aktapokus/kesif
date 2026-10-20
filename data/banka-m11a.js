/* Soru bankası (Maarif biçimi): 11. sınıf Matematik 1.1 İki nicel değişkenli veriler ve 2.1 Dörtgenlerin özellikleri.
   Her soruda ipucu, "nasıl düşünmeliyiz" notu ve adım adım çözüm vardır. Özgün sorular (CC BY-NC-SA 4.0). meta.s11 = kitap konusu. Yardım: ilgili konu anlatımının adımı. */
(function () {
  var M = (KESIF.meta = KESIF.meta || {}), H = (KESIF.help = KESIF.help || {});
  function Q(id, s11, lesson, zor, q, right, rightWhy, wrongs, hint, think, steps, step) {
    var opts = [{ t: right, ok: true, why: rightWhy }];
    wrongs.forEach(function (w) { opts.push({ t: w[0], why: w[1] }); });
    KESIF.daily.push({ id: id, subject: "mat", q: q, opts: opts, hint: hint, think: think, solution: steps });
    M[id] = { s11: s11, sinav: ["s11"], zor: zor, kaynak: "özgün", tur: "beceri temelli" };
    H[id] = { topic: { lesson: lesson, step: step } };
  }
  function A(id, s11, lesson, zor, q, answers, hint, think, steps, rubric, step) {
    KESIF.daily.push({ id: id, subject: "mat", type: "open", q: q, answers: answers, hint: hint, think: think, solution: steps, rubric: rubric, explain: "", opts: [] });
    M[id] = { s11: s11, sinav: ["s11"], zor: zor, kaynak: "özgün", tur: "açık uçlu" };
    H[id] = { topic: { lesson: lesson, step: step } };
  }
  var L1 = "m11-1-1", L2 = "m11-2-1";
  /* ---------- 1.1 İki nicel değişkenli veriler ---------- */
  Q("n11a1", "1.1", L1, 1, "Bir serpme diyagramı için hesaplanan korelasyon katsayısı r = 0,92'dir. Bu veriler için hangisi söylenebilir?",
    "Aynı yönlü ve güçlü bir doğrusal ilişki vardır.", "İşaret artı → aynı yönlü; |r| = 0,92 → 1'e yakın → güçlü.",
    [["Ters yönlü ve güçlü bir ilişki vardır.", "Ters yönlü ilişkide r negatif olur."], ["İlişki yoktur.", "İlişki olmaması için r'nin sıfıra yakın olması gerekir."], ["Bir değişken artınca öteki kesinlikle artar.", "r güçlü bir ilişki gösterir ama kesinlik ve neden–sonuç iddiası taşımaz."]],
    "İşarete yön, mutlak değere güç için bak.", "r'yi iki parçada oku: işaret (yön), mutlak değer (güç).",
    ["r > 0 → aynı yönlü.", "|r| = 0,92, 1'e yakın → güçlü doğrusal ilişki."], 9);
  Q("n11a2", "1.1", L1, 1, "Bir veri kümesi için hesaplanan korelasyon katsayısı r = −0,15'tir. Hangisi doğrudur?",
    "Doğrusal ilişki yok denecek kadar zayıftır.", "|r| = 0,15, sıfıra yakın: noktalar bir doğru boyunca toplanmıyor; ters yön çok zayıf.",
    [["Güçlü ters yönlü ilişki vardır.", "Güçlü olması için |r| 1'e yakın olmalı (0,8 ve üzeri gibi)."], ["Güçlü aynı yönlü ilişki vardır.", "İşaret eksi; ayrıca |r| küçük."], ["Veri hatalıdır.", "Düşük r veri hatası göstermez; doğrusal ilişkinin zayıf olduğunu gösterir."]],
    "Mutlak değerin 0'a mı 1'e mi yakın olduğuna bak.", "r'nin işareti değil büyüklüğü gücü belirler.",
    ["|−0,15| = 0,15 → 0'a çok yakın.", "Doğrusal ilişki yok denecek kadar zayıf."], 9);
  Q("n11a3", "1.1", L1, 2, "30 noktalı bir serpme diyagramında ortalama çizgileriyle bölgelere ayırma yapılıyor: sağ üst 12, sol alt 11, sol üst 4, sağ alt 3 nokta. Bu duruma göre ilişki hakkında ne söylenebilir?",
    "Aynı yönlü (pozitif) ve güçlü bir ilişki vardır: noktaların 23/30'u sağ üst ve sol alt bölgelerinde.", "12 + 11 = 23 nokta aynı yönlü bölgelerde; ters yönlü bölgelerde 4 + 3 = 7 nokta. Aynı yönlü bölgelerdeki çoğunluk pozitif ve güçlü ilişkiyi gösterir.",
    [["Ters yönlü ve güçlü ilişki vardır.", "Ters yönlü bölgelerde yalnızca 7 nokta var."], ["İlişki yoktur; noktalar dört bölgeye eşit dağılmıştır.", "Eşit dağılım olsaydı her bölgede yaklaşık 7–8 nokta olurdu."], ["Yalnızca sağ üstteki noktalar ilişkiyi belirler.", "Yön için sağ üst ile sol alt birlikte değerlendirilir."]],
    "Aynı yönlü iki bölgenin toplamını ters yönlü iki bölgenin toplamıyla karşılaştır.", "İki zıt köşe çiftini ayır: (sağ üst + sol alt) ve (sol üst + sağ alt).",
    ["Aynı yönlü: 12 + 11 = 23.", "Ters yönlü: 4 + 3 = 7.", "23/30 çoğunluk → pozitif, güçlü ilişki."], 6);
  Q("n11a4", "1.1", L1, 2, "Bir öğrenci, günlük çalışma süresi ile deneme neti arasında r = 0,8 bulmuş ve ‘çalışma süremi artırırsam netim kesinlikle artar’ demiştir. Bu yorumun hatası nedir?",
    "İlişkili olmak neden–sonuç anlamına gelmez; ayrıca ‘kesinlikle’ ifadesi veriyle desteklenmez.", "r güçlü bir birlikte değişimi gösterir ama bir değişkenin diğerine neden olduğunu ya da her durumda geçerli olduğunu kanıtlamaz (uyku, motivasyon gibi ortak etkenler olabilir).",
    [["Hata yoktur, r = 0,8 neden–sonuç ilişkisini kanıtlar.", "Korelasyon neden–sonuç kanıtlamaz."], ["r en fazla 0,5 olabilir.", "r −1 ile 1 arasında değer alır; 0,8 mümkündür."], ["r negatif olduğu için yorum yanlıştır.", "r = 0,8 pozitiftir; sorun işaret değil neden–sonuç iddiası."]],
    "‘Birlikte artıyor’ ile ‘birini artırırsam öteki artar’ cümlelerini ayır.", "Bir ilişkiyi yorumlarken önce ‘ortak bir üçüncü etken olabilir mi?’ diye sor.",
    ["r = 0,8 → güçlü, aynı yönlü ilişki.", "Ama bu ilişki neden–sonuç kanıtı değil; üçüncü etkenler olabilir.", "‘Kesinlikle’ iddiası veriyle desteklenmiyor."], 13);
  Q("n11a5", "1.1", L1, 2, "10 noktalı bir veri kümesinde r = 0,90'dır. Veriye aykırı bir nokta eklenince r = 0,20 oluyor. Bu durum için hangisi söylenebilir?",
    "Tek bir aykırı nokta korelasyon katsayısını büyük ölçüde değiştirebilir; yorum yapmadan önce serpme diyagramı incelenmelidir.", "Aykırı değer r'yi önemli ölçüde etkiler; yalnızca r'ye bakmak yanıltıcı olabilir, serpme diyagramı aykırı noktayı gösterir.",
    [["r değişmez; aykırı değer etkisizdir.", "Aykırı değer r'yi değiştirebilir; burada 0,90'dan 0,20'ye düşüyor."], ["Önceki 10 nokta artık ilişkili değildir.", "10 noktanın ilişkisi aynı; yalnızca aykırı nokta ölçümü bozuyor."], ["Yeni r daha doğrudur, çünkü daha fazla veri var.", "Tek bir uç nokta ilişkiyi temsil etmeyebilir; önce neden aykırı olduğuna bakılır."]],
    "Tek bir noktanın bir özet sayıyı ne kadar oynattığına bak.", "Özet sayı (r) görselin yerine geçmez; önce grafiğe bak.",
    ["10 nokta: r = 0,90 (güçlü).", "Aykırı nokta eklenince r = 0,20 (zayıf).", "Tek nokta özeti çok değiştirdi → grafiği ve aykırı noktayı incele."], 11);
  Q("n11a6", "1.1", L1, 2, "‘Boy ile zıplama yüksekliği arasında ilişki var mı?’ sorusunu araştırmak için hangi veri toplama planı en uygundur?",
    "Aynı öğrencilerin hem boyunu hem zıplama yüksekliğini ölçüp her öğrenci için bir (boy, zıplama) çifti kaydetmek.", "İlişki iki değişkenin aynı gözlem birimi için birlikte ölçülmesiyle incelenir: her öğrenci bir noktadır.",
    [["Bir sınıfın boyunu, başka bir sınıfın zıplama yüksekliğini ölçmek.", "İki ölçüm farklı gözlem birimlerinden alınmış; çift oluşturulamaz."], ["Yalnızca en uzun 5 öğrencinin zıplamasını ölçmek.", "Seçili grup ilişkiyi yanlı gösterir; çeşitlilik olmalı."], ["Öğrencilere ‘Zıplamayı sever misin?’ diye sormak.", "Bu kategorik bir soru; iki nicel değişkeni vermez."]],
    "Her gözlem birimi için iki sayı gerekir.", "Planda önce gözlem birimini belirle: ‘kimden/neyden’ iki ölçüm alınacak?",
    ["Gözlem birimi: öğrenci.", "Her öğrenciden iki ölçüm: boy ve zıplama.", "Her öğrenci serpme diyagramında bir nokta olur."], 2);
  Q("n11a7", "1.1", L1, 1, "Bir öğrenci hesap aracından korelasyon katsayısını r = 1,3 olarak okuyor. Bu sonuç için ne söylenebilir?",
    "Hatalıdır: korelasyon katsayısı her zaman −1 ile 1 arasındadır.", "|r| ≤ 1 olduğundan r = 1,3 mümkün değildir; giriş ya da hesapta hata vardır.",
    [["Çok güçlü bir ilişki vardır.", "1,3 mümkün olmadığı için bu yorum geçersiz."], ["Ters yönlü ilişki vardır.", "İşaret artı; ama r zaten bu değeri alamaz."], ["Veriler çok dağınıktır.", "Dağınıklık r'yi sıfıra yaklaştırır; 1,3 bunu göstermez."]],
    "r'nin alabileceği değer aralığını hatırla.", "Bir özet sayı mümkün aralığın dışındaysa önce hesabın doğruluğunu sorgula.",
    ["Korelasyon katsayısı: −1 ≤ r ≤ 1.", "1,3 bu aralığın dışında → hata."], 9);
  Q("n11a8", "1.1", L1, 3, "Bir kentte son 8 ayda günlük ortalama sıcaklık arttıkça dondurma satışı ve klima satışı da artmıştır. Bir gazete ‘Dondurma satışı klima satışını artırıyor’ yazmıştır. Bu yorum için hangisi doğrudur?",
    "Yorum desteksizdir: ikisini birden artıran sıcak hava gibi ortak bir etken olabilir.", "İki satış birlikte arttığı için ilişkili; ama biri ötekinin nedeni değil. Ortak neden: sıcaklık.",
    [["Yorum doğrudur çünkü iki değişken birlikte artıyor.", "Birlikte artmak neden olmayı kanıtlamaz."], ["Yorum doğrudur çünkü dondurma satışı önce başlıyor.", "Zaman sırası bile nedeni kanıtlamaz."], ["İki değişken ilişkisizdir.", "Birlikte artıyorlar; ilişki var ama nedeni ayrı."]],
    "İki satışı da neyin artırdığını düşün.", "Haberdeki ‘A, B'yi artırıyor’ cümlesini görünce ortak etkeni ara.",
    ["Dondurma ve klima satışı sıcak havada birlikte artıyor.", "Ortak etken: sıcaklık.", "İlişki var; neden–sonuç iddiası desteksiz."], 13);
  A("n11ao1", "1.1", L1, 2, "30 noktalı bir serpme diyagramı, x ve y'nin ortalama çizgileriyle dört bölgeye ayrılıyor. Sağ üst bölgede 11, sol alt bölgede 10, sol üst bölgede 5, sağ alt bölgede 4 nokta bulunuyor. (a) Aynı yönlü bölgelerdeki toplam nokta sayısını, (b) ters yönlü bölgelerdeki toplam nokta sayısını bulunuz. (c) İlişkinin yönü nedir?",
    [{ label: "Aynı yönlü bölgeler (nokta)", v: "21" }, { label: "Ters yönlü bölgeler (nokta)", v: "9" }, { label: "Yön (pozitif/negatif)", v: "pozitif", accept: ["pozitif", "aynı yönlü", "aynı yönlü (pozitif)"] }],
    "Zıt köşe çiftlerini topla.", "Aynı yönlü: sağ üst + sol alt; ters yönlü: sol üst + sağ alt.",
    ["Aynı yönlü: 11 + 10 = 21.", "Ters yönlü: 5 + 4 = 9.", "21 > 9 → pozitif (aynı yönlü) ilişki."],
    [[1, "Aynı yönlü bölgeler 11 + 10 = 21"], [1, "Ters yönlü bölgeler 5 + 4 = 9"], [1, "Yön pozitif (aynı yönlü) olarak yorumlandı"], [1, "Kısa gerekçe (21 > 9)"]], 6);
  A("n11ao2", "1.1", L1, 2, "İki ayrı veri kümesi için korelasyon katsayıları r₁ = −0,9 ve r₂ = 0,3 bulunmuştur. (a) Hangi veri kümesinde doğrusal ilişki daha güçlüdür (1 ya da 2)? (b) O veri kümesindeki ilişkinin yönü nedir (pozitif/negatif)?",
    [{ label: "Daha güçlü ilişki (1 ya da 2)", v: "1", accept: ["1", "birinci", "r1", "r₁"] }, { label: "Yön", v: "negatif", accept: ["negatif", "ters", "ters yönlü"] }],
    "Güç için mutlak değere bak.", "|−0,9| = 0,9 ve |0,3| = 0,3: hangisi 1'e daha yakın?",
    ["|r₁| = 0,9 > |r₂| = 0,3 → birinci kümede ilişki daha güçlü.", "r₁ negatif → ters yönlü (negatif)."],
    [[1, "Güç için mutlak değer karşılaştırıldı (0,9 > 0,3)"], [1, "Birinci veri kümesi seçildi"], [1, "İşaretten yön: negatif"]], 9);

  /* ---------- 2.1 Dörtgenlerin özellikleri ---------- */
  Q("n21a1", "2.1", L2, 1, "Bir dışbükey dörtgenin iç açıları 70°, 95°, 110° ve x'tir. x kaç derecedir?",
    "85°", "Dörtgenin iç açıları toplamı 360°: 70 + 95 + 110 + x = 360 → 275 + x = 360 → x = 85°.",
    [["95°", "Bu, verilen açılardan birini yazmak olur; x için 360 − 275 hesaplanmalı."], ["75°", "180° ile hesap yapılmış: dörtgen iki üçgenden oluşur, toplam 360°."], ["285°", "275 bulunmuş ama 360'tan çıkarılmamış."]],
    "Dörtgenin iç açıları toplamı kaç derece?", "Dörtgeni bir köşegenle iki üçgene böl: 2 · 180° = 360°.",
    ["İç açılar toplamı = 2 · 180° = 360°.", "70 + 95 + 110 = 275.", "x = 360 − 275 = 85°."], 5);
  Q("n21a2", "2.1", L2, 1, "ABCD bir paralelkenar ve köşegenleri O noktasında kesişiyor. AC = 14 cm ve BD = 10 cm ise AO ve BO uzunlukları sırasıyla kaç cm'dir?",
    "7 cm ve 5 cm", "Paralelkenarın köşegenleri birbirini ortalar: AO = AC/2 = 7 cm, BO = BD/2 = 5 cm.",
    [["14 cm ve 10 cm", "Bunlar tüm köşegen uzunlukları; O ortalar, parçalar yarısıdır."], ["7 cm ve 10 cm", "Yalnızca birinin yarısı alınmış; ikisi de ortalanır."], ["5 cm ve 7 cm", "Değerler yer değiştirmiş: AO, AC'nin yarısı."]],
    "Paralelkenarda köşegenler birbirini nasıl böler?", "Önce özelliği yaz (köşegenler birbirini ortalar), sonra her köşegeni ikiye böl.",
    ["Köşegenler birbirini ortalar.", "AO = 14 ÷ 2 = 7 cm.", "BO = 10 ÷ 2 = 5 cm."], 5);
  Q("n21a3", "2.1", L2, 2, "Köşegen uzunlukları 10 cm ve 24 cm olan bir eşkenar dörtgenin bir kenar uzunluğu kaç cm'dir?",
    "13 cm", "Eşkenar dörtgenin köşegenleri birbirini dik ortalar: yarı köşegenler 5 ve 12; Pisagor: √(5² + 12²) = √169 = 13 cm.",
    [["17 cm", "5 + 12 toplanmış; kenar bu iki yarı köşegenin hipotenüsüdür."], ["34 cm", "Köşegenler toplanmış (10 + 24)."], ["12 cm", "Yalnızca yarı köşegenlerden biri alınmış; dik üçgenin hipotenüsü gerekir."]],
    "Eşkenar dörtgende köşegenler hangi açıyla kesişir ve nasıl bölünür?", "Köşegenler dik ve ortalayarak kesişiyor → dört dik üçgen. Kenar = dik üçgenin hipotenüsü.",
    ["Yarı köşegenler: 5 ve 12.", "Dik üçgende Pisagor: kenar² = 5² + 12² = 169.", "Kenar = 13 cm."], 7);
  Q("n21a4", "2.1", L2, 2, "Köşegenleri 8 cm ve 6 cm olan ve köşegenleri dik kesişen bir dörtgenin alanı kaç cm²'dir?",
    "24 cm²", "A = ½ · e · f · sin θ = ½ · 8 · 6 · sin 90° = 24 cm² (sin 90° = 1).",
    [["48 cm²", "Yarım çarpanı unutulmuş."], ["14 cm²", "Köşegenler toplanmış."], ["12 cm²", "Yarım çarpanı iki kez uygulanmış."]],
    "Köşegenleri ve aralarındaki açıyı kullanan alan formülü?", "Dik kesişimde sin θ = 1 olur; formül çarpıma indirgenir.",
    ["Formül: A = ½ · e · f · sin θ.", "θ = 90° → sin θ = 1.", "A = ½ · 8 · 6 = 24 cm²."], 3);
  Q("n21a5", "2.1", L2, 2, "Aşağıdaki önermelerden hangisi her dışbükey dörtgen için doğrudur?",
    "İç açılarının toplamı 360°'dir.", "Her dışbükey dörtgen bir köşegenle iki üçgene ayrılır; üçgenlerin iç açıları toplamı 2 · 180° = 360°.",
    [["Köşegenleri birbirini ortalar.", "Yalnızca paralelkenar ailesi için; yamuk ve deltoidde doğru değil."], ["Köşegenleri eşittir.", "Dikdörtgen ve ikizkenar yamukta doğru; genel değil."], ["Köşegenleri dik kesişir.", "Eşkenar dörtgen, kare ve deltoidde doğru; genel değil."]],
    "Karşı örnek bulabiliyorsan önerme genel doğru değildir.", "‘Her dörtgen için’ doğru olan önerme, tek bir karşı örnekle bile bozulur.",
    ["Köşegenlerin ortalanması yamukta yok → genel değil.", "Köşegenlerin eşitliği paralelkenarda yok → genel değil.", "Dik kesişme dikdörtgende yok → genel değil.", "360° her dışbükey dörtgende geçerli."], 2);
  Q("n21a6", "2.1", L2, 2, "İkizkenar yamukta aşağıdakilerden hangisi her zaman doğrudur?",
    "Köşegen uzunlukları eşittir.", "İkizkenar yamukta yan kenarlar eşit ve taban açıları eşit olduğundan köşegenleri oluşturan üçgenler eştir; köşegenler eşit uzunluktadır.",
    [["Köşegenleri birbirini dik keser.", "Bu eşkenar dörtgen ve kare için; ikizkenar yamukta genelde dik değil."], ["Köşegenleri birbirini ortalar.", "Ortalama paralelkenar özelliğidir; yamukta köşegenler oranlı bölünür."], ["Karşılıklı kenarları paraleldir.", "Yamukta yalnızca bir çift kenar paraleldir."]],
    "Taban açıları eşit olan yamuk neyi sağlıyor?", "Köşegenleri bir kenar ve iki açıyla üçgen eşliğiyle karşılaştır.",
    ["Yan kenarlar eşit, taban açıları eşit.", "Köşegenleri içeren iki üçgen (kenar–açı–kenar) eş.", "Köşegen uzunlukları eşit."], 7);
  Q("n21a7", "2.1", L2, 3, "Bir dörtgenin köşegen uzunlukları 10 cm ve 12 cm, aralarındaki açı 30°'dir. Bu dörtgenin alanı kaç cm²'dir? (sin 30° = ½)",
    "30 cm²", "A = ½ · 10 · 12 · sin 30° = 60 · ½ = 30 cm².",
    [["60 cm²", "sin 30° = ½ çarpanı unutulmuş."], ["120 cm²", "Yarım ve sinüs çarpanları unutulmuş."], ["15 cm²", "Fazladan bir yarım daha çarpılmış."]],
    "Önce formülü yaz, sonra sin 30° değerini koy.", "Alan formülünde açı 90° değilse sin θ'yı atlama.",
    ["A = ½ · e · f · sin θ.", "A = ½ · 10 · 12 · ½ = 30 cm²."], 3);
  Q("n21a8", "2.1", L2, 3, "Bir öğrenci ‘paralelkenarın köşegenleri alanını dört eşit alanlı üçgene böler’ önermesini ispatlamak istiyor. Hangi gerekçe önermeyi ispat eder?",
    "Köşegenler birbirini ortalar; böylece her üçgenin tabanı eşit ve yüksekliği aynı olduğundan alanları eşittir.", "O noktası köşegenleri ortaladığı için AO = OC ve BO = OD. Aynı köşeden çıkan yükseklikle taban eşit olduğundan komşu üçgenlerin alanları eşit olur.",
    [["Dört üçgenin dört de ikizkenar olduğunu çizimle göstermek.", "Üçgenler ikizkenar olmak zorunda değil; çizim ispat değildir."], ["Bir örnekte dört alanı ölçüp eşit bulmak.", "Bir örnek ispat değildir; her paralelkenar için geçerli olmalı."], ["Köşegenlerin birbirine dik olduğunu varsaymak.", "Dik kesişme her paralelkenarda yoktur."]],
    "İspat, her paralelkenar için geçerli bir mantık zinciri ister.", "Ortalama özelliğini ve alan formülünü (taban × yükseklik ÷ 2) birleştir.",
    ["Köşegenler birbirini ortalar: AO = OC.", "AOB ve BOC üçgenlerinin tabanları (AO, OC) eşit, B'den AC'ye yükseklik ortak.", "Alanlar eşit; benzer şekilde diğerleri de eşit."], 5);
  A("n21ao1", "2.1", L2, 2, "Köşegen uzunlukları 16 cm ve 12 cm olan bir eşkenar dörtgen için (a) bir kenar uzunluğunu, (b) çevreyi, (c) alanı bulunuz.",
    [{ label: "Kenar (cm)", v: "10" }, { label: "Çevre (cm)", v: "40" }, { label: "Alan (cm²)", v: "96" }],
    "Yarı köşegenlerle dik üçgen oluştur.", "Köşegenler dik ve ortalayarak kesişir; kenar bir dik üçgenin hipotenüsü.",
    ["Yarı köşegenler 8 cm ve 6 cm.", "Kenar = √(8² + 6²) = √100 = 10 cm.", "Çevre = 4 · 10 = 40 cm.", "Alan = ½ · 16 · 12 · sin 90° = 96 cm²."],
    [[1, "Köşegenlerin dik ortaladığı kullanıldı (8 ve 6)"], [1, "Pisagor ile kenar = 10"], [1, "Çevre = 40"], [1, "Alan = ½ · e · f = 96"]], 7);
  A("n21ao2", "2.1", L2, 3, "ABCD dikdörtgeninin köşegenleri O noktasında kesişiyor. AB = 6 cm, BC = 8 cm ise (a) köşegen uzunluğunu, (b) AO'yu, (c) alanı bulunuz.",
    [{ label: "Köşegen AC (cm)", v: "10" }, { label: "AO (cm)", v: "5" }, { label: "Alan (cm²)", v: "48" }],
    "ABC dik üçgeninde Pisagor uygula.", "Dikdörtgenin köşegenleri eşit ve birbirini ortalar.",
    ["ABC dik üçgeninde AC² = 6² + 8² = 100 → AC = 10 cm.", "Köşegenler birbirini ortalar: AO = 10 ÷ 2 = 5 cm.", "Alan = 6 · 8 = 48 cm²."],
    [[1, "Pisagor ile AC = 10"], [1, "Köşegenlerin ortalandığı kullanıldı: AO = 5"], [1, "Alan = 6 · 8 = 48"]], 7);
})();
