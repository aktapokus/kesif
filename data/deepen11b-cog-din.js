/* 11. sınıf Coğrafya ve Din Kültürü: ayrıntılı ders notları. Özgün içerik (CC BY-NC-SA 4.0). */
(function () {
  var D = KESIF.dsl, T = D.T, DEEP = D.DEEP;
  var SOL = function (t) { return '<p class="callout"><b>Sınavda böyle yaz:</b> ' + t + '</p>'; };
  var TBL = function (head, rows) { return '<table class="tbl"><thead><tr>' + head.map(function (h) { return '<th>' + h + '</th>'; }).join('') + '</tr></thead><tbody>' + rows.map(function (r) { return '<tr>' + r.map(function (c) { return '<td>' + c + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table>'; };

  /* ===== COĞRAFYA ===== */
  DEEP("cog11-sorunlar", [
    T("Mekânsal sorunlar: nedir, nasıl incelenir?", '<p>Mekânsal sorun, bir yerde (şehir, havza, bölge) insan ve doğa ilişkisinden doğan, <b>çözüm gerektiren</b> durumdur: sel, kentsel ısı adası, trafik, kuraklık, göç, orman yangını gibi.</p>' + TBL(['Adım', 'Soru', 'Örnek (kent selleri)'], [['1. Tanımla', 'Sorun nedir, nerede?', 'Yağışta cadde ve alt geçitler su altında kalıyor'], ['2. Neden', 'Doğal ve beşerî nedenler', 'Sağanak yağış (doğal); dere yataklarının yapılaşması, asfalt yüzey (beşerî)'], ['3. Etki', 'Kimi, neyi etkiler?', 'Can, mal, ulaşım, ekonomi'], ['4. Çözüm', 'Hangi önlemler?', 'Yağmur suyu kanalları, dere ıslahı, planlı yapılaşma, erken uyarı']]) + '<p class="callout why"><b>Coğrafi bakış:</b> Aynı sorun farklı yerlerde farklı nedenlerle ortaya çıkar. Çözüm önerirken <b>yerin özelliklerini</b> (iklim, eğim, nüfus) hesaba kat.</p>' + SOL('Sorun → neden (doğal–beşerî) → etki → çözüm; her aşamaya yerel bir örnek ver.'))
  ]);

  DEEP("cog11-cbs", [
    T("Coğrafi Bilgi Sistemleri (CBS): katman mantığı", '<p>CBS, konuma bağlı verileri (yollar, nehirler, nüfus, arazi kullanımı) <b>katmanlar</b> hâlinde saklayıp harita üzerinde analiz eden sistemdir. Her katman aynı koordinat sistemiyle çakıştırılır.</p><ul class="body"><li><b>Kullanım:</b> Afet planlaması, ulaşım rotası, tarım verimi, şehir planlaması, hastane yeri seçimi.</li><li><b>Analiz örneği:</b> “Sel riski yüksek yerler” = eğim katmanı + akarsu katmanı + yağış katmanı birleştirilir.</li><li><b>Web tabanlı CBS:</b> Google Haritalar, Yandex, Kentrehberi, AFAD haritaları; internet üzerinden herkes verilere ulaşır.</li></ul><p><b>Dünyadaki karşılığı:</b> Navigasyon uygulaması trafik, yol ve hız katmanlarını birleştirip en kısa rotayı hesaplar.</p><p class="callout why"><b>Dikkat:</b> CBS sonuçları, verilerin güncelliğine ve doğruluğuna bağlıdır; eski veriyle kurulan analiz yanlış karara götürür.</p>')
  ]);

  DEEP("cog11-su-kaynaklari", [
    T("Su kaynaklarının sınıflandırılması", TBL(['Grup', 'Örnek', 'Özellik'], [['Yerüstü', 'Akarsu, göl, deniz, buzul', 'Doğrudan görülebilir; yağış ve erime ile beslenir'], ['Yeraltı', 'Kaynak, kuyu, artezyen, termal su', 'Gözeneklerde depolanır; yavaş yenilenir'], ['Yapay', 'Baraj, gölet, sulama kanalı', 'İnsan yapımı, depolama ve yönetim amaçlı']]) + '<p><b>Tatlı su oranı:</b> Dünya suyunun yaklaşık %97’si tuzludur; tatlı suyun büyük bölümü buzullarda ve yeraltındadır; insanın doğrudan kullanabileceği oran çok küçüktür. Bu yüzden su <b>stratejik bir kaynaktır</b>.</p>')
  ]);

  DEEP("cog11-su-etkileri", [
    T("Su kaynaklarının etkisi: ulaşım, tarım, enerji, yerleşme", TBL(['Alan', 'Etki', 'Türkiye örneği'], [['Tarım', 'Sulama ürün çeşitliliğini ve verimi artırır', 'GAP ile Harran Ovası’nda pamuk'], ['Enerji', 'Barajlarda hidroelektrik', 'Atatürk, Keban, Karakaya'], ['Yerleşme', 'Akarsu ve kaynak çevresinde yoğunlaşma', 'Ova ve vadi kentleri'], ['Ulaşım/turizm', 'Göl ve deniz turizmi', 'Eğirdir, Van Gölü, Akdeniz kıyıları'], ['Risk', 'Sel, taşkın, kuraklık', 'Karadeniz sel, İç Anadolu kuraklık']]) + '<p class="callout why"><b>Ana fikir:</b> Suyun bol olduğu yer kadar, <b>zamansal dağılımı</b> da önemlidir: Türkiye’de yağış mevsimlere göre değişir; bu yüzden barajlarla depolama gerekir.</p>')
  ]);

  DEEP("cog11-yerlesme-organizasyon", [
    T("Merkezî yerler ve yerleşme hiyerarşisi", '<p>Yerleşmeler ürettikleri hizmetlere göre <b>basamaklıdır</b>: küçük köyler günlük ihtiyaç; ilçe merkezleri daha çeşitli hizmet; büyükşehirler üst düzey hizmet (üniversite, hastane, havalimanı) sağlar. Alt basamak daha sık, üst basamak daha seyrektir. Buna <b>merkezî yer</b> mantığı denir (Christaller).</p><ul class="body"><li><b>Eşik nüfus:</b> Bir hizmetin sürmesi için gereken minimum nüfus.</li><li><b>Etki alanı:</b> Hizmetin çekebildiği alan; üst düzey hizmetin alanı daha geniştir.</li></ul><p><b>Örnek:</b> Bakkal mahallede, hastane ilçede, tıp fakültesi hastanesi ve havalimanı ilde bulunur.</p>')
  ]);

  DEEP("cog11-etki-alani", [
    T("Yerleşmelerin etki alanı: ne belirler?", '<p>Etki alanı, bir yerleşmenin hizmet verdiği çevredir. Büyüklüğü şunlara bağlıdır:</p><ul class="body"><li>Sunulan hizmetlerin çeşitliliği ve düzeyi.</li><li>Ulaşım ağı (otoyol, demiryolu, havalimanı) ve uzaklık.</li><li>Rakip merkezlerin konumu.</li><li>Nüfus ve ekonomik gücü.</li></ul><p><b>Örnek:</b> İstanbul’un etki alanı tüm ülkeyi ve çevre ülkeleri kapsar; küçük bir ilçenin etki alanı birkaç köyle sınırlıdır. Bir otoyol yapıldığında, uzak merkezlere erişim kolaylaştığı için küçük merkezin etki alanı daralabilir.</p>')
  ]);

  DEEP("cog11-gida-guvencesi", [
    T("Gıda güvencesi: dört boyut", TBL(['Boyut', 'Anlamı'], [['Bulunabilirlik', 'Yeterli gıda üretimi/ithalatı var mı?'], ['Erişilebilirlik', 'Fiyat ve ulaşım açısından ulaşılabilir mi?'], ['Kullanım', 'Besleyici, güvenli ve temiz mi?'], ['İstikrar', 'Kriz, kuraklık, savaşta devam eder mi?']]) + '<p><b>Tehditler:</b> İklim değişikliği, kuraklık, savaş, nüfus artışı, gıda israfı. <b>Çözümler:</b> Verimli tarım, depolama, israfın azaltılması, yerel üretim, uluslararası işbirliği.</p>')
  ]);

  DEEP("cog11-surdurulebilir-tarim", [
    T("Sürdürülebilir tarım uygulamaları", '<ul class="body"><li><b>Damla sulama:</b> Su israfı azalır (kök bölgesine doğrudan).</li><li><b>Ekim nöbeti (münavebe):</b> Toprak verimliliği korunur, hastalık döngüsü kırılır.</li><li><b>Organik ve entegre tarım:</b> Kimyasal gübre/ilaç azaltılır.</li><li><b>Toprak koruma:</b> Teraslama, örtü bitkileri, erozyonu azaltır.</li></ul><p class="callout why"><b>Neden sürdürülebilir?</b> Bugünün verimini artırırken, gelecek kuşakların da toprak, su ve biyoçeşitlilik kaynaklarını kullanabilmesini sağlar.</p>')
  ]);

  DEEP("cog11-kritik-madenler", [
    T("Stratejik ve kritik madenler", '<p><b>Kritik maden:</b> Ekonomi ve teknoloji için vazgeçilmez, arzı sınırlı veya tek ülkeye bağımlı olan madenlerdir (lityum, kobalt, nikel, nadir toprak elementleri, bor, bakır).</p>' + TBL(['Maden', 'Kullanım', 'Not'], [['Lityum', 'Batarya, elektrikli araç', 'Enerji dönüşümünün anahtarı'], ['Nadir toprak elementleri', 'Mıknatıs, elektronik, savunma', 'Üretim birkaç ülkede toplanmıştır'], ['Bor', 'Cam, seramik, tarım, enerji', 'Türkiye dünya bor rezervlerinin çok büyük bölümüne sahiptir'], ['Bakır', 'Elektrik iletimi', 'Elektrifikasyonda talep artıyor']]) + '<p class="callout why"><b>Jeopolitik:</b> Üretimin birkaç ülkede toplanması, tedarik zinciri ve fiyat riski yaratır; ülkeler kaynağa sahip olmanın yanında <b>işleme teknolojisini</b> de geliştirmeye çalışır.</p>')
  ]);

  /* ===== DKAB ===== */
  DEEP("dkab11-kader", [
    T("Kader ve ilgili kavramlar", TBL(['Kavram', 'Anlamı'], [['Kader', 'Allah’ın ezelî ilmiyle her şeyi bilmesi ve takdir etmesi'], ['Kaza', 'Takdir edilenin zamanı gelince meydana gelmesi'], ['Cüz’î irade', 'İnsanın seçim yapma ve sorumluluk üstlenme gücü'], ['Tevekkül', 'Elinden geleni yapıp sonucu Allah’a bırakma'], ['Cebr / Fatalizm', 'İnsanın hiçbir seçim gücü olmadığı görüşü (Ehl-i Sünnet’e göre yanlış)']]) + '<p><b>İlim ve cebir farkı:</b> Allah’ın bir şeyi önceden bilmesi, insanı o şeyi yapmaya <b>zorlamak</b> anlamına gelmez; bilmek ile zorlamak aynı şey değildir. Öğretmenin öğrencinin sınavda başarısız olacağını öngörmesi, onu başarısız yapmak demek değildir.</p><p class="callout why"><b>Sonuç:</b> İnsan seçimlerinden sorumludur; dua, çalışma ve tedbir kaderle çelişmez, kaderin bir parçasıdır. Kader inancı umut ve sabrı destekler, tembelliği değil.</p>')
  ]);

  DEEP("dkab11-akil-irade", [
    T("Akıl, irade ve sorumluluk", '<ul class="body"><li><b>Akıl:</b> İyi–kötüyü ayırma, düşünme ve anlama gücü; teklifin (sorumluluğun) şartıdır. Akıl yürütme İslam’da teşvik edilir.</li><li><b>İrade:</b> Seçim yapabilme gücü.</li><li><b>Sorumluluk:</b> Akıl ve irade sahibi insanın seçimlerinin sonuçlarına katlanması. Çocuk, bilinçsiz veya zorlanan kişi sorumlu tutulmaz.</li></ul><p><b>Örnek:</b> Bir öğrenci ders çalışmayı seçerse sınavın sonucunda emeğinin karşılığını görür; seçimle sonuç arasındaki bu bağ sorumluluğun temelidir.</p>')
  ]);

  DEEP("dkab11-ayetler", [
    T("Bakara 286 ve Âl-i İmrân 190–191: ana mesajlar", '<p><b>Bakara 286:</b> “Allah kimseye gücünün yeteceğinden fazlasını yüklemez…” Mesaj: sorumluluk <b>güçle orantılıdır</b>; kimse altından kalkamayacağı bir yükle yükümlü tutulmaz. Kişi iyi yaptığının faydasını, kötü yaptığının zararını görür. Ayet, hata ve unutmadan af dilemeyi de öğretir.</p><p><b>Âl-i İmrân 190–191:</b> Gökler ve yerin yaratılışında, gece ile gündüzün değişiminde akıl sahipleri için deliller vardır; onlar ayakta, otururken ve yatarken Allah’ı anar ve yaratılış üzerine <b>düşünürler</b>. Mesaj: evreni gözlemlemek ve düşünmek (tefekkür) imanı derinleştirir; bilim ve akıl teşvik edilir.</p><p class="callout why"><b>Ortak çizgi:</b> İki ayet de akıllı, sorumlu ve düşünen insan anlayışı verir: ilki sorumluluğun sınırını, ikincisi bilgiye ulaşma yolunu gösterir.</p>')
  ]);

  DEEP("dkab11-din-tanimlari", [
    T("Din tanımları ve yaklaşımlar", '<p>Din, farklı alanlardan farklı tanımlanır:</p>' + TBL(['Yaklaşım', 'Dine bakışı'], [['Dinî (inanan)', 'Allah’ın insanlara gönderdiği hayat rehberi'], ['Sosyolojik', 'Toplumu birleştiren değer ve ritüeller sistemi'], ['Psikolojik', 'Anlam, huzur ve umut kaynağı'], ['Felsefi', 'Varlık, anlam ve değer sorularına cevap arayışı']]) + '<p class="callout why"><b>Ana fikir:</b> Tek bir tanım dinin her yönünü kapsamaz; bu yüzden farklı tanımlar birbirini tamamlar. Bir tanımın “neyi vurguladığını” bul: inanç, toplum, birey ya da anlam.</p>')
  ]);

  DEEP("dkab11-din-felsefe-bilim", [
    T("Din, felsefe ve bilim: ilişki ve fark", TBL(['', 'Din', 'Felsefe', 'Bilim'], [['Kaynak', 'Vahiy, inanç', 'Akıl yürütme', 'Gözlem ve deney'], ['Soru', 'Anlam, amaç, ahlak', 'Varlık, bilgi, değer', 'Nasıl işler? Neden olur?'], ['Yöntem', 'İnanç ve yorum', 'Kavram ve argüman', 'Hipotez ve test'], ['Sonuç', 'Mutlak değer', 'Savunulabilir görüş', 'Test edilebilir bilgi']]) + '<p class="callout why"><b>İlişki:</b> Üçü farklı soru türlerine cevap verir; birbirinin yerine geçmez. Bilim “nasıl”a, din ve felsefe sıklıkla “neden ve ne için”e yönelir. Bu farkı bilmek, birinin alanını diğerine zorla uygulama hatasını önler.</p>')
  ]);

  DEEP("dkab11-din-sanat", [
    T("Din ve sanat ilişkisi", '<ul class="body"><li><b>Mimari:</b> Cami (kubbe, minare, avlu); Mimar Sinan’ın Selimiye’si.</li><li><b>Hat ve tezhip:</b> Yazıyı estetik bir sanat hâline getirme.</li><li><b>Musiki ve edebiyat:</b> Mevlit, ilahi, ezan; Yunus Emre ve Mevlânâ’nın şiirleri.</li><li><b>Süsleme:</b> Çini ve geometrik/bitkisel desenler (İslam sanatında figürden çok soyut desen yaygındır).</li></ul><p class="callout why"><b>Ana fikir:</b> Din, sanatçıya konu, ilham ve estetik bir ölçü sağlar; sanat ise dinî duyguyu ifade eder ve toplumu birleştirir.</p>')
  ]);

  DEEP("dkab11-medeniyet", [
    T("Medeniyet ve İslam medeniyetinin izleri", '<p><b>Medeniyet:</b> Bir toplumun maddî ve manevî birikimidir (bilim, sanat, hukuk, kurumlar). <b>Kültür</b> ise o birikimin yaşanan, yerel biçimidir.</p>' + TBL(['Alan', 'Örnek'], [['Bilim', 'Harezmî (cebir), İbn Sînâ (tıp), Biruni, Uluğ Bey (gözlemevi)'], ['Kurum', 'Medrese, vakıf, darüşşifa (hastane)'], ['Mimari', 'Cami, külliye, köprü, han'], ['Hukuk ve ahlak', 'Adalet, ahde vefa, yardımlaşma değerleri']]) + '<p class="callout why"><b>Ana fikir:</b> İslam medeniyeti kendinden önceki birikimleri (Yunan, Hint, Fars) tercüme ve yorumla geliştirip Avrupa’ya aktarmıştır; medeniyetler birbirini besleyerek ilerler.</p>')
  ]);
})();
