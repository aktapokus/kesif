/* Soru bankası: 12. sınıf Fizik, 1. Ünite Çembersel Hareket. Her konu 4 çoktan seçmeli + 1 kısa cevaplı (açık uçlu, sayısal). g = 10 m/s², π = 3 (belirtilmedikçe).
   Açıklamalar “ne neyden gelir, neden böyle, günlük hayattaki karşılığı” biçiminde ayrıntılı yazılmıştır; yanlış seçenekler için “çoğu kişi neden bunu seçer, neden tutmaz” anlatılır. Özgün (CC BY-NC-SA 4.0). Öğretmen/Opus doğrulaması bekler. */
(function () {
  var QB = KESIF.dsl.QB, P = "12. sınıf Fizik · ";
  var a = QB("fiz", P + "Düzgün çembersel hareket", null, "fiz12-cembersel", [1, 3, 5], ["s11"], "fz12a");
  a.Q(1, "Düzgün çembersel hareket yapan bir cismin ivmesinin yönü nedir?", "Çemberin merkezine doğrudur.",
    "Düzgün çembersel harekette hızın büyüklüğü (sürat) sabittir ama hızın yönü her an değişir. Hız bir vektör olduğu için yön değişimi de ivmedir: hız vektörünün her an eğri yolun içine doğru döndüğünü hayal et; dönüşü yapan ivme çemberin merkezine bakar ve merkezcil ivme denir. Dünyadaki karşılığı: dönme dolapta sabit süratle dönerken bile koltuk seni sürekli merkeze doğru iter; bu yüzden gövdeni dışarı savrulur gibi hissedersin.",
    [["Hız yönündedir.", "Çoğu kişi ‘cisim ileri doğru gittiği için ivme de ileri’ sanır. Oysa hız yönündeki ivme süratin büyüklüğünü değiştirir; burada sürat sabittir. Hız çembere teğettir, ivme ise ona dik, merkeze doğrudur."],
     ["Merkezden dışa doğrudur.", "Dönen bir cisimde ‘dışarı savrulma’ hissi eylemsizlikten gelir: cisim doğrusal gitmek ister. Cisme gerçekte etki eden net kuvvet ve ivme merkeze doğrudur; ‘merkezkaç’ dışarıya doğru gerçek bir kuvvet değildir."],
     ["Sıfırdır.", "Sürat sabit olduğu için ‘ivme yok’ düşünülür. Ama ivme yalnızca sürat değişimi değil, hız vektörünün değişimidir. Yön sürekli değiştiği için a = v²/r sıfırdan farklıdır."]],
    "Hız vektör mü, skaler mi? Yönü değişiyor mu?", "Önce ‘hız hangi yönde, hangi yönde değişiyor?’ diye sor; değişim hep eğrinin iç tarafına doğrudur.",
    ["Hızın büyüklüğü sabit, yönü değişiyor: bu bir ivmedir.", "Yön her an çemberin içine doğru döner; bu yüzden ivme yönü merkezdir.", "Büyüklüğü a = v²/r (merkezcil ivme); net kuvvet de F = m·v²/r ile merkeze doğrudur."]);
  a.Q(2, "Periyodu 2 s olan çembersel hareketin frekansı kaç Hz’dir?", "0,5",
    "Periyot bir tam turun süresidir (s), frekans ise saniyedeki tur sayısıdır (Hz). Bir tur 2 saniye sürüyorsa saniyede yarım tur yapılır: f = 1/T = 1/2 = 0,5 Hz. Dünyadaki karşılığı: 60 saniyede bir tur atan saniye ibresinin frekansı 1/60 Hz’dir; periyot büyüdükçe frekans küçülür.",
    [["2", "2 sayısı periyodun kendisidir. Çoğu kişi verilen sayıyı olduğu gibi yazar; oysa frekans periyodun tersidir (f = 1/T)."],
     ["4", "Sayıyı iki katına çıkarmak (2·2) frekansla bir ilgi kurmaz. Periyodun artması frekansı azaltır; ters orantılıdırlar."],
     ["1", "T = 1 s olsaydı f = 1 Hz olurdu. Burada T = 2 s olduğundan saniyedeki tur sayısı yarım olur."]],
    "Birim: Hz = 1/s. Bir turun süresi 2 s ise 1 saniyede kaç tur?", "Periyot ile frekans ters orantılıdır: biri iki katına çıkarsa diğeri yarıya iner.",
    ["Verilen: T = 2 s.", "f = 1/T formülünü yaz.", "f = 1/2 = 0,5 Hz."]);
  a.Q(2, "Yarıçap ve kütle sabitken sürat 3 katına çıkarılırsa merkezcil kuvvet kaç katına çıkar?", "9",
    "Merkezcil kuvvet F = m·v²/r bağıntısına göre hızın karesiyle orantılıdır. Hız 3 katına çıkarsa v² değeri 3² = 9 kat artar, yani aynı çemberde dönebilmek için 9 kat büyük bir kuvvet gerekir. Dünyadaki karşılığı: araç virajı hızı iki katına çıkarsa lastiğin yol tutuşu için gereken kuvvet dört katına çıkar; bu yüzden yüksek hızda viraj tehlikelidir.",
    [["3", "Hız 3 kat olunca kuvvetin de 3 kat olacağı sanılır. Ama formülde v kare (v²) vardır; karenin etkisi unutulursa sonuç eksik kalır."],
     ["6", "3 ile 2’yi çarpmak gibi bir yol formülden çıkmaz. Kuvvet v’nin karesiyle büyür: 3² = 9."],
     ["1/9", "Ters orantı düşünülüyor olabilir. Oysa kuvvet hızla doğru orantılıdır (kareyle). Yarıçap ters orantılıdır, hız değil."]],
    "F = m·v²/r. Hızın üssü kaç?", "Oran sorularında sabit olanları sadeleştir, değişen niceliğin üssüne bak.",
    ["F = m·v²/r; m ve r sabit olduğundan F ∝ v².", "v → 3v olduğunda v² → (3v)² = 9v².", "Kuvvet 9 katına çıkar."]);
  a.Q(3, "Kütlesi 1 kg olan bir cisim r = 2 m yarıçaplı çemberde 4 m/s süratle dönüyor. Merkezcil kuvvet kaç N’dur?", "8",
    "Merkezcil kuvvet F = m·v²/r ile bulunur: F = 1·4²/2 = 16/2 = 8 N. Bu 8 N bir ipin gerilmesi, sürtünme ya da çekim gibi gerçek bir kuvvetin merkeze doğru bileşkesidir; ‘ayrı bir merkezcil kuvvet’ yoktur. Dünyadaki karşılığı: ipin ucundaki taşı çevirirken elinde hissettiğin çekme kuvveti tam olarak bu değerdedir.",
    [["2", "v/r = 4/2 = 2 işlemi yapılmış olabilir. Oysa formülde hızın karesi vardır: v² = 16, sonra r’ye bölünür."],
     ["16", "v² = 16 bulunduktan sonra r’ye bölmek unutulmuş. Yarıçap ters orantılıdır: 16/2 = 8."],
     ["4", "Sadece hız değerini alıp kuvvet sanmak ya da v²/r yerine v·r/… gibi karıştırmak bu cevaba götürür; sayıları formülün içine yerleştirerek ilerle."]],
    "Formülü yaz, sayıları sonra yerine koy.", "Önce birimleri kontrol et: kg·(m/s)²/m = kg·m/s² = N.",
    ["F = m·v²/r.", "F = 1·(4)²/2 = 16/2.", "F = 8 N."]);
  a.A(2, "Yarıçapı 5 m olan çembersel yolda 10 m/s süratle giden 2 kg’lık cisim için (a) merkezcil ivme kaç m/s²? (b) merkezcil kuvvet kaç N?", [{ label: "a (m/s²)", v: "20" }, { label: "F (N)", v: "40" }],
    "Önce ivmeyi, sonra Newton’un ikinci yasasıyla kuvveti bul.", "a = v²/r; sonra F = m·a.",
    ["Merkezcil ivme: a = v²/r = 10²/5 = 100/5 = 20 m/s². Bu, hızın yönünü her saniye değiştirmek için gereken ivmedir.", "Net kuvvet Newton’un ikinci yasasından F = m·a = 2·20 = 40 N’dur.", "Aynı sonuç F = m·v²/r = 2·100/5 = 40 N formülüyle de bulunur; iki yol birbirini doğrular.", "Dünyadaki karşılığı: 2 kg’lık bir cismi 5 m yarıçaplı bir çemberde 10 m/s ile döndürmek için 40 N kuvvet gerekir (yaklaşık 4 kg’lık bir ağırlığın yere uyguladığı kuvvet)."],
    [[1, "a = 20"], [1, "F = 40"]]);

  var b = QB("fiz", P + "Emniyetli dönüş", null, "fiz12-viraj", [1, 3, 5], ["s11"], "fz12b");
  b.Q(1, "Yatay bir virajda araç yoldan çıkmadan dönüyorsa merkezcil kuvveti hangisi sağlar?", "Sürtünme kuvveti",
    "Yatay bir yolda aracı çembersel yörüngede tutacak merkeze doğru yatay bir kuvvet gerekir. Ağırlık ve zeminin tepkisi düşey olduğundan bu işi yapamaz; tek yatay kuvvet lastikle yol arasındaki sürtünmedir. Dünyadaki karşılığı: buzlu yolda sürtünme azaldığı için araç virajı alamaz ve dışarı doğru kayar.",
    [["Ağırlık", "Ağırlık yere doğru düşey bir kuvvettir; yatay merkezcil kuvveti sağlayamaz."],
     ["Normal tepki", "Yatay yolda normal tepki düşeydir (ağırlığı dengeler). Yatay doğrultuda bir etkisi yoktur."],
     ["Motor kuvveti", "Motor kuvveti aracı ileri iter, yani hız yönündedir; merkeze doğru olmadığı için aracı döndürmez."]],
    "Merkeze doğru yatay hangi kuvvet var?", "Yatay doğrultuyu ayrı çiz: düşey kuvvetler birbirini dengeler, yatayda yalnız sürtünme kalır.",
    ["Yatay doğrultuda merkeze çeken tek kuvveti ara.", "Ağırlık ve normal tepki düşeydir.", "Bu kuvvet sürtünmedir."]);
  b.Q(2, "Yatay virajda μ = 0,4, r = 25 m ise en büyük emniyetli hız kaç m/s’dir? (g = 10)", "10",
    "Sürtünme kuvveti en fazla μ·m·g olabilir. Aracı virajda tutan merkezcil kuvvet m·v²/r olduğundan en büyük hızda μ·m·g = m·v²/r eşitliği kurulur; kütle sadeleşir ve v = √(μ·g·r) olur: √(0,4·10·25) = √100 = 10 m/s. Kütlenin sadeleşmesi önemli: ağır araç da hafif araç da aynı virajı aynı hızda alabilir. Dünyadaki karşılığı: viraj tabelalarındaki hız sınırları böyle hesaplanır.",
    [["5", "√100 yerine yanlışlıkla 10/2 gibi bir işlem yapılmış olabilir. Doğru işlem: 0,4·10·25 = 100 ve karekökü 10’dur."],
     ["25", "Yarıçap değeri hız sanılmış olabilir. Formül hıza ulaşmak için karekök gerektirir; r doğrudan hız değildir."],
     ["100", "√ alınmadan v² değeri yazılmış. v² = 100 olduğundan v = 10 m/s’dir."]],
    "Sürtünmenin sağlayabileceği en büyük kuvvet μ·m·g.", "Kütle iki tarafta da var, sadeleşir: bu yüzden formülde m yok.",
    ["En büyük sürtünme: f = μ·m·g (yatay yolda N = mg).", "Merkezcil kuvvet: m·v²/r. Eşitle: μ·m·g = m·v²/r ⇒ v² = μ·g·r.", "v² = 0,4·10·25 = 100 ⇒ v = 10 m/s."]);
  b.Q(2, "Aynı virajda yol ıslanıp μ küçülürse en büyük emniyetli hız nasıl değişir?", "Azalır.",
    "v_max = √(μ·g·r) bağıntısında hız, sürtünme katsayısının karekökü ile orantılıdır. Islak yolda μ küçüldüğü için aynı virajı almak için izin verilen en büyük hız da düşer. Dünyadaki karşılığı: yağmurda ve karda viraj hızını azaltmanın nedeni budur; yoksa lastik yolu tutamaz ve araç savrulur.",
    [["Artar.", "Daha az sürtünme daha hızlı gitmeyi sağlar gibi düşünülebilir; ama sürtünme aracı virajda tutan kuvvettir. Azalınca tutuş azalır."],
     ["Değişmez.", "Hız sınırı formülde μ’ye bağlıdır; μ değişirse sınır da değişir."],
     ["Sıfır olur.", "μ küçülür ama sıfır olmaz; hız sınırı sıfıra inmez, sadece azalır."]],
    "v = √(μ g r) formülünde μ’nin yeri nerede?", "‘Tutan kuvvet azaldıysa güvenli hız da azalır’ diye düşün.",
    ["v_max = √(μ·g·r).", "μ küçülürse karekök içi küçülür.", "En büyük emniyetli hız azalır."]);
  b.Q(3, "Sürtünmesiz eğimli virajda tan θ = v²/(g r) olduğuna göre hız iki katına çıkarsa tan θ kaç katına çıkar?", "4",
    "Eğimli virajda yolun yüzeyi araca eğik bir tepki uygular; bu tepkinin yatay bileşeni merkezcil kuvveti sağlar ve tan θ = v²/(g·r) bulunur. Hız 2 katına çıkarsa v² değeri 4 kat olur; sürtünmesiz dönebilmek için eğim açısının tanjantı 4 kat büyümelidir. Dünyadaki karşılığı: hızlı yarış pistlerinin virajları daha dik (yüksek eğimli) yapılır.",
    [["2", "Hız iki kat olunca tanjantın da iki kat olacağı düşünülür; fakat bağıntıda hızın karesi var (v²). Kare etkisi 4 yapar."],
     ["8", "2³ gibi bir üs yazılmış olabilir. Formülde üs 2’dir (v²), 3 değil."],
     ["1/4", "Ters orantı sanılmış. Tanjant hızın karesiyle doğru orantılıdır; hız artarsa eğim de artmalıdır."]],
    "Formülde v’nin üssü kaç?", "Oran sorusunda: (2v)² = 4v².",
    ["tan θ = v²/(g·r); g ve r sabit.", "v → 2v: tan θ ∝ (2v)² = 4v².", "tan θ dört katına çıkar."]);
  b.A(2, "Yarıçapı 0,9 m olan düşey çemberin en üst noktasından cismin düşmeden geçebilmesi için gereken en küçük hız kaç m/s’dir? (g = 10)", [{ label: "v (m/s)", v: "3" }],
    "En üst noktada tepki kuvveti sıfır olduğunda cisim en küçük hızdadır.", "Merkezcil kuvveti yalnız ağırlık sağlarsa mg = mv²/r.",
    ["En üst noktada merkez aşağıdadır; merkezcil kuvveti ağırlık ve (varsa) normal tepki sağlar: mg + N = mv²/r.", "Cismin yoldan ayrılmadan geçebilmesi için en küçük hızda N = 0 olur: mg = mv²/r ⇒ v² = g·r.", "v = √(g·r) = √(10·0,9) = √9 = 3 m/s.", "Dünyadaki karşılığı: lunaparkta ‘ölüm turu’ çemberinde araç en üstte bu değerin altına düşerse yoldan ayrılır; bu yüzden girişte yeterince hız verilir."],
    [[1, "v = 3"]]);

  var c = QB("fiz", P + "Dönerek öteleme hareketi", null, "fiz12-donerek-oteleme", [1, 3, 5], ["s11"], "fz12c");
  c.Q(1, "Öteleme hareketindeki ‘kuvvet’ kavramının dönme hareketindeki karşılığı hangisidir?", "Tork",
    "Düz yolda bir cismi hızlandıran şey kuvvettir (F = m·a). Dönme hareketinde cismin dönme hızını değiştiren şey torktur (τ = I·α): kuvvetin dönme eksenine olan uzaklıkla çarpımı. Anahtarla somunu sıkarken anahtarın ucundan itmen torkun uzaklığa bağlı olduğunu gösterir: kol uzadıkça aynı kuvvet daha büyük tork üretir. Öteleme–dönme eşleşmesi: x↔θ, v↔ω, a↔α, m↔I, F↔τ, p↔L.",
    [["Açısal hız", "Açısal hız (ω), ötelemedeki hıza (v) karşılık gelir; kuvvete değil."],
     ["Eylemsizlik momenti", "Eylemsizlik momenti (I) ötelemedeki kütlenin (m) karşılığıdır; yani eylemsizliğin ölçüsüdür, kuvvetin değil."],
     ["Açısal ivme", "Açısal ivme (α) ötelemedeki ivmeye (a) karşılık gelir; kuvvet, ivmenin nedenidir, kendisi değil."]],
    "Dönmeyi başlatan ya da değiştiren fiziksel nicelik hangisi?", "Eşleştirmeyi tablo gibi hatırla: m↔I, F↔τ, a↔α.",
    ["Öteleme: net kuvvet ivmenin nedenidir.", "Dönme: net tork açısal ivmenin nedenidir.", "Kuvvetin karşılığı tork."]);
  c.Q(2, "Eylemsizlik momenti I = Σmr² bağıntısına göre kütlesi sabit bir cismin I’sı hangisine bağlı olarak artar?", "Kütlenin dönme eksenine uzaklığı arttıkça",
    "I = Σ m·r² bağıntısı her kütle parçasının dönme eksenine uzaklığının karesiyle çarpıldığını gösterir. Kütle sabit kalıp eksenden uzaklaşırsa r² artar, eylemsizlik momenti büyür ve cismi döndürmek (ya da durdurmak) zorlaşır. Dünyadaki karşılığı: tezgâhtaki ince bir sopayı ortasından değil ucundan tutup çevirmek çok daha zordur; uzak kütle dönmeye daha çok direnir.",
    [["Hız arttıkça", "Hız dönme hareketinin bir sonucudur; eylemsizlik momenti ise cismin kütle dağılımına bağlı bir özelliğidir, hızdan bağımsızdır."],
     ["Açısal ivme arttıkça", "Açısal ivme, I ve tork ile belirlenir (τ = Iα). I açısal ivmeye bağlı değildir."],
     ["Sıcaklık arttıkça", "Eylemsizlik momentini kütle ve eksene uzaklık belirler; sıcaklık bu formülde yoktur."]],
    "Formüldeki değişkenler: m ve r. Hangisi değişince I değişir?", "‘Kütle nerede?’ sorusunu sor: eksene yakınsa kolay, uzaksa zor döner.",
    ["I = Σmr².", "Kütle sabit; r büyüdükçe r² büyür.", "Dolayısıyla I, kütlenin eksenden uzaklığı arttıkça artar."]);
  c.Q(2, "Aynı yükseklikten kaymadan yuvarlanarak bırakılan dolu silindir ve boş (ince cidarlı) silindir için hangisi doğrudur?", "Dolu silindir daha önce iner.",
    "İki silindir de aynı yükseklikten bırakıldığında aynı miktarda potansiyel enerji kaybeder: mgh. Bu enerji öteleme (½mv²) ve dönme (½Iω²) kinetik enerjisine bölünür. Boş silindirde kütle eksenden uzakta olduğu için I büyüktür ve enerjinin büyük kısmı dönmeye gider; dolu silindirde I daha küçük olduğundan daha çok enerji ötelemeye kalır, cisim daha hızlı iner. Dünyadaki karşılığı: eğik düzlemde bir konserve (dolu) ile bir boş teneke kutuyu yarıştırsan konserve kazanır.",
    [["Boş silindir daha önce iner.", "‘Boş olan daha hafif, hızlı iner’ düşünülür; ama kütle sadeleşir. Belirleyici olan kütle dağılımıdır: boşta kütle uçta olduğundan I büyük, öteleme yavaştır."],
     ["Aynı anda inerler.", "Serbest düşmede (kaymadan yuvarlanmayan) kütleden bağımsız olarak aynı sürede inilir. Yuvarlanmada ise I farklı olduğundan iniş süreleri de farklıdır."],
     ["İkisi de inmez.", "Eğim ve çekim varken cisim hareket eder; yuvarlanma için yeterli sürtünme olduğu varsayılır."]],
    "Enerji nereye gidiyor: öteleme mi, dönme mi?", "Eylemsizlik momenti küçük olan cisim enerjisinin çoğunu ötelemeye aktarır.",
    ["mgh enerjisi: ½mv² + ½Iω² olarak paylaşılır (v = ωr).", "Boş silindirde I = mr² (büyük), dolu silindirde I = ½mr² (küçük).", "Küçük I → dönmeye az enerji, ötelemeye çok enerji → dolu silindir daha hızlı iner."]);
  c.Q(3, "Eylemsizlik momenti 4 kg·m², açısal hızı 2 rad/s olan cismin dönme kinetik enerjisi kaç J’dür?", "8",
    "Dönen cismin kinetik enerjisi ötelemedeki ½mv² ifadesinin dönme karşılığıdır: K = ½·I·ω². Sayıları yerleştirirsek K = ½·4·2² = ½·4·4 = 8 J olur. Dünyadaki karşılığı: dönen bir volan (ağır tekerlek) ağır olduğu için enerji depolar; I büyük ve ω yüksekse depolanan enerji büyüktür.",
    [["16", "½ çarpanı unutulmuş. Doğru formül K = ½Iω²’dir; 4·4 = 16 bulunursa yarısı alınmamış olur."],
     ["4", "Sadece I değeri yazılmış olabilir. Kinetik enerji ω’nın karesine de bağlıdır."],
     ["2", "ω değeri enerji sanılmış. Enerji için I, ω² ve ½ birlikte hesaba katılmalıdır."]],
    "Öteleme formülünün dönme karşılığını yaz: ½mv² ↔ ½Iω².", "Önce formül, sonra sayılar, en sonda birim (J).",
    ["K = ½·I·ω².", "K = ½·4·(2)² = ½·4·4.", "K = 8 J."]);
  c.A(2, "Kütlesi 2 kg, yarıçapı 0,5 m olan bir halka (I = mr² alınız) 4 rad/s açısal hızla dönüyor. (a) I kaç kg·m²? (b) dönme kinetik enerjisi kaç J?", [{ label: "I (kg·m²)", v: "0,5", accept: ["0.5", "1/2"] }, { label: "K (J)", v: "4" }],
    "Önce I’yı kütle ve yarıçaptan bul.", "I = mr²; K = ½Iω².",
    ["Halkanın tüm kütlesi eksenden r uzaklıktadır: I = m·r² = 2·(0,5)² = 2·0,25 = 0,5 kg·m².", "Dönme kinetik enerjisi K = ½·I·ω² = ½·0,5·4² = ½·0,5·16 = 4 J.", "Dünyadaki karşılığı: aynı kütleli dolu bir disk için I = ½mr² = 0,25 olurdu, yani aynı hızda yarısı kadar enerji taşırdı; kütlenin uçta olması enerjiyi artırır."],
    [[1, "I = 0,5"], [1, "K = 4"]]);

  var d = QB("fiz", P + "Açısal momentum", null, "fiz12-acisal-momentum", [1, 3, 5], ["s11"], "fz12d");
  d.Q(1, "Net dış torkun sıfır olduğu bir sistemde hangi nicelik korunur?", "Açısal momentum",
    "Açısal momentumdaki değişim net tork ile belirlenir: τ = ΔL/Δt. Net tork sıfırsa ΔL = 0 olur, yani açısal momentum sabit kalır. Bu, ötelemedeki ‘net kuvvet sıfırsa çizgisel momentum korunur’ ifadesinin dönme karşılığıdır. Dünyadaki karşılığı: boşlukta dönen bir uzay istasyonu dışarıdan tork almadıkça dönme miktarını (L) korur.",
    [["Kinetik enerji", "Kinetik enerji her zaman korunmaz; sistem içinde iş yapılırsa (örneğin patenci kollarını çekerse) kinetik enerji değişebilir."],
     ["Açısal hız", "ω değişebilir; L = Iω çarpımı sabittir. I değişirse ω da değişir."],
     ["Hız", "Hız çizgisel bir niceliktir; dönme için korunumdan söz ederken L’ye bakılır. Çizgisel hız da genelde değişir."]],
    "τ = ΔL/Δt ilişkisini hatırla.", "‘Tork 0 ise …’ cümlesini tamamla.",
    ["Net dış tork τ = 0.", "τ = ΔL/Δt olduğundan ΔL = 0.", "Açısal momentum korunur."]);
  d.Q(2, "Dönen bir patenci kollarını kapatınca açısal hızı artar. Bunun nedeni hangisidir?", "I azalır, L = Iω korunduğu için ω artar.",
    "Kollar gövdeye yaklaşınca kütlenin dönme eksenine uzaklığı azalır; I = Σmr² küçülür. Dışarıdan tork olmadığından L = Iω sabittir; I azaldıysa ω artmak zorundadır. Bu sırada patenci kollarını çekerek iş yapar ve kinetik enerjisi artar. Dünyadaki karşılığı: dalgıç takla atarken vücudunu toplayarak hızlı döner, açılınca yavaşlayıp suya girer.",
    [["L artar.", "Dışarıdan tork olmadığı için açısal momentum değişmez; artan şey ω’dır."],
     ["Dış tork uygulanır.", "Patenci buzla çok az sürtünür; dönmeyi hızlandıran dış tork yoktur. Hızlanma içeriden kütle dağılımının değişmesinden gelir."],
     ["Kütlesi artar.", "Patencinin kütlesi değişmez; değişen kütlenin eksene uzaklığıdır, yani I."]],
    "L sabit; I küçüldü. Çarpım Iω nasıl sabit kalır?", "‘L = Iω sabit’ ise I ile ω ters orantılıdır.",
    ["Kollar kapanınca r küçülür, I küçülür.", "L = Iω sabit olduğundan ω büyür.", "Kinetik enerji de artar (kollar kapanırken iş yapılır)."]);
  d.Q(2, "L = mvr bağıntısına göre kütle ve hız sabitken yarıçap yarıya inerse açısal momentum nasıl olur?", "Yarıya iner.",
    "Noktasal bir cismin açısal momentumu çizgisel momentum ile yarıçapın çarpımıdır: L = (mv)·r. m ve v sabitken L doğrudan r ile orantılı olur; r yarıya inerse L de yarıya iner. (Dikkat: ‘L korunur’ denen durumda v sabit kalmaz, artar; burada ise v’nin sabit tutulduğu varsayılmıştır.) Dünyadaki karşılığı: uzun bir ipin ucunda dönen taşta ip kısalırsa ve hız aynı kalırsa dönme miktarı azalır.",
    [["Değişmez.", "‘L korunur’ bilgisi yanlış yerde kullanılmış. Korunum yalnızca dış tork yokken geçerlidir ve burada hız sabit tutuluyor; r değişirse L de değişir."],
     ["2 katına çıkar.", "Yarıçap küçüldü, büyümedi. L ile r doğru orantılıdır; r azalınca L azalır."],
     ["4 katına çıkar.", "L = mvr’de r’nin üssü 1’dir (r² değil). Dolayısıyla etki yarıya inmesi yönündedir."]],
    "L = mvr’de r’nin üssü kaç?", "Önce hangi niceliklerin sabit tutulduğunu yaz.",
    ["L = m·v·r; m ve v sabit.", "r → r/2 olursa L → L/2.", "Açısal momentum yarıya iner."]);
  d.Q(3, "Aşağıdakilerden hangisinde açısal momentumun korunumu görülmez?", "Sabit hızla düz yolda giden araba",
    "Açısal momentumun korunumu, dönme hareketi olan ve net dış torkun sıfır olduğu sistemlerde gözlenir. Düz yolda sabit hızla giden araba dönmediği için bu olay burada örnek değildir (çizgisel momentum korunumu söz konusudur). Diğer seçeneklerde cisim dönmekte ve kütle dağılımı değiştiği için ω değişmektedir. Dünyadaki karşılığı: buz patencisi, takla atan dalgıç ve dönen helikopter pervanesi açısal momentumla açıklanır.",
    [["Takla atan dalgıç", "Dalgıç dönmektedir ve vücut şeklini değiştirince I değiştiği için ω değişir; bu açısal momentumun korunumuna örnektir."],
     ["Dönen patenci", "Kollarını açıp kapadıkça ω değişir; L = Iω sabit kalır."],
     ["Dönen helikopter pervanesi", "Ana pervane döndükçe gövde ters yönde dönmek ister; kuyruk pervanesi bu torku dengeleyerek toplam açısal momentumu dengede tutar."]],
    "Hangisinde dönme hareketi yok?", "‘Dönme var mı?’ diye sor; yoksa açısal momentum örneği değildir.",
    ["Açısal momentum dönen cisimlerle ilgilidir.", "Düz yolda giden araba dönmüyor.", "Bu nedenle bu seçenek örnek değildir."]);
  d.A(2, "Kütlesi 3 kg olan cisim 2 m yarıçaplı çemberde 5 m/s süratle dönüyor. (a) Açısal momentumu kaç kg·m²/s? (b) Yarıçap 1 m’ye inerse (L korunur) hızı kaç m/s olur?", [{ label: "L", v: "30" }, { label: "v (m/s)", v: "10" }],
    "L = mvr; sonra korunum: L₁ = L₂.", "İkinci durumda m ve L aynı, r değişti.",
    ["Başlangıçta L = m·v·r = 3·5·2 = 30 kg·m²/s.", "Dış tork yoksa L korunur: 30 = m·v′·r′ = 3·v′·1.", "v′ = 30/3 = 10 m/s: yarıçap yarıya inince hız iki katına çıkar.", "Dünyadaki karşılığı: ipin ucundaki taşı çevirirken ipi kısaltırsan taş hızlanır; buz patencisinin kollarını kapatması aynı ilkedir."],
    [[1, "L = 30"], [1, "v = 10"]]);

  var e = QB("fiz", P + "Kütle çekim ve Kepler kanunları", null, "fiz12-kutle-cekim", [1, 3, 5], ["s11"], "fz12e");
  e.Q(1, "İki cisim arasındaki uzaklık 3 katına çıkarsa aralarındaki çekim kuvveti kaç katı olur?", "1/9",
    "Newton’un kütle çekim yasasına göre F = G·m₁·m₂/r²; kuvvet uzaklığın karesiyle ters orantılıdır. Uzaklık 3 katına çıkarsa r² değeri 9 katına çıkar ve kuvvet 1/9’una düşer. Bu ‘ters kare’ bağıntısı çekim kuvvetinin uzaklıkla çok hızlı zayıfladığını gösterir. Dünyadaki karşılığı: Dünya’dan 3 kat uzaklaşan (merkezden 3 kat) bir uydunun çekim ivmesi yüzeydekinin dokuzda biridir.",
    [["1/3", "Ters orantı doğru düşünülmüş ama karesi unutulmuş. Formülde r² var; 3 yerine 3² = 9 alınmalıdır."],
     ["3", "Uzaklık artınca kuvvetin de artacağı sanılmış. Çekim, uzaklaştıkça zayıflar."],
     ["9", "Kare doğru alınmış ama ters orantı atlanmış. Kuvvet r² ile azalır, artmaz."]],
    "F ∝ 1/r². Uzaklık 3 olunca r² kaç?", "Oran sorusunda: r → 3r, F → F/(3²).",
    ["F = G·m₁·m₂/r² (m₁, m₂ sabit).", "r → 3r olursa r² → 9r².", "F → F/9."]);
  e.Q(2, "Kepler’in ikinci kanunu (eşit alanlar) gezegenin yörüngesinde hangi sonuca yol açar?", "Güneş’e yakınken hızlı, uzakken yavaş hareket eder.",
    "Güneş ile gezegeni birleştiren doğru eşit sürelerde eşit alanlar tarar. Güneş’e yakınken yarıçap kısa olduğundan aynı alanı taramak için yayın daha uzun olması, yani gezegenin daha hızlı gitmesi gerekir; uzakken ise yarıçap uzun olduğundan yavaş gider. Bu aynı zamanda açısal momentumun korunumunun bir sonucudur (L = mvr sabit). Dünyadaki karşılığı: Dünya ocak başında Güneş’e en yakın (günberi) ve daha hızlıdır.",
    [["Hızı sabittir.", "Yörünge elips olduğu için uzaklık değişir; alan sabitliğini koruyabilmek için hız da değişir."],
     ["Güneş’e yakınken yavaştır.", "Çoğu kişi ‘yakınken çekim güçlü ama o yüzden zor ilerler’ sanır. Gerçekte yakınken hız büyüktür: L = mvr sabit, r küçüldükçe v büyür."],
     ["Hızı sıfırdır.", "Gezegen durmaz; sürekli hareket halindedir. Hız sıfırlanırsa Güneş’e düşerdi."]],
    "Güneş’e yaklaşan gezegen için r küçülüyor: L = mvr’de v ne olmalı?", "‘Eşit alan = yakınken geniş açı, uzakken dar açı’ diye hayal et.",
    ["Eşit sürede eşit alan taranır.", "Yakınken yarıçap kısa: alanı tarayabilmek için yay uzun, hız büyük olmalı.", "Uzakken hız küçüktür."]);
  e.Q(2, "Kepler’in üçüncü kanununa göre yörünge yarıçapı arttıkça gezegenin periyodu nasıl değişir?", "Artar.",
    "Üçüncü kanuna göre T²/r³ aynı merkez çevresinde dönen tüm cisimler için sabittir. Yarıçap büyüdükçe r³ büyür, dolayısıyla T² ve T de büyür. Uzaktaki gezegen hem daha uzun bir yol alır hem de daha yavaş hareket eder. Dünyadaki karşılığı: Dünya Güneş’in çevresini 1 yılda, Neptün ise yaklaşık 165 yılda dolanır.",
    [["Azalır.", "‘Büyük yörünge daha hızlı dönmeli’ sanılır; gerçekte uzak gezegen daha yavaştır ve yolu da uzundur, periyodu büyüktür."],
     ["Değişmez.", "Eğer T değişmeseydi tüm gezegenler Güneş’in çevresini aynı sürede dönerdi; oysa Merkür 88 günde, Dünya 365 günde döner."],
     ["Önce artar sonra azalır.", "T²/r³ sabit olduğundan periyot yarıçapla tek yönde, artarak değişir."]],
    "T²/r³ = sabit. r büyürse T²?", "Sabiti yaz ve hangi tarafın büyüdüğüne bak.",
    ["T²/r³ = k (sabit).", "r artarsa r³ artar, T² = k·r³ de artar.", "Periyot artar."]);
  e.Q(3, "Çekim potansiyel enerjisi U = −GMm/r için hangisi doğrudur?", "Cisim M’ye yaklaştıkça U azalır (daha negatif olur).",
    "Çekim potansiyel enerjisi sonsuzda sıfır kabul edilir. Cisim kütleye yaklaştıkça çekimle serbest kalan enerji kadar potansiyel enerji düşer ve eksi değerli olur: U = −GMm/r’de r küçüldükçe değer daha negatif hâle gelir. Bu, bağlı bir sistemde cismin kaçması için dışarıdan enerji verilmesi gerektiğini de gösterir. Dünyadaki karşılığı: bir roketi Dünya’dan koparmak için ‘kaçış hızı’ kazandırmak gerekir.",
    [["Yaklaştıkça artar.", "Yerçekimi potansiyelinin yükseklikle arttığı bilgisi karıştırılmış olabilir; fakat U = −GMm/r’de r küçülünce değer daha eksi olur, yani azalır."],
     ["Sonsuzda en küçüktür.", "Sonsuzda U = 0’dır ve yakındaki değerler eksi olduğundan sonsuz en büyüktür (0 > eksi değerler)."],
     ["Hep pozitiftir.", "Formülün başında eksi işaret vardır; çekimle bağlı sistemde enerji eksi olur."]],
    "U = −GMm/r ifadesinde r küçülünce kesir ne olur?", "Eksi işareti unutma: daha büyük kesir × eksi = daha küçük (daha negatif) sayı.",
    ["U = −GMm/r.", "r küçülürse GMm/r büyür, eksi işaretle U daha negatif olur.", "Yaklaştıkça U azalır."]);
  e.A(2, "Bir gezegenin yüzeyindeki çekim ivmesi 10 m/s²’dir. Gezegenin merkezinden yarıçapının 2 katı uzaklıktaki bir noktada çekim ivmesi kaç m/s²’dir? Yazınız.", [{ label: "g′ (m/s²)", v: "2,5", accept: ["2.5", "5/2"] }],
    "Çekim ivmesi uzaklığın karesiyle ters orantılıdır.", "g = GM/r²; r iki katı olursa?",
    ["Çekim ivmesi g = G·M/r² olduğundan g ∝ 1/r².", "r → 2r olduğunda g′ = G·M/(2r)² = GM/(4r²) = g/4.", "g′ = 10/4 = 2,5 m/s².", "Dünyadaki karşılığı: yüzeyden yarıçap kadar yükseldiğimizde (merkezden 2R) ağırlığımız dörtte birine düşer."],
    [[2, "g′ = 2,5"]]);
})();
