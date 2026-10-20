/* 11. sınıf Matematik, 2. Tema Geometrik Şekiller — MAT.11.2.1 Dörtgenlerin özellikleri (konu anlatımı, sıfırdan).
   Kaynak: tymm.meb.gov.tr/matematik-dersi/unite/297. Program: yalnızca DIŞBÜKEY dörtgenler; varsayım → örüntü → önerme → üçgen bilgileriyle ispat; deltoid öğretmen rehberliğinde;
   alan örneği: A = ½·e·f·sin θ. Özgün içerik (CC BY-NC-SA 4.0). Standart: docs/DERS-STANDARDI.md. */
(function () {
  var f1 = function (v) { return (+v.toFixed(1)).toString().replace(".", ","); };
  KESIF.lessons["m11-2-1"] = {
    id: "m11-2-1", subject: "mat", title: "Dörtgenlerin özellikleri: köşegenler neyi söyler?", minutes: 25,
    grade: "11. sınıf Matematik, 2. Tema Geometrik Şekiller, MAT.11.2.1 (Maarif: muhakeme, varsayım–genelleme–ispat)",
    hook: "Bir dörtgenin alanını yalnızca köşegenlerine bakarak bulabilir misin?",
    steps: [
      { type: "mcq", predict: true, q: "Bir dörtgenin bir köşesinden karşısındaki köşeye çizgi çizersen (köşegen) dörtgen iki üçgene ayrılır. Buna göre dörtgenin iç açıları toplamı kaçtır?",
        opts: [
          { t: "360°", ok: true, why: "Her üçgenin iç açıları toplamı 180°; iki üçgen: 180° + 180° = 360°. Dörtgenin dört açısı bu iki üçgenin açılarıdır." },
          { t: "180°", why: "180° bir üçgenin iç açılar toplamı; dörtgen iki üçgenden oluşur." },
          { t: "270°", why: "Bu değer ne üçgene ne de dörtgene uyar; üçgen sayısı iki, 2 × 180° = 360°." },
          { t: "720°", why: "Üç köşegenden değil, tek köşegenden iki üçgen oluşuyor; 2 × 180° = 360°." }
        ],
        explain: "Karmaşık bir şekli bildiğin şekle (üçgene) bölmek geometrinin en güçlü yöntemlerinden biridir; bu derste hep onu kullanacağız." },

      { type: "text", title: "Önce sözlük: dörtgenler ve köşegenler",
        say: "Dörtgenin dört kenarı, dört köşesi ve iki köşegeni vardır. Bu derste yalnızca dışbükey dörtgenlere bakıyoruz.",
        html: `<div class="grid"><div class="card"><h3>Köşegen</h3><p class="small">Komşu olmayan iki köşeyi birleştiren doğru parçası. Dörtgenin <b>2</b> köşegeni var.</p></div>
<div class="card"><h3>Dışbükey</h3><p class="small">Tüm köşegenleri şeklin içinde kalan dörtgen. (İçbükey olanlar bu konunun dışında.)</p></div></div>
<div class="grid" style="margin-top:12px"><div class="card"><h3>Paralelkenar</h3><p class="small">Karşılıklı kenarları paralel.</p></div><div class="card"><h3>Eşkenar dörtgen</h3><p class="small">Dört kenarı eşit.</p></div><div class="card"><h3>Dikdörtgen</h3><p class="small">Dört açısı 90°.</p></div><div class="card"><h3>Kare</h3><p class="small">Dört kenarı eşit, dört açısı 90°.</p></div><div class="card"><h3>Yamuk</h3><p class="small">Yalnızca bir çift kenarı paralel.</p></div><div class="card"><h3>Deltoid</h3><p class="small">İki çift komşu kenarı eşit (uçurtma biçimi).</p></div></div>` },

      { type: "text", title: "Matematikte bilgi nasıl üretilir?",
        say: "Önce bir tahmin yaparız, sonra birçok örnekte denemeyle bir örüntü ararız. Örüntüyü bir önerme olarak yazarız ve en sonunda bildiğimiz üçgen bilgisiyle ispat ederiz.",
        html: `<ol class="body"><li><b>Varsayım:</b> "Bence şöyle olmalı…"</li><li><b>Örnek ve örüntü:</b> birçok şekilde dene; hep böyle mi çıkıyor?</li><li><b>Önerme:</b> bulduğunu açık bir cümleyle yaz.</li><li><b>İspat:</b> üçgenlerin açı, benzerlik ve alan bilgisiyle bunun her zaman doğru olduğunu göster.</li></ol>
<p class="callout why"><b>Neden ispat?</b> Çok sayıda örnekte doğru çıkan bir şey, tek bir istisna yüzünden yanlış olabilir. İspat, her durumda doğru olduğunu garanti eder.</p>` },

      { type: "sim", title: "Köşegenleri değiştir: şekil ve alan nasıl değişiyor?",
        say: "İki köşegenin uzunluğunu ve aralarındaki açıyı değiştir. Köşegenler birbirini ortalıyor. Hangi değerlerde kare, dikdörtgen ya da eşkenar dörtgen olur? Alan nasıl değişiyor?",
        intro: "İki köşegen <b>birbirini ortalıyor</b> (kesişme noktası ikisinin de ortası). Kaydırıcılarla <b>e</b> ve <b>f</b> köşegen uzunluklarını, <b>θ</b> aralarındaki açıyı değiştir. Şeklin adına ve <b>alana</b> bak: köşegenler eşit olunca, açı 90° olunca ne oluyor?",
        cfg: { vb: "0 0 640 300", vars: [{ k: "e", label: "Köşegen e", min: 4, max: 10, step: 1, value: 8, unit: "cm" }, { k: "f", label: "Köşegen f", min: 4, max: 10, step: 1, value: 6, unit: "cm" }, { k: "t", label: "Aralarındaki açı θ", min: 30, max: 150, step: 10, value: 70, unit: "°" }],
          out: [{ label: "Şekil", fn: function (v) { var d = v.t === 90, eq = v.e === v.f; return d && eq ? "kare" : d ? "eşkenar dörtgen" : eq ? "dikdörtgen" : "paralelkenar"; } }, { label: "Alan = ½ · e · f · sin θ", fn: function (v) { return f1(0.5 * v.e * v.f * Math.sin(v.t * Math.PI / 180)) + " cm²"; } }],
          svg: function (v) {
            var cx = 320, cy = 150, s = 11, r = v.t * Math.PI / 180, ex = v.e * s / 2, fx = v.f * s / 2, ux = Math.cos(r), uy = -Math.sin(r);
            var A = [cx + ex, cy], C = [cx - ex, cy], B = [cx + fx * ux, cy + fx * uy], D = [cx - fx * ux, cy - fx * uy], pt = function (p) { return p[0].toFixed(1) + "," + p[1].toFixed(1); };
            var h = '<polygon points="' + [A, B, C, D].map(pt).join(" ") + '" fill="color-mix(in srgb, var(--accent) 22%, transparent)" stroke="var(--ink)" stroke-width="3"/>';
            h += '<line x1="' + C[0] + '" y1="' + C[1] + '" x2="' + A[0] + '" y2="' + A[1] + '" stroke="var(--cyan)" stroke-width="3"/><line x1="' + D[0] + '" y1="' + D[1] + '" x2="' + B[0] + '" y2="' + B[1] + '" stroke="var(--good)" stroke-width="3"/>';
            h += '<circle cx="' + cx + '" cy="' + cy + '" r="5" fill="var(--ink)"/>';
            h += '<text x="' + (A[0] + 8) + '" y="' + (A[1] + 5) + '" fill="var(--ink)" font-size="16" font-weight="700">A</text><text x="' + (B[0] + 6) + '" y="' + (B[1] - 6) + '" fill="var(--ink)" font-size="16" font-weight="700">B</text><text x="' + (C[0] - 20) + '" y="' + (C[1] + 5) + '" fill="var(--ink)" font-size="16" font-weight="700">C</text><text x="' + (D[0] - 18) + '" y="' + (D[1] + 18) + '" fill="var(--ink)" font-size="16" font-weight="700">D</text>';
            h += '<text x="20" y="30" fill="var(--cyan)" font-size="16" font-weight="700">AC = e = ' + v.e + ' cm</text><text x="20" y="54" fill="var(--good)" font-size="16" font-weight="700">BD = f = ' + v.f + ' cm</text><text x="20" y="78" fill="var(--ink)" font-size="16" font-weight="700">θ = ' + v.t + '°</text>';
            return h; } } },

      { type: "mcq", predict: true, q: "Simülasyona göre köşegen uzunlukları e = 8 cm, f = 6 cm ve aralarındaki açı 90° olan bir dörtgenin alanı kaç cm²'dir?",
        opts: [
          { t: "24 cm²", ok: true, why: "A = ½ · e · f · sin θ = ½ · 8 · 6 · sin 90° = 24 · 1 = 24 cm²." },
          { t: "48 cm²", why: "½ unutulmuş: 8 · 6 = 48. Alan formülünde yarı çarpanı vardır." },
          { t: "14 cm²", why: "8 + 6 toplanmış; alan çarpmayla bulunur." },
          { t: "12 cm²", why: "sin 90° = 1 olmasına rağmen ek bir yarı alınmış (½ · ½ · 8 · 6)." }
        ],
        explain: "Alan formülü: iki köşegenin çarpımının yarısı çarpı aralarındaki açının sinüsü. θ = 90° ise sin θ = 1 ve alan en büyük olur." },

      { type: "text", title: "Üçgen bilgisiyle ispat: paralelkenarın köşegenleri birbirini ortalar",
        say: "Paralelkenarın karşılıklı kenarları paralel ve eşittir. Köşegenlerin kesiştiği noktada oluşan iki karşılıklı üçgen eşittir. Bu yüzden köşegenler birbirini ortalar.",
        html: `<p><b>Önerme:</b> Paralelkenarın köşegenleri birbirini ortalar.</p>
<ol class="body"><li>ABCD paralelkenar; köşegenler O'da kesişsin. Karşılıklı kenarlar paralel ve eşit: AB = CD, AB ∥ CD.</li><li>AB ∥ CD olduğundan <b>ters açılar</b> eşit: ∠BAO = ∠DCO ve ∠ABO = ∠CDO.</li><li>Bir kenar (AB = CD) ve iki açı eşit → <b>AOB ve COD üçgenleri eş</b> (açı–kenar–açı).</li><li>Eş üçgenlerde karşılıklı kenarlar eşit: <b>AO = OC</b> ve <b>BO = OD</b>. O, iki köşegenin de ortasıdır. ∎</li></ol>
<p class="callout why"><b>Ek bilgi:</b> AO = OC olduğundan, B'den AC'ye çizilen yükseklik aynı kalır, taban eşit olur: <b>AOB ve BOC üçgenlerinin alanları eşit</b>. Aynı akıl yürütmeyle paralelkenarın köşegenleri onu <b>eş alanlı dört üçgene</b> böler.</p>` },

      { type: "mcq", q: "Eşkenar dörtgenin köşegenleri hakkında hangisi doğrudur?",
        opts: [
          { t: "Birbirini dik ortalar ve köşelerdeki açıları ikiye böler.", ok: true, why: "Eşkenar dörtgenin dört kenarı eşit olduğundan köşegenler ikizkenar üçgenlerin yüksekliği ve açıortayı olur: dik kesişir, açıortaydır." },
          { t: "Uzunlukları her zaman eşittir.", why: "Köşegenlerin eşit olması dikdörtgenin özelliğidir. Eşkenar dörtgende köşegenler genelde farklıdır." },
          { t: "Birbirine paraleldir.", why: "Köşegenler kesişir, paralel olmaz." },
          { t: "Birbirini ortalar ama dik kesişmez.", why: "Ortalama paralelkenarın özelliği; eşkenar dörtgen ek olarak dik kesişir." }
        ],
        explain: "Eşkenar dörtgen = kenarları eşit paralelkenar. Paralelkenar özelliklerine bir de ‘dik kesişir, açıortay’ eklenir." },

      { type: "text", title: "Yamuk ve deltoid: köşegenler ne söyler?",
        say: "İkizkenar yamuğun köşegenleri eşittir. Yamuğun köşegenleri birbirini oranlı böler. Deltoidin köşegenleri dik kesişir ve bir köşegen simetri eksenidir.",
        html: `<div class="grid"><div class="card"><h3>Yamuk</h3><p class="small">Köşegenler birbirini <b>oranlı</b> böler: oran, paralel kenarların (tabanların) oranına eşittir (benzer üçgenler).</p></div>
<div class="card"><h3>İkizkenar yamuk</h3><p class="small">Yan kenarlar eşit. <b>Köşegen uzunlukları eşit</b>; taban açıları eşit. 1 simetri ekseni var.</p></div>
<div class="card pick"><h3>Deltoid</h3><p class="small">Bir üçgenin en uzun kenarına göre simetriği alınınca oluşur. Köşegenleri <b>dik kesişir</b>; köşegenlerden biri <b>simetri eksenidir</b> ve diğerini ortalar.</p></div></div>
<p class="callout why" style="margin-top:12px"><b>Simetri ekseni sayıları:</b> paralelkenar 0 · dikdörtgen 2 · eşkenar dörtgen 2 · kare 4 · ikizkenar yamuk 1 · deltoid 1.</p>` },

      { type: "mcq", q: "Aşağıdaki önermelerden hangisi her dışbükey dörtgen için doğru DEĞİLDİR?",
        opts: [
          { t: "Köşegenler birbirini ortalar.", ok: true, why: "Bu yalnızca paralelkenar ailesi (paralelkenar, dikdörtgen, eşkenar dörtgen, kare) için doğrudur. Yamuk ve deltoidde köşegenler birbirini ortalamaz." },
          { t: "İç açıların toplamı 360°'dir.", why: "Her dışbükey dörtgen iki üçgene bölünür: 2 · 180° = 360°. Bu her zaman doğrudur." },
          { t: "İki köşegeni birbirini keser.", why: "Dışbükey dörtgende köşegenler şeklin içinde kesişir; bu her zaman doğrudur." },
          { t: "Alanı, köşegenleri ve aralarındaki açıyla ½·e·f·sin θ olarak bulunur.", why: "Bu bağıntı her dışbükey dörtgen için geçerlidir." }
        ],
        explain: "Bir önermenin ‘her zaman’ doğru olması için tek bir karşı örnek bile yeterli bozar: yamukta köşegenler ortalanmaz." },

      { type: "mcq", q: "Bir dörtgenin köşegen uzunlukları 10 cm ve 12 cm, aralarındaki açı 30°'dir. Alanı kaç cm²'dir? (sin 30° = ½)",
        opts: [
          { t: "30 cm²", ok: true, why: "A = ½ · 10 · 12 · sin 30° = 60 · ½ = 30 cm²." },
          { t: "60 cm²", why: "sin 30° = ½ çarpanı unutulmuş: ½ · 10 · 12 = 60 (yalnızca θ = 90° için doğru)." },
          { t: "120 cm²", why: "Yarım ve sinüs çarpanlarının ikisi de unutulmuş." },
          { t: "15 cm²", why: "Yarım çarpanı iki kez uygulanmış (½ · ½ · ½ · 10 · 12)." }
        ],
        explain: "Basamak: formülü yaz, sayıları yerine koy, sin değerini ekle." },

      { type: "reflect", q: "Peki ya neden? Alan formülü A = ½·e·f·sin θ'da açı 90° olduğunda alan neden en büyük oluyor? Simülasyonda köşegen uzunluklarını sabit tutup açıyı değiştirdiğinde ne gördün?",
        hint: "Örnek düşünce: sin θ en büyük değerini θ = 90° iken alır (1). Köşegenler dik kesişince dört üçgenin yükseklikleri en büyük olur; açı 30°'ye ya da 150°'ye gidince şekil ‘yassılaşır’ ve alan küçülür. Yani aynı köşegenlerle farklı alanlı dörtgenler çizebilirsin; alanı belirleyen açıdır." },

      { type: "text", title: "Özet ve sınavda ne işe yarar",
        say: "Dörtgeni köşegenle üçgenlere bölerek özelliklerini buluruz. Paralelkenarda köşegenler birbirini ortalar. Eşkenar dörtgende köşegenler dik kesişir. Alan, köşegenler çarpımının yarısı çarpı aralarındaki açının sinüsüdür.",
        html: `<ul class="body"><li>Dışbükey dörtgende iç açılar toplamı <b>360°</b> (köşegen → iki üçgen).</li><li><b>Paralelkenar:</b> köşegenler birbirini ortalar; alanı eş alanlı 4 üçgene bölünür.</li><li><b>Eşkenar dörtgen:</b> köşegenler dik kesişir ve açıortaydır. <b>Dikdörtgen:</b> köşegenler eşit. <b>Kare:</b> hepsi.</li><li><b>Yamuk:</b> köşegenler tabanlar oranında bölünür. <b>İkizkenar yamuk:</b> köşegenler eşit. <b>Deltoid:</b> köşegenler dik, biri simetri ekseni.</li><li><b>Alan = ½ · e · f · sin θ</b> (her dışbükey dörtgen).</li></ul>
<p class="callout">Sınavda şöyle görürsün: bir önermenin doğru/yanlış olduğu, bir dörtgenin köşegen ya da alan değeri ya da iki özel dörtgen arasındaki ilişki sorulur. Önce şekli üçgenlere böl.</p>` }
    ]
  };
})();
