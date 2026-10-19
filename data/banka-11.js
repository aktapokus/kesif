/* Soru bankası: 11. sınıf matematik (MEB 11. sınıf kitabı sırası). Tüm sorular bu proje için ÖZGÜN yazılmıştır ("çıkmış soru" değildir).
   Her soru: ipucu (cevabı vermez) + adım adım çözüm. Etiket: s11 = kitap konusu, zor: 1 kolay, 2 orta, 3 zor. */
(function () {
  var M = (KESIF.meta = KESIF.meta || {});
  function Q(id, s11, zor, q, right, rightWhy, wrongs, hint, steps, explain) {
    var opts = [{ t: right, ok: true, why: rightWhy }];
    wrongs.forEach(function (w) { opts.push({ t: w[0], why: w[1] }); });
    KESIF.daily.push({ id: id, subject: "mat", q: q, opts: opts, hint: hint, solution: steps, explain: explain || "" });
    M[id] = { s11: s11, sinav: ["s11"], zor: zor, kaynak: "özgün" };
  }
  /* Konu özetleri: ders (keşif) hazır olmayan konularda "Konu anlatımı" düğmesi bunu gösterir. */
  KESIF.topicNotes = Object.assign(KESIF.topicNotes || {}, {
    "1.2": "<p>Başkasının grafiğine/verisine bakarken şunları sor:</p><ul class=\"body\"><li><b>Eksen:</b> çubuk grafik 0'dan mı başlıyor? Ölçek eşit mi?</li><li><b>Örneklem:</b> kim, kaç kişi (n), nasıl seçildi?</li><li><b>Gruplar:</b> alt gruplar ayrılınca eğilim değişir mi (Simpson)?</li><li><b>Sebep:</b> ilişki ≠ sebep; ortak etken olabilir.</li><li><b>Kaynak:</b> kim topladı, neden?</li><li>Veri aralığı dışına tahmin yapma.</li></ul>",
    "2.1": "<p><b>Dörtgen:</b> 4 kenarlı, 4 köşeli kapalı şekil. Bir köşegen onu <b>iki üçgene</b> böler, bu yüzden <b>iç açılar toplamı 2 · 180° = 360°</b>.</p><ul class=\"body\"><li>Her köşede <b>iç açı + dış açı = 180°</b>.</li><li>Dışbükey dörtgende <b>dış açılar toplamı 360°</b>.</li><li>Dörtgenin <b>2 köşegeni</b> vardır.</li></ul>",
    "2.2": "<ul class=\"body\"><li><b>Paralelkenar:</b> karşılıklı kenarlar paralel ve eşit; <b>köşegenler birbirini ortalar</b>.</li><li><b>Dikdörtgen:</b> tüm açılar 90°; köşegenler <b>eşit</b> ve birbirini ortalar.</li><li><b>Eşkenar dörtgen:</b> 4 kenar eşit; köşegenler birbirini <b>dik</b> ortalar ve köşe açılarını ortalar; <b>alan = e · f ÷ 2</b>.</li><li><b>Kare:</b> hem dikdörtgen hem eşkenar dörtgen.</li></ul><p>Kapsama: kare ⊂ dikdörtgen ⊂ paralelkenar; kare ⊂ eşkenar dörtgen ⊂ paralelkenar.</p>",
    "2.3": "<ul class=\"body\"><li><b>Çokgen:</b> kendini kesmeyen kapalı doğru parçaları zinciri. n kenarlı çokgenin n köşesi vardır.</li><li><b>Dışbükey:</b> her köşegeni çokgenin içinde kalır. <b>Düzgün çokgen:</b> tüm kenarları ve tüm iç açıları eşit.</li><li><b>Köşegen sayısı:</b> n(n − 3) ÷ 2.</li></ul>",
    "2.4": "<p>n kenarlı <b>dışbükey</b> çokgende:</p><ul class=\"body\"><li><b>İç açılar toplamı:</b> (n − 2) · 180°.</li><li><b>Dış açılar toplamı:</b> 360°.</li><li>Bir köşeden <b>n − 3 köşegen</b> çizilir; çokgen <b>n − 2 üçgene</b> ayrılır.</li><li><b>Düzgün</b> çokgende bir iç açı (n − 2) · 180° ÷ n, bir dış açı 360° ÷ n.</li></ul>",
    "2.5": "<ul class=\"body\"><li>Dikdörtgen: <b>a · b</b>. Paralelkenar: <b>taban · yükseklik</b>. Yamuk: <b>(a + c) ÷ 2 · h</b>. Eşkenar dörtgen: <b>e · f ÷ 2</b>.</li><li>Düzgün altıgen (kenarı a): 6 eşkenar üçgen → <b>(3√3 ÷ 2) · a²</b>.</li><li>Problemde: şekli parçalara (genelde üçgenlere) ayır, bilinenleri yaz, denklem kur.</li></ul>"
  });

  /* ---------- 1.2 Başkaları tarafından oluşturulan iki niceliksel değişkenli verileri inceleme ---------- */
  Q("mi1", "1.2", 2, "Dikey ekseni 50'den başlayan bir çubuk grafikte A = 60 ve B = 90 gösteriliyor. Grafikte B çubuğu A çubuğunun kaç katı yükseklikte görünür?",
    "4 katı", "Görünen yükseklik, değerden eksen başlangıcı çıkarılarak bulunur: (90 − 50) ÷ (60 − 50) = 4.",
    [["1,5 katı", "Bu gerçek oran (90 ÷ 60). Eksen 50'den başladığı için grafik oranı abartır."], ["3 katı", "90 ÷ 30 gibi bir işlem; eksen başlangıcı doğru çıkarılmamış."], ["2 katı", "A'nın görünen yüksekliği 60 − 50 = 10; paydayı yanlış almış olabilirsin."]],
    "Çubuğun görünen yüksekliği = değer − eksenin başlangıç değeri.",
    ["Eksen 50'den başlıyor: görünen yükseklik = değer − 50.", "A çubuğu: 60 − 50 = 10 birim.", "B çubuğu: 90 − 50 = 40 birim.", "Oran: 40 ÷ 10 = 4. Gerçek oran 90 ÷ 60 = 1,5 olduğu halde grafik 4 katı gösteriyor."],
    "Kısaltılmış eksen farkı abartır; çubuk grafiklerde eksen 0'dan başlamalıdır.");
  Q("mi2", "1.2", 1, "Aynı grafik eksen 0'dan başlasaydı (A = 60, B = 90) B çubuğu A çubuğunun kaç katı görünürdü?",
    "1,5 katı", "Eksen 0'dan başlayınca çubuk yüksekliği değerin kendisidir: 90 ÷ 60 = 1,5.",
    [["4 katı", "Bu, eksen 50'den başlayan kısaltılmış grafiğin gösterdiği oran."], ["Yaklaşık 0,67 katı", "Oran ters yazılmış (60 ÷ 90). B, A'dan büyük."], ["30 katı", "Fark (90 − 60 = 30) oran değildir."]],
    "Eksen 0'dan başlıyorsa çubuk yüksekliği değerin kendisidir.",
    ["Eksen 0'dan başlıyor: çubuk yüksekliği = değer.", "A = 60, B = 90.", "Oran: 90 ÷ 60 = 1,5."], "Gerçek oranı bulmak için eksen başlangıcına bakmaya gerek yok: değerlerin kendisini böl.");
  Q("mi3", "1.2", 1, "Bir spor salonunun çıkışında 200 kişiye \"Düzenli spor yapıyor musunuz?\" diye sorulmuş, %96'sı \"evet\" demiş. \"Ülkedeki herkesin %96'sı düzenli spor yapıyor\" sonucu neden güvenilmezdir?",
    "Örneklem taraflı: spor salonundan çıkanlar zaten spor yapan bir grup", "Veri, tüm halkı temsil etmeyen bir yerden toplanmış; genelleme yapılamaz.",
    [["200 kişi her zaman azdır", "Sayı kadar, kişilerin nasıl seçildiği de önemli. Taraflı seçilmiş çok büyük bir örneklem de yanıltır."], ["Yüzde değerleri tam sayı olmamalıdır", "Sorun yüzdenin biçimi değil, kimlerin ölçüldüğü."], ["Soru Türkçe sorulmamıştır", "Soru dilinin bu örnekle ilgisi yok."]],
    "Veri kimlerden toplandı? O grup tüm halkı temsil eder mi?",
    ["Önce soruyu sor: ölçülenler kimler? Spor salonundan çıkan kişiler.", "Bu kişiler zaten spor yapma eğiliminde; genel halkın rastgele bir örneği değil.", "Taraflı (temsil etmeyen) örneklemden elde edilen oran, genel halk için kullanılamaz.", "Sonuç: örneklem, hedef kitleyi temsil edecek biçimde (rastgele) seçilmeliydi."], "Genelleme için örneklem temsil edici olmalı.");
  Q("mi4", "1.2", 3, "İki ilaç iki hasta grubunda denendi. İlaç X: kolay vakalarda 90 hastadan 81'i, zor vakalarda 10 hastadan 5'i iyileşti. İlaç Y: kolay vakalarda 10 hastadan 10'u, zor vakalarda 90 hastadan 54'ü iyileşti. Her iki grupta da Y'nin iyileşme oranı X'ten yüksek, ama toplamda X'in oranı daha yüksek çıkıyor. Bu nasıl olur?",
    "Hasta sayıları gruplar arasında çok farklı dağılmış: Y'nin hastalarının çoğu zor vakaymış", "Toplam oran gruplardaki hasta sayılarıyla ağırlıklandırılır; gruplar karışınca genel oran yanıltabilir.",
    [["Hesaplamada hata vardır; böyle bir durum olamaz", "Olabilir. Bu duruma Simpson paradoksu denir; aşağıdaki çözümde sayıları kendin görürsün."], ["X ilacı kesinlikle daha iyidir", "Her iki grupta da Y daha başarılı; toplam oran gruplardaki hasta dağılımı yüzünden X'i öne çıkarıyor."], ["Zor vakalar iyileşme oranını etkilemez", "Zor vakalarda oran düşük; Y'nin hastalarının çoğu zor vaka olduğu için toplamı aşağı çekiyor."]],
    "Önce her grubun oranını, sonra toplam oranı hesapla. Kimde zor vaka fazla?",
    ["X kolay: 81 ÷ 90 = %90; X zor: 5 ÷ 10 = %50.", "Y kolay: 10 ÷ 10 = %100; Y zor: 54 ÷ 90 = %60. Her iki grupta Y daha yüksek.", "Toplam X: (81 + 5) ÷ 100 = %86. Toplam Y: (10 + 54) ÷ 100 = %64. Toplamda X daha yüksek.", "Neden? X'in hastalarının çoğu kolay vaka (90), Y'nin hastalarının çoğu zor vaka (90). Genel oran, hasta sayılarıyla ağırlıklanır.", "Sonuç: Gruplara ayırmadan çıkarılan genel sonuç yanıltıcı olabilir."], "Alt gruplara bak; genel oran tek başına yeterli değildir.");
  Q("mi5", "1.2", 1, "Üç araştırmada doğrusal ilişki katsayısı P: r = 0,30, Q: r = −0,80, R: r = 0,65 bulunmuştur. Doğrusal ilişkinin en güçlü olduğu araştırma hangisidir?",
    "Q", "Gücü işaret değil mutlak değer belirler: |−0,80| = 0,80 en büyük.",
    [["R", "|0,65| < |−0,80|; işaret gücü artırmaz."], ["P", "|0,30| en küçük; zayıf ilişki."], ["Üçünün gücü aynıdır", "r'nin mutlak değeri farklı, dolayısıyla güçleri farklı."]],
    "İlişkinin gücü r'nin işaretine değil mutlak değerine bağlıdır.",
    ["Mutlak değerleri hesapla: |0,30| = 0,30; |−0,80| = 0,80; |0,65| = 0,65.", "En büyük mutlak değer 0,80 → Q.", "Q'nun ilişkisi ters yönlü (negatif) ama güçlüdür."], "İşaret yönü, mutlak değer gücü söyler.");
  Q("mi6", "1.2", 1, "Bir araştırmada yalnızca 8 öğrenci ölçülmüş ve r = 0,9 bulunmuş; yazar \"Bütün öğrencilerde bu ilişki geçerli\" demiş. En uygun eleştiri hangisidir?",
    "Gözlem sayısı az; küçük örneklemde r çok oynaktır, genelleme için yetersiz", "Küçük n'de birkaç nokta r'yi çok değiştirebilir.",
    [["r = 0,9 düşük bir değerdir", "0,9 güçlü bir değerdir; sorun değerin kendisi değil, kaç gözleme dayandığı."], ["r hiçbir zaman genellenemez", "Yeterince büyük ve temsil edici örneklemle genelleme yapılabilir."], ["Öğrenciler yerine yetişkinler ölçülmeli", "Soru kim ölçüldüğünden çok kaç kişinin ölçüldüğü."]],
    "Gözlem sayısı (n) küçükken sonuç ne kadar kararlıdır?",
    ["n = 8: çok az gözlem.", "Küçük n'de bir iki uç nokta r'yi büyük ölçüde değiştirebilir.", "Dolayısıyla r = 0,9 bu 8 öğrenci için doğru olsa da tüm öğrencilere genellemek için yeterli kanıt yok."], "n küçükse temkinli ol.");
  Q("mi7", "1.2", 2, "Bir bitkinin boyu 1–6. günler arasında ölçülmüş; eğilim doğrusu y = 4x + 10 (x: gün, y: mm). Bu doğruyla 100. gün için boy 410 mm bulunuyor. Bu tahmin için hangisi doğrudur?",
    "Hesap doğru ama doğru yalnızca ölçülen aralık (1–6. gün) için güvenilir; bu kadar uzağa tahmin anlamsız olabilir", "Aralığın çok dışına tahmin (dış tahmin) varsayım gerektirir; büyüme sonsuza dek doğrusal sürmez.",
    [["Tahmin kesinlikle doğrudur", "Doğru yalnızca 1–6. günleri özetliyor; 100. güne taşımak güvenilmez."], ["Tahmin yanlış hesaplanmıştır", "4 · 100 + 10 = 410: hesap doğru; sorun kullanım."], ["Eğilim doğrusu hiçbir zaman tahmin için kullanılamaz", "Ölçülen aralığın içinde tahmin için kullanışlıdır."]],
    "Doğru hangi aralıktaki veriden çıkarıldı? 100. gün o aralığın içinde mi?",
    ["x = 100: y = 4 · 100 + 10 = 410 mm (hesap doğru).", "Ama veri yalnızca 1–6. günleri kapsıyor.", "Bitki sonsuza dek aynı hızla büyümez (yer, besin, mevsim).", "Sonuç: hesap doğru, kullanım hatalı; tahmin ölçülen aralığın içinde kalmalı."], "Dış tahmin yapma.");
  Q("mi8", "1.2", 1, "Bir grafikte yatay eksende 0, 10, 20, 50, 100 değerleri eşit aralıklarla yazılmıştır. Bu grafik neyi yanıltabilir?",
    "Eksen eşit ölçeklenmediği için değişimin hızı ve eğim gerçekte olduğundan farklı görünür", "Eşit aralıklı bir eksende değerler de eşit farklı olmalı; burada aralıklar 10, 10, 30, 50.",
    [["Hiçbir şeyi, eksen her zaman doğrudur", "Eksenin eşit ölçeklenmesi dürüst bir grafiğin temel şartlarından biri."], ["Yalnızca renkleri", "Renk değil, ölçek sorunu."], ["Veriyi yanlış yapar", "Veri aynı; yanıltan sunuluş."]],
    "Ardışık eksen değerleri arasındaki farkları hesapla. Eşit mi?",
    ["Ardışık farklar: 10 − 0 = 10, 20 − 10 = 10, 50 − 20 = 30, 100 − 50 = 50.", "Aralıklar görsel olarak eşit ama değer farkları eşit değil.", "Bu yüzden eğri ve eğim gerçekte olduğundan farklı görünür.", "Dürüst grafikte eşit görsel aralık = eşit değer farkı."], "Ölçek eşit mi? Her zaman kontrol et.");
  Q("mi9", "1.2", 1, "Bir enerji içeceği şirketi \"içeceğimizi kullananların dikkat süresi %30 daha uzun\" diyor. Ürünü satan kurumun kendi yaptığı bu araştırma için ilk sorulacak soru hangisi olmalıdır?",
    "Veriyi kim, hangi yöntemle ve kaç kişiyle topladı?", "Kaynak, yöntem ve gözlem sayısı güvenilirliğin ilk üç sorusudur; satıcının kendi araştırması çıkar çatışması içerir.",
    [["Grafik renkli mi?", "Renk güvenilirlikle ilgili değil."], ["%30 yuvarlak bir sayı mı?", "Yuvarlaklık güvenilirlik göstermez."], ["Başka içecekler de var mı?", "İlginç ama ilk soru yöntem ve kaynak."]],
    "Güvenilirliğin üç sorusu: kim, nasıl, kaç kişi?",
    ["Araştırmayı ürünü satan kurum yapmış: çıkar çatışması olabilir.", "İlk soru: veriyi kim, hangi yöntemle, kaç kişiyle topladı?", "Yöntem ve örneklem belirsizse yüzdeye güvenilmez."], "Kaynak ve yöntem sorusu her zaman önce gelir.");
  Q("mi10", "1.2", 2, "Bir okulda kütüphaneyi çok kullanan öğrencilerin not ortalaması yüksek çıkıyor (güçlü pozitif ilişki). Bu bilgiden hangi sonuç kesin olarak çıkarılabilir?",
    "İkisi birlikte artma eğiliminde; kütüphanenin notu artırdığı bu veriyle kanıtlanmış olmaz", "İlişki sebep değildir: ders çalışma isteği gibi ortak bir etken ikisini birden artırıyor olabilir.",
    [["Kütüphane kullanımı notları artırır", "Sebep-sonuç iddiası ek kanıt ister; ortak etken olabilir."], ["Notlar yükselince öğrenciler kütüphaneyi çok kullanır", "Ters yön de kanıtlanmamış."], ["İkisi arasında hiçbir ilişki yoktur", "Güçlü pozitif ilişki var; tartışılan sebep, ilişkinin varlığı değil."]],
    "İlişki var ama sebep olduğunu hangi veri kanıtlar?",
    ["Veri yalnızca iki değişkenin birlikte arttığını gösteriyor.", "Üçüncü bir etken (ders çalışma isteği, ev ortamı) ikisini birden etkiliyor olabilir.", "Sebep-sonuç için kontrollü deney gibi ek kanıt gerekir.", "Doğru ifade: birlikte artma eğilimi var; sebep kanıtlanmadı."], "İlişki ≠ sebep.");

  /* ---------- 2. Tema: Geometrik Şekiller ---------- */
  Q("md1", "2.1", 1, "Bir dörtgenin üç iç açısı 80°, 95° ve 110° ise dördüncü iç açı kaç derecedir?",
    "75°", "İç açılar toplamı 360°: 360 − (80 + 95 + 110) = 75.",
    [["85°", "Toplamı 360 yerine 370 gibi almış olabilirsin; 80 + 95 + 110 = 285."], ["65°", "360 − 295 hesabı gibi; 80 + 95 + 110 = 285 olmalı."], ["105°", "Toplamı 390 almışsın; dörtgende toplam 360."]],
    "Dörtgenin iç açıları toplamı kaçtır?",
    ["Bir köşegen dörtgeni iki üçgene böler: iç açılar toplamı 2 · 180° = 360°.", "Bilinen açıların toplamı: 80 + 95 + 110 = 285.", "Dördüncü açı: 360 − 285 = 75°."], "Dörtgende iç açılar toplamı 360°.");
  Q("md2", "2.1", 1, "Dışbükey bir dörtgenin bir köşesindeki iç açı 70° ise aynı köşedeki dış açı kaç derecedir?",
    "110°", "İç açı ve dış açı doğrusal çifttir: 180 − 70 = 110.",
    [["70°", "İç açının kendisini yazmışsın."], ["20°", "90 − 70 yapılmış; dış açı bütünler (180°'ye tamamlar)."], ["90°", "Dik açı ile karıştırılmış."]],
    "İç açı + dış açı kaç derecedir?",
    ["Bir köşede iç açı ile dış açı yan yana ve doğrusal (düz) açı oluşturur: toplamları 180°.", "Dış açı = 180 − 70 = 110°."], "İç + dış = 180°.");
  Q("md3", "2.1", 2, "Dışbükey bir dörtgenin dış açılarının (her köşede bir tane) toplamı kaç derecedir?",
    "360°", "Dört köşede iç + dış = 4 · 180 = 720; iç açılar toplamı 360; dış açılar toplamı 720 − 360 = 360.",
    [["180°", "Bu üçgenin iç açılar toplamı."], ["720°", "Bu, dört köşedeki iç + dış açıların toplamı (4 · 180)."], ["540°", "Beşgenin iç açılar toplamı."]],
    "Her köşede iç + dış = 180°; 4 köşe, iç toplam 360°.",
    ["Her köşede iç açı + dış açı = 180°.", "4 köşe olduğu için tüm iç ve dış açıların toplamı 4 · 180 = 720°.", "İç açıların toplamı 360°.", "Dış açıların toplamı: 720 − 360 = 360°. (Her dışbükey çokgende dış açılar toplamı 360°.)"], "Dışbükey çokgenlerde dış açılar toplamı hep 360°.");
  Q("md4", "2.1", 2, "Bir dörtgenin iç açılarının ölçüleri 2x, 3x, 4x ve 3x derecedir. En büyük açı kaç derecedir?",
    "120°", "12x = 360 → x = 30; en büyük açı 4x = 120°.",
    [["90°", "3x = 90, ama en büyük açı 4x."], ["60°", "2x = 60; en küçük açı."], ["30°", "x değeri; açının kendisi değil."]],
    "Dört açının toplamı 360°. Toplamı x cinsinden yaz.",
    ["Dörtgenin iç açılarının toplamı 360°: 2x + 3x + 4x + 3x = 360.", "12x = 360 → x = 30.", "Açılar: 60°, 90°, 120°, 90°.", "En büyük açı 4x = 120°."], "Toplam 360° ile denklem kur.");
  Q("md6", "2.2", 1, "ABCD paralelkenarının köşegenleri E noktasında kesişiyor. |AE| = 5 cm ve |BE| = 7 cm ise |AC| + |BD| kaç cm'dir?",
    "24 cm", "Paralelkenarın köşegenleri birbirini ortalar: |AC| = 10, |BD| = 14; toplam 24.",
    [["12 cm", "AE + BE = 12 hesabı; köşegenlerin tamamı AC ve BD."], ["35 cm", "5 · 7 çarpımı; toplam isteniyor."], ["70 cm", "10 · 7 gibi bir çarpım; köşegenlerin uzunlukları toplanacak."]],
    "Paralelkenarda köşegenler birbirini nasıl böler?",
    ["Paralelkenarda köşegenler birbirini ortalar: E, hem AC'nin hem BD'nin orta noktası.", "|AC| = 2 · |AE| = 2 · 5 = 10 cm.", "|BD| = 2 · |BE| = 2 · 7 = 14 cm.", "Toplam: 10 + 14 = 24 cm."], "Köşegenler birbirini ortalar.");
  Q("md7", "2.2", 2, "Bir dikdörtgenin bir kenarı 5 cm, köşegeni 13 cm ise alanı kaç cm²'dir?",
    "60 cm²", "Diğer kenar √(13² − 5²) = 12; alan 5 · 12 = 60.",
    [["65 cm²", "5 · 13 çarpılmış; köşegen kenar değildir."], ["30 cm²", "Alanı ½ · 5 · 12 gibi yarılamışsın; dikdörtgen alanı kenarların çarpımıdır."], ["17 cm²", "5 + 12 toplanmış; alan çarpımla bulunur."]],
    "Köşegen, dikdörtgeni iki dik üçgene böler. Pisagor'u kullan.",
    ["Köşegen dikdörtgeni iki dik üçgene ayırır: kenarlar 5 ve x, hipotenüs 13.", "Pisagor: 5² + x² = 13² → x² = 169 − 25 = 144 → x = 12.", "Alan = 5 · 12 = 60 cm²."], "Dik üçgen + Pisagor (5-12-13).");
  Q("md8", "2.2", 2, "Köşegenleri 6 cm ve 8 cm olan bir eşkenar dörtgenin çevresi kaç cm'dir?",
    "20 cm", "Yarım köşegenler 3 ve 4 olan dik üçgenden kenar 5; çevre 4 · 5 = 20.",
    [["28 cm", "6 + 8 + 6 + 8 gibi bir toplam; eşkenar dörtgenin kenarı köşegen değildir."], ["14 cm", "6 + 8; kenarı ve çevreyi hesaplamamış."], ["24 cm", "Bu, alanın değeri (6 · 8 ÷ 2); çevre sorulmuş."]],
    "Eşkenar dörtgenin köşegenleri birbirini dik ortalar: bir dik üçgen oluşur.",
    ["Köşegenler birbirini dik ortalar: yarım köşegenler 3 ve 4.", "Bir kenar, bu dik üçgenin hipotenüsü: √(3² + 4²) = 5.", "Eşkenar dörtgenin 4 kenarı eşit: çevre = 4 · 5 = 20 cm."], "Köşegenler dik ortalar: 3-4-5 üçgeni.");
  Q("md9", "2.2", 1, "Aşağıdaki ifadelerden hangisi her zaman doğrudur?",
    "Her kare bir eşkenar dörtgendir.", "Karenin dört kenarı eşit olduğundan eşkenar dörtgendir (ayrıca bir dikdörtgendir).",
    [["Her dikdörtgen bir karedir.", "Kenarları 3 ve 5 olan dikdörtgen kare değildir."], ["Her eşkenar dörtgen bir karedir.", "Açıları 60° ve 120° olan eşkenar dörtgen kare değildir."], ["Her paralelkenar bir dikdörtgendir.", "Açıları 90° olmayan bir paralelkenar dikdörtgen değildir."]],
    "Kare, hem dikdörtgenin hem eşkenar dörtgenin tüm özelliklerini taşır; tersi doğru mu?",
    ["Kare: dört kenarı eşit, dört açısı 90°.", "Dört kenarı eşit olduğu için eşkenar dörtgendir; açıları 90° olduğu için dikdörtgendir.", "Tersi yanlış: karşı örnekler 3×5 dikdörtgen, 60°/120° eşkenar dörtgen, eğik paralelkenar."], "Kare özel durumdur; ters yön genelde yanlıştır.");
  Q("md10", "2.2", 2, "Köşegenlerinin uzunlukları eşit olan bir paralelkenar mutlaka hangisidir?",
    "Dikdörtgen", "Paralelkenarda köşegenler eşitse bütün açılar 90° olur: dikdörtgen.",
    [["Eşkenar dörtgen", "Eşkenar dörtgenin köşegenleri genelde eşit değildir (3-4-5 örneğinde 6 ve 8)."], ["Kare", "Kare olması için ek koşul (kenarlar eşit) gerekir; \"mutlaka\" demek için yetmez."], ["Deltoid", "Deltoid bir paralelkenar değildir."]],
    "Köşegenleri eşit olan paralelkenarın açıları hakkında ne söyleyebilirsin?",
    ["Paralelkenarda karşılıklı kenarlar eşit; köşegenler eşit ise ABD ve BAC üçgenleri eş olur (K.K.K.).", "Bu, ardışık iki açının eşit olmasını sağlar; ardışık açılar bütünler olduğundan her biri 90° olur.", "Dört açısı 90° olan paralelkenar dikdörtgendir (kare olması şart değil)."], "Eşit köşegen → dik açılar.");
  Q("md11", "2.2", 2, "Alanı 24 cm² olan bir eşkenar dörtgenin bir köşegeni 6 cm ise diğer köşegeni kaç cm'dir?",
    "8 cm", "Alan = e · f ÷ 2 → 24 = 6 · f ÷ 2 → f = 8.",
    [["4 cm", "24 ÷ 6 = 4 yapılmış; alan formülünde ikiye bölme var."], ["12 cm", "24 ÷ 2 = 12; diğer köşegen değil."], ["48 cm", "24 · 2 yapılmış; formül terslenmiş."]],
    "Eşkenar dörtgenin alanı köşegenler cinsinden nasıl yazılır?",
    ["Alan = (e · f) ÷ 2.", "24 = (6 · f) ÷ 2 → 24 = 3f.", "f = 8 cm."], "Alan = köşegenlerin çarpımının yarısı.");
  Q("md12", "2.3", 1, "Kenar sayısı 8 olan bir dışbükey çokgenin kaç köşegeni vardır?",
    "20", "n(n − 3) ÷ 2 = 8 · 5 ÷ 2 = 20.",
    [["40", "n(n − 3) = 40; ikiye bölmeyi unutmuşsun (her köşegen iki kez sayılır)."], ["24", "8 · 3 gibi bir çarpım."], ["8", "Kenar sayısı; köşegen sayısı değil."]],
    "Her köşeden kaç köşegen çıkar? Her köşegen iki köşe tarafından sayılır.",
    ["Bir köşeden kendisi ve iki komşusu hariç diğer köşelere köşegen çizilir: n − 3 = 5 köşegen.", "8 köşe · 5 = 40; ama her köşegen iki uçtan sayıldı.", "Gerçek sayı: 40 ÷ 2 = 20."], "Köşegen sayısı = n(n − 3) ÷ 2.");
  Q("md13", "2.3", 2, "İç açıları toplamı 720° olan çokgen kaç kenarlıdır?",
    "6", "(n − 2) · 180 = 720 → n − 2 = 4 → n = 6.",
    [["4", "720 ÷ 180 = 4 bulunmuş ama n − 2 olduğu unutulmuş (n = 6)."], ["5", "Beşgenin iç açıları toplamı 540°."], ["8", "Sekizgenin iç açıları toplamı 1080°."]],
    "n kenarlı çokgenin iç açıları toplamı hangi formülle bulunur?",
    ["Bir köşeden çizilen köşegenlerle çokgen n − 2 üçgene ayrılır: toplam (n − 2) · 180°.", "(n − 2) · 180 = 720 → n − 2 = 4.", "n = 6 (altıgen)."], "(n − 2) · 180°.");
  Q("md14", "2.3", 1, "Düzgün çokgen için hangisi doğrudur?",
    "Tüm kenarları ve tüm iç açıları eşittir.", "Düzgün çokgenin tanımı: hem kenarlar hem açılar eşit.",
    [["Yalnızca kenarları eşittir.", "Yalnızca kenarları eşit olan şekil (örneğin eşkenar dörtgen) düzgün çokgen olmayabilir."], ["Yalnızca iç açıları eşittir.", "Yalnızca açıları eşit olan şekil (örneğin dikdörtgen) düzgün çokgen olmayabilir."], ["Köşegenleri her zaman eşittir.", "Düzgün çokgenlerin köşegenleri eşit olmak zorunda değil (düzgün altıgende farklı köşegen uzunlukları var)."]],
    "Hem kenarlara hem açılara bak: yalnızca biri yetmez.",
    ["Eşkenar dörtgen: kenarlar eşit ama açılar eşit olmayabilir → düzgün değil.", "Dikdörtgen: açılar eşit ama kenarlar eşit olmayabilir → düzgün değil.", "Düzgün çokgen: hem kenarlar hem açılar eşit (kare, düzgün altıgen…)."], "Düzgün = tüm kenarlar eşit ve tüm açılar eşit.");
  Q("md15", "2.4", 2, "İç açılarının toplamı 1260° olan dışbükey çokgenin kenar sayısı kaçtır?",
    "9", "(n − 2) · 180 = 1260 → n − 2 = 7 → n = 9.",
    [["7", "n − 2 = 7; kenar sayısı n = 9."], ["8", "Bir eksik: (8 − 2) · 180 = 1080."], ["10", "Bir fazla: (10 − 2) · 180 = 1440."]],
    "(n − 2) · 180° formülünü kullan, ters yönde çöz.",
    ["(n − 2) · 180 = 1260.", "n − 2 = 1260 ÷ 180 = 7.", "n = 9."], "İç açılar toplamı (n − 2) · 180°.");
  Q("md16", "2.4", 2, "Köşegen sayısı 35 olan dışbükey çokgenin kenar sayısı kaçtır?",
    "10", "n(n − 3) ÷ 2 = 35 → n(n − 3) = 70 → n = 10.",
    [["7", "7 · 4 ÷ 2 = 14 köşegen; 35 değil."], ["9", "9 · 6 ÷ 2 = 27 köşegen."], ["14", "14 · 11 ÷ 2 = 77 köşegen."]],
    "n(n − 3) = 70: farkları 3 olan iki çarpan bul.",
    ["n(n − 3) ÷ 2 = 35 → n(n − 3) = 70.", "n² − 3n − 70 = 0 → (n − 10)(n + 7) = 0.", "n pozitif olmalı: n = 10. Kontrol: 10 · 7 ÷ 2 = 35 ✓."], "Denklem kur, çarpanlara ayır, geçerli kökü seç.");
  Q("md17", "2.4", 1, "Bir iç açısı 140° olan düzgün çokgen kaç kenarlıdır?",
    "9", "Dış açı 180 − 140 = 40°; 360 ÷ 40 = 9.",
    [["8", "Düzgün sekizgenin iç açısı 135°."], ["10", "Düzgün ongenin iç açısı 144°."], ["7", "Düzgün yedigenin iç açısı yaklaşık 128,6°."]],
    "Bir dış açıyı bul; dış açılar toplamı 360°.",
    ["İç açı 140° → dış açı 180 − 140 = 40°.", "Düzgün çokgende dış açılar eşit ve toplamları 360°: kenar sayısı = 360 ÷ 40.", "n = 9."], "Düzgün çokgende bir dış açı = 360° ÷ n.");
  Q("md18", "2.4", 2, "Bir köşesinden çizilen köşegenlerle 6 üçgene ayrılan dışbükey çokgen kaç kenarlıdır?",
    "8", "Bir köşeden çizilen köşegenler çokgeni n − 2 üçgene ayırır: n − 2 = 6 → n = 8.",
    [["6", "Üçgen sayısı 6; kenar sayısı n = 8."], ["7", "n − 1 = 6 gibi bir hata; üçgen sayısı n − 2."], ["9", "n − 3 = 6 olsaydı n = 9 olurdu; n − 3 köşegen sayısıdır, üçgen sayısı değil."]],
    "Bir köşeden n − 3 köşegen çizilir. Kaç üçgen oluşur?",
    ["Bir köşeden n − 3 köşegen çizilir ve çokgen n − 2 üçgene ayrılır.", "n − 2 = 6.", "n = 8."], "Üçgen sayısı = n − 2.");
  Q("md19", "2.5", 2, "Çevresi 28 cm olan bir dikdörtgenin kenar uzunlukları oranı 3 : 4 ise alanı kaç cm²'dir?",
    "48 cm²", "Yarım çevre 14 = 3k + 4k → k = 2; kenarlar 6 ve 8; alan 48.",
    [["28 cm²", "Çevrenin değeri; alan değil."], ["42 cm²", "6 · 7 gibi bir hata; kenarlar 6 ve 8."], ["24 cm²", "6 · 8 = 48'in yarısı; dikdörtgen alanı yarılanmaz."]],
    "Kenarlara 3k ve 4k de. Çevreyi k cinsinden yaz.",
    ["Kenarlar 3k ve 4k olsun. Çevre = 2(3k + 4k) = 14k.", "14k = 28 → k = 2.", "Kenarlar: 6 cm ve 8 cm.", "Alan = 6 · 8 = 48 cm²."], "Orantılı kenarlara k deyip denklem kur.");
  Q("md20", "2.5", 2, "Paralel kenarları 8 cm ve 12 cm, yüksekliği 5 cm olan yamuğun alanı kaç cm²'dir?",
    "50 cm²", "Alan = (8 + 12) ÷ 2 · 5 = 50.",
    [["100 cm²", "(8 + 12) · 5 = 100; ikiye bölmeyi unutmuşsun."], ["60 cm²", "12 · 5; yalnızca büyük tabanı kullanmışsın."], ["40 cm²", "8 · 5; yalnızca küçük tabanı kullanmışsın."]],
    "Yamuğun alanı paralel kenarların ortalaması ile yüksekliğin çarpımıdır.",
    ["Yamuk alanı = (a + c) ÷ 2 · h.", "(8 + 12) ÷ 2 = 10.", "10 · 5 = 50 cm²."], "Alan = tabanların ortalaması · yükseklik.");
  Q("md21", "2.5", 3, "12 köşeli bir dışbükey çokgenin köşelerinden herhangi ikisini birleştiren bütün doğru parçaları çiziliyor. Bunların kaç tanesi köşegendir?",
    "54", "Tüm doğru parçaları C(12,2) = 66; 12 tanesi kenar; köşegen sayısı 66 − 12 = 54.",
    [["66", "Bu, kenarlar dahil tüm doğru parçalarının sayısı."], ["12", "Bu, kenar sayısı."], ["132", "12 · 11; her parça iki kez sayılmış."]],
    "Önce iki köşe seçme sayısı kaç? Kenarlar köşegen değil.",
    ["İki köşe seçmenin yolu: 12 · 11 ÷ 2 = 66 doğru parçası.", "Bunların 12 tanesi çokgenin kenarları.", "Köşegen sayısı: 66 − 12 = 54.", "Kontrol: n(n − 3) ÷ 2 = 12 · 9 ÷ 2 = 54 ✓."], "Köşegen = tüm doğru parçaları − kenarlar.");
  Q("md22", "2.5", 2, "Kenar uzunluğu 4 cm olan düzgün altıgenin alanı kaç cm²'dir?",
    "24√3 cm²", "6 eşkenar üçgenin toplamı: 6 · (√3 ÷ 4) · 4² = 24√3.",
    [["16√3 cm²", "4 eşkenar üçgenin alanı; altıgende 6 üçgen var."], ["12√3 cm²", "3 eşkenar üçgen alanı; altıgen 6 üçgene ayrılır."], ["48√3 cm²", "12 üçgen alanı; fazladan çarpılmış."]],
    "Düzgün altıgeni merkezden 6 eşkenar üçgene ayır.",
    ["Merkezden köşelere çizilen yarıçaplar altıgeni 6 eşit üçgene ayırır; her biri kenarı 4 olan eşkenar üçgendir.", "Eşkenar üçgen alanı = (√3 ÷ 4) · a² = (√3 ÷ 4) · 16 = 4√3.", "Altıgen alanı = 6 · 4√3 = 24√3 cm²."], "Düzgün altıgen = 6 eşkenar üçgen.");
  Q("md23", "2.5", 3, "ABCD dikdörtgeninde |AB| = 8 cm ve |BC| = 6 cm'dir. Köşegen uzunluğu ile çevrenin toplamı kaç cm'dir?",
    "38 cm", "Köşegen √(8² + 6²) = 10; çevre 2(8 + 6) = 28; toplam 38.",
    [["28 cm", "Yalnızca çevre; köşegen eklenmemiş."], ["34 cm", "10 + 24 gibi bir hata; çevre 28."], ["48 cm", "8 · 6 = 48; alan, istenen değil."]],
    "Köşegeni Pisagor ile bul, çevreyi ayrıca hesapla.",
    ["Köşegen: √(8² + 6²) = √100 = 10 cm.", "Çevre: 2 · (8 + 6) = 28 cm.", "Toplam: 10 + 28 = 38 cm."], "İki ayrı büyüklüğü ayrı ayrı hesapla.");
})();
