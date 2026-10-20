/* 11. sınıf Matematik, 3. Tema Nicelikler ve Değişimler (3) — MAT.11.3.7 Fonksiyonların bileşkesi (konu anlatımı, sıfırdan).
   Kaynak: tymm.meb.gov.tr/matematik-dersi/unite/296. Gösterim: (f∘g)(x) = f(g(x)); tanımlı olma koşulu; sıra önemi (f∘g ≠ g∘f); ayrıştırma; nitel özelliklere ilişkin varsayım–genelleme (artanlık, çift fonksiyon).
   Program: keyfî fonksiyonlar üzerinden bileşke/ters fonksiyon özelliklerine değinilmez (burada hep somut, referans/türetilmiş fonksiyonlar). Özgün içerik (CC BY-NC-SA 4.0). Standart: docs/DERS-STANDARDI.md. */
(function () {
  KESIF.lessons["m11-5-1"] = {
    id: "m11-5-1", subject: "mat", title: "Fonksiyonların bileşkesi: iki makine arka arkaya", minutes: 25,
    grade: "11. sınıf Matematik, 3. Tema Nicelikler ve Değişimler (3), MAT.11.3.7 (Maarif: bileşke fonksiyona ilişkin muhakeme)",
    hook: "Önce indirim sonra kupon mu, önce kupon sonra indirim mi? Sıra fiyatı değiştirir mi?",
    steps: [
      { type: "mcq", predict: true, q: "200 TL'lik bir ürüne iki işlem uygulanacak: %20 indirim ve 10 TL'lik kupon. Önce indirim sonra kupon uygulanırsa fiyat 150 TL olur (200 · 0,8 − 10). Önce kupon sonra indirim uygulanırsa fiyat ne olur?",
        opts: [
          { t: "152 TL; sıra sonucu değiştirir.", ok: true, why: "Önce kupon: 200 − 10 = 190. Sonra %20 indirim: 190 · 0,8 = 152. İki sıralamada sonuç farklı (150 ve 152)." },
          { t: "150 TL; sıra önemli değildir.", why: "Sıra önemlidir: kupon indirimden önce düşülürse indirim daha küçük bir sayıya uygulanır." },
          { t: "160 TL.", why: "200 − 10 − 30 gibi yanlış bir toplama; işlemler sırayla uygulanmalı." },
          { t: "140 TL.", why: "İkisi birlikte aynı anda düşülmüş gibi hesaplanmış; işlemler arka arkaya uygulanıyor." }
        ],
        explain: "İki işlemi arka arkaya uygulamak bir bileşke işlemidir ve sıra sonucu değiştirebilir. Bu derste buna matematik dili vereceğiz." },

      { type: "text", title: "Önce sözlük: fonksiyon makinesi ve bileşke",
        say: "Fonksiyonu bir makine gibi düşün: içine sayı girer, bir sayı çıkar. Bileşke, iki makineyi arka arkaya bağlamaktır. Önce g makinesi çalışır, çıkan sonuç f makinesine girer.",
        html: `<div class="grid"><div class="card"><h3>Fonksiyon</h3><p class="small">Girdi (x) → makine → çıktı f(x). Örnek: f(x) = 2x + 1: girene 2 ile çarp, 1 ekle.</p></div>
<div class="card pick"><h3>Bileşke</h3><p class="small"><b>(f∘g)(x) = f(g(x))</b>: önce <b>g</b>, çıkan sonucu <b>f</b>'ye ver. Okunuşu: "f bileşke g".</p></div></div>
<p class="callout why" style="margin-top:12px"><b>Sıra:</b> f∘g'de <b>içteki fonksiyon (g) önce</b> çalışır. Yazılış soldan sağa f∘g ama işlem içten dışa doğrudur.</p>` },

      { type: "sim", title: "İki makineyi arka arkaya bağla",
        say: "Girdiyi seç. Önce g sonra f uygulandığında ve önce f sonra g uygulandığında sonuçlar nasıl değişiyor?",
        intro: "f(x) = 2x + 1 ve g(x) = x². <b>x</b>'i değiştir. Üstte önce <b>g</b> sonra <b>f</b> (f∘g), altta önce <b>f</b> sonra <b>g</b> (g∘f). İki satırdaki sonuçlar aynı mı?",
        cfg: { vb: "0 0 640 270", vars: [{ k: "x", label: "Girdi x", min: -3, max: 4, step: 1, value: 2, unit: "" }],
          out: [{ label: "(f∘g)(x) = f(g(x))", fn: function (v) { var g = v.x * v.x; return "f(" + g + ") = " + (2 * g + 1); } }, { label: "(g∘f)(x) = g(f(x))", fn: function (v) { var f = 2 * v.x + 1; return "g(" + f + ") = " + (f * f); } }],
          svg: function (v) {
            var g = v.x * v.x, fg = 2 * g + 1, f = 2 * v.x + 1, gf = f * f;
            var box = function (x, y, t, c) { return '<rect x="' + x + '" y="' + y + '" width="110" height="46" rx="10" fill="color-mix(in srgb, ' + c + ' 20%, transparent)" stroke="' + c + '" stroke-width="2.5"/><text x="' + (x + 55) + '" y="' + (y + 29) + '" text-anchor="middle" fill="var(--ink)" font-size="16" font-weight="700">' + t + '</text>'; };
            var num = function (x, y, t) { return '<text x="' + x + '" y="' + y + '" text-anchor="middle" fill="var(--ink)" font-size="19" font-weight="800">' + t + '</text>'; };
            var arr = function (x1, x2, y) { return '<line x1="' + x1 + '" y1="' + y + '" x2="' + x2 + '" y2="' + y + '" stroke="var(--muted)" stroke-width="2.5"/><polygon points="' + x2 + ',' + y + ' ' + (x2 - 8) + ',' + (y - 5) + ' ' + (x2 - 8) + ',' + (y + 5) + '" fill="var(--muted)"/>'; };
            var h = '', r = [[30, "g: x²", "var(--cyan)", g, "f: 2x + 1", "var(--accent)", fg], [170, "f: 2x + 1", "var(--accent)", f, "g: x²", "var(--cyan)", gf]];
            [[40, "g: x²", "var(--cyan)", g, "f: 2x + 1", "var(--accent)", fg], [170, "f: 2x + 1", "var(--accent)", f, "g: x²", "var(--cyan)", gf]].forEach(function (R) {
              var y = R[0]; h += num(40, y + 29, v.x) + arr(60, 98, y + 23) + box(100, y, R[1], R[2]) + arr(212, 250, y + 23) + num(280, y + 29, R[3]) + arr(300, 338, y + 23) + box(340, y, R[4], R[5]) + arr(452, 490, y + 23) + num(540, y + 29, R[6]);
            });
            h += '<text x="540" y="28" text-anchor="middle" fill="var(--muted)" font-size="14">(f∘g)(x)</text><text x="540" y="158" text-anchor="middle" fill="var(--muted)" font-size="14">(g∘f)(x)</text>';
            return h; } } },

      { type: "mcq", predict: true, q: "f(x) = 2x + 1 ve g(x) = x² olsun. (f∘g)(3) değeri kaçtır?",
        opts: [
          { t: "19", ok: true, why: "Önce içteki g: g(3) = 3² = 9. Sonra f: f(9) = 2 · 9 + 1 = 19." },
          { t: "49", why: "Bu (g∘f)(3): önce f(3) = 7, sonra g(7) = 49. Sıra ters çalışılmış." },
          { t: "7", why: "Yalnızca f(3) hesaplanmış; g hiç uygulanmamış." },
          { t: "10", why: "f(3) + g(3) yapılmış (7 + 9 ≠ 10), üstelik iki fonksiyon arka arkaya uygulanmalıydı." }
        ],
        explain: "(f∘g)(a) için: önce g(a), çıkan sayıyı f'ye ver." },

      { type: "text", title: "Cebirsel bileşke: içteki ifadeyi yerine koy",
        say: "Bileşkeyi cebirsel yazmak için içteki fonksiyonun ifadesini dıştaki fonksiyonda x yerine koyarız. Sıra değişirse sonuç genellikle değişir.",
        html: `<p>f(x) = 2x + 1, g(x) = x² için:</p>
<ul class="body"><li><b>(f∘g)(x)</b> = f(g(x)) = f(x²) = 2·<b>x²</b> + 1 = <b>2x² + 1</b></li><li><b>(g∘f)(x)</b> = g(f(x)) = g(2x + 1) = <b>(2x + 1)²</b> = 4x² + 4x + 1</li></ul>
<p class="callout why"><b>Gözlem:</b> 2x² + 1 ile 4x² + 4x + 1 farklı ifadeler: genellikle <b>f∘g ≠ g∘f</b>. (Bazı özel durumlarda eşit olabilir; "her zaman eşit" diyemeyiz.)</p>
<p><b>Tanımlı olma koşulu:</b> (f∘g)(x) hesaplanabilmesi için g(x)'in <b>f'nin tanım kümesinde</b> olması gerekir. Örnek: f(x) = √x ise g(x) ≥ 0 olmalı.</p>` },

      { type: "mcq", q: "f(x) = x + 1 ve g(x) = 2x ise (g∘f)(x) ifadesi aşağıdakilerden hangisidir?",
        opts: [
          { t: "2x + 2", ok: true, why: "(g∘f)(x) = g(f(x)) = g(x + 1) = 2(x + 1) = 2x + 2." },
          { t: "2x + 1", why: "2·x + 1 yazılmış; g'nin içindeki ifade (x + 1) bütünüyle 2 ile çarpılmalı." },
          { t: "2x² + 2x", why: "g ve f çarpılmış (2x · (x + 1)); bileşke çarpım değil, birini ötekinin içine yazmaktır." },
          { t: "x + 2x + 1", why: "Fonksiyonlar toplanmış; bileşke toplama değildir." }
        ],
        explain: "(g∘f)(x): önce f'nin ifadesini yaz, onu g'de x yerine koy ve parantezi bütün olarak işleme sok." },

      { type: "mcq", q: "f(x) = √x ve g(x) = x − 4 olsun. (f∘g)(x) = √(x − 4) fonksiyonunun tanım kümesi aşağıdakilerden hangisidir?",
        opts: [
          { t: "[4, ∞)", ok: true, why: "Kök içi negatif olamaz: x − 4 ≥ 0 → x ≥ 4. g(x)'in f'nin tanım kümesinde (≥ 0) olması gerekir." },
          { t: "[0, ∞)", why: "Bu f(x) = √x'in tanım kümesi; bileşkede kök içindeki ifade (x − 4) ≥ 0 olmalı." },
          { t: "(4, ∞)", why: "x = 4 için √0 = 0 tanımlıdır; 4 de tanım kümesindedir (≥)." },
          { t: "ℝ", why: "x = 0 için √(−4) tanımsızdır; tanım kümesi tüm gerçek sayılar olamaz." }
        ],
        explain: "Bileşkenin tanım kümesi: g'nin ürettiği değerler f'nin tanım kümesine girmeli." },

      { type: "mcq", q: "h(x) = (3x + 1)² fonksiyonu, f(x) = x² ve g(x) = 3x + 1 olmak üzere hangi bileşkeye eşittir?",
        opts: [
          { t: "f∘g", ok: true, why: "(f∘g)(x) = f(g(x)) = f(3x + 1) = (3x + 1)². Önce g (3x + 1), sonra f (kare)." },
          { t: "g∘f", why: "(g∘f)(x) = g(x²) = 3x² + 1; farklı bir ifade." },
          { t: "f + g", why: "Toplam x² + 3x + 1 olurdu; bileşke toplama değil." },
          { t: "f · g", why: "Çarpım x²(3x + 1) olurdu; bileşke çarpma değil." }
        ],
        explain: "Bir ifadeyi ayrıştırırken önce ‘içteki’ işlemi (3x + 1), sonra dıştaki işlemi (kare) belirle." },

      { type: "mcq", q: "f(x) = 2x + 1 ve g(x) = x³ iki artan fonksiyondur. Bu örneğe dayanarak ‘iki artan fonksiyonun bileşkesi de artandır’ önermesi için ne söylenebilir?",
        opts: [
          { t: "Örnek önermeyi destekler; genel doğruluk için x₁ < x₂ alıp f∘g'nin değerlerini karşılaştırarak ispat gerekir.", ok: true, why: "g artan olduğundan x₁ < x₂ ise g(x₁) < g(x₂); f artan olduğundan f(g(x₁)) < f(g(x₂)). Yani f∘g artandır (ispat tamam). Tek örnek genel bir kanıt değildir." },
          { t: "Önerme yanlıştır çünkü bileşkede sıra önemlidir.", why: "Sıra önemli olsa da iki artan fonksiyonun bileşkesi her iki sırada da artandır." },
          { t: "Bir örnek önermenin kanıtıdır.", why: "Bir örnek önermeyi destekler ama kanıtlamaz; ispat her durumu kapsamalıdır." },
          { t: "Bileşke ancak f ve g aynı fonksiyon ise artandır.", why: "Aynı fonksiyon olmak gerekmez; ispat yalnızca ikisinin artan olmasını kullanır." }
        ],
        explain: "Varsayım → örnekler → önerme → ispat: önermeyi önce örnekle destekle, sonra tanıma dayanarak ispat et." },

      { type: "mcq", q: "g çift bir fonksiyon (g(−x) = g(x)) ve f herhangi bir fonksiyon olsun. (f∘g) fonksiyonu için hangisi doğrudur?",
        opts: [
          { t: "f∘g de çifttir.", ok: true, why: "(f∘g)(−x) = f(g(−x)) = f(g(x)) = (f∘g)(x). İçteki fonksiyon çift olduğu için sonuç değişmez." },
          { t: "f∘g tektir.", why: "Tek olması için (f∘g)(−x) = −(f∘g)(x) gerekirdi; burada eşitlik + işaretiyle çıkar." },
          { t: "f∘g ne tek ne çifttir.", why: "Yukarıdaki adımlar f∘g'nin çift olduğunu gösterir." },
          { t: "f∘g yalnızca f çiftse çifttir.", why: "Önemli olan içteki g'dir: g çift ise f ne olursa olsun f∘g çifttir." }
        ],
        explain: "Çiftlik, içteki fonksiyonda gerçekleşiyorsa dıştaki ne olursa olsun korunur." },

      { type: "reflect", q: "Peki ya neden? Neden genellikle f∘g ile g∘f aynı sonucu vermez? İndirim–kupon örneğiyle ve f(x) = 2x + 1, g(x) = x² örneğiyle düşün.",
        hint: "Örnek düşünce: Bileşkede ilk uygulanan işlemin sonucu, ikinci işleme girdi olur. Sıra değişince ikinci işlem farklı bir sayıya uygulanır. İndirim–kupon örneğinde %20 indirim 200'e uygulanırsa 40 TL, 190'a uygulanırsa 38 TL düşer. f(x) = 2x + 1, g(x) = x² için de önce kare alıp sonra 2 ile çarpmak, önce 2 ile çarpıp sonra kare almaktan farklıdır." },

      { type: "text", title: "Özet ve sınavda ne işe yarar",
        say: "Bileşke fonksiyon, iki fonksiyonun arka arkaya uygulanmasıdır. İçteki fonksiyon önce çalışır. Sıra değişince sonuç genellikle değişir.",
        html: `<ul class="body"><li><b>(f∘g)(x) = f(g(x))</b>: önce g, sonra f.</li><li>Cebirsel olarak: içteki ifadeyi dıştaki fonksiyonda x yerine koy, parantezi bütün tut.</li><li>Genellikle <b>f∘g ≠ g∘f</b>.</li><li>Tanım kümesi: g(x), f'nin tanım kümesine girmeli.</li><li>Bir ifadeyi ayrıştır: önce içteki işlem, sonra dıştaki.</li><li>Nitel özellikler: iki artan fonksiyonun bileşkesi artan; içteki fonksiyon çiftse bileşke çift.</li></ul>
<p class="callout">Sınavda şöyle görürsün: (f∘g)(a) değeri, (f∘g)(x) ifadesi, bir ifadenin hangi iki fonksiyonun bileşkesi olduğu ya da tanım kümesi sorulur. Her seferinde önce içteki fonksiyonu uygula.</p>` }
    ]
  };
})();
