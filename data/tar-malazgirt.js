/* Tarih keşfi: Bir savaş neden "dönüm noktası" olur? Malazgirt üzerinden neden–sonuç düşünmek. Metinler özgündür (CC BY-NC-SA 4.0). */
KESIF.lessons["tar-malazgirt"] = {
  id: "tar-malazgirt", subject: "tar", title: "Malazgirt: savaş neden dönüm noktası?", minutes: 25,
  grade: "TYT Tarih — Anadolu'nun Türkleşmesi; neden–sonuç ve kronoloji düşüncesi",
  hook: "Tarihi tarih ezberleyerek değil, 'önce ne vardı, sonra ne değişti?' diye sorarak öğren.",
  steps: [
    { type: "text", title: "Bir olayı anlamak = önce–sonra farkını görmek",
      say: "Tarih yıl listesi değildir. Bir olaydan önceki durumu ve sonraki durumu karşılaştır; fark, olayın önemini verir.",
      html: `<p class="big">Bir yarışta takımın sahaya çıkması önemli değildir; <i>maçtan önce ve sonra tabloda ne değişti?</i> önemlidir.</p>
<div class="grid"><div class="card"><h3>Önce</h3><p class="small">1071'den önce Türkler Anadolu'ya akınlar düzenler ama kalıcı yerleşmek zordur.</p></div>
<div class="card pick"><h3>Olay</h3><p class="small">26 Ağustos 1071: Malazgirt. Alparslan, Bizans İmparatoru Romen Diyojen'i yenip esir alır.</p></div>
<div class="card"><h3>Sonra</h3><p class="small">Bizans savunması çöker, Türkmenler Anadolu'ya yerleşir; kısa sürede beylikler ve Anadolu Selçuklu Devleti kurulur.</p></div></div>
<p class="callout why" style="margin-top:16px"><b>Soru kalıbı:</b> Bu olay olmasaydı ne farklı olurdu?</p>` },

    { type: "mcq", q: "Malazgirt'in 'dönüm noktası' sayılmasının asıl nedeni aşağıdakilerden hangisidir?",
      opts: [
        { t: "Bizans'ın Anadolu'daki savunmasını kıran bu zaferle Türklerin Anadolu'ya yerleşmesi hızlanmıştır.", ok: true, why: "Önce–sonra farkı: akın dönemi bitiyor, yerleşme başlıyor." },
        { t: "Romen Diyojen'in esir alınmış olması.", why: "Esir alınması sonuçlardan biri; dönüm noktası olmasının nedeni bu değil, ortaya çıkan siyasî ve askerî değişim." },
        { t: "Savaşın Ağustos ayında yapılmış olması.", why: "Tarih bilgisini nedene çevirme hatası: ay sonuç doğurmaz." },
        { t: "Selçukluların ilk kez savaş kazanması.", why: "Selçuklular daha önce de kazanmıştı (ör. Dandanakan 1040). Malazgirt'i özel yapan başka bir şey: Anadolu'nun kapılarının açılması." }
      ],
      explain: "Dönüm noktası = olaydan sonra durumun kalıcı biçimde değişmesi." },

    { type: "tap", q: "Aşağıdaki paragrafta olayın SONUCUNU anlatan cümleyi seç.",
      sents: [
        { t: "Selçuklular 1040'ta Dandanakan'da Gazneliler'i yenerek devlet kurmuştu.", why: "Malazgirt'ten önceki durum." },
        { t: "Bizans, doğu sınırlarını savunmakta zorlanıyordu.", why: "Savaştan önceki durum." },
        { t: "Alparslan 1071'de Romen Diyojen'i yendi.", why: "Olayın kendisi." },
        { t: "Savaştan sonra Türkmenler Anadolu içlerine ilerleyip yerleşmeye başladı.", ok: true, why: "'Savaştan sonra' ifadesi sonucu verir." }
      ],
      explain: "Zaman ifadeleri (önce, sonra, ardından, bu nedenle) neden–sonuç sırasını gösterir." },

    { type: "mcq", q: "Aşağıdaki olaylar eski tarihten yeniye doğru dizildiğinde ortadaki hangisidir? (Dandanakan, Malazgirt, Miryokefalon)",
      opts: [
        { t: "Malazgirt", ok: true, why: "Dandanakan 1040 → Malazgirt 1071 → Miryokefalon 1176." },
        { t: "Dandanakan", why: "Dandanakan 1040; en eskisi." },
        { t: "Miryokefalon", why: "Miryokefalon 1176; en yenisi." },
        { t: "Hiçbiri", why: "Üç olay da farklı yıllarda." }
      ],
      explain: "Kronolojide yüzyıl düşün: 1040 (11. yy ilk yarısı), 1071 (11. yy ikinci yarısı), 1176 (12. yy)." },

    { type: "reflect", q: "Peki ya neden? Selçuklu Devleti 1040'ta kurulduğu hâlde Anadolu'da kalıcı olmak neden 1071'den sonra hızlandı? Bizans'ın durumunu düşün.",
      hint: "Örnek düşünce: Bizans ordusu Malazgirt'te yenilince imparatorun kendisi esir düştü, ülkede taht kavgaları başladı. Savunma zayıflayınca Türkmenler önlerinde engel bulamadı. Yani zafer, Bizans'ın iç sorunlarıyla birleşince etkili oldu." },

    { type: "text", title: "Bugünün özeti",
      say: "Bir olayın önemini anlamak için önceki ve sonraki durumu karşılaştır.",
      html: `<ul class="body"><li><b>Önce – olay – sonra</b> üçlüsü ile düşün.</li><li>Dönüm noktası: kalıcı değişim.</li><li>Kronolojide yüzyıla bak, sonra yıla.</li></ul>` }
  ]
};
