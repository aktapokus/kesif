/* Matematik keşfi: Birim çember — sinüs ve kosinüs bir "yükseklik" ve bir "yatay uzaklık"tır. Özgün içerik (CC BY-NC-SA 4.0). */
KESIF.lessons["mat-trig-cember"] = {
  id: "mat-trig-cember", subject: "mat", title: "Dönme dolap: sinüs ve kosinüs nereden çıkıyor?", minutes: 25,
  grade: "11. sınıf — 3. Tema, 3.1 Trigonometrik fonksiyonlar ve nitel özellikleri (MAT.11.3.1; MEB ODSGM dağılım tablosu). Bu keşif konunun birim çember bölümünü kapsar.",
  hook: "Dönme dolapta kabinin yerden yüksekliği nasıl bir desen çizer?",
  steps: [
    { type: "text", title: "Dönme dolabın tepesindeki kabin",
      say: "Dönme dolap saat yönünün tersine dönüyor. Bir kabin dolabın yan tarafından başlıyor. Merkeze göre yüksekliğini ve yatay uzaklığını, dönme açısına göre izleyeceğiz.",
      html: `<p class="big">Dönme dolap dönüyor. Bir kabinin <b>merkeze göre yüksekliği</b> zamanla nasıl değişir?</p>
<p>Basit düşünelim: dolabın yarıçapı <b>1 birim</b>, kabin saat yönünün tersine dönüyor. Kabin ilk anda sağ yanda (0°), yükseklik 0. Biraz sonra yükseliyor, tepeye (90°) varıyor, sonra iniyor…</p>
<svg viewBox="0 0 640 230" role="img" aria-label="Dönme dolap: merkez, yarıçap ve kabin" style="width:100%;height:auto;background:var(--card2);border-radius:12px">
 <circle cx="320" cy="115" r="90" fill="none" stroke="var(--line)" stroke-width="3"/>
 <line x1="320" y1="115" x2="320" y2="25" stroke="var(--line)" stroke-width="2"/>
 <line x1="320" y1="115" x2="398" y2="70" stroke="var(--ink)" stroke-width="3"/>
 <circle cx="320" cy="115" r="5" fill="var(--muted)"/>
 <circle cx="398" cy="70" r="12" fill="var(--accent)"/>
 <line x1="398" y1="70" x2="398" y2="115" stroke="var(--accent)" stroke-width="4" stroke-dasharray="5 5"/>
 <text x="410" y="98" fill="var(--accent)" font-size="16">yükseklik</text>
 <text x="334" y="132" fill="var(--muted)" font-size="14">merkez</text>
 <path d="M 380 115 A 60 60 0 0 0 372 92" fill="none" stroke="var(--cyan)" stroke-width="2.5"/>
 <text x="388" y="108" fill="var(--cyan)" font-size="14">açı</text></svg>
<p class="callout">Soru: yükseklik düzgün bir hızla mı artıp azalır, yoksa başka bir desen mi var? Birazdan kendin döndürerek göreceksin.</p>` },

    { type: "circle", title: "Kabini döndür, yüksekliğe bak",
      say: "Kaydırıcıyla açıyı değiştir. Kalın dikey çizgi kabinin yüksekliği, kalın yatay çizgi merkezden yatay uzaklığı. Sağdaki eğri, yüksekliğin açıya göre çizdiği izi gösteriyor.",
      intro: "Kaydırıcıyı sağa çek. <b>Sarı dikey çizgi</b> = yükseklik (<b>sinüs</b>), <b>mavi yatay çizgi</b> = merkezden yatay uzaklık (<b>kosinüs</b>). Sağdaki eğri, yüksekliğin açıyla çizdiği iz. Hazır açı düğmeleriyle de gezebilirsin.",
      cfg: { wave: "sin", snaps: [0, 30, 45, 60, 90, 120, 150, 180, 270, 360], start: 30 } },

    { type: "mcq", predict: true, q: "Açı 90°'den 180°'ye giderken kabinin yüksekliği (sinüs) ne yapar?",
      opts: [
        { t: "1'den 0'a azalır", ok: true, why: "90°'de tepedeyiz (yükseklik 1). 180°'de dolabın sol yanındayız, merkezle aynı seviye (yükseklik 0). Eğri aynı yoldan geri iniyor." },
        { t: "0'dan 1'e artar", why: "Yükselme 0°'den 90°'ye kadardı. 90°'yi geçince kabin tepeyi aşıp inmeye başlıyor." },
        { t: "1'de sabit kalır", why: "Sabit kalan bir şey yok; kabin sürekli dönüyor. Yalnızca tepe noktasında bir an en yüksek, sonra hemen iniyor." },
        { t: "0'dan −1'e iner", why: "−1 değerine ancak 270°'de (en altta) ulaşılır. 180°'de henüz merkez seviyesindeyiz." }
      ],
      explain: "Eğriye bak: 0°→90° çıkış, 90°→180° iniş, 180°→270° merkezin altına iniş, 270°→360° geri yükseliş." },

    { type: "text", title: "Neden 30° için tam olarak 1/2? Bir üçgen saklıyor",
      say: "Otuz derece ve eksi otuz derece noktalarını birleştir. Merkezle birlikte bir eşkenar üçgen oluşur, kenarı bir. Dikey uzaklığın yarısı, otuz derecenin sinüsüdür ve yarım eder.",
      html: `<p>Tabloda <b>sin 30° = 1/2</b> çıktı. Ezberlemek yerine nedenine bakalım.</p>
<svg viewBox="0 0 640 230" role="img" aria-label="Birim çemberde 30 derece ve eksi 30 derece noktaları ve eşkenar üçgen" style="width:100%;height:auto;background:var(--card2);border-radius:12px">
 <circle cx="230" cy="115" r="95" fill="none" stroke="var(--line)" stroke-width="2"/>
 <line x1="120" y1="115" x2="350" y2="115" stroke="var(--muted)" stroke-width="1"/>
 <polygon points="230,115 312.3,67.5 312.3,162.5" fill="color-mix(in srgb, var(--accent) 14%, transparent)" stroke="var(--ink)" stroke-width="2.5"/>
 <line x1="312.3" y1="115" x2="312.3" y2="67.5" stroke="var(--accent)" stroke-width="5" stroke-linecap="round"/>
 <circle cx="312.3" cy="67.5" r="6" fill="var(--ink)"/><circle cx="312.3" cy="162.5" r="6" fill="var(--ink)"/>
 <text x="262" y="80" fill="var(--ink)" font-size="16">1</text><text x="262" y="158" fill="var(--ink)" font-size="16">1</text><text x="322" y="120" fill="var(--ink)" font-size="16">1</text>
 <text x="322" y="95" fill="var(--accent)" font-size="16">sin 30°</text>
 <text x="262" y="112" fill="var(--cyan)" font-size="13">30°</text></svg>
<p><b>30°</b> ve <b>−30°</b> noktaları, x ekseninin iki yanında ayna görüntüsü. Merkezle birleştirince tepe açısı 60° olan ve iki kenarı yarıçap (1) olan bir üçgen çıkar: iki kenarı eşit ve açısı 60° ise üçüncü kenar da 1'dir, yani <b>eşkenar üçgen</b>.</p>
<p>Alttaki kenar 1 uzunluğunda; x ekseni onu tam ortadan böler. Yarısı <b>1/2</b>. İşte <span class="math">sin 30° = 1/2</span>.</p>
<p class="callout why"><b>Neden böyle?</b> 60° için de aynı çizim geçerli: 60° noktasının x'e uzaklığı (cos 60°) bu sefer 1/2 olur. Ezber tabloyu bu iki resimle yeniden kurabilirsin.</p>` },

    { type: "mcq", predict: true, q: "sin 150° kaçtır?",
      opts: [
        { t: "1/2", ok: true, why: "150° noktası, 30° noktasının dikey eksene göre ayna görüntüsü: aynı yükseklik, yalnızca sol tarafa geçmiş. Yükseklik değişmediği için sinüs de 1/2." },
        { t: "√3/2", why: "√3/2 bu açının yüksekliği değil: 60° ve 120° için yükseklik. 150°'de nokta tepeden daha aşağıda." },
        { t: "−1/2", why: "150° hâlâ x ekseninin üstünde; yükseklik pozitif. Negatif işaret ancak 180°'den sonra gelir." },
        { t: "0", why: "Yükseklik 180°'de 0 olur. 150° bu noktaya yakın ama henüz orada değil." }
      ],
      explain: "Sinüs yüksekliktir; 150° ile 30° aynı yükseklikte olduğu için sin 150° = sin 30°. Genel hâli: sin(180° − x) = sin x." },

    { type: "circle", title: "Sinüs ve kosinüs: aynı dalga, kaymış",
      say: "Şimdi hem yüksekliğin hem yatay uzaklığın izine bak. İki eğri birbirinin aynısı, ama biri doksan derece kaymış.",
      intro: "Sarı iz <b>sinüs</b>, mavi iz <b>kosinüs</b>. Açıyı döndür ve iki eğrinin aynı şekle sahip olduğunu, yalnızca biraz kaydığını gözle. Özel açı düğmeleriyle tabloyu doldur.",
      cfg: { wave: "both", snaps: [0, 45, 90, 135, 180, 225, 270, 315, 360], start: 0 } },

    { type: "text", title: "Çemberin denklemi bir kural verir",
      say: "Birim çemberde her noktanın yatay uzaklığının karesi artı yüksekliğinin karesi birdir. Bu yüzden kosinüs kare artı sinüs kare her zaman birdir.",
      html: `<p class="big">Nokta çember üzerinde ve yarıçap 1: <span class="math">(yatay)² + (yükseklik)² = 1</span></p>
<p>Yatay uzaklık <b>cos x</b>, yükseklik <b>sin x</b> olduğundan:</p>
<p class="big math">sin²x + cos²x = 1</p>
<ul class="body"><li>Bu bir ezber formül değil; <b>Pisagor</b>'un çember üstündeki hâli.</li>
<li>Sinüs ve kosinüs <b>−1 ile 1 arasında</b> kalır: kabin, yarıçaptan (1) daha yüksek ya da daha uzak olamaz.</li>
<li>Açı tam tur (360°) dönünce kabin başladığı yere gelir: değerler <b>her 360°'de tekrarlanır</b>.</li></ul>
<p class="callout why"><b>Neden önemli?</b> Biri biliniyorsa diğeri bulunur: yükseklik 3/5 ise yatay uzaklık 4/5 (3-4-5 üçgeni). Hangi işaretle olduğuna ise kabinin <i>hangi bölgede</i> olduğuna bakarak karar verirsin.</p>` },

    { type: "mcq", q: "x birinci bölgede (0° < x < 90°) ve sin x = 3/5 ise cos x kaçtır?",
      opts: [
        { t: "4/5", ok: true, why: "sin²x + cos²x = 1 → cos²x = 1 − 9/25 = 16/25. Birinci bölgede yatay uzaklık pozitif: cos x = 4/5." },
        { t: "16/25", why: "16/25, cos²x. Kare kökü almadan bırakılmış." },
        { t: "2/5", why: "1 − 3/5 yapılmış. Karesel ilişkiyi (Pisagor) atlayıp doğrusal çıkarma yapmış olabilirsin." },
        { t: "3/4", why: "3/4, yüksekliğin yatay uzaklığa oranı (tanjant). Soru yatay uzaklığın kendisini istiyor." }
      ],
      explain: "Yöntem: karesini kur (1 − sin²), karekökünü al, işareti bölgeye göre seç." },

    { type: "mcq", q: "sin 210° kaçtır?",
      opts: [
        { t: "−1/2", ok: true, why: "210° = 180° + 30°. Nokta, 30°'nin merkeze göre karşı tarafında: aynı uzaklık ama aşağıda. Yükseklik −1/2." },
        { t: "1/2", why: "Büyüklük doğru ama kabin x ekseninin altında; yükseklik negatif olmalı." },
        { t: "−√3/2", why: "Bu değer 240° ve 300° için geçerli. 210°'de nokta eksene daha yakın." },
        { t: "√3/2", why: "Hem işaret hem büyüklük kaymış: √3/2 hem pozitif hem 60° çevresine ait." }
      ],
      explain: "Hep önce işareti (hangi bölge?), sonra büyüklüğü (hangi 'referans açı'?) belirle." },

    { type: "mcq", q: "cos 120° kaçtır?",
      opts: [
        { t: "−1/2", ok: true, why: "120° = 180° − 60°. Nokta sol tarafta: yatay uzaklık negatif. 60°'nin yatay uzaklığı 1/2 idi → −1/2." },
        { t: "1/2", why: "Büyüklük doğru ama nokta merkezin solunda; kosinüs (yatay uzaklık) negatif." },
        { t: "−√3/2", why: "√3/2, 120°'nin yüksekliği (sinüs) ile ilişkili. Burada kosinüs sorulmuş." },
        { t: "√3/2", why: "Sinüs ve kosinüsü karıştırmış olabilirsin: 120°'de sinüs √3/2'dir." }
      ],
      explain: "Kosinüs yatay uzaklıktır: sağda pozitif, solda negatif." },

    { type: "mcq", q: "0° ≤ x < 360° için sin x = −1/2 denklemini sağlayan açılar hangileridir?",
      opts: [
        { t: "210° ve 330°", ok: true, why: "Yükseklik −1/2 olan iki nokta var: ikisi de x ekseninin altında, 180°+30° ve 360°−30°." },
        { t: "30° ve 150°", why: "Bu iki nokta yüksekliği +1/2 olanlar. Eksi işareti atlanmış." },
        { t: "Yalnızca 210°", why: "Aynı yükseklikte iki nokta var: çemberde yatay bir doğru çemberi iki yerde keser." },
        { t: "120° ve 240°", why: "Bu açılarda kosinüs −1/2'dir; sinüs değil. İki fonksiyon karıştırılmış." }
      ],
      explain: "Çemberde yatay bir çizgi (sabit yükseklik) çemberi iki yerde keser: bu yüzden denklemin genelde iki çözümü vardır." },

    { type: "reflect", q: "Peki ya neden? Sinüs ve kosinüs neden hiçbir zaman 1'i aşamaz? Çemberle kendi cümlenle açıkla.",
      hint: "Örnek düşünce: Yükseklik ve yatay uzaklık, çember üzerindeki bir noktanın merkeze uzaklığı olan 1'in 'bileşenleri'. Bir bileşen, parçası olduğu uzunluktan büyük olamaz; Pisagor'dan sin² + cos² = 1 olduğu için ikisi de karesi 1'den fazla olamaz. Bu yüzden değerler −1 ile 1 arasında kalır." },

    { type: "reflect", q: "Gerçek hayatta 'düzenli tekrarlanan' ve 'yükselip alçalan' hangi olaylar sinüs eğrisine benzeyebilir? İki örnek yaz ve neden benzediğini söyle.",
      hint: "Örnek düşünce: Dönme dolap, sarkaç, deniz dalgası ya da müzikteki ses dalgası. Ortak nokta, bir dairesel hareketin tek bir yöndeki gölgesi gibi davranmaları. Mevsime göre gün uzunluğu da yaklaşık böyle tekrarlanır, ama tam bir sinüs eğrisi değildir; modelleme her zaman bir yaklaşıklıktır." },

    { type: "text", title: "Bugünün özeti",
      say: "Bugünkü keşif tamamlandı. Birim çemberde sinüs yükseklik, kosinüs yatay uzaklıktır. Sinüs kare artı kosinüs kare her zaman birdir. Değerler eksi bir ile bir arasındadır ve her üç yüz altmış derecede tekrarlanır.",
      html: `<ul class="body"><li><b>sin x</b> = çember üzerindeki noktanın <b>yüksekliği</b>; <b>cos x</b> = <b>yatay uzaklığı</b>.</li>
<li>Önce <b>bölgeyi</b> (işaret), sonra <b>referans açıyı</b> (büyüklük) düşün.</li>
<li><b>sin²x + cos²x = 1</b>: Pisagor'un çemberdeki hâli.</li>
<li>Değerler <b>−1 ile 1</b> arasında; her <b>360°</b>'de tekrar.</li>
<li>Sinüs ve kosinüs <b>aynı dalga</b>; biri 90° kaymış.</li></ul>
<p class="callout">Hız değil bakış: sınavda bir değer sorulduğunda zihninde çemberi canlandırabiliyorsan, tabloyu unutsan da yeniden kurabilirsin.</p>` }
  ]
};
