/* Soru bankası: 11. sınıf 3. Tema (trigonometri) ve 4. Tema (üstel ve logaritmik fonksiyonlar). Özgün sorular; her soruda ipucu + adım adım çözüm.
   Açık uçlu sorularda kısa cevap kutusu + puanlama anahtarı. Sıra: MEB 11. sınıf ders kitabı içindekiler. */
(function () {
  var M = (KESIF.meta = KESIF.meta || {});
  var YKS = { "3.1": "11.1.2", "3.2": "12.3.2", "4.1": "12.1.1", "4.2": "12.1.1", "4.3": "12.1.2", "4.4": "12.1.3" };
  function tagMeta(id, s11, zor, extra) { M[id] = Object.assign({ s11: s11, yks: YKS[s11], sinav: ["s11", "ayt"], zor: zor, kaynak: "özgün" }, extra || {}); }
  function Q(id, s11, zor, q, right, rightWhy, wrongs, hint, steps, explain) {
    var opts = [{ t: right, ok: true, why: rightWhy }];
    wrongs.forEach(function (w) { opts.push({ t: w[0], why: w[1] }); });
    KESIF.daily.push({ id: id, subject: "mat", q: q, opts: opts, hint: hint, solution: steps, explain: explain || "" });
    tagMeta(id, s11, zor);
  }
  function A(id, s11, zor, q, answers, hint, steps, rubric, explain) {
    KESIF.daily.push({ id: id, subject: "mat", type: "open", q: q, answers: answers, hint: hint, solution: steps, rubric: rubric, explain: explain || "", opts: [] });
    tagMeta(id, s11, zor, { tur: "açık uçlu" });
  }
  KESIF.topicNotes = Object.assign(KESIF.topicNotes || {}, {
    "3.1": "<ul class=\"body\"><li><b>Radyan:</b> π rad = 180°. Dönüşüm: derece × π/180 = radyan.</li><li>Birim çemberde <b>sin x = yükseklik</b>, <b>cos x = yatay uzaklık</b>, <b>tan x = sin x ÷ cos x</b>.</li><li>sin(−x) = −sin x (tek), cos(−x) = cos x (çift).</li><li>sin ve cos <b>[−1, 1]</b> aralığında; periyot 2π. <b>sin(bx)</b>'in periyodu 2π ÷ |b|.</li><li><b>a·sin x + c</b> için: en büyük |a| + c, en küçük −|a| + c.</li></ul>",
    "3.2": "<ul class=\"body\"><li>Denklemi <b>sin x = k</b> ya da <b>cos x = k</b> biçimine getir (|k| ≤ 1 olmalı).</li><li>Birim çemberde <b>yükseklik</b> (ya da yatay uzaklık) k olan <b>iki nokta</b> bul: sin x = k için x ve π − x; cos x = k için x ve 2π − x.</li><li>Aralığa (örneğin 0 ≤ x &lt; 2π) uyanları yaz. Kare varsa (sin²x = k²) ± iki durumu da incele.</li><li>Problemde modeli (h(t) = a sin t + c) yaz, istenen değeri yerine koyup denklemi çöz.</li></ul>",
    "4.1": "<ul class=\"body\"><li><b>f(x) = aˣ</b> (a &gt; 0, a ≠ 1): her adımda a ile çarpma. a &gt; 1 artan, 0 &lt; a &lt; 1 azalan; grafik (0, 1)'den geçer.</li><li>aᵐ · aⁿ = aᵐ⁺ⁿ, (aᵐ)ⁿ = aᵐⁿ, a⁻ⁿ = 1 ÷ aⁿ.</li><li><b>Denklem:</b> tabanları eşitle, üsleri eşitle: aᵖ = aᵠ ⇒ p = q.</li><li><b>Eşitsizlik:</b> a &gt; 1 ise yön korunur, 0 &lt; a &lt; 1 ise yön değişir.</li></ul>",
    "4.2": "<ul class=\"body\"><li>f(x) = aˣ fonksiyonunun <b>tersi</b> f⁻¹(x) = logₐ x'tir.</li><li>Ters bulma: y yazıp x'i y cinsinden çöz, sonra x ile y'yi değiştir.</li><li>Grafikler <b>y = x</b> doğrusuna göre birbirinin ayna görüntüsüdür: (p, q) ↔ (q, p).</li><li>f(a) = b ise f⁻¹(b) = a.</li></ul>",
    "4.3": "<ul class=\"body\"><li><b>logₐ b = c</b> ⟺ <b>aᶜ = b</b> (a &gt; 0, a ≠ 1, b &gt; 0). Tabanı yazılmayan log, 10 tabanındadır.</li><li>logₐ 1 = 0, logₐ a = 1.</li><li>logₐ(m · n) = logₐ m + logₐ n; logₐ(m ÷ n) = logₐ m − logₐ n; logₐ mᵏ = k · logₐ m.</li><li><b>Tanım kümesi:</b> logₐ(g(x)) için g(x) &gt; 0.</li></ul>",
    "4.4": "<ul class=\"body\"><li><b>Üstel denklem:</b> ortak çarpanı parantezine al (2ˣ⁺¹ = 2 · 2ˣ), tabanları eşitle.</li><li><b>Logaritmik denklem:</b> önce tanım koşulunu yaz, logaritmaları tek logaritmada birleştir, üste çevir, çıkan değerleri koşulla <b>kontrol et</b>.</li><li><b>Problem:</b> büyüme/azalma için N = N₀ · aᵗ (a: her adımdaki çarpan); denklemi kur, çöz.</li></ul>"
  });

  /* ---------- 3.1 Trigonometrik fonksiyonlar ve nitel özellikleri ---------- */
  Q("tr1", "3.1", 1, "π/3 radyan kaç derecedir?", "60°", "π rad = 180° olduğundan π/3 rad = 180° ÷ 3 = 60°.",
    [["30°", "π/6 radyan 30°'dir; π/3 değil."], ["45°", "π/4 radyan 45°'dir."], ["120°", "2π/3 radyan 120°'dir."]],
    "π radyan kaç derece?", ["π rad = 180°.", "π/3 rad = 180° ÷ 3.", "= 60°."], "Radyan–derece dönüşümü: π rad = 180°.");
  Q("tr2", "3.1", 1, "150° kaç radyandır?", "5π/6", "150° = 150 · π/180 = 5π/6 radyan.",
    [["3π/4", "3π/4 radyan 135°'dir."], ["2π/3", "2π/3 radyan 120°'dir."], ["5π/3", "5π/3 radyan 300°'dir."]],
    "Dereceyi π/180 ile çarp ve sadeleştir.", ["Radyan = derece · π ÷ 180.", "150 · π ÷ 180 = 15π ÷ 18.", "Sadeleştirince 5π/6."], "Derece × π/180 = radyan.");
  Q("tr3", "3.1", 1, "sin(−30°) kaçtır?", "−1/2", "Sinüs tek fonksiyondur: sin(−x) = −sin x. sin 30° = 1/2 → −1/2.",
    [["1/2", "İşaret kaybolmuş: sin(−x) = −sin x."], ["−√3/2", "√3/2 değeri sin 60° içindir."], ["√3/2", "Hem büyüklük hem işaret kaymış."]],
    "Birim çemberde −30°, 30°'nin x eksenine göre ayna görüntüsüdür.", ["−30° noktası, 30° noktasının x eksenine göre simetriği: yükseklik aynı büyüklükte, işaret ters.", "sin 30° = 1/2.", "sin(−30°) = −1/2."], "Sinüs tek: sin(−x) = −sin x.");
  Q("tr4", "3.1", 1, "cos(−60°) kaçtır?", "1/2", "Kosinüs çift fonksiyondur: cos(−x) = cos x = cos 60° = 1/2.",
    [["−1/2", "Kosinüs çifttir; işaret değişmez."], ["√3/2", "cos 30°'nin değeri."], ["−√3/2", "cos 150°'nin değeri."]],
    "−60° ve 60° noktalarının yatay uzaklığını karşılaştır.", ["−60° ve 60° noktaları x eksenine göre simetrik: yatay uzaklıkları aynı.", "cos(−60°) = cos 60° = 1/2."], "Kosinüs çift: cos(−x) = cos x.");
  Q("tr5", "3.1", 2, "f(x) = sin 3x fonksiyonunun esas periyodu kaçtır?", "2π/3", "sin(bx)'in periyodu 2π ÷ |b|: 2π ÷ 3.",
    [["2π", "Bu, sin x'in periyodu; x'in katsayısı 3 periyodu küçültür."], ["6π", "2π · 3 yapılmış; bölünmeli."], ["π/3", "2π'yi 6'ya bölmüşsün; katsayı 3."]],
    "sin x 2π'de bir tur tamamlar; 3x'in 2π'ye ulaşması için x ne olmalı?", ["3x = 2π olduğunda bir tur biter.", "x = 2π ÷ 3.", "Periyot 2π/3."], "sin(bx) periyodu: 2π ÷ |b|.");
  Q("tr6", "3.1", 2, "y = 2 sin x + 1 fonksiyonunun görüntü kümesi (değer aralığı) hangisidir?", "[−1, 3]", "sin x ∈ [−1, 1]; 2 ile çarpınca [−2, 2], 1 ekleyince [−1, 3].",
    [["[−2, 2]", "+1 ötelemesi unutulmuş."], ["[1, 3]", "En küçük değer −1 · 2 + 1 = −1; 1 değil."], ["[−1, 1]", "2 ile çarpma ve +1 uygulanmamış."]],
    "sin x'in en küçük ve en büyük değerini yerine koy.", ["sin x en az −1, en çok 1.", "2 sin x ∈ [−2, 2].", "2 sin x + 1 ∈ [−1, 3]."], "Aralığı adım adım dönüştür.");
  Q("tr7", "3.1", 1, "sin(2π/3) kaçtır?", "√3/2", "2π/3 = 120°; sin 120° = sin 60° = √3/2 (yükseklik pozitif, 60°'nin ayna görüntüsü).",
    [["1/2", "Bu sin 30° ve sin 150°'nin değeri."], ["−√3/2", "120°'de nokta x ekseninin üstünde; yükseklik pozitif."], ["−1/2", "Hem büyüklük hem işaret yanlış."]],
    "2π/3 radyanı dereceye çevir, birim çemberde yüksekliğine bak.", ["2π/3 rad = 120°.", "120° = 180° − 60°; sin(180° − x) = sin x.", "sin 120° = sin 60° = √3/2."], "Önce dereceye çevir.");
  Q("tr8", "3.1", 2, "tan 135° kaçtır?", "−1", "tan x = sin x ÷ cos x = (√2/2) ÷ (−√2/2) = −1.",
    [["1", "cos 135° negatif olduğundan oran negatiftir."], ["√2/2", "Bu sin 135°'nin değeri."], ["−√2/2", "Bu cos 135°'nin değeri; tan değil."]],
    "tan x = sin x ÷ cos x. 135° = 180° − 45°.", ["sin 135° = √2/2; cos 135° = −√2/2.", "tan 135° = (√2/2) ÷ (−√2/2).", "= −1."], "tan, sinüsün kosinüse oranı.");
  Q("tr9", "3.1", 2, "g(x) = 4 sin x − 3 fonksiyonunun en büyük ve en küçük değerlerinin toplamı kaçtır?", "−6", "En büyük 4 · 1 − 3 = 1; en küçük 4 · (−1) − 3 = −7; toplam −6.",
    [["1", "Yalnızca en büyük değer."], ["−7", "Yalnızca en küçük değer."], ["−3", "Sabit terim; toplam değil."]],
    "sin x'in alt ve üst sınırını yerine koy; iki sonucu topla.", ["sin x = 1 için g = 4 − 3 = 1.", "sin x = −1 için g = −4 − 3 = −7.", "Toplam: 1 + (−7) = −6."], "En büyük + en küçük = −6.");

  /* ---------- 3.2 Trigonometrik denklemlerle ifade edilen problemler ---------- */
  Q("tr10", "3.2", 2, "0 ≤ x < 2π aralığında sin x = √3/2 denkleminin çözüm kümesi hangisidir?", "{π/3, 2π/3}", "sin x = √3/2: x = π/3 ve x = π − π/3 = 2π/3.",
    [["{π/6, 5π/6}", "Bu çözümler sin x = 1/2 içindir."], ["{π/3, 4π/3}", "4π/3'te sinüs negatiftir."], ["{π/3}", "Yükseklik √3/2 olan iki nokta var; ikincisi 2π/3."]],
    "Yükseklik √3/2 olan iki nokta: x ve π − x.", ["Birim çemberde yüksekliği √3/2 olan iki nokta vardır.", "Birincisi x = π/3.", "İkincisi π − π/3 = 2π/3.", "Çözüm kümesi {π/3, 2π/3}."], "sin x = k için x ve π − x.");
  Q("tr11", "3.2", 2, "0° ≤ x < 360° aralığında 2cos x = −1 denkleminin çözüm kümesi hangisidir?", "{120°, 240°}", "cos x = −1/2: yatay uzaklık −1/2 olan noktalar 120° ve 240°.",
    [["{60°, 300°}", "Bu çözümler cos x = +1/2 içindir."], ["{30°, 150°}", "Bunlar sin x = 1/2 çözümleri."], ["{150°, 210°}", "Bunlar cos x = −√3/2 çözümleri."]],
    "Önce cos x'i yalnız bırak. Yatay uzaklığı −1/2 olan iki nokta?", ["2cos x = −1 → cos x = −1/2.", "Birim çemberde x = −1/2 olan noktalar sol yarıdadır: 180° − 60° = 120° ve 180° + 60° = 240°.", "Çözüm kümesi {120°, 240°}."], "cos x = k için x ve 360° − x.");
  Q("tr12", "3.2", 2, "0° ≤ x < 360° aralığında sin²x = 1/4 denkleminin kaç çözümü vardır?", "4", "sin x = ±1/2: sin x = 1/2 için 30°, 150°; sin x = −1/2 için 210°, 330°. Toplam 4.",
    [["2", "Yalnızca sin x = 1/2 ya da yalnızca −1/2 durumu sayılmış."], ["3", "Bir çözüm eksik sayılmış."], ["6", "Fazla sayılmış; her işaret için 2 çözüm var."]],
    "Karekök alırken ± iki durumu da yaz.", ["sin²x = 1/4 → sin x = 1/2 veya sin x = −1/2.", "sin x = 1/2 → x = 30°, 150°.", "sin x = −1/2 → x = 210°, 330°.", "Toplam 4 çözüm."], "Kareli denklemde ± iki durumu unutma.");
  Q("tr13", "3.2", 2, "Bir limandaki su yüksekliği h(t) = 3 sin t metre modelindedir (0 ≤ t < 2π). Yükseklik kaç kez 1,5 m'ye ulaşır?", "2", "3 sin t = 1,5 → sin t = 1/2 → t = π/6 ve t = 5π/6: 2 kez.",
    [["1", "sin t = 1/2 iki noktada sağlanır."], ["3", "Çözüm sayısı iki; üçüncüsü yok."], ["4", "−1/2 için de çözüm olurdu, ama burada yükseklik pozitif 1,5."]],
    "h(t) = 1,5 denklemini kur ve sin t'yi yalnız bırak.", ["3 sin t = 1,5 → sin t = 1/2.", "0 ≤ t < 2π aralığında sin t = 1/2: t = π/6 ve t = π − π/6 = 5π/6.", "2 çözüm → 2 kez."], "Modelden denklem kur, çözüm sayısını say.");

  /* ---------- 4.1 Üstel fonksiyonlar ve nitel özellikleri ---------- */
  Q("us1", "4.1", 1, "f(x) = 3ˣ ise f(2) · f(3) kaçtır?", "243", "f(2) = 9, f(3) = 27; 9 · 27 = 243 (= 3⁵).",
    [["729", "3⁶ yazılmış; üsler çarpılmaz, toplanır."], ["54", "2 · 27 gibi bir hata; f(2) = 9."], ["15", "3 · 5 gibi bir işlem."]],
    "aᵐ · aⁿ = aᵐ⁺ⁿ.", ["f(2) = 3² = 9; f(3) = 3³ = 27.", "9 · 27 = 243.", "Kısa yol: 3² · 3³ = 3⁵ = 243."], "Aynı tabanda çarpımda üsler toplanır.");
  Q("us2", "4.1", 2, "2ˣ⁺¹ = 32 denkleminin çözümü kaçtır?", "4", "32 = 2⁵ → x + 1 = 5 → x = 4.",
    [["5", "x + 1 = 5; x = 4'tür."], ["3", "x + 1 = 4 gibi bir hata."], ["16", "32 ÷ 2 = 16; üsler karıştırılmış."]],
    "32'yi 2'nin bir kuvveti olarak yaz.", ["32 = 2⁵.", "2ˣ⁺¹ = 2⁵ → x + 1 = 5.", "x = 4."], "Tabanları eşitle, üsleri eşitle.");
  Q("us3", "4.1", 2, "4ˣ = 8 denkleminin çözümü kaçtır?", "3/2", "4ˣ = 2²ˣ, 8 = 2³ → 2x = 3 → x = 3/2.",
    [["2", "4² = 16, 8 değil."], ["3", "2³ = 8 ama tabanı 4'tür; 4³ = 64."], ["1/2", "4^(1/2) = 2; 8 değil."]],
    "Her iki tarafı 2 tabanında yaz.", ["4ˣ = (2²)ˣ = 2²ˣ.", "8 = 2³.", "2²ˣ = 2³ → 2x = 3 → x = 3/2."], "Ortak taban bul.");
  Q("us4", "4.1", 1, "Bir bakteri kültüründe başlangıçta 500 bakteri vardır ve sayı her saat iki katına çıkar. 3 saat sonra kaç bakteri olur?", "4000", "N = 500 · 2³ = 500 · 8 = 4000.",
    [["1500", "500 + 3 · 500 gibi doğrusal artış; burada çarpma var."], ["3000", "500 · 6 yapılmış (2 · 3); üs olarak alınmalı."], ["8000", "500 · 2⁴; bir saat fazla."]],
    "Her saat 2 ile çarpılıyor: 3 saat → 2³.", ["Her saat sayı 2 ile çarpılır.", "3 saat sonra 500 · 2³ = 500 · 8.", "= 4000."], "N = N₀ · aᵗ.");
  Q("us5", "4.1", 2, "f(x) = (1/2)ˣ fonksiyonu için f(−3) kaçtır?", "8", "(1/2)⁻³ = 2³ = 8.",
    [["−8", "Üssün işareti sonucu negatif yapmaz."], ["1/8", "(1/2)³ = 1/8; üs −3."], ["6", "−3 · (−2) gibi bir işlem; üs alma çarpma değildir."]],
    "Negatif üs, tabanın tersine geçmek demektir.", ["(1/2)⁻³ = (2/1)³.", "= 2³ = 8."], "a⁻ⁿ = (1/a)ⁿ.");
  Q("us6", "4.1", 2, "2ˣ > 16 eşitsizliğinin çözüm kümesi hangisidir?", "x > 4", "Taban 2 > 1 olduğundan fonksiyon artan: 2ˣ > 2⁴ ⇒ x > 4.",
    [["x < 4", "Taban 1'den büyük olduğu için eşitsizlik yönü değişmez."], ["x > 8", "16 ÷ 2 = 8; üs karşılaştırılmalı."], ["x > 2", "2² = 4; 16 için üs 4."]],
    "16'yı 2'nin kuvveti olarak yaz; taban 1'den büyük mü?", ["16 = 2⁴.", "2ˣ > 2⁴ ve taban 2 > 1 → üstel fonksiyon artan, yön korunur.", "x > 4."], "a > 1 ise yön korunur; 0 < a < 1 ise yön değişir.");

  /* ---------- 4.2 Üstel fonksiyonların ters fonksiyonları ---------- */
  Q("te1", "4.2", 2, "f(x) = 3ˣ fonksiyonu için f⁻¹(1/9) kaçtır?", "−2", "f⁻¹ = log₃. log₃(1/9) = −2 çünkü 3⁻² = 1/9.",
    [["2", "3² = 9; 1/9 için üs negatif."], ["−3", "3⁻³ = 1/27."], ["1/2", "3^(1/2) = √3."]],
    "f⁻¹(b) = a ⟺ f(a) = b. 3 üzeri kaç 1/9 eder?", ["f⁻¹(1/9) = a demek 3ᵃ = 1/9.", "1/9 = 3⁻².", "a = −2."], "f(a) = b ⟺ f⁻¹(b) = a.");
  Q("te2", "4.2", 2, "f(x) = 2ˣ + 1 ise f⁻¹(9) kaçtır?", "3", "f⁻¹(9) = a ⟺ f(a) = 9: 2ᵃ + 1 = 9 → 2ᵃ = 8 → a = 3.",
    [["8", "9 − 1 = 8, ama bu üs değil; 2ᵃ = 8 → a = 3."], ["4", "2⁴ = 16; 2ᵃ = 8 için üs 3 olmalı."], ["2", "2² = 4; 8 için üs 3."]],
    "f⁻¹(9) = a demek f(a) = 9.", ["f(a) = 9 → 2ᵃ + 1 = 9.", "2ᵃ = 8 = 2³.", "a = 3."], "Ters fonksiyonu çözmek yerine denklemi kur.");

  /* ---------- 4.3 Logaritmik fonksiyonlar ve nitel özellikleri ---------- */
  Q("lg1", "4.3", 1, "log₂ 8 + log₃ 9 ifadesinin değeri kaçtır?", "5", "log₂ 8 = 3, log₃ 9 = 2; toplam 5.",
    [["6", "3 · 2 çarpılmış; logaritmalar toplanır."], ["17", "8 + 9 toplanmış; içteki sayılar toplanmaz."], ["3", "Yalnızca birinci terim alınmış."]],
    "Her terimi ayrı ayrı hesapla: tabanın kaçıncı üssü?", ["2³ = 8 → log₂ 8 = 3.", "3² = 9 → log₃ 9 = 2.", "Toplam: 3 + 2 = 5."], "logₐ b = c ⟺ aᶜ = b.");
  Q("lg2", "4.3", 2, "log 1000 + log 0,01 ifadesinin değeri kaçtır? (log: 10 tabanında)", "1", "log 1000 = 3, log 0,01 = log 10⁻² = −2; toplam 1.",
    [["5", "3 + 2; 0,01 = 10⁻² olduğundan değeri −2."], ["−1", "İşaretler ters alınmış."], ["2", "Yalnızca birini hesaplamışsın."]],
    "1000 = 10³ ve 0,01 = 10⁻².", ["log 1000 = log 10³ = 3.", "0,01 = 1/100 = 10⁻² → log 0,01 = −2.", "Toplam: 3 + (−2) = 1."], "Tabanı yazılmayan log, 10 tabanındadır.");
  Q("lg3", "4.3", 1, "log₅ 125 kaçtır?", "3", "5³ = 125.",
    [["25", "125 ÷ 5 = 25; logaritma üssü sorar."], ["5", "Taban 5; sonucu sorulan üs."], ["2", "5² = 25, 125 değil."]],
    "5 üzeri kaç 125 eder?", ["5¹ = 5, 5² = 25, 5³ = 125.", "log₅ 125 = 3."], "Tabanı sırayla çarp.");
  Q("lg4", "4.3", 2, "log₂ 12 − log₂ 3 ifadesinin değeri kaçtır?", "2", "log₂(12 ÷ 3) = log₂ 4 = 2.",
    [["log₂ 9", "12 − 3 = 9 yapılmış; farkın logaritması bölümün logaritmasıdır."], ["4", "12 ÷ 3 = 4'ü bulup logaritmasını almamış."], ["3", "log₂ 8 gibi bir hata; 12 ÷ 3 = 4."]],
    "Aynı tabandaki logaritmaların farkı = bölümün logaritması.", ["log₂ 12 − log₂ 3 = log₂(12 ÷ 3).", "= log₂ 4.", "2² = 4 → 2."], "logₐ m − logₐ n = logₐ(m ÷ n).");
  Q("lg5", "4.3", 2, "f(x) = log₂(x − 3) fonksiyonunun en geniş tanım kümesi hangisidir?", "(3, ∞)", "Logaritmanın içi pozitif olmalı: x − 3 > 0 → x > 3.",
    [["[3, ∞)", "x = 3'te içi 0 olur; log 0 tanımsız, 3 dahil değil."], ["(−∞, 3)", "x < 3 iken içi negatif."], ["(0, ∞)", "x − 3 > 0 koşulu, x > 0 değildir."]],
    "Logaritmanın içindeki ifade hangi koşulu sağlamalı?", ["logₐ g(x) için g(x) > 0 olmalı.", "x − 3 > 0.", "x > 3 → (3, ∞)."], "Tanım koşulu: içi pozitif.");
  Q("lg6", "4.3", 1, "log₃(x − 1) = 2 denkleminin çözümü kaçtır?", "10", "x − 1 = 3² = 9 → x = 10. Kontrol: x − 1 = 9 > 0 ✓.",
    [["9", "x − 1 = 9; x değil."], ["7", "3² − 2 gibi bir hata."], ["6", "3 · 2 yapılmış; üs alınmalı."]],
    "Logaritma denklemini üstel biçime çevir.", ["log₃(x − 1) = 2 ⟺ x − 1 = 3².", "x − 1 = 9 → x = 10.", "Kontrol: 10 − 1 = 9 > 0 ✓."], "logₐ b = c ⟺ aᶜ = b.");
  Q("lg7", "4.3", 2, "2 · log₂ 6 − log₂ 9 ifadesinin değeri kaçtır?", "2", "2 log₂ 6 = log₂ 36; log₂ 36 − log₂ 9 = log₂ 4 = 2.",
    [["3", "log₂ 8 gibi bir hata."], ["6", "2 · 3 gibi bir işlem; logaritmalar sadeleştirilmemiş."], ["4", "36 ÷ 9 = 4'ü bulup logaritması alınmamış."]],
    "k · logₐ m = logₐ mᵏ.", ["2 log₂ 6 = log₂ 6² = log₂ 36.", "log₂ 36 − log₂ 9 = log₂(36 ÷ 9) = log₂ 4.", "log₂ 4 = 2."], "Önce katsayıyı üs yap.");

  /* ---------- 4.4 Üstel ve logaritmik denklem / eşitsizlik problemleri ---------- */
  Q("dp1", "4.4", 2, "2ˣ + 2ˣ⁺¹ = 24 denkleminin çözümü kaçtır?", "3", "2ˣ + 2 · 2ˣ = 3 · 2ˣ = 24 → 2ˣ = 8 → x = 3.",
    [["2", "2² = 4; 3 · 4 = 12, 24 değil."], ["4", "2⁴ = 16; 3 · 16 = 48."], ["12", "24 ÷ 2 = 12; üs karışmış."]],
    "2ˣ⁺¹ = 2 · 2ˣ. Ortak çarpanı topla.", ["2ˣ⁺¹ = 2 · 2ˣ.", "2ˣ + 2 · 2ˣ = 3 · 2ˣ = 24.", "2ˣ = 8 → x = 3."], "Ortak çarpan 2ˣ.");
  Q("dp2", "4.4", 3, "log₂(x + 1) + log₂(x − 1) = 3 denkleminin çözümü hangisidir?", "3", "x > 1 koşulu: (x + 1)(x − 1) = 2³ = 8 → x² = 9 → x = 3 (x = −3 koşulu sağlamaz).",
    [["−3", "x > 1 koşulu −3'ü eler."], ["3 ve −3", "x = −3 için logaritmanın içi negatif olur; geçersiz."], ["9", "x² = 9; x = 3."]],
    "Önce tanım koşulunu yaz, sonra iki logaritmayı birleştir.", ["Tanım: x + 1 > 0 ve x − 1 > 0 → x > 1.", "log₂[(x + 1)(x − 1)] = 3 → x² − 1 = 2³ = 8.", "x² = 9 → x = 3 veya x = −3.", "x > 1 olduğundan yalnızca x = 3."], "Logaritmik denklemde bulunan kökü tanım koşuluyla kontrol et.");
  Q("dp3", "4.4", 2, "Bir ilaç dozu her 4 saatte yarıya iniyor. Başlangıçta 80 mg alan bir hastada doz kaç saat sonra 5 mg olur?", "16 saat", "80 · (1/2)ⁿ = 5 → (1/2)ⁿ = 1/16 → n = 4 yarılanma → 4 · 4 = 16 saat.",
    [["4 saat", "4 yarılanma gerekiyor; her biri 4 saat."], ["8 saat", "2 yarılanma yapılmış; 80 → 40 → 20 daha 5 değil."], ["20 saat", "5 yarılanma olurdu; 80 → 2,5 mg."]],
    "Yarılanma sayısını n de; 80 · (1/2)ⁿ = 5 denklemini kur.", ["80 → 40 → 20 → 10 → 5: 4 yarılanma.", "Denklem: 80 · (1/2)ⁿ = 5 → (1/2)ⁿ = 1/16 → n = 4.", "Her yarılanma 4 saat: 4 · 4 = 16 saat."], "Azalma modeli: N = N₀ · (1/2)ⁿ.");
  Q("dp4", "4.4", 1, "1000 TL, yıllık %10 bileşik faizle 2 yıl bankada tutulursa sonunda kaç TL olur?", "1210 TL", "1000 · 1,1² = 1000 · 1,21 = 1210.",
    [["1200 TL", "Basit faiz: 1000 + 2 · 100; bileşikte ikinci yıl faiz, birinci yıl sonundaki paraya işler."], ["1100 TL", "Yalnızca 1 yıllık değer."], ["1220 TL", "1000 · 1,22 gibi bir hata; 1,1² = 1,21."]],
    "Her yıl para 1,1 ile çarpılır.", ["Bir yıl sonra: 1000 · 1,1 = 1100.", "İkinci yıl: 1100 · 1,1 = 1210.", "Kısa yol: 1000 · 1,1² = 1210."], "Bileşik faiz: N = N₀ · (1 + r)ᵗ.");
  Q("dp5", "4.4", 2, "log₃ x < 2 eşitsizliğinin çözüm kümesi hangisidir?", "0 < x < 9", "Tanım: x > 0. Taban 3 > 1, fonksiyon artan: x < 3² = 9. Birlikte 0 < x < 9.",
    [["x < 9", "Tanım koşulu x > 0 unutulmuş."], ["x > 9", "Taban 1'den büyük olduğu için eşitsizlik yönü korunur."], ["0 < x < 6", "3 · 2 = 6 gibi bir hata."]],
    "Önce tanım koşulu, sonra eşitsizliği üstele çevir.", ["Tanım: x > 0.", "log₃ x < 2 = log₃ 9; taban 3 > 1 olduğundan x < 9.", "Çözüm: 0 < x < 9."], "Logaritmik eşitsizlikte tanım koşulunu birleştir.");

  /* ---------- açık uçlu ---------- */
  A("ac1", "3.1", 2, "0 ≤ x < 2π için f(x) = 2 sin x − 1 fonksiyonunun en büyük ve en küçük değerini bulunuz.",
    [{ label: "En büyük değer", v: "1" }, { label: "En küçük değer", v: "-3", accept: ["−3"] }], "sin x'in alabileceği en büyük ve en küçük değeri yerine koy.",
    ["sin x ∈ [−1, 1].", "En büyük: sin x = 1 → 2 · 1 − 1 = 1.", "En küçük: sin x = −1 → 2 · (−1) − 1 = −3.", "Görüntü kümesi [−3, 1]."],
    [[1, "sin x'in [−1, 1] aralığı kullanıldı"], [1, "En büyük değer 1"], [1, "En küçük değer −3"]]);
  A("ac2", "3.2", 2, "0° ≤ x < 360° aralığında 2 sin x − √3 = 0 denkleminin çözüm kümesini bulunuz.",
    [{ label: "Küçük çözüm (°)", v: "60" }, { label: "Büyük çözüm (°)", v: "120" }], "Önce sin x'i yalnız bırak.",
    ["2 sin x = √3 → sin x = √3/2.", "Birinci çözüm x = 60°.", "İkinci çözüm: 180° − 60° = 120°.", "Çözüm kümesi {60°, 120°}."],
    [[1, "sin x = √3/2 bulundu"], [1, "x = 60°"], [1, "x = 120° (180° − 60°)"]]);
  A("ac3", "3.2", 3, "Bir dönme dolapta bir kabinin yerden yüksekliği h(t) = 6 + 5 sin t metredir (0 ≤ t < 2π). Kabinin ulaştığı en yüksek ve en alçak yüksekliği, ayrıca yüksekliğin 8,5 m olduğu iki t değerini (radyan) bulunuz.",
    [{ label: "En yüksek (m)", v: "11" }, { label: "En alçak (m)", v: "1" }, { label: "İlk t", v: "π/6", accept: ["pi/6", "π/6"] }, { label: "İkinci t", v: "5π/6", accept: ["5pi/6", "5π/6"] }],
    "sin t'nin sınırlarını kullan; 8,5 için 5 sin t = 2,5 denklemini kur.",
    ["sin t ∈ [−1, 1] → h ∈ [6 − 5, 6 + 5] = [1, 11].", "En yüksek 11 m, en alçak 1 m.", "6 + 5 sin t = 8,5 → sin t = 1/2.", "t = π/6 ve t = π − π/6 = 5π/6."],
    [[1, "En yüksek 11 m ve en alçak 1 m"], [1, "sin t = 1/2 denklemi kuruldu"], [1, "t = π/6"], [1, "t = 5π/6"]]);
  A("ac4", "4.1", 2, "Bir bakteri kültüründe başlangıçta 200 bakteri vardır ve sayı her saat 3 katına çıkar. t saat sonraki bakteri sayısını veren fonksiyonu yazınız ve 4 saat sonra kaç bakteri olacağını bulunuz.",
    [{ label: "4 saat sonra bakteri sayısı", v: "16200" }], "N(t) = N₀ · aᵗ biçimini kullan.",
    ["Her saat 3 ile çarpılıyor: N(t) = 200 · 3ᵗ.", "t = 4: N(4) = 200 · 3⁴ = 200 · 81.", "N(4) = 16200."],
    [[1, "N(t) = 200 · 3ᵗ biçiminde fonksiyon yazıldı"], [1, "t = 4 yerine koyuldu: 200 · 3⁴"], [1, "16200 bulundu"]]);
  A("ac5", "4.2", 3, "f(x) = 3ˣ + 2 fonksiyonunun ters fonksiyonunu bulunuz ve f⁻¹(11) değerini hesaplayınız.",
    [{ label: "f⁻¹(11)", v: "2" }], "y = 3ˣ + 2 yaz, x'i y cinsinden çöz, sonra x ile y'nin yerini değiştir.",
    ["y = 3ˣ + 2 → 3ˣ = y − 2 → x = log₃(y − 2).", "x ile y'nin yerini değiştir: f⁻¹(x) = log₃(x − 2).", "f⁻¹(11) = log₃ 9 = 2.", "Kontrol: f(2) = 3² + 2 = 11 ✓."],
    [[1, "3ˣ yalnız bırakıldı"], [1, "f⁻¹(x) = log₃(x − 2)"], [1, "f⁻¹(11) = 2"]]);
  A("ac6", "4.3", 3, "log₂ 5 = a ise log₂ 20 değerini a cinsinden yazınız.",
    [{ label: "log₂ 20 =", v: "2+a", accept: ["a+2"] }], "20 = 4 · 5 yazıp logaritmanın çarpım kuralını kullan.",
    ["20 = 4 · 5.", "log₂ 20 = log₂ 4 + log₂ 5.", "log₂ 4 = 2 ve log₂ 5 = a.", "log₂ 20 = 2 + a."],
    [[1, "20 = 4 · 5 yazıldı"], [1, "Çarpım kuralı ile ayrıldı"], [1, "2 + a bulundu"]]);
  A("ac7", "4.4", 3, "log₂(x − 1) + log₂(x + 1) = 3 denklemini çözünüz (tanım koşulunu da belirtiniz).",
    [{ label: "x =", v: "3" }], "Önce tanım koşulu; sonra iki logaritmayı birleştir.",
    ["Tanım: x − 1 > 0 ve x + 1 > 0 → x > 1.", "log₂[(x − 1)(x + 1)] = 3 → x² − 1 = 2³ = 8.", "x² = 9 → x = 3 veya x = −3.", "x > 1 olduğundan x = 3 (x = −3 elenir)."],
    [[1, "Tanım koşulu x > 1 yazıldı"], [1, "Logaritmalar birleştirildi: x² − 1 = 8"], [1, "x = ±3 bulundu"], [1, "x = −3 tanım koşuluyla elendi, x = 3"]]);
  A("ac8", "4.4", 2, "2ˣ⁺¹ + 2ˣ = 48 denklemini çözünüz.",
    [{ label: "x =", v: "4" }], "2ˣ⁺¹ = 2 · 2ˣ yaz ve 2ˣ'i ortak çarpan yap.",
    ["2ˣ⁺¹ = 2 · 2ˣ olduğundan 2 · 2ˣ + 2ˣ = 48.", "3 · 2ˣ = 48 → 2ˣ = 16.", "16 = 2⁴ → x = 4."],
    [[1, "2ˣ⁺¹ = 2 · 2ˣ yazıldı"], [1, "3 · 2ˣ = 48 → 2ˣ = 16"], [1, "x = 4"]]);
})();
