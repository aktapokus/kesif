/* 11. sınıf Kimya, 1. Tema Etkileşim — Enerji: KİM.11.1.1 Tepkimelerde enerji değişimi (ekzotermik/endotermik, entalpi) (konu anlatımı, sıfırdan).
   Kaynak: tymm.meb.gov.tr/kimya-dersi/unite/161. Program: fiziksel ve kimyasal olaylardaki enerji değişimini gözlemleyen deney; değişimlerin ekzotermik/endotermik sınıflaması; potansiyel enerji–tepkime koordinatı grafiği ile entalpi işareti.
   Özgün içerik (CC BY-NC-SA 4.0). Standart: docs/DERS-STANDARDI.md. Entalpi sayıları öğretim için yuvarlatılmıştır. */
(function () {
  KESIF.lessons["kim11-enerji"] = {
    id: "kim11-enerji", subject: "kim", title: "Tepkimelerde enerji: ısı veren mi, ısı alan mı?", minutes: 25,
    grade: "11. sınıf Kimya, 1. Tema Etkileşim, KİM.11.1.1 (Maarif: deney yapma, tümevarımsal akıl yürütme, kanıt kullanma)",
    hook: "Sıcak su torbası ısınıyor, soğuk jel paketi soğuyor. İkisi de kimya; fark nerede?",
    steps: [
      { type: "mcq", predict: true, q: "Bir kimyasal ısıtıcı torbayı bükünce ısınır; bir ilk yardım soğuk paketini bükünce soğur. Bu ikisinin farkı sence nedir?",
        opts: [
          { t: "Isıtıcıdaki tepkime çevreye ısı verir; soğuk paketteki tepkime çevreden ısı alır.", ok: true, why: "Isınan torbada tepkime enerjisini çevreye verir (ısı açığa çıkar). Soğuyan pakette ise tepkime çevreden ısı soğurur; çevre soğur." },
          { t: "İkisinde de tepkime olmaz, yalnızca ısı alışverişi vardır.", why: "Torbaların içinde maddeler kimyasal olarak değişir; ısı değişimi bu tepkimenin sonucudur." },
          { t: "Isıtıcı enerji üretir; soğuk paket enerjiyi yok eder.", why: "Enerji yoktan var olmaz, yok da olmaz. Yalnızca madde ile çevre arasında aktarılır." },
          { t: "Isınan torbada madde, soğuyanda enerji vardır.", why: "Her ikisinde de madde ve enerji vardır; fark enerjinin yönündedir." }
        ],
        explain: "Tepkimelerde enerji ya çevreye verilir ya çevreden alınır. Bu dersin konusu bu ikisini ayırt etmek ve bir sayıyla (entalpi değişimi) göstermek." },

      { type: "text", title: "Önce sözlük: sistem, çevre, entalpi",
        say: "Sistem, incelediğimiz maddelerdir. Çevre, sistemin dışındaki her şeydir. Entalpi, sabit basınçta bir maddenin taşıdığı ısı enerjisi içeriğidir. Entalpi değişimi, ürünlerin entalpisi eksi girenlerin entalpisidir.",
        html: `<div class="grid"><div class="card"><h3>Sistem</h3><p class="small">İncelediğin maddeler (tepkime kabındakiler).</p></div><div class="card"><h3>Çevre</h3><p class="small">Sistemin dışı: kap, hava, elin.</p></div><div class="card pick"><h3>Entalpi (H)</h3><p class="small">Sabit basınçta maddenin ısı enerjisi içeriği.</p></div><div class="card pick"><h3>ΔH</h3><p class="small"><b>ΔH = H(ürünler) − H(girenler)</b>. Birimi kJ.</p></div></div>
<p class="callout why" style="margin-top:12px"><b>Δ (delta) = değişim</b> demektir: sonuncu eksi ilk. ΔH negatifse ürünlerin enerjisi daha düşük, yani <b>sistem enerji vermiş</b>; pozitifse <b>sistem enerji almış</b>.</p>` },

      { type: "text", title: "İki tür tepkime: ekzotermik ve endotermik",
        say: "Isı veren tepkimelere ekzotermik denir ve entalpi değişimi negatiftir. Isı alan tepkimelere endotermik denir ve entalpi değişimi pozitiftir.",
        html: `<div class="grid"><div class="card pick"><h3>Ekzotermik (ısı veren)</h3><p class="small"><b>ΔH < 0</b>. Çevre ısınır. Örnekler: yanma, hücresel solunum, kimyasal ısıtıcı, asit–baz tepkimesi.</p></div><div class="card"><h3>Endotermik (ısı alan)</h3><p class="small"><b>ΔH > 0</b>. Çevre soğur. Örnekler: fotosentez, soğuk paket, buzun erimesi (fiziksel olay), suyun buharlaşması.</p></div></div>
<p class="callout why" style="margin-top:12px"><b>Fiziksel olaylar da enerji değiştirir:</b> buz erirken çevreden ısı alır (endotermik); su donarken ısı verir (ekzotermik). Enerji değişimi yalnızca kimyasal tepkimelere özgü değildir.</p>` },

      { type: "sim", title: "Ürünlerin enerjisini değiştir: ΔH ve grafik",
        say: "Girenlerin enerjisi sabit. Ürünlerin enerjisini değiştir. Ürünlerin enerjisi girenlerden düşükse tepkime ısı verir, yüksekse ısı alır.",
        intro: "Girenlerin enerjisi <b>60 kJ</b> seviyesinde sabit. Kaydırıcıyla <b>ürünlerin enerjisini</b> değiştir. Grafikte sol kutular <b>girenlerin</b> ve <b>ürünlerin</b> enerji değerlerini, sağdaki ok <b>ΔH</b>'yi gösteriyor. Ürünler girenlerden aşağıdaysa ne oluyor?",
        cfg: { vb: "0 0 640 300", vars: [{ k: "P", label: "Ürünlerin enerjisi", min: 20, max: 100, step: 5, value: 30, unit: "kJ" }],
          out: [{ label: "ΔH = H(ürünler) − H(girenler)", fn: function (v) { var d = v.P - 60; return v.P + " − 60 = " + (d > 0 ? "+" : d < 0 ? "−" : "") + Math.abs(d) + " kJ"; } }, { label: "Tepkime türü", fn: function (v) { return v.P < 60 ? "ekzotermik (ısı verir)" : v.P > 60 ? "endotermik (ısı alır)" : "enerji değişimi yok"; } }],
          svg: function (v) {
            var Y = function (e) { return 260 - e * 2; }, yR = Y(60), yP = Y(v.P), top = Math.min(yR, yP) - 70, h = '';
            h += '<line x1="90" y1="270" x2="600" y2="270" stroke="var(--muted)"/><line x1="90" y1="20" x2="90" y2="270" stroke="var(--muted)"/><text x="600" y="292" text-anchor="end" fill="var(--ink)" font-size="15" font-weight="700">tepkime ilerlemesi →</text><text x="96" y="16" fill="var(--ink)" font-size="15" font-weight="700">↑ potansiyel enerji (kJ)</text>';
            h += '<path d="M 100 ' + yR + ' L 220 ' + yR + ' Q 300 ' + top + ' 380 ' + yP + ' L 570 ' + yP + '" fill="none" stroke="var(--accent)" stroke-width="4"/>';
            h += '<line x1="40" y1="' + yR + '" x2="100" y2="' + yR + '" stroke="var(--cyan)" stroke-dasharray="4 4"/><rect x="2" y="' + (yR - 11) + '" width="76" height="22" rx="7" fill="var(--cyan)"/><text x="40" y="' + (yR + 5) + '" text-anchor="middle" fill="#fff" font-size="14" font-weight="700">girenler 60</text>';
            h += '<line x1="40" y1="' + yP + '" x2="570" y2="' + yP + '" stroke="var(--good)" stroke-dasharray="4 4"/><rect x="2" y="' + (yP - 11) + '" width="76" height="22" rx="7" fill="var(--good)"/><text x="40" y="' + (yP + 5) + '" text-anchor="middle" fill="#fff" font-size="14" font-weight="700">ürünler ' + v.P + '</text>';
            if (v.P !== 60) { var ya = Math.min(yR, yP), yb = Math.max(yR, yP); h += '<line x1="500" y1="' + yR + '" x2="500" y2="' + yP + '" stroke="var(--bad)" stroke-width="4"/><polygon points="' + (v.P < 60 ? "500," + yP + " 494," + (yP - 10) + " 506," + (yP - 10) : "500," + yP + " 494," + (yP + 10) + " 506," + (yP + 10)) + '" fill="var(--bad)"/><text x="512" y="' + ((ya + yb) / 2 + 5) + '" fill="var(--bad)" font-size="17" font-weight="800">ΔH = ' + (v.P - 60 > 0 ? "+" : "−") + Math.abs(v.P - 60) + ' kJ</text>'; }
            return h; } } },

      { type: "mcq", predict: true, q: "Bir tepkimede girenlerin entalpisi 100 kJ, ürünlerin entalpisi 40 kJ'dir. Bu tepkime için hangisi doğrudur?",
        opts: [
          { t: "ΔH = −60 kJ; tepkime ekzotermiktir (ısı verir).", ok: true, why: "ΔH = H(ürünler) − H(girenler) = 40 − 100 = −60 kJ. Negatif ΔH: ürünlerin enerjisi daha düşük, fark çevreye verilmiş." },
          { t: "ΔH = +60 kJ; tepkime endotermiktir.", why: "Çıkarma yönü ters yapılmış: ΔH = ürünler − girenler (40 − 100), girenler − ürünler değil." },
          { t: "ΔH = 140 kJ; tepkime ekzotermiktir.", why: "İki değer toplanmış; ΔH fark alınarak bulunur." },
          { t: "ΔH = −40 kJ; tepkime endotermiktir.", why: "Yalnızca ürünlerin enerjisi alınmış; değişim, ürünler eksi girenlerdir." }
        ],
        explain: "Basamaklar: ΔH = ürünler − girenler; işaret: negatif → ekzotermik, pozitif → endotermik." },

      { type: "mcq", q: "Azot ve hidrojenden amonyak oluşumu: N₂ + 3H₂ → 2NH₃ için ΔH = −92 kJ'dür. Bu bilgiye göre hangisi söylenebilir?",
        opts: [
          { t: "Tepkime ekzotermiktir: ürünlerin enerjisi girenlerden 92 kJ düşüktür ve çevreye ısı verilir.", ok: true, why: "ΔH negatif → ekzotermik. Açığa çıkan enerji 92 kJ'dür (denklemdeki katsayılara göre)." },
          { t: "Tepkime endotermiktir, çünkü 92 kJ enerji harcanır.", why: "ΔH'nin işareti eksi; enerji harcanmaz, açığa çıkar." },
          { t: "Tepkimede enerji değişimi olmaz.", why: "ΔH sıfır olmadığına göre enerji değişimi vardır." },
          { t: "Tepkime 92 kJ'lük ısı alarak gerçekleşir.", why: "Isı alan tepkimelerde ΔH pozitiftir; burada negatif." }
        ],
        explain: "ΔH'nin işareti yönü, büyüklüğü miktarı verir: eksi = çevreye ısı verilir." },

      { type: "text", title: "Deneyle nasıl gözlemleriz?",
        say: "Enerji değişimini gözlemlemek için tepkimenin yapıldığı kapın sıcaklığını ölçeriz. Sıcaklık yükselirse tepkime ısı vermiştir. Sıcaklık düşerse ısı almıştır.",
        html: `<ol class="body"><li><b>Ölçüm:</b> tepkimeden önce ve sonra termometreyle çevrenin (su ya da kap) sıcaklığını oku.</li><li><b>Yorum:</b> çevre ısındıysa tepkime ısı vermiştir → ekzotermik. Çevre soğuduysa tepkime ısı almıştır → endotermik.</li><li><b>Kontrol:</b> aynı miktarda madde, aynı ortam ve aynı kap kullanılırsa sonuçlar güvenilir olur.</li></ol>
<p class="callout why"><b>Neden çevrenin sıcaklığını ölçüyoruz?</b> Enerji alışverişi sistem ile çevre arasında olur; sistemin ısı enerjisini doğrudan ölçemeyiz ama çevrenin ısınması ya da soğuması bunu gösterir.</p>` },

      { type: "mcq", q: "Bir öğrenci bir bardak suya bir tuz çözdürüyor ve bardağın soğuduğunu hissediyor. Bu çözünme olayı için hangisi doğrudur?",
        opts: [
          { t: "Çözünme çevreden ısı almıştır; endotermiktir (ΔH > 0).", ok: true, why: "Bardak (çevre) soğuduğuna göre sistem çevreden ısı almıştır: endotermik." },
          { t: "Çözünme çevreye ısı vermiştir; ekzotermiktir.", why: "Çevre ısı kazansaydı bardak ısınırdı; burada soğudu." },
          { t: "Çözünme sırasında enerji yok olmuştur.", why: "Enerji yok olmaz; çevreden sisteme aktarılmıştır." },
          { t: "Bardak soğuduğu için suyun entalpisi azalmıştır ve bu ekzotermiktir.", why: "Bardağın soğuması çevreden ısı alındığını gösterir; sistemin entalpisi artmıştır." }
        ],
        explain: "Çevre soğursa sistem ısı almış demektir (endotermik); çevre ısınırsa sistem ısı vermiştir (ekzotermik)." },

      { type: "mcq", q: "Aşağıdakilerden hangisi endotermik bir süreçtir?",
        opts: [
          { t: "Buzun erimesi", ok: true, why: "Buz erirken çevreden ısı alır; ΔH > 0 (endotermik fiziksel olay)." },
          { t: "Odunun yanması", why: "Yanma tepkimeleri çevreye ısı verir (ekzotermik)." },
          { t: "Suyun donması", why: "Donarken su çevreye ısı verir (ekzotermik)." },
          { t: "Hücresel solunum", why: "Besinlerin enerjisini açığa çıkarır; ekzotermiktir." }
        ],
        explain: "Hal değişimlerinden erime, buharlaşma, süblimleşme endotermiktir; donma, yoğuşma, kırağılaşma ekzotermiktir." },

      { type: "reflect", q: "Peki ya neden? Ürünlerin enerjisi girenlerden düşük olduğunda fazla enerji nereye gider? Bir mum yanarken bu enerjiyi nasıl fark edersin?",
        hint: "Örnek düşünce: Ürünlerin enerjisi daha düşükse aradaki fark çevreye aktarılır: ısı ve ışık olarak. Mum yanarken alevin ısındığını ve aydınlattığını, çevresindeki havanın ısındığını fark ederim. Enerji kaybolmaz, madde içindeki kimyasal enerjiden çevreye ısı ve ışık enerjisine dönüşür." },

      { type: "text", title: "Özet ve sınavda ne işe yarar",
        say: "Entalpi değişimi ürünlerin entalpisi eksi girenlerin entalpisidir. Negatifse ekzotermik, pozitifse endotermiktir.",
        html: `<ul class="body"><li><b>ΔH = H(ürünler) − H(girenler)</b> (kJ).</li><li><b>ΔH < 0:</b> ekzotermik, çevreye ısı verir, çevre ısınır.</li><li><b>ΔH > 0:</b> endotermik, çevreden ısı alır, çevre soğur.</li><li>Fiziksel olaylar da enerji değiştirir: erime/buharlaşma endotermik; donma/yoğuşma ekzotermik.</li><li>Gözlem: çevrenin sıcaklığını ölç; ısındıysa ekzo, soğuduysa endo.</li></ul>
<p class="callout">Sınavda şöyle görürsün: bir grafik, iki entalpi değeri ya da bir günlük olay verilir; tepkime türü ve ΔH'nin işareti sorulur. Önce ürünlerin enerjisi girenlerden yüksek mi düşük mü, ona bak.</p>` }
    ]
  };
})();
