/* 11. sınıf Fizik konu anlatımlarına ek açıklama ve animasyon adımları (ne neyden gelir, neden, günlük hayattaki karşılığı). g = 10 m/s². Özgün içerik (CC BY-NC-SA 4.0). Öğretmen/Opus doğrulaması beklenir. */
(function () {
  var D = KESIF.dsl, T = D.T, M = D.M, G = D.G, AN = D.AN, DEEP = D.DEEP;

  DEEP("fiz11-newton-yasalari", [
    T("Üç yasa, üç günlük hayat deneyimi", '<ul class="body"><li><b>1. yasa (eylemsizlik):</b> Net kuvvet sıfırsa cisim durgunsa durur, hareketliyse sabit hızla gider. Otobüs ani frenleyince öne savrulursun çünkü bedenin hareketini sürdürmek ister.</li><li><b>2. yasa:</b> <b>F_net = m·a</b>. Aynı kuvvet hafif cismi daha çok hızlandırır. Boş sepeti itmek dolu sepeti itmekten kolaydır.</li><li><b>3. yasa (etki–tepki):</b> A cismi B’ye kuvvet uygularsa B de A’ya eşit büyüklükte, ters yönde kuvvet uygular. Bu iki kuvvet <b>farklı cisimlere</b> etki eder, bu yüzden birbirini dengelemez. Yüzücü suyu geri iter, su yüzücüyü ileri iter.</li></ul><p class="callout why"><b>Örnek:</b> 4 kg’lık cisme sağa 20 N çekme, 8 N sürtünme etki ediyor. F_net = 20 − 8 = 12 N, a = 12/4 = 3 m/s². Yalnızca kuvvetlerin toplamı değil, <b>yönleri</b> de önemlidir.</p>'),
    AN("kuvvet", "Canlandırma: kuvvet, kütle, sürtünme ve ivme")
  ]);
  DEEP("fiz11-surtunme", [
    T("Sürtünme neden var ve neden gerekli?", '<p>Yüzeyler gözle düz görünse de <b>mikroskobik çıkıntılara</b> sahiptir; çıkıntılar birbirine takılır. Sürtünme kuvveti <b>harekete ya da hareket eğilimine ters</b> yöndedir.</p><ul class="body"><li><b>Statik sürtünme:</b> cisim henüz kaymıyorken, uygulanan kuvvete eşit büyüklükte artar; en fazla <b>μₛ·N</b> olabilir.</li><li><b>Kinetik sürtünme:</b> cisim kayarken sabittir: <b>f = μₖ·N</b> (genellikle μₖ < μₛ).</li></ul><p class="callout why"><b>Neden başlatmak daha zor?</b> Duran bir dolabı itmeye başlarken daha çok kuvvet gerekir (statik sınır), harekete geçince biraz daha kolay devam eder (kinetik). <b>Dünyadaki karşılığı:</b> yürüyebilmek, araç lastiğinin yolu tutması ve frenlemek sürtünme sayesindedir; buzda sürtünme azaldığı için kayarız.</p>'),
    AN("kuvvet", "Canlandırma: sürtünme katsayısını değiştir")
  ]);
  DEEP("fiz11-limit-hiz", [
    AN("limit", "Canlandırma: hız neden sonsuza gitmez?"),
    T("Limit hız: paraşütçü örneği", '<p>Serbest bırakılan paraşütçü başta hızlanır. Hız arttıkça <b>hava direnci</b> artar. Direnç ağırlığa eşit olunca net kuvvet sıfır olur ve hız sabitlenir: <b>limit hız</b>. Vücut yatay açılınca yaklaşık 50–55 m/s’ye (yaklaşık 190–200 km/h), paraşüt açılınca yaklaşık 5–6 m/s’ye iner. Programda limit hız <b>kavramsal</b> işlenir; hesap beklenmez.</p><p class="callout why"><b>Neden büyük paraşüt yavaş indirir?</b> Yüzey alanı büyüdükçe aynı hızda hava direnci artar; denge daha küçük hızda kurulur.</p>')
  ]);
  DEEP("fiz11-cembersel", [
    AN("circ", "Canlandırma: merkezcil kuvvet ve ipin kopması")
  ]);
  DEEP("fiz11-elektriksel-kuvvet", [
    T("Elektriksel kuvvet ve alan: görünmeyen etkiyi görmek", '<p>Elektrik yüklü cisimler birbirine <b>dokunmadan</b> kuvvet uygular. <b>Coulomb yasası:</b> F = k·Q·q / r² (k ≈ 9·10⁹ N·m²/C²). Kuvvet yüklerin çarpımıyla doğru, uzaklığın karesiyle ters orantılıdır; aynı cins yükler iter, zıt cins yükler çeker.</p><p><b>Elektriksel alan</b> bir yükün çevresinde “etki alanıdır”: E = F/q = k·Q/r². Alan, o noktaya konan +1 birimlik deneme yüküne etkiyen kuvvettir. Pozitif yükten dışarı, negatif yüke doğrudur.</p><p class="callout why"><b>Dünyadaki karşılığı:</b> Saçı tarayınca tarağa yapışması ya da yıldırım düşmesi bu etkinin sonucudur. Statik elektrik, fotokopi makineleri ve havadaki tozu tutan filtreler bu kuvveti kullanır.</p>'),
    AN("coulomb", "Canlandırma: Coulomb kuvveti ve uzaklık")
  ]);
  DEEP("fiz11-manyetik-alan", [
    T("Manyetik kuvvet: neden hıza dik?", '<p>Manyetik alan içinde hareket eden yüklü parçacığa <b>F = q·v·B·sinθ</b> kuvveti etki eder. Kuvvetin yönü <b>sağ el kuralı</b> ile bulunur ve hem hıza hem alana diktir. Kuvvet hıza dik olduğundan parçacığın sürati değişmez, yalnızca yönü değişir: alana dik girerse <b>çember</b> çizer, r = m·v/(q·B).</p><p class="callout why"><b>Dünyadaki karşılığı:</b> Dünya’nın manyetik alanı güneş rüzgârındaki yüklü parçacıkları kutuplara yönlendirir (kutup ışıkları) ve atmosferi korur. Elektrik motorları, hoparlörler ve parçacık hızlandırıcıları manyetik kuvvetle çalışır.</p>'),
    AN("manyetik", "Canlandırma: manyetik alanda yüklü parçacık")
  ]);
  DEEP("fiz11-induksiyon", [
    T("İndüksiyon: manyetik alandan elektrik üretmek", '<p>Faraday’ın gözlemi: bobinden geçen <b>manyetik akı değişirse</b> bobinde emk (gerilim) oluşur; akı sabitse oluşmaz. Akı; alan şiddeti, bobinin alanı ve açısıyla belirlenir; bunlardan biri değişince akı değişir.</p><p><b>Lenz yasası:</b> Oluşan akım, kendisini doğuran akı değişimine <b>karşı koyacak</b> yöndedir (enerjinin korunumu: kolay yoldan enerji elde edilemez).</p><p class="callout why"><b>Dünyadaki karşılığı:</b> Hidroelektrik ve rüzgâr santrallerindeki jeneratörler dönen mıknatıs ya da bobinle akıyı sürekli değiştirir ve elektrik üretir; indüksiyon ocağı ve kablosuz şarj da aynı olaydan yararlanır.</p>'),
    AN("induksiyon", "Canlandırma: mıknatıs ve bobin")
  ]);
  DEEP("fiz11-transformator", [
    T("Transformatör: elektriği neden yüksek gerilimle taşırız?", '<p>Transformatör, alternatif gerilimi sarım sayısı oranında değiştirir: <b>Vₛ/Vₚ = Nₛ/Nₚ</b>. İdeal durumda güç korunur (Vₚ·Iₚ = Vₛ·Iₛ), yani gerilim artınca akım azalır.</p><p class="callout why"><b>Neden yüksek gerilim?</b> Tellerde ısı kaybı akımın karesiyle orantılıdır (P = I²R). Santralden şehre enerji taşırken gerilimi yükseltip akımı küçültürsek kayıp azalır; şehirde gerilim tekrar düşürülür. Telefon şarj adaptörü de 220 V’u küçük bir gerilime düşürür.</p>'),
    AN("trafo", "Canlandırma: sarım sayısı ve gerilim")
  ]);
  DEEP("fiz11-isik-sayilari", [
    T("Işık şiddeti, akı ve aydınlanma", '<ul class="body"><li><b>Işık şiddeti (I):</b> kaynağın belli bir yöndeki ışık gücü, birimi kandela (cd).</li><li><b>Işık akısı (Φ):</b> kaynağın saniyede yaydığı görünür ışık miktarı, birimi lümen (lm).</li><li><b>Aydınlanma (E):</b> yüzeye düşen akı / yüzey alanı, birimi lüks (lx). Nokta kaynak için E = I/d² (ışın yüzeye dik gelirse).</li></ul><p class="callout why"><b>Neden uzaklaşınca karanlık?</b> Aynı akı büyüyen küre yüzeyine yayılır; alan d² ile büyüdüğü için aydınlanma d² ile azalır. Dünyadaki karşılığı: okuma lambasını masadan iki kat uzağa kaldırırsan sayfa dörtte bir aydınlanır.</p>'),
    AN("isik", "Canlandırma: ters kare yasası")
  ]);
  DEEP("fiz11-duzlem-ayna", [
    AN("duzlem", "Canlandırma: düzlem aynada görüntü"),
    T("Yansıma yasaları ve görüntü", '<p>Yansımada <b>gelme açısı = yansıma açısı</b>; gelen ışın, normal ve yansıyan ışın aynı düzlemdedir. Düzlem aynada görüntü <b>sanal, düz, cisimle aynı boyda</b> ve aynanın arkasında eşit uzaklıktadır (sol–sağ yanal ters görünür).</p><p class="callout why"><b>Dünyadaki karşılığı:</b> Ambulansların önündeki “AMBULANS” yazısı ters yazılır ki ön ayna ile bakan sürücü doğru okuyabilsin.</p>')
  ]);
  DEEP("fiz11-kuresel-ayna", [
    AN("ayna", "Canlandırma: çukur ayna ve görüntü"),
    T("Çukur ve tümsek ayna: nerede kullanılır?", '<ul class="body"><li><b>Çukur ayna:</b> paralel ışınları odakta toplar. Cisim odağın içindeyse görüntü sanal, düz ve büyüktür (diş hekimi aynası, tıraş aynası); uzaktaysa gerçek ve ters (far, projektör yansıtıcısı).</li><li><b>Tümsek ayna:</b> ışınları yayar; görüntü her zaman sanal, düz ve küçüktür; geniş bir alanı gösterir (araç yan aynaları, mağaza güvenlik aynaları).</li></ul><p class="callout why"><b>Formül:</b> 1/f = 1/d₀ + 1/dᵢ ve büyütme m = −dᵢ/d₀. Çukur aynada odak uzaklığı pozitif, tümsek aynada negatif alınır.</p>')
  ]);
  DEEP("fiz11-kirilma", [
    AN("kirilma", "Canlandırma: Snell yasası ve tam yansıma"),
    T("Kırılma neden olur? Işığın hızı değişir", '<p>Işık yoğun ortamda daha yavaş gider. Ortam değiştirince hızı değişir ve yönü kırılır: <b>n₁·sinθ₁ = n₂·sinθ₂</b>. Kırılma indisi n = c/v büyüdükçe ortam “daha yoğundur”: hava 1, su ≈ 1,33, cam ≈ 1,5.</p><p><b>Tam yansıma:</b> Işık yoğundan seyreğe geçerken belirli bir açıdan sonra dışarı çıkamaz, tamamen geri döner. Fiber optik kablolar bu ilkeyle ışığı kaybetmeden taşır.</p><p class="callout why"><b>Dünyadaki karşılığı:</b> Bardaktaki kalem kırık görünür; havuz sığ görünür; internet kablolarında veri ışıkla taşınır.</p>')
  ]);
  DEEP("fiz11-prizma-mercek", [
    T("Prizma ve mercek: ışığı yönlendirmek", '<p><b>Prizma:</b> beyaz ışık her renk için farklı kırılma indisiyle kırıldığından renklere ayrılır (dispersiyon); gökkuşağı yağmur damlalarında bu olayın büyük ölçekli hâlidir.</p><p><b>Mercek:</b> yakınsak (ince kenarlı) mercek paralel ışınları odakta toplar; ıraksak (kalın kenarlı) mercek ışınları dağıtır. Büyüteç, kamera ve gözlükler merceklerle çalışır: <b>miyop</b> gözde görüntü retinanın önünde oluşur, ıraksak mercekle düzeltilir; <b>hipermetrop</b> gözde arkasında oluşur, yakınsak mercekle düzeltilir.</p>'),
    AN("mercek", "Canlandırma: yakınsak mercekte görüntü")
  ]);
})();
