/* 11. sınıf Matematik: 3.2 trigonometrik denklemler (MAT.11.3.2), 4.2 üstel fonksiyonun tersi ve logaritma (11.3.4), 4.3 logaritmik fonksiyonlar ve özellikleri (11.3.5), 4.4 üstel/logaritmik denklem, eşitsizlik ve problemler (11.3.6), 5.2 fonksiyonlarda dört işlem (11.3.8).
   Kaynak: tymm.meb.gov.tr/matematik-dersi/unite/281, /295, /296. Program: trigonometrik denklemlerde yalnız birinci kuvvetler; logaritmada dört işlem ve taban değiştirme; fonksiyonlarda dört işlemin tanımlı olma koşulları. Özgün içerik (CC BY-NC-SA 4.0). Opus doğrulaması beklenir. */
(function () {
  var D = KESIF.dsl, T = D.T, M = D.M, R = D.R, G = D.G, L = D.L, S = "mat";
  var expoLab = KESIF.lessons["mat-ustel-log"].steps[7];
  KESIF.lessons["mat-ustel-log"].hidden = true;

  L("m11-3-2", S, "Trigonometrik denklemler", "11. sınıf Matematik, 3. Tema, MAT.11.3.2 (Maarif: denklem içeren problemleri çözme)", "sin x = 1/2 denklemini sağlayan kaç açı vardır?", [
    M("[0°, 360°) aralığında sin x = 1/2 denklemini sağlayan kaç x değeri vardır?", "2 (30° ve 150°)", "Sinüs 1. ve 2. bölgelerde pozitiftir; sin 30° = sin 150° = 1/2.", [["1", "Yalnız 30° düşünülmüş."], ["4", "Fazla."], ["0", "1/2 sinüs aralığında."]], "Birim çemberde dikey uzaklık 1/2 olan kaç nokta var?", true),
    T("Sözlük: denklem, çözüm kümesi, genel çözüm", G([["Denklem", "Eşitliği sağlayan x’leri bulma işi."], ["Özel değerler", "sin 30° = 1/2, sin 45° = √2/2, sin 60° = √3/2; cos tersi sıradadır."], ["Genel çözüm", "Periyot ekleyerek tüm çözümler: x = 30° + 360°·k veya 150° + 360°·k (k tamsayı).", 1]]) + '<p class="callout why" style="margin-top:12px"><b>Strateji:</b> grafikte y = a doğrusu ile eğrinin kesiştiği noktalar çözümdür; birim çemberde de aynı noktaları görürsün.</p>'),
    M("[0°, 360°) aralığında cos x = 1/2 denkleminin çözüm kümesi hangisidir?", "{60°, 300°}", "Kosinüs 1. ve 4. bölgelerde pozitiftir; cos 60° = 1/2, cos 300° = 1/2.", [["{30°, 150°}", "Bu sin x = 1/2."], ["{60°, 120°}", "cos 120° = −1/2."], ["{60°}", "İkinci çözüm unutulmuş."]], "Kosinüs hangi bölgelerde pozitif?"),
    T("Adımlar", '<ol class="body"><li>Denklemi sin x = a, cos x = a ya da tan x = a biçimine getir.</li><li>Özel açıyı bul (dar açı).</li><li>Hangi bölgelerde olabileceğine bak, açıları yaz.</li><li>İstenen aralığa göre listele; gerekirse periyot ekle.</li></ol>'),
    M("[0°, 360°) aralığında tan x = 1 denkleminin çözümü hangisidir?", "{45°, 225°}", "tan x = 1 → 45° ve π ekleyerek 225°.", [["{45°}", "Periyot π: 225° da çözüm."], ["{45°, 135°}", "tan 135° = −1."], ["{135°, 315°}", "tan x = −1."]], "tan periyodu π."),
    M("0 < x < 2π aralığında 2·sin x − 1 = 0 denkleminin çözümü hangisidir? (radyan)", "{π/6, 5π/6}", "sin x = 1/2.", [["{π/3, 2π/3}", "sin x = √3/2."], ["{π/6}", "İkinci çözüm unutulmuş."], ["{π/6, 7π/6}", "7π/6’da sinüs negatif."]], "Önce sin x’i yalnız bırak."),
    R("Peki ya neden? Neden sin x = a denkleminin genellikle bir değil, iki çözümü olur?", "Birim çemberde dikey uzaklığı aynı olan iki nokta vardır: yatay eksenin bir yanı ve aynada yansıması; grafikte y = a doğrusu bir periyotta eğriyi iki yerde keser."),
    T("Özet ve sınavda ne işe yarar", '<ul class="body"><li>Önce a değerini özel açıya bağla.</li><li>sin, cos: iki çözüm (bir periyotta); tan: bir periyot (π) içinde bir çözüm.</li><li>Genel çözüm: periyot ekle.</li></ul><p class="callout">Sınavda: çözüm sayısı ya da çözüm kümesi sorulur. Birim çemberde işaretle bölgeleri bul.</p>')
  ]);

  L("m11-4-2", S, "Üstel fonksiyonun tersi: logaritma", "11. sınıf Matematik, 3. Tema, MAT.11.3.4 (Maarif: ters fonksiyon, varsayım–genelleme)", "2 üzeri kaç 8 eder? Bu soruya bir ad verelim.", [
    M("2ˣ = 8 eşitliğini sağlayan x değeri kaçtır ve bu değer matematikte nasıl yazılır?", "x = 3; log₂ 8 = 3", "‘2 kaçıncı kuvveti 8 yapar?’ sorusunun cevabı logaritmadır.", [["x = 4; log₂ 8 = 4", "2⁴ = 16."], ["x = 3; log₈ 2 = 3", "Taban ve sayı yer değiştirmiş."], ["x = 6; log₂ 8 = 6", "2·3 yapılmış."]], "Üs sorusu.", true),
    T("Sözlük: logaritma, ters fonksiyon", G([["Logaritma", "<b>aˣ = y ⟺ x = log_a y</b> (a > 0, a ≠ 1, y > 0). ‘a taban, y sayı, x üs’."], ["Ters fonksiyon", "Girdiyle çıktıyı yer değiştiren fonksiyon; grafiği y = x doğrusuna göre ayna görüntüsüdür.", 1], ["Özel logaritmalar", "log₁₀ x = log x (taban 10); logₑ x = ln x (doğal logaritma)."]])),
    { type: expoLab.type, title: "Üstel ve logaritma: ayna görüntüsü", say: expoLab.say, intro: expoLab.intro, cfg: expoLab.cfg },
    M("log₂ 32 değeri kaçtır?", "5", "2⁵ = 32.", [["16", "32/2."], ["2", "Taban."], ["32", "Sayı."]], "2 kaçıncı kuvveti 32?"),
    T("İki kimlik", '<ul class="body"><li><b>log_a(aˣ) = x</b> (üstel, logaritmayı geri alır).</li><li><b>a^(log_a x) = x</b> (x > 0).</li></ul><p class="callout why">Ters fonksiyon çiftleri birbirinin etkisini siler: önce üs alıp sonra logaritma alırsan başa dönersin.</p>'),
    M("f(x) = 3ˣ fonksiyonunun tersi hangisidir?", "f⁻¹(x) = log₃ x", "Girdi ile çıktı yer değiştirir.", [["f⁻¹(x) = 3·x", "Doğrusal."], ["f⁻¹(x) = x³", "Kuvvet."], ["f⁻¹(x) = 1/3ˣ", "Çarpma tersi."]], "x = 3ʸ ⇒ y = log₃ x."),
    M("f(x) = 2ˣ ve g(x) = log₂ x fonksiyonlarının grafikleri için hangisi doğrudur?", "y = x doğrusuna göre birbirinin simetriğidir.", "Ters fonksiyon çifti.", [["Eksenlere göre simetriktir.", "Doğru değil."], ["Aynıdır.", "Farklı."], ["Hiç kesişmez.", "Kesişmez ya da kesişebilir; ama simetri y = x’e göre."]], "Simetri ekseni?"),
    R("Peki ya neden? Logaritma neden ‘üs sorusu’ olarak düşünülmelidir?", "log_a y = x, ‘a’yı kaçıncı kuvvete yükseltirsem y olur?’ sorusudur. Bu sorunun cevabı üsdür; bu bakış logaritma işlemlerini ezberlemeden anlamayı sağlar."),
    T("Özet ve sınavda ne işe yarar", '<ul class="body"><li>aˣ = y ⟺ x = log_a y.</li><li>log_a(aˣ) = x; a^(log_a x) = x.</li><li>aˣ ve log_a x: y = x’e göre ayna.</li></ul><p class="callout">Sınavda: bir logaritmanın değeri ya da bir fonksiyonun tersi sorulur. Üs sorusuna çevir.</p>')
  ]);

  L("m11-4-3", S, "Logaritmik fonksiyon ve logaritmanın özellikleri", "11. sınıf Matematik, 3. Tema, MAT.11.3.5 (Maarif: nitel ve işlem özellikleri)", "Çarpmayı toplamaya çevirebilir miyiz?", [
    M("log₂ 4 + log₂ 8 işleminin sonucu kaçtır?", "5", "log₂ 4 = 2, log₂ 8 = 3; toplam 5. Aynı zamanda log₂ 32 = 5.", [["12", "4 + 8 alınmış."], ["log₂ 12", "Toplamayı sayıya uygulamış."], ["6", "Hatalı."]], "Önce her birini hesapla.", true),
    T("Özellikler (a > 0, a ≠ 1, x, y > 0)", G([["Çarpım", "<b>log_a(x·y) = log_a x + log_a y</b>"], ["Bölüm", "<b>log_a(x/y) = log_a x − log_a y</b>"], ["Kuvvet", "<b>log_a(xⁿ) = n·log_a x</b>", 1], ["Özel değerler", "log_a 1 = 0; log_a a = 1"], ["Taban değiştirme", "<b>log_a b = ln b ÷ ln a</b> ya da log b ÷ log a"]]) + '<p class="callout why" style="margin-top:12px"><b>Tanım kümesi:</b> logaritmanın içi pozitif olmalı: log_a x için x > 0.</p>'),
    M("log₃ 81 − log₃ 9 işleminin sonucu kaçtır?", "2", "log₃ 81 = 4, log₃ 9 = 2; fark 2 (ya da log₃ 9 = 2).", [["4", "Yalnız ilk terim."], ["72", "81 − 9."], ["log₃ 72", "Çıkarma sayıya uygulanmış."]], "Bölüm özelliği."),
    T("Nitel özellikler", '<ul class="body"><li><b>Tanım kümesi:</b> (0, ∞). <b>Görüntü:</b> ℝ.</li><li><b>a > 1:</b> artan; <b>0 < a < 1:</b> azalan. Bire bir.</li><li><b>Sıfırı:</b> x = 1. <b>İşaret:</b> a > 1 için x > 1 → pozitif, 0 < x < 1 → negatif.</li></ul>'),
    M("f(x) = log₂(3x − 2) fonksiyonunun tanım kümesi hangisidir?", "(2/3, ∞)", "3x − 2 > 0 → x > 2/3.", [["(0, ∞)", "İçindeki ifade pozitif olmalı."], ["(−∞, 2/3)", "Ters."], ["ℝ", "Her x için tanımlı değil."]], "İç ifade > 0."),
    M("log₂ 12 − log₂ 3 işleminin sonucu kaçtır?", "2", "log₂(12/3) = log₂ 4 = 2.", [["log₂ 9", "Çıkarma sayıya."], ["3", "Hatalı."], ["4", "Hatalı."]], "Bölüm."),
    R("Peki ya neden? Logaritma neden çarpmayı toplamaya çevirir?", "Çünkü logaritma üstür ve üslü ifadelerde çarpma üslerin toplanmasıdır: aᵐ·aⁿ = aᵐ⁺ⁿ. log(x·y) = log x + log y bu kuraldan çıkar."),
    T("Özet ve sınavda ne işe yarar", '<ul class="body"><li>Çarpım→toplam, bölüm→fark, kuvvet→çarpan.</li><li>log_a 1 = 0, log_a a = 1; taban değiştirme.</li><li>Tanım kümesi: iç ifade > 0.</li></ul><p class="callout">Sınavda: ifadeyi sadeleştir ya da tanım kümesi bul. Önce iç ifadenin pozitif olduğuna bak.</p>')
  ]);

  L("m11-4-4", S, "Üstel ve logaritmik denklem, eşitsizlik ve problemler", "11. sınıf Matematik, 3. Tema, MAT.11.3.6 (Maarif: gerçek yaşam problemleri)", "Bakteri kaç saatte 1600’e ulaşır?", [
    M("N(t) = 100·2ᵗ modelinde bakteri sayısı kaç saatte 1600 olur?", "4", "100·2ᵗ = 1600 → 2ᵗ = 16 → t = 4.", [["16", "Üs değil sonuç."], ["8", "Hatalı."], ["2", "Hatalı."]], "Önce 2ᵗ'yi yalnız bırak.", true),
    T("Strateji", G([["Üstel denklem", "Tabanları eşitle: 2ˣ = 8 → 2ˣ = 2³ → x = 3."], ["Logaritmik denklem", "log_a x = c → x = aᶜ; tanım kümesini kontrol et."], ["Eşitsizlik", "a > 1: yön korunur; 0 < a < 1: yön değişir.", 1]])),
    M("2ˣ > 16 eşitsizliğinin çözüm kümesi hangisidir?", "x > 4", "Taban 2 > 1: artan; 2ˣ > 2⁴ → x > 4.", [["x < 4", "Yön ters."], ["x > 8", "Hatalı."], ["x > 16", "Hatalı."]], "Taban 1’den büyük mü?"),
    M("(1/2)ˣ > 4 eşitsizliğinin çözüm kümesi hangisidir?", "x < −2", "Taban 0 ile 1 arası: azalan; (1/2)ˣ > (1/2)⁻² → x < −2.", [["x > −2", "Yön değişmeli."], ["x < 2", "Hatalı."], ["x > 2", "Hatalı."]], "Taban küçükse yön değişir."),
    T("Logaritmik denklem örneği", '<p><b>log₂(x − 1) = 3</b> → x − 1 = 2³ = 8 → x = 9. Kontrol: x − 1 = 8 > 0 ✓.</p><p class="callout why">Logaritmik denklemde bulduğun x tanım kümesini sağlamıyorsa çözüm değildir.</p>'),
    M("log₂(x − 1) = 3 denkleminin çözümü hangisidir?", "9", "x − 1 = 8.", [["7", "x + 1 = 8."], ["8", "x − 1 = 7."], ["10", "Hatalı."]], "Üs sorusuna çevir."),
    R("Peki ya neden? Taban 0 ile 1 arasında olduğunda eşitsizliğin yönü neden değişir?", "Taban 0 < a < 1 iken aˣ azalan bir fonksiyondur: x büyüdükçe değer küçülür. Bu yüzden büyüklük karşılaştırması yön değiştirir."),
    T("Özet ve sınavda ne işe yarar", '<ul class="body"><li>Tabanları eşitle ya da logaritma al.</li><li>Eşitsizlik: a > 1 yön korunur; 0 < a < 1 değişir.</li><li>Logaritmik denklemde tanım kümesi kontrolü.</li></ul><p class="callout">Sınavda: çözüm kümesi ya da büyüme/yarılanma problemi sorulur.</p>')
  ]);

  L("m11-5-2", S, "Fonksiyonlarda dört işlem", "11. sınıf Matematik, 3. Tema, MAT.11.3.8 (Maarif: işlemin tanımlı olma koşulları)", "İki fonksiyonu toplarken hangi x’ler kalır?", [
    M("f(x) = √x ve g(x) = √(4 − x) olsun. (f + g)(x) fonksiyonunun tanım kümesi hangisidir?", "[0, 4]", "f için x ≥ 0, g için x ≤ 4; ikisinin ortak kümesi.", [["[0, ∞)", "Yalnız f."], ["(−∞, 4]", "Yalnız g."], ["ℝ", "İkisi de her x’te tanımlı değil."]], "İki fonksiyon ortak tanımlı.", true),
    T("Sözlük: dört işlem", G([["Toplam / fark / çarpım", "(f ± g)(x) = f(x) ± g(x); (f·g)(x) = f(x)·g(x). Tanım kümesi: <b>ikisinin ortak tanım kümesi</b>."], ["Bölüm", "(f/g)(x) = f(x) ÷ g(x). Ortak tanım kümesi ve <b>g(x) ≠ 0</b>.", 1]])),
    M("f(x) = x² ve g(x) = x − 2 olsun. (f/g)(x) fonksiyonunun tanım kümesi hangisidir?", "ℝ − {2}", "Payda g(x) = 0 yapan x = 2 çıkarılır.", [["ℝ", "x = 2’de payda 0."], ["ℝ − {0}", "Pay değil, payda sıfır olamaz."], ["(2, ∞)", "Daha dar."]], "Payda ≠ 0."),
    T("Grafik ve cebir", '<p>(f + g) grafiğinde her x için iki yüksekliği toplarsın. Yeni fonksiyonun artanlık, tek–çiftlik gibi özellikleri girenlere bağlıdır; örneğin <b>iki çift fonksiyonun toplamı çifttir</b>.</p>'),
    M("f(x) = x² ve g(x) = x⁴ iki çift fonksiyon olsun. (f + g)(x) hakkında hangisi doğrudur?", "Çift fonksiyondur.", "(f + g)(−x) = f(−x) + g(−x) = f(x) + g(x).", [["Tek fonksiyondur.", "Hatalı."], ["Ne tek ne çifttir.", "Çifttir."], ["Sabit fonksiyondur.", "Hatalı."]], "−x’i yerine koy."),
    M("f(x) = 2x + 1 ve g(x) = x − 3 için (f·g)(2) değeri kaçtır?", "−5", "f(2) = 5, g(2) = −1; çarpım −5.", [["5", "İşaret."], ["−1", "Yalnız g."], ["6", "Toplam."]], "Önce her fonksiyonu hesapla."),
    R("Peki ya neden? Bölme işleminde payda sıfır olamıyorsa (f/g)(x) için neden g(x) = 0 olan noktalar çıkarılır?", "Sıfıra bölme tanımsızdır; g(x) = 0 olan x’lerde (f/g)(x) hesaplanamaz, bu yüzden o noktalar tanım kümesinden çıkarılmalıdır."),
    T("Özet ve sınavda ne işe yarar", '<ul class="body"><li>Toplam, fark, çarpım: ortak tanım kümesi.</li><li>Bölüm: ortak tanım kümesi ve g(x) ≠ 0.</li></ul><p class="callout">Sınavda: bileşke/işlem sonucunun tanım kümesi sorulur. Her fonksiyonun tanım koşullarını ayrı ayrı yaz.</p>')
  ]);
})();
