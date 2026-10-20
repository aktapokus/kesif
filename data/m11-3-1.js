/* 11. sınıf Matematik, 3. Tema Nicelikler ve Değişimler (1) — MAT.11.3.1 Trigonometrik fonksiyonlar ve nitel özellikleri (konu anlatımı, sıfırdan).
   Kaynak: tymm.meb.gov.tr/matematik-dersi/unite/281. Kapsam: sin, cos (ℝ), tan, cot referans fonksiyonları; radyan–derece, esas ölçü, birim çember, gerçek sayıların birim çembere sarılması;
   nitel özellikler: tanım–görüntü kümesi, periyot, artanlık/azalanlık, maksimum–minimum, tek–çiftlik. Çemberin etkileşimli laboratuvarı eski ders (mat-trig-cember) adımlarından alınır.
   Özgün içerik (CC BY-NC-SA 4.0). Standart: docs/DERS-STANDARDI.md. */
(function () {
  var old = KESIF.lessons["mat-trig-cember"].steps;
  KESIF.lessons["mat-trig-cember"].hidden = true; KESIF.lessonYks = KESIF.lessonYks || {}; KESIF.lessonYks["m11-3-1"] = KESIF.lessonYks["mat-trig-cember"] || ["11.1.2"]; delete KESIF.lessonYks["mat-trig-cember"];
  KESIF.lessons["m11-3-1"] = {
    id: "m11-3-1", subject: "mat", title: "Sinüs ve kosinüs: dönen bir şeyin yüksekliği", minutes: 25,
    grade: "11. sınıf Matematik, 3. Tema Nicelikler ve Değişimler (1), MAT.11.3.1 (Maarif: nitel özelliklere ilişkin muhakeme)",
    hook: "Dönme dolabın bir kabininin yerden yüksekliği zamanla nasıl değişir?",
    steps: [
      { type: "mcq", predict: true, q: "Bir dönme dolap sabit hızla dönüyor. Bir kabinin yerden yüksekliği zamana göre nasıl değişir?",
        opts: [
          { t: "Yükselir, tepeye varır, iner, en alta varır ve bu döngüyü tekrar eder.", ok: true, why: "Kabin çember üzerinde döndüğü için yüksekliği sürekli artıp azalır; bir tur sonra aynı değerlere döner. Bu tekrar eden değişim trigonometrik fonksiyonların temelidir." },
          { t: "Sürekli artar.", why: "Dolap döndükçe kabin tepeyi geçince alçalır; yükseklik sonsuza kadar artamaz." },
          { t: "Sabit kalır.", why: "Kabin dönerken yerden uzaklığı değişir; aksi hâlde yolcu inip binemezdi." },
          { t: "Önce azalır sonra hep sabit kalır.", why: "Dönme devam ettiği için yükseklik bir kez daha artacak ve döngü sürecek." }
        ],
        explain: "Dönerek tekrar eden olayları (gelgit, saat ibresi, ses dalgası) tanımlayan matematik trigonometridir." },

      { type: "text", title: "Önce sözlük: açı birimleri",
        say: "Açı iki birimle ölçülür: derece ve radyan. Tam bir tur üç yüz altmış derecedir ve iki pi radyandır. Pi radyan yüz seksen dereceye eşittir.",
        html: `<div class="grid"><div class="card"><h3>Derece</h3><p class="small">Tam tur = <b>360°</b>.</p></div><div class="card pick"><h3>Radyan</h3><p class="small">Tam tur = <b>2π rad</b>. Yarıçap uzunluğundaki yayı gören açı <b>1 radyandır</b>.</p></div></div>
<p class="callout why" style="margin-top:12px"><b>Dönüşüm:</b> π rad = 180°. Radyanı dereceye çevirmek için π yerine 180° yaz (π/3 → 60°). Dereceyi radyana çevirmek için 180°'ye böl, π ile çarp (90° → π/2).</p>
<p><b>Neden radyan?</b> Çemberde <i>yay uzunluğu = açı (radyan) × yarıçap</i> olur; formüller sadeleşir. Matematik ve fizik radyanı tercih eder.</p>` },

      { type: "mcq", q: "150° kaç radyandır?",
        opts: [
          { t: "5π/6", ok: true, why: "150° = 150 · π/180 = 5π/6 (π = 180° olduğundan 150/180 sadeleşir: 5/6)." },
          { t: "3π/4", why: "3π/4 = 135°; 150°'den farklı." },
          { t: "2π/3", why: "2π/3 = 120°." },
          { t: "5π/3", why: "5π/3 = 300°; 5π/6'nın iki katı." }
        ],
        explain: "Basamaklar: derece ÷ 180 × π. 150/180 = 5/6." },

      { type: "text", title: "Yönlü açı ve esas ölçü",
        say: "Açı saat yönünün tersine ölçülürse pozitif, saat yönünde ölçülürse negatiftir. Tam turları atınca açının aynı noktaya getirdiği en küçük pozitif değere esas ölçü denir.",
        html: `<ul class="body"><li><b>Yönlü açı:</b> saat yönünün <b>tersi pozitif</b>, saat yönü negatif.</li><li><b>Esas ölçü:</b> açının <b>0 ile 360°</b> (0 ile 2π) arasındaki karşılığı. Bir tam tur (360°) eklemek ya da çıkarmak aynı noktaya getirir.</li></ul>
<p class="callout why"><b>Örnek:</b> 400° = 360° + 40° → esas ölçü <b>40°</b>. −60° = −60° + 360° = <b>300°</b>.</p>` },

      { type: "mcq", q: "780° açısının esas ölçüsü kaç derecedir?",
        opts: [
          { t: "60°", ok: true, why: "780° − 2 · 360° = 780° − 720° = 60°. İki tam turu atınca aynı noktaya gelirsin." },
          { t: "120°", why: "780 − 660 yapılmış; 360'ın katı olan 720 çıkarılmalı." },
          { t: "420°", why: "Yalnızca bir tur (360°) çıkarılmış; sonuç hâlâ 360°'den büyük." },
          { t: "20°", why: "780 ÷ 360 bölümünün ondalık kısmı yanlış alınmış; 360 ile bölünüp tam kısım çıkarılmalı." }
        ],
        explain: "360°'den büyük açıda, 360'ın en büyük katını çıkar; kalan esas ölçüdür." },

      { type: "text", title: "Birim çember ve gerçek sayıların sarılması",
        say: "Yarıçapı bir olan çembere birim çember denir. Çember üzerindeki bir noktanın yatay uzaklığı kosinüs, dikey yüksekliği sinüstür. Gerçek sayı doğrusunu çembere sararsak her gerçek sayı için bir açı elde ederiz.",
        html: `<p><b>Birim çember:</b> merkezi orijinde, yarıçapı 1. A(1, 0) noktasından saat yönünün tersine <b>x</b> kadar giden noktaya P(x, y) diyelim.</p>
<div class="grid"><div class="card pick"><h3>cos x</h3><p class="small">P'nin <b>yatay</b> koordinatı (apsis).</p></div><div class="card pick"><h3>sin x</h3><p class="small">P'nin <b>dikey</b> koordinatı (ordinat).</p></div></div>
<p class="callout why" style="margin-top:12px"><b>Sarma fikri:</b> Gerçek sayı doğrusunu bir ip gibi düşün. 0'ı A(1, 0)'a koy; pozitif sayıları saat yönünün tersine, negatif sayıları saat yönünde çembere sar. Böylece <b>her gerçek sayı</b> çember üzerinde bir noktaya denk gelir. İşte bu yüzden sin ve cos <b>tüm gerçek sayılarda</b> tanımlıdır.</p>` },

      { type: old[1].type, title: "Kabini döndür, yüksekliğe bak", say: old[1].say, intro: old[1].intro, cfg: old[1].cfg },

      { type: "mcq", predict: true, q: "Açı 90°'den 180°'ye giderken kabinin yüksekliği (sinüs) ne yapar?",
        opts: [
          { t: "1'den 0'a azalır.", ok: true, why: "90°'de tepedeyiz (sin = 1). 180°'de dolabın sol yanındayız, merkezle aynı seviye (sin = 0). Eğri aynı yoldan geri iniyor." },
          { t: "0'dan 1'e artar.", why: "Yükselme 0°'den 90°'ye kadardı. 90°'yi geçince kabin inmeye başlıyor." },
          { t: "1'de sabit kalır.", why: "Kabin sürekli dönüyor; yalnızca tepe noktasında bir an en yüksek, sonra hemen iniyor." },
          { t: "0'dan −1'e iner.", why: "−1 değerine ancak 270°'de (en altta) ulaşılır." }
        ],
        explain: "Sinüs yüksekliktir; 0°→90° yükselir, 90°→270° alçalır, 270°→360° yeniden yükselir." },

      { type: "text", title: "Nitel özellikler: sinüs ve kosinüs hakkında neler söyleyebiliriz?",
        say: "Sinüs ve kosinüs her gerçek sayıda tanımlıdır, eksi birle bir arasında değer alır ve iki pi sonra kendini tekrar eder. Çember denklemi yüzünden sinüs kare artı kosinüs kare birdir.",
        html: `<table class="tbl"><thead><tr><th></th><th>sin x</th><th>cos x</th></tr></thead><tbody>
<tr><td>Tanım kümesi</td><td>ℝ</td><td>ℝ</td></tr><tr><td>Görüntü kümesi</td><td>[−1, 1]</td><td>[−1, 1]</td></tr><tr><td>Periyot</td><td>2π</td><td>2π</td></tr><tr><td>Maks / Min</td><td>1 / −1</td><td>1 / −1</td></tr><tr><td>Tek–çift</td><td>tek: sin(−x) = −sin x</td><td>çift: cos(−x) = cos x</td></tr></tbody></table>
<p class="callout why" style="margin-top:12px"><b>Neden [−1, 1]?</b> Noktanın yarıçaptan (1) daha uzağa gitmesi mümkün değil. <b>Neden sin²x + cos²x = 1?</b> Birim çemberde (yatay)² + (dikey)² = 1 olduğundan (Pisagor). <b>Periyot nedir?</b> f(x + T) = f(x) olan en küçük pozitif T; bir tam tur 2π olduğundan sin ve cos 2π sonra tekrar eder.</p>` },

      { type: "mcq", q: "Bir x açısı için cos x = 3/5 ve x dar açıdır. sin x kaçtır?",
        opts: [
          { t: "4/5", ok: true, why: "sin²x + cos²x = 1 → sin²x = 1 − 9/25 = 16/25. Dar açıda sinüs pozitif: sin x = 4/5." },
          { t: "−4/5", why: "Dar açıda (birinci bölge) sinüs pozitiftir; negatif işaret yanlış." },
          { t: "2/5", why: "1 − 3/5 yapılmış; kare almayı unutmuşsun: sin² + cos² = 1." },
          { t: "16/25", why: "Bu sin²x; sinüsü bulmak için karekök alınmalı." }
        ],
        explain: "Basamaklar: kare toplamı özdeşliği, kareyi bul, karekök al, bölgeye göre işareti belirle." },

      { type: "text", title: "Tanjant ve kotanjant",
        say: "Tanjant sinüsün kosinüse oranıdır. Kosinüs sıfır olduğunda tanımsızdır. Kotanjant kosinüsün sinüse oranıdır. Sinüs sıfır olduğunda tanımsızdır.",
        html: `<ul class="body"><li><b>tan x = sin x ÷ cos x</b> — cos x = 0 iken tanımsız: x = π/2 + kπ (k ∈ ℤ) hariç tüm gerçek sayılar.</li><li><b>cot x = cos x ÷ sin x</b> — sin x = 0 iken tanımsız: x = kπ (k ∈ ℤ) hariç.</li><li>İkisinin de görüntü kümesi <b>ℝ</b>; periyotları <b>π</b>.</li></ul>
<p class="callout why"><b>Neden tanımsız?</b> Bölme işleminde payda 0 olamaz. tan x'in paydası cos x'tir; cos x = 0 olan açılar (90°, 270°, …) tanımsızdır.</p>` },

      { type: "mcq", q: "Aşağıdaki açılardan hangisinde tan x tanımsızdır?",
        opts: [
          { t: "x = π/2", ok: true, why: "cos(π/2) = 0 olduğu için tan x = sin x ÷ cos x payda sıfır olur: tanımsız." },
          { t: "x = 0", why: "cos 0 = 1; tan 0 = 0 ÷ 1 = 0, tanımlıdır." },
          { t: "x = π", why: "cos π = −1; tan π = 0 ÷ (−1) = 0, tanımlıdır." },
          { t: "x = π/4", why: "cos(π/4) = √2/2 ≠ 0; tan(π/4) = 1, tanımlıdır." }
        ],
        explain: "tan için cos x = 0 olan x değerlerini ara: π/2 + kπ." },

      { type: old[5].type, title: "Sinüs ve kosinüs: aynı dalga, kaymış", say: old[5].say, intro: old[5].intro, cfg: old[5].cfg },

      { type: "mcq", q: "sin 780° değeri kaçtır?",
        opts: [
          { t: "√3/2", ok: true, why: "Periyot 360°: 780° − 720° = 60°. sin 780° = sin 60° = √3/2." },
          { t: "1/2", why: "sin 30° = 1/2'dir; 780°'nin esas ölçüsü 60° (30° değil)." },
          { t: "√2/2", why: "sin 45° = √2/2; esas ölçü 45° değil 60°." },
          { t: "1", why: "sin 90° = 1; esas ölçü 90° değil." }
        ],
        explain: "Periyodiklik: büyük açıyı esas ölçüye indir, sonra özel değeri kullan." },

      { type: "mcq", q: "f(x) = 3·sin x + 1 fonksiyonunun görüntü kümesi (en küçük ve en büyük değeri) aşağıdakilerden hangisidir?",
        opts: [
          { t: "[−2, 4]", ok: true, why: "sin x ∈ [−1, 1] olduğundan 3·sin x ∈ [−3, 3], +1 ile [−2, 4]. Çarpan (3) aralığı büyütür, toplanan (1) aralığı yukarı kaydırır." },
          { t: "[−3, 3]", why: "+1 kaydırması unutulmuş." },
          { t: "[−1, 1]", why: "3 ile çarpma ve +1 ile toplama etkisi dikkate alınmamış." },
          { t: "[0, 4]", why: "En küçük değer 3·(−1) + 1 = −2'dir, 0 değil." }
        ],
        explain: "g(x) = k·f(x) + s biçiminde k aralığı genişletir (|k| kadar), s yukarı/aşağı kaydırır." },

      { type: "reflect", q: "Peki ya neden? sin x ile cos x'in grafikleri neden aynı biçimde ama birbirine göre kaymış görünür? Birim çemberdeki yüksekliği ve yatay uzaklığı düşünerek anlat.",
        hint: "Örnek düşünce: Noktanın dikey uzaklığı (sin) ile yatay uzaklığı (cos), aynı daire üzerinde 90° farkla aynı davranışı gösterir: sin tepede (90°) en büyük, cos 0°'de en büyüktür. Yani cos x = sin(x + 90°). Aynı çemberin yan ve ön görünümü olduklarından grafikleri aynı biçimlidir, yalnızca 90° (π/2) kayık." },

      { type: "text", title: "Özet ve sınavda ne işe yarar",
        say: "Birim çemberde noktanın yatay uzaklığı kosinüs, dikey uzaklığı sinüstür. Sinüs ve kosinüs periyodik ve sınırlıdır. Tanjant tanımsız olduğu yerler kosinüsün sıfır olduğu yerlerdir.",
        html: `<ul class="body"><li>π rad = 180°. Açı: saat yönünün tersi pozitif. Esas ölçü: 360°'lik katları çıkar.</li><li>Birim çemberde: <b>cos = yatay</b>, <b>sin = dikey</b>; <b>sin²x + cos²x = 1</b>.</li><li>sin, cos: tanım ℝ, görüntü [−1, 1], periyot 2π. tan, cot: periyot π; tan tanımsız: cos x = 0, cot tanımsız: sin x = 0.</li><li><b>g(x) = k·f(x) + s:</b> k aralığı büyütür, s kaydırır.</li></ul>
<p class="callout">Sınavda şöyle görürsün: bir açının esas ölçüsü, bir trigonometrik değerin işareti, bir fonksiyonun en büyük/en küçük değeri ya da periyodu sorulur. Önce açıyı birim çemberde yerleştir, sonra işaretine ve özel değerine bak.</p>` }
    ]
  };
})();
