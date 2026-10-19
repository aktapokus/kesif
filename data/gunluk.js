/* Günlük soru havuzu. Her soru: yanlış seçenek için "düşünce nerede kaydı" açıklaması taşır. */
KESIF.daily = [
  { id: "m1", subject: "mat", q: "lim (x→1) (x³ − 1) ÷ (x − 1) kaçtır?",
    opts: [
      { t: "3", ok: true, why: "x³ − 1 = (x−1)(x²+x+1). Sadeleşince x²+x+1; x=1 için 3." },
      { t: "0", why: "Pay 0 olunca sonuca '0' demek cazip. Ama payda da 0: 0÷0 bir cevap değil, çarpanlara ayır." },
      { t: "1", why: "x³ − 1 ifadesinde sadece x yerine 1 koyup 1 çıkarıldı gibi duruyor. Payın çarpanını sadeleştirmeden bir şey söylenemez." },
      { t: "Limit yoktur", why: "Payda 0'a gidiyor ama sadeleştikten sonra sorun kalmıyor." }
    ], explain: "Küp farkı: a³ − b³ = (a−b)(a²+ab+b²)." },
  { id: "m2", subject: "mat", q: "lim (x→5) (2x + 1) kaçtır?",
    opts: [
      { t: "11", ok: true, why: "Polinom her yerde sürekli: doğrudan yerine koy. 2·5 + 1 = 11." },
      { t: "0", why: "Burada 0 ÷ 0 yok; doğrudan yerine koymak yeter." },
      { t: "Limit yoktur", why: "Doğrusal bir fonksiyonun her noktada limiti vardır." },
      { t: "5", why: "x'in kendisini cevap yazmışsın; fonksiyonun değerini sormuş." }
    ], explain: "Önce yerine koy. 0/0 çıkmazsa bitti." },
  { id: "m3", subject: "mat", q: "lim (x→0) (√(x + 4) − 2) ÷ x kaçtır?",
    opts: [
      { t: "1/4", ok: true, why: "Eşleniğiyle çarp: (x+4−4) ÷ (x(√(x+4)+2)) = 1 ÷ (√(x+4)+2) → 1/4." },
      { t: "0", why: "Pay 0 oluyor ama payda da 0. Eşlenik gerekir." },
      { t: "1/2", why: "Eşlenikten sonra paydadaki √4 + 2 = 4 olmalıydı; √4'ü 2 alıp 2 + 2 yerine sadece 2 bırakmış olabilirsin." },
      { t: "Limit yoktur", why: "Eşlenikle sadeleşince limit var." }
    ], explain: "Köklü ifadede 0/0 → eşleniğiyle çarp." },
  { id: "m4", subject: "mat", q: "x → 3 iken f(x) = (x² − 9) ÷ (x − 3) için hangisi doğrudur?",
    opts: [
      { t: "f(3) tanımsızdır ama limit 6'dır.", ok: true, why: "Fonksiyonun bir noktada tanımsız olması limiti etkilemez." },
      { t: "f(3) = 6 olduğu için limit 6'dır.", why: "f(3) tanımsız. Limit 6 ama bunun nedeni f(3) değil, çevredeki değerler." },
      { t: "Hem f(3) hem limit yoktur.", why: "f(3) yok ama limit var." },
      { t: "Limit 0'dır.", why: "0/0 görünce 0 yazmak yanlış: sadeleştir." }
    ], explain: "Limit, f(a)'nın ne olduğuyla değil, çevredeki davranışla ilgilenir." },
  { id: "t1", subject: "tur", passage: "Dil, yalnızca düşünceyi taşıyan bir araç değildir; düşünceyi biçimlendiren de odur. Bir şeyi adlandıramadığımız zaman onu fark etmekte de zorlanırız.",
    q: "Bu parçanın ana düşüncesi hangisidir?",
    opts: [
      { t: "Dil, düşünceyi yalnızca taşımaz, onu şekillendirir de.", ok: true, why: "“Yalnızca … değildir; … de odur” kalıbı yargıyı veriyor." },
      { t: "Dil bir iletişim aracıdır.", why: "Yazar tam bu görüşü 'yalnızca' ile sınırlıyor; eksik bırakmak." },
      { t: "Adlandıramadığımız şeyler yoktur.", why: "Aşırı yorum. Yazar 'fark etmekte zorlanırız' diyor, 'yoktur' demiyor." },
      { t: "Çok kelime bilmeliyiz.", why: "Metinde öneri yok; metinde olmayanı eklemişsin." },
      { t: "Düşünce dilden bağımsızdır.", why: "Yazarın söylediğinin tersi." }
    ], explain: "“Yalnızca … değil” kalıbı, yazarın asıl vurgusunun ikinci yarıda olduğunu gösterir." },
  { id: "t2", subject: "tur", passage: "Spor yapmak hem bedeni hem zihni güçlendirir. Düzenli hareket eden kişilerde stres düzeyi düşer; ders çalışırken dikkat süresi uzar. Dolayısıyla sporu bir zaman kaybı değil, öğrenmenin yardımcısı olarak görmek gerekir.",
    q: "Parçadaki “Dolayısıyla” sözcüğünün görevi nedir?",
    opts: [
      { t: "Önceki cümlelerden bir sonuç çıkarmak", ok: true, why: "Önce gerekçeler (stres düşer, dikkat uzar), sonra 'dolayısıyla' ile yargı geliyor." },
      { t: "Karşıt bir görüşe geçmek", why: "Karşıt görüşe 'oysa, ama' geçirir; 'dolayısıyla' ise önceki cümleye yaslanır." },
      { t: "Örnek vermek", why: "Örnek için 'örneğin' kullanılır." },
      { t: "Soru sormak", why: "Cümle soru değil, öneri bildiriyor." }
    ], explain: "Sonuç bağlaçları: dolayısıyla, bu nedenle, demek ki, sonuç olarak." },
  { id: "t3", subject: "tur", passage: "Bir şehrin sesi, o şehri tanımanın en kısa yoludur. Pazar yerinin gürültüsü, vapur düdüğü ve ezan sesi aynı anda duyulduğunda ‘burası İstanbul’ deriz.",
    q: "Bu parçada hangi anlatım tekniği ağırlıktadır?",
    opts: [
      { t: "Örnekleme (örneklerle desteklemek)", ok: true, why: "İlk cümle yargı; ikinci cümle pazar, vapur, ezan örnekleriyle yargıyı destekliyor." },
      { t: "Karşılaştırma", why: "Burada iki şey kıyaslanmıyor." },
      { t: "Tanımlama", why: "Bir kavram tanımlanmıyor; bir yargı örnekle destekleniyor." },
      { t: "Öyküleme", why: "Olay akışı yok; durum anlatılıyor." }
    ], explain: "Yargı + örnek yapısı = örnekleme." },
  /* --- 11. sınıf: birim çember (mat-trig-cember) --- */
  { id: "mt1", subject: "mat", q: "cos 60° kaçtır?",
    opts: [
      { t: "1/2", ok: true, why: "60° noktasının merkezden yatay uzaklığı, 30° noktasının yüksekliğiyle aynı: 1/2." },
      { t: "√3/2", why: "√3/2, 60° için yüksekliktir (sinüs). Kosinüs yatay uzaklıktır." },
      { t: "1", why: "Yatay uzaklık 1 yalnızca 0°'de (en sağda) olur." },
      { t: "0", why: "Yatay uzaklık 0, noktanın tam tepede ya da dipte olduğu 90° ve 270°'de olur." }
    ], explain: "Kosinüs = yatay uzaklık. Sinüs ve kosinüs 30° ile 60°'de yer değiştirir." },
  { id: "mt2", subject: "mat", q: "sin 90° + cos 180° işleminin sonucu kaçtır?",
    opts: [
      { t: "0", ok: true, why: "sin 90° = 1 (tepe), cos 180° = −1 (en sol). 1 + (−1) = 0." },
      { t: "2", why: "cos 180°'yi +1 almışsın. 180°'de nokta merkezin solunda: yatay uzaklık negatif." },
      { t: "1", why: "cos 180°'yi 0 almışsın. Yatay uzaklığın 0 olduğu açı 90°'dir; 180°'de en sola ulaşılıyor, −1." },
      { t: "−1", why: "sin 90°'yi 0 almışsın. 90°'de nokta tam tepede: yükseklik 1." }
    ], explain: "Köşe açılarını (0°, 90°, 180°, 270°) çemberin dört ucu olarak düşün." },
  { id: "mt3", subject: "mat", q: "sin²40° + cos²40° ifadesinin değeri kaçtır?",
    opts: [
      { t: "1", ok: true, why: "Her açıda sin²x + cos²x = 1 (Pisagor). Açının 40° olması sonucu etkilemez." },
      { t: "0", why: "Kareler toplamı 0 olamaz; çember üzerindeki nokta merkezden 1 uzakta." },
      { t: "2", why: "Her birinin 1 olduğunu varsaymışsın. Her biri 1'den küçük; toplamları 1." },
      { t: "sin 80°", why: "Açıyı ikiye katlamakla bir ilgisi yok; bu sabit bir kimlik." }
    ], explain: "sin²x + cos²x = 1 her x için doğrudur." },
  { id: "mt4", subject: "mat", q: "x ikinci bölgede (90° < x < 180°) ve cos x = −3/5 ise sin x kaçtır?",
    opts: [
      { t: "4/5", ok: true, why: "sin²x = 1 − 9/25 = 16/25 → sin x = ±4/5. İkinci bölgede nokta x ekseninin üstünde: pozitif." },
      { t: "−4/5", why: "İkinci bölgede yatay uzaklık negatif ama yükseklik pozitiftir. Bu işaret üçüncü bölgeye ait." },
      { t: "16/25", why: "Bu değer sin²x. Karekök alınmamış." },
      { t: "3/5", why: "cos x'in mutlak değerini yazmışsın; Pisagor kullanılmamış." }
    ], explain: "İşaretler: I. bölge (sin+, cos+), II. (sin+, cos−), III. (sin−, cos−), IV. (sin−, cos+)." },
  { id: "mt5", subject: "mat", q: "sin 330° kaçtır?",
    opts: [
      { t: "−1/2", ok: true, why: "330° = 360° − 30°. 30°'nin x eksenine göre ayna görüntüsü: aynı büyüklük, işaret negatif." },
      { t: "1/2", why: "330° x ekseninin altında; yükseklik negatif." },
      { t: "−√3/2", why: "Bu 240° ve 300° için doğru. 330° eksene daha yakın." },
      { t: "√3/2", why: "İşaret ve büyüklük 60° çevresine ait." }
    ], explain: "Referans açı: 330° için 30°. Bölge IV'te sinüs negatif." },
  { id: "mt6", subject: "mat", q: "cos 300° kaçtır?",
    opts: [
      { t: "1/2", ok: true, why: "300° = 360° − 60°. Nokta sağ tarafta (yatay uzaklık pozitif); büyüklük cos 60° = 1/2." },
      { t: "−1/2", why: "Sağ tarafta olan bir noktanın yatay uzaklığı negatif olamaz." },
      { t: "√3/2", why: "√3/2, 300° için yükseklik büyüklüğü (|sin|). Kosinüs sorulmuş." },
      { t: "−√3/2", why: "Sinüsün değerini kosinüsle karıştırmış olabilirsin." }
    ], explain: "IV. bölgede kosinüs pozitiftir (nokta sağda)." },
  { id: "mt7", subject: "mat", q: "sin 135° kaçtır?",
    opts: [
      { t: "√2/2", ok: true, why: "135° = 180° − 45°. 45°'nin dikey eksene göre ayna görüntüsü; yükseklik aynı: √2/2." },
      { t: "−√2/2", why: "135° hâlâ x ekseninin üstünde; yükseklik pozitif. Negatif değer cos 135° için olurdu." },
      { t: "1/2", why: "1/2, 30° ve 150° için. 135° 45° ailesinden." },
      { t: "√3/2", why: "√3/2, 60° ve 120° ailesine ait." }
    ], explain: "sin(180° − x) = sin x." },
  { id: "mt8", subject: "mat", q: "0° ≤ x < 360° için cos x = 1 denkleminin çözüm kümesi hangisidir?",
    opts: [
      { t: "{0°}", ok: true, why: "Yatay uzaklığın 1 olduğu tek nokta en sağdaki nokta (0°). 360° aynı nokta ama aralığa dahil değil." },
      { t: "{90°}", why: "90°'de kosinüs 0'dır (nokta tam tepede)." },
      { t: "{180°}", why: "180°'de kosinüs −1'dir (en sol)." },
      { t: "{0°, 360°}", why: "360° verilen aralığın dışında (x < 360°)." }
    ], explain: "Aralığın uçlarına dikkat: 360° ile 0° aynı noktadır ama '<' işareti 360°'yi dışarıda bırakır." },
  { id: "mt9", subject: "mat", q: "x gerçek sayı olmak üzere 3 sin x + 1 ifadesinin alabileceği en küçük değer kaçtır?",
    opts: [
      { t: "−2", ok: true, why: "sin x en az −1 olur: 3·(−1) + 1 = −2." },
      { t: "−3", why: "+1'i unutmuş olabilirsin; 3·(−1) = −3 ama ifadede +1 var." },
      { t: "−4", why: "3·(−1) − 1 yapılmış; +1 çıkarılmış gibi." },
      { t: "1", why: "sin x = 0 koyulmuş. En küçük değer için sinüs de en küçük (−1) olmalı." }
    ], explain: "Sinüsün sınırları −1 ve 1; ifadeyi bu sınırlarla hesapla." },
  { id: "mt10", subject: "mat", q: "0° ≤ x ≤ 360° aralığında sin x = 0 denkleminin kaç çözümü vardır?",
    opts: [
      { t: "3", ok: true, why: "Yükseklik 0 olan noktalar: 0°, 180° ve 360° (aralık 360°'yi içeriyor)." },
      { t: "2", why: "0° ve 180°'yi saymışsın; aralığın kapalı ucu 360° de çözüm." },
      { t: "1", why: "Yükseklik 0 olan nokta yalnızca sağda değil, solda da var." },
      { t: "4", why: "90° ve 270°'de yükseklik 0 değil, ±1." }
    ], explain: "Eğri x eksenini bu aralıkta üç yerde keser (uç noktalar dahil)." },
  { id: "mt11", subject: "mat", q: "sin 40° = sin a ise, 90° < a < 180° olan a kaçtır?",
    opts: [
      { t: "140°", ok: true, why: "sin(180° − x) = sin x: 180° − 40° = 140°. Aynı yükseklikteki ikinci nokta." },
      { t: "50°", why: "50°, 40°'nin tamamlayanı; cos 50° = sin 40° olurdu ama sin 50° ≠ sin 40°. Üstelik 90°'den küçük." },
      { t: "220°", why: "220° üçüncü bölgede ve yüksekliği negatif; sin 220° = −sin 40°." },
      { t: "320°", why: "320° dördüncü bölgede; sinüsü negatif." }
    ], explain: "Aynı yükseklikte iki nokta: x ve 180° − x." },
  { id: "mt12", subject: "mat", q: "cos 40° = cos a ise, 180° < a < 360° olan a kaçtır?",
    opts: [
      { t: "320°", ok: true, why: "Aynı yatay uzaklıkta iki nokta: x ve 360° − x. 360° − 40° = 320°." },
      { t: "140°", why: "cos 140° = −cos 40° (nokta solda). Ayrıca 140° verilen aralıkta değil." },
      { t: "220°", why: "220° solda (üçüncü bölge): kosinüsü negatif." },
      { t: "50°", why: "sin 50° = cos 40° ilişkisi var ama burada aynı kosinüs isteniyor; 50° aralıkta da değil." }
    ], explain: "Aynı yatay uzaklık: x ve 360° − x (x eksenine göre ayna)." },
  /* --- 11. sınıf: üstel fonksiyon ve logaritma (mat-ustel-log) --- */
  { id: "mu1", subject: "mat", q: "2⁻³ + 2⁻³ ifadesinin değeri kaçtır?",
    opts: [
      { t: "1/4", ok: true, why: "2⁻³ = 1/8. İki tane 1/8 toplamı 2/8 = 1/4." },
      { t: "1/64", why: "Toplama yerine çarpma yapılmış (1/8 · 1/8). Burada iki terim toplanıyor." },
      { t: "−12", why: "Negatif üs sonucu negatif yapmaz; tersini alır." },
      { t: "1/16", why: "1/8 + 1/8 yerine paydalar yanlış birleştirilmiş (8 + 8 = 16). Paydalar toplanmaz: iki tane 1/8, 2/8 eder." }
    ], explain: "Önce her terimi sadeleştir, sonra topla." },
  { id: "mu2", subject: "mat", q: "log₃ 81 kaçtır?",
    opts: [
      { t: "4", ok: true, why: "3⁴ = 81 (3, 9, 27, 81: dördüncü)." },
      { t: "27", why: "81 ÷ 3 yapılmış. Logaritma üssü sorar, bölümü değil." },
      { t: "3", why: "3³ = 27. Bir üs eksik." },
      { t: "9", why: "81'in karekökü 9; sorulan 3'ün kaçıncı üssü olduğu." }
    ], explain: "3'ü sırayla çarp: 3, 9, 27, 81." },
  { id: "mu3", subject: "mat", q: "log₂ (1/8) kaçtır?",
    opts: [
      { t: "−3", ok: true, why: "2⁻³ = 1/8." },
      { t: "3", why: "2³ = 8, 1/8 değil. 1/8 için negatif üs gerekir." },
      { t: "−8", why: "8 sonucun paydası; üs 3'tür (negatif)." },
      { t: "1/3", why: "2^(1/3) ≈ 1,26; 1/8 değil. Üssün işareti negatif olmalı ve büyüklüğü 3: 2⁻³ = 1/8." }
    ], explain: "1'den küçük pozitif sayıların logaritması (a > 1) negatiftir." },
  { id: "mu4", subject: "mat", q: "log₄ 2 kaçtır?",
    opts: [
      { t: "1/2", ok: true, why: "4^(1/2) = √4 = 2." },
      { t: "2", why: "4² = 16. 2 değil." },
      { t: "1/4", why: "4^(1/4) = 4'ün dördüncü kökü, 2 değil." },
      { t: "8", why: "Sonuç bir üs; 2'nin 4'le ilişkisi 8 değil." }
    ], explain: "Taban 4, sonuç 2: 4'ün hangi üssü 2'dir? Karekök, yani 1/2." },
  { id: "mu5", subject: "mat", q: "2ˣ = 1/4 denklemini sağlayan x kaçtır?",
    opts: [
      { t: "−2", ok: true, why: "2⁻² = 1/4." },
      { t: "2", why: "2² = 4. 1/4 için üs negatif olmalı." },
      { t: "−4", why: "2⁻⁴ = 1/16." },
      { t: "1/4", why: "Üs, sonucun kendisi değil; 2^(1/4) ≈ 1,19." }
    ], explain: "Sonuç 1'den küçükse (a > 1) üs negatif." },
  { id: "mu6", subject: "mat", q: "f(x) = 2ˣ ise f(3) − f(1) kaçtır?",
    opts: [
      { t: "6", ok: true, why: "f(3) = 8, f(1) = 2; 8 − 2 = 6." },
      { t: "4", why: "f(2) = 4. f(3) − f(1) farkı 2ˣ'in farkı değil: 3 − 1 = 2 üssünün değeri alınmış." },
      { t: "2", why: "Üslerin farkı 2; fonksiyon değerlerinin farkı değil." },
      { t: "16", why: "2⁴ = 16; (3+1) yapılmış gibi." }
    ], explain: "Önce f(3) ve f(1)'i ayrı hesapla, sonra çıkar." },
  { id: "mu7", subject: "mat", q: "log₆ 2 + log₆ 3 kaçtır?",
    opts: [
      { t: "1", ok: true, why: "log₆ (2 · 3) = log₆ 6 = 1." },
      { t: "5", why: "2 + 3 yapılmış; logaritmanın içindekiler toplanmaz, çarpılır." },
      { t: "6", why: "2 · 3 sonucu 6; ama sorulan 6'nın 6 tabanındaki logaritması." },
      { t: "log₆ 5", why: "log₆ (2 + 3) yazılmış; kural toplam ↔ çarpım." }
    ], explain: "logₐ m + logₐ n = logₐ (m · n)." },
  { id: "mu8", subject: "mat", q: "log₂ 40 − log₂ 5 kaçtır?",
    opts: [
      { t: "3", ok: true, why: "log₂ (40/5) = log₂ 8 = 3." },
      { t: "35", why: "40 − 5 yapılmış; içteki sayılar çıkarılmaz, bölünür." },
      { t: "8", why: "40 ÷ 5 = 8 bulunmuş ama logaritması alınmamış." },
      { t: "1/8", why: "Bölümün tersi alınmış." }
    ], explain: "logₐ m − logₐ n = logₐ (m / n)." },
  { id: "mu9", subject: "mat", q: "y = aˣ (a > 0) grafiği (2, 9) noktasından geçiyorsa a kaçtır?",
    opts: [
      { t: "3", ok: true, why: "a² = 9 ve a > 0 olduğundan a = 3." },
      { t: "−3", why: "Taban pozitif olmalı; (−3)ˣ her x için tanımlı bir üstel fonksiyon vermez." },
      { t: "9/2", why: "9 ÷ 2 yapılmış; üs 2, çarpan değil." },
      { t: "81", why: "9² hesaplanmış; denklem a² = 9." }
    ], explain: "Noktayı denkleme yaz: 9 = a²." },
  { id: "mu10", subject: "mat", q: "logₓ 16 = 4 ise x kaçtır?",
    opts: [
      { t: "2", ok: true, why: "x⁴ = 16 ve taban pozitif: x = 2." },
      { t: "4", why: "4, logaritmanın değeri (üs). Taban sorulmuş." },
      { t: "64", why: "16 · 4 gibi bir sonuç; denklem x⁴ = 16." },
      { t: "−2", why: "(−2)⁴ = 16 olsa da taban pozitif olmak zorunda." }
    ], explain: "logₓ 16 = 4 ⟺ x⁴ = 16, x > 0, x ≠ 1." },
  { id: "mu11", subject: "mat", q: "(1/3)ᵐ > (1/3)ⁿ ise m ile n arasında hangi ilişki vardır?",
    opts: [
      { t: "m < n", ok: true, why: "Taban 1'den küçük, fonksiyon azalan: değer büyükse üs küçük." },
      { t: "m > n", why: "Büyük tabanlardaki alışkanlık: 1'den küçük tabanda sıralama ters döner." },
      { t: "m = n", why: "Eşit üs eşit değer verir; burada kesin büyüklük var." },
      { t: "Hiçbir şey söylenemez", why: "Üstel fonksiyon birebirdir; sıralama üsten çıkarılabilir." }
    ], explain: "0 < a < 1: azalan. a > 1: artan." },
  { id: "mu12", subject: "mat", q: "log₂ x = 3 ise x kaçtır?",
    opts: [
      { t: "8", ok: true, why: "2³ = 8." },
      { t: "6", why: "2 · 3 yapılmış; üs alma çarpma değildir." },
      { t: "9", why: "3² hesaplanmış; taban 2, üs 3." },
      { t: "3/2", why: "Bölme yapılmış; logaritma bölmez." }
    ], explain: "logₐ x = k ⟺ x = aᵏ." },
  /* --- 11. sınıf, 1. Tema: iki niceliksel değişkenli veriler (mat-iki-degisken) --- */
  { id: "ms1", subject: "mat", q: "İki değişken için doğrusal ilişki katsayısı r = −0,92 bulunmuş. Hangisi doğrudur?",
    opts: [
      { t: "Güçlü, ters yönlü (negatif) bir doğrusal ilişki vardır.", ok: true, why: "|r| = 0,92 değeri 1'e yakın: güçlü. İşaret eksi: biri artarken diğeri azalıyor." },
      { t: "İlişki zayıftır çünkü r negatiftir.", why: "Gücü işaret değil, mutlak değer belirler. −0,92 de +0,92 kadar güçlüdür." },
      { t: "x bir birim arttığında y %92 azalır.", why: "r bir yüzde ya da eğim değildir; ilişkinin gücünü ve yönünü özetler." },
      { t: "x, y'nin azalmasının nedenidir.", why: "Güçlü ilişki sebebi kanıtlamaz; ortak bir üçüncü etken olabilir." }
    ], explain: "İşaret yön, mutlak değer güç." },
  { id: "ms2", subject: "mat", q: "Bir saçılım grafiğinde noktalar dağınık, belirgin bir yön yok. r yaklaşık kaç olur?",
    opts: [
      { t: "0'a yakın", ok: true, why: "Belirgin doğrusal eğilim yoksa r sıfıra yakındır." },
      { t: "1'e yakın", why: "r ≈ 1 noktaların yükselen bir doğrunun çevresinde sıkışık olmasıdır." },
      { t: "−1'e yakın", why: "r ≈ −1 inen bir doğru boyunca sıkışık noktalardır." },
      { t: "2", why: "r hiçbir zaman −1'den küçük, 1'den büyük olamaz." }
    ], explain: "r ∈ [−1, 1]; dağınık bulut → 0'a yakın." },
  { id: "ms3", subject: "mat", q: "Aşağıdakilerden hangisi bir doğrusal ilişki katsayısı (r) olamaz?",
    opts: [
      { t: "1,3", ok: true, why: "r her zaman −1 ile 1 arasındadır; 1,3 bu aralığın dışında." },
      { t: "−0,4", why: "−1 ile 1 arasında, olabilir." },
      { t: "0", why: "Doğrusal ilişki yok demek; olabilir." },
      { t: "−1", why: "Kusursuz ters yönlü doğrusal ilişkide r = −1." }
    ], explain: "−1 ≤ r ≤ 1." },
  { id: "ms4", subject: "mat", q: "Bir eğilim doğrusu y = 2x + 10 ise x = 7 için tahmin edilen y kaçtır?",
    opts: [
      { t: "24", ok: true, why: "y = 2·7 + 10 = 14 + 10 = 24." },
      { t: "14", why: "2·7 = 14'ü bulup +10'u unutmuşsun." },
      { t: "17", why: "x + 10 yapılmış; x'in katsayısı 2." },
      { t: "34", why: "2·7 + 20 gibi bir hata; sabit terim 10." }
    ], explain: "Tahmin: x'i denklemde yerine koy." },
  { id: "ms5", subject: "mat", q: "Eğilim doğrusu y = 3x + 12 ise x bir birim arttığında y'nin tahmini değişimi kaçtır?",
    opts: [
      { t: "3 artar", ok: true, why: "x'in katsayısı eğimdir: x 1 artınca y yaklaşık 3 artar." },
      { t: "12 artar", why: "12, x = 0 iken tahmin edilen değerdir (kesişim); değişim miktarı değil." },
      { t: "15 artar", why: "3 + 12 toplanmış; eğim ve kesişim ayrı kavramlar." },
      { t: "36 artar", why: "3·12 çarpılmış; ilgisiz bir işlem." }
    ], explain: "y = a·x + b'de a: x'teki 1 birimlik artışın y'deki karşılığı." },
  { id: "ms6", subject: "mat", q: "5–10 yaş arası çocukların boy–yaş verisinden çıkarılan doğruyla 40 yaşındaki birinin boyunu tahmin etmek neden sakıncalıdır?",
    opts: [
      { t: "Doğru yalnızca verinin aralığında güvenilirdir; büyüme sonsuza dek doğrusal sürmez", ok: true, why: "Veri aralığının çok dışına çıkmak (dış tahmin) anlamsız sonuçlar verir: boy sürekli artmaz." },
      { t: "Doğru yanlış hesaplanmıştır", why: "Doğru aralığında iyi olabilir; sorun aralığın dışında kullanılması." },
      { t: "40 sayısı çift olduğu için", why: "Sayının çift ya da tek olmasının bir önemi yok." },
      { t: "Boy ve yaş arasında ilişki olmadığı için", why: "5–10 yaş aralığında güçlü ilişki var; sorun kapsam." }
    ], explain: "Tahminlerde veri aralığının içinde kal." },
  { id: "ms7", subject: "mat", q: "Bir şehirde itfaiye aracı sayısı ile yangın hasarı birlikte artıyor. En makul açıklama hangisidir?",
    opts: [
      { t: "Yangının büyüklüğü hem gönderilen araç sayısını hem hasarı artırıyor olabilir", ok: true, why: "Ortak neden: büyük yangınlarda hem çok araç gelir hem hasar büyük olur." },
      { t: "İtfaiye araçları hasara neden oluyor", why: "Birlikte artmak sebep olmak demek değildir; mantıklı bir mekanizma yok." },
      { t: "Hasar arttığı için yangın çıkıyor", why: "Hasar yangından sonra oluşur; neden-sonuç ters kurulmuş." },
      { t: "İkisi arasında hiçbir ilişki yoktur", why: "Birlikte artıyorlar; ilişki var, yalnızca doğrudan sebep değil." }
    ], explain: "Karıştırıcı (ortak) değişken: iki değişkeni birlikte etkileyen üçüncü etken." },
  { id: "ms8", subject: "mat", q: "Doğrusal bir eğilim gösteren verilere eğilimden çok uzakta tek bir nokta eklenirse |r| genelde ne olur?",
    opts: [
      { t: "Azalır", ok: true, why: "Uzak nokta bulutu dağıtır; doğrusal ilişki daha zayıf görünür, |r| düşer." },
      { t: "Artar", why: "Eğilimden uzak bir nokta doğrusallığı güçlendirmez." },
      { t: "Hiç değişmez", why: "Tek bir uç nokta bile r'yi belirgin biçimde değiştirebilir (kaydırıcıda denedin)." },
      { t: "Her zaman 0 olur", why: "Etkisi güçlü olabilir ama r otomatik olarak 0 olmaz." }
    ], explain: "r aykırı değerlere duyarlıdır." },
  { id: "ms9", subject: "mat", q: "Hangisi iki niceliksel değişkenli veriye örnektir?",
    opts: [
      { t: "Her öğrencinin boy ve kilosu", ok: true, why: "Her gözlem için iki sayı (boy, kilo): iki niceliksel değişken." },
      { t: "Öğrencilerin en sevdiği renk", why: "Renk niteliksel (kategorik) bir değişken." },
      { t: "Öğrencilerin doğum şehri", why: "Şehir niteliksel bir değişken; ayrıca tek değişken." },
      { t: "Sınıf listesindeki sıra numaraları", why: "Tek bir değişken ve ölçme değil sıralama." }
    ], explain: "İki sayısal özellik, aynı gözlem." },
  { id: "ms10", subject: "mat", q: "Bir saçılım grafiğinde noktalar soldan sağa yükseliyor. Bu ilişki için ne denir?",
    opts: [
      { t: "Pozitif (aynı yönlü) ilişki", ok: true, why: "x arttıkça y de artma eğiliminde." },
      { t: "Negatif (ters yönlü) ilişki", why: "Negatif ilişkide noktalar sağa gittikçe aşağı iner." },
      { t: "İlişki yoktur", why: "Belirgin yükselen bir desen var." },
      { t: "x, y'nin nedenidir", why: "Yükselen desen sebebi kanıtlamaz." }
    ], explain: "Yön: yükselen → pozitif, inen → negatif." }
];
