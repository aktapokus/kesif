/* Açık uçlu / kısa cevaplı sorular (Maarif okul sınavı biçimi). Özgün sorular; "bulunuz" tarzı, kısa cevap kutuları + örnek çözüm + puanlama anahtarı.
   answers: kısa cevap kutuları (v = doğru değer, accept = kabul edilen yazılışlar). rubric: [puan, ölçüt]. */
(function () {
  var M = (KESIF.meta = KESIF.meta || {});
  function A(id, s11, zor, q, answers, hint, steps, rubric, explain) {
    KESIF.daily.push({ id: id, subject: "mat", type: "open", q: q, answers: answers, hint: hint, solution: steps, rubric: rubric, explain: explain || "", opts: [] });
    M[id] = { s11: s11, sinav: ["s11"], zor: zor, kaynak: "özgün", tur: "açık uçlu" };
  }
  A("ao1", "2.4", 2, "İç açılarının toplamı 1620° olan dışbükey çokgenin kenar sayısını ve köşegen sayısını bulunuz.",
    [{ label: "Kenar sayısı", v: "11" }, { label: "Köşegen sayısı", v: "44" }],
    "(n − 2) · 180° = iç açılar toplamı. Kenar sayısını bulunca n(n − 3) ÷ 2 ile köşegeni hesapla.",
    ["(n − 2) · 180 = 1620 → n − 2 = 9 → n = 11.", "Köşegen sayısı = n(n − 3) ÷ 2 = 11 · 8 ÷ 2 = 44."],
    [[1, "İç açılar toplamı formülü doğru yazıldı: (n − 2) · 180"], [1, "n = 11 bulundu"], [1, "Köşegen formülü doğru yazıldı: n(n − 3) ÷ 2"], [1, "Köşegen sayısı 44 bulundu"]]);
  A("ao2", "2.2", 2, "Köşegen uzunlukları 10 cm ve 24 cm olan bir eşkenar dörtgenin bir kenar uzunluğunu, çevresini ve alanını bulunuz.",
    [{ label: "Kenar (cm)", v: "13" }, { label: "Çevre (cm)", v: "52" }, { label: "Alan (cm²)", v: "120" }],
    "Eşkenar dörtgenin köşegenleri birbirini dik ortalar: yarım köşegenlerle bir dik üçgen oluşur.",
    ["Köşegenler dik ortalar: yarım köşegenler 5 cm ve 12 cm.", "Kenar = √(5² + 12²) = √169 = 13 cm.", "Çevre = 4 · 13 = 52 cm.", "Alan = (10 · 24) ÷ 2 = 120 cm²."],
    [[1, "Köşegenlerin dik ortaladığı kullanıldı (5 ve 12)"], [1, "Pisagor ile kenar = 13"], [1, "Çevre = 52"], [1, "Alan = e · f ÷ 2 = 120"]]);
  A("ao3", "2.1", 2, "İç açılarının ölçüleri sırasıyla 3 : 4 : 5 : 6 oranında olan bir dörtgenin en küçük ve en büyük açısını bulunuz.",
    [{ label: "En küçük açı (°)", v: "60" }, { label: "En büyük açı (°)", v: "120" }],
    "Açılara 3k, 4k, 5k, 6k de; toplamları 360°.",
    ["Açılar 3k, 4k, 5k, 6k olsun: toplam 18k = 360° → k = 20°.", "En küçük açı 3k = 60°.", "En büyük açı 6k = 120°."],
    [[1, "Dörtgenin iç açıları toplamı 360° olarak kullanıldı"], [1, "k = 20 bulundu"], [1, "60° ve 120° bulundu"]]);
  A("ao4", "2.5", 3, "Komşu kenar uzunlukları 10 cm ve 6 cm, aralarındaki açı 30° olan paralelkenarın alanını bulunuz.",
    [{ label: "Alan (cm²)", v: "30" }],
    "Taban 10 cm ise yükseklik, 6 cm'lik kenar ile 30°'lik açı kullanılarak dik üçgenden bulunur (sin 30° = 1/2).",
    ["Tabanı 10 cm alalım. 6 cm'lik kenardan tabana indirilen yükseklik h = 6 · sin 30° = 6 · 1/2 = 3 cm.", "Alan = taban · yükseklik = 10 · 3 = 30 cm²."],
    [[1, "Yükseklik için dik üçgen kuruldu"], [1, "h = 3 bulundu"], [1, "Alan = taban · yükseklik = 30"]]);
  A("ao5", "2.5", 2, "Kenar uzunluğu 6 cm olan düzgün altıgenin çevresini ve alanını bulunuz.",
    [{ label: "Çevre (cm)", v: "36" }, { label: "Alan (cm²)", v: "54√3", accept: ["54√3", "54kök3", "93.53", "93,53"] }],
    "Düzgün altıgen, merkezden köşelere çizilen yarıçaplarla 6 eşkenar üçgene ayrılır.",
    ["Çevre = 6 · 6 = 36 cm.", "Altıgen 6 eşkenar üçgene ayrılır; her biri kenarı 6 cm olan eşkenar üçgendir.", "Bir eşkenar üçgenin alanı = (√3 ÷ 4) · 6² = 9√3 cm².", "Altıgenin alanı = 6 · 9√3 = 54√3 cm²."],
    [[1, "Çevre = 36"], [1, "Altıgenin 6 eşkenar üçgene ayrıldığı belirtildi"], [1, "Eşkenar üçgen alanı 9√3"], [1, "Altıgen alanı 54√3"]]);
  A("ao6", "2.3", 3, "Bir dışbükey çokgenin köşegen sayısı, kenar sayısının 3 katıdır. Bu çokgenin kenar sayısını bulunuz.",
    [{ label: "Kenar sayısı", v: "9" }],
    "n(n − 3) ÷ 2 = 3n denklemini kur; n sıfırdan farklı olduğu için sadeleştir.",
    ["Köşegen sayısı n(n − 3) ÷ 2; bu 3n'e eşit: n(n − 3) ÷ 2 = 3n.", "n ≠ 0 olduğundan her iki yanı n'e böl: (n − 3) ÷ 2 = 3.", "n − 3 = 6 → n = 9."],
    [[1, "Denklem doğru kuruldu"], [1, "n ile sadeleştirildi (n ≠ 0 belirtildi)"], [1, "n = 9 bulundu"]]);
  A("ao8", "2.1", 2, "Bir dışbükey dörtgenin ardışık iki köşesindeki dış açıların ölçüleri 70° ve 80°'dir. Kalan iki köşedeki dış açıların toplamını ve kalan iki köşedeki iç açıların toplamını bulunuz.",
    [{ label: "Kalan dış açılar toplamı (°)", v: "210" }, { label: "Kalan iç açılar toplamı (°)", v: "150" }],
    "Dışbükey dörtgende dış açılar toplamı 360°. Her köşede iç + dış = 180°.",
    ["Dış açıların toplamı 360°: kalan iki dış açının toplamı 360 − (70 + 80) = 210°.", "Her köşede iç + dış = 180°: kalan iki köşede iç + dış toplamı 2 · 180 = 360°.", "Kalan iç açıların toplamı = 360 − 210 = 150°.", "Kontrol: ilk iki köşedeki iç açılar 110° + 100° = 210°; 210 + 150 = 360° ✓."],
    [[1, "Dış açılar toplamı 360° kullanıldı → 210°"], [1, "İç + dış = 180° kullanıldı"], [1, "150° bulundu"]]);
  A("ao7", "1.2", 2, "Bir haber sitesi şöyle yazıyor: \"Araştırma: Günde 3 fincan kahve içen üniversite öğrencilerinin not ortalaması yüksek.\" Araştırma 12 öğrenciyle yapılmış ve ilişki katsayısı r = 0,8 bulunmuş. Haberi değerlendirirken sormanız gereken üç soruyu gerekçesiyle yazınız.",
    [],
    "Örneklem, sebep-sonuç ve kaynak/yöntem üzerine düşün.",
    ["Örneklem: Kaç kişi ve nasıl seçildi? 12 kişi genellemek için az; hangi öğrenciler seçilmiş?", "Sebep: Kahve içmek notu yükseltiyor mu, yoksa ortak bir etken (örneğin daha çok ders çalışan, geç saate kadar uyanık kalan öğrenciler) mi var? İlişki, sebep demek değildir.", "Kaynak ve yöntem: Araştırmayı kim yaptı, hangi koşullarda ve neden? Kahve satan bir firma mı?", "Ek: r = 0,8 güçlü bir ilişkiyi gösterir ama yalnızca bu 12 kişi için geçerlidir."],
    [[1, "Örneklem büyüklüğüne/seçimine ilişkin bir soru yazıldı"], [1, "İlişki ≠ sebep / ortak etken sorgulandı"], [1, "Kaynak ya da yöntem soruldu"], [1, "Her soru için kısa bir gerekçe verildi"]],
    "Bu soruda tek doğru cümle yok; puanlama anahtarına göre kendini değerlendir.");
})();
