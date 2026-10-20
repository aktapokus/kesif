/* Fizik keşfi: Newton'un ikinci yasası — sıfırdan. Standart: docs/DERS-STANDARDI.md. Metinler özgündür (CC BY-NC-SA 4.0). */
KESIF.lessons["fiz-newton"] = {
  id: "fiz-newton", subject: "fiz", title: "Kuvvet, kütle ve ivme (sıfırdan)", minutes: 25,
  grade: "TYT Fizik — Newton'un hareket yasaları (F = m·a)",
  hook: "Market arabasını boşken ve doluyken aynı gücle itersen ne olur?",
  steps: [
    { type: "mcq", predict: true, q: "Markette boş bir arabayı ve içi su dolu bir arabayı aynı güçle itiyorsun. Hangisi daha çabuk hızlanır?",
      opts: [
        { t: "Boş araba.", ok: true, why: "Haklısın. Şimdi bunun arkasındaki kuralı kendimiz bulacağız." },
        { t: "Dolu araba.", why: "Tersi: yük arttıkça arabayı hızlandırmak zorlaşır. Neden olduğunu birazdan göreceksin." },
        { t: "İkisi de aynı.", why: "Aynı güçle iterken yük farklıysa hızlanma da farklı olur." }
      ],
      explain: "Hiç fizik bilmeden de doğru tahmin ettin. Bu derste sezgini bir kurala çevireceğiz." },

    { type: "text", title: "Sözlük 1: Kuvvet nedir?",
      say: "Kuvvet, bir cismi itme ya da çekmedir. Birimi newton, yazılışı N. Bir newton, yaklaşık yüz gramlık bir cismin ağırlığı kadardır.",
      html: `<p class="big">Kuvvet = <b>itme</b> ya da <b>çekme</b>.</p>
<div class="grid"><div class="card"><h3>1 N</h3><p class="small">Avucunda duran küçük bir çikolatanın (100 g) seni aşağı çekişi.</p></div>
<div class="card pick"><h3>10 N</h3><p class="small">1 kg'lık bir şişe suyun ağırlığı.</p></div></div>
<p class="callout why" style="margin-top:16px">Sembol: <b>F</b> (İngilizce <i>force</i>). Birim: <b>N</b> (newton).</p>` },

    { type: "text", title: "Sözlük 2: Kütle nedir?",
      say: "Kütle, bir cismin ne kadar madde içerdiğini gösterir. Birimi kilogram. Kütle büyükse cismi hareket ettirmek ya da durdurmak zorlaşır.",
      html: `<p class="big">Kütle = cismin <b>"inatçılığı"</b>.</p>
<div class="grid"><div class="card"><h3>Boş araba</h3><p class="small">Kütle küçük → kolay hareket eder.</p></div>
<div class="card pick"><h3>Dolu araba</h3><p class="small">Kütle büyük → zor hareket eder.</p></div></div>
<p class="callout why" style="margin-top:16px">Sembol: <b>m</b>. Birim: <b>kg</b>.</p>` },

    { type: "text", title: "Sözlük 3: İvme nedir?",
      say: "İvme, hızın ne kadar çabuk değiştiğidir. Arabada gaza basınca hız artar; bu hız artışının her saniyedeki miktarı ivmedir. Birimi metre bölü saniye kare.",
      html: `<p class="big">İvme = hız her saniyede <b>ne kadar değişiyor?</b></p>
<div class="card pick"><h3>Örnek</h3><p class="small">Bir araba duruyor, 3 saniyede 6 m/s hıza çıkıyor. Her saniye 6 ÷ 3 = <b>2 m/s</b> artıyor. İvme: <b>2 m/s²</b>.</p></div>
<p class="callout why" style="margin-top:16px">Sembol: <b>a</b>. Birim: <b>m/s²</b> (her saniye, saniyede kaç metre hız artıyor).</p>` },

    { type: "mcq", q: "Duran bir bisiklet 4 saniyede 8 m/s hıza ulaşıyor. İvmesi kaç m/s²'dir?",
      opts: [
        { t: "2", ok: true, why: "Hız değişimi 8 m/s, süre 4 s → 8 ÷ 4 = 2 m/s²." },
        { t: "32", why: "Çarpma yapılmış. İvme, hız değişiminin süreye bölünmesiyle bulunur." },
        { t: "4", why: "Süre (4) ivme sanılmış." },
        { t: "12", why: "Toplama yapılmış (8 + 4)." }
      ],
      explain: "İlk bakacağın şey: hız ne kadar değişti? Sonra: bu kaç saniyede oldu?" },

    { type: "text", title: "Üçü nasıl birbirine bağlanır?",
      say: "Aynı güçle iterken kütle büyüdükçe ivme küçülür. Kütle aynıyken kuvveti artırınca ivme büyür. Bu iki gözlemi tek formülde birleştiririz: kuvvet eşittir kütle çarpı ivme.",
      html: `<p class="big"><b>F = m · a</b></p>
<div class="grid"><div class="card"><h3>Kuvvet ↑</h3><p class="small">Kütle aynı kalırsa ivme <b>artar</b>.</p></div>
<div class="card"><h3>Kütle ↑</h3><p class="small">Kuvvet aynı kalırsa ivme <b>azalır</b>.</p></div></div>
<p class="callout why" style="margin-top:16px"><b>İvmeyi bulmak için:</b> a = F ÷ m. Önce neye bakacağız? Birimlere: N ÷ kg = m/s².</p>` },

    { type: "text", title: "Net kuvvet: ip çekme oyunu",
      say: "Bir cisme birden fazla kuvvet etki edebilir. Zıt yöndeki kuvvetler birbirini götürür. Geriye kalana net kuvvet denir. Formüldeki kuvvet her zaman net kuvvettir.",
      html: `<p class="big">İp çekme oyunu: sağdan 30 N, soldan 20 N çekiyorsun.</p>
<div class="card pick"><h3>Net kuvvet</h3><p class="small">30 − 20 = <b>10 N</b> (daha güçlü tarafa doğru).</p></div>
<p class="callout why" style="margin-top:16px">Aynı yönde: <b>topla</b>. Zıt yönde: <b>çıkar</b>. Sürtünme hareketin tersine çeker; itme kuvvetinden çıkar.</p>` },

    { type: "mcq", q: "Kütlesi 2 kg olan cisme net 10 N kuvvet uygulanıyor. İvmesi kaç m/s²'dir?",
      opts: [
        { t: "5", ok: true, why: "a = F ÷ m = 10 ÷ 2 = 5 m/s²." },
        { t: "20", why: "F × m yapılmış. İvme bulunurken kuvvet kütleye bölünür." },
        { t: "12", why: "Toplama yapılmış." },
        { t: "0,2", why: "m ÷ F yapılmış; bölme ters." }
      ],
      explain: "Birim kontrolü: N ÷ kg = m/s². Bölme doğru yönde." },

    { type: "mcq", q: "Kütlesi 4 kg olan cismi 20 N ile itiyorsun; yüzey 8 N sürtünme uyguluyor. İvme kaç m/s²'dir?",
      opts: [
        { t: "3", ok: true, why: "Önce net kuvvet: 20 − 8 = 12 N. Sonra a = 12 ÷ 4 = 3 m/s²." },
        { t: "5", why: "Sürtünme unutulmuş: 20 ÷ 4." },
        { t: "7", why: "Sürtünme toplanmış (28 ÷ 4). Sürtünme hareketi engeller, çıkarılır." },
        { t: "2", why: "Yalnızca sürtünme (8 N) net kuvvet sanılmış; 20 N’luk itme hesaba katılmamış." }
      ],
      explain: "Basamaklar: 1) Net kuvveti bul. 2) Kütleye böl." },

    { type: "text", title: "Üç yaygın tuzak",
      say: "Birincisi: net kuvveti bulmayı unutmak. İkincisi: bölmeyi ters yapmak. Üçüncüsü: hareket varsa kuvvet vardır sanmak.",
      html: `<div class="grid"><div class="card"><h3>1. Net kuvvet unutuldu</h3><p class="small">Sürtünme ya da zıt kuvvetler çıkarılmalı.</p></div>
<div class="card"><h3>2. a = m ÷ F</h3><p class="small">Doğrusu <b>F ÷ m</b>. Birim kontrol et.</p></div>
<div class="card pick"><h3>3. "Hareket = kuvvet"</h3><p class="small">Sabit hızla giden cisimde net kuvvet <b>sıfır</b> olabilir. Kuvvet hızı <i>değiştirir</i>.</p></div></div>` },

    { type: "mcq", q: "Pürüzsüz buzda sabit hızla kayan bir hokey diski için aşağıdakilerden hangisi doğrudur?",
      opts: [
        { t: "Net kuvvet sıfırdır; ivme sıfırdır.", ok: true, why: "Hız değişmiyorsa ivme sıfırdır; F = m·a'dan net kuvvet de sıfır." },
        { t: "Hareket ettiği için net kuvvet vardır.", why: "En sık yapılan hata: kuvvet hareketi değil, hızın değişmesini açıklar." },
        { t: "Disk yavaşlıyordur.", why: "Soruda hız sabit denmiş." },
        { t: "Net kuvvet diskin ağırlığına eşittir.", why: "Ağırlık yüzeyin tepki kuvvetiyle dengelenir." }
      ],
      explain: "Hız sabitse ivme sıfır, net kuvvet sıfırdır." },

    { type: "reflect", q: "Peki ya neden? Alışveriş arabasını doluyken durdurmak neden boşken durdurmaktan zordur? F = m·a ile kendi cümlelerinle açıkla.",
      hint: "Örnek düşünce: Aynı sürede durdurmak için aynı ivmeyle yavaşlamak gerekir. F = m·a olduğundan kütle büyükse gereken kuvvet de büyük olur. Yani dolu araba 'daha inatçı'." },

    { type: "text", title: "Bugünün özeti ve sınavda ne işe yarar",
      say: "Kuvvet eşittir kütle çarpı ivme. Önce net kuvveti bul, sonra kütleye böl.",
      html: `<ul class="body"><li><b>F</b>: itme/çekme (N). <b>m</b>: kütle (kg). <b>a</b>: hızın değişme hızı (m/s²).</li><li><b>a = F<sub>net</sub> ÷ m</b>. Önce net kuvvet.</li><li>Hız sabitse net kuvvet sıfırdır.</li></ul>
<p class="callout">Sınavda şöyle görürsün: "Cisme şu kuvvetler etki ediyor, ivmesi kaçtır?" Ne yapacağını artık biliyorsun: net kuvvet → kütleye böl.</p>` }
  ]
};
