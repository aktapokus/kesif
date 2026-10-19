/* Türkçe keşfi: Paragrafta ana düşünceye giden yol. Tüm metinler özgündür (CC BY-NC-SA 4.0). */
KESIF.lessons["tur-paragraf"] = {
  id: "tur-paragraf", subject: "tur", title: "Paragrafın kilit cümlesi", minutes: 25,
  grade: "TYT Türkçe — paragraf (ana düşünce, yapı, anlatım biçimi); Maarif kazanım eşlemesi doğrulanacak",
  hook: "Bir paragrafı 'kaldırma testi' ile çöz.",
  steps: [
    { type: "text", title: "Yazar bu paragrafı neden yazdı?",
      say: "Her paragrafın bir konusu, bir ana düşüncesi ve bu düşünceyi destekleyen ayrıntıları vardır. Konu, hakkında konuşulan şeydir. Ana düşünce, o konuda söylenen şeydir. Kaldırma testi: hangi cümle çıkarılırsa paragraf anlamını yitirir?",
      html: `<p class="big">Bir tweet de, haber başlığı da, paragraf da aynı soruya cevap verir: <i>"Yazar bana ne söylemek istiyor?"</i></p>
<div class="grid">
 <div class="card"><h3>Konu</h3><p class="small">Hakkında konuşulan şey.<br><i>"Navigasyon"</i></p></div>
 <div class="card pick"><h3>Ana düşünce</h3><p class="small">Konu hakkında <b>söylenen yargı</b>.<br><i>"Navigasyon bazı becerilerimizi kullanmamızı engelliyor."</i></p></div>
 <div class="card"><h3>Destek</h3><p class="small">Örnek, karşılaştırma, ayrıntı. Yargıyı ikna edici kılar.</p></div>
</div>
<p class="callout why" style="margin-top:16px"><b>Kaldırma testi:</b> Hangi cümleyi silersem paragraf <i>asıl derdini</i> kaybeder? O cümle kilit cümledir. Örnekleri silsen de dert aynı kalır.</p>` },

    { type: "tap", q: "Aşağıdaki paragrafta kilit cümleyi (yazarın asıl yargısını) dokunarak seç.",
      sents: [
        { t: "Eskiden bir şehri tanımak için haritaya bakmak yeterliydi.", why: "Zemin hazırlayan giriş. Silsen de yargı ortada kalır: asıl derdi söylemiyor." },
        { t: "Bugün telefondaki konum noktası bizi hedefe götürüyor, ama yolu öğrenmemizi sağlamıyor.", why: "Dikkat: 'ama' ile yargıya yaklaşıyor. Fakat bu hâlâ bir gözlem; yargı bir sonraki cümlelerde netleşiyor." },
        { t: "Bazı sürücüler yıllarca aynı güzergâhı kullandığı hâlde, uygulama kapanınca evine dönmekte zorlanıyor.", why: "Bu bir örnek. Örnek ayrıntıdır; ana düşünce değildir." },
        { t: "Demek ki teknoloji bize kolaylık verirken bazı zihinsel becerilerimizi kullanmaktan alıkoyabiliyor.", ok: true, why: "'Demek ki' bir sonuç bağlacı: yazar önceki cümlelerden yargısını çıkarıyor. Kilit cümle bu." }
      ],
      explain: "Kilit cümleyi bulmanın ipucu: sonuç bağlaçları (demek ki, bu nedenle, sonuç olarak) ve dönüş bağlaçları (ama, oysa, fakat) çoğu zaman yargının yanındadır." },

    { type: "mcq", passage: "Eskiden bir şehri tanımak için haritaya bakmak yeterliydi. Bugün telefondaki konum noktası bizi hedefe götürüyor, ama yolu öğrenmemizi sağlamıyor. Bazı sürücüler yıllarca aynı güzergâhı kullandığı hâlde, uygulama kapanınca evine dönmekte zorlanıyor. Demek ki teknoloji bize kolaylık verirken bazı zihinsel becerilerimizi kullanmaktan alıkoyabiliyor.",
      q: "Bu parçanın ana düşüncesi aşağıdakilerden hangisidir?",
      opts: [
        { t: "Teknoloji, kolaylık sağlarken bazı zihinsel becerilerimizin kullanılmasını engelleyebilir.", ok: true, why: "Kilit cümlenin genel ifadesi. Hem kapsamı (teknoloji) hem yargıyı (kolaylık ↔ beceri kaybı) taşıyor." },
        { t: "Sürücüler evlerine dönmekte zorlanıyor.", why: "Örnek ayrıntıyı ana düşünce sanmak. Örnek, yargıyı desteklemek için seçilmiş." },
        { t: "Haritalar artık işe yaramıyor.", why: "Yazar bunu söylemiyor. 'Eskiden harita yeterliydi' demek, 'artık yaramıyor' demek değil; metinde olmayanı çıkarmışsın." },
        { t: "Teknolojiden uzak durmalıyız.", why: "Yazar öneri veya yasak getirmiyor, bir durumu tespit ediyor. 'Gereklidir/kaçınmalıyız' gibi bir yargı metinde yok." },
        { t: "Her sürücü navigasyona bağımlı olmuştur.", why: "Aşırı genelleme. Metin 'bazı sürücüler' diyor; 'her' demek kapsamı büyütmek." }
      ],
      explain: "Seçeneklerde sık görülen üç tuzak: ayrıntıyı ana düşünce yapmak, yazarın söylemediğini eklemek, 'bazı'yı 'her' yapmak." },

    { type: "text", title: "Yazarın düşünce kurma araçları: bağlaçlar",
      say: "Yazar düşüncesini işaret sözcükleriyle kurar. Demek ki, bu nedenle sonuç bildirir. Ama, oysa, fakat dönüş yapar, önceki fikri çevirir. Örneğin ise örnek verir.",
      html: `<div class="grid">
 <div class="card"><h3>Sonuç</h3><p class="small"><b>demek ki, bu nedenle, dolayısıyla, sonuç olarak</b><br>Yargı genelde burada.</p></div>
 <div class="card pick"><h3>Dönüş</h3><p class="small"><b>ama, oysa, fakat, ancak</b><br>Yazar bir fikri geri çevirip <i>asıl</i> fikrine geçer.</p></div>
 <div class="card"><h3>Örnek</h3><p class="small"><b>örneğin, mesela</b><br>Destek: yargı değil.</p></div>
</div>
<p class="callout why" style="margin-top:16px"><b>Hızlı okumanın dürüst hâli:</b> her kelimeyi hızlı okumak değil, işaret bağlaçlarını yakalayıp yargının yerini tahmin etmek. Önce ilk ve son cümleye, sonra bağlaçlara bak; geri kalanı destek olarak oku.</p>` },

    { type: "mcq", passage: "Gençlere sık sık “Kitap okumuyorsunuz” denir. Oysa bugün hiçbir kuşak bu kadar çok yazı okumuyor: mesajlar, altyazılar, haber başlıkları, oyun diyalogları… Sorun okumanın azalması değil, okunanın kısa ve dağınık olması. Uzun bir metni baştan sona izlemek ise ayrı bir beceri ve bu beceri ancak sürekli denenerek güçleniyor.",
      q: "Parçadaki “Oysa” sözcüğü ne işlev görüyor?",
      opts: [
        { t: "Baştaki yargıyı çevirip yazarın asıl düşüncesine geçişi sağlıyor.", ok: true, why: "Önce yaygın görüş ('okumuyorsunuz'), 'oysa' ile bu görüşün karşısına yazarın düşüncesi (çok okuyoruz, sorun biçimde) geliyor." },
        { t: "Bir örnek vermeye başlıyor.", why: "'Örneğin' örnek açar. 'Oysa' ise önceki cümleyle zıt bir şey söyler." },
        { t: "Önceki cümleden bir sonuç çıkarıyor.", why: "Sonuç bağlaçları 'demek ki, bu yüzden'. 'Oysa' tam tersi: önceki cümleyi çürütür." },
        { t: "İki şeyi benzerlik yönünden karşılaştırıyor.", why: "Karşılaştırma ile çelişme farklı. Burada iki fikir benzemiyor, biri diğerine karşı çıkıyor." }
      ],
      explain: "Dönüş bağlacından sonrası genelde yazarın 'asıl' dediği kısımdır." },

    { type: "mcq", passage: "Gençlere sık sık “Kitap okumuyorsunuz” denir. Oysa bugün hiçbir kuşak bu kadar çok yazı okumuyor: mesajlar, altyazılar, haber başlıkları, oyun diyalogları… Sorun okumanın azalması değil, okunanın kısa ve dağınık olması. Uzun bir metni baştan sona izlemek ise ayrı bir beceri ve bu beceri ancak sürekli denenerek güçleniyor.",
      q: "Bu parçada asıl vurgulanan düşünce hangisidir?",
      opts: [
        { t: "Gençlerin okuma sorunu, azlıktan çok okunanın kısa ve dağınık olmasından kaynaklanır; uzun metin okuma ise pratikle gelişir.", ok: true, why: "Dönüşten sonraki yargıyı ve son cümledeki yargıyı birlikte taşıyor." },
        { t: "Gençler hiç kitap okumuyor.", why: "Yazar tam tersini söylüyor: bu, 'oysa' ile çevrilen görüş." },
        { t: "Mesajlaşma okuma alışkanlığını bozar.", why: "Yazar mesajları kötülemiyor; 'okunanın kısa olması'ndan söz ediyor. Metinde olmayan bir değerlendirme eklemişsin." },
        { t: "Uzun metin okumak eskiden daha kolaydı.", why: "Eskiyle kıyaslama metinde yok. Yazar bir beceriden ve pratikten söz ediyor." }
      ],
      explain: "Yapı: yaygın görüş → 'oysa' dönüşü → asıl yargı → sonuç. Böyle paragraflarda ana düşünce dönüşten sonrasında aranır." },

    { type: "tap", q: "20 saniye: önce 'Demek ki' gibi yargı bağlacını bul, sonra kilit cümleyi seç.",
      sents: [
        { t: "Kimi insan yeni bir şey öğrenirken hata yapmaktan çekinir.", why: "Durumun tespiti. Yargı henüz yok." },
        { t: "Oysa bisiklet sürmeyi öğrenen hiç kimse ilk denemede düşmeden pedal çeviremez.", why: "Dönüş cümlesi, ama bisiklet bir örnek. Yargıyı örnekle destekliyor." },
        { t: "Düşmek, dengeyi anlamanın bir parçasıdır.", why: "Örneğin yorumu. Yargıya çok yakın ama genel bir ifade değil, bisikletin içinde kalıyor." },
        { t: "Demek ki hatadan korkmak değil, hatadan ders çıkarmak öğrenmenin yoludur.", ok: true, why: "Sonuç bağlacı + genel yargı. Ana düşünce bu." }
      ],
      explain: "Önce bağlaca git. 'Demek ki' burada 'önceki ayrıntılardan şunu çıkarıyorum' diyor." },

    { type: "reflect", q: "Peki ya neden? Yazar yargısını anlatmak için neden bisiklet örneğini seçmiş? Başka bir örnek (ör. yüzme, yemek yapmak) olsaydı ne değişirdi?",
      hint: "Örnek düşünce: Bisiklet herkesin bildiği, düşmenin öğrenmenin içinde olduğu somut bir deneyim. Okur 'ben de düşmüştüm' diye kendini örneğin içinde buluyor. Yüzme ya da yemek de olurdu ama düşmenin görünür bir 'hata' olduğu örnek bisiklettir. Örnek seçimi, yazarın okuru nasıl ikna edeceğini gösterir." },

    { type: "text", title: "Bugünün özeti",
      say: "Bugünkü keşif tamamlandı. Konu, ana düşünce ve destek farklı şeylerdir. Kilit cümleyi bağlaçlar işaret eder. Soru seçeneklerinde ayrıntıyı ana düşünce yapma, metinde olmayanı ekleme, bazıyı her yapma tuzaklarına dikkat et.",
      html: `<ul class="body"><li><b>Konu ≠ ana düşünce ≠ destek.</b></li>
<li>Kilit cümle için: <b>kaldırma testi</b> + sonuç/dönüş bağlaçları.</li>
<li>Üç tuzak: <b>ayrıntıyı ana düşünce yapmak</b>, <b>metinde olmayanı eklemek</b>, <b>"bazı"yı "her" yapmak</b>.</li></ul>
<p class="callout">Hız, bu bakış oturunca kendiliğinden gelir; bugün hız değil bakış çalıştık.</p>` }
  ]
};
