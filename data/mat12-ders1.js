/* 12. sınıf Matematik, Sayılar ve Cebir: Üstel ve Logaritmik Fonksiyonlar (12.1.1.1, 12.1.2.1–12.1.2.3, 12.1.3.1) ve Diziler (12.2.1.1–12.2.1.2). Kaynak: MEB ODSGM 2026-2027 1. dönem tablosu ve okul zümresi tablosu. Özgün içerik (CC BY-NC-SA 4.0). Öğretmen/Opus doğrulaması beklenir. */
(function () {
  var D = KESIF.dsl, T = D.T, M = D.M, R = D.R, G = D.G, L = D.L, S = "mat";

  L("mat12-ustel", S, "Üstel fonksiyon", "12. sınıf Matematik, 12.1.1.1 (üstel fonksiyonu açıklar)", "Bir bakteri her saat ikiye bölünürse sayısı nasıl artar?", [
    M("Bir bakteri her saat ikiye bölünüyor. Başlangıçta 1 bakteri varsa 3 saat sonra kaç bakteri olur?", "8", "2³ = 8.", [["6", "2·3."], ["3", "Hatalı."], ["9", "3²."]], "Her saat ×2.", true),
    T("Sözlük: üstel fonksiyon", G([["Üstel fonksiyon", "f(x) = aˣ; a > 0 ve a ≠ 1."], ["Artan / azalan", "a > 1 ise artan; 0 < a < 1 ise azalandır.", 1], ["Görüntü kümesi", "Değer kümesi (0, ∞); fonksiyon hep pozitiftir."], ["Sabit nokta", "Grafik (0, 1) noktasından geçer; a⁰ = 1."], ["Yatay asimptot", "y = 0 doğrusu."], ["e sayısı", "e ≈ 2,718…; f(x) = eˣ doğal üstel fonksiyondur."]])),
    M("f(x) = 3ˣ fonksiyonu için hangisi doğrudur?", "Artandır ve (0, 1) noktasından geçer.", "Taban 3 > 1.", [["Azalandır.", "Taban > 1."], ["(0, 0) noktasından geçer.", "(0,1)."], ["Negatif değer alır.", "Hep pozitif."]], "a > 1."),
    T("Grafik yorumu", '<p>f(x) = 2ˣ: x = −1 → 1/2, x = 0 → 1, x = 1 → 2, x = 2 → 4. Grafik soldan sağa yükselir, x-eksenine yaklaşır ama onu <b>kesmez</b> (y = 0 asimptot). f(x) = (1/2)ˣ ise soldan sağa <b>azalır</b>; 2ˣ’in y-eksenine göre simetriğidir.</p>'),
    M("f(x) = (1/2)ˣ için f(3) kaçtır?", "1/8", "(1/2)³ = 1/8.", [["3/2", "Hatalı."], ["8", "Ters."], ["1/6", "Hatalı."]], "Üs al."),
    M("2ˣ = 32 denkleminin kökü kaçtır?", "5", "2⁵ = 32.", [["16", "Hatalı."], ["6", "Hatalı."], ["4", "Hatalı."]], "Tabanı eşitle."),
    R("Peki ya neden? Üstel büyüme neden ilk başta yavaş görünür ama sonra çok hızlı artar?", "Her adımda mevcut miktar çarpılır; küçük sayılarda artış küçük görünür, miktar büyüdükçe aynı oranda çarpılan artış da büyür."),
    T("Özet ve sınavda ne işe yarar", '<ul class="body"><li>f(x) = aˣ; a > 0, a ≠ 1; (0, 1)’den geçer, y = 0 asimptot.</li><li>a > 1 artan, 0 < a < 1 azalan.</li></ul><p class="callout">Sınavda: bir üstel fonksiyonun grafik ve tablo yorumu, değer hesabı sorulur.</p>')
  ]);

  L("mat12-logaritma", S, "Logaritma fonksiyonu ve üstel ilişkisi", "12. sınıf Matematik, 12.1.2.1–12.1.2.2", "‘2 kaç olursa 8 olur?’ sorusunun kısa yazılışı", [
    M("log₂ 8 ifadesinin değeri kaçtır?", "3", "2³ = 8.", [["4", "Hatalı."], ["8", "Hatalı."], ["2", "Hatalı."]], "2 kaçıncı kuvvetten 8?", true),
    T("Sözlük: logaritma", G([["Logaritma", "logₐ b = x ⇔ aˣ = b (a > 0, a ≠ 1, b > 0)."], ["Ters fonksiyon", "logₐ x, aˣ fonksiyonunun tersidir.", 1], ["10 tabanı", "log x = log₁₀ x (onluk logaritma)."], ["e tabanı", "ln x = logₑ x (doğal logaritma)."], ["Tanım kümesi", "log x için x > 0."]])),
    M("log₃ 81 = x denkleminde x kaçtır?", "4", "3⁴ = 81.", [["3", "Hatalı."], ["27", "Hatalı."], ["9", "Hatalı."]], "3 kaçıncı kuvvetten 81?"),
    T("Üstel ve logaritma ilişkisi", '<p>aˣ = b yazılışı ile x = logₐ b yazılışı <b>aynı bilgiyi</b> verir. Örnek: 10ˣ = 1000 ⇔ x = log 1000 = 3. Deprem büyüklüğü, ses şiddeti gibi çok büyük aralıklara yayılan niceliklerde logaritma kullanılır.</p><p>Özel değerler: logₐ 1 = 0, logₐ a = 1.</p>'),
    M("log 0,01 değeri kaçtır?", "−2", "10⁻² = 0,01.", [["2", "İşaret."], ["−1", "Hatalı."], ["0,01", "Hatalı."]], "10 kaçıncı kuvvet 0,01?"),
    M("ln e³ ifadesinin değeri kaçtır?", "3", "ln eˣ = x.", [["e³", "Hatalı."], ["1", "Hatalı."], ["0", "Hatalı."]], "ln ve e ters."),
    R("Peki ya neden? Logaritma tanımında neden b > 0 koşulu vardır?", "aˣ ifadesi (a > 0 için) hep pozitif olduğundan hiçbir x için negatif ya da sıfır sonuç vermez; bu yüzden logₐ b yalnız b > 0 için tanımlıdır."),
    T("Özet ve sınavda ne işe yarar", '<ul class="body"><li>logₐ b = x ⇔ aˣ = b; logₐ 1 = 0; logₐ a = 1.</li><li>log = log₁₀, ln = logₑ; b > 0.</li></ul><p class="callout">Sınavda: logaritma ve üstel yazılış arasında dönüşüm ve değer hesabı sorulur.</p>')
  ]);

  L("mat12-log-ozellikleri", S, "Logaritmanın özellikleri", "12. sınıf Matematik, 12.1.2.3", "Çarpmayı toplamaya çevirmek mümkün mü?", [
    M("log 2 + log 5 işleminin sonucu kaçtır?", "1", "log(2·5) = log 10 = 1.", [["7", "Toplama yanlış."], ["log 7", "Hatalı."], ["0", "Hatalı."]], "Çarpım = toplam.", true),
    T("Özellikler", '<ul class="body"><li><b>Çarpım:</b> logₐ(x·y) = logₐ x + logₐ y</li><li><b>Bölüm:</b> logₐ(x/y) = logₐ x − logₐ y</li><li><b>Üs:</b> logₐ xⁿ = n·logₐ x</li><li><b>Taban değiştirme:</b> logₐ b = (log_c b) / (log_c a)</li><li>logₐ a = 1, logₐ 1 = 0; aˡᵒᵍₐ ˣ = x</li></ul>'),
    M("log₂ 16 − log₂ 2 işleminin sonucu kaçtır?", "3", "log₂(16/2) = log₂ 8 = 3.", [["14", "Hatalı."], ["4", "Hatalı."], ["2", "Hatalı."]], "Bölüm özelliği."),
    T("Örnek", '<p>log₃ 9² = 2·log₃ 9 = 2·2 = 4. log₂ 8 + log₂ 4 = log₂ 32 = 5.</p>'),
    M("log 8 = 3·log 2 eşitliği hangi özelliğe dayanır?", "Üs özelliği", "log 2³ = 3 log 2.", [["Çarpım özelliği", "Hatalı."], ["Bölüm özelliği", "Hatalı."], ["Taban değiştirme", "Hatalı."]], "8 = 2³."),
    M("log₂ 3 = a ise log₂ 12 ifadesinin a türünden değeri nedir?", "a + 2", "log₂(3·4) = log₂ 3 + log₂ 4 = a + 2.", [["2a", "Hatalı."], ["a + 4", "Hatalı."], ["3a", "Hatalı."]], "12 = 3·4."),
    R("Peki ya neden? Logaritma özelliği çarpmayı toplamaya çevirir. Bu, hesap makinesi olmayan zamanlarda neden işe yarardı?", "Büyük sayıların çarpımı zordur; logaritma tablosuyla bunlar toplamaya dönüşür ve sonuç kolayca bulunur."),
    T("Özet ve sınavda ne işe yarar", '<ul class="body"><li>Çarpım → toplam; bölüm → fark; üs → katsayı.</li><li>Taban değiştirme: logₐ b = log b / log a.</li></ul><p class="callout">Sınavda: ifadeyi sadeleştirme ve ‘a türünden’ yazma sorulur.</p>')
  ]);

  L("mat12-ustel-log-denklem", S, "Üstel ve logaritmik denklemler ve eşitsizlikler", "12. sınıf Matematik, 12.1.3.1", "Çözüm kümesinde neden tanım kümesini unutmamalı?", [
    M("3ˣ = 27 denkleminin kökü kaçtır?", "3", "3³ = 27.", [["9", "Hatalı."], ["27", "Hatalı."], ["1", "Hatalı."]], "Tabanı eşitle.", true),
    T("Çözüm yöntemleri", '<ul class="body"><li><b>Üstel denklem:</b> tabanları eşitle: aᶠ⁽ˣ⁾ = aᵍ⁽ˣ⁾ ⇒ f(x) = g(x).</li><li><b>Logaritmik denklem:</b> logₐ f(x) = logₐ g(x) ⇒ f(x) = g(x), ama <b>f(x) > 0 ve g(x) > 0</b> koşulunu mutlaka kontrol et.</li><li><b>Eşitsizlik:</b> taban a > 1 ise eşitsizlik yönü korunur; 0 < a < 1 ise yön değişir.</li></ul>'),
    M("log₂(x − 1) = 3 denkleminin çözümü kaçtır?", "9", "x − 1 = 8.", [["7", "Hatalı."], ["4", "Hatalı."], ["8", "Hatalı."]], "Üstel yazılış."),
    T("Tanım kümesi uyarısı", '<p>log₂(x − 1) için x − 1 > 0 yani x > 1 olmalıdır. Bulunan her köke bakılır: tanım kümesinde olmayan kök <b>çözüm değildir</b>. Örneğin log(x − 2) + log x = log 3 çözülürken kökler arasından x > 2 koşulunu sağlamayanlar elenir.</p>'),
    M("2ˣ > 8 eşitsizliğinin çözüm kümesi hangisidir?", "x > 3", "Taban 2 > 1, yön korunur.", [["x < 3", "Yön yanlış."], ["x > 8", "Hatalı."], ["x < 8", "Hatalı."]], "Yön korunur mu?"),
    M("(1/2)ˣ > 1/4 eşitsizliğinin çözüm kümesi hangisidir?", "x < 2", "Taban 0 < 1/2 < 1 olduğundan yön değişir.", [["x > 2", "Yön korunmamalı."], ["x < 4", "Hatalı."], ["x > 4", "Hatalı."]], "Taban 1’den küçük."),
    R("Peki ya neden? Tabanı 1’den küçük olan üstel fonksiyonda eşitsizlik yönü neden değişir?", "Taban 0 ile 1 arasında olduğunda fonksiyon azalandır; üs büyüdükçe değer küçülür, bu yüzden eşitsizlik yön değiştirir."),
    T("Özet ve sınavda ne işe yarar", '<ul class="body"><li>Üstelde tabanı eşitle; logaritmada argüman pozitif olmalı.</li><li>a > 1 yön korunur; 0 < a < 1 yön değişir.</li></ul><p class="callout">Sınavda (açık uçlu): çözüm kümesini adım adım ve tanım koşuluyla yazman istenir.</p>')
  ]);

  L("mat12-diziler", S, "Dizi kavramı, genel terim ve indirgeme bağıntısı", "12. sınıf Matematik, 12.2.1.1–12.2.1.2", "Sayı örüntüsünü fonksiyon olarak yazabilir miyiz?", [
    M("Genel terimi aₙ = 3n + 1 olan dizinin ilk üç terimi hangisidir?", "4, 7, 10", "n = 1, 2, 3 için.", [["3, 6, 9", "n·3."], ["1, 4, 7", "Hatalı."], ["4, 8, 12", "Hatalı."]], "n yerine 1, 2, 3.", true),
    T("Sözlük: dizi", G([["Dizi", "Tanım kümesi doğal sayılar (ℕ⁺) olan fonksiyon: a: ℕ⁺ → ℝ, n ↦ aₙ."], ["Genel terim", "n’inci terimi veren formül (aₙ).", 1], ["İndirgeme bağıntısı", "Bir terimi önceki terim(ler) cinsinden veren bağıntı (aₙ₊₁ = aₙ + 2 gibi) ve ilk terim."], ["Terim", "Dizinin elemanı: a₁, a₂, …"]])),
    M("aₙ = n² − 1 dizisinin 5. terimi kaçtır?", "24", "25 − 1 = 24.", [["25", "Hatalı."], ["4", "Hatalı."], ["26", "Hatalı."]], "n = 5."),
    T("İndirgeme bağıntısı", '<p>a₁ = 2 ve aₙ₊₁ = aₙ + 3 ise: a₂ = 5, a₃ = 8, a₄ = 11. Dizi bir <b>fonksiyondur</b>: tanım kümesi n ∈ ℕ⁺, görüntüsü terimlerdir. Her n için tek bir aₙ değeri vardır.</p>'),
    M("a₁ = 3 ve aₙ₊₁ = 2·aₙ bağıntısıyla verilen dizinin dördüncü terimi kaçtır?", "24", "3, 6, 12, 24.", [["12", "Üçüncü terim."], ["48", "Hatalı."], ["9", "Hatalı."]], "Her terim ikiye katlanır."),
    M("Bir dizi fonksiyon olarak düşünülürse tanım kümesi hangisidir?", "Pozitif doğru sayılar (ℕ⁺)", "n = 1, 2, 3, …", [["Tüm reel sayılar", "Hayır."], ["Tam sayılar", "Genelde ℕ⁺."], ["[0, 1] aralığı", "Hayır."]], "n kaç olabilir?"),
    R("Peki ya neden? Bir dizinin genel terimini bilmek, indirgeme bağıntısını bilmekten hangi açıdan daha kullanışlıdır?", "Genel terim ile istenen terim (ör. 100. terim) önceki terimleri hesaplamadan doğrudan bulunur; indirgemede ise önce sıradaki tüm terimler hesaplanmalıdır."),
    T("Özet ve sınavda ne işe yarar", '<ul class="body"><li>Dizi: ℕ⁺ → ℝ fonksiyonu; genel terim aₙ.</li><li>İndirgeme: ilk terim + aₙ₊₁ = f(aₙ).</li></ul><p class="callout">Sınavda: genel terim ya da bağıntı verilip terimler (ör. a₅) istenir.</p>')
  ]);
})();
