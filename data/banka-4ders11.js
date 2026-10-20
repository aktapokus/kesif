/* Soru bankası (Maarif biçimi): 11. sınıf Tarih 1. Ünite (1683–1789 mücadeleleri), Kimya 1. Tema (tepkimelerde enerji), Biyoloji 1. Tema (canlılık ve tepki), Felsefe 1. Ünite (çevre etiği).
   Her soruda ipucu, "nasıl düşünmeliyiz" notu ve çözüm/gerekçe vardır. Özgün sorular (CC BY-NC-SA 4.0). meta.kn = konu adı. */
(function () {
  var M = (KESIF.meta = KESIF.meta || {}), H = (KESIF.help = KESIF.help || {});
  function mk(subj, kn, lesson) {
    return {
      Q: function (id, zor, q, right, rightWhy, wrongs, hint, think, steps, step) {
        var opts = [{ t: right, ok: true, why: rightWhy }]; wrongs.forEach(function (w) { opts.push({ t: w[0], why: w[1] }); });
        KESIF.daily.push({ id: id, subject: subj, q: q, opts: opts, hint: hint, think: think, solution: steps });
        M[id] = { kn: kn, sinav: ["s11"], zor: zor, kaynak: "özgün", tur: "beceri temelli" }; H[id] = { topic: { lesson: lesson, step: step } };
      },
      A: function (id, zor, q, answers, hint, think, steps, rubric, step) {
        KESIF.daily.push({ id: id, subject: subj, type: "open", q: q, answers: answers, hint: hint, think: think, solution: steps, rubric: rubric, explain: "", opts: [] });
        M[id] = { kn: kn, sinav: ["s11"], zor: zor, kaynak: "özgün", tur: "açık uçlu" }; H[id] = { topic: { lesson: lesson, step: step } };
      }
    };
  }
  /* ---------- Tarih ---------- */
  var T = mk("tar", "11. sınıf Tarih · 1683–1789 mücadeleleri", "tar11-mucadele");
  T.Q("t11q1", 1, "Osmanlı Devleti'nin Avrupa'da ilk kez büyük toprak kaybettiği antlaşma aşağıdakilerden hangisidir?", "Karlofça Antlaşması (1699)", "Macaristan, Transilvanya, Mora ve Podolya Osmanlı'dan ayrıldı; Osmanlı ilk kez büyük toprak kaybı ile barışa zorlandı.",
    [["Prut Antlaşması (1711)", "Prut'ta Osmanlı başarılı oldu; Azak geri alındı."], ["Belgrad Antlaşması (1739)", "Belgrad'da Osmanlı Belgrad'ı geri aldı; kayıp değil kazanç."], ["Küçük Kaynarca Antlaşması (1774)", "Ağır bir kayıp ama ilk büyük toprak kaybı değil; ondan önce Karlofça."]],
    "En eski kayıp antlaşmasını düşün.", "‘İlk’ sözcüğüne dikkat: kronolojide en eskiyi seç.", ["1683 Viyana'dan sonra savaşlar 1699'da Karlofça ile bitti.", "Büyük toprak kaybı ilk kez burada yaşandı."], 3);
  T.Q("t11q2", 2, "Aşağıdaki antlaşmalardan hangisi Osmanlı Devleti'nin lehine sonuçlanmıştır?", "Belgrad Antlaşması (1739)", "Osmanlı Belgrad'ı Avusturya'dan geri aldı; bu dönemin Osmanlı için başarılı antlaşmalarından biridir.",
    [["Karlofça Antlaşması (1699)", "Osmanlı büyük toprak verdi."], ["Pasarofça Antlaşması (1718)", "Banat ve Belgrad Avusturya'ya geçti: kayıp."], ["Küçük Kaynarca Antlaşması (1774)", "Kırım ayrıldı, tazminat ödendi: kayıp."]],
    "Hangi antlaşmada toprak geri alındı?", "Her antlaşmanın sonucunu ‘kazanç/kayıp’ diye etiketle.", ["Karlofça kayıp, Pasarofça kayıp, Küçük Kaynarca kayıp.", "Belgrad (1739): Belgrad geri alındı → lehine."], 3);
  T.Q("t11q3", 1, "Pasarofça Antlaşması (1718) ile Osmanlı Devleti hangi devlete toprak kaybetmiştir?", "Avusturya", "Banat ve Belgrad (Sırbistan'ın bir bölümü) Avusturya'ya geçti.",
    [["Rusya", "Rusya ile Prut (1711) ve Küçük Kaynarca (1774) var."], ["Venedik", "Venedik'e Mora Karlofça'da (1699) verilmişti."], ["Polonya", "Podolya Karlofça'da Polonya'ya geçti."]],
    "Pasarofça hangi devletle yapıldı?", "Antlaşmayı karşı tarafıyla birlikte ezberleme: Karlofça–Avusturya/Venedik/Polonya, Prut–Rusya, Pasarofça–Avusturya.", ["Pasarofça 1718: karşı taraf Avusturya.", "Banat ve Belgrad Avusturya'ya geçti."], 3);
  T.Q("t11q4", 2, "Küçük Kaynarca Antlaşması (1774) ile ilgili aşağıdaki ifadelerden hangisi doğrudur?", "Kırım bağımsız ilan edildi ve Rusya Karadeniz'e çıkış hakkı kazandı.", "Bu iki sonuç hem askerî hem siyasi bir değişimdir: Rusya'nın Karadeniz'de güçlenmesi.",
    [["Osmanlı Rusya'dan savaş tazminatı aldı.", "Tazminatı ödeyen Osmanlı'ydı."], ["Kırım Osmanlı'ya geri verildi.", "Tam tersi: Kırım Osmanlı'dan ayrıldı."], ["Antlaşma Avusturya ile yapıldı.", "Küçük Kaynarca Osmanlı–Rus antlaşmasıdır."]],
    "Antlaşmanın karşı tarafı kim?", "Sonuçları üç başlıkta topla: toprak/sınır, ödeme, haklar.", ["Küçük Kaynarca: Osmanlı–Rus.", "Kırım bağımsız, Rusya Karadeniz'e çıktı, Osmanlı tazminat ödedi."], 8);
  T.Q("t11q5", 2, "II. Viyana Kuşatması'ndan (1683) sonra Avusturya, Polonya ve Venedik'in oluşturduğu birliğe ne ad verilir?", "Kutsal İttifak", "Avrupa devletleri Osmanlı'ya karşı 1684'te Kutsal İttifak'ı kurdu; Rusya da sonradan katıldı.",
    [["Kutsal Roma Cumhuriyeti", "Böyle bir birlik yok; Avusturya Kutsal Roma Germen İmparatorluğu'nun parçasıydı."], ["Balkan Antantı", "20. yüzyıla ait bir ittifak."], ["Üçlü İttifak", "1882'de kurulan, 19. yüzyıl sonu ittifakı."]],
    "Adında ‘kutsal’ geçen birlik.", "Kronoloji: 1683 → 1684 hemen ardından.", ["1683 kuşatma başarısız.", "1684'te Kutsal İttifak kuruldu."], 3);
  T.Q("t11q6", 2, "II. Viyana Kuşatması (1683) ile Küçük Kaynarca Antlaşması (1774) arasında kaç yıl vardır?", "91 yıl", "1774 − 1683 = 91.",
    [["81 yıl", "Çıkarmada 10 yıl hata yapılmış: 1774 − 1683 = 91."], ["71 yıl", "Çıkarmada 20 yıl hata yapılmış."], ["101 yıl", "Çıkarmada 10 yıl fazla."]],
    "Büyük yıldan küçük yılı çıkar.", "Kronolojik fark soruları: basamak basamak çıkar: 1774 − 1683.", ["1774 − 1700 = 74; 1700 − 1683 = 17.", "74 + 17 = 91."], 3);
  T.Q("t11q7", 3, "Bir öğrenci ‘Osmanlı 1699'dan sonra Avrupa karşısında savunmaya geçti’ yargısını desteklemek istiyor. Hangi kanıt bu yargıyı en güçlü destekler?", "Karlofça'da Macaristan ve Transilvanya'nın Avusturya'ya geçmesi.", "Daha önce Avrupa'ya doğru genişleyen Osmanlı artık toprak veriyor: savunma durumunun kanıtı.",
    [["Prut'ta Rus ordusunun kuşatılması.", "Bu bir Osmanlı başarısıdır; savunma yargısını destekleyen değil çürüten bir örnek."], ["Belgrad'ın 1739'da geri alınması.", "Bu da Osmanlı başarısıdır; yargıya karşı kanıt."], ["Lale Devri'nde yapılan sanat eserleri.", "Savaş ve toprak durumuyla ilgisi yok."]],
    "Hangi olay Osmanlı'nın toprak verdiğini gösteriyor?", "Bir yargıyı desteklemek için o yönde (kayıp, geri çekilme) bir olay seç.", ["‘Savunmaya geçti’ = saldırı yerine toprak vermek.", "Karlofça'da toprak verildi → destekler."], 5);
  T.Q("t11q8", 2, "Prut Savaşı (1711) hakkında hangisi doğrudur?", "Rus ordusu kuşatıldı ve Azak kalesi Osmanlı'ya geri verildi.", "Baltacı Mehmet Paşa komutasındaki Osmanlı ordusu Rus ordusunu kuşattı; antlaşma ile Azak geri alındı.",
    [["Osmanlı Avusturya'ya yenildi.", "Prut Rusya ile yapılan savaştır."], ["Antlaşma ile Kırım ayrıldı.", "Kırım'ın ayrılması 1774'te."], ["Osmanlı Belgrad'ı kaybetti.", "Belgrad Pasarofça'da (1718) kaybedildi."]],
    "Prut hangi devletle yapıldı?", "Savaş–karşı taraf–sonuç üçlüsünü hatırla.", ["Prut: Osmanlı–Rus.", "Sonuç: Azak Osmanlı'ya iade."], 5);
  T.Q("t11q9", 3, "Bir öğrenci ‘Pasarofça Antlaşması Osmanlı'nın Rusya'ya yenilgisini gösterir’ diyor. Bu yorumdaki hata nedir?", "Pasarofça Avusturya ile yapılmıştır; Rusya ile ilgili olan Prut (1711) ve Küçük Kaynarca (1774)'tür.", "Yorum antlaşmanın karşı tarafını yanlış almış; Pasarofça'da Osmanlı Avusturya'ya Banat ve Belgrad'ı verdi.",
    [["Hata yoktur; Pasarofça bir Osmanlı–Rus antlaşmasıdır.", "Pasarofça Osmanlı–Avusturya antlaşmasıdır."], ["Pasarofça'da Osmanlı kazanmıştır.", "Osmanlı toprak kaybetmiştir."], ["Antlaşma 1699'da yapılmıştır.", "Pasarofça 1718; 1699 Karlofça."]],
    "Antlaşmanın karşı tarafını kontrol et.", "Hata analizinde önce yıl–taraf–sonuç üçlüsünü doğrula.", ["Pasarofça 1718, Avusturya.", "Rusya'yla ilgili olan: Prut 1711, Küçük Kaynarca 1774."], 3);
  T.Q("t11q10", 3, "Karlofça (1699) ve Küçük Kaynarca (1774) antlaşmaları karşılaştırıldığında ortak nokta hangisidir?", "İkisinde de Osmanlı toprak ya da egemenlik haklarını kaybetmiştir.", "Karlofça'da Macaristan, Transilvanya, Mora, Podolya; Küçük Kaynarca'da Kırım üzerindeki egemenlik kaybedilmiştir.",
    [["İkisi de Rusya ile yapılmıştır.", "Karlofça Avusturya, Venedik ve Polonya ile yapıldı."], ["İkisinde de Osmanlı savaş tazminatı almıştır.", "Tazminatı Osmanlı ödedi (Küçük Kaynarca)."], ["İkisi de 1700'lerin ikinci yarısında yapılmıştır.", "Karlofça 1699; yalnızca Küçük Kaynarca 1774."]],
    "İki antlaşmanın sonuçlarını yan yana yaz.", "Karşılaştırma sorularında ortak ve farklı noktaları ayır.", ["Karlofça: toprak kaybı (Avusturya, Venedik, Polonya).", "Küçük Kaynarca: Kırım'ın ayrılması, tazminat.", "Ortak: Osmanlı kayıp verdi."], 5);
  T.A("t11o1", 2, "Aşağıdakileri yazınız: (a) Osmanlı'nın Avrupa'da ilk büyük toprak kaybettiği antlaşmanın adı ve (b) yılı.",
    [{ label: "Antlaşma", v: "Karlofça", accept: ["karlofça", "karlofca", "karlofça antlaşması"] }, { label: "Yıl", v: "1699" }], "II. Viyana Kuşatması'ndan sonraki barış.", "Önce 1683'ü, sonra savaşların bitişini düşün.",
    ["Kutsal İttifak savaşları 1699'da Karlofça ile bitti.", "Yıl 1699."], [[1, "Karlofça Antlaşması adı"], [1, "Yıl 1699"]], 3);
  T.A("t11o2", 3, "Küçük Kaynarca Antlaşması (1774) ile ilgili (a) Osmanlı'nın karşı tarafı olan devleti ve (b) bağımsız ilan edilen bölgeyi yazınız.",
    [{ label: "Karşı taraf", v: "Rusya", accept: ["rusya", "ruslar"] }, { label: "Bağımsız ilan edilen bölge", v: "Kırım", accept: ["kırım", "kirim"] }], "Antlaşmanın adındaki Kaynarca Bulgaristan'da bir köy; karşı taraf kim?", "Sonuçları sırala: toprak/sınır, ödeme, haklar.",
    ["Küçük Kaynarca Osmanlı–Rus antlaşmasıdır.", "Kırım bağımsız ilan edildi."], [[1, "Rusya"], [1, "Kırım"]], 8);

  /* ---------- Kimya ---------- */
  var K = mk("kim", "11. sınıf Kimya · Tepkimelerde enerji değişimi", "kim11-enerji");
  K.Q("k11q1", 1, "Girenlerin entalpisi 80 kJ, ürünlerin entalpisi 30 kJ olan bir tepkime için hangisi doğrudur?", "ΔH = −50 kJ; tepkime ekzotermiktir.", "ΔH = H(ürünler) − H(girenler) = 30 − 80 = −50 kJ. Negatif → ısı verir.",
    [["ΔH = +50 kJ; tepkime endotermiktir.", "Fark ters yönde alınmış."], ["ΔH = 110 kJ; tepkime ekzotermiktir.", "İki değer toplanmış."], ["ΔH = −30 kJ; tepkime ekzotermiktir.", "Yalnızca ürünlerin enerjisi alınmış."]],
    "ΔH = ürünler − girenler.", "Önce ΔH'yi hesapla, sonra işaretinden türünü söyle.", ["ΔH = 30 − 80 = −50 kJ.", "ΔH < 0 → ekzotermik."], 3);
  K.Q("k11q2", 1, "Aşağıdakilerden hangisi ekzotermik bir olaydır?", "Doğal gazın yanması", "Yanma tepkimeleri çevreye ısı verir (ΔH < 0).",
    [["Buzun erimesi", "Çevreden ısı alır: endotermik."], ["Suyun buharlaşması", "Çevreden ısı alır: endotermik."], ["Fotosentez", "Güneş enerjisi alınır: endotermik."]],
    "Isı veren olayı seç.", "Yanma, donma, yoğuşma, solunum, nötrleşme ekzotermik.", ["Yanma → ısı + ışık açığa çıkar.", "Ekzotermik."], 2);
  K.Q("k11q3", 2, "Potansiyel enerji–tepkime koordinatı grafiğinde ürünlerin enerjisi girenlerin enerjisinden yüksekse bu tepkime için hangisi doğrudur?", "ΔH pozitiftir; tepkime endotermiktir.", "Ürünler daha yüksek enerjili: aradaki fark çevreden alınmış, ΔH > 0.",
    [["ΔH negatiftir; tepkime ekzotermiktir.", "Ürünler daha düşük enerjili olsaydı ΔH negatif olurdu."], ["ΔH sıfırdır.", "Enerji farkı varsa ΔH ≠ 0."], ["Tepkime hiç gerçekleşmez.", "Endotermik tepkimeler de gerçekleşir."]],
    "Ürünler yukarıda mı aşağıda mı?", "Grafikte ok yukarı = pozitif.", ["Ürünler girenlerden yukarıda.", "ΔH = ürünler − girenler > 0 → endotermik."], 3);
  K.Q("k11q4", 2, "ΔH = +40 kJ olan bir tepkime bir kapta gerçekleştirilirken kabın sıcaklığı için ne beklenir?", "Kabın sıcaklığı düşer (kap soğur).", "Pozitif ΔH: sistem çevreden ısı alır; çevre (kap) soğur.",
    [["Kabın sıcaklığı yükselir.", "Isı veren (ekzotermik) tepkimelerde yükselir."], ["Kabın sıcaklığı değişmez.", "Enerji alışverişi var; sıcaklık değişir."], ["Kap önce ısınır sonra soğur.", "Tek yönlü bir ısı alışverişi söz konusu."]],
    "Sistem ısı alırsa çevre ne olur?", "Enerji korunur: sistem aldı, çevre verdi.", ["ΔH > 0 → endotermik.", "Çevre ısı verir → soğur."], 3);
  K.Q("k11q5", 2, "Bir öğrenci bir tepkimeyi plastik bir kapta gerçekleştiriyor ve termometre başlangıçta 25 °C iken tepkimeden sonra 35 °C gösteriyor. Bu gözleme göre tepkime için hangisi söylenebilir?", "Tepkime çevreye ısı vermiştir; ekzotermiktir.", "Çevrenin sıcaklığı yükseldiğine göre tepkimenin ısı verdiği anlaşılır.",
    [["Tepkime çevreden ısı almıştır; endotermiktir.", "Sıcaklık yükselmiş; endotermikte düşerdi."], ["Tepkimede enerji değişimi olmamıştır.", "Sıcaklık değişmiş; enerji alışverişi var."], ["Tepkime hiç gerçekleşmemiştir.", "Sıcaklık değişimi tepkimenin gerçekleştiğini gösterir."]],
    "Çevre ısındı mı soğudu mu?", "Deneyde enerji yönünü çevrenin sıcaklığından oku.", ["25 °C → 35 °C: çevre ısındı.", "Sistem ısı vermiş → ekzotermik."], 5);
  K.Q("k11q6", 2, "Suyun donması olayı için hangisi doğrudur?", "Ekzotermiktir; su çevreye ısı verir.", "Sıvıdan katıya geçerken su çevreye ısı verir; donma ekzotermik bir fiziksel olaydır.",
    [["Endotermiktir; su çevreden ısı alır.", "Buzun erimesi için doğru, donma için tersi."], ["Enerji değişimi olmaz.", "Hal değişimlerinde enerji alışverişi vardır."], ["Kimyasal bir tepkimedir.", "Donma fiziksel bir olaydır; ama yine de enerji değişimi gösterir."]],
    "Erimenin tersi olan olayı düşün.", "Bir olayın tersinde ısı alışverişinin yönü de tersine döner.", ["Erime: ısı alınır (endotermik).", "Donma: erimenin tersi → ısı verilir (ekzotermik)."], 3);
  K.Q("k11q7", 3, "Bir öğrenci ‘Endotermik tepkimelerde ΔH negatiftir çünkü enerji harcanır’ diyor. Bu yorumdaki hata nedir?", "Endotermik tepkimede sistem enerji aldığı için ΔH pozitiftir; negatif ΔH ekzotermiktir.", "ΔH = ürünler − girenler; endotermikte ürünlerin enerjisi daha yüksek, bu yüzden pozitif.",
    [["Hata yoktur.", "ΔH'nin işareti ters söylenmiş."], ["Endotermik tepkimelerde enerji hiç değişmez.", "Endotermikte enerji alınır."], ["Endotermik tepkimeler sıcaklığı artırır.", "Endotermik tepkimeler çevreyi soğutur."]],
    "ΔH'nin işareti sistemin enerjisinin artıp azaldığını söyler.", "‘Harcanır’ yerine ‘sistem alır’ diye düşün: alan sistemin enerjisi artar.", ["Endotermik: sistem enerji alır.", "H(ürünler) > H(girenler) → ΔH > 0."], 3);
  K.Q("k11q8", 3, "Enerji korunumu ilkesine göre ekzotermik bir tepkimede açığa çıkan enerji için hangisi doğrudur?", "Yok olmaz; kimyasal enerjiden çevreye ısı (ve ışık) olarak aktarılır.", "Enerji yoktan var olmaz, yok da olmaz; ürünlerin enerjisi daha düşük, aradaki fark çevreye geçer.",
    [["Açığa çıkan enerji yok olur.", "Enerji yok olmaz."], ["Tepkimeyle birlikte yeni enerji üretilir.", "Enerji yoktan üretilmez."], ["Enerji yalnızca ışık olarak yayılır.", "Isı, ışık ya da başka biçimlerde aktarılabilir."]],
    "Enerji korunumunu hatırla.", "‘Nereden nereye gitti?’ diye sor.", ["Ürünlerin enerjisi daha düşük.", "Fark çevreye ısı/ışık olarak aktarılır."], 6);
  K.Q("k11q9", 2, "Bir tepkimede girenlerin entalpisi 150 kJ, ürünlerin entalpisi 210 kJ'dir. Bu tepkime için hangisi doğrudur?", "ΔH = +60 kJ; endotermiktir.", "ΔH = 210 − 150 = +60 kJ. Pozitif → ısı alır.",
    [["ΔH = −60 kJ; ekzotermiktir.", "Fark ters yönde alınmış."], ["ΔH = 360 kJ; endotermiktir.", "Toplanmış; ΔH fark alınarak bulunur."], ["ΔH = +150 kJ; endotermiktir.", "Yalnızca girenlerin enerjisi yazılmış."]],
    "ΔH = ürünler − girenler.", "Önce çıkarma, sonra işaretten tür.", ["ΔH = 210 − 150 = +60.", "Endotermik."], 3);
  K.Q("k11q10", 3, "Bir öğrenci hangi sıvıyı suya karıştırınca enerji değişimini gözlemlemek istiyor. En güvenilir gözlem için hangisi yapılmalıdır?", "Aynı kapta, aynı miktar su ile başlangıç ve son sıcaklığı termometreyle ölçmek.", "Koşullar sabit tutulup yalnızca sıcaklık değişimi ölçülürse sonuçlar güvenilir olur.",
    [["Kabı elle tutup ‘sıcak mı soğuk mu’ diye hissetmek.", "Kişisel his güvenilir ve sayısal değildir."], ["Her denemede farklı miktarda su kullanmak.", "Değişken sayısı artar; karşılaştırma bozulur."], ["Yalnızca sonuçtaki sıcaklığı ölçüp başlangıcı ölçmemek.", "Değişimi bulmak için iki ölçüm gerekir."]],
    "Güvenilir ölçümün şartı nedir?", "Deney tasarımı: sabit tutulacaklar, ölçülecek büyüklük, ölçüm sayısı.", ["Sabit: kap, su miktarı.", "Ölçülen: başlangıç ve son sıcaklık.", "Fark çevrenin ısındığını ya da soğuduğunu gösterir."], 5);
  K.A("k11o1", 2, "Girenlerin entalpisi 120 kJ, ürünlerin entalpisi 70 kJ olan bir tepkime için (a) ΔH değerini (kJ olarak, işaretiyle), (b) tepkimenin türünü yazınız.",
    [{ label: "ΔH (kJ)", v: "-50", accept: ["-50", "−50"] }, { label: "Tür (ekzotermik/endotermik)", v: "ekzotermik", accept: ["ekzotermik", "ısı veren"] }], "ΔH = ürünler − girenler.", "Önce çıkar, sonra işarete bak.",
    ["ΔH = 70 − 120 = −50 kJ.", "ΔH < 0 → ekzotermik."], [[1, "ΔH = ürünler − girenler yazıldı"], [1, "ΔH = −50 kJ"], [1, "Ekzotermik olduğu belirtildi"]], 3);
  K.A("k11o2", 3, "Bir tepkime kabına konulan termometre, tepkime sonunda sıcaklığın 30 °C'den 22 °C'ye düştüğünü gösteriyor. Bu tepkime için (a) tür (ekzotermik/endotermik) ve (b) ΔH'nin işaretini (pozitif/negatif) yazınız.",
    [{ label: "Tür", v: "endotermik", accept: ["endotermik", "ısı alan"] }, { label: "ΔH işareti", v: "pozitif", accept: ["pozitif", "+", "artı"] }], "Çevre soğudu mu ısındı mı?", "Çevre soğuduysa sistem ısı almıştır.",
    ["Sıcaklık düştü → çevre soğudu.", "Sistem ısı aldı → endotermik.", "Endotermikte ΔH pozitif."], [[1, "Çevre soğudu yorumu"], [1, "Endotermik"], [1, "ΔH pozitif"]], 5);

  /* ---------- Biyoloji ---------- */
  var B = mk("biy", "11. sınıf Biyoloji · Canlılık ve tepki", "biy11-tepki");
  B.Q("b11q1", 1, "Aşağıdakilerden hangisi uyaranı algılayan yapıya (reseptöre) örnektir?", "Gözdeki ışığı algılayan hücreler", "Reseptör, uyaranı algılayan yapıdır; gözdeki hücreler ışığı algılar.",
    [["Kasın kısalması", "Kasılma, tepkinin ortaya çıkışıdır; algılama değil."], ["Bitkinin eğilmesi", "Eğilme bir tepkidir."], ["Kalbin atması", "Kalp atışı bir tepki ya da süreçtir; reseptör değil."]],
    "Algılama mı, yanıt mı?", "Önce uyaranı algılayan yapıyı, sonra tepkiyi ayır.", ["Reseptör uyaranı algılar.", "Göz: ışık reseptörü."], 1);
  B.Q("b11q2", 1, "Kedinin ani bir sesle sıçrayarak kaçmasında uyaran ve tepki sırasıyla hangisidir?", "Ses – kaçma", "Uyaran, tepkiyi başlatan değişikliktir: ses. Tepki, canlının yanıtıdır: kaçma.",
    [["Kaçma – ses", "Sıra ters: uyaran ses, tepki kaçma."], ["Kulak – ses", "Kulak reseptördür, uyaran değil."], ["Ses – kulak", "Kulak tepki değil, algılayan yapıdır."]],
    "Önce ne oldu, sonra ne oldu?", "Uyaran önce gelir, tepki ardından.", ["Uyaran: ses.", "Tepki: kaçma."], 1);
  B.Q("b11q3", 2, "Küstüm otunun yapraklarına hangi yönden dokunulursa dokunulsun yaprakların aynı biçimde kapanması hangi tür tepkiye örnektir?", "Nasti (uyaranın yönüne bağlı olmayan tepki)", "Dokunma yönü önemli olmadığı için tepki nastidir.",
    [["Yönelme (tropizma)", "Yönelmede tepki uyaranın yönüne göre değişir."], ["Refleks", "Refleks hayvanlardaki sinirsel bir tepkidir."], ["Hormonsuz büyüme", "Bu bir hareket tepkisi, ‘hormonsuz büyüme’ değil."]],
    "Uyaranın yönü değişince tepki değişiyor mu?", "Yön önemsizse nasti.", ["Her yönden dokunma → aynı tepki.", "Nasti."], 5);
  B.Q("b11q4", 2, "Bir bitkinin kökünün toprak içinde yer çekimi yönünde uzamasına ilişkin hangisi doğrudur?", "Yönelme hareketidir; tepkinin yönü uyaranın (yer çekiminin) yönüne bağlıdır.", "Kök, yer çekiminin yönüne doğru uzar: uyaranın yönüne bağlı yönelme.",
    [["Nastidir; uyaranın yönü önemli değildir.", "Kök her zaman yer çekimi yönünde uzar; yön önemlidir."], ["Bu bir tepki değildir.", "Bir uyarana (yer çekimi) verilen büyüme tepkisidir."], ["Refleks hareketidir.", "Refleks hayvanlarda sinirsel tepki."]],
    "Uyaranın yönü değişirse tepki değişir mi?", "Tepkinin yönü uyarana bağlıysa yönelme.", ["Uyaran: yer çekimi.", "Tepki yönü uyaranın yönüne bağlı → yönelme."], 5);
  B.Q("b11q5", 2, "Tek hücreli Öglena'nın ışıklı bölgeye doğru yüzmesi için hangisi doğrudur?", "Sinir sistemi olmadan da canlılar uyaranlara tepki verebilir.", "Öglena tek hücreli olduğu için sinir sistemi yoktur; ışığı algılayıp yönelerek tepki verir.",
    [["Öglena tepki vermez.", "Işığa yönelir."], ["Tepki yalnızca sinir sistemi olan canlılarda görülür.", "Tek hücreliler ve bitkiler sinir sistemi olmadan tepki verir."], ["Öglena'nın hareketi rastgeledir.", "Hareket ışığa doğrudur."]],
    "Sinir sistemi yoksa tepki olabilir mi?", "Tümevarım: birden çok canlıdan ortak örüntü çıkar.", ["Öglena: sinir sistemi yok, tepki var.", "Tepki için sinir sistemi şart değil."], 4);
  B.Q("b11q6", 2, "Tepkinin oluşum basamakları aşağıdakilerin hangisinde doğru sırayla verilmiştir?", "Uyaranın algılanması → bilginin yorumlanması → tepkinin ortaya çıkması", "Önce algılanır, sonra değerlendirilir, en sonda yanıt verilir.",
    [["Tepkinin ortaya çıkması → uyaranın algılanması → bilginin yorumlanması", "Tepki, algılama ve yorumlamadan sonra gelir."], ["Bilginin yorumlanması → uyaranın algılanması → tepkinin ortaya çıkması", "Yorumlamak için önce uyaranın algılanması gerekir."], ["Uyaranın algılanması → tepkinin ortaya çıkması → bilginin yorumlanması", "Tepkiden önce yorumlama gerekir."]],
    "Doğal bir akışı düşün.", "Algıla, yorumla, yanıtla.", ["1. Algılama (reseptör).", "2. Yorumlama (sinir sistemi/hormon).", "3. Tepki."], 2);
  B.Q("b11q7", 3, "Bir öğrenci ‘Bitkiler hareket etmediği için uyaranlara tepki vermezler’ diyor. Bu yorum için ne söylenebilir?", "Yorum yanlıştır; bitkiler yer değiştirmez ama büyüme ya da hareketle (yönelme, nasti) uyaranlara tepki verir.", "Yer değiştirmemek tepki vermemek demek değildir; ışığa eğilme ve yaprak kapama bitki tepkileridir.",
    [["Yorum doğrudur, çünkü bitkilerde reseptör yoktur.", "Bitkiler ışığı, yer çekimini, dokunmayı algılayan yapılara sahiptir."], ["Yorum doğrudur, çünkü tepki yalnızca hareketli canlılarda görülür.", "Tepki hareketle sınırlı değildir; büyüme yönü de tepkidir."], ["Bitkiler yalnızca sinir sistemiyle tepki verir.", "Bitkilerde sinir sistemi yoktur; hormonlar etkilidir."]],
    "Yer değiştirmek mi, hareket etmek mi?", "Bitkilerde hareket yer değiştirmek değil, büyüme/yönelme/nasti ile olur.", ["Bitki yer değiştirmez ama hareket eder.", "Işığa eğilir, yaprak kapatır.", "Yorum yanlış."], 6);
  B.Q("b11q8", 3, "Aşağıdaki gözlemlerden yola çıkarak hangi genelleme yapılabilir? ‘Öglena ışığa yüzer; ayçiçeği ışığa döner; kedi sesle kaçar; küstüm otu dokunmayla yaprak kapatır.’", "Farklı canlılar farklı yapı ve mekanizmalarla uyaranlara tepki verir.", "Dört canlı farklı mekanizmayla (hücre içi, hormon, sinir sistemi) tepki veriyor; ortak: uyaran → tepki.",
    [["Tüm canlılar aynı mekanizmayla tepki verir.", "Mekanizmalar farklı: sinir, hormon, hücre içi."], ["Yalnızca hayvanlar tepki verir.", "Öglena, ayçiçeği ve küstüm otu da tepki veriyor."], ["Tepki yalnızca ışığa karşı oluşur.", "Dokunma ve ses de uyarandır."]],
    "Örneklerin ortak ve farklı yönlerini yaz.", "Tümevarım: örneklerin hepsini kapsayan ama onlardan fazlasını söylemeyen genelleme seç.", ["Ortak: uyaran → tepki.", "Farklı: mekanizma (sinir, hormon, hücre).", "Genelleme: farklı mekanizmalarla tepki."], 4);
  B.Q("b11q9", 2, "Akşamsefası çiçeğinin akşam açılıp sabah kapanması hangi tür tepkiye örnektir?", "Nasti (uyaranın yönüne bağlı olmayan)", "Işık ve sıcaklık değişimi tepkiyi tetikler; tepki uyaranın geldiği yöne göre değişmez.",
    [["Yönelme", "Yönelmede tepkinin yönü uyaranın yönüne bağlıdır."], ["Refleks", "Refleks hayvanlardaki sinirsel tepkidir."], ["Büyüme dışı tepki yok", "Çiçeğin açılıp kapanması bir tepkidir."]],
    "Uyaranın yönü önemli mi?", "Çevre koşulunun varlığı/yokluğu önemliyse ve yön önemsizse nasti.", ["Işık/sıcaklık değişimine tepki.", "Yön önemsiz → nasti."], 5);
  B.Q("b11q10", 3, "Bir bitki yalnızca tek bir yönden ışık alan bir odada büyütüldüğünde ışığa doğru eğiliyor. Aynı bitki her yönden eşit ışık alan bir ortamda büyütülürse ne beklenir?", "Bitki belirli bir yöne eğilmeden dik büyür.", "Işık her yönden eşit olduğu için uyaranın yönü yoktur; bitki asimetrik büyümez.",
    [["Bitki yine aynı yöne eğilir.", "Eğilmenin nedeni ışığın tek yönlü gelmesiydi."], ["Bitki büyümez.", "Büyüme devam eder; yalnızca yön değişir."], ["Bitki ışıktan uzaklaşır.", "Işık eşit dağıldığında yön tercihi olmaz."]],
    "Uyaranın yönü yoksa tepkinin yönü ne olur?", "Yönelme uyaranın yönüne bağlı olduğundan yön yoksa yön tercihi de yok.", ["Tek yönlü ışık: ışığa eğilme.", "Eşit ışık: yönü seçecek uyaran yok.", "Dik büyüme."], 5);
  B.A("b11o1", 2, "Işığın geldiği yöne doğru eğilen bir bitki için (a) uyaranı ve (b) tepki türünü (yönelme/nasti) yazınız.",
    [{ label: "Uyaran", v: "ışık", accept: ["ışık", "isik", "ışık"] }, { label: "Tepki türü", v: "yönelme", accept: ["yönelme", "tropizma", "fototropizma"] }], "Uyaran ne, tepkinin yönü uyarana bağlı mı?", "Önce uyaranı belirle, sonra yön önemli mi diye bak.",
    ["Uyaran: ışık.", "Tepkinin yönü ışığın yönüne bağlı → yönelme."], [[1, "Uyaran ışık"], [1, "Yönelme"]], 5);
  B.A("b11o2", 3, "Tek hücreli Öglena'nın ışığa yönelmesinde (a) tepkiyi veren canlının sinir sistemi var mıdır (var/yok), (b) tepkinin gerçekleşmesi için sinir sistemi şart mıdır (evet/hayır)?",
    [{ label: "Öglena'da sinir sistemi", v: "yok", accept: ["yok", "yoktur"] }, { label: "Tepki için sinir sistemi şart mı?", v: "hayır", accept: ["hayır", "hayir", "değil", "şart değil"] }], "Tek hücreli canlıda sinir sistemi olur mu?", "Tümevarım: sinir sistemi olmayan canlı tepki veriyorsa sinir sistemi zorunlu değildir.",
    ["Öglena tek hücreli: sinir sistemi yok.", "Yine de ışığa yönelir: sinir sistemi şart değil."], [[1, "Yok"], [1, "Şart değil"]], 4);

  /* ---------- Felsefe ---------- */
  var F = mk("fel", "11. sınıf Felsefe · Çevre ve insan; çevre etiği", "fel11-cevre");
  F.Q("f11q1", 1, "Aşağıdakilerden hangisi çevre ile ilgili bir felsefi sorudur?", "Doğanın insandan bağımsız olarak kendi başına bir değeri var mıdır?", "Değerin kaynağını soran bu soru olgulardan değil, değer ve gerekçeden bahseder; felsefi soru.",
    [["Orman yangınlarında yılda kaç hektar alan yanar?", "Bu bir sayısal bilgi sorusu."], ["Hangi bitki türü daha çok su ister?", "Bu bilimsel (biyoloji) sorusu."], ["Bir gölün derinliği kaç metredir?", "Bu bir ölçüm sorusu."]],
    "Cevabı ölçümle bulunabilir mi, gerekçeyle mi?", "Felsefi soru: ‘neden?’, ‘doğru mu?’, ‘değerli mi?’.", ["Felsefi soru değer ve gerekçe ister.", "Doğanın kendi başına değeri tartışılır; ölçülemez."], 1);
  F.Q("f11q2", 1, "‘Doğa, yalnızca insana fayda sağladığı ölçüde değerlidir.’ görüşü hangi yaklaşımı yansıtır?", "İnsan merkezli etik", "Değeri belirleyen ölçüt insana faydadır: insan merkezli.",
    [["Canlı merkezli etik", "Canlı merkezlide değer yaşıyor olmaktan gelir, faydadan değil."], ["Çevre merkezli etik", "Çevre merkezlide ekosistemin bütünü kendi başına değerli."], ["Hiçbiri", "Görüş açıkça insan merkezlidir."]],
    "Değeri kime veriyor?", "‘Fayda’ ve ‘insan’ vurgusu → insan merkezli.", ["Ölçüt: insana fayda.", "İnsan merkezli."], 4);
  F.Q("f11q3", 2, "‘Her canlı, yalnızca yaşıyor olduğu için değerlidir ve bu nedenle korunmayı hak eder.’ görüşü hangi yaklaşımı yansıtır?", "Canlı merkezli etik", "Değer ölçütü ‘yaşıyor olmak’; bu ölçüt her canlıyı kapsıyor.",
    [["İnsan merkezli etik", "İnsan merkezlide değer insana özgü."], ["Çevre merkezli etik", "Çevre merkezlide bütün ekosistem değerli."], ["Hiçbiri", "Görüş canlı merkezlidir."]],
    "Değer ölçütü ne?", "Ölçüt ‘yaşam’ ise canlı merkezli.", ["Ölçüt: yaşıyor olmak.", "Tüm canlılar → canlı merkezli."], 4);
  F.Q("f11q4", 2, "‘Bir ormanı oluşturan ağaçlar, hayvanlar, toprak ve su birbirine bağlıdır; ekosistemin bütünü korunmalıdır.’ görüşü hangi yaklaşımı yansıtır?", "Çevre merkezli etik", "Değer, tek tek canlılarda değil ekosistemin bütününde; çevre merkezli.",
    [["İnsan merkezli etik", "İnsan faydası ölçüt değil."], ["Canlı merkezli etik", "Tek tek canlılara değil bütüne vurgu var."], ["Bilimsel bir bilgidir, felsefi değildir.", "Bu bir değer yargısı içeriyor."]],
    "Değer bütüne mi, parçaya mı veriliyor?", "‘Bütün/ekosistem’ → çevre merkezli.", ["Ölçüt: ekosistemin bütünü.", "Çevre merkezli."], 4);
  F.Q("f11q5", 3, "‘Dağlar ve nehirler canlı olmadığı için etik açıdan korunmayı gerektirmez.’ diyen biri hangi yaklaşıma yakındır ve bu görüşe yöneltilebilecek en güçlü eleştiri nedir?", "Canlı merkezli yaklaşıma yakındır; eleştiri: cansız doğayı (dağ, nehir) tamamen dışarıda bırakır ve ekosistemin bütününü hesaba katmaz.", "Değer ölçütü ‘canlı olma’ olduğundan cansız doğa kapsam dışı kalıyor; çevre merkezli yaklaşım bu eksikliği hedefler.",
    [["İnsan merkezli yaklaşıma yakındır; eleştiri: insanı hesaba katmaz.", "İnsan merkezli yaklaşım insanı zaten merkeze alır."], ["Çevre merkezli yaklaşıma yakındır; eleştiri: ekosistemi hesaba katmaz.", "Çevre merkezli zaten ekosistemi merkeze alır."], ["Hiçbir yaklaşıma yakın değildir.", "Görüş ‘canlı olma’ ölçütüne dayanıyor."]],
    "Ölçüt ‘canlı olmak’ ise neyi kapsamıyor?", "Bir görüşü eleştirirken ölçütün dışarıda bıraktığını göster.", ["Ölçüt: canlı olmak.", "Dağ/nehir canlı değil → dışarıda kalıyor.", "Eleştiri: cansız doğa ve bütün göz ardı."], 6);
  F.Q("f11q6", 3, "‘Doğaya zarar vermemeliyiz çünkü doğa bizim geçim kaynağımızdır’ ile ‘Doğaya zarar vermemeliyiz çünkü doğa kendi başına değerlidir’ cümleleri arasındaki temel fark nedir?", "Birincisi değeri insana faydaya, ikincisi doğanın kendi değerine dayandırır.", "Birinci cümlede doğa araçsal olarak (fayda için), ikincide kendi başına değerli (içsel değer) görülür.",
    [["İkisi de aynı gerekçeye dayanır.", "Gerekçeler farklı: fayda ve kendi başına değer."], ["Birincisi felsefi, ikincisi bilimsel bir ifadedir.", "İkisi de değer yargısı içerir."], ["İkisinde de doğa değersizdir.", "İkisinde de doğa değerli görülüyor ama gerekçe farklı."]],
    "‘Çünkü’ten sonrasına bak.", "Gerekçeyi bul: fayda mı, kendi başına değer mi?", ["Cümle 1: çünkü geçim kaynağı → fayda.", "Cümle 2: çünkü kendi başına değerli.", "Gerekçe farkı."], 4);
  F.Q("f11q7", 2, "‘İnsan doğal kaynakları hangi ölçüde tüketebilir?’ sorusu çevre ve insan ilişkisine dair hangi felsefi sorunla ilgilidir?", "Tüketimin ölçüsü ve sınırı", "Soru insanın doğal kaynakları kullanmasının ahlaki ölçüsünü soruyor.",
    [["Doğanın bilimsel yapısı", "Bu bilimsel bir sorudur."], ["Doğal kaynakların coğrafi dağılımı", "Bu coğrafya sorusu."], ["İnsanın doğa üzerindeki hâkimiyeti", "Bu ayrı bir sorun (egemenlik); soru tüketimin ölçüsünü soruyor."]],
    "Soru neyin ölçüsünü soruyor?", "Dört felsefi soru: değer, sorumluluk, ölçü, egemenlik.", ["‘Ne kadar tüketebilir?’ → ölçü.", "Tüketimin sınırı."], 3);
  F.Q("f11q8", 3, "Bir öğrenci bir çevre sorunu hakkında felsefi bir metin yazıyor: sorunu tanımlıyor, görüşünü belirtiyor ama görüşünü hiçbir gerekçeyle desteklemiyor. Metinde en önemli eksik nedir?", "Argüman (gerekçeli ve tutarlı savunma).", "Felsefi metinde görüş, gerekçe ve karşı eleştiriye cevapla desteklenmelidir.",
    [["Daha fazla sayısal veri", "Felsefi metin sayıdan çok gerekçe ister."], ["Daha uzun cümleler", "Uzunluk değil, gerekçe önemli."], ["Hiç eksik yok", "Gerekçe olmadan metin felsefi değildir."]],
    "Görüşün neden doğru olduğu yazıyor mu?", "Felsefi metin = problem + kavram + argüman + karşı eleştiriye cevap.", ["Problem: var.", "Görüş: var.", "Gerekçe/argüman: yok → eksik."], 9);
  F.Q("f11q9", 3, "‘Bir baraj yapımı sırasında su altında kalacak ekosistemin bütününün korunması, bölgedeki enerji ihtiyacından daha önemlidir’ diyen biri hangi yaklaşımı benimsemiştir ve bu görüş hangi eleştiriyle karşılaşabilir?", "Çevre merkezli yaklaşım; eleştiri: insanların ihtiyaçlarını (enerji, iş) hesaba katmıyor olabilir.", "Ekosistemin bütününe öncelik verildiği için çevre merkezli; bütüne verilen öncelik bireylerin ihtiyaçlarıyla çatışabilir.",
    [["İnsan merkezli yaklaşım; eleştiri: ekosistemi hesaba katmıyor.", "İnsan merkezli görüş enerji ihtiyacını öncelerdi."], ["Canlı merkezli yaklaşım; eleştiri: cansız doğayı kapsamıyor.", "Görüş bütünü (ekosistem) öne çıkarıyor, tek canlıları değil."], ["Hiçbir yaklaşım; görüş felsefi değildir.", "Gerekçeli bir değer yargısıdır."]],
    "Önce hangisine öncelik veriliyor, sonra o yaklaşımın zayıf yanına bak.", "Yaklaşımı belirle, sonra bilinen zayıf yanı eleştiri olarak yaz.", ["Öncelik: ekosistemin bütünü.", "Yaklaşım: çevre merkezli.", "Zayıf yan: bireyin/insanın ihtiyaçlarıyla çatışabilir."], 6);
  F.Q("f11q10", 2, "Bir çevre sorunu için ‘nedenleri ve etkileri’ni gösteren neden–sonuç diyagramı hazırlayan öğrencinin bu çalışması hangi felsefi beceriye en çok hizmet eder?", "Sorunu çözümleyerek felsefi soruya dayanak oluşturmaya", "Neden–sonuç ilişkilerini görmek, soruna dair felsefi görüşü bilinçli kurmak için dayanak sağlar.",
    [["Şiir yazmaya", "Çalışma felsefi muhakeme ile ilgili."], ["Hesap yapmaya", "Diyagram sayısal hesap değildir."], ["Haritayı ezberlemeye", "Amaç ezber değil, çözümleme."]],
    "Diyagram neyi gösterir?", "Önce sorunu anla, sonra felsefi görüş kur.", ["Neden–sonuç diyagramı sorunu çözümler.", "Felsefi görüş bu çözümlemeye dayanır."], 3);
  F.A("fe11o1", 2, "Aşağıdaki iki görüşü uygun yaklaşımla eşleştiriniz: (a) ‘Değer yalnızca insandadır; doğa insana faydası kadar değerlidir.’ (b) ‘Her canlı, yaşıyor olduğu için değerlidir.’",
    [{ label: "(a) yaklaşım", v: "insan merkezli", accept: ["insan merkezli", "insan merkezli etik", "antroposentrik"] }, { label: "(b) yaklaşım", v: "canlı merkezli", accept: ["canlı merkezli", "canlı merkezli etik", "biyosentrik"] }], "Değeri kime veriyor?", "İnsan → insan merkezli; her canlı → canlı merkezli; bütün → çevre merkezli.",
    ["(a): değer insanda → insan merkezli.", "(b): değer her canlıda → canlı merkezli."], [[1, "(a) insan merkezli"], [1, "(b) canlı merkezli"]], 4);
  F.A("fe11o2", 3, "‘Ekosistemin bütünü kendi başına değerlidir.’ görüşüne ilişkin (a) yaklaşımın adını ve (b) bu yaklaşımın güçlü yanını (kısa bir ifadeyle) yazınız.",
    [{ label: "(a) yaklaşım", v: "çevre merkezli", accept: ["çevre merkezli", "çevre merkezli etik", "ekosentrik"] }, { label: "(b) güçlü yan (anahtar sözcük)", v: "cansız", accept: ["cansız", "cansız doğayı da kapsar", "bütünü korur", "ekosistemi korur"] }], "Bütünü merkeze alan yaklaşım hangisi?", "Güçlü yan: nelere değer verdiğine bak.",
    ["Yaklaşım: çevre merkezli.", "Güçlü yan: cansız doğayı ve ekosistemin bütününü kapsaması."], [[1, "Çevre merkezli"], [1, "Güçlü yan: cansız doğayı/bütünü kapsama"]], 6);
})();
