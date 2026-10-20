/* 11. sınıf Biyoloji, 1. Tema Tepki — BİY.11.1.1 Farklı canlıların uyaranlara karşı tepki mekanizmaları (tümevarımsal akıl yürütme) (konu anlatımı, sıfırdan).
   Kaynak: tymm.meb.gov.tr/biyoloji-dersi/unite/13. Program: tepki örüntüsü = uyaranı alma, yorumlama, tepkinin ortaya çıkışı; farklı canlılar farklı mekanizmalarla tepki verir; bitkilerde tepkinin yönelme (uyaranın yönüne bağlı) / nasti (yönüne bağlı olmayan) ayrımına giriş.
   Özgün içerik (CC BY-NC-SA 4.0). Standart: docs/DERS-STANDARDI.md. */
(function () {
  KESIF.lessons["biy11-tepki"] = {
    id: "biy11-tepki", subject: "biy", title: "Canlılar uyarana nasıl tepki verir?", minutes: 25,
    grade: "11. sınıf Biyoloji, 1. Tema Tepki, BİY.11.1.1 (Maarif: tümevarımsal akıl yürütme, örüntü bulma ve genelleme)",
    hook: "Küstüm otuna dokununca yaprakları kapanıyor, kediye dokununca kaçıyor. İkisinde ortak olan ne?",
    steps: [
      { type: "mcq", predict: true, q: "Işıklı bir pencere kenarındaki saksı bitkisinin yaprakları ve gövdesi zamanla ışığa doğru eğiliyor. Bu olay için en uygun açıklama hangisidir?",
        opts: [
          { t: "Bitki ışığı algılıyor ve büyümesini ışığa doğru yönlendirerek tepki veriyor.", ok: true, why: "Işık bir uyarandır; bitki onu algılar ve büyümeyle yanıt verir. Bitkiler hayvanlar gibi sinir sistemiyle değil, hormonlarla tepki verir." },
          { t: "Bitkinin tepkisi yoktur, çünkü bitkiler hareket etmez.", why: "Bitkiler yer değiştirmez ama büyüme ya da hareketle uyaranlara tepki verir; eğilme bir tepkidir." },
          { t: "Bitki yalnızca ısınmak için eğilir.", why: "Eğilmenin nedeni ısınma değil, ışık uyaranının yönüdür." },
          { t: "Bitki rastgele eğilir, ışıkla ilgisi yoktur.", why: "Eğilme ışığın geldiği yöne doğrudur; rastgele değil." }
        ],
        explain: "Canlılar çevrelerindeki değişikliklere (uyaranlara) tepki verir. Bu derste farklı canlılarda ortak bir örüntü arayacağız." },

      { type: "text", title: "Önce sözlük: uyaran, reseptör, tepki",
        say: "Uyaran, canlıda tepki oluşturan çevre değişikliğidir. Reseptör, uyaranı algılayan yapıdır. Tepki, uyarana karşı canlının verdiği yanıttır.",
        html: `<div class="grid"><div class="card"><h3>Uyaran</h3><p class="small">Tepkiye yol açan değişiklik: ışık, ses, sıcaklık, dokunma, kimyasal madde.</p></div><div class="card"><h3>Reseptör (alıcı)</h3><p class="small">Uyaranı algılayan yapı: göz (ışık), kulak (ses), deri (dokunma).</p></div><div class="card pick"><h3>Tepki</h3><p class="small">Uyarana verilen yanıt: kaçmak, eğilmek, salgı yapmak, büyümek.</p></div></div>
<p class="callout why" style="margin-top:12px"><b>Neden tepki verilir?</b> Canlı tepki vererek yaşamını sürdürür: besine ulaşır, tehlikeden kaçar, koşullara uyum sağlar.</p>` },

      { type: "text", title: "Her canlıda aynı üç basamak",
        say: "Hangi canlı olursa olsun tepki üç basamakla olur. Önce uyaran algılanır. Sonra algılanan bilgi yorumlanır. En sonunda tepki ortaya çıkar.",
        html: `<ol class="body"><li><b>Uyaranı alma:</b> reseptör uyaranı algılar.</li><li><b>Yorumlama/bütünleştirme:</b> bilgi değerlendirilir (hayvanlarda sinir sistemi, bitkilerde hormonlar).</li><li><b>Tepkinin ortaya çıkışı:</b> kas, bez ya da büyüme yoluyla yanıt verilir.</li></ol>
<table class="tbl"><thead><tr><th>Canlı</th><th>Uyaran</th><th>Yorumlama</th><th>Tepki</th></tr></thead><tbody><tr><td>Kedi</td><td>Ani ses</td><td>Sinir sistemi</td><td>Kaçma</td></tr><tr><td>Ayçiçeği</td><td>Işık</td><td>Bitkisel hormonlar</td><td>Işığa yönelme</td></tr><tr><td>Küstüm otu</td><td>Dokunma</td><td>Hücreler arası uyartı</td><td>Yaprakların kapanması</td></tr><tr><td>Öglena (tek hücreli)</td><td>Işık</td><td>Hücre içi</td><td>Işığa doğru yüzme</td></tr></tbody></table>` },

      { type: "mcq", q: "Aşağıdaki tabloda canlı, uyaran ve tepki verilmiştir. Hangi satırda uyaran ve tepki doğru eşleştirilmiştir?",
        opts: [
          { t: "Dokunma → küstüm otunun yapraklarının kapanması", ok: true, why: "Dokunma bir mekanik uyarandır; küstüm otu yapraklarını kapatarak tepki verir." },
          { t: "Işık → kedinin sıçraması", why: "Kedinin sıçraması çoğu zaman ses ya da hareket uyaranına verilir; burada eşleşme tutarsız." },
          { t: "Ses → ayçiçeğinin ışığa dönmesi", why: "Ayçiçeğinin yönelmesi ışık uyaranına verilen tepkidir." },
          { t: "Su → kedinin yaprak kapatması", why: "Kedi yaprak açıp kapatmaz; yaprak kapatma bitkilerdeki bir tepkidir." }
        ],
        explain: "Eşleştirmede önce uyaranı sonra tepkinin kimde ve nasıl ortaya çıktığını kontrol et." },

      { type: "mcq", predict: true, q: "Tek hücreli Öglena, ışıklı bölgeye doğru yüzüyor. Bu canlıda sinir sistemi yoktur. Bu gözleme göre aşağıdaki genellemelerden hangisi en uygundur?",
        opts: [
          { t: "Tepki vermek için sinir sistemi şart değildir; sinir sistemi olmayan canlılar da uyaranlara tepki verir.", ok: true, why: "Öglena tek hücreli olduğu için sinir sistemi yoktur; ama ışığı algılayıp yönelir. Bitkilerde de sinir sistemi olmadan tepki görülür." },
          { t: "Yalnızca sinir sistemi olan canlılar tepki verir.", why: "Bitkiler ve tek hücreliler sinir sistemi olmadan da tepki verir." },
          { t: "Tek hücreliler uyaranlara tepki vermez.", why: "Öglena ışığa doğru yüzer; tepki verir." },
          { t: "Tepki yalnızca hareket etmekle sınırlıdır.", why: "Tepki büyüme yönü, salgı, renk değişimi gibi başka biçimlerde de olabilir." }
        ],
        explain: "Tümevarım: birkaç farklı canlıdan ortak örüntü çıkar. Tek hücreli, bitki ve hayvan tepkilerinde ortak olan: uyaranı algılama + yorumlama + tepki." },

      { type: "text", title: "Bitki tepkileri iki gruba ayrılır",
        say: "Bitkilerin tepkileri uyaranın yönüne bağlı olanlar ve olmayanlar diye iki gruba ayrılır. Uyaranın yönüne bağlı olanlara yönelme denir. Uyaranın yönüne bağlı olmayanlara nasti denir.",
        html: `<div class="grid"><div class="card pick"><h3>Yönelme (tropizma)</h3><p class="small">Uyaranın <b>geldiği yöne</b> bağlı: ışığa doğru eğilme, kökün yer çekimine doğru uzaması.</p></div><div class="card"><h3>Nasti</h3><p class="small">Uyaranın yönü <b>önemsiz</b>: küstüm otunun dokunmaya yaprak kapatması, akşamsefası çiçeğinin açılıp kapanması.</p></div></div>
<p class="callout why" style="margin-top:12px"><b>Ayırıcı soru:</b> "Uyaran sağdan gelseydi tepki de sağa mı yönelirdi?" Evetse yönelme; tepki aynıysa nasti.</p>` },

      { type: "mcq", q: "Bir ışık kaynağı bitkinin soluna konunca gövde sola doğru eğiliyor; sağına konunca sağa doğru eğiliyor. Bu tepki hangi gruba girer?",
        opts: [
          { t: "Yönelme (tropizma): tepkinin yönü uyaranın yönüne bağlıdır.", ok: true, why: "Işık nereden gelirse bitki oraya yöneliyor; yön uyaranın yönüne bağlı, bu bir yönelme hareketidir." },
          { t: "Nasti: tepkinin yönü önemli değildir.", why: "Nastide uyaranın yönü önemsizdir; burada yön değişince tepki de değişiyor." },
          { t: "Refleks: sinir sistemi olmadan olmaz.", why: "Refleks hayvanlardaki sinirsel bir tepkidir; bitkilerde yönelme hormonlarla olur." },
          { t: "Tepki değil, rastgele büyümedir.", why: "Eğilme ışığın yönünü izliyor; rastgele değil." }
        ],
        explain: "Yön değişince tepkinin yönü de değişiyorsa yönelme, değişmiyorsa nasti." },

      { type: "mcq", q: "Küstüm otuna her yönden dokunulduğunda yaprakları aynı biçimde kapanıyor. Bu tepki hangi gruba girer?",
        opts: [
          { t: "Nasti: tepki uyaranın yönüne bağlı değildir.", ok: true, why: "Dokunma hangi yönden olursa olsun yapraklar aynı şekilde kapanıyor: uyaranın yönü önemsiz." },
          { t: "Yönelme: yapraklar dokunulan yöne doğru kapanır.", why: "Yaprağın kapanması dokunmanın yönüne göre değişmez." },
          { t: "Refleks: sinir hücresi ile iletilir.", why: "Bitkilerde sinir hücresi yoktur." },
          { t: "Tepki değildir, yalnızca rüzgârdır.", why: "Rüzgâr dokunma uyaranı olabilir; tepki ise yaprağın kapanmasıdır." }
        ],
        explain: "Yönün önemsiz olması nastinin ayırt edici özelliğidir." },

      { type: "mcq", q: "Bir öğrenci farklı canlılarla ilgili gözlemlerinden şu genellemeyi yapıyor: ‘Canlılarda tepki üç basamakla gerçekleşir: uyaranın algılanması, bilginin yorumlanması ve tepkinin ortaya çıkması.’ Bu genelleme için hangisi doğrudur?",
        opts: [
          { t: "Genelleme tutarlıdır; kedi, ayçiçeği, küstüm otu ve Öglena örneklerinin hepsinde bu üç basamak bulunur.", ok: true, why: "Her örnekte bir uyaran algılanıyor, bir yorumlama süreci var (sinir sistemi, hormon, hücre içi) ve tepki ortaya çıkıyor; örüntü ortak." },
          { t: "Genelleme yanlıştır, çünkü bitkilerde hiç tepki yoktur.", why: "Bitkilerde yönelme ve nasti gibi tepkiler vardır." },
          { t: "Genelleme yalnızca insanlar için doğrudur.", why: "Örneklerde insan olmayan canlılar da aynı örüntüyü gösteriyor." },
          { t: "Genelleme tek bir örnekten çıkarılmıştır.", why: "Birden çok farklı canlıdan elde edilen gözlemlere dayanıyor." }
        ],
        explain: "Tümevarımda bir genellemeyi birden çok farklı örnekle sına: ortak örüntü tüm örneklerde görünüyorsa genelleme desteklenir." },

      { type: "reflect", q: "Peki ya neden? Sinir sistemi olmayan bir bitki, ışığa doğru nasıl eğilebiliyor? Sence ışığı algılayan yapı ile eğilen bölge arasında nasıl bir iletişim olmalı?",
        hint: "Örnek düşünce: Işığı algılayan hücreler bir sinyal üretir; bu sinyal bitkisel hormonlar aracılığıyla taşınır. Işığın gelmediği (gölgeli) taraftaki hücreler daha çok uzar, bitki ışığa doğru eğilir. Yani iletişim sinirle değil hormonlarla olur." },

      { type: "text", title: "Özet ve sınavda ne işe yarar",
        say: "Tepki, uyarana verilen yanıttır ve üç basamakla gerçekleşir. Bitkilerde tepkiler yönelme ve nasti diye ayrılır.",
        html: `<ul class="body"><li><b>Uyaran → reseptör → yorumlama → tepki</b>: tüm canlılarda ortak örüntü.</li><li>Hayvanlarda yorumlama sinir sistemiyle, bitkilerde hormonlarla olur; tek hücrelilerde hücre içinde.</li><li>Bitkilerde: <b>yönelme</b> (yön uyaranın yönüne bağlı) ve <b>nasti</b> (yön önemsiz).</li><li>Tümevarım: birkaç örnekten ortak örüntü bul, sonra başka örnekle sına.</li></ul>
<p class="callout">Sınavda şöyle görürsün: bir canlı ve bir uyaran verilir; tepkinin türü, bitkide yönelme mi nasti mi olduğu ya da bir genellemenin doğruluğu sorulur. Önce uyaranı ve tepkiyi ayır, sonra yönün önemli olup olmadığına bak.</p>` }
    ]
  };
})();
