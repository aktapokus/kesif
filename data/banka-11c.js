/* Soru bankası: 11. sınıf 5. Tema (fonksiyonların bileşkesi; fonksiyonlarda dört işlem). Özgün sorular; ipucu + adım adım çözüm. */
(function () {
  var M = (KESIF.meta = KESIF.meta || {});
  var YKS = { "5.1": "10.2.2", "5.2": "10.2.1" };
  function tagMeta(id, s11, zor, extra) { M[id] = Object.assign({ s11: s11, yks: YKS[s11], sinav: ["s11", "tyt", "ayt"], zor: zor, kaynak: "özgün" }, extra || {}); }
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
    "5.1": "<ul class=\"body\"><li><b>Bileşke:</b> (f∘g)(x) = f(g(x)): önce içteki fonksiyon g uygulanır, çıkan değer f'ye girer.</li><li>Genelde <b>f∘g ≠ g∘f</b> (sıra önemli).</li><li>(f∘g)(a) için önce g(a) hesapla, sonucu f'de yerine koy.</li><li>f(g(x)) = h(x) verilirse f biliniyorsa g(x)'i f'nin tersiyle ya da denklem çözerek bul.</li></ul>",
    "5.2": "<ul class=\"body\"><li>(f ± g)(x) = f(x) ± g(x); (f · g)(x) = f(x) · g(x); (f ÷ g)(x) = f(x) ÷ g(x), <b>g(x) ≠ 0</b>.</li><li><b>Tanım kümesi:</b> işlem yapılan fonksiyonların tanım kümelerinin <b>kesişimi</b>; bölmede ayrıca payda sıfır olamaz; kök ve logaritma koşulları da eklenir.</li><li>Sadeleştirme yapılırsa, sadeleşen çarpanın sıfır yaptığı noktalar tanım kümesinden çıkarılır.</li></ul>"
  });
  /* ---------- 5.1 Fonksiyonların bileşkesi ---------- */
  Q("bk1", "5.1", 1, "f(x) = 2x + 1 ve g(x) = x² ise (f∘g)(3) kaçtır?", "19", "(f∘g)(3) = f(g(3)) = f(9) = 2 · 9 + 1 = 19.",
    [["49", "Bu (g∘f)(3) = g(7) = 49; sıra ters alınmış."], ["16", "f(3) + g(3) = 7 + 9; bileşke toplama değildir."], ["7", "Yalnızca f(3); g uygulanmamış."]],
    "Önce içteki fonksiyon g'yi uygula.", ["g(3) = 3² = 9.", "f(9) = 2 · 9 + 1 = 19.", "(f∘g)(3) = 19."], "(f∘g)(x) = f(g(x)).");
  Q("bk2", "5.1", 2, "f(x) = x + 3 ve g(x) = 2x − 1 ise (f∘g)(x) hangisidir?", "2x + 2", "(f∘g)(x) = f(g(x)) = f(2x − 1) = (2x − 1) + 3 = 2x + 2.",
    [["2x + 5", "Bu (g∘f)(x) = 2(x + 3) − 1 = 2x + 5; sıra ters."], ["3x + 2", "f ve g'nin toplanması gibi bir hata."], ["2x − 4", "g'den 3 çıkarılmış; f toplama yapar."]],
    "f'nin x yerine g(x)'i yaz.", ["g(x) = 2x − 1.", "f(g(x)) = g(x) + 3 = (2x − 1) + 3.", "= 2x + 2."], "İçteki ifadeyi x'in yerine koy.");
  Q("bk3", "5.1", 2, "f(x) = 3x − 2 ve (f∘g)(x) = 6x + 1 ise g(x) hangisidir?", "2x + 1", "3 · g(x) − 2 = 6x + 1 → 3 g(x) = 6x + 3 → g(x) = 2x + 1.",
    [["2x − 1", "−2'yi karşı tarafa yanlış taşımış olabilirsin."], ["18x − 1", "f(x) ile g(x) çarpılmış gibi."], ["6x + 3", "3'e bölmeyi unutmuşsun."]],
    "f(g(x)) = 3 · g(x) − 2 yaz ve g(x)'i yalnız bırak.", ["f(g(x)) = 3 · g(x) − 2 = 6x + 1.", "3 · g(x) = 6x + 3.", "g(x) = 2x + 1."], "Bileşkede bilinmeyen fonksiyon: denklem kur.");
  Q("bk4", "5.1", 2, "f(x) = 2x − 3 ise (f∘f)(x) hangisidir?", "4x − 9", "f(f(x)) = 2 · (2x − 3) − 3 = 4x − 6 − 3 = 4x − 9.",
    [["4x − 3", "İçteki −3 çarpılmamış."], ["4x − 6", "Son −3 unutulmuş."], ["2x − 6", "Fonksiyon iki kez uygulanmamış."]],
    "f(x)'in yerine f(x)'i yaz.", ["f(f(x)) = 2 · f(x) − 3.", "= 2 · (2x − 3) − 3 = 4x − 6 − 3.", "= 4x − 9."], "Fonksiyonu kendisiyle bileştir.");
  Q("bk5", "5.1", 2, "f(x) = x² ve g(x) = x + 1 ise (f∘g)(2) − (g∘f)(2) farkı kaçtır?", "4", "(f∘g)(2) = f(3) = 9; (g∘f)(2) = g(4) = 5; fark 4.",
    [["0", "Bileşke işlemi değişmeli değildir: f∘g ≠ g∘f."], ["−4", "Çıkarma sırası ters alınmış."], ["14", "9 + 5 toplanmış."]],
    "İki bileşkeyi ayrı ayrı hesapla.", ["(f∘g)(2) = f(g(2)) = f(3) = 9.", "(g∘f)(2) = g(f(2)) = g(4) = 5.", "Fark: 9 − 5 = 4."], "f∘g ile g∘f genelde farklıdır.");
  /* ---------- 5.2 Fonksiyonlarda dört işlem ---------- */
  Q("dk1", "5.2", 1, "f(x) = x + 2 ve g(x) = x − 3 ise (f · g)(5) kaçtır?", "14", "f(5) = 7, g(5) = 2; çarpım 14.",
    [["9", "f(5) + g(5) = 7 + 2; çarpım istenmiş."], ["35", "f(5) · 5 gibi bir hata."], ["12", "Sayılar yanlış yerine konmuş."]],
    "(f · g)(x) = f(x) · g(x).", ["f(5) = 5 + 2 = 7.", "g(5) = 5 − 3 = 2.", "(f · g)(5) = 7 · 2 = 14."], "İşlemleri değerler üzerinde yap.");
  Q("dk2", "5.2", 2, "f(x) = x + 2 ve g(x) = x − 3 ise (f ÷ g)(x) fonksiyonunun en geniş tanım kümesi hangisidir?", "ℝ − {3}", "Payda g(x) = x − 3 sıfır olamaz: x ≠ 3.",
    [["ℝ − {−2}", "x = −2 payı sıfır yapar; payın sıfır olması sorun değildir."], ["ℝ", "x = 3'te payda 0 olur; tanımsız."], ["ℝ − {−2, 3}", "Yalnızca paydayı sıfır yapan değer çıkarılır."]],
    "Bölmede hangi ifade sıfır olamaz?", ["(f ÷ g)(x) = (x + 2) ÷ (x − 3).", "Payda sıfır olamaz: x − 3 ≠ 0.", "Tanım kümesi ℝ − {3}."], "Bölmede payda ≠ 0.");
  Q("dk3", "5.2", 2, "f(x) = x² ve g(x) = 3x − 4 ise (f + g)(x) = 0 denkleminin köklerinin toplamı kaçtır?", "−3", "x² + 3x − 4 = 0 → (x + 4)(x − 1) = 0 → x = −4 veya x = 1; toplam −3.",
    [["3", "Köklerin toplamı −b/a = −3; işaret hatası."], ["−4", "Yalnızca bir kök."], ["1", "Yalnızca bir kök."]],
    "Önce (f + g)(x)'i yaz ve çarpanlara ayır.", ["(f + g)(x) = x² + 3x − 4.", "x² + 3x − 4 = (x + 4)(x − 1) = 0.", "Kökler −4 ve 1; toplam −3."], "Köklerin toplamı −b/a.");
  Q("dk4", "5.2", 1, "f(x) = 2x ve g(x) = x − 4 ise (f − g)(6) kaçtır?", "10", "f(6) = 12, g(6) = 2; fark 10.",
    [["14", "f(6) + g(6) = 14; çıkarma istenmiş."], ["2", "Yalnızca g(6)."], ["−10", "Çıkarma sırası ters."]],
    "(f − g)(x) = f(x) − g(x).", ["f(6) = 12.", "g(6) = 6 − 4 = 2.", "(f − g)(6) = 12 − 2 = 10."], "Çıkarmada sıra önemlidir.");
  Q("dk5", "5.2", 3, "f(x) = √(x − 1) ve g(x) = 1 ÷ (x − 3) ise (f + g)(x) fonksiyonunun en geniş tanım kümesi hangisidir?", "[1, 3) ∪ (3, ∞)", "f için x ≥ 1; g için x ≠ 3. Kesişim: x ≥ 1 ve x ≠ 3.",
    [["[1, ∞)", "x = 3'te g tanımsız; çıkarılmalı."], ["(1, 3) ∪ (3, ∞)", "x = 1'de √0 = 0 tanımlıdır; 1 dahildir."], ["ℝ − {3}", "Kök içi negatif olamaz: x ≥ 1 koşulu var."]],
    "Her fonksiyonun tanım koşulunu yaz, kesişimi al.", ["f(x) = √(x − 1) için x − 1 ≥ 0 → x ≥ 1.", "g(x) = 1 ÷ (x − 3) için x ≠ 3.", "Kesişim: [1, ∞) − {3} = [1, 3) ∪ (3, ∞)."], "Tanım kümesi: kesişim.");
  /* ---------- açık uçlu ---------- */
  A("bd1", "5.1", 2, "f(x) = 2x − 1 ve g(x) = x² + 3 olduğuna göre (f∘g)(2) ve (g∘f)(1) değerlerini bulunuz.",
    [{ label: "(f∘g)(2)", v: "13" }, { label: "(g∘f)(1)", v: "4" }], "Önce içteki fonksiyonun değerini hesapla.",
    ["g(2) = 2² + 3 = 7 → (f∘g)(2) = f(7) = 2 · 7 − 1 = 13.", "f(1) = 2 · 1 − 1 = 1 → (g∘f)(1) = g(1) = 1² + 3 = 4."],
    [[1, "(f∘g)(2) için g(2) = 7 bulundu"], [1, "(f∘g)(2) = 13"], [1, "(g∘f)(1) için f(1) = 1 bulundu"], [1, "(g∘f)(1) = 4"]]);
  A("bd2", "5.1", 3, "f(x) = x + 4 ve (f∘g)(x) = 3x + 10 olduğuna göre g(x) fonksiyonunu ve g(2) değerini bulunuz.",
    [{ label: "g(2)", v: "12" }], "f(g(x)) = g(x) + 4 eşitliğini yaz.",
    ["f(g(x)) = g(x) + 4 = 3x + 10.", "g(x) = 3x + 6.", "g(2) = 3 · 2 + 6 = 12."],
    [[1, "f(g(x)) = g(x) + 4 yazıldı"], [1, "g(x) = 3x + 6"], [1, "g(2) = 12"]]);
  A("bd3", "5.2", 3, "f(x) = x² − 4 ve g(x) = x − 2 olduğuna göre (f ÷ g)(x) ifadesini sadeleştirerek yazınız, tanım kümesini belirtiniz ve (f ÷ g)(5) değerini bulunuz.",
    [{ label: "(f ÷ g)(5)", v: "7" }], "x² − 4'ü çarpanlarına ayır; payda sıfır olamaz.",
    ["x² − 4 = (x − 2)(x + 2).", "(f ÷ g)(x) = (x − 2)(x + 2) ÷ (x − 2) = x + 2, x ≠ 2.", "Tanım kümesi ℝ − {2} (g(2) = 0 olduğu için).", "(f ÷ g)(5) = 5 + 2 = 7."],
    [[1, "Çarpanlara ayırma yapıldı"], [1, "Sadeleşti: x + 2, tanım koşulu x ≠ 2 yazıldı"], [1, "(f ÷ g)(5) = 7"]]);
})();
