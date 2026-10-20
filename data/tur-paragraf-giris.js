/* Türkçe keşfi: Paragrafa sıfırdan giriş — konu, ana düşünce, yardımcı düşünce. Standart: docs/DERS-STANDARDI.md. Metinler özgündür (CC BY-NC-SA 4.0). */
KESIF.lessons["tur-paragraf-giris"] = {
  id: "tur-paragraf-giris", subject: "tur", title: "Paragraf nedir? (sıfırdan başlıyoruz)", minutes: 25,
  grade: "TYT Türkçe — paragraf: konu, ana düşünce, yardımcı düşünce",
  hook: "Arkadaşın sana 'dün çok kötü bir gün geçirdim, önce telefonum bozuldu, sonra otobüsü kaçırdım' dedi. Sence asıl derdi ne?",
  steps: [
    { type: "mcq", predict: true, q: "Arkadaşın şöyle anlatıyor: 'Dün çok kötü bir gün geçirdim. Sabah telefonum bozuldu, sonra otobüsü kaçırdım, akşam da şemsiyem yoktu, sırılsıklam oldum.' Arkadaşın sana ne söylemek istiyor?",
      opts: [
        { t: "Dün her şey ters gitti, üzgün.", ok: true, why: "Üç olayı (telefon, otobüs, yağmur) tek cümleyle özetledin. İşte paragraf okumak tam olarak budur." },
        { t: "Telefonu bozuldu.", why: "Bu üç olaydan sadece biri. Asıl söylemek istediği, hepsinin toplamı." },
        { t: "Şemsiyesi yok.", why: "Bu da yalnızca bir ayrıntı." }
      ],
      explain: "Hiç ders çalışmadan paragraf okudun: ayrıntıları topladın, 'asıl derdi' buldun." },

    { type: "text", title: "Paragraf nedir?",
      say: "Paragraf, tek bir düşünceyi anlatan cümleler grubudur. Bir paragrafta bir konu vardır, bir de bu konu hakkında söylenen asıl düşünce vardır.",
      html: `<p class="big">Paragraf = <b>tek bir fikri</b> anlatan cümleler topluluğu.</p>
<div class="grid"><div class="card"><h3>Cümle</h3><p class="small">Tek bir anlam bildirir.</p></div><div class="card pick"><h3>Paragraf</h3><p class="small">Birkaç cümle, <b>tek ortak fikir</b>.</p></div></div>
<p class="callout why" style="margin-top:16px">Sınavda paragraf sorusu = "Bu metin sana ne söylüyor?" sorusunun farklı biçimleri.</p>` },

    { type: "text", title: "Üç kavram: konu, ana düşünce, yardımcı düşünce",
      say: "Konu, metnin hakkında konuştuğu şeydir. Ana düşünce, o konu hakkında yazarın asıl söylediğidir. Yardımcı düşünceler ise ana düşünceyi destekleyen ayrıntılardır.",
      html: `<div class="grid"><div class="card"><h3>Konu</h3><p class="small">"Neyden bahsediyor?" <br><i>Örnek: uyku</i></p></div>
<div class="card pick"><h3>Ana düşünce</h3><p class="small">"Konu hakkında asıl ne diyor?" <br><i>Örnek: Düzenli uyku başarıyı artırır.</i></p></div>
<div class="card"><h3>Yardımcı düşünce</h3><p class="small">Ana düşünceyi destekleyen ayrıntı. <br><i>Örnek: Uykusuz kalan öğrenci dersi öğrenemez.</i></p></div></div>
<p class="callout why" style="margin-top:16px"><b>Benzetme:</b> Konu = filmin adı. Ana düşünce = filmin vermek istediği mesaj. Yardımcı düşünceler = mesajı anlatan sahneler.</p>` },

    { type: "mcq", passage: "Müzik dinlemek yalnızca eğlence değildir. Yorgun bir zihin müzikle dinlenir, sakinleşir ve yeniden odaklanır. Bu yüzden birçok kişi çalışmaya başlamadan önce sevdiği şarkıları açar.",
      q: "Bu parçanın KONUSU nedir?",
      opts: [
        { t: "Müzik dinlemek", ok: true, why: "Parça baştan sona müzik dinlemekten söz ediyor. Konu 'neyden bahsediliyor?' sorusunun cevabıdır." },
        { t: "Müzik dinlemek zihni dinlendirir.", why: "Bu, konu hakkında söylenen yargı: yani ana düşünce. Konu tek bir söz öbeğidir." },
        { t: "Çalışmaya başlamak", why: "Parçada çalışma yalnızca bir örnek olarak geçiyor." }
      ],
      explain: "Konu kısa bir ad gibidir ('müzik dinlemek'). Cümle gibi bir yargı değildir." },

    { type: "mcq", passage: "Müzik dinlemek yalnızca eğlence değildir. Yorgun bir zihin müzikle dinlenir, sakinleşir ve yeniden odaklanır. Bu yüzden birçok kişi çalışmaya başlamadan önce sevdiği şarkıları açar.",
      q: "Bu parçanın ANA DÜŞÜNCESİ nedir?",
      opts: [
        { t: "Müzik, zihni dinlendirip odaklanmayı kolaylaştırır.", ok: true, why: "Yazar 'yalnızca eğlence değildir' diyerek asıl yargısına geliyor: müzik zihne iyi gelir. Bu tam cümle bir yargıdır." },
        { t: "Müzik dinlemek", why: "Bu konu. Ana düşünce, konu hakkındaki yargıdır." },
        { t: "Herkes çalışmadan önce müzik açar.", why: "'Birçok kişi' denmiş, 'herkes' denmemiş. Üstelik bu sadece bir ayrıntı." }
      ],
      explain: "Ana düşünceyi bulurken: 'Yazar bu konu hakkında ne diyor?' diye sor." },

    { type: "text", title: "Soru kökü sözlüğü: sınav sana nasıl sorar?",
      say: "Aynı paragraf için sınav farklı sorular sorar. Köke bakıp neyi istediğini anlamak, çözümün yarısıdır.",
      html: `<div class="grid"><div class="card"><h3>"Parçanın konusu"</h3><p class="small">Kısa bir ad: <i>hakkında ne?</i></p></div>
<div class="card pick"><h3>"Ana düşünce / vurgulanan / anlatılmak istenen"</h3><p class="small">Yargı cümlesi: <i>ne diyor?</i></p></div>
<div class="card"><h3>"Yardımcı düşünce"</h3><p class="small">Destek ayrıntı.</p></div>
<div class="card"><h3>"Parçaya göre … söylenemez / çıkarılamaz"</h3><p class="small">Metinde olmayanı bul.</p></div></div>` },

    { type: "tap", q: "Paragraftaki ANA DÜŞÜNCE cümlesine dokun.",
      sents: [
        { t: "Sabahları kahvaltı yapan öğrenciler derse daha iyi odaklanır.", why: "Bir gözlem; ana yargıyı destekleyen ayrıntı gibi duruyor." },
        { t: "Çünkü beyin, güne enerji almadan başlamayı sevmez.", why: "Nedenini açıklıyor; yardımcı düşünce." },
        { t: "Bu yüzden kahvaltı, günün en önemli öğünüdür.", ok: true, why: "'Bu yüzden' ile önceki cümlelerden bir yargıya varılıyor; asıl söylenen bu." },
        { t: "Yine de birçok kişi sabah acelesinden bu öğünü atlıyor.", why: "Durum tespiti; yargı değil." }
      ],
      explain: "Sonuç sözcükleri (bu yüzden, demek ki, bu nedenle) çoğu zaman ana düşünceyi işaret eder." },

    { type: "text", title: "Üç yaygın tuzak",
      say: "Birincisi: ayrıntıyı ana düşünce sanmak. İkincisi: metinde olmayanı eklemek. Üçüncüsü: bazı yerine her demek.",
      html: `<div class="grid"><div class="card"><h3>1. Ayrıntı ≠ ana düşünce</h3><p class="small">Örnek ve sayı yardımcıdır.</p></div>
<div class="card"><h3>2. Fazla yorum</h3><p class="small">Yazar söylemediğini sen ekleme.</p></div>
<div class="card pick"><h3>3. "Bazı" ≠ "her"</h3><p class="small">Kelimenin kapsamına dikkat.</p></div></div>` },

    { type: "mcq", passage: "Bazı insanlar sabah erken kalkınca günün daha verimli geçtiğini söylüyor. Ancak bu, herkes için geçerli bir kural değil; kimi insanın zihni akşam saatlerinde daha canlı çalışıyor. Önemli olan, kendi ritmini tanımak.",
      q: "Bu parçada asıl vurgulanan düşünce nedir?",
      opts: [
        { t: "Verimli olmanın saati kişiden kişiye değişir; kendi ritmini bilmek önemlidir.", ok: true, why: "'Ancak' sonrasında yazarın asıl düşüncesi geliyor." },
        { t: "Sabah erken kalkmak herkesi verimli yapar.", why: "Metin bunu söyleyen 'bazı insanlar'ın görüşünü aktarıyor ve sonra çürütüyor." },
        { t: "Akşam çalışmak sabahtan iyidir.", why: "Metin böyle bir kıyas yapmıyor; sadece 'kimi insan' diyor." }
      ],
      explain: "'Ancak, oysa, fakat' gibi bağlaçlar fikir dönüşü işaretidir; ana düşünce çoğu zaman dönüşten sonradır." },

    { type: "reflect", q: "Peki ya neden? Yazarlar düşüncelerini neden tek bir cümleyle söylemeyip örnekler ve ayrıntılar da ekler? Sen bir arkadaşına bir şey anlatırken ne yapıyorsun?",
      hint: "Örnek düşünce: Sadece yargı söylersen karşındaki 'neden?' diye sorar. Örnek ve ayrıntı, söylediğine inanmasını sağlar. Paragraf okurken de örnekleri 'yargıyı destekleyen kanıt' olarak gör, yargının kendisi gibi değil." },

    { type: "text", title: "Bugünün özeti ve sınavda ne işe yarar",
      say: "Konu kısa bir addır, ana düşünce konu hakkında söylenen asıl yargıdır, yardımcı düşünce ise destektir.",
      html: `<ul class="body"><li><b>Konu</b>: neyden bahsediliyor?</li><li><b>Ana düşünce</b>: konu hakkında asıl ne diyor?</li><li><b>Yardımcı düşünce</b>: ana düşünceyi destekleyen ayrıntı.</li></ul>
<p class="callout">Sınavda TYT Türkçe'nin yaklaşık 26–28 sorusu paragraf. Önce sorunun kökünü oku, sonra parçada <b>dönüş</b> ve <b>sonuç</b> bağlaçlarını ara.</p>` }
  ]
};
