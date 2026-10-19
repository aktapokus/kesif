/* Felsefe/Mantık keşfi: Argüman — öncül, sonuç, geçerlilik. Metinler özgündür (CC BY-NC-SA 4.0). */
KESIF.lessons["fel-arguman"] = {
  id: "fel-arguman", subject: "fel", title: "Argüman: doğru sonuç mu, geçerli akıl yürütme mi?", minutes: 25,
  grade: "AYT Felsefe grubu — mantık (öncül, sonuç, geçerlilik)",
  hook: "Bir sonucun doğru olması, ona götüren akıl yürütmenin sağlam olduğunu göstermez.",
  steps: [
    { type: "text", title: "Argüman = öncüller + sonuç",
      say: "Argüman, öncüllerden bir sonuca varan akıl yürütmedir. Geçerlilik, sonucun öncüllerden zorunlu çıkıp çıkmadığına bakar. Doğruluk ise öncüllerin gerçeğe uyup uymadığına bakar.",
      html: `<div class="grid"><div class="card"><h3>Öncül</h3><p class="small">Dayanak cümleler.</p></div><div class="card pick"><h3>Sonuç</h3><p class="small">Öncüllerden çıkarılan yargı.</p></div></div>
<p class="callout why" style="margin-top:16px"><b>İki ayrı soru:</b> 1) Öncüller doğru mu? 2) Doğru olsalardı sonuç zorunlu çıkar mıydı?</p>` },

    { type: "mcq", q: "\"Bütün kuşlar uçar. Penguen bir kuştur. O hâlde penguen uçar.\" argümanı için hangisi doğrudur?",
      opts: [
        { t: "Geçerlidir ama bir öncülü yanlıştır.", ok: true, why: "Öncüller doğru olsaydı sonuç zorunlu çıkardı (geçerli); ama 'bütün kuşlar uçar' yanlış." },
        { t: "Geçerli değildir, çünkü sonuç yanlıştır.", why: "Geçerlilik sonucun doğruluğuna değil, öncüllerle bağına bakar." },
        { t: "Hem geçerli hem öncülleri doğrudur.", why: "'Bütün kuşlar uçar' yanlış." },
        { t: "Ne geçerli ne doğrudur diyemeyiz.", why: "Geçerliliği yapı üzerinden belirleyebiliriz." }
      ],
      explain: "Önce öncüllerin doğruluğunu bir kenara bırak; sadece 'sonuç buradan çıkar mı?' diye sor." },

    { type: "mcq", q: "\"Bazı öğrenciler çalışkandır. Ali öğrencidir. O hâlde Ali çalışkandır.\" argümanı için ne söylenir?",
      opts: [
        { t: "Geçerli değildir; 'bazı' ifadesinden Ali için kesin sonuç çıkmaz.", ok: true, why: "Ali, çalışkan olan bazılarından biri olmayabilir." },
        { t: "Geçerlidir.", why: "'Bazı' kesinlik vermez." },
        { t: "Öncülleri yanlıştır.", why: "Öncüller doğru olabilir; sorun akıl yürütmede." },
        { t: "Sonucu doğrudur.", why: "Doğruluğu bilemeyiz; zorunlu çıkmıyor." }
      ],
      explain: "'Bütün' kesin sonuç verir; 'bazı' vermez." },

    { type: "tap", q: "Hangi argüman GEÇERLİDİR?",
      sents: [
        { t: "Bütün insanlar ölümlüdür. Sokrates insandır. O hâlde Sokrates ölümlüdür.", ok: true, why: "Öncüller doğru ve sonuç zorunlu çıkıyor." },
        { t: "Bazı canlılar uçar. Kedi canlıdır. O hâlde kedi uçar.", why: "'Bazı' kesin sonuç vermez." },
        { t: "Yağmur yağarsa yol ıslanır. Yol ıslak. O hâlde yağmur yağdı.", why: "Yol başka nedenle ıslanmış olabilir." },
        { t: "Bazı kitaplar kalındır. Bu bir kitaptır. O hâlde bu kalındır.", why: "Aynı hata." }
      ],
      explain: "Kesin kelimeler (bütün, her) geçerli sonuç üretir; bazı üretmez." },

    { type: "reflect", q: "Peki ya neden? Doğru bir sonuca yanlış akıl yürütmeyle varmak neden sorun olur? Günlük hayattan bir örnek düşün.",
      hint: "Örnek düşünce: Şans eseri doğru tahmin, bir sonraki seferde aynı yöntemle yanlışa götürebilir. Sağlam akıl yürütme, farklı durumlarda da doğruya götürür; bu yüzden yöntem sonucun kendisi kadar önemlidir." },

    { type: "text", title: "Bugünün özeti",
      say: "Geçerlilik yapıya, doğruluk gerçeğe bakar.",
      html: `<ul class="body"><li>Argüman = öncül + sonuç.</li><li><b>Geçerli</b>: sonuç zorunlu çıkar. <b>Doğru</b>: öncüller gerçeğe uyar.</li><li>'Bazı' ile kesin sonuç çıkmaz.</li></ul>` }
  ]
};
