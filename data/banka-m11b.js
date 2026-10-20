/* Soru bankası (Maarif biçimi): 11. sınıf Matematik 3.1 Trigonometrik fonksiyonlar, 4.1 Üstel fonksiyonlar, 5.1 Fonksiyonların bileşkesi.
   Her soruda ipucu, "nasıl düşünmeliyiz" notu ve adım adım çözüm vardır. Özgün sorular (CC BY-NC-SA 4.0). meta.s11 = kitap konusu. */
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
  var T = "m11-3-1", U = "m11-4-1", B = "m11-5-1";
  /* ---------- 3.1 Trigonometrik fonksiyonlar ---------- */
  Q("n31a1", "3.1", T, 1, "π/3 radyan kaç derecedir?", "60°", "π rad = 180° olduğundan π/3 = 180°/3 = 60°.",
    [["30°", "π/6 rad = 30°; π/3'ün yarısı."], ["90°", "π/2 rad = 90°."], ["120°", "2π/3 rad = 120°."]],
    "π yerine 180° yaz.", "Radyanı dereceye çevirirken π yerine 180° koyup sadeleştir.", ["π = 180° → π/3 = 180°/3 = 60°."], 1);
  Q("n31a2", "3.1", T, 1, "135° kaç radyandır?", "3π/4", "135 · π/180 = 3π/4 (135/180 = 3/4).",
    [["2π/3", "2π/3 = 120°."], ["5π/6", "5π/6 = 150°."], ["3π/2", "3π/2 = 270°."]],
    "Dereceyi 180'e böl, π ile çarp.", "135/180'i en sade kesre getir: ikisini de 45'e böl.", ["135/180 = 3/4.", "135° = 3π/4 rad."], 1);
  Q("n31a3", "3.1", T, 2, "−30° açısının esas ölçüsü kaç derecedir?", "330°", "−30° + 360° = 330°. Saat yönünde 30° gitmek, saat yönünün tersine 330° gitmekle aynı noktaya getirir.",
    [["30°", "30° saat yönünün tersine; −30° ise saat yönünde. Farklı noktalar."], ["150°", "180° − 30° yapılmış; esas ölçü için 360° eklenir."], ["210°", "180° + 30° yapılmış; yanlış tam tur."]],
    "Negatif açıya bir tam tur (360°) ekle.", "Esas ölçü 0°–360° arasındadır.", ["−30° + 360° = 330°.", "330°, 0°–360° aralığında."], 3);
  Q("n31a4", "3.1", T, 2, "Birim çember üzerindeki bir P noktasının koordinatları (−0,6; 0,8) ise bu noktaya karşılık gelen açının sinüs ve kosinüs değerleri sırasıyla nedir?",
    "sin x = 0,8 ve cos x = −0,6", "Birim çemberde noktanın dikey koordinatı sinüs, yatay koordinatı kosinüstür.",
    [["sin x = −0,6 ve cos x = 0,8", "Koordinatlar yer değiştirmiş: yatay = cos, dikey = sin."], ["sin x = 0,8 ve cos x = 0,6", "Yatay koordinat −0,6 olduğundan cos x = −0,6 (işaret önemli)."], ["sin x = 1 ve cos x = 0", "Bu P noktası çemberin tepe noktası (0, 1) için."]],
    "Birim çemberde yatay hangisi, dikey hangisi?", "Önce noktanın birim çember üzerinde olduğunu doğrula: (−0,6)² + 0,8² = 0,36 + 0,64 = 1.",
    ["Yatay (apsis) = cos x = −0,6.", "Dikey (ordinat) = sin x = 0,8.", "Kontrol: sin² + cos² = 0,64 + 0,36 = 1."], 5);
  Q("n31a5", "3.1", T, 2, "x dar açı ve sin x = 5/13 ise cos x kaçtır?", "12/13", "sin²x + cos²x = 1 → cos²x = 1 − 25/169 = 144/169. Dar açıda kosinüs pozitif: cos x = 12/13.",
    [["−12/13", "Dar açıda (birinci bölge) kosinüs pozitiftir."], ["8/13", "1 − 5/13 yapılmış; kare almayı unutmuşsun."], ["144/169", "Bu cos²x; kosinüsü bulmak için karekök alınmalı."]],
    "sin²x + cos²x = 1 özdeşliğini kullan.", "Kareler toplamı, karekök, bölgeye göre işaret.", ["cos²x = 1 − (5/13)² = 1 − 25/169 = 144/169.", "cos x = 12/13 (dar açıda pozitif)."], 8);
  Q("n31a6", "3.1", T, 2, "f(x) = 2·cos x − 1 fonksiyonunun görüntü kümesi aşağıdakilerden hangisidir?", "[−3, 1]", "cos x ∈ [−1, 1] → 2cos x ∈ [−2, 2] → −1 ile [−3, 1].",
    [["[−2, 2]", "−1 kaydırması unutulmuş."], ["[−1, 1]", "2 ile çarpma ve −1 ile kaydırma dikkate alınmamış."], ["[−3, 3]", "Alt sınır doğru, üst sınır 2·1 − 1 = 1; 3 değil."]],
    "Önce cos x'in aralığını yaz, sonra işlemleri sırayla uygula.", "Aralığa işlemleri adım adım uygula: çarp, sonra kaydır.", ["−1 ≤ cos x ≤ 1.", "2 ile çarp: −2 ≤ 2cos x ≤ 2.", "1 çıkar: −3 ≤ f(x) ≤ 1."], 8);
  Q("n31a7", "3.1", T, 1, "sin(x + 4π) ifadesi aşağıdakilerden hangisine eşittir?", "sin x", "sin x'in periyodu 2π'dir; 4π = 2 · 2π, yani iki tam periyot eklenmiştir ve değer değişmez.",
    [["cos x", "Kosinüse geçiş π/2 kayma gerektirir; 4π kayma aynı fonksiyonu verir."], ["−sin x", "−sin x için π kayması gerekir (sin(x + π) = −sin x)."], ["sin 4x", "Üstteki ifade x'e 4π eklenmesidir, x'in 4 ile çarpılması değil."]],
    "Periyot kaç? 4π kaç periyot eder?", "Periyodun tam katları eklenince fonksiyon değeri değişmez.", ["sin'in periyodu 2π.", "4π = 2 · 2π → iki tam periyot.", "sin(x + 4π) = sin x."], 8);
  Q("n31a8", "3.1", T, 2, "Aşağıdakilerden hangisinde tan x tanımsızdır?", "x = 3π/2", "cos(3π/2) = 0 olduğundan tan x = sin x ÷ cos x payda sıfır olur.",
    [["x = π", "cos π = −1 ≠ 0; tan π = 0, tanımlı."], ["x = π/4", "cos(π/4) ≠ 0; tan(π/4) = 1."], ["x = 2π", "cos 2π = 1; tan 2π = 0, tanımlı."]],
    "Tanjantın paydası kosinüstür.", "tan x için cos x = 0 olan açıları ara: π/2 + kπ.", ["cos x = 0 → x = π/2, 3π/2, …", "x = 3π/2 bunlardan biri → tanımsız."], 10);
  Q("n31a9", "3.1", T, 1, "Bir öğrenci sin x = 1,5 eşitliğini sağlayan bir x bulmaya çalışıyor. Bu çalışma için ne söylenebilir?", "Böyle bir x yoktur; sin x değerleri −1 ile 1 arasındadır.", "Sinüsün görüntü kümesi [−1, 1]. 1,5 bu aralığın dışında olduğu için denklemin çözümü yoktur.",
    [["x = 90° bir çözümdür.", "sin 90° = 1; 1,5 değil."], ["Çözüm vardır ama büyük bir açıdır.", "Açıyı büyütmek aralığı değiştirmez; sin her zaman [−1, 1]."], ["Çözüm yalnızca radyan cinsinden bulunur.", "Birim ne olursa olsun sinüs 1'i geçemez."]],
    "Sinüsün alabileceği en büyük değer kaç?", "Birim çemberde dikey uzaklık yarıçaptan büyük olamaz.", ["Birim çember yarıçapı 1; sin x dikey koordinat.", "−1 ≤ sin x ≤ 1.", "1,5 bu aralıkta değil → çözüm yok."], 8);
  Q("n31a10", "3.1", T, 3, "Yarıçapı 1 birim olan ve sabit hızla dönen bir dönme dolapta, dolabın en alt noktası yerde (0 yükseklik) ve merkezi 1 birim yüksekliktedir. Kabinin yerden yüksekliği h = 1 + sin x ile modelleniyor (x: dönme açısı). Kabinin ulaşabileceği en büyük yükseklik kaç birimdir?",
    "2 birim", "sin x en çok 1 olur; h = 1 + 1 = 2. (En düşük yükseklik 1 + (−1) = 0, yani yer seviyesi.)",
    [["1 birim", "1, merkezin yüksekliği (sin x = 0 anı); en büyük değil."], ["3 birim", "Yarıçapın 2 katı alınmış; sin x ≤ 1 olduğundan en büyük h 2'dir."], ["0 birim", "0 en küçük yükseklik; soru en büyüğünü soruyor."]],
    "sin x en büyük değerini nerede alır?", "Modelde önce değişkenin sınırlarını yaz, sonra modelin en büyük/en küçük değerini bul.", ["−1 ≤ sin x ≤ 1.", "h = 1 + sin x → 0 ≤ h ≤ 2.", "En büyük yükseklik: 2 birim."], 8);
  A("n31ao1", "3.1", T, 2, "Dar açı olan x için cos x = 5/13 ise (a) sin x, (b) tan x değerlerini bulunuz. (Kesir olarak yazınız.)",
    [{ label: "sin x", v: "12/13" }, { label: "tan x", v: "12/5" }], "sin²x + cos²x = 1; tan x = sin x ÷ cos x.", "Önce sinüsü bul, sonra tanjant için böl.",
    ["sin²x = 1 − (5/13)² = 144/169 → sin x = 12/13 (dar açıda pozitif).", "tan x = sin x ÷ cos x = (12/13) ÷ (5/13) = 12/5."],
    [[1, "sin²x + cos²x = 1 yazıldı"], [1, "sin x = 12/13 bulundu"], [1, "tan x = sin x ÷ cos x yazıldı"], [1, "tan x = 12/5 bulundu"]], 8);
  A("n31ao2", "3.1", T, 3, "f(x) = 3·sin x − 2 fonksiyonu için (a) en küçük değeri, (b) en büyük değeri bulunuz.",
    [{ label: "En küçük değer", v: "-5", accept: ["-5", "−5"] }, { label: "En büyük değer", v: "1" }], "sin x'in aralığına işlemleri sırayla uygula.", "Önce [−1, 1], sonra çarp, sonra çıkar.",
    ["−1 ≤ sin x ≤ 1.", "3 ile çarp: −3 ≤ 3sin x ≤ 3.", "−2 ile: −5 ≤ f(x) ≤ 1."],
    [[1, "sin x aralığı [−1, 1] yazıldı"], [1, "3 ile çarpma uygulandı"], [1, "En küçük −5"], [1, "En büyük 1"]], 8);

  /* ---------- 4.1 Üstel fonksiyonlar ---------- */
  Q("n41a1", "4.1", U, 1, "(1/2)⁻² ifadesinin değeri kaçtır?", "4", "Negatif üs tabanın tersini alır: (1/2)⁻² = 2² = 4.",
    [["−4", "Negatif üs sonucu negatif yapmaz."], ["1/4", "Üssün işareti dikkate alınmamış: (1/2)² = 1/4."], ["−1", "1/2 · (−2) yapılmış; üs tekrarlı çarpmadır."]],
    "Negatif üs = ters al.", "a⁻ⁿ = 1/aⁿ ve (1/2)⁻¹ = 2.", ["(1/2)⁻² = (2/1)² = 4."], 1);
  Q("n41a2", "4.1", U, 1, "f(x) = 2ˣ fonksiyonu için f(3) − f(0) farkı kaçtır?", "7", "f(3) = 2³ = 8; f(0) = 2⁰ = 1; fark 8 − 1 = 7.",
    [["8", "f(0) = 1 çıkarılmamış."], ["6", "f(0) = 2 alınmış; a⁰ = 1."], ["2", "3 − 0 − 1 gibi yanlış bir işlem; 2³ ve 2⁰ ayrı hesaplanmalı."]],
    "Önce f(3) ve f(0)'ı ayrı hesapla.", "a⁰ = 1 değerini unutma.", ["f(3) = 8, f(0) = 1.", "8 − 1 = 7."], 1);
  Q("n41a3", "4.1", U, 1, "f(x) = (0,3)ˣ fonksiyonu için hangisi doğrudur?", "Azalandır, çünkü taban 0 ile 1 arasındadır.", "0 < a < 1 olduğunda a'nın kuvvetleri x arttıkça küçülür: azalan fonksiyon.",
    [["Artandır, çünkü taban pozitiftir.", "Artış için taban 1'den büyük olmalı."], ["Sabittir.", "Sabit olması için a = 1 gerekir; o durum dışlanır."], ["Her x için negatiftir.", "Pozitif tabanın kuvvetleri her zaman pozitif."]],
    "Tabanı 1 ile karşılaştır.", "a > 1 artan, 0 < a < 1 azalan.", ["0 < 0,3 < 1 → azalan."], 5);
  Q("n41a4", "4.1", U, 2, "g(x) = 2^(x+2) fonksiyonunun grafiği aşağıdaki noktalardan hangisinden geçer?", "(0, 4)", "x = 0 için g(0) = 2² = 4.",
    [["(0, 1)", "Bu 2ˣ'in noktası; +2 kaydırması sola yapılır, g(0) = 2² = 4."], ["(0, 2)", "g(0) = 2^(0 + 2) = 4; 2¹ değil."], ["(0, 8)", "2³ = 8; üs 0 + 2 = 2, yani 2² = 4."]],
    "x = 0'ı yerine koy.", "Üstteki +2, grafiği sola 2 birim kaydırır; (0, 1) noktası (−2, 1) olur.", ["g(0) = 2^(0+2) = 2² = 4.", "Nokta: (0, 4)."], 7);
  Q("n41a5", "4.1", U, 2, "h(x) = 2ˣ + 5 fonksiyonunun görüntü kümesi aşağıdakilerden hangisidir?", "(5, ∞)", "2ˣ > 0 olduğundan 2ˣ + 5 > 5. Değer 5'e yaklaşır ama 5 olmaz.",
    [["(0, ∞)", "+5 kaydırması dikkate alınmamış."], ["[5, ∞)", "2ˣ hiçbir zaman 0 olmaz; 5 değeri alınmaz."], ["(−5, ∞)", "İşaret hatası: +5 grafiği yukarı kaydırır."]],
    "2ˣ'in görüntü kümesini bil, sonra kaydır.", "Dışarıdaki sabit, görüntü kümesini aynı miktarda kaydırır.", ["2ˣ ∈ (0, ∞).", "+5 → (5, ∞)."], 7);
  Q("n41a6", "4.1", U, 2, "Bir laboratuvarda bakteri sayısı N(t) = 500 · 2ᵗ ile modelleniyor (t: saat). 3 saat sonra bakteri sayısı kaçtır?", "4000", "N(3) = 500 · 2³ = 500 · 8 = 4000.",
    [["1500", "500 · 3 yapılmış (doğrusal); model üstel."], ["3000", "500 · 6 yapılmış; 2³ = 8, 2·3 değil."], ["8000", "500 · 16 = 8000 için 4 saat gerekirdi."]],
    "t = 3'ü formülde yerine koy.", "2ᵗ ifadesinde t üs; 2 · t değil.", ["N(3) = 500 · 2³.", "2³ = 8.", "500 · 8 = 4000."], 1);
  Q("n41a7", "4.1", U, 2, "Aşağıdaki önermelerden hangisi f(x) = 4ˣ için doğrudur?", "Her x için f(x) > 0'dır.", "Pozitif bir sayının her kuvveti pozitiftir; 4ˣ hiçbir zaman sıfır ya da negatif olmaz.",
    [["f(x) bazı x değerleri için negatiftir.", "Pozitif tabanın kuvveti negatif olmaz."], ["f(x) = 0 denkleminin bir çözümü vardır.", "4ˣ hiçbir zaman 0 olmaz."], ["f(x), ℝ'ye örtendir.", "Görüntü (0, ∞); negatif değerler hiç alınmaz."]],
    "Pozitif sayıların çarpımı/bölümü hangi işaretli?", "Önerme doğrulamada bir karşı örnek bulunamıyorsa nedenini cebirle açıkla.", ["a > 0 ise aˣ > 0.", "4 > 0 → 4ˣ > 0."], 5);
  Q("n41a8", "4.1", U, 3, "Bir bankada 1000 TL, yıllık %20 bileşik faizle yatırılıyor. 2 yıl sonra hesaptaki para modelle P(x) = 1000 · 1,2ˣ ile hesaplanırsa kaç TL olur?", "1440 TL", "P(2) = 1000 · 1,2² = 1000 · 1,44 = 1440.",
    [["1400 TL", "Her yıl 200 eklenmiş (basit faiz); bileşik faizde ikinci yıl faiz yeni toplam üzerinden hesaplanır."], ["1200 TL", "Yalnızca bir yıllık sonuç."], ["2000 TL", "Para iki katına çıkmış gibi hesaplanmış."]],
    "x = 2 için 1,2²'yi hesapla.", "Yüzde artışı sabitse üstel model kurulur.", ["P(2) = 1000 · 1,2².", "1,2² = 1,44.", "1000 · 1,44 = 1440 TL."], 7);
  Q("n41a9", "4.1", U, 2, "g(x) = 2^(x−3) fonksiyonunun grafiği, f(x) = 2ˣ grafiğine göre nasıl elde edilir?", "f'nin grafiği sağa 3 birim kaydırılarak.", "x yerine (x − 3) yazmak grafiği sağa 3 birim kaydırır: f'nin (0, 1) noktası g'de (3, 1) olur (g(3) = 2⁰ = 1).",
    [["f'nin grafiği sola 3 birim kaydırılarak.", "x + 3 sola kaydırır; x − 3 sağa."], ["f'nin grafiği 3 birim yukarı kaydırılarak.", "Yukarı kayma dıştaki +3 ile olur."], ["f'nin grafiği 3 birim aşağı kaydırılarak.", "Aşağı kayma dıştaki −3 ile olur."]],
    "Üstteki ±sayı hangi yöne kaydırır?", "Bir noktayı izle: 2ˣ'te (0, 1) noktası g'de hangi noktaya gider?", ["g(3) = 2⁰ = 1: f'nin (0, 1) noktası g'de (3, 1) oldu.", "Sağa 3 birim."], 7);
  Q("n41a10", "4.1", U, 2, "Aşağıdaki fonksiyonlardan hangisinin grafiği (0, 1) noktasından geçmez?", "k(x) = 2ˣ + 1", "k(0) = 2⁰ + 1 = 2; nokta (0, 2). Diğer seçeneklerde f(0) = 1.",
    [["f(x) = 3ˣ", "f(0) = 1: geçer."], ["g(x) = (1/4)ˣ", "g(0) = 1: geçer."], ["h(x) = 5ˣ", "h(0) = 1: geçer."]],
    "x = 0 için her seçeneği hesapla.", "aˣ'in (0, 1)'den geçtiğini, +1 eklenince (0, 2) olduğunu hatırla.", ["aˣ'te x = 0 → 1.", "2ˣ + 1'de x = 0 → 2 ≠ 1."], 5);
  A("n41ao1", "4.1", U, 2, "f(x) = 3 · 2ˣ fonksiyonu için (a) f(0), (b) f(2), (c) f(−1) değerlerini bulunuz. (Ondalık için virgül ya da kesir kullanabilirsiniz.)",
    [{ label: "f(0)", v: "3" }, { label: "f(2)", v: "12" }, { label: "f(−1)", v: "1,5", accept: ["1,5", "1.5", "3/2"] }], "Her x için 2ˣ'i hesapla, 3 ile çarp.", "2⁰ = 1 ve 2⁻¹ = 1/2.",
    ["f(0) = 3 · 2⁰ = 3.", "f(2) = 3 · 2² = 12.", "f(−1) = 3 · 2⁻¹ = 3/2 = 1,5."],
    [[1, "f(0) = 3"], [1, "f(2) = 12"], [1, "2⁻¹ = 1/2 kullanıldı"], [1, "f(−1) = 1,5"]], 1);
  A("n41ao2", "4.1", U, 3, "g(x) = 2ˣ − 3 fonksiyonunun (a) görüntü kümesinin alt sınırını (hiç alınmayan en küçük değer), (b) y eksenini kestiği noktanın ordinatını bulunuz.",
    [{ label: "Görüntü kümesi alt sınırı", v: "-3", accept: ["-3", "−3"] }, { label: "y eksenini kestiği noktanın ordinatı", v: "-2", accept: ["-2", "−2"] }], "2ˣ > 0 olduğunu hatırla; y ekseni için x = 0.", "Görüntü (−3, ∞) ve g(0) = 2⁰ − 3.",
    ["2ˣ > 0 → 2ˣ − 3 > −3; alt sınır −3 (alınmaz).", "g(0) = 1 − 3 = −2."],
    [[1, "2ˣ > 0 gerekçesi"], [1, "Alt sınır −3"], [1, "g(0) hesabı"], [1, "Ordinat −2"]], 7);

  /* ---------- 5.1 Fonksiyonların bileşkesi ---------- */
  Q("n51a1", "5.1", B, 1, "f(x) = x + 3 ve g(x) = 2x ise (f∘g)(4) kaçtır?", "11", "Önce g(4) = 8, sonra f(8) = 8 + 3 = 11.",
    [["14", "Bu (g∘f)(4): f(4) = 7, g(7) = 14. Sıra ters çalışılmış."], ["7", "Yalnızca f(4) hesaplanmış."], ["8", "Yalnızca g(4) hesaplanmış."]],
    "İçteki fonksiyon önce çalışır.", "(f∘g)(4) = f(g(4)): önce g(4).", ["g(4) = 8.", "f(8) = 11."], 1);
  Q("n51a2", "5.1", B, 1, "f(x) = x + 3 ve g(x) = 2x ise (g∘f)(4) kaçtır?", "14", "Önce f(4) = 7, sonra g(7) = 14.",
    [["11", "Bu (f∘g)(4); sıra ters."], ["10", "4 + 3 + 2 · 4 gibi toplama; bileşke arka arkaya uygulamadır."], ["28", "2 · (4 + 3) · 2 gibi fazladan çarpma yapılmış."]],
    "g∘f'de önce f çalışır.", "Kim önce çalışıyor? Yazılışta sağdaki.", ["f(4) = 7.", "g(7) = 14."], 1);
  Q("n51a3", "5.1", B, 2, "f(x) = x² + 1 ve g(x) = x − 2 ise (f∘g)(x) ifadesi aşağıdakilerden hangisidir?", "(x − 2)² + 1", "(f∘g)(x) = f(g(x)) = f(x − 2) = (x − 2)² + 1.",
    [["x² − 1", "(x² + 1) − 2 olurdu: bu (g∘f)(x) = x² − 1."], ["x² + x − 1", "İki ifade toplanmış; bileşke toplama değil."], ["(x² + 1)(x − 2)", "Çarpım olurdu; bileşke çarpma değil."]],
    "Dıştaki f'de x yerine içteki ifadeyi yaz.", "Parantezi bütün olarak işleme sok: (x − 2)².", ["f(x) = x² + 1 → x yerine (x − 2).", "(x − 2)² + 1."], 4);
  Q("n51a4", "5.1", B, 2, "h(x) = √(x + 5) fonksiyonu, hangi f ve g için h = f∘g biçiminde yazılır?", "f(x) = √x ve g(x) = x + 5", "(f∘g)(x) = f(x + 5) = √(x + 5). Önce içteki işlem (x + 5), sonra dıştaki (karekök).",
    [["f(x) = x + 5 ve g(x) = √x", "Bu (f∘g)(x) = √x + 5 olurdu; kök içine değil dışına eklenir."], ["f(x) = √x ve g(x) = x", "(f∘g)(x) = √x; +5 eksik."], ["f(x) = x² ve g(x) = x + 5", "(f∘g)(x) = (x + 5)²; karekök değil."]],
    "Önce hesaplanan işlem hangisi?", "İçteki ifade: kök içindeki x + 5; dıştaki: karekök.", ["İçteki (g): x + 5.", "Dıştaki (f): √ .", "h = f∘g."], 4);
  Q("n51a5", "5.1", B, 3, "f(x) = 1/x ve g(x) = x − 2 olsun. (f∘g)(x) = 1/(x − 2) fonksiyonunun tanım kümesi aşağıdakilerden hangisidir?", "ℝ − {2}", "Payda sıfır olamaz: x − 2 ≠ 0 → x ≠ 2. g(x), f'nin tanım kümesi (0 hariç) içinde olmalı.",
    [["ℝ", "x = 2 için 1/0 tanımsız; tanım kümesi tüm gerçek sayılar olamaz."], ["ℝ − {0}", "Bu f'nin tanım kümesi; bileşkede x − 2 ≠ 0 koşulu gerekir."], ["(2, ∞)", "x < 2 için de ifade tanımlıdır (örneğin x = 0 → −1/2)."]],
    "Paydayı sıfır yapan x'i bul.", "Bileşkede içteki ifade, dıştaki fonksiyonun tanım kümesine girmeli.", ["g(x) = x − 2 ≠ 0.", "x ≠ 2.", "Tanım kümesi ℝ − {2}."], 4);
  Q("n51a6", "5.1", B, 2, "Aşağıdaki fonksiyon çiftlerinden hangisinde f∘g = g∘f olur?", "f(x) = x + 1 ve g(x) = x + 2", "(f∘g)(x) = (x + 2) + 1 = x + 3 ve (g∘f)(x) = (x + 1) + 2 = x + 3. Her ikisi de aynı.",
    [["f(x) = x + 1 ve g(x) = 2x", "(f∘g)(x) = 2x + 1; (g∘f)(x) = 2(x + 1) = 2x + 2. Farklı."], ["f(x) = x² ve g(x) = x + 1", "(f∘g)(x) = (x + 1)²; (g∘f)(x) = x² + 1. Farklı."], ["f(x) = 2x ve g(x) = x²", "(f∘g)(x) = 2x²; (g∘f)(x) = 4x². Farklı."]],
    "Her çift için iki bileşkeyi de hesapla.", "Genellikle f∘g ≠ g∘f; eşit olan özel durumları bulmak için iki yönü de dene.", ["Her çiftte f∘g ve g∘f'yi yaz.", "Yalnızca x + 1 ve x + 2 çiftinde ikisi aynı: x + 3."], 4);
  Q("n51a7", "5.1", B, 3, "Bir mağazada bir ürün önce %20 indiriliyor, sonra %10 vergi ekleniyor. Fiyatı p olan ürün için indirimi f(p) = 0,8p, vergiyi g(p) = 1,1p ile gösterelim. 200 TL'lik ürün için (g∘f)(200) ve (f∘g)(200) değerleri hakkında hangisi doğrudur?",
    "İkisi de 176 TL'dir; bu durumda sıra sonucu değiştirmez çünkü iki işlem de çarpmadır.", "(g∘f)(200) = g(160) = 176; (f∘g)(200) = f(220) = 176. Çarpma işlemlerinde sıra sonucu değiştirmez.",
    [["(g∘f)(200) = 176; (f∘g)(200) = 180.", "f(220) = 0,8 · 220 = 176; 180 değil."], ["(g∘f)(200) = 180; (f∘g)(200) = 176.", "g(160) = 1,1 · 160 = 176."], ["Sıra her zaman sonucu değiştirir.", "Bu özel durumda iki çarpma işlemi sırayla değişse de sonuç aynı."]],
    "İki bileşkeyi de hesapla.", "Genel kural ‘f∘g ≠ g∘f’ olsa da bazı özel durumlarda eşit çıkabilir.", ["f(200) = 160; g(160) = 176.", "g(200) = 220; f(220) = 176.", "Aynı sonuç: ikisi de çarpma."], 2);
  Q("n51a8", "5.1", B, 3, "f(x) = x + 1 ve g(x) = x² için (f∘g) fonksiyonu x² + 1'dir. Bu fonksiyon hakkında hangisi doğrudur?", "Çift fonksiyondur, çünkü içteki g çifttir.", "(f∘g)(−x) = (−x)² + 1 = x² + 1 = (f∘g)(x). İçteki g çift olduğundan bileşke de çifttir.",
    [["Tek fonksiyondur.", "(f∘g)(−x) = (f∘g)(x); tek olması için −(f∘g)(x) gerekirdi."], ["Ne tek ne çifttir.", "Hesap çift olduğunu gösteriyor."], ["Yalnızca f çift olsaydı çift olurdu.", "f(x) = x + 1 çift değildir; yine de bileşke çifttir (içteki g çift)."]],
    "(f∘g)(−x)'i hesapla.", "Önce (−x)'i içteki fonksiyona koy.", ["g(−x) = (−x)² = x².", "(f∘g)(−x) = x² + 1 = (f∘g)(x)."], 4);
  Q("n51a9", "5.1", B, 3, "f(x) = 3x − 1 ve (f∘g)(x) = 6x + 5 ise g(x) nedir?", "g(x) = 2x + 2", "(f∘g)(x) = 3·g(x) − 1 = 6x + 5 → 3g(x) = 6x + 6 → g(x) = 2x + 2.",
    [["g(x) = 2x + 6", "3g(x) − 1 = 6x + 5 denkleminde −1 karşıya +1 olarak geçer; 3g(x) = 6x + 6."], ["g(x) = 6x + 6", "3'e bölme unutulmuş."], ["g(x) = 2x + 5", "−1 yok sayılmış."]],
    "f(g(x)) için f'deki x yerine g(x) yaz.", "Bilinmeyen iç fonksiyonsa denklemi g(x) için çöz.", ["3·g(x) − 1 = 6x + 5.", "3·g(x) = 6x + 6.", "g(x) = 2x + 2."], 4);
  Q("n51a10", "5.1", B, 3, "Bir araç sabit 60 km/sa hızla gidiyor: yol s(t) = 60t km (t saat). Yakıt tüketimi yola bağlı y(s) = 0,07·s litre. Aracın t saatteki yakıt tüketimini veren bileşke fonksiyon (y∘s)(t) nedir ve 3 saatte kaç litre yakıt harcar?",
    "(y∘s)(t) = 4,2t; 3 saatte 12,6 litre", "(y∘s)(t) = y(s(t)) = 0,07 · 60t = 4,2t. t = 3 için 4,2 · 3 = 12,6 L.",
    [["(y∘s)(t) = 60,07t; 180,21 litre", "Fonksiyonlar toplanmış; bileşke yerine yazma çarpmayı getirir."], ["(y∘s)(t) = 4,2t; 4,2 litre", "t = 3 yerine t = 1 alınmış."], ["(y∘s)(t) = 0,07t; 0,21 litre", "s(t) ifadesindeki 60 dikkate alınmamış."]],
    "Yakıt yola, yol zamana bağlı: zinciri kur.", "Önce yolu t cinsinden yaz, sonra yakıt formülüne yerleştir.", ["s(t) = 60t.", "y(s) = 0,07s → y(60t) = 4,2t.", "t = 3: 12,6 litre."], 1);
  A("n51ao1", "5.1", B, 2, "f(x) = 2x − 1 ve g(x) = x² + 3 olsun. (a) (f∘g)(2) ve (b) (g∘f)(2) değerlerini bulunuz.",
    [{ label: "(f∘g)(2)", v: "13" }, { label: "(g∘f)(2)", v: "12" }], "Önce içteki fonksiyonu uygula.", "(f∘g)(2): önce g(2). (g∘f)(2): önce f(2).",
    ["g(2) = 4 + 3 = 7 → f(7) = 2·7 − 1 = 13.", "f(2) = 3 → g(3) = 9 + 3 = 12."],
    [[1, "g(2) = 7"], [1, "(f∘g)(2) = 13"], [1, "f(2) = 3"], [1, "(g∘f)(2) = 12"]], 4);
  A("n51ao2", "5.1", B, 3, "f(x) = x + 4 ve g(x) = 3x olsun. (a) (f∘g)(1) ve (b) (g∘f)(1) değerlerini bulunuz. (c) Bu iki değer eşit midir? (evet/hayır)",
    [{ label: "(f∘g)(1)", v: "7" }, { label: "(g∘f)(1)", v: "15" }, { label: "Eşit mi?", v: "hayır", accept: ["hayır", "hayir", "değil", "eşit değil"] }], "Her bileşkede iç fonksiyon önce çalışır.", "Sıra değişince ikinci işlem farklı bir sayıya uygulanır.",
    ["g(1) = 3 → f(3) = 7.", "f(1) = 5 → g(5) = 15.", "7 ≠ 15: eşit değil."],
    [[1, "(f∘g)(1) = 7"], [1, "(g∘f)(1) = 15"], [1, "Eşit olmadıkları belirtildi"]], 4);
})();
