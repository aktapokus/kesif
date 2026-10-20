/* Soru bankası (Maarif biçimi): Matematik 11 — 3.2 trigonometrik denklemler, 4.2 logaritma ve ters fonksiyon, 4.3 logaritmanın özellikleri, 4.4 üstel/logaritmik denklem–eşitsizlik, 5.2 fonksiyonlarda dört işlem. Her konu 6 çoktan seçmeli + 1 kısa cevaplı. Özgün (CC BY-NC-SA 4.0). Opus doğrulaması bekler. */
(function () {
  var QB = KESIF.dsl.QB;
  var a = QB("mat", "", "3.2", "m11-3-2", [1, 3], ["s11"], "n32");
  a.Q(1, "[0°, 360°) aralığında sin x = 1/2 denkleminin çözüm kümesi hangisidir?", "{30°, 150°}", "Sinüs 1. ve 2. bölgelerde pozitiftir.", [["{30°}", "İkinci çözüm unutulmuş."], ["{30°, 210°}", "210°'de sinüs negatif."], ["{60°, 120°}", "sin 60° = √3/2."]], "Hangi bölgeler?", "Özel açı + yansıma.", ["30°, 150°."]);
  a.Q(2, "[0°, 360°) aralığında cos x = −1/2 denkleminin çözüm kümesi hangisidir?", "{120°, 240°}", "Kosinüs 2. ve 3. bölgelerde negatiftir.", [["{60°, 300°}", "cos x = 1/2."], ["{120°}", "İkinci çözüm unutulmuş."], ["{150°, 210°}", "cos 150° = −√3/2."]], "Kosinüs negatif nerede?", "Referans açı 60°.", ["120°, 240°."]);
  a.Q(2, "[0°, 360°) aralığında tan x = −1 denkleminin çözümü hangisidir?", "{135°, 315°}", "Referans 45°; tan 2. ve 4. bölgede negatif.", [["{45°, 225°}", "tan x = 1."], ["{135°}", "315° unutulmuş."], ["{45°, 135°}", "Hatalı."]], "Tanjant negatif nerede?", "Periyot π.", ["135°, 315°."]);
  a.Q(2, "0 < x < 2π aralığında 2·cos x − 1 = 0 denkleminin çözüm kümesi hangisidir? (radyan)", "{π/3, 5π/3}", "cos x = 1/2.", [["{π/6, 5π/6}", "sin x = 1/2."], ["{π/3}", "İkinci çözüm unutulmuş."], ["{2π/3, 4π/3}", "cos x = −1/2."]], "cos x'i yalnız bırak.", "Önce cos x.", ["π/3, 5π/3."]);
  a.Q(3, "0 < x < 2π aralığında sin(x − π/6) = cos x denkleminin kaç kökü vardır?", "2", "x = π/3 ve x = 4π/3.", [["1", "Grafikler iki yerde kesişir."], ["3", "Fazla."], ["4", "Fazla."]], "Grafiklerin kesişimine bak.", "cos x = sin(π/2 − x).", ["x − π/6 = π/2 − x → x = π/3 (+π).", "İki kök."]);
  a.Q(2, "sin x = 2 denkleminin çözüm kümesi için hangisi doğrudur?", "Boş kümedir.", "sin x ∈ [−1, 1].", [["{90°}", "sin 90° = 1."], ["{π}", "sin π = 0."], ["Sonsuz çözüm vardır.", "Aralık dışı."]], "Sinüsün aralığı.", "|sin x| ≤ 1.", ["Boş küme."]);
  a.A(2, "[0°, 360°) aralığında sin x = −1/2 denkleminin çözümlerini yazınız (iki değer).", [{ label: "Birinci çözüm (°)", v: "210" }, { label: "İkinci çözüm (°)", v: "330" }], "Sinüs negatif: 3. ve 4. bölge.", "Referans 30°.", ["180 + 30 = 210.", "360 − 30 = 330."], [[1, "210"], [1, "330"]]);

  var b = QB("mat", "", "4.2", "m11-4-2", [1, 4], ["s11"], "n42");
  b.Q(1, "log₂ 16 değeri kaçtır?", "4", "2⁴ = 16.", [["8", "16/2."], ["2", "Taban."], ["16", "Sayı."]], "2 kaçıncı kuvvet?", "Üs sorusu.", ["4."]);
  b.Q(2, "log₅ 1 değeri kaçtır?", "0", "5⁰ = 1.", [["1", "log₅ 5."], ["5", "Hatalı."], ["−1", "Hatalı."]], "5⁰?", "a⁰ = 1.", ["0."]);
  b.Q(2, "f(x) = 3ˣ fonksiyonunun tersi hangisidir?", "log₃ x", "Girdi–çıktı yer değişir.", [["x³", "Kuvvet."], ["3x", "Doğrusal."], ["1/3ˣ", "Çarpma tersi."]], "x = 3ʸ.", "Ters.", ["log₃ x."]);
  b.Q(2, "2^(log₂ 7) ifadesinin değeri kaçtır?", "7", "a^(log_a x) = x.", [["2", "Taban."], ["49", "Hatalı."], ["log₂ 7", "Hatalı."]], "Ters fonksiyonlar birbirini siler.", "Kimlik.", ["7."]);
  b.Q(3, "log₃(3⁵) ifadesinin değeri kaçtır?", "5", "log_a(aˣ) = x.", [["15", "3·5."], ["3", "Taban."], ["243", "3⁵."]], "log ve üs birbirini siler.", "Kimlik.", ["5."]);
  b.Q(2, "f(x) = 2ˣ ve g(x) = log₂ x grafikleri için hangisi doğrudur?", "y = x doğrusuna göre simetriktir.", "Ters fonksiyon çifti.", [["x eksenine göre simetriktir.", "Hatalı."], ["Aynı grafiktir.", "Farklı."], ["y eksenine göre simetriktir.", "Hatalı."]], "Simetri ekseni.", "y = x.", ["y = x."]);
  b.A(2, "(a) log₂ 64 ve (b) log₁₀ 1000 değerlerini yazınız.", [{ label: "log₂ 64", v: "6" }, { label: "log₁₀ 1000", v: "3" }], "Üs sorusu.", "2⁶ = 64; 10³ = 1000.", ["6.", "3."], [[1, "6"], [1, "3"]]);

  var c = QB("mat", "", "4.3", "m11-4-3", [1, 3], ["s11"], "n43");
  c.Q(1, "log₂ 4 + log₂ 8 işleminin sonucu kaçtır?", "5", "2 + 3 = 5.", [["12", "4 + 8."], ["log₂ 12", "Toplamı sayıya uygulamış."], ["6", "Hatalı."]], "Her birini hesapla.", "Üs sorusu.", ["5."]);
  c.Q(2, "log₃ 81 − log₃ 9 işleminin sonucu kaçtır?", "2", "log₃(81/9) = log₃ 9 = 2.", [["4", "Yalnız ilk terim."], ["72", "81 − 9."], ["log₃ 72", "Çıkarma sayıya."]], "Bölüm özelliği.", "Fark → bölüm.", ["2."]);
  c.Q(2, "log₂(x²) = 6 eşitliğini sağlayan pozitif x değeri kaçtır?", "8", "2·log₂ x = 6 → log₂ x = 3 → x = 8.", [["3", "log değeri."], ["64", "x²."], ["6", "Hatalı."]], "Kuvvet özelliği.", "Önce log₂ x.", ["8."]);
  c.Q(2, "f(x) = log₂(x − 3) fonksiyonunun tanım kümesi hangisidir?", "(3, ∞)", "x − 3 > 0.", [["(0, ∞)", "İç ifade pozitif olmalı."], ["[3, ∞)", "x = 3 için log 0 tanımsız."], ["ℝ", "Tanımlı değil."]], "İç ifade pozitif.", "Tanım kümesi.", ["x > 3."]);
  c.Q(3, "log 2 = a ve log 3 = b ise log 18 kaç a ve b cinsindendir? (log: 10 tabanlı)", "a + 2b", "log(2·3²) = log 2 + 2 log 3.", [["2a + b", "Sıra ters."], ["a·b", "Çarpım."], ["a + b", "Üs unutulmuş."]], "18 = 2·3².", "Çarpım + kuvvet.", ["a + 2b."]);
  c.Q(2, "log₂ 3 · log₃ 8 çarpımının değeri kaçtır?", "3", "log₂ 3 · log₃ 8 = log₂ 8 = 3 (taban değiştirme).", [["24", "Çarpım yanlış."], ["8", "Hatalı."], ["1", "Hatalı."]], "Taban değiştirme.", "log_a b · log_b c = log_a c.", ["3."]);
  c.A(2, "(a) log₅ 25 + log₅ 5 ve (b) log₂ 40 − log₂ 5 değerlerini yazınız.", [{ label: "(a)", v: "3" }, { label: "(b)", v: "3" }], "Özellikleri uygula.", "Toplam ve fark.", ["2 + 1 = 3.", "log₂ 8 = 3."], [[1, "3"], [1, "3"]]);

  var d = QB("mat", "", "4.4", "m11-4-4", [1, 4], ["s11"], "n44");
  d.Q(1, "2ˣ = 32 denkleminin çözümü hangisidir?", "5", "2⁵ = 32.", [["16", "Üs değil."], ["6", "Hatalı."], ["4", "2⁴ = 16."]], "Tabanları eşitle.", "32 = 2⁵.", ["5."]);
  d.Q(2, "log₂(x − 1) = 3 denkleminin çözümü hangisidir?", "9", "x − 1 = 8.", [["7", "x + 1 = 8."], ["8", "x − 1 = 7."], ["10", "Hatalı."]], "Üs sorusuna çevir.", "Tanım: x > 1.", ["9."]);
  d.Q(2, "2ˣ > 16 eşitsizliğinin çözüm kümesi hangisidir?", "x > 4", "Taban 1'den büyük: yön korunur.", [["x < 4", "Yön ters."], ["x > 8", "Hatalı."], ["x > 16", "Hatalı."]], "Taban > 1.", "Artan fonksiyon.", ["x > 4."]);
  d.Q(2, "(1/2)ˣ > 4 eşitsizliğinin çözüm kümesi hangisidir?", "x < −2", "Taban 0 ile 1 arası: azalan; yön değişir.", [["x > −2", "Yön."], ["x < 2", "Hatalı."], ["x > 2", "Hatalı."]], "Taban < 1.", "Yön değişir.", ["x < −2."]);
  d.Q(3, "Bir bakteri kültüründe N(t) = 100·2ᵗ modelinde N = 1600 olması için kaç saat gerekir?", "4", "2ᵗ = 16.", [["16", "Üs değil."], ["8", "Hatalı."], ["2", "Hatalı."]], "Önce 2ᵗ'yi yalnız bırak.", "Tabanları eşitle.", ["t = 4."]);
  d.Q(3, "log₂ x < 3 eşitsizliğinin çözüm kümesi hangisidir?", "0 < x < 8", "Tanım x > 0; artan: x < 2³.", [["x < 8", "Tanım kümesi unutulmuş."], ["x > 8", "Yön ters."], ["x < 3", "Hatalı."]], "Önce tanım kümesi.", "Tanım ∩ çözüm.", ["(0, 8)."]);
  d.A(2, "(a) 3^(x+1) = 27 denkleminin ve (b) log₃ x = 2 denkleminin çözümlerini bulunuz.", [{ label: "(a) x", v: "2" }, { label: "(b) x", v: "9" }], "Tabanları eşitle.", "27 = 3³; x = 3².", ["x + 1 = 3 → x = 2.", "x = 9."], [[1, "2"], [1, "9"]]);

  var e = QB("mat", "", "5.2", "m11-5-2", [1, 3], ["s11"], "n52");
  e.Q(1, "f(x) = √x ve g(x) = √(4 − x) için (f + g)(x) fonksiyonunun tanım kümesi hangisidir?", "[0, 4]", "x ≥ 0 ve x ≤ 4.", [["[0, ∞)", "Yalnız f."], ["(−∞, 4]", "Yalnız g."], ["ℝ", "Her x'te değil."]], "İki koşul.", "Ortak.", ["[0, 4]."]);
  e.Q(2, "f(x) = x² ve g(x) = x − 2 için (f/g)(x) fonksiyonunun tanım kümesi hangisidir?", "ℝ − {2}", "g(x) ≠ 0.", [["ℝ", "x = 2'de payda 0."], ["ℝ − {0}", "Payda sıfır olamaz."], ["(2, ∞)", "Fazla dar."]], "Payda ≠ 0.", "g(x) = 0'ı çıkar.", ["x ≠ 2."]);
  e.Q(2, "f(x) = 2x + 1 ve g(x) = x − 3 için (f·g)(2) kaçtır?", "−5", "f(2) = 5, g(2) = −1.", [["5", "İşaret."], ["−1", "Yalnız g."], ["6", "Toplam."]], "Önce her birini hesapla.", "Çarpım.", ["−5."]);
  e.Q(2, "f ve g çift fonksiyonlar ise (f + g) için hangisi doğrudur?", "Çifttir.", "(f + g)(−x) = f(x) + g(x).", [["Tektir.", "Hatalı."], ["Ne tek ne çift.", "Çifttir."], ["Sabittir.", "Hatalı."]], "−x'i yerine koy.", "Çift + çift.", ["Çift."]);
  e.Q(3, "f(x) = 1/(x − 1) ve g(x) = √x için (f + g)(x) fonksiyonunun tanım kümesi hangisidir?", "[0, ∞) − {1}", "x ≠ 1 ve x ≥ 0.", [["ℝ − {1}", "Kök için x ≥ 0."], ["[0, ∞)", "x = 1 tanımsız."], ["(1, ∞)", "Fazla dar."]], "İki koşul.", "Ortak.", ["x ≥ 0, x ≠ 1."]);
  e.Q(2, "f(x) = x ve g(x) = x² için (f − g)(3) kaçtır?", "−6", "3 − 9 = −6.", [["6", "İşaret."], ["12", "Toplam."], ["−12", "Hatalı."]], "Fark.", "f(3) − g(3).", ["−6."]);
  e.A(2, "f(x) = x + 2 ve g(x) = x² için (a) (f + g)(2) ve (b) (f·g)(2) değerlerini bulunuz.", [{ label: "(a)", v: "8" }, { label: "(b)", v: "16" }], "Her birini hesapla.", "f(2) = 4, g(2) = 4.", ["4 + 4 = 8.", "4 · 4 = 16."], [[1, "8"], [1, "16"]]);
})();
