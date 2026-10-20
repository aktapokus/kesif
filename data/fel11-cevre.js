/* 11. sınıf Felsefe, 1. Ünite Çevre Sorunları ve Felsefe — FEL.11.1.1–11.1.2 Çevre ve insan ilişkisi; çevre etiği (insan merkezli, canlı merkezli, çevre merkezli) (konu anlatımı, sıfırdan).
   Kaynak: tymm.meb.gov.tr/felsefe-dersi/unite/66. Program: felsefi soru/problemleri hayatla ilişkilendirme; argüman çözümleme; çevre etiği yaklaşımlarının güçlü ve zayıf yanları; gerekçeli görüş ve felsefi metin yazımı.
   Özgün içerik (CC BY-NC-SA 4.0). Standart: docs/DERS-STANDARDI.md. */
(function () {
  KESIF.lessons["fel11-cevre"] = {
    id: "fel11-cevre", subject: "fel", title: "Doğanın değeri kime göre? Çevre etiği", minutes: 25,
    grade: "11. sınıf Felsefe, 1. Ünite, FEL.11.1.1–11.1.2 (Maarif: felsefi muhakeme, felsefi düşünce ortaya koyma)",
    hook: "Bir ormanı kesmenin yanlış olması için orada insan yaşıyor olması mı gerekir?",
    steps: [
      { type: "mcq", predict: true, q: "Bir şirket dere kenarındaki ormanı keserek fabrika kurmak istiyor. Fabrika insanlara iş verecek. ‘Orman ancak insanlara faydası olduğu için korunmalı’ diyen biri hangi soruya cevap vermektedir?",
        opts: [
          { t: "Doğanın değeri nedir? Doğa kendi başına mı değerlidir, yoksa insana faydası kadar mı?", ok: true, why: "Bu bir değer sorusudur: ‘değerli olan nedir ve değeri kim belirler?’ Cevap doğa ‘insana faydası kadar değerlidir’ olarak verilmiş." },
          { t: "Ormanda kaç ağaç vardır?", why: "Bu bir bilgi (sayma) sorusudur; felsefi değil." },
          { t: "Orman yangını nasıl söndürülür?", why: "Bu teknik bir sorudur; değer sorusu değildir." },
          { t: "Fabrikanın hangi malzemeyle kurulacağı", why: "Bu mühendislik sorusudur." }
        ],
        explain: "Felsefi soru, ‘ne kadar?’ ya da ‘nasıl?’ değil, ‘neden değerli?’ ‘doğru mu?’ ‘kim karar verir?’ diye sorar. Bu derste çevreye dair bu tür soruları sorup cevap arayacağız." },

      { type: "text", title: "Önce sözlük: çevre, değer, etik",
        say: "Çevre, canlıların içinde yaşadığı doğal ortamdır. Değer, bir şeyin önemli ya da iyi sayılmasının ölçütüdür. Etik, neyin doğru neyin yanlış olduğunu inceler.",
        html: `<div class="grid"><div class="card"><h3>Çevre</h3><p class="small">Canlıların içinde yaşadığı doğal ortam: hava, su, toprak, bitkiler, hayvanlar.</p></div><div class="card"><h3>Değer</h3><p class="small">Bir şeyin neden önemli sayıldığını belirleyen ölçüt. Örnek: faydalı olması ya da yaşıyor olması.</p></div><div class="card pick"><h3>Etik</h3><p class="small">Neyi yapmanın <b>doğru</b>, neyi yapmanın <b>yanlış</b> olduğunu soran felsefe alanı.</p></div><div class="card pick"><h3>Çevre etiği</h3><p class="small">İnsanın doğaya karşı neyi yapmasının doğru olduğunu inceler.</p></div></div>
<p class="callout why" style="margin-top:12px"><b>Neden felsefe?</b> Çevre sorunları yalnızca bilimle çözülmez. ‘Bir ormanı korumalı mıyız?’ sorusu bilgiyle birlikte <b>değer</b> yargısı da gerektirir.</p>` },

      { type: "text", title: "Çevre ve insan ilişkisi: dört felsefi soru",
        say: "Çevre ve insan ilişkisi dört soruyla incelenir. Doğanın kendi başına bir değeri var mıdır? İnsanın çevreye karşı ahlaki sorumluluğu var mıdır? İnsan doğal kaynakları ne ölçüde tüketebilir? İnsanın doğa üzerinde egemenlik kurması hangi sorunlara yol açar?",
        html: `<ul class="body"><li><b>Değer:</b> Doğanın kendi başına bir değeri var mıdır, yoksa değeri insana faydasından mı gelir?</li><li><b>Sorumluluk:</b> İnsanın doğaya karşı ahlaki bir sorumluluğu var mıdır?</li><li><b>Ölçü:</b> İnsan doğal kaynakları ne kadar tüketebilir?</li><li><b>Egemenlik:</b> İnsanın doğaya hükmetmesi hangi sorunlara yol açar?</li></ul>
<p class="callout why"><b>Dikkat:</b> Bu sorulara tek bir ‘doğru’ cevap yoktur; ama her cevabın <b>gerekçesi</b> olmalıdır. Felsefede iyi cevap, gerekçesi güçlü olandır.</p>` },

      { type: "text", title: "Üç yaklaşım: kimin değeri var?",
        say: "Çevre etiğinde üç ana yaklaşım vardır. İnsan merkezli etik değeri yalnızca insana verir. Canlı merkezli etik her canlıya değer verir. Çevre merkezli etik ekosistemin bütününe değer verir.",
        html: `<div class="grid"><div class="card"><h3>İnsan merkezli</h3><p class="small">Değer taşıyan <b>yalnızca insan</b>. Doğa insana faydası kadar değerli. Örnek: ‘Orman, bizim odun ve temiz havamız için korunmalı.’</p></div>
<div class="card"><h3>Canlı merkezli</h3><p class="small"><b>Her canlı</b> yaşıyor olduğu için değerli. Örnek: ‘Her ağaç ve hayvan, insana faydası olmasa da korunmayı hak eder.’</p></div>
<div class="card pick"><h3>Çevre merkezli</h3><p class="small">Değer, <b>ekosistemin bütünündedir</b> (canlılar, dereler, toprak, hava birlikte). Örnek: ‘Orman ekosistemi bozulmamalı; bu bütünün kendisi değerli.’</p></div></div>
<p class="callout why" style="margin-top:12px"><b>Ayırıcı soru:</b> ‘Değeri kime ya da neye veriyor?’ — yalnızca insana (insan merkezli), her bir canlıya (canlı merkezli) ya da bütüne (çevre merkezli).</p>` },

      { type: "mcq", q: "‘Nehirlerin korunması insanlar için içme suyu sağladığı sürece önemlidir; değeri yalnızca bu fayda ile ölçülür.’ görüşü hangi yaklaşıma örnektir?",
        opts: [
          { t: "İnsan merkezli etik", ok: true, why: "Değer yalnızca insana faydası ile ölçülüyor: doğa araçsal olarak değerli. Bu insan merkezli bir görüştür." },
          { t: "Canlı merkezli etik", why: "Canlı merkezlide canlıların kendi yaşamı için değeri vardır; burada yalnızca insana fayda ölçülüyor." },
          { t: "Çevre merkezli etik", why: "Çevre merkezlide ekosistemin bütünü kendi başına değerlidir; burada fayda ölçütü insana dayanıyor." },
          { t: "Etik dışı bir görüştür, felsefi değildir.", why: "Bu görüş de gerekçeli bir değer yargısı içerir; felsefi bir görüştür (tartışılabilir)." }
        ],
        explain: "‘Yalnızca insana faydası kadar’ ifadesi insan merkezli yaklaşımın tipik gerekçesidir." },

      { type: "mcq", q: "‘Bir kaplumbağanın yaşamı, insana hiçbir faydası olmasa bile korunmayı hak eder; çünkü o da yaşayan bir varlıktır.’ görüşü hangi yaklaşıma örnektir?",
        opts: [
          { t: "Canlı merkezli etik", ok: true, why: "Değeri veren ölçüt ‘yaşıyor olmak’ ve bu ölçüt her canlı için geçerli: canlı merkezli yaklaşım." },
          { t: "İnsan merkezli etik", why: "İnsan merkezlide değer insana fayda ile belirlenir; burada fayda önemsiz sayılıyor." },
          { t: "Çevre merkezli etik", why: "Çevre merkezlide bütün ekosistem kendi başına değerli; burada tek bir canlıya (kaplumbağa) değer veriliyor." },
          { t: "Hiçbiri; kaplumbağa değerli değildir.", why: "Metin kaplumbağaya değer biçiyor; yaklaşım canlı merkezlidir." }
        ],
        explain: "Her canlıyı tek tek değerli sayan görüş canlı merkezlidir." },

      { type: "text", title: "Her yaklaşımın güçlü ve zayıf yanı",
        say: "Her yaklaşımın güçlü ve zayıf yönleri vardır. Felsefede bir görüşü savunmak için hem güçlü yanını göstermek hem de karşı eleştirilere cevap vermek gerekir.",
        html: `<table class="tbl"><thead><tr><th>Yaklaşım</th><th>Güçlü yanı</th><th>Zayıf yanı (eleştiri)</th></tr></thead><tbody>
<tr><td>İnsan merkezli</td><td>Çevrenin korunmasını insanların çıkarına bağlar; anlaşılması kolay</td><td>İnsana faydası görünmeyen canlı ya da ortam korunmayabilir</td></tr>
<tr><td>Canlı merkezli</td><td>Her canlıyı kapsar; değeri geniş tutar</td><td>Canlıları ayırmak zor: hangi canlıya ne kadar öncelik verilir? Cansız doğa (dağ, nehir) dışarıda kalır</td></tr>
<tr><td>Çevre merkezli</td><td>Ekosistemin bütününü korur; cansız doğayı da kapsar</td><td>Tek tek canlı ya da insan haklarıyla çatışabilir (bütünün çıkarı bireyi gölgede bırakır mı?)</td></tr></tbody></table>` },

      { type: "mcq", q: "Bir öğrenci ‘Canlı merkezli etik, dağları ve nehirleri korumayı açıklayamaz çünkü onlar yaşayan varlık değildir’ diyor. Bu eleştiri hangi yönü işaret eder?",
        opts: [
          { t: "Canlı merkezli yaklaşımın zayıf yanı: yalnızca canlıları kapsadığı için cansız doğayı dışarıda bırakıyor.", ok: true, why: "Değer ölçütü ‘yaşıyor olmak’ olduğundan dağ ve nehir kapsam dışında kalır; çevre merkezli yaklaşım bu boşluğu doldurmayı hedefler." },
          { t: "İnsan merkezli yaklaşımın güçlü yanı.", why: "Eleştiri canlı merkezliye yönelik; insan merkezli ile ilgili değil." },
          { t: "Çevre merkezli yaklaşımın zayıf yanı.", why: "Çevre merkezli yaklaşım cansız doğayı da kapsar; eleştiri ona yöneltilemez." },
          { t: "Felsefede eleştiri yapılamaz.", why: "Eleştiri felsefenin temel yöntemidir." }
        ],
        explain: "Bir yaklaşımı eleştirirken hangi durumu açıklayamadığını göster." },

      { type: "mcq", q: "Bir sanayi bölgesindeki fabrikanın atığı bir gölü kirletiyor. Gölde balık yok, çevrede yaşayan insan yok ama göl bölgedeki kuşların göç yolunun bir parçası. Bir öğrenci ‘Gölü yine de korumalıyız; çünkü gölü, balıkları, kuşları ve çevreyi bütün olarak koruyan bir düzen vardır’ diyor. Bu argümanın temel ölçütü nedir?",
        opts: [
          { t: "Ekosistemin bütününün değeri (çevre merkezli yaklaşım)", ok: true, why: "Argüman, tek tek insanları ya da canlıları değil, birbirine bağlı bütünü (gölü, kuşları, çevreyi) koruma gerekçesi yapıyor: çevre merkezli." },
          { t: "İnsana sağlanan fayda (insan merkezli yaklaşım)", why: "Senaryoda çevrede insan yaşamıyor; argüman insan faydasına dayanmıyor." },
          { t: "Tek bir canlının yaşamı (canlı merkezli yaklaşım)", why: "Argüman tek bir canlıya değil, bütüne dayanıyor." },
          { t: "Fabrikanın kâr etmesi", why: "Argüman kâr ölçütünü savunmuyor; tersine kirletmeye karşı." }
        ],
        explain: "Argümanın ‘neyi değerli saydığına’ bak: insanı mı, tek canlıyı mı, bütünü mü?" },

      { type: "reflect", q: "Peki ya neden? Gözlemlediğin bir çevre sorununu (örneğin ormanların kesilmesi, deniz kirliliği ya da çöplerin birikmesi) seç. Bu sorun hakkında üç yaklaşımdan hangisini daha savunulabilir buluyorsun? Gerekçeni iki cümleyle yaz ve karşı bir eleştiriye nasıl cevap vereceğini düşün.",
        hint: "Örnek düşünce: Deniz kirliliği için çevre merkezli yaklaşımı daha savunulabilir buluyorum, çünkü deniz canlıları, su ve kıyı birbirine bağlı bir bütün ve kirlilik tüm bütünü bozuyor. Karşı eleştiri: ‘Bütünü korumak insanların balıkçılık geçimini engelleyebilir.’ Cevabım: Bütünü korumak uzun vadede balık stoklarını da korur; yani insanlar için de faydalıdır. Felsefi bir görüşte gerekçe, ölçüt ve karşı eleştiriye cevap bir arada bulunmalıdır." },

      { type: "text", title: "Özet ve sınavda ne işe yarar",
        say: "Çevre etiği, doğanın değerini inceler. İnsan merkezli etik değeri insana, canlı merkezli etik her canlıya, çevre merkezli etik ekosistemin bütününe verir.",
        html: `<ul class="body"><li><b>Felsefi soru:</b> değer, sorumluluk, ölçü, egemenlik üzerine; tek doğru cevap yok, gerekçe şart.</li><li><b>İnsan merkezli:</b> değer yalnızca insanda (fayda). <b>Canlı merkezli:</b> her canlıda (yaşam). <b>Çevre merkezli:</b> ekosistemin bütününde.</li><li>Güçlü–zayıf yan: insan merkezli → fayda yoksa korunmaz; canlı merkezli → cansız doğa dışarıda; çevre merkezli → bireyle çatışabilir.</li><li>Felsefi metin: problemi tanımla, kavramları kullan, argüman kur, karşı eleştiriye cevap ver.</li></ul>
<p class="callout">Sınavda şöyle görürsün: bir metin ya da diyalog verilir; hangi yaklaşıma ait olduğu, bir argümanın ölçütü ya da bir eleştirinin hangi yaklaşıma yönelik olduğu sorulur. Önce ‘değeri kime/neye veriyor?’ sorusunu sor.</p>` }
    ]
  };
})();
