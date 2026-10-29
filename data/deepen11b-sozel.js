/* 11. sınıf Felsefe, Edebiyat, İngilizce: ayrıntılı ders notları. Özgün içerik (CC BY-NC-SA 4.0). */
(function () {
  var D = KESIF.dsl, T = D.T, DEEP = D.DEEP;
  var SOL = function (t) { return '<p class="callout"><b>Sınavda böyle yaz:</b> ' + t + '</p>'; };
  var TBL = function (head, rows) { return '<table class="tbl"><thead><tr>' + head.map(function (h) { return '<th>' + h + '</th>'; }).join('') + '</tr></thead><tbody>' + rows.map(function (r) { return '<tr>' + r.map(function (c) { return '<td>' + c + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table>'; };

  /* ================= FELSEFE ================= */
  DEEP("fel11-metin", [
    T("Felsefi metin yazmanın kalıbı", '<p>Felsefi metin “ne düşündüğünü” değil, “neden öyle düşündüğünü” gösterir. İyi bir metin şu parçalardan oluşur:</p><ol class="body"><li><b>Problem:</b> Hangi soruyu ele alıyorsun? (ör. “Teknoloji insanı özgürleştirir mi?”)</li><li><b>Tez:</b> Cevabın tek cümlede.</li><li><b>Argüman:</b> Tezini destekleyen gerekçeler (öncül → sonuç).</li><li><b>Örnek:</b> Gerekçeyi somutlaştıran gerçek hayat örneği.</li><li><b>Karşı görüş ve yanıt:</b> Karşı tarafın en güçlü itirazı ve neden yetersiz kaldığı.</li><li><b>Sonuç:</b> Tezin yeniden, kanıtlarla pekişmiş hâli.</li></ol><p><b>Mini örnek:</b> “Tez: Teknoloji tek başına özgürlük getirmez. Argüman: Araç, kullanım amacına göre hem özgürleştirir hem bağımlı yapar. Örnek: Akıllı telefon bilgiye erişim sağlarken dikkati dağıtır. Karşı görüş: ‘Teknoloji nötrdür.’ Yanıt: Tasarım seçimleri (bildirimler) davranışı yönlendirir.”</p><p class="callout why"><b>Sık hata:</b> Sadece yaygın düşünceyi tekrar etmek, kanıt göstermemek ya da “herkes biliyor” demek. Her iddianın bir gerekçesi olmalıdır.</p>' + SOL('Problem → Tez → En az iki argüman + örnek → Karşı görüş ve yanıt → Sonuç.'))
  ]);

  DEEP("fel11-teknoloji", [
    T("Teknoloji, yabancılaşma ve değerler", TBL(['Kavram', 'Anlamı', 'Örnek'], [['Araçsal bakış', 'Teknoloji tarafsız bir araçtır; iyi/kötü kullanıma bağlıdır', 'Bıçak ekmek de keser, zarar da verir'], ['Yabancılaşma', 'İnsanın emeğinden, çevresinden, kendinden uzaklaşması (Marx; Heidegger teknoloji çağını eleştirir)', 'Üretim bandında tek bir işi tekrar eden işçi; gerçek ilişkiler yerine ekran'], ['Etik sorumluluk', 'Teknolojiyi tasarlayanın sonuçlarına karşı sorumluluğu', 'Yapay zekânın karar vermesi ve veri gizliliği'], ['Değerler', 'Gizlilik, adalet, özerklik, doğa', 'Gözetim sistemleri ile özgürlük gerilimi']]) + '<p><b>Soru:</b> Teknoloji hayatımızı kolaylaştırırken anlamı da azaltıyor mu? Hem “yararları” (sağlık, iletişim) hem “risklerini” (bağımlılık, eşitsizlik) göstererek dengeli bir görüş kur.</p>' + SOL('Kavramı tanımla → örnekle → bir filozofun görüşünü bağla → kendi gerekçeli sonucunu yaz.'))
  ]);

  DEEP("fel11-akil-inanc", [
    T("Akıl ve inanç: başlıca yaklaşımlar", TBL(['Yaklaşım', 'Düşünce', 'Temsilci'], [['Uyum (akıl–inanç çelişmez)', 'Akıl ve vahiy aynı hakikate farklı yoldan ulaşır', 'Farabi, İbn Rüşd, Aquinas'], ['İnancın önceliği', 'İnanç aklın üstündedir; akıl sınırlıdır', 'Kierkegaard (inanç sıçraması)'], ['Aklın önceliği', 'İnanç da akılla sınanmalıdır', 'Aydınlanma düşünürleri (Kant akıl sınırlarını araştırdı)']]) + '<p class="callout why"><b>Ayırt etme:</b> “Çelişmez, tamamlar” → uyum; “Akıl yetmez, inan” → inancın önceliği; “Önce sorgula” → aklın önceliği. Yeni bilgi (bilim) ile inanç ilişkisi de bu çerçevede tartışılır.</p>' + SOL('Yaklaşımı tanımla → temsilciyi söyle → kendi tutumunu gerekçelendir.'))
  ]);

  DEEP("fel11-edebiyat", [
    T("Edebiyat ve felsefe: ortak sorular, farklı yöntemler", TBL(['', 'Felsefe', 'Edebiyat'], [['Yöntem', 'Kavram ve argüman', 'Hikâye, imge, karakter'], ['Amaç', 'Doğruyu ve gerekçeyi aramak', 'Duygu, estetik ve anlam deneyimi'], ['Ortak', 'İnsan, özgürlük, ölüm, adalet, anlam', 'Aynı sorulara farklı dille bakar']]) + '<p><b>Örnek:</b> Sartre ve Camus felsefi fikirleri romanlarla anlattı (Bulantı, Yabancı); Yunus Emre’nin şiirleri insan, Tanrı ve aşk üzerine felsefi bir derinlik taşır.</p>')
  ]);

  DEEP("fel11-hayat-anlami", [
    T("Hayatın anlamı: mutluluk anlayışları", TBL(['Görüş', 'Mutluluk nedir?', 'Temsilci'], [['Hedonizm', 'Haz ve acıdan kaçış; sakin haz', 'Epikür'], ['Erdem etiği', 'Erdemli yaşayarak potansiyeli gerçekleştirmek (eudaimonia)', 'Aristoteles'], ['Stoacılık', 'Kontrol edemeyeceğine üzülmemek, ruh dinginliği', 'Epiktetos, Marcus Aurelius'], ['Varoluşçuluk', 'Anlam verilmiş değil, kişi tarafından yaratılır; kendi olma sorumluluğu', 'Sartre']]) + '<p class="callout why"><b>Kendi olma:</b> Başkalarının beklentileri yerine seçimlerini kendin yapman ve sorumluluğunu üstlenmendir. Varoluşçulukta “varoluş özden önce gelir”: önce varız, sonra seçimlerimizle ne olduğumuzu belirleriz.</p>')
  ]);

  DEEP("fel11-hukuk", [
    T("Hukukun kaynağı ve ahlakla ilişkisi", TBL(['Yaklaşım', 'Hukukun kaynağı', 'Sonuç'], [['Doğal hukuk', 'Akıl/doğa/tanrısal düzen', 'Adil olmayan yasa gerçek hukuk sayılmaz'], ['Hukuki pozitivizm', 'Yetkili otoritenin koyduğu kural', 'Hukuk ile ahlak ayrıdır'], ['Toplum sözleşmesi', 'Bireylerin rızası (Hobbes, Locke, Rousseau)', 'Meşruiyet halkın onayına dayanır']]) + '<p><b>Hukuk–ahlak farkı:</b> Hukuk devlet yaptırımıyla uygulanır ve dışarıdan davranışı düzenler; ahlak vicdanla ilgilidir ve yaptırımı toplumsal/içsel baskıdır. Bir kural yasal olup ahlaki olmayabilir; bu fark “adil olmayan yasaya uyulmalı mı?” tartışmasını doğurur.</p>')
  ]);

  DEEP("fel11-cevre", [
    T("Çevre etiği: doğanın değeri kime göre?", TBL(['Yaklaşım', 'Değerin kaynağı', 'Sonuç'], [['İnsan merkezli (antroposentrizm)', 'Doğa insan için değerlidir', 'Doğayı koruma, insanın çıkarı içindir'], ['Hayvan/canlı merkezli', 'Acı çeken ve yaşayan canlılar kendi içinde değerlidir', 'Hayvan hakları, canlılara saygı'], ['Ekosistem merkezli (ekosentrizm)', 'Ekosistemin bütünü değerlidir (Aldo Leopold “arazi etiği”)', 'Türler ve doğal süreçler korunmalı']]) + '<p class="callout why"><b>Gelecek kuşaklar:</b> Hans Jonas’ın sorumluluk ilkesi: Teknolojik gücümüz arttığı için eylemlerimizin uzun vadeli sonuçlarını da düşünmek zorundayız. Sürdürülebilirlik bu anlayışın pratik karşılığıdır.</p>' + SOL('Yaklaşımı tanımla → değeri neye bağladığını söyle → bir örnekle (ör. orman kesimi) karşılaştır.'))
  ]);

  /* ================= EDEBİYAT ================= */
  DEEP("edeb11-karagoz", [
    T("Karagöz oyunu: bölümler, kişiler, dil", TBL(['Bölüm', 'İçerik'], [['Mukaddime (giriş)', 'Hacivat’ın perde gazeli, Karagöz’ü çağırması'], ['Muhavere', 'Hacivat–Karagöz karşılıklı konuşma, söz oyunları'], ['Fasıl', 'Asıl oyun/olay'], ['Bitiş', 'Karagöz’ün sonu bağlaması, özür ve kapanış']]) + '<ul class="body"><li><b>Karagöz:</b> halk kesimi, sade, kaba görünür ama hazırcevaptır; yanlış anlama ve söz oyunlarıyla güldürür.</li><li><b>Hacivat:</b> okumuş, kibar, ağdalı dil kullanır.</li><li>Gölge oyunu <b>hayalî</b> tarafından perdede deriden yapılmış tasvirlerle oynatılır.</li><li><b>Tuluat:</b> hazırlıksız (doğaçlama) oyun geleneği; ikilik (Karagöz–Hacivat) toplumsal eleştiriyi ve mizahı sağlar.</li></ul><p class="callout why"><b>Ana fikir:</b> Karagöz, kültürel çatışmaları (halk–aydın dili, zengin–yoksul) güldürüyle görünür kılar; bu yüzden gelenek halkın sesi sayılır.</p>')
  ]);

  DEEP("edeb11-mektup-dilekce", [
    T("Dilekçe ve mektup: biçim kuralları", TBL(['Bölüm', 'Dilekçe', 'Mektup'], [['Hitap', 'Makam adı (… Müdürlüğüne)', 'Sevgili … / Sayın …'], ['Metin', 'Kısa, açık, resmî dil; konu ve gerekçe', 'Duygu ve haber paylaşımı'], ['Dilek', '“Gereğini arz ederim.”', 'Selam ve temenniler'], ['Kapanış', 'Tarih, ad–soyad, imza, adres, ek', 'Tarih, imza']]) + '<p><b>Dilekçe örneği (iskelet):</b> … LİSESİ MÜDÜRLÜĞÜNE → Metin: “Okulunuzun 11-A sınıfı öğrencisiyim. … nedeniyle … talep ediyorum. Gereğini arz ederim.” → Tarih, ad–soyad, imza, adres/telefon.</p><p class="callout why"><b>Sık hata:</b> Dilekçede dili laubali yapmak, tarih ve imzayı unutmak, talebi belirsiz bırakmak.</p>')
  ]);

  DEEP("edeb11-eposta", [
    T("E-posta yazımı: kime, ne amaçla?", '<ul class="body"><li><b>Konu satırı:</b> Kısa ve içeriği anlatan (ör. “Staj başvurusu – Ayşe Yılmaz”).</li><li><b>Hitap:</b> Resmî: “Sayın Dr. Kaya”; yakın: “Merhaba Ali”.</li><li><b>Giriş:</b> Kendini tanıt, yazma amacını bir cümlede söyle.</li><li><b>Gelişme:</b> Ayrıntılar, madde madde kısa paragraflar.</li><li><b>Kapanış:</b> Teşekkür, cevap beklentisi, “Saygılarımla” + ad–soyad, iletişim bilgisi.</li><li>Ek dosya varsa belirt.</li></ul><p class="callout why">Alıcı ve amaca göre dil değişir: resmî mesajda kısaltma, emoji ve gündelik söyleyiş kullanılmaz.</p>')
  ]);

  DEEP("edeb11-fiilimsi", [
    T("Fiilimsiler: ekleri ve ayırt etme", TBL(['Tür', 'Ekler', 'Örnek'], [['İsim-fiil', '-mak, -ma, -ış', 'Okumak güzeldir. Koşuş hızlıydı.'], ['Sıfat-fiil', '-an, -ası, -maz, -dık, -ecek, -mış', 'Gelen misafir, yaz<b>dığ</b>ım mektup'], ['Zarf-fiil', '-ıp, -arak, -dıkça, -ince, -ken, -madan, -alı', 'Koşarak geldi. Eve gelince aradı.']]) + '<p><b>Ayırt etme ipucu:</b> İsim-fiil isim gibi (özne, nesne) görev yapar; sıfat-fiil bir ismi niteler; zarf-fiil eylemi zaman/durum bakımından belirtir. “Gelen kişi” → gelen sıfat-fiil. “Gelmesi” isim-fiil olarak kullanılırsa cümlede özne/nesne olur.</p><p class="callout why"><b>Kural:</b> Fiilimsiler çekimli fiil değildir; yargı bildirmez, cümleyi bitirmez. Ek-fiil alırsa yüklem olabilir ama o zaman çekimli sayılır.</p>')
  ]);

  DEEP("edeb11-hikaye-ani", [
    T("Hikâye, anı ve fiil çatısı", TBL(['Çatı', 'Özellik', 'Örnek'], [['Etken', 'Özne eylemi yapar', 'Ali kapıyı açtı.'], ['Edilgen', 'Özne belli değil; -ıl/-ın', 'Kapı açıldı.'], ['Dönüşlü', 'Özne eylemi kendine yapar; -ın', 'Ali yıkandı.'], ['İşteş', 'Karşılıklı/birlikte; -ış', 'İki arkadaş kucaklaştı.'], ['Ettirgen', 'Başkasına yaptırma; -dır, -t, -ir', 'Terzi elbise diktirdi.']]) + '<p><b>Anı:</b> Yaşanmış olaylar yazarın bakışıyla anlatılır; birinci kişi, geçmiş zaman, içtenlik özelliğidir.</p>')
  ]);

  DEEP("edeb11-orhun-dlt", [
    T("Orhun Abideleri ve Dîvânu Lugâti’t-Türk", TBL(['', 'Orhun Abideleri', 'Dîvânu Lugâti’t-Türk'], [['Tarih', '8. yüzyıl (Kül Tigin 732, Bilge Kağan 735)', '11. yüzyıl (1072–1077)'], ['Yazar', 'Yollug Tigin (yazıtlar); Bilge Kağan ve Tonyukuk anlatır', 'Kâşgarlı Mahmud'], ['Alfabe/dil', 'Göktürk (Orhun) alfabesi, Türkçe', 'Arapça yazılmış; örnekler Türkçe'], ['Önemi', 'Türkçenin bilinen ilk yazılı belgeleri; devlet ve millet bilinci', 'İlk Türkçe sözlük ve Türk lehçeleri, şiir, atasözü derlemesi'], ['Bulunuş', '1889’da bulundu, Vilhelm Thomsen 1893’te okudu', '—']]) + '<p class="callout why"><b>Ana fikir:</b> Orhun Abideleri Türk devlet geleneğini, DLT ise Türk dilinin zenginliğini gösterir. Hangisinin nesir, hangisinin sözlük olduğunu ayırt et.</p>')
  ]);

  /* ================= İNGİLİZCE ================= */
  DEEP("ing11-job-ads", [
    T("Reading job ads: key phrases", '<p>İş ilanlarında tipik bölümler ve ifadeler:</p>' + TBL(['Bölüm', 'Örnek ifade', 'Anlamı'], [['Requirements', 'at least two years of experience, fluent in English', 'En az iki yıl deneyim, akıcı İngilizce'], ['Responsibilities', 'be responsible for, deal with customers', 'Sorumlu olmak, müşterilerle ilgilenmek'], ['Benefits', 'flexible hours, health insurance', 'Esnek saat, sağlık sigortası'], ['Apply', 'send your CV to…, deadline', 'CV gönder, son başvuru tarihi']]) + '<p class="callout why"><b>Eşleştirme stratejisi:</b> Önce adayın özelliklerini (skills, experience, languages) altını çiz; sonra ilanın <b>requirements</b> bölümüyle eşleştir. “Must” ve “required” zorunludur, “preferred” tercih edilen demektir.</p>')
  ]);

  DEEP("ing11-entrepreneurs", [
    T("Main idea: how to find it", '<ol class="body"><li>Başlığa ve ilk paragrafa bak: konu nedir?</li><li>Her paragrafın <b>topic sentence</b>’ını (genellikle ilk cümle) bul.</li><li>Ana fikir, bu cümlelerin ortak noktasıdır; <b>ayrıntı</b> (örnek, sayı) ana fikir olamaz.</li><li>Seçeneklerde çok dar (tek ayrıntı) ve çok geniş (metinde olmayan) cevapları ele.</li></ol><p><b>Mini örnek:</b> “Many young entrepreneurs start small businesses online because it costs little.” Ana fikir: <i>Young people choose online businesses because they are cheap to start.</i> “Online” ya da “young” tek başına yeterli değildir.</p>')
  ]);

  DEEP("ing11-cv-letter", [
    T("CV and letter of intent: structure", TBL(['CV bölümü', 'İçerik'], [['Personal details', 'Name, email, phone'], ['Education', 'School, years, achievements'], ['Skills', 'Languages, computer skills'], ['Experience / Activities', 'Volunteer work, projects']]) + '<p><b>Letter of intent (kısa iskelet):</b> <i>Dear Sir/Madam, I am writing to apply for … I am a student at … and I am good at … I would like to improve my skills … Thank you for your time. Yours faithfully, (name).</i></p><p class="callout why"><b>Resmî ton:</b> “Dear Sir/Madam” ile başlayıp “Yours faithfully” ile bitirilir (ad biliniyorsa “Dear Mr. Smith … Yours sincerely”). Kısaltma (I’m, don’t) yerine tam biçim tercih edilir.</p>')
  ]);

  DEEP("ing11-paraphrase", [
    T("Paraphrasing: same meaning, different words", '<p>Paraphrase, anlamı koruyup <b>sözcük ve yapıyı</b> değiştirmektir.</p>' + TBL(['Orijinal', 'Paraphrase'], [['She is fond of painting.', 'She loves / enjoys painting.'], ['He is good at math.', 'He has a talent for math.'], ['I prefer tea to coffee.', 'I like tea more than coffee.'], ['She can speak three languages.', 'She is able to speak three languages.']]) + '<p class="callout why"><b>Dikkat:</b> Anlam değişirse paraphrase yanlıştır. “I like tea more than coffee” ile “I hate coffee” eş anlamlı değildir (güç farkı).</p>')
  ]);

  DEEP("ing11-listening", [
    T("Listening for facts", '<ul class="body"><li>Dinlemeden önce soruları oku; <b>ne tür bilgi</b> (sayı, yer, meslek, zaman) aranıyor?</li><li>Sayılarda dikkat: <i>fifteen / fifty</i>, <i>thirteen / thirty</i> (vurgu: thir<b>TEEN</b> / <b>THIR</b>ty).</li><li>“Actually”, “but”, “however” sonrası genellikle asıl bilgi gelir (konuşmacı fikrini değiştirebilir).</li><li>Tüm sözcükleri anlamak gerekmez; anahtar bilgiyi yakala.</li></ul>')
  ]);

  DEEP("ing11-future-plans", [
    T("Talking about the future: will / be going to / present continuous", TBL(['Yapı', 'Kullanım', 'Örnek'], [['will', 'Anlık karar, tahmin, söz', 'I’ll help you. It will rain tomorrow.'], ['be going to', 'Önceden planlanmış niyet; kanıta dayalı tahmin', 'I’m going to study medicine. Look at the clouds, it’s going to rain.'], ['Present continuous', 'Kesinleşmiş plan (zaman ve yer belli)', 'I’m meeting Ali at 5 p.m.']]) + '<p class="callout why"><b>Sık hata:</b> Önceden verilmiş karar için “will” kullanmak. “I will visit my grandmother this weekend” yerine, planı varsa “I’m going to visit…” daha doğrudur. “If” cümlelerinde gelecek anlamı için if-clause’da <b>present simple</b> kullanılır: <i>If it rains, we will stay home.</i></p>')
  ]);
})();
