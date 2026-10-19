/* Soru bankası: matematik dışındaki dersler (fizik, kimya, biyoloji, coğrafya, tarih, inkılap, felsefe, edebiyat). Özgün sorular, adım adım çözümlü.
   Etiket: yks = "ders:kazanımkodu" (MEB–ÖSYM 2026 kazanım belgesi; bkz. data/yks-kazanim.js). Çıkmış soru değildir. İlk set; her derse genişletilecek. */
(function () {
  var M = (KESIF.meta = KESIF.meta || {});
  function Q(id, subj, code, sinav, zor, q, right, rightWhy, wrongs, hint, steps, explain) {
    var opts = [{ t: right, ok: true, why: rightWhy }];
    wrongs.forEach(function (w) { opts.push({ t: w[0], why: w[1] }); });
    KESIF.daily.push({ id: id, subject: subj === "ink" ? "tar" : subj, q: q, opts: opts, hint: hint, solution: steps, explain: explain || "" });
    M[id] = { yks: subj + ":" + code, sinav: sinav, zor: zor, kaynak: "özgün" };
  }
  /* ---------- FİZİK ---------- */
  Q("fz1", "fiz", "9.3.1.3", ["tyt"], 1, "Düzgün doğrusal hareket yapan bir araç 20 s'de 300 m yol alıyor. Aracın hızı kaç m/s'dir?", "15 m/s", "Düzgün harekette hız = yol ÷ zaman = 300 ÷ 20 = 15 m/s.",
    [["6000 m/s", "Yol ile zaman çarpılmış; hız bölme ile bulunur."], ["320 m/s", "Yol ile zaman toplanmış."], ["0,067 m/s", "Zaman yola bölünmüş; ters yazılmış."]],
    "Hız = yol ÷ zaman.", ["Düzgün doğrusal harekette hız sabittir: v = x ÷ t.", "v = 300 m ÷ 20 s.", "v = 15 m/s."], "v = x ÷ t");
  Q("fz2", "fiz", "9.3.1.4", ["tyt"], 2, "Bir araç 60 km/sa hızla 3 saat, ardından 90 km/sa hızla 1 saat gidiyor. Aracın bu yolculuktaki ortalama hızı kaç km/sa'dir?", "67,5 km/sa", "Ortalama hız = toplam yol ÷ toplam zaman = (180 + 90) ÷ 4 = 67,5.",
    [["75 km/sa", "Hızların aritmetik ortalaması (60 + 90) ÷ 2; süreler eşit olmadığı için yanlış."], ["150 km/sa", "Hızlar toplanmış."], ["70 km/sa", "Yuvarlak bir tahmin; toplam yol ve zaman hesaplanmalı."]],
    "Ortalama hız, hızların ortalaması değil; toplam yolun toplam zamana oranı.", ["Birinci bölüm: 60 · 3 = 180 km.", "İkinci bölüm: 90 · 1 = 90 km.", "Toplam yol 270 km, toplam zaman 4 saat.", "Ortalama hız = 270 ÷ 4 = 67,5 km/sa."], "Süreler eşit değilse hızların aritmetik ortalaması alınmaz.");
  Q("fz3", "fiz", "9.3.1.5", ["tyt"], 1, "Durgun halden harekete geçen bir araç 5 s'de 20 m/s hıza ulaşıyor. Aracın ivmesi kaç m/s²'dir?", "4 m/s²", "İvme = hız değişimi ÷ zaman = (20 − 0) ÷ 5 = 4 m/s².",
    [["100 m/s²", "Hız ile zaman çarpılmış; ivme bölme ile bulunur."], ["0,25 m/s²", "Zaman hıza bölünmüş; ters yazılmış."], ["15 m/s²", "Hız ile zaman çıkarılmış; birimler uymuyor."]],
    "İvme, birim zamandaki hız değişimidir.", ["Başlangıç hızı 0, son hız 20 m/s.", "a = Δv ÷ Δt = 20 ÷ 5.", "a = 4 m/s²."], "a = Δv ÷ Δt");
  Q("fz4", "fiz", "9.3.1.2", ["tyt"], 1, "Bir koşucu 400 m'lik pistte tam bir tur koşup başladığı noktaya dönüyor. Koşucunun yer değiştirmesi kaç m'dir?", "0", "Yer değiştirme, başlangıç ile bitiş noktası arasındaki vektördür; aynı noktaya döndüğü için 0.",
    [["400 m", "Bu, alınan yol (tur uzunluğu); yer değiştirme değil."], ["200 m", "Yarım tur gibi düşünülmüş; tam tur atıldı."], ["800 m", "İki tur yolu."]],
    "Yol ile yer değiştirme aynı şey mi? Başlangıç ve bitiş noktası nerede?", ["Alınan yol 400 m.", "Başlangıç ve bitiş noktası aynı.", "Yer değiştirme = bitiş konumu − başlangıç konumu = 0."], "Yol skaler, yer değiştirme vektördür.");
  /* ---------- KİMYA ---------- */
  Q("km1", "kim", "9.2.3.2", ["tyt"], 1, "Periyodik sistemde aynı grupta (düşey sütunda) bulunan elementler için hangisi doğrudur?", "Dış katman elektron sayıları aynıdır; benzer kimyasal özellik gösterirler.", "Aynı grup elementlerinin değerlik (dış katman) elektron sayısı aynıdır.",
    [["Atom numaraları aynıdır.", "Atom numaraları ardışık artar; aynı grupta farklıdır."], ["Katman sayıları aynıdır.", "Aynı periyotta katman sayısı aynıdır; aynı grupta yukarıdan aşağı artar."], ["Atom kütleleri aynıdır.", "Kütleler farklıdır."]],
    "Grup, dış katmandaki elektron sayısıyla ilgilidir.", ["Düşey sütundaki elementler aynı gruptadır.", "Aynı gruptaki elementlerin dış katman elektron sayıları aynı.", "Bu yüzden kimyasal özellikleri benzer."], "Grup = dış katman elektron sayısı; periyot = katman sayısı.");
  Q("km2", "kim", "9.2.3.1", ["tyt"], 1, "Atom numarası 11 olan Na elementinin katman elektron dağılımı hangisidir?", "2, 8, 1", "11 elektron: 1. katmana 2, 2. katmana 8, kalan 1 elektron 3. katmana.",
    [["2, 8, 2", "Toplam 12 elektron eder; Na'da 11."], ["2, 9", "2. katman en fazla 8 elektron alır."], ["2, 8, 8, 1", "Toplam 19 elektron (K elementi)."]],
    "Katmanlar sırayla 2, 8, 8… elektron alır.", ["Toplam elektron sayısı 11.", "1. katman 2, 2. katman 8 → 10 elektron.", "Kalan 1 elektron 3. katmana: 2, 8, 1."], "Dolum sırası: 2, 8, 8, 18…");
  Q("km3", "kim", "9.2.3.1", ["tyt"], 2, "Atom numarası 17 olan Cl elementi periyodik sistemde kaçıncı periyot ve kaçıncı gruptadır?", "3. periyot, 7A grubu", "17 elektron: 2, 8, 7 → 3 katman (3. periyot), dış katmanda 7 elektron (7A).",
    [["2. periyot, 7A grubu", "3 katman olduğu için 3. periyot."], ["3. periyot, 5A grubu", "Dış katmanda 7 elektron var; 5A değil."], ["7. periyot, 3A grubu", "Periyot ve grup yer değiştirmiş."]],
    "Elektron dağılımını yaz: katman sayısı periyodu, dış elektron sayısı grubu verir.", ["17 elektron: 2, 8, 7.", "Katman sayısı 3 → 3. periyot.", "Dış katmanda 7 elektron → 7A grubu."], "Periyot = katman sayısı; A grubu = dış elektron sayısı.");
  Q("km4", "kim", "9.2.3.3", ["tyt"], 2, "Aynı periyotta soldan sağa gidildikçe atom yarıçapı genel olarak nasıl değişir?", "Azalır", "Aynı katman sayısında çekirdek yükü arttıkça elektronlar daha güçlü çekilir; yarıçap küçülür.",
    [["Artar", "Yukarıdan aşağı (grupta) inildikçe katman sayısı arttığı için artar."], ["Değişmez", "Çekirdek yükü arttığı için değişir."], ["Önce artar sonra azalır", "Periyot boyunca genel eğilim sürekli azalmadır."]],
    "Aynı katman sayısı, artan çekirdek yükü: elektronlar nasıl etkilenir?", ["Aynı periyotta katman sayısı sabit.", "Soldan sağa proton sayısı (çekirdek yükü) artıyor.", "Elektronlar çekirdeğe daha çok çekilir → yarıçap küçülür."], "Periyotta azalır, grupta yukarıdan aşağı artar.");
  /* ---------- BİYOLOJİ ---------- */
  Q("bm1", "biy", "9.2.1.2", ["tyt"], 1, "Hücrenin enerji üretim merkezi olarak bilinen organel hangisidir?", "Mitokondri", "Mitokondri, hücresel solunumla besinlerdeki enerjiyi ATP'ye dönüştürür.",
    [["Ribozom", "Protein sentezinden sorumludur."], ["Golgi aygıtı", "Salgı maddelerini paketler ve taşır."], ["Lizozom", "Sindirim enzimlerini içerir."]],
    "ATP üretiminin gerçekleştiği organel.", ["Hücrenin enerji ihtiyacı ATP ile karşılanır.", "ATP üretiminin büyük kısmı mitokondride (hücresel solunum) gerçekleşir.", "Cevap: mitokondri."], "Mitokondri = enerji santrali.");
  Q("bm2", "biy", "9.2.1.2", ["tyt"], 1, "Protein sentezinin gerçekleştiği organel hangisidir?", "Ribozom", "Ribozomlar amino asitleri birleştirerek protein sentezler.",
    [["Mitokondri", "Enerji üretir."], ["Lizozom", "Sindirimle ilgilidir."], ["Koful", "Madde depolar."]],
    "Hem prokaryot hem ökaryot hücrede bulunan, zarsız organel.", ["Protein sentezi ribozomlarda yapılır.", "Ribozom zarsızdır ve her hücrede bulunur."], "Ribozom = protein fabrikası.");
  Q("bm3", "biy", "9.2.1.2", ["tyt"], 2, "Aşağıdakilerden hangisi prokaryot bir hücrede bulunmaz?", "Zarlı organeller (örneğin mitokondri)", "Prokaryotlarda çekirdek zarı ve zarlı organeller yoktur; ribozom, DNA ve hücre zarı bulunur.",
    [["Ribozom", "Prokaryotlarda ribozom bulunur."], ["Hücre zarı", "Bütün hücrelerde hücre zarı vardır."], ["DNA", "Prokaryotlarda DNA sitoplazmada serbest halde bulunur."]],
    "Prokaryot ile ökaryotu ayıran temel fark nedir?", ["Prokaryot: zarlı organel ve gerçek çekirdek yok.", "Ribozom, hücre zarı ve DNA prokaryotta da var.", "Bulunmayan: zarlı organeller (mitokondri vb.)."], "Prokaryot = çekirdeksiz, zarlı organelsiz.");
  /* ---------- COĞRAFYA ---------- */
  Q("cg1", "cog", "9.1.5", ["tyt", "ayt"], 1, "Greenwich'in 45° doğusundaki bir yerin yerel saati, Greenwich yerel saatinden kaç saat ileridir?", "3 saat", "Dünya 24 saatte 360° döner: 15° = 1 saat. 45° ÷ 15 = 3 saat; doğuda saat ileridir.",
    [["2 saat", "45 ÷ 15 = 3; 2 değil."], ["4 saat", "60° için olurdu."], ["3 saat geri", "Doğuya gidildikçe saat ileri gider."]],
    "Boylam başına süre: 360° ÷ 24 saat = 15°/saat.", ["360° ÷ 24 saat = 15° / saat.", "45° ÷ 15° = 3 saat.", "Doğu yönünde yerel saat ileridir."], "Doğuya gidildikçe saat ileri, batıya geri.");
  Q("cg2", "cog", "9.1.5", ["tyt", "ayt"], 2, "A şehrinde yerel saat 12.00 iken A'nın 30° doğusundaki B şehrinde yerel saat kaçtır?", "14.00", "30° ÷ 15° = 2 saat; doğuda saat ileri: 12.00 + 2 = 14.00.",
    [["10.00", "Doğuya gidildikçe saat ileri gider; 10.00 batı için olurdu."], ["12.30", "30° için 30 dakika alınmış; 1° = 4 dakika, 30° = 120 dakika."], ["11.00", "1 saat fark 15° içindir."]],
    "30° kaç saatlik fark eder? Yön doğu.", ["15° = 1 saat → 30° = 2 saat.", "B, A'nın doğusunda: saat ileri.", "12.00 + 2 saat = 14.00."], "1° = 4 dakika.");
  Q("cg3", "cog", "9.1.4", ["tyt", "ayt"], 1, "Dünya'nın kendi ekseni etrafında dönmesinin (günlük hareket) sonuçlarından biri hangisidir?", "Gece ve gündüzün oluşması", "Dönme sırasında yüzeyin farklı bölgeleri Güneş'e dönük kalır: gece ve gündüz oluşur.",
    [["Mevsimlerin oluşması", "Mevsimler, yıllık hareket ve eksen eğikliğinin sonucudur."], ["Yılın 365 gün sürmesi", "Yıl uzunluğu yıllık harekete bağlıdır."], ["Güneş'in yılın her günü aynı noktadan doğması", "Doğuş noktası yıl boyunca değişir."]],
    "Günlük hareket mi yıllık hareket mi? Hangisi 24 saatte tamamlanır?", ["Günlük hareket: 24 saatlik dönme.", "Sonuçları: gece-gündüz oluşumu, yerel saat farkları, cisimlerin sapması.", "Mevsimler yıllık harekettendir."], "Günlük hareket: gece-gündüz; yıllık hareket: mevsimler.");
  Q("cg4", "cog", "9.1.6", ["tyt", "ayt"], 1, "Ölçeği 1/100.000 olan bir haritada 3 cm uzunluğundaki bir doğru parçası gerçekte kaç km'dir?", "3 km", "3 cm · 100.000 = 300.000 cm = 3000 m = 3 km.",
    [["30 km", "Birim dönüşümünde 10 kat fark."], ["0,3 km", "Bir basamak eksik bölünmüş."], ["300 km", "cm'den km'ye dönüşüm yapılmamış."]],
    "Haritadaki uzunluk × ölçek paydası = gerçek uzunluk (cm). Sonra km'ye çevir.", ["Gerçek uzunluk = 3 · 100.000 = 300.000 cm.", "100 cm = 1 m → 3000 m.", "1000 m = 1 km → 3 km."], "1 km = 100.000 cm.");
  /* ---------- TARİH / İNKILAP ---------- */
  Q("th1", "tar", "9.2.2", ["tyt", "ayt"], 1, "Yazının icadı insanlık tarihinde neden önemli bir dönüm noktası sayılır?", "Bilgilerin kalıcı biçimde kaydedilip sonraki kuşaklara aktarılmasını sağladığı için", "Yazı sayesinde bilgi, yasa ve olaylar kaydedilerek tarih çağları başlamıştır.",
    [["İlk kez ateşin bulunmasını sağladığı için", "Ateşin bulunuşu yazıdan çok önce gerçekleşmiştir."], ["Tarım faaliyetlerini başlattığı için", "Tarım yazıdan önce başlamıştır."], ["Para kullanımını başlattığı için", "Para kullanımı yazının doğrudan sonucu değildir."]],
    "Yazıdan önceki ve sonraki dönemleri ne ayırır?", ["Yazıdan önce bilgiler sözlü aktarılıyordu.", "Yazıyla bilgi kalıcı biçimde kaydedilir ve aktarılır.", "Tarih çağlarının başlangıcı yazının icadıyla kabul edilir."], "Yazı → tarih çağlarının başlangıcı.");
  Q("th2", "tar", "9.2.3", ["tyt", "ayt"], 1, "Hammurabi Kanunları hangi medeniyete aittir?", "Babil", "Hammurabi, Babil Krallığı'nın hükümdarıdır; kanunları MÖ 1700 civarına tarihlenir.",
    [["Mısır", "Mısır'ın hukuku farklıdır."], ["Hitit", "Hititlerde de yazılı hukuk vardır ama Hammurabi Babil'e aittir."], ["Sümer", "Sümerlerde Urkagina Yasaları öne çıkar."]],
    "Hammurabi hangi krallığın hükümdarı?", ["Hammurabi, Babil Krallığı'nın kralıdır.", "Kanunlarını MÖ 18. yüzyıl civarında (yaklaşık MÖ 1700) yazdırmıştır.", "Cevap: Babil."], "Hammurabi = Babil.");
  Q("ik1", "ink", "2.2", ["tyt", "ayt"], 1, "Türkiye Büyük Millet Meclisi hangi tarihte açılmıştır?", "23 Nisan 1920", "TBMM 23 Nisan 1920'de Ankara'da açılmıştır.",
    [["19 Mayıs 1919", "Mustafa Kemal'in Samsun'a çıkışı; Millî Mücadele'nin başlangıcı."], ["29 Ekim 1923", "Cumhuriyet'in ilanı."], ["30 Ağustos 1922", "Büyük Taarruz'un zaferle sonuçlandığı gün."]],
    "Meclisin açılışı ile Cumhuriyet'in ilanı aynı gün mü?", ["TBMM Ankara'da toplandı.", "Tarih: 23 Nisan 1920.", "Bu gün Ulusal Egemenlik ve Çocuk Bayramı olarak kutlanır."], "23 Nisan 1920.");
  Q("ik2", "ink", "2.6", ["tyt", "ayt"], 1, "Millî Mücadele'nin diplomatik başarısı olarak kabul edilen ve Türkiye'nin bağımsızlığını uluslararası alanda tanıtan antlaşma hangisidir?", "Lozan Antlaşması", "Lozan Antlaşması (24 Temmuz 1923) yeni Türk devletinin bağımsızlığını tescil etmiştir.",
    [["Sevr Antlaşması", "Osmanlı'yı parçalayan, uygulanmayan antlaşma."], ["Mudanya Ateşkes Antlaşması", "Silahlı mücadeleyi sonlandıran ateşkes; barış antlaşması değil."], ["Mondros Ateşkes Antlaşması", "Osmanlı'nın I. Dünya Savaşı'ndaki yenilgisini kabul ettiği ateşkes."]],
    "Sevr ile Lozan'ı karşılaştır: hangisi bağımsızlığı kabul etti?", ["Sevr (1920) uygulanmadı.", "Mudanya (1922) ateşkes imzalandı.", "Lozan (24 Temmuz 1923) barış antlaşmasıdır; bağımsızlığı tescil eder."], "Lozan = barış ve bağımsızlık.");
  /* ---------- FELSEFE ---------- */
  Q("fl1", "fel", "10.1.1", ["tyt"], 1, "\"Felsefe\" sözcüğünün (philosophia) kökeni olarak aşağıdakilerden hangisi doğrudur?", "Bilgelik sevgisi", "Philos (sevgi) + sophia (bilgelik): bilgelik sevgisi.",
    [["Bilgi toplamak", "Felsefe yalnızca bilgi toplamak değildir."], ["Deney yapmak", "Deney, bilimsel yöntemdir."], ["İnanç sistemi", "Felsefe inançla değil akılla sorgulamayla ilgilidir."]],
    "Yunanca iki kelimenin birleşimi: philos ve sophia.", ["philos = sevgi, sophia = bilgelik.", "Birleşimi: bilgelik sevgisi."], "Felsefe = bilgelik sevgisi.");
  Q("fl2", "fel", "10.1.2", ["tyt"], 2, "Aşağıdakilerden hangisi felsefi düşüncenin özelliklerinden biridir?", "Her görüşü sorgular ve gerekçelendirmeye çalışır", "Felsefi düşünce eleştirel, sorgulayıcı ve gerekçelendiricidir; kesin bir dogmaya dayanmaz.",
    [["Kesin ve değişmez doğruları ilan eder", "Felsefe dogmatik değildir; sorgulama sürer."], ["Yalnızca deneyle kanıtlanabilen konuları inceler", "Felsefe deneysel olmayan sorular da sorar."], ["Yalnızca gelenekten gelen bilgiyi kabul eder", "Felsefe gelenekleri de sorgular."]],
    "Felsefede bir görüşü kabul etmeden önce ne yapılır?", ["Felsefe sorgulayıcı ve eleştireldir.", "Görüşler gerekçeleriyle değerlendirilir.", "Dogmatik ve değişmez iddialar felsefenin özelliği değildir."], "Felsefe = sorgulama + gerekçelendirme.");
  /* ---------- EDEBİYAT ---------- */
  Q("eb1", "edeb", "A.1.4", ["tyt", "ayt"], 2, "Beyit sayısı genellikle 5–15 arasında olan, aa ba ca da… biçiminde kafiyelenen Divan edebiyatı nazım biçimi hangisidir?", "Gazel", "Gazel: ilk beyit kendi arasında, sonraki beyitlerin ikinci dizeleri ilk beyitle kafiyelenir (aa ba ca…).",
    [["Kaside", "Kaside daha uzundur (genelde 33–99 beyit) ve övgü içindir."], ["Mesnevi", "Mesnevide her beyit kendi arasında kafiyelenir (aa bb cc)."], ["Rubai", "Rubai dört dizelik bir biçimdir."]],
    "Kafiye düzenine ve beyit sayısına bak.", ["aa ba ca kafiye düzeni gazelin özelliğidir.", "Beyit sayısı genelde 5–15.", "Cevap: gazel."], "Gazel: aa ba ca…, kaside: uzun, mesnevi: aa bb cc.");
  Q("eb2", "edeb", "A.1.5", ["tyt", "ayt"], 1, "\"Rüzgâr kapıları dövüyor.\" cümlesinde hangi edebî sanat vardır?", "Kişileştirme (teşhis)", "Rüzgâra insana ait \"dövmek\" eylemi verilmiş: cansız varlık insan gibi davranıyor.",
    [["Abartma (mübalağa)", "Gerçeklikten aşırı uzaklaşan bir büyütme yok."], ["Karşıtlık (tezat)", "Zıt kavramlar birlikte kullanılmamış."], ["Benzetme", "\"Gibi, sanki\" gibi bir ilgi/ögesi yok; asıl olay insana özgü eylemin verilmesi."]],
    "Cansız varlığa hangi insan özelliği verilmiş?", ["Rüzgâr cansız bir varlıktır.", "\"Kapıları dövmek\" insana özgü bir eylemdir.", "İnsana özgü özellik cansıza verilirse kişileştirme olur."], "Kişileştirme = insan özelliği vermek.");
  Q("eb3", "edeb", "A.1.3", ["tyt", "ayt"], 1, "Şiirde dize sonlarında bulunan ses benzerliğine ne ad verilir?", "Kafiye", "Dize sonlarındaki (sonrasında gelen ek/sözcükten önceki) ses benzerliğine kafiye denir.",
    [["Redif", "Kafiyeden sonra tekrarlanan aynı ek ya da sözcüklerdir."], ["Ölçü", "Dizelerdeki hece sayısı ya da aruz kalıbıdır."], ["Nakarat", "Aynı dize ya da dize grubunun dörtlükler arasında tekrarıdır."]],
    "Ses benzerliği mi, sözcük tekrarı mı?", ["Dize sonlarında ses benzerliği = kafiye.", "Kafiyeden sonra gelen aynı sözcük/ek = redif.", "Cevap: kafiye."], "Kafiye = ses benzerliği; redif = aynı sözcük/ek.");
})();
