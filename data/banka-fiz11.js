/* Soru bankası: 11. sınıf Fizik, 1. Ünite — Serbest düşme. Maarif biçimi: durum/senaryo, veri yorumlama, hata analizi, kanıt ve deney tasarımı, açık uçlu. g = 10 m/s².
   Her soruda ipucu, "nasıl düşünmeliyiz" notu ve adım adım çözüm vardır. Özgün sorular (CC BY-NC-SA 4.0). meta.kn = konu adı. */
(function () {
  var M = (KESIF.meta = KESIF.meta || {}), H = (KESIF.help = KESIF.help || {});
  var KN = "11. sınıf Fizik · Serbest düşme", L = "fiz11-serbest-dusme";
  function Q(id, zor, q, right, rightWhy, wrongs, hint, think, steps, step) {
    var opts = [{ t: right, ok: true, why: rightWhy }];
    wrongs.forEach(function (w) { opts.push({ t: w[0], why: w[1] }); });
    KESIF.daily.push({ id: id, subject: "fiz", q: q, opts: opts, hint: hint, think: think, solution: steps });
    M[id] = { kn: KN, sinav: ["s11"], zor: zor, kaynak: "özgün", tur: "beceri temelli" };
    H[id] = { topic: { lesson: L, step: step || 1 } };
  }
  function A(id, zor, q, answers, hint, think, steps, rubric) {
    KESIF.daily.push({ id: id, subject: "fiz", type: "open", q: q, answers: answers, hint: hint, think: think, solution: steps, rubric: rubric, explain: "", opts: [] });
    M[id] = { kn: KN, sinav: ["s11"], zor: zor, kaynak: "özgün", tur: "açık uçlu" };
    H[id] = { topic: { lesson: L, step: 4 } };
  }
  Q("f11s1", 1, "Havası boşaltılmış bir odada aynı yükseklikten 1 kg ve 5 kg kütleli iki çelik bilye aynı anda serbest bırakılıyor. Bilyeler için hangisi doğrudur?",
    "İkisi de yere aynı anda çarpar.", "Havasız ortamda yalnızca yer çekimi etkir ve ivme (g) kütleye bağlı değildir; ikisinin ivmesi aynı, düşme süreleri eşittir.",
    [["5 kg'lık bilye daha önce çarpar.", "Büyük kütleye daha büyük kuvvet etki eder ama onu hızlandırmak da o oranda zordur; ivme değişmez."], ["1 kg'lık bilye daha önce çarpar.", "Küçük kütle daha hızlı hızlanmaz; ivme aynıdır."], ["Hangisinin önce çarpacağı bırakılma yüksekliğine bağlıdır.", "Yükseklik ikisi için de aynı; fark yaratacak bir değişken yok."]],
    "Havasız ortamda ivmeyi kütlenin değiştirip değiştirmediğini sor.", "Önce hangi kuvvetler var? Yalnız yer çekimi. Sonra: ivme kütleye bağlı mı? Hayır (g aynı). Bu yüzden süreler eşit.",
    ["Hava yok → hava direnci yok → yalnız yer çekimi.", "Serbest düşmede ivme g = 10 m/s², kütleye bağlı değil.", "İkisinin ivmesi ve yüksekliği aynı → düşme süreleri eşit."], 1);
  Q("f11s2", 1, "Bir cisim ilk hızsız serbest bırakılıyor ve yere 2 s sonra çarpıyor. Cismin bırakıldığı yükseklik kaç m'dir? (g = 10 m/s²)",
    "20 m", "h = ½·g·t² = ½ · 10 · 2² = 20 m.",
    [["10 m", "t² yerine t alınmış (½·10·2); süre karesi kullanılmalı."], ["40 m", "½ unutulmuş: g·t² = 10·4."], ["200 m", "Sayılar çarpılmış (10·2·10) ama formül kurulmamış."]],
    "Yolu bulmak için hangi formül? (h = ½·g·t²)", "Verilenler: t = 2 s, g = 10. İstenen: h. Formülü yaz, yerine koy, hesapla.",
    ["Formül: h = ½·g·t².", "h = ½ · 10 · 2² = 5 · 4 = 20 m."], 4);
  Q("f11s3", 2, "Bir cisim 80 m yükseklikten ilk hızsız bırakılıyor. Cismin yere çarpma hızı kaç m/s'dir? (g = 10 m/s²)",
    "40 m/s", "Önce süre: 80 = 5·t² → t = 4 s. Sonra hız: v = g·t = 10 · 4 = 40 m/s.",
    [["80 m/s", "Yükseklik hız sanılmış."], ["160 m/s", "h·2 gibi bir işlem yapılmış; hız v = g·t ile bulunur."], ["20 m/s", "t = 2 alınmış; 5·2² = 20 m olurdu, 80 m için t = 4 s."]],
    "Önce süreyi, sonra hızı bul: iki basamak.", "İki bilinmeyen ve iki formül var. Hangisini önce çözebiliyorum? Yüksekten süreyi bulurum.",
    ["h = 5·t² → 80 = 5·t² → t² = 16 → t = 4 s.", "v = g·t = 10 · 4 = 40 m/s."], 4);
  Q("f11s4", 1, "Serbest düşen bir cismin hızı kaç saniye sonra 50 m/s olur? (g = 10 m/s²)",
    "5 s", "v = g·t → 50 = 10·t → t = 5 s.",
    [["500 s", "Hız ile g çarpılmış; süre hızı g'ye bölerek bulunur."], ["0,2 s", "g ÷ v alınmış; ters bölme."], ["40 s", "Çıkarma yapılmış (50 − 10)."]],
    "Hız ile süre arasındaki formül: v = g·t.", "Her saniye hız 10 m/s artıyorsa 50 m/s'ye kaç saniyede çıkılır?",
    ["v = g·t.", "50 = 10 · t → t = 50 ÷ 10 = 5 s."], 1);
  Q("f11s5", 3, "Serbest düşen bir cisim 3. saniyede (yani t = 2 s ile t = 3 s arasında) kaç m yol alır? (g = 10 m/s²)",
    "25 m", "3 s'de toplam 45 m, 2 s'de toplam 20 m düşülür; fark 45 − 20 = 25 m. (Ardışık saniyelerdeki yollar 5, 15, 25, 35 … m.)",
    [["45 m", "Bu, ilk 3 s'in toplam yolu; yalnızca 3. saniyeyi sormuş."], ["15 m", "Bu 2. saniyedeki yol (20 − 5)."], ["5 m", "Bu 1. saniyedeki yol."]],
    "Önce 3 s ve 2 s sonundaki toplam yolları ayrı ayrı bul.", "'3. saniyede' ifadesi tek bir saniyeyi anlatır; toplam yolu değil fark yolu isteniyor.",
    ["3 s'de toplam: ½·10·3² = 45 m.", "2 s'de toplam: ½·10·2² = 20 m.", "3. saniyedeki yol: 45 − 20 = 25 m."], 4);
  Q("f11s6", 2, "Bir öğrenci serbest düşen cismin konumunu ölçüp tabloya yazıyor: 1 s → 5 m, 2 s → 20 m, 3 s → 45 m. Bu verilere göre hangi çıkarım doğrudur?",
    "Süre iki katına çıkınca düşülen yol dört katına çıkar.", "1 s → 5 m, 2 s → 20 m: süre 2 katına çıkmış, yol 4 katına çıkmış. 3 s için de aynı düzen (9 katı = 45 m). Yol, süre karesiyle orantılıdır.",
    [["Süre iki katına çıkınca yol da iki katına çıkar.", "Veriye bakarsan 5 → 20 dört kat."], ["Her saniye aynı miktarda yol alınır.", "Yollar 5, 15, 25 m: her saniye farklı."], ["Hız sabittir.", "Yol eşit zamanda eşit artmıyor; hız artıyor."]],
    "Süreler ve yollar arasındaki katları kıyasla (1→2, 1→3).", "Tümevarım: birkaç örnekten ortak düzen çıkar, sonra kural olarak yaz. Süreyi 2 kat yaptım → yol kaç kat oldu?",
    ["1 s → 5 m; 2 s → 20 m: 2 katı süre, 4 katı yol.", "3 s → 45 m: 3 katı süre, 9 katı yol.", "Yol ∝ t²."], 3);
  Q("f11s7", 2, "Bir öğrenci 'Serbest düşen cisim 3 s'de kaç m düşer?' sorusunu h = g·t² = 10 · 3² = 90 m diye çözüyor. Çözümdeki hata nedir?",
    "Formülde ½ çarpanı unutulmuş; doğru sonuç 45 m'dir.", "h = ½·g·t² olmalı; ½ unutulunca sonuç iki katı çıkar (90 yerine 45).",
    [["g = 10 yerine 9,8 alınmalıydı.", "Sınavda g = 10 kullanılır; asıl hata ½."], ["t = 3 s değil t = 6 s alınmalıydı.", "Süre doğru alınmış."], ["Hız formülü kullanılmalıydı.", "Yol sorulduğu için yol formülü doğru seçilmiş; içinde eksik var."]],
    "Formülü derste çıkarılan hâliyle karşılaştır.", "Hata analizinde önce hangi formülün kullanıldığına, sonra eksik çarpan ya da yanlış birim olup olmadığına bak.",
    ["Doğru formül: h = ½·g·t².", "Doğru sonuç: ½ · 10 · 9 = 45 m.", "Öğrenci ½'yi atmış."], 7);
  Q("f11s8", 2, "Bir öğrenci 'Serbest düşmede ivme kütleye bağlıdır mı?' sorusunu araştırıyor. Hangi deney bu soruyu en güvenilir biçimde yanıtlar?",
    "Havası alınmış bir tüpte farklı kütleli iki cismi aynı anda bırakıp düşme sürelerini ölçmek.", "Yalnızca kütle değişiyor; hava direnci ortadan kaldırıldığı için kütlenin etkisi başka değişkenle karışmıyor.",
    [["Bir kağıt parçası ile bir taşı açık havada bırakmak.", "Hava direnci de değişiyor; sonucu kütleye bağlayamayız."], ["Aynı taşı farklı yüksekliklerden bırakmak.", "Bu deney yüksekliğin etkisini sınar, kütleyi değil."], ["İki taşı farklı zamanlarda bırakmak.", "Zaman farkı ek bir değişken ekler; kütleyi ayırt etmez."]],
    "Deney tasarımında değiştirilecek tek değişken ne olmalı?", "Güvenilir deney: bağımsız değişken (kütle) değişir; diğerleri (yükseklik, hava, zaman) sabit tutulur.",
    ["Bağımsız değişken: kütle.", "Sabit tutulacaklar: yükseklik, bırakma anı, ortam (hava yok).", "Bu koşullarda süre farkı yalnız kütleden gelir."], 7);
  Q("f11s9", 3, "Serbest düşen bir cismin ilk saniyede aldığı yol 5 m'dir. Aynı cismin 4. saniyede aldığı yol kaç m'dir?",
    "35 m", "Ardışık saniyelerde alınan yollar 1 : 3 : 5 : 7 oranındadır: 5, 15, 25, 35 m. 4. saniye için 7 · 5 = 35 m.",
    [["20 m", "Bu 2 s sonunda toplam yol (4. saniye değil)."], ["80 m", "Bu 4 s sonunda toplam yol; yalnız 4. saniye isteniyor."], ["15 m", "Bu 2. saniyedeki yol."]],
    "Ardışık saniyeler için 1 : 3 : 5 : 7 oranını kullan.", "Toplam yol mu, tek saniyedeki yol mu isteniyor? 'Dördüncü saniyede' tek saniye.",
    ["Oran 1 : 3 : 5 : 7.", "1. saniye 5 m → 4. saniye 7 · 5 = 35 m.", "Kontrol: 80 − 45 = 35 m."], 4);
  Q("f11s10", 3, "Başka bir gezegende yer çekimi ivmesi 4 m/s²'dir. Bu gezegende serbest bırakılan bir cisim 2 s'de kaç m düşer?",
    "8 m", "h = ½·g·t² = ½ · 4 · 2² = 8 m. Formül aynı; yalnızca g değişti.",
    [["20 m", "Dünya'daki g = 10 kullanılmış."], ["16 m", "½ unutulmuş (4·2²)."], ["4 m", "t² yerine t alınmış (½·4·2)."]],
    "Formül aynı, g farklı. g'yi soruda verilen değerle değiştir.", "Yeni bir durumda önce neyin değiştiğine bak: yalnızca g. Formülün yapısı değişmez.",
    ["Formül: h = ½·g·t² (g'yi soru veriyor: 4).", "h = ½ · 4 · 4 = 8 m."], 4);
  A("f11o1", 2, "Bir cisim 125 m yükseklikten ilk hızsız bırakılıyor (g = 10 m/s²; hava direnci ihmal edilecek). Cismin yere varma süresini ve yere çarpma hızını bulunuz.",
    [{ label: "Süre (s)", v: "5" }, { label: "Çarpma hızı (m/s)", v: "50" }],
    "Önce h = ½·g·t² ile süreyi, sonra v = g·t ile hızı bul.", "İki aşamalı problem: bilinen yükseklikten süreyi bul, sonra hıza geç.",
    ["h = ½·g·t² → 125 = 5·t² → t² = 25 → t = 5 s.", "v = g·t = 10 · 5 = 50 m/s."],
    [[1, "h = ½·g·t² formülü yazıldı"], [1, "t = 5 s bulundu"], [1, "v = g·t formülü yazıldı"], [1, "v = 50 m/s bulundu"]]);
  A("f11o2", 3, "Bir balkondan serbest bırakılan top yere 2 s sonra çarpıyor (g = 10 m/s²). (a) Balkonun yerden yüksekliği kaç m'dir? (b) Top yere çarptığında hızı kaç m/s'dir? (c) Bırakıldıktan 1 s sonra top yerden kaç m yüksektedir?",
    [{ label: "Yükseklik (m)", v: "20" }, { label: "Çarpma hızı (m/s)", v: "20" }, { label: "1 s sonra yerden yükseklik (m)", v: "15" }],
    "(c) için önce 1 s'de ne kadar düştüğünü bul, sonra balkon yüksekliğinden çıkar.", "Aynı olayın üç ayrı büyüklüğü isteniyor. Her biri için hangi formül uygun? (c)'de 'düşülen yol' ile 'yerden yükseklik' karıştırılmamalı.",
    ["(a) h = ½·10·2² = 20 m.", "(b) v = g·t = 10 · 2 = 20 m/s.", "(c) 1 s'de düşülen yol: ½·10·1² = 5 m → yerden yükseklik 20 − 5 = 15 m."],
    [[1, "(a) h = ½·g·t² ile 20 m"], [1, "(b) v = g·t ile 20 m/s"], [1, "(c) 1 s'de düşülen yol 5 m bulundu"], [1, "(c) yerden yükseklik 20 − 5 = 15 m"]]);
})();
