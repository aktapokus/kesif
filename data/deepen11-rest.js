/* 11. sınıf Kimya (asit–baz, denge, çözünürlük), Biyoloji (2. Tema) ve Felsefe derslerine ek açıklama ve animasyon adımları. Özgün içerik (CC BY-NC-SA 4.0). Öğretmen/Opus doğrulaması beklenir. */
(function () {
  var D = KESIF.dsl, T = D.T, M = D.M, G = D.G, AN = D.AN, DEEP = D.DEEP;

  DEEP("kim11-denge", [
    T("Dinamik denge: sakin görünen ama hareketli", '<p>Kapalı kapta tersinir bir tepkimede başta yalnızca girenler varsa ileri tepkime hızlıdır. Ürün oluştukça geri tepkime başlar ve hızlanır; girenler azaldıkça ileri hız düşer. <b>İkisi eşitlenince</b> derişimler artık değişmez: <b>denge</b>. Ama tepkime durmaz; her saniye aynı sayıda tepkime ileri ve geri gerçekleşir.</p><p class="callout why"><b>Dünyadaki karşılığı:</b> Bir fabrikada saatte 100 ürün üretilip 100 ürün satılıyorsa depodaki stok sabit kalır ama üretim ve satış durmaz. Kapalı şişedeki gazlı içecek de CO₂’nin çözünüp çıkması arasında dengededir; kapağı açınca denge bozulur ve köpürür.</p>'),
    AN("denge", "Canlandırma: dinamik denge ve derişim eklemek")
  ]);
  DEEP("kim11-denge-sabiti", [
    T("K nasıl yazılır, neyi anlatır?", '<p>aA + bB ⇌ cC + dD için <b>K = [C]ᶜ[D]ᵈ / [A]ᵃ[B]ᵇ</b>. Saf katı ve sıvılar yazılmaz. K sıcaklığa bağlıdır.</p><ul class="body"><li><b>K ≫ 1:</b> denge ürünler yönünde; tepkime “çok ilerler”.</li><li><b>K ≪ 1:</b> girenler tercih edilir.</li><li><b>Q ile K:</b> Q anlık derişimlerle hesaplanır. Q < K ise ileri, Q > K ise geri yönde ilerler; Q = K dengedir.</li></ul><p class="callout why"><b>Örnek:</b> 2NO₂ ⇌ N₂O₄ için K = [N₂O₄]/[NO₂]². Dengede [N₂O₄] = 0,4 M, [NO₂] = 0,2 M ise K = 0,4/0,04 = 10. Dünyadaki karşılığı: endüstride amonyak üretimi gibi tepkimelerde K değeri verimi önceden tahmin etmeyi sağlar.</p>'),
    AN("denge", "Canlandırma: Q, K ve dengeye ulaşma")
  ]);
  DEEP("kim11-le-chatelier", [
    T("Le Chatelier ilkesi: sistem bozulmayı ‘azaltmak’ ister", '<table class="tbl"><thead><tr><th>Değişiklik</th><th>Denge nereye kayar?</th><th>K değişir mi?</th></tr></thead><tbody><tr><td>Giren eklenir</td><td>Ürün yönüne</td><td>Hayır</td></tr><tr><td>Ürün eklenir</td><td>Giren yönüne</td><td>Hayır</td></tr><tr><td>Hacim küçülür (basınç artar)</td><td>Gaz mol sayısı az olan yöne</td><td>Hayır</td></tr><tr><td>Sıcaklık artar</td><td>Endotermik yöne</td><td>Evet</td></tr><tr><td>Katalizör</td><td>Kaymaz (süreyi kısaltır)</td><td>Hayır</td></tr></tbody></table><p class="callout why"><b>Dünyadaki karşılığı:</b> Haber–Bosch amonyak sentezinde yüksek basınç kullanılır (4 mol → 2 mol gaz) ve ürün sürekli ayrılır; böylece denge hep ürün yönüne itilir.</p>')
  ]);
  DEEP("kim11-asit-baz-teorileri", [
    AN("flow", "Canlandırma: asit–baz tanımları", { mode: "tree", cap: "Üç ilke de asit–baz kavramını farklı genişlikte tanımlar.", nodes: [{ t: "Asit ve baz tanımları", s: "" }, { t: "Arrhenius", s: "Asit suda H⁺ verir, baz suda OH⁻ verir (yalnız sulu çözelti)." }, { t: "Brønsted–Lowry", s: "Asit proton verir, baz proton alır; NH₃ gibi OH⁻ içermeyenleri de kapsar." }, { t: "Eşlenik çift", s: "Birbirinden bir proton fark eden asit–baz: HCl/Cl⁻, NH₄⁺/NH₃." }] })
  ]);
  DEEP("kim11-asit-baz-kuvveti", [
    AN("asit", "Canlandırma: kuvvetli ve zayıf asit iyonlaşması"),
    T("pH’ı hesaplamak: iki yol", '<ul class="body"><li><b>Kuvvetli asit/baz:</b> tamamen iyonlaşır. 0,01 M HCl → [H₃O⁺] = 10⁻² → pH = 2. 0,01 M NaOH → [OH⁻] = 10⁻² → pOH = 2, pH = 12.</li><li><b>Zayıf asit (Ca/Ka > 100):</b> [H₃O⁺] = √(Ka·Ca). 0,1 M asit, Ka = 10⁻⁵ → √(10⁻⁶) = 10⁻³ → pH = 3.</li></ul><p class="callout why"><b>Neden zayıf asit için karekök?</b> HA ⇌ H⁺ + A⁻ dengesinde x kadar iyonlaşırsa Ka = x²/(Ca − x) ≈ x²/Ca; buradan x = √(Ka·Ca). Dünyadaki karşılığı: sirke (CH₃COOH) midene zarar vermeden yenebilir çünkü zayıf asittir; aynı derişimde HCl hasar verirdi.</p>')
  ]);
  DEEP("kim11-notrallesme", [
    AN("titrasyon", "Canlandırma: kuvvetli asit–kuvvetli baz titrasyonu"),
    T("Titrasyonda hesap nasıl yapılır?", '<p>Eşdeğerlik noktasında asidin verdiği H⁺ mol sayısı bazın verdiği OH⁻ mol sayısına eşittir: <b>Mₐ·Vₐ = M_b·V_b</b> (monofonksiyonel, kuvvetli). Örnek: 20 mL 0,1 M HCl’yi 40 mL NaOH nötrleştiriyor: 0,1·20 = M·40 ⇒ M = 0,05 M. İndikatör (fenolftalein) bu noktada renk değiştirerek bitişi gösterir. Kuvvetli asit–kuvvetli bazda eşdeğerlik noktasında pH ≈ 7’dir.</p><p class="callout why"><b>Dünyadaki karşılığı:</b> Gıda kontrolünde sütün asitliği, havuz suyunun pH ayarı ve ilaç kalite denetimleri titrasyonla yapılır.</p>')
  ]);
  DEEP("kim11-cozunurluk", [
    AN("flow", "Canlandırma: çözünürlük dengesi ve ortak iyon", { mode: "col", cap: "Az çözünen tuz doymuş çözeltide katı ile iyonları arasında dengededir; ortak iyon dengeyi katıya doğru kaydırır.", nodes: [{ t: "Katı tuz suya girer", s: "AgCl(k) ⇌ Ag⁺ + Cl⁻" }, { t: "Çözünme ve çökme dengelenir", s: "doymuş çözelti: Kçç = [Ag⁺][Cl⁻]" }, { t: "Ortak iyon eklenir (Cl⁻)", s: "denge geri (katı) yönüne kayar" }, { t: "Çözünürlük azalır", s: "saf sudakinden küçüktür" }] })
  ]);
  DEEP("kim11-yesil-hidrojen", [
    AN("flow", "Canlandırma: atıktan hidrojen üretimi", { mode: "col", cap: "Biyokütle atıkları mikroorganizmalarla fermente edilerek hidrojen elde edilebilir.", nodes: [{ t: "Organik atık", s: "meyve-sebze atığı, tarımsal artık" }, { t: "Fermantasyon", s: "oksijensiz ortamda mikroorganizmalar" }, { t: "Hidrojen gazı", s: "H₂ + organik asitler" }, { t: "Temiz yakıt", s: "yanınca yalnız su (yakıt pili)" }] })
  ]);
  DEEP("kim11-nano-plastik", [
    AN("flow", "Canlandırma: bir teknolojiyi eleştirel değerlendirme", { mode: "col", cap: "Fayda ve risk birlikte tartılır, kaynak doğrulanır.", nodes: [{ t: "İddia nedir?", s: "ürün ya da haber" }, { t: "Kaynak güvenilir mi?", s: "bilimsel makale, resmî kurum" }, { t: "Fayda ve risk", s: "sağlık, çevre, güvenlik" }, { t: "Karar ver, gerekirse güncelle", s: "yeni veriye açık ol" }] })
  ]);

  DEEP("biy11-sinir-endokrin", [
    AN("flow", "Canlandırma: iki haberleşme sistemi", { mode: "tree", cap: "Sinir hızlı ve kısa, hormon yavaş ama uzun etkilidir; hipotalamus ikisini bağlar.", nodes: [{ t: "Eş güdüm", s: "" }, { t: "Sinir sistemi", s: "Elektriksel impuls; hızlı, kısa süreli, belirli hedefe." }, { t: "Endokrin sistem", s: "Hormon, kan yoluyla; yavaş, uzun süreli, geniş etki." }] })
  ]);
  DEEP("biy11-dolasim-solunum-bosaltim", [
    AN("flow", "Canlandırma: koşarken sistemler birlikte nasıl çalışır?", { mode: "cycle", cap: "Koşunca CO₂ artar, solunum ve kalp hızlanır; kan pH’ı ve gaz dengesi korunur.", nodes: [{ t: "Kas çalışır", s: "CO₂ artar" }, { t: "Kan pH’ı düşer", s: "algılayıcılar fark eder" }, { t: "Solunum ve kalp hızlanır", s: "omurilik soğanı" }, { t: "CO₂ atılır, O₂ alınır", s: "denge geri gelir" }] })
  ]);
  DEEP("biy11-saglik-sorunlari", [
    AN("flow", "Canlandırma: kan şekeri neden dengelenemez?", { mode: "col", cap: "İnsülin eksikliği ya da etkisizliği kan şekerini yüksek bırakır.", nodes: [{ t: "Yemek yenir", s: "kan şekeri artar" }, { t: "İnsülin yetersiz/etkisiz", s: "diyabet" }, { t: "Hücreler şekeri alamaz", s: "kanda şeker yüksek kalır" }, { t: "Belirtiler", s: "çok su içme, sık idrar, yorgunluk" }] })
  ]);

  DEEP("fel11-metin", [
    AN("flow", "Canlandırma: felsefi metin yazma adımları", { mode: "col", cap: "İyi bir felsefi metin soru, görüş, gerekçe ve karşı görüşle kurulur.", nodes: [{ t: "Soru", s: "hangi felsefi problemi ele alıyorsun?" }, { t: "Görüş", s: "kendi cevabın (tez)" }, { t: "Gerekçe", s: "neden böyle düşünüyorsun?" }, { t: "Karşı görüş ve cevap", s: "karşıt düşünceyi değerlendir" }, { t: "Sonuç", s: "görüşünü yeniden ifade et" }] })
  ]);
  DEEP("fel11-edebiyat", [
    AN("flow", "Canlandırma: edebî eserden felsefi soruya", { mode: "col", cap: "Bir edebî metin okurken felsefi soru çıkarma yolu.", nodes: [{ t: "Metni oku", s: "olay, kişi, çatışma" }, { t: "Temayı belirle", s: "özgürlük, yalnızlık, adalet…" }, { t: "Felsefi soruya çevir", s: "‘Özgür olmak nedir?’" }, { t: "Gerekçeli cevap ver", s: "düşünürlerin görüşlerinden yararlan" }] })
  ]);
  DEEP("fel11-hayat-anlami", [
    AN("flow", "Canlandırma: hayatın anlamı sorusuna yaklaşımlar", { mode: "tree", cap: "Farklı düşünürler hayatın anlamına farklı yerden bakar.", nodes: [{ t: "Hayatın anlamı", s: "" }, { t: "Mutluluk", s: "iyi yaşam, erdem, haz" }, { t: "Kendini gerçekleştirme", s: "kendi olmak, özgürlük ve sorumluluk" }, { t: "Anlam üretmek", s: "anlamı bulmak yerine kendin yaratmak" }] })
  ]);
  DEEP("fel11-hukuk", [
    AN("flow", "Canlandırma: hukuk ile ahlak ilişkisi", { mode: "tree", cap: "Hukuk dışarıdan bir güçle uygulanır; ahlak içsel bağlılığa dayanır; ikisi kesişir.", nodes: [{ t: "Hukuk ve ahlak", s: "" }, { t: "Hukuk", s: "Yaptırımı devlet uygular; yazılıdır; herkes için bağlayıcıdır." }, { t: "Ahlak", s: "Yaptırımı vicdan ve toplum; içsel bağlılığa dayanır." }, { t: "Ortak alan", s: "Hırsızlık hem hukuka hem ahlaka aykırıdır." }] })
  ]);
})();
