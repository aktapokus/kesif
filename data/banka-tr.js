/* Soru bankası: Türkçe (TYT dil bilgisi/yazım/paragraf) ve felsefe grubu (mantık, sosyoloji, psikoloji). Özgün sorular, adım adım çözümlü.
   Etiket: yks = "ders:kod" (data/yks-kazanim.js). Türkçe testi Türk Dili ve Edebiyatı kazanımlarına (dil bilgisi: A.4.15, ana düşünce: A.4.4) bağlanmıştır. */
(function () {
  var M = (KESIF.meta = KESIF.meta || {});
  function Q(id, subj, key, sinav, zor, q, right, rightWhy, wrongs, hint, steps, explain, passage) {
    var opts = [{ t: right, ok: true, why: rightWhy }];
    wrongs.forEach(function (w) { opts.push({ t: w[0], why: w[1] }); });
    var o = { id: id, subject: subj, q: q, opts: opts, hint: hint, solution: steps, explain: explain || "" };
    if (passage) o.passage = passage;
    KESIF.daily.push(o);
    M[id] = { yks: key, sinav: sinav, zor: zor, kaynak: "özgün" };
  }
  var TYT = ["tyt"], DG = "edeb:A.4.15";
  /* ---------- TÜRKÇE ---------- */
  Q("tk1", "tur", DG, TYT, 1, "Aşağıdaki cümlelerin hangisinde yazım yanlışı vardır?", "Hiç bir şey söylemedi.", "\"Hiçbir\" tek sözcük olarak bitişik yazılır: \"Hiçbir şey söylemedi.\"",
    [["Herkes toplantıya geldi.", "\"Herkes\" doğru yazılmıştır."], ["Her gün erken kalkar.", "\"Her gün\" ayrı yazılır; doğru."], ["Birçok kişi geldi.", "\"Birçok\" bitişik yazılır; doğru."]],
    "\"Hiçbir\", \"birçok\", \"herkes\" gibi sözcüklerin yazılışını hatırla.", ["\"Hiçbir\" bitişik yazılır.", "Cümledeki \"Hiç bir\" ayrı yazılmış: yanlış.", "Diğer cümlelerin yazımı doğru."], "Bitişik: hiçbir, birçok, herkes. Ayrı: her gün, bir gün.");
  Q("tk2", "tur", DG, TYT, 2, "Aşağıdaki cümlelerin hangisinde \"ki\" bağlacının yazımı yanlıştır?", "Bakalımki ne olacak.", "Bağlaç olan \"ki\" ayrı yazılır: \"Bakalım ki ne olacak.\"",
    [["Masadaki kitap benim.", "Burada \"-ki\" ekidir; bitişik yazılır, doğru."], ["Sen ki bu işi bilirsin, bize yardım et.", "Bağlaç \"ki\" ayrı yazılmış; doğru."], ["Duyduğuma göre gelecekmiş.", "Cümlede \"ki\" yok; yazım doğru."]],
    "Bağlaç mı, ek mi? Bağlaç \"ki\" ayrı yazılır.", ["\"Bakalım ki\" ifadesinde ki bağlaçtır.", "Bağlaç ayrı yazılır: \"Bakalım ki\".", "Bitişik yazım yanlıştır."], "Bağlaç ki ayrı; aitlik eki -ki bitişik.");
  Q("tk3", "tur", DG, TYT, 1, "\"Güzel bir yazı yazdı.\" cümlesindeki \"güzel\" sözcüğü hangi türdendir?", "Sıfat", "\"Güzel\", \"yazı\" adını niteliyor; adı niteleyen sözcük sıfattır.",
    [["Zarf", "Zarf eylemi niteler; burada isim niteleniyor."], ["İsim", "\"Yazı\" isim; \"güzel\" onu niteliyor."], ["Zamir", "İsmin yerini tutmuyor."]],
    "\"Güzel\" neyi niteliyor: ismi mi eylemi mi?", ["\"Güzel\" kelimesi \"yazı\" adını niteler.", "Adı niteleyen sözcük sıfattır."], "İsmi niteleyen sıfat; eylemi niteleyen zarf.");
  Q("tk4", "tur", DG, TYT, 2, "\"Güzel konuştu.\" cümlesindeki \"güzel\" sözcüğü hangi türdendir?", "Zarf", "\"Güzel\", \"konuştu\" eylemini niteliyor; eylemi niteleyen sözcük zarftır.",
    [["Sıfat", "Sıfat ismi niteler; burada isim yok, eylem niteleniyor."], ["İsim", "İsim olsaydı ek alırdı; burada eylemin nasıl yapıldığı anlatılıyor."], ["Edat", "Edat tek başına anlam taşımaz; \"güzel\" anlamlıdır."]],
    "\"Nasıl konuştu?\" sorusunun cevabı.", ["\"Nasıl konuştu?\" → güzel.", "Eylemi niteleyen sözcük zarftır."], "Aynı sözcük cümledeki göreviyle tür değiştirir.");
  Q("tk5", "tur", DG, TYT, 1, "\"Kitap + ı → kitabı\" sözcüğünde hangi ses olayı vardır?", "Ünsüz yumuşaması", "Sert ünsüz \"p\", ünlüyle başlayan ek alınca yumuşak \"b\"ye dönüşmüştür.",
    [["Ünlü düşmesi", "Bir ünlü düşmemiş."], ["Ünsüz benzeşmesi", "Ünsüz benzeşmesinde ek, sert ünsüzden sonra sertleşir; burada kök ünsüzü yumuşadı."], ["Ses türemesi", "Yeni bir ses eklenmemiş."]],
    "p → b dönüşümüne bak.", ["Kök: kitap; sonunda sert ünsüz \"p\".", "Ünlüyle başlayan ek (-ı) alınca \"p\" → \"b\".", "Bu olay ünsüz yumuşaması."], "p, ç, t, k → b, c, d, ğ.");
  Q("tk6", "tur", DG, TYT, 2, "Aşağıdaki sözcüklerin hangisinde ünlü düşmesi vardır?", "ağzım", "ağız + ım → ağzım: ikinci hecedeki ünlü (ı) düşmüştür.",
    [["kitabı", "Ünsüz yumuşaması vardır."], ["çocuğu", "Ünsüz yumuşaması vardır."], ["gözlük", "Ünlü düşmesi yok; göz + lük birleşmesi."]],
    "Ekle birleşince köklerdeki bir ünlü kayboluyor mu?", ["ağız + ım: \"ağız\" sözcüğündeki \"ı\" ekle birleşince düşer.", "Sonuç: ağzım.", "Diğer sözcüklerde ünsüz değişimi var."], "Ünlü düşmesi: ağız → ağzım, burun → burnum.");
  Q("tk7", "tur", DG, TYT, 2, "\"Ali dün kitabı okudu.\" cümlesinde \"dün\" sözcüğü hangi öğedir?", "Zarf tümleci", "\"Dün\" yüklemin ne zaman gerçekleştiğini bildirir: zaman bildiren zarf tümleci.",
    [["Özne", "Özne \"Ali\"dir."], ["Nesne", "Nesne \"kitabı\"dır."], ["Yüklem", "Yüklem \"okudu\"dur."]],
    "\"Ne zaman okudu?\" sorusunun cevabı hangi öğedir?", ["\"Ne zaman okudu?\" → dün.", "Zaman bildirir: zarf tümleci."], "Zarf tümleci: yüklemi zaman, durum, yer yönünden tamamlar.");
  Q("tk8", "tur", DG, TYT, 2, "\"Çocuklar bahçede top oynadı.\" cümlesinde \"bahçede\" sözcüğü hangi öğedir?", "Dolaylı tümleç", "\"Bahçede\" bulunma durum eki (-de) almış: \"nerede oynadı?\" → dolaylı tümleç.",
    [["Özne", "Özne \"çocuklar\"dır."], ["Belirtisiz nesne", "Nesne \"top\"tur."], ["Yüklem", "Yüklem \"oynadı\"dır."]],
    "\"Nerede oynadı?\" Cevap hangi öğe? Hâl eki ne?", ["\"Nerede oynadı?\" → bahçede.", "\"-de\" bulunma hâl eki → dolaylı tümleç."], "-e, -de, -den eki alan öğe: dolaylı tümleç.");
  Q("tk9", "tur", DG, TYT, 2, "Aşağıdaki cümlelerin hangisinde gereksiz sözcük kullanımından kaynaklanan bir anlatım bozukluğu vardır?", "Geleceğe yönelik ileriye dönük planlar yaptık.", "\"Geleceğe yönelik\" ve \"ileriye dönük\" aynı anlamı karşılar; biri gereksizdir.",
    [["Çocuk, annesine sarılarak ağladı.", "Anlatım düzgün."], ["Kitabı masanın üstüne bıraktım.", "Anlatım düzgün."], ["Bu konu hakkında düşüncelerini açıkladı.", "Anlatım düzgün."]],
    "Aynı anlamı iki kez veren sözcük ya da öbek var mı?", ["\"Geleceğe yönelik\" = \"ileriye dönük\".", "Aynı anlam iki kez verilmiş (gereksiz sözcük kullanımı).", "Diğer cümlelerde böyle bir tekrar yok."], "Anlamca tekrar = gereksiz sözcük.");
  Q("tk10", "tur", "edeb:A.4.4", TYT, 1, "Bu parçanın ana düşüncesi hangisidir?", "Kitap okumak hem bilgi verir hem düşünme ve hayal etme becerisini geliştirir.", "Parça \"yalnızca … değildir; aynı zamanda\" kalıbıyla asıl vurguyu ikinci yarıya (düşünme ve hayal etme) yapar.",
    [["Kitaplar pahalı olduğu için herkes okuyamaz.", "Metinde fiyatla ilgili bir söz yok."], ["Bilgi edinmenin tek yolu kitaptır.", "Metin \"tek yol\" demiyor."], ["Hayal gücü yalnızca kitaptan gelir.", "Metin \"yalnızca\" demiyor; aşırı yorum."]],
    "\"Yalnızca … değildir; aynı zamanda …\" kalıbında asıl vurgu hangi yarıda?", ["Kalıp: \"yalnızca bilgi edinmek değildir; aynı zamanda …\".", "Yazar asıl yargıyı ikinci kısma koyar.", "Ana düşünce: kitap okumak bilgiyle birlikte düşünme ve hayal etmeyi de geliştirir."], "Ana düşünce = yazarın asıl yargısı.", "Kitap okumak, yalnızca bilgi edinmek değildir; aynı zamanda düşünme ve hayal etme becerisini de geliştirir.");
  /* ---------- MANTIK / SOSYOLOJİ / PSİKOLOJİ ---------- */
  Q("mn1", "fel", "man:1.4", TYT, 1, "Gözlemlenen birkaç özel örnekten genel bir sonuca varmaya ne ad verilir?", "Tümevarım", "Özelden genele giden akıl yürütme tümevarımdır.",
    [["Tümdengelim", "Tümdengelim genelden özele gider."], ["Analoji", "Analoji, benzerlikten benzerliğe geçer."], ["Hipotez", "Hipotez, sınanacak varsayımdır."]],
    "Özelden genele mi, genelden özele mi?", ["Birkaç özel örnek gözlenir.", "Bunlardan genel bir sonuç çıkarılır.", "Bu akıl yürütme tümevarımdır."], "Tümevarım: özel → genel. Tümdengelim: genel → özel.");
  Q("mn2", "fel", "man:1.4", TYT, 2, "\"Bütün memeliler sıcakkanlıdır. Yunus bir memelidir. O hâlde yunus sıcakkanlıdır.\" akıl yürütmesi hangi türdendir?", "Tümdengelim", "Genel bir önermeden (bütün memeliler) özel bir sonuca (yunus) varılıyor.",
    [["Tümevarım", "Tümevarım özelden genele gider."], ["Analoji", "Burada benzerlik üzerinden bir çıkarım yok."], ["Eksik tümevarım", "Bir kısım örnekten genelleme yapılmıyor."]],
    "Birinci önerme genel mi özel mi?", ["\"Bütün memeliler …\" genel bir önerme.", "Sonuç tek bir canlı için (yunus).", "Genelden özele: tümdengelim."], "Genel öncül + özel öncül → özel sonuç.");
  Q("sy1", "fel", "sos:1.3", TYT, 1, "Sosyoloji terimini ilk kez kullanan ve bu bilimin kurucusu sayılan düşünür kimdir?", "Auguste Comte", "\"Sosyoloji\" terimini ilk kez Auguste Comte kullanmıştır.",
    [["Platon", "Antik Yunan filozofudur; sosyolojinin kurucusu değildir."], ["Ibn Haldun", "Toplum bilimine öncü sayılır ama terimi Comte kullanmıştır."], ["Sigmund Freud", "Psikanalizin kurucusudur."]],
    "Terimi ilk kez kullanan kişiyi hatırla (19. yüzyıl, Fransız).", ["Terimi ilk kez kullanan Fransız düşünür Auguste Comte'tur.", "Bu yüzden sosyolojinin kurucusu kabul edilir."], "Comte = sosyoloji terimi.");
  Q("sy2", "fel", "sos:1.6", TYT, 1, "Bireyin toplumun değer, norm ve davranış kalıplarını öğrenmesi sürecine ne denir?", "Sosyalleşme", "Sosyalleşme, bireyin toplumun kültürünü öğrenip topluma uyum sağlama sürecidir; aile, okul ve arkadaş grubu gibi unsurlarla gerçekleşir.",
    [["Toplumsal değişme", "Toplumun yapısındaki zaman içinde değişimdir."], ["Toplumsal tabakalaşma", "Toplumun gruplara ayrılmasıdır."], ["Kültürel yayılma", "Kültür ögelerinin bir toplumdan ötekine geçmesidir."]],
    "Birey toplumun üyesi olmayı nasıl öğrenir?", ["Birey değer ve normları öğrenir.", "Bu süreç sosyalleşmedir.", "Aile, okul, arkadaş grubu, medya gibi unsurlar etkilidir."], "Sosyalleşme hayat boyu sürer.");
  Q("ps1", "fel", "psi:1.1", TYT, 1, "Psikolojinin inceleme konusu hangisidir?", "Davranış ve zihinsel süreçler", "Psikoloji, davranışı ve zihinsel süreçleri bilimsel yöntemlerle inceler.",
    [["Yalnızca toplumsal kurumlar", "Toplumsal kurumları sosyoloji inceler."], ["Yalnızca bedenin yapısı", "Bedenin yapısını biyoloji/anatomi inceler."], ["Geçmiş olaylar", "Geçmiş olayları tarih inceler."]],
    "Psikoloji kimin neyini inceler?", ["Psikoloji bireyin davranışını inceler.", "Zihinsel süreçler (algı, bellek, düşünme) de konudur."], "Psikoloji: davranış + zihinsel süreçler.");
  Q("ps2", "fel", "psi:1.4", TYT, 2, "Değişkenlerin kontrol edilerek neden-sonuç ilişkisinin incelendiği psikoloji araştırma yöntemi hangisidir?", "Deney yöntemi", "Deneyde bağımsız değişken kontrollü biçimde değiştirilir ve bağımlı değişkene etkisi gözlenir.",
    [["Gözlem yöntemi", "Gözlemde değişken müdahale edilmeden izlenir."], ["Anket yöntemi", "Anket görüşleri ve tutumları toplar; neden-sonuç kanıtlamaz."], ["Görüşme yöntemi", "Görüşme kişinin kendi anlatımına dayanır."]],
    "Hangi yöntemde araştırmacı değişkeni kendisi değiştirir ve kontrol eder?", ["Kontrollü müdahale gerekiyor.", "Bağımsız değişken değiştirilir, bağımlı değişken ölçülür.", "Bu, deney yöntemidir."], "Deney = kontrol + neden-sonuç.");
})();
