/* Matematik keşfi (11. sınıf, 2. Tema: Geometrik Şekiller — 2.1–2.4): Çokgenler, dörtgenler. Özgün içerik (CC BY-NC-SA 4.0). */
KESIF.lessons["mat-cokgen"] = {
  id: "mat-cokgen", subject: "mat", title: "Bal peteği neden altıgen? Çokgenlerin açıları ve köşegenleri", minutes: 25,
  grade: "11. sınıf — 2. Tema, 2.1–2.4 (dörtgenler, çokgenlerin sınıflandırılması, dışbükey çokgenler); kazanım kodu MEB ODSGM dağılım tablosundan (MAT.11.x) alınmıştır",
  hook: "Bir çokgeni üçgenlere bölersen iç açıların toplamını bulursun: kaç üçgene bölünüyor?",
  steps: [
    { type: "text", title: "Üçgenden çokgene",
      say: "Üçgenin iç açılarının toplamı yüz seksen derecedir. Dörtgen, beşgen ve altıgeni üçgenlere bölersek toplamlarını bulabiliriz.",
      html: `<p class="big">Üçgenin iç açıları toplamı <b>180°</b>. Peki dörtgen, beşgen, altıgen için?</p>
<p>Bal peteğinin gözleri, futbol topundaki parçalar, karo döşemeler… hepsi <b>çokgen</b>. Çokgenin açılarını ezberlemek yerine <b>üçgenlere bölerek</b> bulacağız.</p>
<p class="callout">Soru: n kenarlı bir çokgeni bir köşesinden çizilen köşegenlerle üçgenlere bölersek <b>kaç üçgen</b> oluşur? Kaydırıcıyla kendin dene.</p>` },
    { type: "polygon", title: "Kenar sayısını değiştir: üçgenler, açılar, köşegenler",
      say: "Kaydırıcıyla kenar sayısını değiştir. Bir köşeden çizilen köşegenler çokgeni üçgenlere ayırıyor. Tabloda üçgen sayısı, iç açılar toplamı ve köşegen sayısı güncelleniyor.",
      intro: "Kaydırıcıyla <b>n</b>'i değiştir (3–12). <b>Bir köşeden çizilen köşegenler</b> çokgeni üçgenlere ayırır; tablodan <b>üçgen sayısı</b>, <b>iç açılar toplamı</b> ve <b>köşegen sayısı</b> nasıl değişiyor, bak. <b>Tüm köşegenleri</b> da göster.",
      cfg: { start: 5 } },
    { type: "mcq", predict: true, q: "Bir köşesinden çizilen köşegenlerle 7 kenarlı dışbükey bir çokgen kaç üçgene ayrılır?",
      opts: [
        { t: "5", ok: true, why: "n = 7 için n − 2 = 5 üçgen oluşur (kaydırıcıda n = 7 yaparak da görebilirsin)." },
        { t: "7", why: "Üçgen sayısı kenar sayısıyla aynı değil; iki komşu kenar ve onları birleştiren yan yana üçgenler çıkıyor." },
        { t: "4", why: "n − 3 = 4 bir köşeden çizilen köşegen sayısı; üçgen sayısı bir fazla: 5." },
        { t: "6", why: "n − 1 değil, n − 2 üçgen oluşur." }
      ],
      explain: "Bir köşeden n − 3 köşegen çizilir ve çokgen n − 2 üçgene ayrılır." },
    { type: "text", title: "Formüller nereden geliyor?",
      say: "Bir köşeden n eksi iki üçgen oluşur, her üçgenin iç açıları toplamı yüz seksen. O hâlde iç açılar toplamı n eksi iki çarpı yüz seksen. Dış açılar her çokgende üç yüz altmıştır.",
      html: `<ul class="body"><li><b>İç açılar toplamı:</b> n − 2 üçgen, her biri 180° → <span class="math">(n − 2) · 180°</span>. (n = 4 için 360°, n = 6 için 720°.)</li>
<li><b>Dış açılar toplamı:</b> her köşede iç + dış = 180°. Toplam n · 180°; iç toplam (n − 2) · 180°; fark <b>360°</b>. Dışbükey çokgende dış açılar toplamı <b>her zaman 360°</b>.</li>
<li><b>Düzgün çokgen:</b> tüm kenarlar ve tüm açılar eşit. Bir iç açı: <span class="math">(n − 2) · 180° ÷ n</span>; bir dış açı: <span class="math">360° ÷ n</span>.</li>
<li><b>Köşegen sayısı:</b> her köşeden n − 3 köşegen, n köşe → n(n − 3). Her köşegen iki uçtan sayıldığı için <span class="math">n(n − 3) ÷ 2</span>.</li></ul>
<p class="callout why"><b>Neden böyle?</b> Formülleri ezberlemene gerek yok: bir çokgen çiz, bir köşeden üçgenle ve gerisi geliyor.</p>` },
    { type: "mcq", q: "Dışbükey 10 kenarlı bir çokgenin kaç köşegeni vardır?",
      opts: [
        { t: "35", ok: true, why: "n(n − 3) ÷ 2 = 10 · 7 ÷ 2 = 35." },
        { t: "70", why: "n(n − 3) = 70; her köşegen iki uçtan sayıldığı için ikiye bölmeyi unutmuşsun." },
        { t: "45", why: "10 · 9 ÷ 2 = 45 bütün doğru parçaları (kenarlar dahil); köşegen için 10 kenar çıkarılır: 35." },
        { t: "30", why: "10 · 3 gibi bir hata; bir köşeden n − 3 = 7 köşegen çıkar." }
      ],
      explain: "Köşegen = tüm doğru parçaları − kenarlar: 45 − 10 = 35." },
    { type: "text", title: "Dörtgen ailesi: kim kimin özel hâli?",
      say: "Kare hem dikdörtgen hem eşkenar dörtgendir. Dikdörtgen ve eşkenar dörtgen de birer paralelkenardır. Köşegenlerin özellikleri bu şekilleri ayırır.",
      html: `<table class="tbl"><thead><tr><th>Şekil</th><th>Kenarlar</th><th>Köşegenler</th></tr></thead><tbody>
<tr><td>Paralelkenar</td><td>karşılıklı paralel ve eşit</td><td>birbirini ortalar</td></tr>
<tr><td>Dikdörtgen</td><td>açılar 90°</td><td>eşit, birbirini ortalar</td></tr>
<tr><td>Eşkenar dörtgen</td><td>4 kenar eşit</td><td>birbirini <b>dik</b> ortalar, açıortay</td></tr>
<tr><td>Kare</td><td>4 kenar eşit, açılar 90°</td><td>eşit ve dik ortalar</td></tr></tbody></table>
<p><b>Kapsama:</b> kare ⊂ dikdörtgen ⊂ paralelkenar ve kare ⊂ eşkenar dörtgen ⊂ paralelkenar. Yani her kare bir dikdörtgendir ama her dikdörtgen kare değildir.</p>` },
    { type: "mcq", q: "Hem eşkenar dörtgen hem dikdörtgen olan şekil hangisidir?",
      opts: [
        { t: "Kare", ok: true, why: "Dört kenarı eşit (eşkenar dörtgen) ve dört açısı 90° (dikdörtgen)." },
        { t: "Paralelkenar", why: "Genel paralelkenarın kenarları eşit ya da açıları 90° olmak zorunda değil." },
        { t: "Yamuk", why: "Yamuk bu özelliklerin ikisini birden taşımak zorunda değildir." },
        { t: "Deltoid", why: "Deltoidin 4 kenarı eşit olmak zorunda değildir." }
      ],
      explain: "Kare = eşkenar dörtgen ∩ dikdörtgen." },
    { type: "reflect", q: "Peki ya neden? Her dışbükey çokgende dış açılar toplamı neden hep 360°'dir? (Çokgenin çevresinde bir tur yürüdüğünü düşün.)",
      hint: "Örnek düşünce: Çokgenin çevresinde bir tur yürürken her köşede dış açı kadar dönersin; başladığın yöne geri döndüğünde toplam dönüşün tam bir tur, yani 360° olur. Kenar sayısı ne olursa olsun bu değişmez." },
    { type: "reflect", q: "Gerçek hayatta (mimari, doğa, mühendislik) çokgenlerin kullanıldığı bir örnek yaz. Neden o çokgen seçilmiş olabilir?",
      hint: "Örnek düşünce: Bal peteği altıgendir; düzlemi boşluk bırakmadan örtebilen düzgün çokgenler (eşkenar üçgen, kare, düzgün altıgen) arasında aynı alanı en az çevreyle (yani en az balmumuyla) kaplayan altıgendir. Dörtgenler ve üçgenler de köprü ve çatılarda sağlamlık için kullanılır (üçgen biçimini bozmaz)." },
    { type: "text", title: "Bugünün özeti",
      say: "Bugünkü keşif tamamlandı. İç açılar toplamı n eksi iki çarpı yüz seksen. Dış açılar toplamı üç yüz altmış. Köşegen sayısı n çarpı n eksi üç bölü iki.",
      html: `<ul class="body"><li>Bir köşeden <b>n − 3 köşegen</b>, <b>n − 2 üçgen</b>.</li><li>İç açılar toplamı <b>(n − 2) · 180°</b>; dış açılar toplamı <b>360°</b>.</li><li>Düzgün çokgende iç açı (n − 2) · 180° ÷ n, dış açı 360° ÷ n.</li><li>Köşegen sayısı <b>n(n − 3) ÷ 2</b>.</li><li>Kare ⊂ dikdörtgen ⊂ paralelkenar; kare ⊂ eşkenar dörtgen ⊂ paralelkenar.</li></ul>
<p class="callout">Hız değil bakış: bir çokgenle karşılaşınca "üçgenlere bölsem?" diye sor; formül zaten orada.</p>` }
  ]
};
