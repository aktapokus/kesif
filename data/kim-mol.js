/* Kimya keşfi: Mol kavramı — saymanın kimyadaki yolu. Metinler özgündür (CC BY-NC-SA 4.0). */
KESIF.lessons["kim-mol"] = {
  id: "kim-mol", subject: "kim", title: "Mol: atomları nasıl sayarız?", minutes: 25,
  grade: "TYT Kimya — mol kavramı ve mol kütlesi",
  hook: "Bir damla suda milyarlarca molekül var. Hepsini tek tek sayamazsın; peki ne yaparsın?",
  steps: [
    { type: "text", title: "Düzine gibi, ama çok büyük",
      say: "Bir düzine on iki tanedir. Bir mol altı virgül sıfır iki çarpı on üzeri yirmi üç tanedir. Mol, çok küçük taneciklerin sayısını kolay ifade eden birimdir.",
      html: `<div class="grid"><div class="card"><h3>1 düzine</h3><p class="small">12 tane</p></div><div class="card pick"><h3>1 mol</h3><p class="small">6,02 × 10<sup>23</sup> tane (Avogadro sayısı)</p></div></div>
<p class="callout why" style="margin-top:16px"><b>Mol kütlesi:</b> 1 mol maddenin gram cinsinden kütlesidir. Atom kütlesi sayısal olarak bulunur: H = 1, C = 12, O = 16 g/mol.</p>` },

    { type: "mcq", q: "H₂O'nun mol kütlesi kaç g/mol'dür? (H = 1, O = 16)",
      opts: [
        { t: "18", ok: true, why: "2·1 + 16 = 18." },
        { t: "17", why: "Hidrojen sayısı (2) unutulmuş: 1 + 16." },
        { t: "32", why: "Oksijen iki kez sayılmış." },
        { t: "10", why: "Toplama yerine çıkarma." }
      ],
      explain: "Formüldeki alt sayılar atom sayısıdır; her atomun kütlesiyle çarp, topla." },

    { type: "mcq", q: "36 gram su kaç moldür? (H₂O = 18 g/mol)",
      opts: [
        { t: "2", ok: true, why: "n = m / M = 36 / 18 = 2 mol." },
        { t: "0,5", why: "Ters bölme: 18 / 36." },
        { t: "54", why: "Toplama: 36 + 18." },
        { t: "648", why: "Çarpma yapılmış." }
      ],
      explain: "Mol = kütle ÷ mol kütlesi (n = m / M)." },

    { type: "mcq", q: "CO₂'nin mol kütlesi 44 g/mol ise 11 gram CO₂ kaç moldür?",
      opts: [
        { t: "0,25", ok: true, why: "11 / 44 = 0,25 mol." },
        { t: "4", why: "Ters bölme: 44 / 11." },
        { t: "33", why: "Çıkarma yapılmış." },
        { t: "0,5", why: "11 yerine 22 alınmış." }
      ],
      explain: "Sonucun mantıklı olup olmadığına bak: 11 g, 44 g'ın dörtte biri → 0,25 mol." },

    { type: "reflect", q: "Peki ya neden? 1 mol su ile 1 mol demir aynı sayıda tanecik içerir ama kütleleri neden farklıdır?",
      hint: "Örnek düşünce: Taneciklerin sayısı aynı, fakat bir demir atomu bir su molekülünden çok daha ağırdır. 1 mol demir 56 g, 1 mol su 18 g'dır." },

    { type: "text", title: "Bugünün özeti",
      say: "Mol tanecik sayısıdır, mol kütlesi bir molün gramıdır, mol hesabı n eşittir m bölü M ile yapılır.",
      html: `<ul class="body"><li>1 mol = 6,02 × 10<sup>23</sup> tanecik.</li><li><b>n = m / M</b></li><li>Mol kütlesi atom kütlelerinin toplamıdır.</li></ul>` }
  ]
};
