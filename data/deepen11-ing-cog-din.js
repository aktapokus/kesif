/* 11. sınıf İngilizce, Coğrafya ve Din Kültürü konu anlatımlarına ek açıklama ve animasyon adımları. Özgün içerik (CC BY-NC-SA 4.0). Öğretmen/Opus doğrulaması beklenir. */
(function () {
  var D = KESIF.dsl, T = D.T, M = D.M, G = D.G, AN = D.AN, DEEP = D.DEEP;

  /* ----- İngilizce ----- */
  DEEP("ing11-job-ads", [
    AN("flow", "Animation: how to match a job ad with a CV", { mode: "col", cap: "Read the ad carefully, underline the requirements, then check each one in the CV.", nodes: [{ t: "1. Read the ad", s: "job title, duties, requirements" }, { t: "2. Underline requirements", s: "language, experience, hours, skills" }, { t: "3. Check the CV", s: "education, experience, skills" }, { t: "4. Choose the best match", s: "all or most requirements fit" }] }),
    T("Why every detail matters (Türkçe açıklama)", '<p>İş ilanında “Fluent English” ve “Part-time” gibi ifadeler <b>elenme şartıdır</b>: biri uymazsa aday uygun olmaz. Başlık yeterli değildir; <i>requirements</i> (şartlar) bölümünü satır satır oku. “Experience” yıl sayısı, “skills” beceri, “responsibilities” görevlerdir.</p><p class="callout why"><b>Dünyadaki karşılığı:</b> Gerçek hayatta işe başvururken özgeçmiş ilana göre düzenlenir; ilandaki anahtar sözcükler CV’de görünürse eşleşme güçlenir.</p>')
  ]);
  DEEP("ing11-entrepreneurs", [
    AN("flow", "Animation: finding the main idea", { mode: "col", cap: "Main idea = the message of the whole text. Details and examples support it.", nodes: [{ t: "Read the text once", s: "what is it about?" }, { t: "Find the topic", s: "who/what is the text mainly about?" }, { t: "Look at the first and last sentences", s: "they often give the message" }, { t: "Check: do the details support it?", s: "the main idea covers the whole text" }] })
  ]);
  DEEP("ing11-cv-letter", [
    AN("flow", "Animation: structure of a letter of intent", { mode: "col", cap: "A formal letter follows a clear structure.", nodes: [{ t: "Greeting", s: "Dear Sir or Madam," }, { t: "Purpose", s: "I am writing to apply for …" }, { t: "Qualifications", s: "education, experience, skills" }, { t: "Closing request", s: "I would be happy to attend an interview." }, { t: "Sign-off", s: "Yours faithfully, / Yours sincerely," }] })
  ]);
  DEEP("ing11-paraphrase", [
    AN("flow", "Animation: ways to paraphrase", { mode: "tree", cap: "To paraphrase: keep the meaning, change the words or the structure.", nodes: [{ t: "Paraphrasing", s: "" }, { t: "Use synonyms", s: "enjoy → like; begin → start" }, { t: "Change the structure", s: "prefer A to B → like A more than B" }, { t: "Keep the meaning", s: "do not add or remove information" }] })
  ]);
  DEEP("ing11-listening", [
    AN("flow", "Animation: listening strategy", { mode: "col", cap: "A good listener prepares before, listens actively and checks after.", nodes: [{ t: "Before", s: "read the questions; guess the topic" }, { t: "While listening", s: "note numbers, times, places, names" }, { t: "After", s: "check notes; choose the best answer" }] })
  ]);
  DEEP("ing11-future-plans", [
    AN("flow", "Animation: will or going to?", { mode: "tree", cap: "Use going to for decided plans and evidence now; use will for predictions and sudden decisions.", nodes: [{ t: "Talking about the future", s: "" }, { t: "be going to + verb", s: "plan: I’m going to apply for a job." }, { t: "will + verb", s: "prediction: I think robots will do many jobs." }] })
  ]);

  /* ----- Coğrafya ----- */
  DEEP("cog11-sorunlar", [
    AN("flow", "Canlandırma: coğrafyacı bir sorunu nasıl çözer?", { mode: "col", cap: "Coğrafi bakış dört soru sorar.", nodes: [{ t: "Nerede?", s: "sorunun dağılışı (harita, uydu görüntüsü)" }, { t: "Neden orada?", s: "iklim, yer şekli, yapılaşma, nüfus" }, { t: "Neyle bağlantılı?", s: "ekonomi, ulaşım, doğal afet" }, { t: "Ne yapılabilir?", s: "planlama, risk haritası" }] }),
    T("Mekânsal sorunlar neden ‘yerle’ ilgilidir?", '<p>Aynı yağış, bir yerde yararlı su, başka yerde taşkın olabilir. Fark; <b>eğim, zemin, yapılaşma ve dere yatağının durumu</b> gibi yerel koşullardan gelir. Coğrafya sorunu bir ‘olay’ olarak değil, <b>mekânda dağılan bir olay</b> olarak inceler ve çözümü de yere özgü kurar.</p><p class="callout why"><b>Dünyadaki karşılığı:</b> Belediyelerin taşkın risk haritaları, deprem zemin etütleri ve trafik yoğunluk haritaları bu bakışın ürünüdür.</p>')
  ]);
  DEEP("cog11-cbs", [
    AN("flow", "Canlandırma: CBS ile harita yapma süreci", { mode: "cycle", cap: "Konum verisi katmanlara dönüşür, sorgulanır ve haritada gösterilir.", nodes: [{ t: "Veri girişi", s: "konum ve özellik" }, { t: "Katmanlar", s: "yollar, okullar, akarsular" }, { t: "Sorgulama", s: "koşula uyanı seç" }, { t: "Sembolleştirme", s: "renk ve işaret" }, { t: "Paylaşma", s: "web haritası" }] }),
    T("Web CBS neden ‘bulut’ denir?", '<p>Veriler ve işlem gücü internet üzerindeki sunucularda durur; sen tarayıcıdan haritayı açarsın. Bu yüzden program kurmana gerek kalmaz, harita herkesle paylaşılabilir ve verileri başkalarıyla birlikte güncelleyebilirsin. <b>Dikkat:</b> konum verileri kişisel mahremiyeti ilgilendirebilir; izin almadan başkasının konumunu kullanma.</p><p class="callout why"><b>Dünyadaki karşılığı:</b> Telefonundaki harita uygulaması canlı trafiği katman olarak gösterir; her ‘katman’ aç/kapa yapılabilen bir CBS tabakasıdır.</p>')
  ]);
  DEEP("cog11-su-kaynaklari", [
    AN("flow", "Canlandırma: su kaynaklarını üç ölçüte göre sınıflama", { mode: "tree", cap: "Aynı kaynak farklı ölçütlere göre farklı gruplara girer.", nodes: [{ t: "Su kaynakları", s: "" }, { t: "Konuma göre", s: "Yer üstü: akarsu, göl, deniz. Yer altı: kaynak, kuyu, yeraltı suyu." }, { t: "Tuzluluğa göre", s: "Tatlı: akarsu, çoğu göl, buzul. Tuzlu: deniz, Tuz Gölü." }, { t: "Fiziksel hâle göre", s: "Sıvı: akarsu, göl. Katı: buzul, kar. Gaz: su buharı." }] })
  ]);
  DEEP("cog11-su-etkileri", [
    AN("flow", "Canlandırma: su kaynaklarının dört etki alanı", { mode: "tree", cap: "Bir su kaynağı aynı anda dört alanı etkiler.", nodes: [{ t: "Su kaynağı", s: "" }, { t: "Çevresel", s: "sulak alan, taşkın, kuraklık" }, { t: "Ekonomik", s: "sulama, enerji, balıkçılık" }, { t: "Politik", s: "sınıraşan sular, deniz yetki alanları" }] })
  ]);
  DEEP("cog11-yerlesme-organizasyon", [
    AN("flow", "Canlandırma: yerleşme hiyerarşisi", { mode: "col", cap: "Yerleşmeler büyüklük ve işlev çeşitliliğine göre basamaklanır.", nodes: [{ t: "Köy", s: "temel ihtiyaçlar, tarım" }, { t: "Kasaba", s: "pazar, ilkokul, sağlık ocağı" }, { t: "Şehir", s: "hastane, üniversite, sanayi" }, { t: "Metropol", s: "geniş etki alanı, çok işlev" }] })
  ]);
  DEEP("cog11-etki-alani", [
    AN("flow", "Canlandırma: etki alanını belirleyen etkenler", { mode: "tree", cap: "Bir yerleşmenin etki alanı birkaç etkene bağlıdır.", nodes: [{ t: "Etki alanı", s: "" }, { t: "İşlev çeşitliliği", s: "hastane, üniversite, havalimanı, pazar" }, { t: "Ulaşım", s: "yol, demiryolu, havayolu erişimi" }, { t: "Nüfus", s: "büyük nüfus daha çok hizmet ve çekim" }] })
  ]);
  DEEP("cog11-gida-guvencesi", [
    AN("flow", "Canlandırma: gıda güvencesinin dört boyutu", { mode: "cycle", cap: "Gıdaya güvenle ulaşmak için dört şey birlikte sağlanmalıdır.", nodes: [{ t: "Üretim", s: "yeterli gıda" }, { t: "Erişim", s: "satın alabilme, ulaşabilme" }, { t: "Kullanım", s: "güvenli ve besleyici" }, { t: "Süreklilik", s: "her zaman, her mevsim" }] })
  ]);
  DEEP("cog11-surdurulebilir-tarim", [
    AN("flow", "Canlandırma: sürdürülebilir tarımın ölçütleri", { mode: "tree", cap: "Tarım uygulaması bu ölçütlerle sınanır.", nodes: [{ t: "Sürdürülebilir tarım", s: "" }, { t: "Toprak ve su", s: "ekim nöbeti, damla sulama" }, { t: "Biyoçeşitlilik", s: "yerli tohum, az kimyasal" }, { t: "Gelir", s: "çiftçi yaşayabilmeli" }] })
  ]);
  DEEP("cog11-kritik-madenler", [
    AN("flow", "Canlandırma: bir maden ne zaman ‘kritik’ olur?", { mode: "col", cap: "Önemi yüksek ve tedariki riskli madenler kritik sayılır.", nodes: [{ t: "Teknoloji ve enerji için gerekli", s: "pil, türbin, elektronik" }, { t: "Kaynaklar birkaç ülkede toplanmış", s: "lityum, kobalt, nadir toprak" }, { t: "Tedarik riski ve bağımlılık", s: "fiyat ve siyaset etkisi" }, { t: "Çözüm", s: "geri dönüşüm, kaynak çeşitlendirme" }] })
  ]);

  /* ----- Din Kültürü ----- */
  DEEP("dkab11-kader", [
    AN("flow", "Canlandırma: kader ve çaba birlikte nasıl düşünülür?", { mode: "col", cap: "İslam inancına göre insan sebeplere başvurur, sonucu Allah’a bırakır.", nodes: [{ t: "Sebeplere başvur", s: "çalış, önlem al, plan yap" }, { t: "Çabanı göster", s: "elinden geleni yap" }, { t: "Tevekkül et", s: "sonucu Allah’a bırak" }, { t: "Sonuca razı ol, ders çıkar", s: "başarıda şükür, başarısızlıkta sabır ve yeniden deneme" }] })
  ]);
  DEEP("dkab11-akil-irade", [
    AN("flow", "Canlandırma: akıl, irade ve sorumluluk zinciri", { mode: "col", cap: "Sorumluluk, akıl ve iradeyle doğrudan bağlantılıdır.", nodes: [{ t: "Akıl", s: "doğruyu yanlıştan ayırır" }, { t: "İrade", s: "seçer ve karar verir" }, { t: "Sorumluluk", s: "seçimin sonucunu üstlenir" }, { t: "Hesap verme", s: "Allah’a, kendine ve çevreye karşı" }] })
  ]);
  DEEP("dkab11-ayetler", [
    AN("flow", "Canlandırma: ayet mesajı nasıl özetlenir?", { mode: "col", cap: "Bir ayetin mesajı üç adımda çıkarılır.", nodes: [{ t: "Meali ve nüzul sebebini oku", s: "Diyanet İşleri Başkanlığı meali" }, { t: "Çözümle", s: "kişiler, yerler, konular, kavramlar" }, { t: "Sınıflandır", s: "inanç, ahlak, bilim…" }, { t: "Açıkla", s: "mesajı kendi cümlelerinle yaz" }] })
  ]);
  DEEP("dkab11-din-tanimlari", [
    AN("flow", "Canlandırma: dine farklı disiplinlerin bakışı", { mode: "tree", cap: "Her disiplin dinin farklı bir yönüne bakar.", nodes: [{ t: "Din", s: "" }, { t: "Psikoloji", s: "bireyin duygu ve yaşantısı" }, { t: "Sosyoloji", s: "toplumsal işlev ve birlik" }, { t: "Felsefe / Antropoloji", s: "akıl yoluyla sorgulama; kültürel biçimler" }] })
  ]);
  DEEP("dkab11-din-felsefe-bilim", [
    AN("tl", "Canlandırma: İslam medeniyetinde bilim kurumları", { cap: "Kurumlar, bilginin üretilmesi ve aktarılması için kurulmuştu.", events: [{ y: "VIII–IX. yy", t: "Beytülhikme (Bağdat)", d: "Çeviri ve araştırma merkezi." }, { y: "XI. yy", t: "Nizamiye Medreseleri", d: "Büyük Selçuklu’da yüksek eğitim." }, { y: "XV. yy", t: "Semerkant Rasathanesi", d: "Uluğ Bey; astronomi gözlemleri." }] })
  ]);
  DEEP("dkab11-din-sanat", [
    AN("flow", "Canlandırma: din ve sanat ilişkisi", { mode: "tree", cap: "Din ile sanat estetik değerler üzerinden buluşur.", nodes: [{ t: "Din ve sanat", s: "" }, { t: "Yazı ve resim", s: "hat, tezhip, minyatür" }, { t: "Mimari", s: "cami, külliye, çeşme" }, { t: "Müzik ve edebiyat", s: "ilahi, mûsiki, şiir" }] })
  ]);
  DEEP("dkab11-medeniyet", [
    AN("flow", "Canlandırma: medeniyetin unsurları", { mode: "tree", cap: "Medeniyet maddi ve manevi birikimin bütünüdür.", nodes: [{ t: "Medeniyet", s: "" }, { t: "Maddi unsurlar", s: "mimari, şehir, el sanatları, ulaşım" }, { t: "Manevi unsurlar", s: "dil, edebiyat, hukuk, ahlak, inanç" }] })
  ]);
})();
