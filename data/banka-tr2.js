/* Soru bankası: Türkçe (TYT Türkçe testi, 40 soru) — konu başlıklarına göre. Özgün sorular ve özgün parçalar; her soruda ipucu, "nasıl düşünmeliyiz" notu ve adım adım çözüm.
   Etiket: meta.kn = konu adı (resmî kazanım kodu olmayan konular için serbest etiket; bank "n:ders|konu" anahtarıyla gruplar). */
(function () {
  var M = (KESIF.meta = KESIF.meta || {});
  function Qk(id, kn, zor, q, right, rightWhy, wrongs, hint, think, steps, passage) {
    var opts = [{ t: right, ok: true, why: rightWhy }];
    wrongs.forEach(function (w) { opts.push({ t: w[0], why: w[1] }); });
    var o = { id: id, subject: "tur", q: q, opts: opts, hint: hint, think: think, solution: steps };
    if (passage) o.passage = passage;
    KESIF.daily.push(o);
    M[id] = { kn: kn, sinav: ["tyt"], zor: zor, kaynak: "özgün" };
  }
  var SA = "Sözcükte anlam", CA = "Cümlede anlam", PG = "Paragraf", SB = "Ses bilgisi", YZ = "Yazım kuralları", NK = "Noktalama", ST = "Sözcük türleri", CO = "Cümlenin öğeleri", AB = "Anlatım bozukluğu";
  /* ---------- Sözcükte anlam ---------- */
  Qk("tq1", SA, 1, "Aşağıdaki cümlelerin hangisinde \"göz\" sözcüğü mecaz anlamda kullanılmıştır?", "Yeni aldığımız dolabın üçüncü gözüne ayakkabıları yerleştirdik.", "Dolabın bölmesine \"göz\" denmesi, sözcüğün asıl anlamından (görme organı) aktarılmasıdır: mecaz.",
    [["Uykusu gelince gözlerini kapatıp yattı.", "Görme organı: gerçek anlam."], ["Gözüne bir toz kaçınca durup sildi.", "Görme organı: gerçek anlam."], ["Hikâyeyi dinlerken gözleri yaşardı.", "Görme organı: gerçek anlam."]],
    "Sözcüğün ilk akla gelen anlamı \"görme organı\". Hangi cümlede o anlamdan uzaklaşılmış?", "Önce sözcüğün temel anlamını söyle, sonra her cümlede o anlamda mı diye kontrol et.",
    ["\"Göz\"ün temel (gerçek) anlamı: görme organı.", "Üç cümlede görme organı kastediliyor.", "Dolabın bölmesine de benzerlikten dolayı \"göz\" denmiş: mecaz anlam."]);
  Qk("tq2", SA, 1, "Aşağıdaki sözcük çiftlerinden hangisi eş anlamlıdır?", "dost – arkadaş", "İkisi de aynı ya da çok yakın anlamı karşılar.",
    [["uzak – yakın", "Zıt anlamlı."], ["gelmek – gitmek", "Zıt anlamlı."], ["kitap – defter", "Birbirinden farklı nesneler."]],
    "Eş anlam: aynı şeyi anlatan iki ayrı sözcük.", "Çiftleri tek tek \"aynı mı, tersi mi, ilgisiz mi?\" diye sorgula.",
    ["Eş anlamlı: aynı anlam.", "uzak–yakın ve gelmek–gitmek zıt; kitap–defter ilgisiz.", "dost–arkadaş eş anlamlı."]);
  Qk("tq3", SA, 2, "Aşağıdaki sözcük çiftlerinden hangisi sesteştir (yazılışı ve okunuşu aynı, anlamları farklı)?", "yüz (sayı) – yüz (surat)", "Aynı yazılır ve okunur, anlamları ayrıdır: sesteş.",
    [["gelmek – gitmek", "Zıt anlamlı."], ["büyük – kocaman", "Eş anlamlıya yakın."], ["kalem – kalemtıraş", "Yazılışları da anlamları da farklı."]],
    "Sesteş sözcüğün yazılışı tamamen aynıdır.", "Önce yazılışlar aynı mı bak, sonra anlamlar farklı mı.",
    ["Sesteş: yazılış + okunuş aynı, anlam farklı.", "\"Yüz\" hem sayı hem yüz (surat).", "Diğer çiftlerde yazılış farklı."]);
  Qk("tq4", SA, 1, "\"Kulak kabartmak\" deyimi aşağıdakilerden hangisini anlatır?", "Dikkatle dinlemek", "Hayvanın kulaklarını dikip dinlemesine benzetmeyle \"dikkatle dinlemek\" demektir.",
    [["Bağırarak konuşmak", "Deyimin anlamı bu değil."], ["Duymazdan gelmek", "Tersi."], ["Dedikodu yapmak", "Deyimle ilgisi yok."]],
    "Kulağını dikip bekleyen bir hayvanı düşün.", "Deyimi sözcük sözcük değil, bütün olarak düşün: hangi davranışı anlatıyor?",
    ["Deyimler topluca yeni bir anlam kazanır.", "Kulaklarını dikip dinleyen bir hayvan gibi: dikkatle dinlemek."]);
  Qk("tq5", SA, 1, "\"Damlaya damlaya göl olur.\" atasözünün ana fikri aşağıdakilerden hangisidir?", "Küçük birikimler zamanla büyük sonuçlara dönüşür.", "Tek tek damlalar birikince göl oluşur: sabırla biriktirmenin gücü.",
    [["Su israf edilmemelidir.", "Atasözü su tasarrufunu değil, birikimi anlatıyor."], ["Göller yağmurla dolar.", "Gerçek anlama takılmış."], ["İşler hızla yapılmalıdır.", "Atasözü sabrı anlatır, hızı değil."]],
    "Atasözünü doğrudan değil, anlattığı genel ilkeyle yorumla.", "Önce gerçek anlamını söyle, sonra \"bu hangi hayat gerçeğini anlatıyor?\" diye sor.",
    ["Gerçek anlam: damlalar göl yapar.", "Ders: küçük şeyler biriktikçe büyür."]);
  Qk("tq6", SA, 2, "Aşağıdaki cümlelerin hangisinde altı çizili sözcük terim anlamlıdır?", "Üçgenin iç açıları toplamı 180°'dir.", "\"Üçgen\" burada matematik terimidir: belli bir bilim dalında özel, kesin anlamı olan sözcük.",
    [["Yemekten sonra bir bardak çay içti.", "Günlük, gerçek anlam."], ["Yüreği sızladı ve gözleri doldu.", "Mecaz anlamlı kullanımlar."], ["Akşamları yürüyüşe çıkıyoruz.", "Günlük, gerçek anlam."]],
    "Terim anlamı bir bilim, sanat ya da meslek dalına özgü ve kesindir.", "Hangi cümle belli bir ders ya da meslek dilinden?",
    ["Terim: bir alanda kesin ve özel anlamlı sözcük.", "\"Üçgen\" geometri terimi.", "Diğer cümlelerde günlük ya da mecaz kullanım var."]);
  /* ---------- Cümlede anlam ---------- */
  Qk("tq7", CA, 1, "Aşağıdakilerden hangisi nesnel (kanıtlanabilir) bir yargı içerir?", "Türkiye'nin başkenti Ankara'dır.", "Doğruluğu kanıtlanabilir: nesnel yargı.",
    [["Ankara görülebilecek en güzel şehirdir.", "Kişisel beğeni: öznel."], ["En lezzetli yemek sarmadır.", "Kişisel beğeni: öznel."], ["Bu film çok sıkıcıydı.", "Kişisel görüş: öznel."]],
    "Nesnel yargıyı herkes aynı biçimde doğrulayabilir.", "Her cümleye sor: bunu ölçerek ya da araştırarak kanıtlayabilir miyim?",
    ["Nesnel yargı: ölçülebilir, doğrulanabilir.", "\"En güzel, en lezzetli, sıkıcı\" kişiye göre değişir: öznel.", "\"Başkent Ankara\" doğrulanabilir: nesnel."]);
  Qk("tq8", CA, 1, "Aşağıdaki cümlelerin hangisinde neden–sonuç ilişkisi vardır?", "Yağmur yağdığı için maç ertelendi.", "\"Yağmur yağması\" neden, \"maçın ertelenmesi\" sonuç.",
    [["Maça yetişmek için erken kalktı.", "Amaç–sonuç ilişkisi."], ["Havalar ısınırsa pikniğe gideriz.", "Koşul ilişkisi."], ["Ali, Veli'den daha uzundur.", "Karşılaştırma."]],
    "\"-dığı için, çünkü, -den dolayı\" gibi ifadeler nedeni verir.", "Önce neden olan olayı, sonra onun sonucunu bul.",
    ["Neden: yağmur yağdı.", "Sonuç: maç ertelendi.", "Diğerleri amaç, koşul ve karşılaştırma."]);
  Qk("tq9", CA, 1, "\"Sınavı kazanmak için gece geç saatlere kadar çalıştı.\" cümlesinde hangi anlam ilişkisi vardır?", "Amaç–sonuç", "\"Sınavı kazanmak\" amaç, \"çalışmak\" amacı gerçekleştirmek için yapılan eylem.",
    [["Neden–sonuç", "Çalışma, sınavı kazanmak amacıyla yapılıyor; nedenden çok amaç var."], ["Koşul–sonuç", "\"Eğer… ise\" anlamı yok."], ["Karşılaştırma", "İki şey kıyaslanmıyor."]],
    "\"-mek için\" kalıbı çoğunlukla amacı bildirir.", "Eylemin hangi sonuca ulaşmak için yapıldığını sor.",
    ["Eylem: gece geç saate kadar çalışmak.", "Hedef: sınavı kazanmak.", "Bu amaç–sonuç ilişkisidir."]);
  Qk("tq10", CA, 2, "\"Zamanında hazırlanırsan sınavda rahat olursun.\" cümlesinde hangi anlam ilişkisi vardır?", "Koşul–sonuç", "\"Hazırlanırsan\" koşul; \"rahat olursun\" koşulun sonucu.",
    [["Neden–sonuç", "Henüz gerçekleşmiş bir neden yok; bir koşul var."], ["Amaç–sonuç", "\"-mek için\" yapısı yok."], ["Karşılaştırma", "Kıyaslama yok."]],
    "\"-sa/-se, -ırsa\" ekleri koşul bildirir.", "\"Eğer… o zaman…\" diye cümleyi yeniden yaz.",
    ["\"Eğer zamanında hazırlanırsan, o zaman rahat olursun\" diye yeniden yaz.", "Bu koşul–sonuç ilişkisidir."]);
  /* ---------- Paragraf ---------- */
  Qk("tp1", PG, 1, "Bu parçanın ana düşüncesi hangisidir?", "Kitap okumak insanın bakış açısını genişletir.", "Parça \"yalnızca … değildir\" ile başlayıp okumanın kazandırdığı asıl değere (bakış açısını genişletmek) varıyor.",
    [["Kitap okumak vakit geçirmenin en iyi yoludur.", "Parça bunu söylemiyor; vakit geçirmenin tek yolu olmadığını söylüyor."], ["İyi dinleyici olmak için çok kitap okumak şarttır.", "Aşırı yorum: \"şart\" denmiyor."], ["Kitaplar başkalarının hayatını anlatır.", "Ayrıntı; asıl vurgu bakış açısının genişlemesi."]],
    "\"Yalnızca … değildir\" kalıbından sonra gelen yargıya bak.", "Yazar bu parçayı yazarken okuyucuya hangi tek cümleyi söylemek istemiş olabilir?",
    ["İlk cümle: okumak yalnızca vakit geçirmek değil.", "İkinci cümle: okuyan başkalarının yaşadıklarını katar, bakış açısı genişler.", "Asıl yargı bu: bakış açısını genişletir."],
    "Kitap okumak, yalnızca vakit geçirmenin bir yolu değildir. Okuyan insan, başkalarının yaşadıklarını kendi hayatına katar ve bakış açısını genişletir. Bu yüzden iyi bir okur, aynı zamanda iyi bir dinleyici olur.");
  Qk("tp2", PG, 2, "Bu parçada hangi anlatım tekniğinden yararlanılmıştır?", "Örnekleme", "İlk cümledeki genel yargı (alışkanlıklar hayatı biçimlendirir) iki somut örnekle (erken kalkmak, yürümek) desteklenmiştir.",
    [["Karşılaştırma", "İki şey kıyaslanmıyor."], ["Tanımlama", "Alışkanlık tanımlanmıyor; yargı örnekle destekleniyor."], ["Tanık gösterme", "Başka birinin sözü aktarılmıyor."]],
    "Genel yargıyı destekleyen somut durumlar var mı?", "Önce parçanın ana yargısını bul, sonra onu nasıl desteklediğine bak.",
    ["Ana yargı: alışkanlıklar hayatı biçimlendirir.", "Destek: erken kalkan ve yürüyen kişi örnekleri.", "Genel yargıyı örneklerle destekleme: örnekleme."],
    "Alışkanlıklar hayatımızı biçimlendirir. Sabah erken kalkan biri günü verimli geçirir; her gün biraz yürüyen biri bedenini canlı tutar. Küçük görünen tekrarlar, zamanla büyük sonuçlar doğurur.");
  Qk("tp3", PG, 2, "Bu parçadan aşağıdaki yargılardan hangisi çıkarılamaz?", "Dünyadaki su kaynakları her yıl azalmaktadır.", "Parçada su kaynaklarının azaldığına dair bir bilgi yok; çıkarılamaz.",
    [["Su, canlılar için vazgeçilmezdir.", "İlk cümlede açıkça var."], ["Bitkiler su sayesinde besin üretir.", "İkinci cümlede var."], ["Suyun korunması gelecek kuşakları da ilgilendirir.", "Son cümlede var."]],
    "Seçenekleri tek tek parçada ara: metinde karşılığı var mı?", "\"Çıkarılamaz\" sorularında her seçeneğe \"metinde nerede yazıyor?\" diye sor; bulamadığın cevap.",
    ["Su canlı yaşamının temeli: var.", "Bitkiler suyla besin üretir: var.", "Korumak geleceğin sorumluluğu: var.", "Su kaynaklarının her yıl azalması: metinde yok."],
    "Su, canlı yaşamının temelidir. İnsan bedeninin büyük bölümü sudan oluşur; bitkiler de suyu kullanarak besin üretir. Bu nedenle suyun korunması, yalnızca bugünün değil geleceğin de sorumluluğudur.");
  Qk("tp4", PG, 2, "Boşluğa getirilebilecek cümle aşağıdakilerden hangisidir?", "Asıl zorluk, ulaşılan bilgilerin doğru ve güvenilir olup olmadığını ayırt edebilmektir.", "Önceki cümle bilgiye ulaşmanın kolaylaştığını söylüyor, sonraki cümle eleştirel düşünmenin önemini vurguluyor: araya \"asıl sorun doğruyu ayırt etmek\" cümlesi gelir.",
    [["Kütüphaneler eskiden daha kalabalık ve sessizdi.", "Konuyla ilgisiz."], ["Bilgiye ulaşmak her zaman pahalı olmuştur.", "Önceki cümleyle çelişiyor."], ["Okullar yaz tatilinde kapanır.", "Konuyla ilgisiz."]],
    "Boşluktan önceki ve sonraki cümleyi birlikte oku: onları hangi düşünce bağlar?", "Sonraki cümledeki \"Bu nedenle\" ifadesi, boşluktaki cümlenin bir neden olduğunu söylüyor.",
    ["Önce: bilgiye ulaşmak kolaylaştı.", "Sonra: \"Bu nedenle\" eleştirel düşünme önem kazanıyor.", "Aradaki neden: asıl zorluk doğru bilgiyi ayırt edebilmek."],
    "Bilgiye ulaşmak artık eskisi kadar zor değil. ______ Bu nedenle okullarda eleştirel düşünme becerisi her zamankinden daha çok önem kazanıyor.");
  Qk("tp5", PG, 2, "Numaralanmış cümlelerden hangisi, parçanın anlatım akışını bozmaktadır?", "III", "Parça mevsimlerin canlı yaşamına etkisini anlatıyor; futbol maçlarının oynandığı günler konuyla ilgisiz.",
    [["I", "Ana konuyu söylüyor."], ["II", "İlkbahar örneği; konuya uygun."], ["IV", "Sonbahar örneği; konuya uygun."], ["V", "Kış örneği; konuya uygun."]],
    "Önce parçanın konusunu söyle, sonra konuya uymayan cümleyi ara.", "Her cümleden sonra \"hâlâ mevsim–canlı ilişkisinden mi söz ediyoruz?\" diye sor.",
    ["Konu: mevsimlerin canlı yaşamına etkisi.", "I, II, IV ve V bu konuya hizmet ediyor.", "III futbol maçlarından söz ediyor: akışı bozar."],
    "(I) Mevsimlerin değişmesi, doğadaki canlıların yaşamını doğrudan etkiler. (II) İlkbaharda ağaçlar çiçek açar, kuşlar göç yolundan döner. (III) Futbol maçları genellikle hafta sonları oynanır. (IV) Sonbaharda ise yapraklar dökülür, bazı hayvanlar kış uykusuna hazırlanır. (V) Kışın soğuk, birçok canlıyı barınaklarına çekilmeye zorlar.");
  Qk("tp6", PG, 2, "Yazarın bu parçada asıl vurgulamak istediği düşünce hangisidir?", "Hızlanan iletişim her zaman kazanç getirmez; beklemenin de değeri vardır.", "Son cümledeki \"Oysa\" ile yazar asıl yargısını verir: beklemek düşünmeyi ve özlemeyi öğretir.",
    [["Mektup yazmak bugün de zorunludur.", "Metinde böyle bir öneri yok."], ["İletişim eskiye göre çok hızlandı.", "Doğru ama ayrıntı; asıl vurgu değil."], ["İnsanlar sabırsızlaştı.", "Kısmi: yazar bundan bir ders çıkarıyor."]],
    "\"Oysa\" gibi karşıtlık bağlaçlarından sonra genellikle yazarın asıl yargısı gelir.", "Başta anlatılan durum ile \"oysa\"dan sonraki yargı arasındaki gerilimi bul.",
    ["Başta: eskiden beklerdik, şimdi anında cevap.", "\"Oysa\": beklemek düşünmeyi ve özlemeyi öğretir.", "Asıl yargı: hız her şey değil; bekleme değerlidir."],
    "Eskiden mektupla haberleşen insanlar bir yanıt için günlerce beklerdi; şimdi bir mesajın cevabı bir iki dakikada geliyor. Hızlanan iletişim, bizi sabırsızlaştırdı. Oysa beklemek, düşünmeyi ve özlemeyi de öğretir.");
  /* ---------- Ses bilgisi ---------- */
  Qk("tq11", SB, 1, "Aşağıdaki sözcüklerden hangisi büyük ünlü uyumuna uyar?", "okul", "\"o\" ve \"u\" ikisi de kalın ünlüdür: büyük ünlü uyumu var.",
    [["kitap", "\"i\" ince, \"a\" kalın: uymaz."], ["elma", "\"e\" ince, \"a\" kalın: uymaz."], ["kalem", "\"a\" kalın, \"e\" ince: uymaz."]],
    "Büyük ünlü uyumu: sözcükteki bütün ünlüler kalın ya da bütün ünlüler ince olmalı.", "Her sözcüğün ünlülerini yaz, kalın–ince diye ayır.",
    ["okul → o (kalın), u (kalın): uyar.", "kitap → i (ince), a (kalın): uymaz.", "elma → e (ince), a (kalın): uymaz.", "kalem → a (kalın), e (ince): uymaz."]);
  Qk("tq12", SB, 2, "Aşağıdaki sözcüklerden hangisinde ünsüz benzeşmesi vardır?", "kitapçı", "-cı eki, sert ünsüz \"p\"den sonra \"-çı\" biçimine dönüşmüştür.",
    [["kitabı", "Sert ünsüz yumuşamış: ünsüz yumuşaması."], ["ağzım", "Ünlü düşmesi."], ["gözlük", "Benzeşme yok: göz + lük."]],
    "Ek, sert ünsüzle biten sözcüğe eklenirken sertleşiyor mu?", "Ek hangi ünsüzle başlıyor, kök hangi ünsüzle bitiyor? İkisi arasında sertlik uyumu var mı?",
    ["kitap + cı → kitapçı: \"c\" sert \"p\"den sonra \"ç\" oldu.", "Bu ünsüz benzeşmesi.", "kitabı (yumuşama), ağzım (ünlü düşmesi)."]);
  Qk("tq13", SB, 2, "Aşağıdaki sözcüklerden hangisinde ünlü daralması vardır?", "bekliyor", "bekle + iyor → bekliyor: \"e\" ünlüsü \"i\"ye daralmıştır.",
    [["kitabı", "Ünsüz yumuşaması."], ["okuldan", "Ünsüz benzeşmesi."], ["ağzım", "Ünlü düşmesi."]],
    "Geniş bir ünlü (a, e) dar bir ünlüye (ı, i, u, ü) dönmüş mü?", "Sözcüğün köküne geri dön ve değişen sesi bul.",
    ["bekle-mek kökü \"bekle\".", "bekle + iyor → bekliyor: son \"e\" \"i\" oldu.", "Geniş ünlü dar ünlüye döndü: ünlü daralması."]);
  Qk("tq14", SB, 1, "Aşağıdaki sözcüklerden hangisi üç heceden oluşur?", "kitaplık", "ki-tap-lık: üç hece.",
    [["okul", "o-kul: iki hece."], ["masa", "ma-sa: iki hece."], ["çocuk", "ço-cuk: iki hece."]],
    "Türkçede her hecede tek ünlü vardır.", "Sözcükteki ünlüleri say: ünlü sayısı hece sayısıdır.",
    ["kitaplık: i, a, ı → 3 ünlü → 3 hece.", "Diğerlerinde ikişer ünlü var."]);
  /* ---------- Yazım kuralları ---------- */
  Qk("tq15", YZ, 2, "Aşağıdaki cümlelerin hangisinde \"de\" yazımı yanlıştır?", "Seninde gelmeni istiyorum.", "Burada \"de\" bağlaçtır, ayrı yazılmalı: \"Senin de gelmeni istiyorum.\"",
    [["Evde kimse yoktu.", "Bulunma eki: bitişik, doğru."], ["Ali de toplantıya katıldı.", "Bağlaç: ayrı, doğru."], ["Kitabı masada bıraktım.", "Bulunma eki: bitişik, doğru."]],
    "\"De/da\" çıkarılınca cümlenin anlamı bozuluyorsa ekdir, bozulmuyorsa bağlaçtır.", "\"de\"yi sözcükten çıkar: cümle hâlâ tam mı?",
    ["\"Senin de gelmeni\" → \"de\" çıkarsa anlam eksilmez: bağlaç, ayrı yazılır.", "\"Evde, masada\" → bulunma eki, bitişik.", "Yanlış: \"Seninde\"."]);
  Qk("tq16", YZ, 1, "Aşağıdaki cümlelerin hangisinde \"mi\" yazımı yanlıştır?", "Geldinmi?", "Soru eki \"mi\" ayrı yazılır: \"Geldin mi?\"",
    [["Sen mi söyledin?", "Doğru."], ["Bu kitabı okudun mu?", "Doğru."], ["Yarın gelecek misin?", "Doğru."]],
    "Soru eki her zaman ayrı yazılır.", "Soru ekini bulup önündeki sözcükten ayrılmış mı bak.",
    ["Soru eki (mi, mı, mu, mü) ayrı yazılır.", "\"Geldinmi\" bitişik: yanlış."]);
  Qk("tq17", YZ, 1, "Aşağıdaki cümlelerin hangisinde büyük harf kullanımı yanlıştır?", "dün istanbul'a gittik.", "Özel ad olan \"İstanbul\" büyük harfle yazılır; ayrıca cümle de büyük harfle başlar.",
    [["Dün İzmir'e gittik.", "Doğru."], ["Atatürk Orman Çiftliği'ni gezdik.", "Doğru."], ["Türkiye Büyük Millet Meclisi açıldı.", "Doğru."]],
    "Özel adlar ve cümle başı büyük harfle başlar.", "Cümlenin ilk harfine ve özel adlara tek tek bak.",
    ["Cümle büyük harfle başlar.", "Şehir adları büyük harfle yazılır.", "\"dün istanbul'a\" her ikisini de ihlal ediyor."]);
  /* ---------- Noktalama ---------- */
  Qk("tq18", NK, 2, "Aşağıdaki cümlelerin hangisinde soru işareti yanlış kullanılmıştır?", "Ali, nereye gittiğini sordu?", "Dolaylı anlatımda cümle soru anlamı taşımaz; nokta konur: \"Ali, nereye gittiğini sordu.\"",
    [["Nereye gidiyorsun?", "Doğrudan soru: doğru."], ["Bu kitabı sen mi aldın?", "Doğrudan soru: doğru."], ["Kaç yaşındasın?", "Doğrudan soru: doğru."]],
    "Soru işareti, cümle gerçekten soru soruyorsa konur.", "Cümleyi birisi mi soruyor yoksa soruyu aktarıyor mu?",
    ["\"Ali ... sordu\": soruyu aktarıyor (dolaylı).", "Dolaylı anlatım soru işareti almaz.", "Diğer cümleler doğrudan soru."]);
  /* ---------- Sözcük türleri ---------- */
  Qk("tq19", ST, 2, "Aşağıdaki cümlelerin hangisinde \"o\" sözcüğü zamirdir?", "O geldi mi?", "\"O\" burada bir ismin yerini tutuyor (kişi): zamir.",
    [["O çocuk çok akıllı.", "\"Çocuk\" ismini niteliyor: sıfat (işaret sıfatı)."], ["O kitabı sana vereceğim.", "\"Kitabı\" niteliyor: sıfat."], ["O masa kırık.", "\"Masa\" niteliyor: sıfat."]],
    "Zamir tek başına kullanılır, isim yerine geçer; sıfat ise ismin önüne gelip onu niteler.", "\"O\"dan sonra bir isim var mı? Varsa sıfat, yoksa zamir.",
    ["\"O çocuk, o kitabı, o masa\": ardından isim var → sıfat.", "\"O geldi mi?\": ardından isim yok, \"o\" kişi yerine geçiyor → zamir."]);
  Qk("tq20", ST, 2, "\"Çocuk sessizce odaya girdi.\" cümlesindeki \"sessizce\" sözcüğü hangi türdendir?", "Zarf", "\"Sessizce\", \"girdi\" eyleminin nasıl yapıldığını anlatıyor: zarf.",
    [["Sıfat", "Sıfat ismi niteler; burada eylem niteleniyor."], ["İsim", "Bir varlık ya da kavram adı değil."], ["Zamir", "Bir ismin yerini tutmuyor."]],
    "\"Nasıl girdi?\" sorusunun cevabı.", "Sözcüğün niteleidiği sözcüğe bak: isim mi, eylem mi?",
    ["\"Nasıl girdi?\" → sessizce.", "Eylemi niteleyen sözcük zarftır."]);
  /* ---------- Cümlenin öğeleri ---------- */
  Qk("tq21", CO, 2, "Aşağıdaki cümlelerin hangisinde belirtili nesne vardır?", "Kitabı masaya koydu.", "\"Kitabı\" -ı hâl eki almış: belirtili nesne.",
    [["Kitap okudu.", "Ek almamış: belirtisiz nesne."], ["Çocuk koştu.", "Nesne yok."], ["Okula gitti.", "\"Okula\" yönelme eki: dolaylı tümleç."]],
    "Belirtili nesne -ı, -i, -u, -ü ekini alır.", "\"Neyi/kimi?\" sorusunun cevabı ek almış mı?",
    ["\"Neyi koydu?\" → kitabı.", "\"-ı\" hâl eki var: belirtili nesne."]);
  Qk("tq22", CO, 2, "Aşağıdaki cümlelerin hangisinin öznesi gizlidir?", "Kitabı aldım.", "Özne \"ben\" cümlede yazılmamış, \"aldım\" ekinden anlaşılıyor: gizli özne.",
    [["Ali eve geldi.", "Özne \"Ali\" açıkça var."], ["Çocuklar oynadı.", "Özne \"çocuklar\" açıkça var."], ["Hava çok güzel.", "Özne \"hava\" açıkça var."]],
    "Gizli özne, yüklemin kişi ekinden anlaşılır.", "\"Kim aldı?\" diye sor; cevap cümlede yazılı mı?",
    ["\"Kim aldı?\" → cümlede yazılı özne yok.", "\"-ım\" kişi ekinden özne \"ben\": gizli özne."]);
  /* ---------- Anlatım bozukluğu ---------- */
  Qk("tq23", AB, 2, "Aşağıdaki cümlelerin hangisinde anlatım bozukluğu vardır?", "Okulda iki yüz öğrenciler var.", "Sayı sıfatından sonra gelen isim çoğul eki almaz: \"iki yüz öğrenci\".",
    [["Kitabı masanın üstüne bıraktım.", "Anlatım düzgün."], ["Öğrenciler bahçede top oynadı.", "Anlatım düzgün."], ["Akşam yemeğinden sonra uzun bir yürüyüşe çıktık.", "Anlatım düzgün."]],
    "Sayı + isim kalıbında isim tekil kalır.", "Sayı bildiren sözcükten sonra gelen ismin eki doğru mu?",
    ["Sayı sıfatı (iki yüz) çoğulu zaten anlatır.", "Bu yüzden \"öğrenciler\" değil \"öğrenci\" olmalı.", "Diğer cümlelerde bozukluk yok."]);
})();
