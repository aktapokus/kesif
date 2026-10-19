/* Edebiyat keşfi: Söz sanatlarını "yazar bunu neden böyle söyledi?" sorusuyla ayırt etmek. Metinler özgündür (CC BY-NC-SA 4.0). */
KESIF.lessons["edeb-soz-sanatlari"] = {
  id: "edeb-soz-sanatlari", subject: "edeb", title: "Söz sanatları: yazar bunu neden böyle söyledi?", minutes: 25,
  grade: "AYT Edebiyat / okul Edebiyat — söz sanatları (benzetme, kişileştirme, abartma, zıtlık)",
  hook: "Adları ezberlemeden, cümleye 'gerçekte ne olmuş?' diye sorarak ayır.",
  steps: [
    { type: "text", title: "Anahtar soru: gerçek ne, söylenen ne?",
      say: "Söz sanatı, gerçeğin başka bir biçimde söylenmesidir. Her cümlede gerçeği ve söylenişi karşılaştır.",
      html: `<div class="grid"><div class="card"><h3>Benzetme</h3><p class="small">İki şeyi ortak yönle yaklaştırır. <i>"gibi, kadar"</i> ipucudur.</p></div>
<div class="card pick"><h3>Kişileştirme</h3><p class="small">İnsan olmayana insan davranışı verir. <i>Rüzgâr fısıldadı.</i></p></div>
<div class="card"><h3>Abartma</h3><p class="small">Gerçekten büyük/küçük söylenir. <i>Bir ömür bekledim.</i></p></div>
<div class="card"><h3>Zıtlık</h3><p class="small">Karşıt kavramlar yan yana. <i>Acı tatlı bir gülümseme.</i></p></div></div>
<p class="callout why" style="margin-top:16px"><b>Üç adım:</b> 1) Gerçekte ne olmuş? 2) Cümle bunu nasıl söylemiş? 3) Arada hangi oyun var?</p>` },

    { type: "mcq", q: "\"Bu çocuk kurnazlıkta tam bir tilki.\" cümlesinde hangi söz sanatı baskındır?",
      opts: [
        { t: "Benzetme (insanın bir hayvana benzetilmesi)", ok: true, why: "Çocuk, kurnazlığı yüzünden tilkiye benzetiliyor." },
        { t: "Kişileştirme", why: "Hayvana insan özelliği verilmemiş; insan hayvana benzetilmiş. Yön ters." },
        { t: "Abartma", why: "Gerçek dışı büyütme yok; kurnazlık vurgulanıyor." },
        { t: "Zıtlık", why: "Karşıt kavram yok." }
      ],
      explain: "Kişileştirmede yön: insan olmayan → insan gibi. Benzetmede: insan/nesne → başka varlığa." },

    { type: "tap", q: "Hangi cümlede KİŞİLEŞTİRME vardır?",
      sents: [
        { t: "Gözleri iki yıldız gibi parlıyordu.", why: "Benzetme." },
        { t: "Dağlar başını göğe dayayıp düşünüyordu.", ok: true, why: "Dağ düşünür, başını dayar: insana özgü davranışlar." },
        { t: "Ağlamaktan gözyaşından göl oldu.", why: "Abartma." },
        { t: "Gülerek ağlıyordu.", why: "Zıtlık." }
      ],
      explain: "Davranış fiillerine bak: düşünmek, fısıldamak, uyumak… insanı mı anlatıyor, yoksa doğayı mı?" },

    { type: "mcq", q: "\"Sana yüz kere söyledim, yine dinlemedin.\" cümlesindeki 'yüz kere' için ne denir?",
      opts: [
        { t: "Abartma", ok: true, why: "Gerçekte belki 3–4 kez; vurgu için büyütülmüş." },
        { t: "Kişileştirme", why: "İnsan olmayan bir varlık yok." },
        { t: "Zıtlık", why: "Karşıt kavram yok." },
        { t: "Benzetme", why: "'Gibi' ya da benzetme yönü yok." }
      ],
      explain: "Sayı ya da boyut gerçeği aşıyorsa abartma düşün." },

    { type: "reflect", q: "Peki ya neden? Yazar gerçeği doğrudan söylemek yerine neden söz sanatı kullanır? Kendi örneğinle düşün.",
      hint: "Örnek düşünce: 'Çok üzüldüm' demek ile 'Yüreğime bir kor düştü' demek okurun hissini değiştirir. Söz sanatı duyguyu ve görüntüyü canlandırır, okur anlamı kendisi bulur." },

    { type: "text", title: "Bugünün özeti",
      say: "Söz sanatını ezberlemek yerine gerçek ile söylenişi karşılaştır.",
      html: `<ul class="body"><li>Gerçek ne? Söylenen ne?</li><li><b>Benzetme</b>: gibi/kadar. <b>Kişileştirme</b>: insan davranışı. <b>Abartma</b>: gerçeği aşan büyütme. <b>Zıtlık</b>: karşıt kavramlar.</li></ul>` }
  ]
};
