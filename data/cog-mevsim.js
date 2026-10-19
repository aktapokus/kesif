/* Coğrafya keşfi: Mevsimler neden oluşur? "Eksen dik olsaydı ne olurdu?" sorusuyla. Metinler özgündür (CC BY-NC-SA 4.0). */
KESIF.lessons["cog-mevsim"] = {
  id: "cog-mevsim", subject: "cog", title: "Mevsimler neden oluşur?", minutes: 25,
  grade: "TYT Coğrafya — Dünya'nın hareketleri ve sonuçları",
  hook: "Yazın Dünya Güneş'e daha mı yakındır? Önce tahmin et.",
  steps: [
    { type: "mcq", predict: true, q: "Tahmin et: Türkiye'de yaz neden sıcak olur?",
      opts: [
        { t: "Güneş ışınları daha dik gelir ve gündüz daha uzun sürer.", ok: true, why: "Eksen eğik olduğu için yazın Kuzey Yarımküre Güneş'e doğru eğilir: ışınlar dik gelir, gündüz uzar." },
        { t: "Dünya Güneş'e daha yakındır.", why: "Yaygın yanlış. Dünya Güneş'e en yakın konumda (Ocak başı) Kuzey Yarımküre'de kıştır." },
        { t: "Dünya daha hızlı döner.", why: "Dönme hızı yıl boyunca değişmez; gün uzunluğu ışınların açısıyla ilgilidir." },
        { t: "Ay Dünya'ya yaklaşır.", why: "Ay'ın mevsimle ilgisi yok." }
      ],
      explain: "Mevsimin sebebi uzaklık değil, ışınların geliş açısı ve gündüz süresidir." },

    { type: "text", title: "Üç şeyi birleştir",
      say: "Dünya'nın ekseni 23 derece 27 dakika eğiktir. Eksen yıl boyunca hep aynı yöne bakar. Dünya Güneş çevresinde dolanır. Bu yüzden Güneş ışınları farklı enlemlere dik gelir.",
      html: `<div class="grid"><div class="card"><h3>21 Haziran</h3><p class="small">Işınlar <b>Yengeç Dönencesi'ne</b> (23°27' K) dik. Kuzey Yarımküre'de yaz, en uzun gündüz.</p></div>
<div class="card"><h3>22 Aralık</h3><p class="small">Işınlar <b>Oğlak Dönencesi'ne</b> (23°27' G) dik. Kuzey'de kış, en kısa gündüz.</p></div>
<div class="card pick"><h3>21 Mart / 23 Eylül</h3><p class="small">Işınlar <b>Ekvator'a</b> dik. Her yerde gece = gündüz.</p></div></div>
<p class="callout why" style="margin-top:16px"><b>Düşünce deneyi:</b> Eksen eğik olmasaydı? Işınlar yıl boyunca Ekvator'a dik gelir, mevsim olmazdı.</p>` },

    { type: "mcq", q: "21 Haziran'da Güneş ışınlarının dik geldiği yer neresidir?",
      opts: [
        { t: "Yengeç Dönencesi", ok: true, why: "23°27' kuzey enlemi; Kuzey Yarımküre'de yaz başlangıcı." },
        { t: "Oğlak Dönencesi", why: "22 Aralık." },
        { t: "Ekvator", why: "21 Mart ve 23 Eylül." },
        { t: "Kuzey Kutup Dairesi", why: "Işınlar kutup dairesine hiçbir zaman dik gelmez." }
      ],
      explain: "Tarih–dönence eşleşmesi: Haziran → Yengeç (kuzey), Aralık → Oğlak (güney)." },

    { type: "tap", q: "Aşağıdakilerden hangisi Dünya'nın EKSEN EĞİKLİĞİNİN sonucudur?",
      sents: [
        { t: "Gece ile gündüzün oluşması.", why: "Dönme hareketinin sonucu." },
        { t: "Yıl boyunca Güneş ışınlarının geliş açısının değişmesi ve mevsimler.", ok: true, why: "Eğiklik + dolanma birlikte mevsimleri yapar." },
        { t: "Yerel saat farkları.", why: "Dönme hareketinin sonucu." },
        { t: "Gelgit olayları.", why: "Ay ve Güneş'in çekimi." }
      ],
      explain: "Dönme → gece–gündüz, saat. Eğiklik + dolanma → mevsim." },

    { type: "reflect", q: "Peki ya neden? Güney Yarımküre'de Aralık ayında yazın olduğunu eksen eğikliğiyle açıkla.",
      hint: "Örnek düşünce: Aralık'ta eksenin güney ucu Güneş'e doğru eğiktir. Işınlar Güney'deki enlemlere daha dik gelir ve gündüz uzar; Kuzey'e ise eğik gelir. Aynı anda bir yarımkürede yaz, diğerinde kış olur." },

    { type: "text", title: "Bugünün özeti",
      say: "Mevsimin nedeni uzaklık değil, eksen eğikliği ve dolanmadır.",
      html: `<ul class="body"><li>Mevsim: <b>eğiklik + dolanma</b>.</li><li>Gece–gündüz: <b>dönme</b>.</li><li>21 Haziran Yengeç, 22 Aralık Oğlak, 21 Mart/23 Eylül Ekvator.</li></ul>` }
  ]
};
