/* Fizik keşfi: Newton'un ikinci yasası — aynı itme, farklı kütle. Metinler özgündür (CC BY-NC-SA 4.0). */
KESIF.lessons["fiz-newton"] = {
  id: "fiz-newton", subject: "fiz", title: "Kuvvet, kütle ve ivme", minutes: 25,
  grade: "TYT Fizik — Newton'un hareket yasaları (F = m·a)",
  hook: "Boş bir arabayı ve dolu bir arabayı aynı kuvvetle itersen ne olur?",
  steps: [
    { type: "mcq", predict: true, q: "Tahmin et: Aynı kuvvetle itilen boş araba ile yüklü araba arasında hangisinin ivmesi büyüktür?",
      opts: [
        { t: "Boş araba (kütlesi küçük).", ok: true, why: "Aynı kuvvette kütle büyüdükçe ivme küçülür." },
        { t: "Yüklü araba.", why: "Kütlesi büyük olan zor hızlanır." },
        { t: "İkisi de aynı.", why: "Kuvvet aynı, ama kütle farklı olduğu için ivme farklıdır." },
        { t: "İkisi de hızlanmaz.", why: "Net kuvvet varsa hız değişir." }
      ],
      explain: "Önce sezgiyi söyle; sonra formüle bağla." },

    { type: "text", title: "F = m · a",
      say: "Net kuvvet kütle çarpı ivmeye eşittir. Aynı kuvvette kütle artınca ivme azalır. Net kuvvet sıfırsa ivme sıfırdır.",
      html: `<p class="big"><b>a = F<sub>net</sub> ÷ m</b></p>
<div class="grid"><div class="card"><h3>Kuvvet</h3><p class="small">Birimi newton (N). Ne kadar itiyoruz?</p></div><div class="card"><h3>Kütle</h3><p class="small">Birimi kg. Ne kadar "inatçı"?</p></div><div class="card pick"><h3>İvme</h3><p class="small">Birimi m/s². Hız ne kadar hızlı değişiyor?</p></div></div>
<p class="callout why" style="margin-top:16px"><b>Dikkat:</b> Formüldeki kuvvet <i>net</i> kuvvettir: itme eksi sürtünme gibi tüm kuvvetlerin bileşkesi.</p>` },

    { type: "mcq", q: "Kütlesi 2 kg olan cisme net 10 N kuvvet uygulanıyor. İvmesi kaç m/s²'dir?",
      opts: [
        { t: "5", ok: true, why: "a = F / m = 10 / 2 = 5." },
        { t: "20", why: "F × m yapılmış; ivme bölmeyle bulunur." },
        { t: "12", why: "Toplama yapılmış." },
        { t: "0,2", why: "m / F yapılmış; ters bölme." }
      ],
      explain: "Önce birimlere bak: N ÷ kg = m/s²." },

    { type: "mcq", q: "Kütlesi 4 kg olan cisme 20 N'luk kuvvet uygulanıyor, yüzey sürtünmesi 8 N. Cismin ivmesi kaç m/s²'dir?",
      opts: [
        { t: "3", ok: true, why: "Net kuvvet = 20 − 8 = 12 N; a = 12 / 4 = 3." },
        { t: "5", why: "Sürtünme hesaba katılmamış (20 / 4)." },
        { t: "7", why: "Net yerine 28 N alınmış (20 + 8) ve 4'e bölünmüş." },
        { t: "2", why: "Net kuvvet 8 N alınmış; ters yön hatası." }
      ],
      explain: "Önce net kuvveti bul: zıt yönlü kuvvetler çıkarılır." },

    { type: "reflect", q: "Peki ya neden? Alışveriş arabasını doluyken durdurmak neden boşken durdurmaktan zordur? F = m·a ile açıkla.",
      hint: "Örnek düşünce: Aynı sürede durdurmak için aynı ivme (yavaşlama) gerekir. F = m·a olduğundan kütle büyükse gereken kuvvet de büyük olur." },

    { type: "text", title: "Bugünün özeti",
      say: "Net kuvvet, kütle ve ivme birbirine F eşittir m a ile bağlıdır.",
      html: `<ul class="body"><li><b>a = F<sub>net</sub> / m</b></li><li>Önce <b>net</b> kuvveti bul.</li><li>Aynı kuvvette kütle büyürse ivme küçülür.</li></ul>` }
  ]
};
