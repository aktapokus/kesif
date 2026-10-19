/* Biyoloji keşfi: Hücre zarından madde geçişi — ozmos. Metinler özgündür (CC BY-NC-SA 4.0). */
KESIF.lessons["biy-ozmos"] = {
  id: "biy-ozmos", subject: "biy", title: "Su hangi yöne gider? (Ozmos)", minutes: 25,
  grade: "TYT Biyoloji — hücre zarından madde geçişi (difüzyon, ozmos)",
  hook: "Tuzlu suya konan salatalık neden buruşur?",
  steps: [
    { type: "mcq", predict: true, q: "Tahmin et: Çok tuzlu suya bırakılan bitki hücresine ne olur?",
      opts: [
        { t: "Su hücreden dışarı çıkar, hücre büzülür.", ok: true, why: "Dışarının derişimi yüksek; su derişimi düşük taraf, yani yüksek derişime doğru gider." },
        { t: "Su hücreye girer, hücre şişer.", why: "Bu, saf suya bırakılırsa olur." },
        { t: "Hiçbir şey olmaz.", why: "Derişim farkı varsa su hareket eder." },
        { t: "Tuz hücreden çıkar.", why: "Zar tuza çok az geçirgendir; hareket eden esas olarak sudur." }
      ],
      explain: "Önce yönü sezgiyle söyle, sonra kuralı çıkar." },

    { type: "text", title: "Kural: su, çözünen maddenin çok olduğu yere gider",
      say: "Ozmos, suyun seçici geçirgen zardan geçişidir. Su, çözünen madde derişimi düşük taraftan yüksek tarafa doğru hareket eder.",
      html: `<div class="grid"><div class="card"><h3>Difüzyon</h3><p class="small">Maddeler çok olduğu yerden az olduğu yere yayılır.</p></div><div class="card pick"><h3>Ozmos</h3><p class="small">Su, <b>çözünen madde çok</b> olan tarafa gider (seçici geçirgen zar).</p></div></div>
<p class="callout why" style="margin-top:16px"><b>Dikkat:</b> "Yüksek derişim" çözünen maddeyi (tuz, şeker) anlatır; su orada <i>azdır</i>, o yüzden su oraya akar.</p>` },

    { type: "mcq", q: "Saf suya bırakılan hayvan hücresi (örneğin alyuvar) için hangisi doğrudur?",
      opts: [
        { t: "Hücre içine su girer, hücre şişer.", ok: true, why: "Hücre içi derişim yüksek, su içeri girer." },
        { t: "Hücre büzülür.", why: "Bu, derişik ortamda olur." },
        { t: "Hiç değişmez.", why: "Derişim farkı var." },
        { t: "Hücreden su çıkar.", why: "Yön ters." }
      ],
      explain: "Su, çözünen maddenin çok olduğu yere gider." },

    { type: "tap", q: "Aşağıdakilerden hangisi OZMOS örneğidir?",
      sents: [
        { t: "Parfüm kokusunun odaya yayılması.", why: "Difüzyon (gaz)." },
        { t: "Kuru üzümün suda şişmesi.", ok: true, why: "Su, şeker derişimi yüksek üzüme doğru hareket eder." },
        { t: "Çayda şekerin çözünmesi.", why: "Çözünme." },
        { t: "Havadaki oksijenin akciğere girmesi.", why: "Difüzyon." }
      ],
      explain: "Ozmos: su + seçici geçirgen zar + derişim farkı." },

    { type: "reflect", q: "Peki ya neden? Tuzlu su içmek neden susuzluğu artırır? Ozmosla açıkla.",
      hint: "Örnek düşünce: Kan ve dokulardaki tuz derişimi artarsa su hücrelerden dışarı çekilir, hücreler su kaybeder; beyin bunu susuzluk olarak algılar." },

    { type: "text", title: "Bugünün özeti",
      say: "Ozmosta su, çözünen maddenin çok olduğu tarafa gider.",
      html: `<ul class="body"><li>Difüzyon: yayılma. Ozmos: su geçişi.</li><li>Su → <b>çözünen madde çok</b> olan yere.</li><li>Derişik ortamda hücre büzülür, saf suda şişer.</li></ul>` }
  ]
};
