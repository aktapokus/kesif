/* Matematik keşfi (11. sınıf, 1. Tema 1.2): Başkalarının oluşturduğu iki niceliksel değişkenli verileri inceleme. Özgün içerik (CC BY-NC-SA 4.0).
   Tüm veri ve haber örnekleri ÖĞRETİM İÇİN UYDURULMUŞTUR; gerçek bir araştırma ya da kişi/kurum değildir. */
(function () {
  var GRUP = {
    title: "Çalışma süresi ↔ deneme neti", xt: "günlük çalışma süresi (saat)", yt: "deneme neti",
    x: [3, 3.5, 4, 4.5, 5, 5.5, 6, 1, 1.5, 2, 2.5, 3, 3.5],
    y: [20, 22, 25, 26, 29, 31, 34, 50, 52, 55, 57, 60, 62],
    g: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1], gn: ["Hazırlığı az olan öğrenciler", "Hazırlığı güçlü öğrenciler"],
    note: "Örnek (uydurma) veri: 13 öğrenci, iki hazırlık grubu."
  };
  var KAHVE = {
    title: "Kahve ↔ not", xt: "günlük kahve (fincan)", yt: "yıl sonu not ortalaması",
    x: [0, 1, 1, 2, 2, 3, 3, 4], y: [58, 64, 62, 71, 69, 76, 79, 84], note: "Örnek (uydurma) veri: üniversite öğrencileri; kahve içenler genelde daha ileri sınıflarda."
  };
  KESIF.lessons["mat-veri-inceleme"] = {
    id: "mat-veri-inceleme", subject: "mat", title: "Bu grafiğe güvenebilir miyim? Başkasının verisini sorgula", minutes: 25,
    grade: "11. sınıf — 1. Tema, 1.2 Başkaları tarafından oluşturulan iki niceliksel değişkenli verileri inceleme (MEB 11. sınıf ders kitabı içindekiler); kazanım kodu resmî programdan doğrulanacak",
    hook: "Bir haberde 'kahve içenlerin notları daha yüksek' diyor. Doğru mu, yoksa grafik seni mi kandırıyor?",
    steps: [
      { type: "text", title: "Haberde bir grafik gördün",
        say: "Bir haber sitesi, kahve içenlerin notlarının daha yüksek olduğunu söylüyor ve bir grafik gösteriyor. Veriyi başkası topladı. Sen neye bakmalısın?",
        html: `<div class="callout"><b>HABER (uydurma örnek):</b> "Araştırma: Günde 3 fincan kahve içen öğrencilerin notları %25 daha yüksek!"</div>
<p>Veriyi sen toplamadın; başkası topladı, çizdi ve bir sonuç söyledi. Senin işin <b>kabul etmek ya da reddetmek değil, sorgulamak.</b> Bugün şu soruları sormayı öğreneceksin:</p>
<ol class="body"><li><b>Eksen:</b> grafiğin eksenleri nereden başlıyor, ölçek ne?</li>
<li><b>Örneklem:</b> kimler ölçülmüş, kaç kişi, nasıl seçilmiş?</li>
<li><b>Gruplar:</b> farklı gruplar karışmış olabilir mi?</li>
<li><b>Sebep:</b> ilişki mi var, sebep mi var?</li>
<li><b>Kaynak:</b> kim topladı, neden?</li></ol>` },

      { type: "bar", title: "Aynı veri, iki farklı hikâye: eksen nereden başlıyor?",
        say: "İki okulun ortalama neti çok yakın. Dikey eksenin başlangıcını değiştir. Çubuklar arasındaki fark nasıl değişiyor?",
        intro: "İki okulun deneme ortalaması: <b>Okul A: 92</b>, <b>Okul B: 95</b>. Gerçekte fark küçük. Kaydırıcıyla <b>dikey eksenin başlangıcını</b> yukarı çek: çubuklar arasındaki fark ne oluyor? Altta gerçek ve görünen oranı karşılaştır.",
        cfg: { bars: [{ n: "Okul A", v: 92 }, { n: "Okul B", v: 95 }], yt: "ortalama net", top: 100 } },

      { type: "mcq", predict: true, q: "Bir grafikte dikey eksen 90'dan başlıyor ve çubuklar 92 ile 95 gösteriyor. Bu grafik ne yapabilir?",
        opts: [
          { t: "Küçük bir farkı olduğundan çok daha büyük gösterebilir", ok: true, why: "Eksen 90'dan başlayınca çubuk yükseklikleri 2 ile 5 gibi görünür: B'nin çubuğu A'nınkinin 2,5 katı. Gerçekte oran sadece 1,03." },
          { t: "Farkı olduğundan küçük gösterir", why: "Eksen başlangıcını yukarı çektikçe fark büyümüş görünür; tersi olmaz." },
          { t: "Hiçbir şeyi değiştirmez, çubuklar hep aynı oranı korur", why: "Çubuk uzunluğu eksen başlangıcından ölçülür; başlangıç değişirse oran değişir." },
          { t: "Veriyi yanlış yapar", why: "Veri aynı; yanıltan, verinin sunuluş biçimidir." }
        ],
        explain: "Çubuk grafiklerde eksenin 0'dan başlayıp başlamadığına her zaman bak." },

      { type: "text", title: "Grafiği okurken kontrol listesi",
        say: "Başkasının grafiğine bakarken eksen, örneklem, gruplar, sebep ve kaynak sorularını sor.",
        html: `<ul class="body"><li><b>Eksen ve ölçek:</b> çubuk grafik 0'dan mı başlıyor? Eksendeki aralıklar eşit mi? Eksen başlıkları ve birimler var mı?</li>
<li><b>Örneklem:</b> kaç kişi/gözlem (<b>n</b>)? Rastgele mi seçilmiş, yoksa ancak belli bir gruba mı sorulmuş? 12 kişilik bir veriden büyük sonuç çıkmaz.</li>
<li><b>Aralık:</b> hangi zaman dilimi/değer aralığı gösterilmiş? İşine yarayan kısım mı seçilmiş (cherry-picking)? Aralık dışına tahmin yapılıyor mu?</li>
<li><b>Gruplar:</b> farklı alt gruplar karışmış olabilir mi? Gruplara ayırınca yön değişir mi? (Birazdan göreceksin.)</li>
<li><b>Sebep:</b> ilişki sebep demek değil. Üçüncü bir etken var mı?</li>
<li><b>Kaynak:</b> veriyi kim topladı? Bir şey satmaya çalışan biri mi?</li></ul>
<p class="callout why"><b>Neden?</b> Aynı veriyle birbirine zıt iki hikâye anlatılabilir. Sorgulayan okur, hangisinin veriden mi yoksa anlatıcının tercihinden mi geldiğini görür.</p>` },

      { type: "scatter", title: "Gruplar karışınca yön tersine dönebilir",
        say: "Çalışma süresi ile deneme neti arasındaki ilişkiye bak. Tüm veriye bakınca ne görüyorsun? Sonra grupları renkle ayır.",
        intro: "Önce <b>tüm veriye</b> bak: çalışma süresi arttıkça net <b>düşüyor</b> gibi mi? Sonra <b>Eğilim doğrusunu göster</b> ve <b>Grupları renkle ayır</b> kutularını işaretle. İki grubun ayrı ayrı eğimlerine bak.",
        cfg: { sets: [GRUP, KAHVE] } },

      { type: "mcq", q: "Tüm veride çalışma süresi arttıkça net düşüyor görünüyor, ama iki grup ayrı ayrı incelenince her grupta net artıyor. Doğru yorum hangisidir?",
        opts: [
          { t: "Gruplar hazırlık düzeyi bakımından çok farklı; genel eğilim bu fark yüzünden yanıltıcı, grup bilgisi hesaba katılmalı", ok: true, why: "Hazırlığı az olanlar daha çok çalışıyor ama başlangıçta daha düşük netteler; güçlüler az çalışıp yüksek netteler. Gruplar karışınca genel eğilim tersine dönüyor." },
          { t: "Çalışmak neti düşürür", why: "Her grubun kendi içinde çalışmanın neti artırdığını görüyoruz. Genel eğilim, gruplar karıştığı için yanıltıyor." },
          { t: "Veri yanlış toplanmıştır", why: "Veri gayet tutarlı; yanıltan, grupları ayırmadan tek bir doğruyla özetlemek." },
          { t: "Gruplara ayırmak veriyi bozar", why: "Ayırmak veriyi bozmaz; gizlenen yapıyı görünür kılar." }
        ],
        explain: "Alt gruplara bakmadan çıkarılan genel sonuç yanıltıcı olabilir (bu olay 'Simpson paradoksu' diye bilinir)." },

      { type: "mcq", q: "Bir kütüphanede çıkış kapısında 100 kişiye 'Düzenli kitap okur musunuz?' sorulmuş, %98'i 'evet' demiş. Haber: 'Türkiye'de gençlerin %98'i düzenli kitap okuyor.' Sorun nedir?",
        opts: [
          { t: "Örneklem taraflı: kütüphaneye gelenler zaten okuma alışkanlığı olan bir grup", ok: true, why: "Veri kimlerden toplandı? Kütüphaneden çıkan insanlardan. Bu, tüm gençleri temsil etmez." },
          { t: "100 kişi her zaman yeterli, sorun yok", why: "Sayı kadar, kişilerin nasıl seçildiği de önemli. Taraflı seçilmiş büyük bir örneklem de yanıltır." },
          { t: "Yüzde değerleri tam sayı olmamalı", why: "Sorun yüzdelerin biçimi değil, kimlerin ölçüldüğü." },
          { t: "Anket soruları Türkçe olmalıydı", why: "Soru dilinin bu örnekle ilgisi yok; temsil sorunu var." }
        ],
        explain: "Genelleme için örneklem, hedef kitleyi temsil etmeli (rastgele seçim)." },

      { type: "mcq", q: "Bir enerji içeceği firması 'içeceğimizi kullananların dikkat süresi %30 daha uzun' diyor ve bir grafik gösteriyor. İlk sormak gereken soru hangisi?",
        opts: [
          { t: "Veriyi kim, hangi koşullarda, kaç kişiyle topladı?", ok: true, why: "Kaynak ve yöntem belirsizse sonuca güvenilmez. Ürün satan kişinin kendi araştırması çıkar çatışması içerir." },
          { t: "Grafik renkli mi?", why: "Renk, verinin güvenilirliğiyle ilgili değil." },
          { t: "Başka marka içecekler de var mı?", why: "İlginç ama ilk soru kaynak ve yöntem; bu sonra gelir." },
          { t: "%30 sayısı yuvarlak mı?", why: "Yuvarlaklık güvenilirlik göstermez; asıl soru verinin nasıl elde edildiği." }
        ],
        explain: "Kaynak, yöntem ve n (gözlem sayısı) güvenilirliğin ilk üç sorusudur." },

      { type: "mcq", q: "Bir araştırmada 12 öğrenciyle yapılan ölçümde r = 0,85 bulunmuş ve 'bütün öğrencilerde bu ilişki geçerlidir' denmiş. En uygun eleştiri hangisidir?",
        opts: [
          { t: "12 gözlem az: örneklem küçükken r çok oynak olur, tüm öğrencilere genelleme yapmak için yeterli değil", ok: true, why: "Küçük n'de birkaç nokta r'yi çok değiştirir ve genellemek tehlikelidir." },
          { t: "r = 0,85 yüksek değildir", why: "0,85 güçlü bir değer; sorun değerin kendisi değil, kaç gözleme dayandığı." },
          { t: "r hiçbir zaman genellenemez", why: "Yeterince büyük ve temsil edici örneklemle r genellenebilir; mesele küçük ve belirsiz örneklem." },
          { t: "Öğrenciler yerine yetişkinler ölçülmeli", why: "Soru kim ölçüldüğünden çok, kaç kişinin ölçüldüğü ve genellemenin yetip yetmediği." }
        ],
        explain: "Kural: n küçükse temkinli ol; sonuçlar yalnızca ölçülen gruba aittir." },

      { type: "reflect", q: "Peki ya neden? Bir grafiğin eksenini nereden başlatacağını seçen kişi neden sonucu etkileyebilir? Dürüst bir grafik çizen kişi ne yapmalıdır?",
        hint: "Örnek düşünce: Eksen başlangıcı, çubuklar arasındaki görsel oranı belirler; kısaltılmış bir eksen küçük farkı büyük gösterir. Dürüst grafikte çubuk grafikler 0'dan başlar (çizgi grafiklerde bile değişim kısa eksenle abartılabilir, o zaman eksen açıkça belirtilir), eksen başlıkları ve birimler yazılır, veri kaynağı ve gözlem sayısı verilir." },

      { type: "reflect", q: "Kendi hayatından 'iki şey birlikte artıyor' ama sebep olmayabilecek bir örnek yaz (haberlerde ya da sosyal medyada gördüğün bir iddia olabilir). Sence ortak etken ne olabilir?",
        hint: "Örnek düşünce: 'Çok video izleyen öğrencilerin notu düşük' → belki ikisini birden etkileyen uyku düzeni ya da ders çalışma ortamı vardır. 'Spor yapanlar daha mutlu' → belki zaman ve imkâna sahip olmak hem sporu hem mutluluğu etkiliyor. Önemli olan: önce sebebin yönünü, sonra üçüncü bir etkeni sorgulamak." },

      { type: "text", title: "Bugünün özeti",
        say: "Bugünkü keşif tamamlandı. Başkasının grafiğine bakarken eksene, örneklemin kim ve kaç kişi olduğuna, alt gruplara, sebep-sonuç iddiasına ve kaynağa bak.",
        html: `<ul class="body"><li><b>Eksen:</b> 0'dan mı başlıyor? Kısaltılmış eksen farkı büyütür.</li>
<li><b>Örneklem:</b> kim, kaç kişi (n), nasıl seçildi? Taraflı seçim → genelleme yok.</li>
<li><b>Gruplar:</b> alt grupları ayırınca eğilim tersine dönebilir.</li>
<li><b>Sebep:</b> ilişki ≠ sebep; üçüncü etken olabilir.</li>
<li><b>Kaynak:</b> kim topladı, neden?</li></ul>
<p class="callout">Hız değil bakış: bir haberdeki grafik sana "ne olduğunu" değil, <i>birinin ne göstermek istediğini</i> anlatıyor olabilir.</p>` }
    ]
  };
})();
