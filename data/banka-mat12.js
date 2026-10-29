/* Soru bankası: 12. sınıf Matematik — Üstel ve Logaritmik Fonksiyonlar, Diziler. Her konu 4 çoktan seçmeli + 1 kısa cevaplı. Özgün (CC BY-NC-SA 4.0). Öğretmen/Opus doğrulaması bekler. */
(function () {
  var QB = KESIF.dsl.QB, P = "12. sınıf Matematik · ";
  var a = QB("mat", P + "Üstel fonksiyon", null, "mat12-ustel", [1, 3, 5], ["s11"], "mt12a");
  a.Q(1, "f(x) = 2ˣ fonksiyonunun grafiği hangi noktadan geçer?", "(0, 1)", "2⁰ = 1.", [["(0, 0)", "Hatalı."], ["(1, 0)", "Hatalı."], ["(2, 0)", "Hatalı."]], "x = 0.", "a⁰ = 1.", ["f(0) = 1."]);
  a.Q(2, "f(x) = (1/3)ˣ fonksiyonu için hangisi doğrudur?", "Azalandır.", "0 < taban < 1.", [["Artandır.", "Taban > 1 olsaydı."], ["Negatif değer alır.", "Hep pozitif."], ["x eksenini keser.", "Kesmez."]], "Taban.", "Azalan.", ["Azalan."]);
  a.Q(2, "f(x) = 3ˣ ise f(2) + f(0) kaçtır?", "10", "9 + 1.", [["9", "f(0) unutuldu."], ["6", "Hatalı."], ["11", "Hatalı."]], "Değerleri ekle.", "3² + 3⁰.", ["10."]);
  a.Q(3, "2ˣ⁺¹ = 16 denkleminin kökü kaçtır?", "3", "x + 1 = 4.", [["4", "x+1."], ["2", "Hatalı."], ["15", "Hatalı."]], "Tabanı eşitle.", "16 = 2⁴.", ["x = 3."]);
  a.A(2, "f(x) = 5ˣ fonksiyonu için f(−1), f(0) ve f(2) değerlerini bulunuz. (Kısa cevap: 1/5, 1, 25)", [{ label: "f(−1)", v: "1/5", accept: ["0,2", "0.2", "1/5"] }, { label: "f(0)", v: "1" }, { label: "f(2)", v: "25" }], "Üs al.", "Negatif üs.", ["5⁻¹ = 1/5.", "5⁰ = 1.", "5² = 25."], [[1, "f(−1)"], [1, "f(0)"], [1, "f(2)"]]);

  var b = QB("mat", P + "Logaritma fonksiyonu", null, "mat12-logaritma", [1, 3, 5], ["s11"], "mt12b");
  b.Q(1, "log₂ 32 değeri kaçtır?", "5", "2⁵ = 32.", [["4", "Hatalı."], ["16", "Hatalı."], ["6", "Hatalı."]], "2 kaçıncı kuvvet?", "32 = 2⁵.", ["5."]);
  b.Q(2, "log 1000 değeri kaçtır?", "3", "10³ = 1000.", [["2", "Hatalı."], ["10", "Hatalı."], ["1000", "Hatalı."]], "Onluk logaritma.", "10 kaçıncı?", ["3."]);
  b.Q(2, "logₓ 49 = 2 ise x kaçtır? (x > 0)", "7", "x² = 49.", [["−7", "Taban pozitif."], ["24,5", "Hatalı."], ["2", "Hatalı."]], "Üstel yaz.", "x² = 49.", ["x = 7."]);
  b.Q(3, "Aşağıdakilerden hangisi tanımsızdır?", "log(−5)", "Argüman pozitif olmalı.", [["log 5", "Tanımlı."], ["ln 1", "0."], ["log₂ 8", "3."]], "Argüman > 0.", "Negatif olamaz.", ["log(−5) tanımsız."]);
  b.A(2, "(a) log₃ 81 kaçtır? (b) ln e⁵ kaçtır? (c) log 0,001 kaçtır? (Kısa cevap: 4, 5, −3)", [{ label: "log₃ 81", v: "4" }, { label: "ln e⁵", v: "5" }, { label: "log 0,001", v: "−3", accept: ["-3"] }], "Üstel yazılış.", "Kuvveti bul.", ["3⁴ = 81.", "ln eˣ = x.", "10⁻³ = 0,001."], [[1, "4"], [1, "5"], [1, "−3"]]);

  var c = QB("mat", P + "Logaritmanın özellikleri", null, "mat12-log-ozellikleri", [1, 3, 5], ["s11"], "mt12c");
  c.Q(1, "log 4 + log 25 işleminin sonucu kaçtır?", "2", "log 100 = 2.", [["29", "Hatalı."], ["1", "Hatalı."], ["log 29", "Hatalı."]], "Çarpım özelliği.", "4·25 = 100.", ["2."]);
  c.Q(2, "log₃ 54 − log₃ 2 işleminin sonucu kaçtır?", "3", "log₃ 27 = 3.", [["52", "Hatalı."], ["27", "Hatalı."], ["2", "Hatalı."]], "Bölüm özelliği.", "54/2 = 27.", ["3."]);
  c.Q(2, "log₂ 3 = a ise log₂ 24 kaç a’dır?", "a + 3", "24 = 3·8; log₂ 8 = 3.", [["3a", "Hatalı."], ["a + 8", "Hatalı."], ["a + 2", "Hatalı."]], "24 = 3·8.", "Çarpım.", ["a + 3."]);
  c.Q(3, "log 100³ ifadesinin değeri kaçtır?", "6", "3·log 100 = 3·2.", [["3", "Hatalı."], ["2", "Hatalı."], ["300", "Hatalı."]], "Üs özelliği.", "log 100 = 2.", ["6."]);
  c.A(2, "log 2 = a ve log 3 = b olduğuna göre log 12 ifadesini a ve b türünden yazınız. (Kısa cevap: 2a + b)", [{ label: "log 12", v: "2a + b", accept: ["2a+b", "b + 2a", "b+2a"] }], "12 = 2²·3.", "Çarpım ve üs.", ["log 12 = log 2² + log 3 = 2a + b."], [[2, "2a + b"]]);

  var d = QB("mat", P + "Üstel ve logaritmik denklemler ve eşitsizlikler", null, "mat12-ustel-log-denklem", [1, 3, 5], ["s11"], "mt12d");
  d.Q(1, "4ˣ = 64 denkleminin kökü kaçtır?", "3", "4³ = 64.", [["16", "Hatalı."], ["4", "Hatalı."], ["2", "Hatalı."]], "Tabanı eşitle.", "64 = 4³.", ["3."]);
  d.Q(2, "log₂(x + 1) = 4 denkleminin çözümü kaçtır?", "15", "x + 1 = 16.", [["17", "Hatalı."], ["3", "Hatalı."], ["16", "x+1."]], "Üstel yaz.", "2⁴ = 16.", ["15."]);
  d.Q(2, "3ˣ < 9 eşitsizliğinin çözüm kümesi hangisidir?", "x < 2", "Taban > 1.", [["x > 2", "Yön ters."], ["x < 3", "Hatalı."], ["x > 3", "Hatalı."]], "Yön korunur.", "3² = 9.", ["x < 2."]);
  d.Q(3, "log(x − 3) denkleminde x’in alabileceği değerler hangi kümedir?", "x > 3", "Argüman pozitif.", [["x < 3", "Negatif."], ["x ≥ 3", "x = 3 için log 0."], ["Tüm reel sayılar", "Hayır."]], "Argüman > 0.", "x − 3 > 0.", ["x > 3."]);
  d.A(2, "log(x − 2) + log x = log 3 denkleminin çözüm kümesini yazınız. (Kısa cevap: {3})", [{ label: "Çözüm", v: "3", accept: ["{3}", "x = 3", "x=3"] }], "Çarpım özelliği; tanım kümesi x > 2.", "x(x−2) = 3.", ["x² − 2x − 3 = 0 ⇒ x = 3 veya x = −1.", "x > 2 koşulu: x = 3."], [[2, "{3}"]]);

  var e = QB("mat", P + "Diziler", null, "mat12-diziler", [1, 3, 5], ["s11"], "mt12e");
  e.Q(1, "Genel terimi aₙ = 2n − 1 olan dizinin ilk üç terimi hangisidir?", "1, 3, 5", "n = 1, 2, 3.", [["2, 4, 6", "2n."], ["1, 2, 3", "Hatalı."], ["3, 5, 7", "Hatalı."]], "n yerine 1, 2, 3.", "Tek sayılar.", ["1, 3, 5."]);
  e.Q(2, "aₙ = n² + 2 dizisinin 4. terimi kaçtır?", "18", "16 + 2.", [["16", "Hatalı."], ["10", "Hatalı."], ["6", "Hatalı."]], "n = 4.", "Kare al.", ["18."]);
  e.Q(2, "a₁ = 1 ve aₙ₊₁ = aₙ + 4 olan dizinin 4. terimi kaçtır?", "13", "1, 5, 9, 13.", [["16", "Hatalı."], ["12", "Hatalı."], ["9", "3. terim."]], "Her adım +4.", "Sırayla yaz.", ["13."]);
  e.Q(3, "Bir dizi için hangisi doğrudur?", "Tanım kümesi doğal sayılar olan bir fonksiyondur.", "ℕ⁺ → ℝ.", [["Tanım kümesi reel sayılardır.", "ℕ⁺."], ["Fonksiyon değildir.", "Fonksiyondur."], ["Terimleri tekrar edemez.", "Edebilir."]], "Tanım kümesi.", "n = 1, 2, 3.", ["Fonksiyon."]);
  e.A(2, "a₁ = 2 ve aₙ₊₁ = 3·aₙ − 1 bağıntısıyla verilen dizinin ilk dört terimini yazınız. (Kısa cevap: 2, 5, 14, 41)", [{ label: "İlk dört terim", v: "2, 5, 14, 41", accept: ["2 5 14 41", "2,5,14,41"] }], "Sırayla uygula.", "a₂ = 3·2 − 1.", ["a₂ = 5.", "a₃ = 14.", "a₄ = 41."], [[2, "2, 5, 14, 41"]]);
})();
