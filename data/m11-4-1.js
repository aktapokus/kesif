/* 11. sınıf Matematik, 3. Tema Nicelikler ve Değişimler (2) — MAT.11.3.3 Üstel fonksiyonlar ve nitel özellikleri (konu anlatımı, sıfırdan).
   Kaynak: tymm.meb.gov.tr/matematik-dersi/unite/295. Referans: f(x) = aˣ (a > 0, a ≠ 1); türetilmiş: g(x) = k·f(mx ± r) ± s; e sayısı; nitel özellikler: tanım–görüntü kümesi, işaret, artanlık–azalanlık,
   sıfırlar, bire birlik, tek–çiftlik, örtenlik. Etkileşimli taban laboratuvarı eski dersten (mat-ustel-log) alınır. Özgün içerik (CC BY-NC-SA 4.0). Standart: docs/DERS-STANDARDI.md. */
(function () {
  var old = KESIF.lessons["mat-ustel-log"].steps;
  KESIF.lessonYks = KESIF.lessonYks || {}; KESIF.lessonYks["m11-4-1"] = ["12.1.1"];
  KESIF.lessons["m11-4-1"] = {
    id: "m11-4-1", subject: "mat", title: "Üstel fonksiyonlar: katlanarak büyümek", minutes: 25,
    grade: "11. sınıf Matematik, 3. Tema Nicelikler ve Değişimler (2), MAT.11.3.3 (Maarif: nitel özelliklere ilişkin muhakeme)",
    hook: "Bir bakteri her saat ikiye bölünüyorsa, 10 saat sonra kaç bakteri olur?",
    steps: [
      { type: "mcq", predict: true, q: "Bir kapta 1 bakteri var ve her saat sayısı ikiye katlanıyor (1 → 2 → 4 → …). 5 saat sonra kaç bakteri olur?",
        opts: [
          { t: "32", ok: true, why: "Her saat sayı 2 ile çarpılır: 1 → 2 → 4 → 8 → 16 → 32. Yani 2 × 2 × 2 × 2 × 2 = 2⁵ = 32." },
          { t: "10", why: "Her saat 2 eklenmiş gibi hesaplanmış (toplama). Burada her saat sayı 2 ile çarpılıyor (katlanıyor)." },
          { t: "25", why: "5² yapılmış; burada taban 2, üs 5: 2⁵." },
          { t: "16", why: "4 saat sonraki değer; 5 saat için bir kez daha çarpmak gerekir." }
        ],
        explain: "Her adımda aynı sayıyla çarparak büyümeye üstel büyüme denir; sayı hızla çok büyür. Bunu bir fonksiyon olarak yazacağız: f(x) = 2ˣ." },

      { type: "text", title: "Önce sözlük: üstel fonksiyon, taban, üs",
        say: "Üstel fonksiyon f x eşittir a üzeri x biçimindedir. Burada a tabandır ve pozitif olup bire eşit olmaz. x ise üstür.",
        html: `<div class="grid"><div class="card pick"><h3>f(x) = aˣ</h3><p class="small"><b>a</b> taban, <b>x</b> üs. a, 1 ve negatif sayı olmamalı: <b>a > 0 ve a ≠ 1</b>.</p></div></div>
<p class="callout why" style="margin-top:12px"><b>Neden a > 0, a ≠ 1?</b> a = 1 olsaydı 1ˣ = 1 her x için sabit olurdu (büyüme yok). a negatif olsaydı (−2)^(1/2) gibi değerler gerçek sayı olmazdı. Fonksiyonu <b>tüm gerçek sayılarda</b> tanımlı yapabilmek için taban pozitif seçilir.</p>
<p><b>Negatif ve sıfır üs:</b> a⁰ = 1 ve a⁻ⁿ = 1/aⁿ. (2⁻³ = 1/8.) Neden? Üs her adımda 1 azalırken sonuç a'ya bölünür: 8, 4, 2, 1, 1/2, 1/4… (2³, 2², 2¹, 2⁰, 2⁻¹, 2⁻²).</p>` },

      { type: "mcq", q: "2⁻³ ifadesinin değeri kaçtır?",
        opts: [
          { t: "1/8", ok: true, why: "2⁻³ = 1/2³ = 1/8. Negatif üs, tabanın tersini alıp üssü pozitif yapar." },
          { t: "−8", why: "Negatif üs sonucu negatif yapmaz; sonucu bölme (ters alma) ile küçültür." },
          { t: "−6", why: "2 · (−3) yapılmış; üs çarpma değil tekrarlı çarpmadır." },
          { t: "1/6", why: "2 · 3 = 6 alınmış; doğrusu 2 × 2 × 2 = 8." }
        ],
        explain: "Negatif üs = pozitif üslü ifadenin tersi: a⁻ⁿ = 1/aⁿ." },

      { type: old[1].type, title: "Tabanı değiştir, eğriye bak", say: old[1].say, intro: old[1].intro, cfg: old[1].cfg },

      { type: "mcq", predict: true, q: "Tabanı 1'den küçük seçersen (örneğin a = 1/2) f(x) = (1/2)ˣ fonksiyonu x arttıkça nasıl değişir?",
        opts: [
          { t: "Azalır; eğri sağa gittikçe x eksenine yaklaşır.", ok: true, why: "1/2 ile tekrar tekrar çarpmak değeri küçültür: 1, 1/2, 1/4, 1/8… Azalan fonksiyon." },
          { t: "Artar.", why: "Artış yalnızca a > 1 iken olur. 1'den küçük bir sayıyla çarpmak küçültür." },
          { t: "Sabit kalır.", why: "Sabit kalmak için a = 1 gerekirdi; o durum tanımdan dışlanır." },
          { t: "Negatif değer alır.", why: "Pozitif tabanın kuvvetleri her zaman pozitif kalır." }
        ],
        explain: "a > 1 → artan, 0 < a < 1 → azalan. İkisinde de grafik (0, 1) noktasından geçer." },

      { type: "text", title: "Nitel özellikler: üstel fonksiyon hakkında neler söyleyebiliriz?",
        say: "a üzeri x her gerçek sayıda tanımlıdır ve sonucu her zaman pozitiftir. Hiçbir zaman sıfır olmaz. Taban bir den büyükse artan, bir ile sıfır arasındaysa azalandır.",
        html: `<table class="tbl"><tbody>
<tr><td>Tanım kümesi</td><td>ℝ (tüm gerçek sayılar)</td></tr><tr><td>Görüntü kümesi</td><td>(0, ∞): her değer pozitif</td></tr><tr><td>İşaret</td><td>her x için f(x) > 0</td></tr><tr><td>Sıfırı</td><td>yok (x eksenini kesmez)</td></tr><tr><td>y eksenini kestiği nokta</td><td>(0, 1)</td></tr><tr><td>Artanlık–azalanlık</td><td>a > 1 artan; 0 < a < 1 azalan</td></tr><tr><td>Bire birlik</td><td>bire bir (farklı x → farklı değer)</td></tr><tr><td>Teklik–çiftlik</td><td>ne tek ne çift</td></tr><tr><td>Örtenlik</td><td>ℝ'ye örten değil (negatifler hiç alınmaz)</td></tr></tbody></table>
<p class="callout why" style="margin-top:12px"><b>Neden hep pozitif?</b> Pozitif sayıları çarpmak, bölmek ya da kök almak pozitif sonuç verir.</p>` },

      { type: "mcq", q: "f(x) = 3ˣ fonksiyonunun görüntü kümesi aşağıdakilerden hangisidir?",
        opts: [
          { t: "(0, ∞)", ok: true, why: "3ˣ her zaman pozitiftir ve x büyüdükçe sınırsız artar; x çok negatif olunca 0'a yaklaşır ama 0 olmaz." },
          { t: "ℝ", why: "Negatif değerler hiç alınmaz; görüntü kümesi tüm gerçek sayılar olamaz." },
          { t: "[0, ∞)", why: "0 değerini hiçbir x için almaz (3ˣ = 0 denkleminin çözümü yok)." },
          { t: "(1, ∞)", why: "x < 0 için 3ˣ, 0 ile 1 arasında değerler alır; yalnızca x > 0 için değer 1'den büyüktür." }
        ],
        explain: "Üstel fonksiyonun görüntüsü (0, ∞)'dur; 0 ve negatifler alınmaz." },

      { type: "text", title: "Türetilmiş fonksiyonlar: g(x) = k·f(mx ± r) ± s",
        say: "Referans fonksiyonun grafiğini kaydırarak, esneterek ve yansıtarak yeni fonksiyonlar elde ederiz. Dıştaki toplama grafiği yukarı aşağı kaydırır. Üstteki toplama grafiği sağa sola kaydırır.",
        html: `<ul class="body"><li><b>+ s</b> (dışarıda): grafik <b>yukarı</b> kayar; −s aşağı. Örnek: 2ˣ + 3.</li><li><b>x ± r</b> (üstte): grafik <b>sola/sağa</b> kayar. 2^(x−1) grafiği 2ˣ'i 1 birim sağa kaydırır.</li><li><b>k ile çarpma</b>: dikey olarak gerer; k negatifse x eksenine göre yansıtır.</li><li><b>m ile çarpma</b> (üstte): yatay sıkıştırır/genişletir.</li></ul>
<p class="callout why"><b>Birlikte kullan:</b> 2ˣ + 3'ün görüntü kümesi (3, ∞); 2^(x−1)'in görüntü kümesi hâlâ (0, ∞) (yatay kayma görüntüyü değiştirmez).</p>` },

      { type: "mcq", q: "g(x) = 2ˣ − 3 fonksiyonunun görüntü kümesi ve y eksenini kestiği nokta aşağıdakilerden hangisidir?",
        opts: [
          { t: "Görüntü (−3, ∞); y eksenini (0, −2) noktasında keser.", ok: true, why: "2ˣ > 0 olduğundan 2ˣ − 3 > −3: görüntü (−3, ∞). x = 0 için g(0) = 2⁰ − 3 = 1 − 3 = −2." },
          { t: "Görüntü (0, ∞); y eksenini (0, 1) noktasında keser.", why: "Bu 2ˣ'in özellikleri; −3 ile grafik 3 birim aşağı kaymış." },
          { t: "Görüntü (−3, ∞); y eksenini (0, −3) noktasında keser.", why: "Görüntü doğru, ama x = 0'da g(0) = 1 − 3 = −2; −3 değil. −3 alt sınırdır, değeri hiç almaz." },
          { t: "Görüntü (3, ∞); y eksenini (0, 4) noktasında keser.", why: "−3 yerine +3 alınmış: o zaman 2ˣ + 3 olurdu." }
        ],
        explain: "Dışarıdaki sabit, görüntü kümesini kaydırır. y-kesim için x = 0'ı yerine koy." },

      { type: "text", title: "e sayısı: doğanın tabanı",
        say: "e yaklaşık iki virgül yedi bir sekiz olan özel bir sayıdır. Sürekli büyüme olaylarında doğal olarak ortaya çıkar. e üzeri x fonksiyonu üstel fonksiyonların en çok kullanılanlarından biridir.",
        html: `<p><b>e ≈ 2,718</b> sayısı, bileşik faizin sürekli işlendiği durumda ortaya çıkan özel bir sayıdır. Nüfus artışı, radyoaktif bozunma ve sıvıların soğuması gibi doğal olaylar çoğunlukla <b>eˣ</b> ile modellenir.</p>
<p class="callout why"><b>Neden özel?</b> Tabanı e olan üstel fonksiyon, her noktada kendi değeri kadar hızla büyür; yüksek matematikte bu özellik formülleri sadeleştirir. 11. sınıfta önemli olan: <b>2 < e < 3</b> olduğundan, x > 0 için 2ˣ < eˣ < 3ˣ.</p>` },

      { type: "mcq", q: "x = 2 için 2ˣ, eˣ ve 3ˣ değerleri küçükten büyüğe nasıl sıralanır?",
        opts: [
          { t: "2ˣ < eˣ < 3ˣ", ok: true, why: "x = 2 > 0 için taban büyüdükçe değer büyür: 2² = 4 < e² ≈ 7,4 < 3² = 9. (2 < e < 3 olduğundan.)" },
          { t: "3ˣ < eˣ < 2ˣ", why: "Sıralama ters yapılmış: pozitif üste büyük taban daha büyük değer verir." },
          { t: "eˣ < 2ˣ < 3ˣ", why: "e ≈ 2,718 > 2 olduğundan eˣ, 2ˣ'ten büyüktür." },
          { t: "Hepsi eşittir.", why: "Tabanlar farklı olduğu için x > 0'da değerler farklıdır." }
        ],
        explain: "Pozitif üs için tabanı büyük olan, daha büyük sonuç verir (x = 0'da hepsi 1 olur)." },

      { type: "mcq", q: "Bir kasabanın nüfusu 2000 kişi ve her yıl %10 artıyor. Nüfus x yıl sonra f(x) = 2000 · 1,1ˣ ile modelleniyor. 2 yıl sonraki nüfus kaç olur?",
        opts: [
          { t: "2420", ok: true, why: "f(2) = 2000 · 1,1² = 2000 · 1,21 = 2420. Her yıl 1,1 ile çarpmak %10 artış demektir." },
          { t: "2400", why: "Her yıl 200 eklenmiş (doğrusal artış). Oysa artış her yıl bir önceki yılın %10'u; ikinci yıl artış daha büyük." },
          { t: "2200", why: "Yalnızca bir yıllık artış hesaplanmış." },
          { t: "4000", why: "2 ile çarpılmış; %10 artış 1,1 ile çarpmadır." }
        ],
        explain: "Yüzde artışı sabit olunca üstel model kullanılır; sabit miktarda artışta ise doğrusal." },

      { type: "reflect", q: "Peki ya neden? Üstel fonksiyon neden hiç sıfır olmaz ve neden negatif değer almaz? Bakteri örneğiyle düşün: ikiye katlanmanın tersini (geriye giderek) yaparsan sayı nasıl değişir?",
        hint: "Örnek düşünce: Geriye gidince sayı her adımda ikiye bölünür: 32, 16, 8, … 1, 1/2, 1/4, … Böyle bölmeye devam ettikçe sayı 0'a yaklaşır ama hiç 0 olmaz; çünkü pozitif bir sayıyı 2'ye bölmek pozitif bir sayı verir. Negatif olmaz çünkü pozitif sayıları çarpmak ya da bölmek asla negatif yapmaz." },

      { type: "text", title: "Özet ve sınavda ne işe yarar",
        say: "Üstel fonksiyon a üzeri x biçimindedir. Taban bir den büyükse artan, bir ile sıfır arasındaysa azalandır. Görüntü kümesi pozitif gerçek sayılardır.",
        html: `<ul class="body"><li>f(x) = aˣ, <b>a > 0, a ≠ 1</b>. Tanım ℝ, görüntü (0, ∞). Grafik (0, 1)'den geçer.</li><li><b>a > 1</b>: artan; <b>0 < a < 1</b>: azalan. Bire bir, ne tek ne çift.</li><li>a⁰ = 1, a⁻ⁿ = 1/aⁿ.</li><li>g(x) = k·f(mx ± r) ± s: dışarıdaki sabit görüntüyü kaydırır, içerideki ± sağa/sola kaydırır.</li><li><b>e ≈ 2,718</b>; 2 < e < 3.</li></ul>
<p class="callout">Sınavda şöyle görürsün: bir üstel fonksiyonun görüntü kümesi, y-kesimi, artan/azalan olduğu ya da bir büyüme probleminin değeri sorulur. Önce tabanı incele (1'den büyük mü, küçük mü?), sonra dönüşümleri sırayla uygula.</p>` }
    ]
  };
})();
