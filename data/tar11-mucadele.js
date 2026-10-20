/* 11. sınıf Tarih, 1. Ünite Değişen Dünyada Osmanlı Devleti (1683–1789) — TAR.11.1.1 Siyasi ve askerî mücadeleleri sonuçları açısından değerlendirme (konu anlatımı, sıfırdan).
   Kaynak: tymm.meb.gov.tr/tarih-dersi/unite/68. Program: II. Viyana Kuşatması ve Karlofça, Prut, Pasarofça, Belgrad ve Küçük Kaynarca antlaşmaları; sonuçların siyasi ve askerî açıdan karşılaştırıldığı tablo; kronolojik düşünme ve kanıta dayalı sorgulama.
   Özgün içerik (CC BY-NC-SA 4.0). Standart: docs/DERS-STANDARDI.md. */
(function () {
  KESIF.lessons["tar11-mucadele"] = {
    id: "tar11-mucadele", subject: "tar", title: "1683–1789: Osmanlı savaşları ve antlaşmaları ne söylüyor?", minutes: 25,
    grade: "11. sınıf Tarih, 1. Ünite, TAR.11.1.1 (Maarif: kronolojik düşünme, kanıta dayalı sorgulama, değişim ve süreklilik)",
    hook: "Bir savaşın sonucu yalnızca ‘kim kazandı’ değildir. Antlaşmayı okuyunca ne değişti?",
    steps: [
      { type: "mcq", predict: true, q: "1683'te Osmanlı ordusu Viyana'yı kuşattı ama şehri alamadı. Sence bu başarısızlığın en önemli sonucu ne oldu?",
        opts: [
          { t: "Avrupa devletleri Osmanlı'ya karşı birleşti (Kutsal İttifak) ve savaşlar Osmanlı topraklarında sürdü.", ok: true, why: "Kuşatmanın başarısızlığı Osmanlı'nın yenilmez olmadığını gösterdi; Avusturya, Polonya ve Venedik 1684'te Kutsal İttifak'ı kurdu, savaşlar uzun yıllar sürdü ve Osmanlı toprak kaybetmeye başladı." },
          { t: "Osmanlı Viyana'yı bir sonraki yıl aldı.", why: "Viyana hiçbir zaman alınamadı; kuşatma bir daha tekrarlanmadı." },
          { t: "Savaş kısa sürede barışla bitti ve hiçbir şey değişmedi.", why: "Savaşlar 1699'a kadar sürdü ve Karlofça Antlaşması ile Osmanlı ilk kez büyük toprak kaybetti." },
          { t: "Osmanlı Avusturya ile ittifak yaptı.", why: "Tam tersi: Avusturya, Osmanlı'ya karşı kurulan Kutsal İttifak'ın en önemli üyesiydi." }
        ],
        explain: "Bir olayın önemini anlamak için ‘ondan sonra ne değişti?’ diye sor. 1683'ten sonra değişen: Osmanlı artık saldıran taraf değil, savunan taraf olmaya başladı." },

      { type: "text", title: "Önce sözlük: kuşatma, antlaşma, ittifak",
        say: "Kuşatma, bir şehri ya da kaleyi çevreleyip ele geçirmeye çalışmaktır. Antlaşma, savaşı bitiren ve yeni sınırları belirleyen yazılı anlaşmadır. İttifak, ortak düşmana karşı devletlerin birleşmesidir.",
        html: `<div class="grid"><div class="card"><h3>Kuşatma</h3><p class="small">Bir şehri çevreleyip ele geçirmeye çalışmak.</p></div><div class="card"><h3>Antlaşma</h3><p class="small">Savaşı bitiren yazılı anlaşma: <b>sınırları, tazminatı, hakları</b> belirler.</p></div><div class="card"><h3>İttifak</h3><p class="small">Ortak düşmana karşı birleşen devletler.</p></div><div class="card pick"><h3>Tazminat</h3><p class="small">Yenilen tarafın, savaş masrafı olarak ödediği para.</p></div></div>
<p class="callout why" style="margin-top:12px"><b>Neden antlaşmaya bakıyoruz?</b> Savaşın kazananını meydan muharebesi değil, antlaşma gösterir: hangi toprak el değiştirdi, kim ne ödedi, kimin hangi hakkı oldu?</p>` },

      { type: "text", title: "Kronoloji: 1683'ten 1774'e",
        say: "Altı olay sırayla: İkinci Viyana Kuşatması 1683, Karlofça 1699, Prut 1711, Pasarofça 1718, Belgrad 1739, Küçük Kaynarca 1774.",
        html: `<table class="tbl"><thead><tr><th>Yıl</th><th>Olay</th><th>Karşı taraf</th><th>Osmanlı için sonuç</th></tr></thead><tbody>
<tr><td>1683</td><td>II. Viyana Kuşatması</td><td>Avusturya, Polonya</td><td>Başarısız; Kutsal İttifak kuruldu</td></tr>
<tr><td>1699</td><td>Karlofça Antlaşması</td><td>Avusturya, Venedik, Polonya</td><td><b>Büyük toprak kaybı</b></td></tr>
<tr><td>1711</td><td>Prut Savaşı</td><td>Rusya</td><td><b>Başarı</b>: Azak geri alındı</td></tr>
<tr><td>1718</td><td>Pasarofça Antlaşması</td><td>Avusturya</td><td>Kayıp: Banat ve Belgrad Avusturya'ya geçti</td></tr>
<tr><td>1739</td><td>Belgrad Antlaşması</td><td>Avusturya (Rusya)</td><td><b>Başarı</b>: Belgrad geri alındı</td></tr>
<tr><td>1774</td><td>Küçük Kaynarca Antlaşması</td><td>Rusya</td><td>Ağır kayıp: Kırım bağımsız, tazminat, Rusya Karadeniz'e çıktı</td></tr></tbody></table>
<p class="callout why" style="margin-top:12px"><b>Kronoloji ipucu:</b> 1683 → 1699 (16 yıl savaş), 1711 → 1718 (7 yıl), 1739 → 1774 (35 yıl). Yüzyılı ve arada geçen süreyi aklında tut.</p>` },

      { type: "mcq", q: "Aşağıdaki olaylar eskiden yeniye sıralandığında en sonda hangisi gelir?",
        opts: [
          { t: "Küçük Kaynarca Antlaşması", ok: true, why: "Sıra: II. Viyana Kuşatması (1683), Karlofça (1699), Prut (1711), Pasarofça (1718), Belgrad (1739), Küçük Kaynarca (1774)." },
          { t: "Belgrad Antlaşması", why: "Belgrad 1739; Küçük Kaynarca 1774'ten önce." },
          { t: "Pasarofça Antlaşması", why: "Pasarofça 1718; ikisinden de önce." },
          { t: "Prut Savaşı", why: "Prut 1711; listedeki en eski olaylardan biri." }
        ],
        explain: "Kronolojide önce yüzyılı (1600'ler/1700'ler), sonra yılı karşılaştır." },

      { type: "text", title: "Sonuçları nasıl karşılaştırırız? Siyasi ve askerî ölçüt",
        say: "Bir antlaşmayı değerlendirmek için iki soru sorarız. Askerî olarak ne oldu: toprak, kale, ordu. Siyasi olarak ne oldu: devletin saygınlığı, ittifaklar, haklar.",
        html: `<div class="grid"><div class="card"><h3>Askerî ölçüt</h3><p class="small">Toprak kazanıldı mı, kaybedildi mi? Hangi kale el değiştirdi? Ordu savaşı sürdürebildi mi?</p></div><div class="card pick"><h3>Siyasi ölçüt</h3><p class="small">Devletin Avrupa'daki ağırlığı değişti mi? Kimler hak kazandı? Sonraki ilişkileri nasıl etkiledi?</p></div></div>
<table class="tbl" style="margin-top:12px"><thead><tr><th>Antlaşma</th><th>Askerî sonuç</th><th>Siyasi sonuç</th></tr></thead><tbody>
<tr><td>Karlofça 1699</td><td>Macaristan ve Transilvanya Avusturya'ya, Mora Venedik'e, Podolya Polonya'ya geçti</td><td>Osmanlı ilk kez barışa zorlanıp büyük toprak verdi; savunma dönemi başladı</td></tr>
<tr><td>Prut 1711</td><td>Rus ordusu kuşatıldı; Azak Osmanlı'ya döndü</td><td>Osmanlı Rusya karşısında üstünlük sağladı</td></tr>
<tr><td>Küçük Kaynarca 1774</td><td>Savaş tazminatı ödendi; Kırım ayrıldı</td><td>Rusya Karadeniz'e ulaştı ve Osmanlı'daki Ortodoks tebaa konusunda söz hakkı iddia etti</td></tr></tbody></table>` },

      { type: "mcq", q: "Karlofça Antlaşması'nın (1699) Osmanlı tarihi açısından en önemli sonucu hangisidir?",
        opts: [
          { t: "Osmanlı ilk kez büyük toprak kaybetti ve Avrupa karşısında savunmaya geçmek zorunda kaldı.", ok: true, why: "Macaristan, Transilvanya, Mora ve Podolya'nın kaybı hem askerî hem siyasi bir dönüm noktasıdır: genişleme dönemi kapanıp savunma ve siyasi diplomasi dönemi başladı." },
          { t: "Osmanlı Avusturya'dan savaş tazminatı aldı.", why: "Tersi: Osmanlı toprak verdi; tazminat alan taraf Osmanlı değildi." },
          { t: "Kırım Osmanlı'dan ayrıldı.", why: "Kırım'ın ayrılması 1774 Küçük Kaynarca ile ilgili; Karlofça'da değil." },
          { t: "Osmanlı Rusya ile ittifak kurdu.", why: "Karlofça Avusturya, Venedik ve Polonya ile yapıldı; Rusya ile ayrı bir antlaşma (1700) imzalandı." }
        ],
        explain: "Karlofça = ‘ilk büyük toprak kaybı’. Bu ifade antlaşmanın askerî (toprak) ve siyasi (savunma dönemi) etkisini birlikte verir." },

      { type: "mcq", q: "Prut Savaşı (1711) ile Pasarofça Antlaşması (1718) Osmanlı açısından nasıl karşılaştırılır?",
        opts: [
          { t: "Prut'ta Osmanlı başarılı oldu (Azak geri alındı); Pasarofça'da Osmanlı toprak kaybetti (Banat ve Belgrad).", ok: true, why: "İki olay farklı cephelerde farklı sonuç verdi: Rusya cephesinde başarı, Avusturya cephesinde kayıp." },
          { t: "İkisinde de Osmanlı büyük toprak kazandı.", why: "Pasarofça'da Osmanlı toprak verdi; Prut'ta kazanç Azak'ın geri alınmasıydı, ‘büyük toprak kazanımı’ denemez." },
          { t: "İkisinde de Osmanlı yenildi.", why: "Prut Osmanlı için başarıdır." },
          { t: "İkisi de aynı devletle yapıldı.", why: "Prut Rusya ile, Pasarofça Avusturya ile." }
        ],
        explain: "Sonuçları karşılaştırırken karşı tarafı ve cepheyi ayır: aynı yıllarda Osmanlı farklı cephelerde farklı sonuçlar alabilir." },

      { type: "mcq", q: "Bir öğrenci ‘1699'dan sonra Osmanlı her savaşta yenilmiş ve her antlaşmada toprak kaybetmiştir’ diyor. Elindeki kanıtlara göre bu yargı için ne söylenebilir?",
        opts: [
          { t: "Yargı abartılı: Prut (1711) ve Belgrad (1739) gibi Osmanlı lehine sonuçlar da var; ‘her’ ifadesi kanıtlarla çelişiyor.", ok: true, why: "1711'de Azak, 1739'da Belgrad geri alındı. Tek bir karşı örnek bile ‘her savaş’ yargısını çürütür." },
          { t: "Yargı doğru, çünkü Karlofça'dan sonra Osmanlı hiç başarı kazanmadı.", why: "Prut ve Belgrad başarı örnekleridir." },
          { t: "Yargı kanıtlanamaz çünkü tarihî bilgiler güvenilmez.", why: "Antlaşma metinleri ve harita değişimleri güvenilir kanıtlardır; asıl sorun ifadenin kapsamı." },
          { t: "Yargı doğru çünkü Küçük Kaynarca ağır bir kayıptı.", why: "Bir örnek (Küçük Kaynarca) her olayı açıklamaz; ‘her’ ifadesi için tüm örneklere bakmak gerekir." }
        ],
        explain: "Tarihsel yargıyı kanıtla sına: ‘her/hiç’ gibi mutlak ifadeler tek karşı örnekle bozulur." },

      { type: "mcq", q: "Küçük Kaynarca Antlaşması'nın (1774) Osmanlı için sonuçları arasında hangisi yer alır?",
        opts: [
          { t: "Kırım Osmanlı'dan ayrılıp bağımsız ilan edildi; Rusya Karadeniz'e çıkış ve ticaret hakkı kazandı; Osmanlı savaş tazminatı ödedi.", ok: true, why: "Bu üç sonuç (Kırım'ın bağımsızlığı, Rusya'nın Karadeniz'e ulaşması, tazminat) antlaşmanın askerî, siyasi ve ekonomik etkisini gösterir." },
          { t: "Osmanlı Rusya'dan tazminat aldı.", why: "Tazminatı ödeyen taraf Osmanlı'ydı." },
          { t: "Kırım Rusya'ya ilhak edildi ve Osmanlı Karadeniz'de tek güç kaldı.", why: "1774'te Kırım bağımsız ilan edildi (ilhak 1783'te); Rusya Karadeniz'e ulaşınca Osmanlı artık tek güç değildi." },
          { t: "Osmanlı Avusturya ile ittifak kurdu.", why: "Küçük Kaynarca Osmanlı–Rus savaşını bitirdi; Avusturya ile ilgisi yok." }
        ],
        explain: "Antlaşma sonuçlarını üç başlıkta topla: toprak/sınır, ödeme (tazminat), haklar (ticaret, siyasi söz hakkı)." },

      { type: "reflect", q: "Peki ya neden? Savaş sonuçlarına bakınca Osmanlı'nın 1683'ten sonra neden savunmaya geçtiğini düşün. Sence yalnızca ordunun gücü mü belirleyici oldu, yoksa Avrupa devletlerinin birleşmesi gibi başka etkenler de rol oynadı mı?",
        hint: "Örnek düşünce: Yalnızca ordu değil. 1684'te Kutsal İttifak ile birden çok devletin aynı anda saldırması, Osmanlı'yı birkaç cephede savaşmaya zorladı. Bu yüzden askerî güce ek olarak diplomatik durum (ittifaklar) ve ekonomik kaynaklar da sonucu belirledi. Bir olayı açıklarken tek neden aramak yerine birkaç etkeni birlikte düşünmek daha doğrudur." },

      { type: "text", title: "Özet ve sınavda ne işe yarar",
        say: "Antlaşmalar savaşın sonucunu gösterir. 1699 Karlofça ilk büyük toprak kaybıdır. 1711 Prut ve 1739 Belgrad Osmanlı lehine sonuç verir. 1774 Küçük Kaynarca ağır siyasi ve ekonomik sonuçlar getirir.",
        html: `<ul class="body"><li>Sıra: <b>1683 – 1699 – 1711 – 1718 – 1739 – 1774</b>.</li><li><b>Karlofça (1699):</b> ilk büyük toprak kaybı, savunma dönemi.</li><li><b>Prut (1711)</b> ve <b>Belgrad (1739):</b> Osmanlı lehine; <b>Pasarofça (1718)</b> ve <b>Küçük Kaynarca (1774):</b> kayıp.</li><li>Karşılaştırırken <b>askerî</b> (toprak, kale) ve <b>siyasi</b> (saygınlık, haklar) sonuçları ayır; mutlak ifadeleri kanıtla sına.</li></ul>
<p class="callout">Sınavda şöyle görürsün: bir antlaşmanın sonucu, iki antlaşmanın karşılaştırması ya da bir tarihsel yargının doğru/yanlış olduğu sorulur. Önce yılı ve karşı tarafı belirle, sonra sonuçları askerî ve siyasi olarak ayır.</p>` }
    ]
  };
})();
