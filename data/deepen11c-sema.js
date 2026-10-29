/* 11. sınıf: her derse tek bakışta görsel şema (akış ya da kavram haritası). SVG koyu/açık temada okunur. Özgün içerik (CC BY-NC-SA 4.0). */
(function () {
  var D = KESIF.dsl, T = D.T, DEEP = D.DEEP;
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;"); }
  function svg(kind, nodes) {
    var W = 420, bw = 360, bh = 40, gap = 26, h, out = [];
    if (kind === "hub") {
      var head = nodes[0], kids = nodes.slice(1); h = 56 + kids.length * (bh + 14) + 10;
      out.push('<rect x="60" y="6" width="300" height="44" rx="22" fill="var(--accent)"/><text x="210" y="34" text-anchor="middle" font-size="16" font-weight="700" fill="var(--accent-ink,#111)">' + esc(head) + '</text>');
      kids.forEach(function (k, i) {
        var y = 64 + i * (bh + 14);
        out.push('<path d="M210 50 V' + (y + bh / 2) + ' H30" stroke="var(--muted)" stroke-width="1.5" fill="none"/>');
        out.push('<rect x="30" y="' + y + '" width="' + bw + '" height="' + bh + '" rx="10" fill="var(--card2)" stroke="var(--line)"/><text x="46" y="' + (y + 25) + '" font-size="14" fill="var(--ink)">' + esc(k) + '</text>');
      });
    } else {
      h = nodes.length * (bh + gap) - gap + 12;
      nodes.forEach(function (k, i) {
        var y = 6 + i * (bh + gap), last = i === nodes.length - 1;
        out.push('<rect x="30" y="' + y + '" width="' + bw + '" height="' + bh + '" rx="10" fill="' + (last ? "var(--accent)" : "var(--card2)") + '" stroke="var(--line)"/><text x="210" y="' + (y + 25) + '" text-anchor="middle" font-size="14" font-weight="' + (last ? 700 : 500) + '" fill="' + (last ? "var(--accent-ink,#111)" : "var(--ink)") + '">' + esc(k) + '</text>');
        if (!last) out.push('<path d="M210 ' + (y + bh) + ' V' + (y + bh + gap - 6) + '" stroke="var(--muted)" stroke-width="2"/><path d="M204 ' + (y + bh + gap - 12) + ' L210 ' + (y + bh + gap - 4) + ' L216 ' + (y + bh + gap - 12) + '" fill="none" stroke="var(--muted)" stroke-width="2"/>');
      });
    }
    return '<svg viewBox="0 0 ' + W + ' ' + h + '" style="width:100%;max-width:460px;display:block;margin:6px auto" role="img" aria-label="Şema">' + out.join("") + '</svg>';
  }
  function S(id, title, kind, nodes) {
    DEEP(id, [T("Şema: " + title, '<p class="muted small">Konuyu tek bakışta özetleyen şema. ' + (kind === "hub" ? "Başlık ve altındaki başlıca bölümler." : "Adımlar yukarıdan aşağı sırayla ilerler.") + '</p>' + svg(kind, nodes))]);
  }

  /* ---- KİMYA ---- */
  S("kim11-enerji", "Isı alan ve veren olaylar", "hub", ["Enerji değişimi", "Endotermik: ısı alır (erime, buharlaşma, ΔH > 0)", "Ekzotermik: ısı verir (yanma, donma, ΔH < 0)", "Ölçüm: q = m·c·ΔT, ΔH = −q / n", "Diyagram: ΔH = ürün − giren"]);
  S("kim11-enerji-kaynagi", "Yakıtın enerji potansiyeli", "flow", ["Yakıt kütlesi (g)", "× ısıl değer (kJ/g)", "= açığa çıkan ısı Q (kJ)", "Q = m·c·ΔT ile sıcaklık artışı"]);
  S("kim11-bag-enerjisi", "Bağ enerjisiyle ΔH", "flow", ["Girenlerin bağlarını çiz ve say", "Kırılan bağlar: enerji harcanır (+)", "Oluşan bağlar: enerji açığa çıkar (−)", "ΔH = Σ kırılan − Σ oluşan"]);
  S("kim11-olusum-entalpisi", "Oluşum entalpisiyle ΔH", "flow", ["Denklemi dengele", "Elementler için ΔH°f = 0 yaz", "Σn·ΔH°f(ürün) − Σm·ΔH°f(giren)", "İşaret: − ise ekzotermik"]);
  S("kim11-carpisma", "Etkin çarpışma", "flow", ["Parçacıklar çarpışır", "Enerji ≥ Ea ve uygun doğrultu", "Etkin çarpışma", "Ürün oluşur (hız = etkin çarpışma sayısı)"]);
  S("kim11-ortalama-hiz", "Tepkime hızı", "hub", ["Hız = Δderişim / Δzaman", "Girenler: azalır (− işaret)", "Ürünler: artar", "Katsayı oranı: hızlar katsayıyla orantılı", "Grafik: eğimin mutlak değeri"]);
  S("kim11-hiz-faktorler", "Hızı etkileyenler", "hub", ["Hız faktörleri", "Derişim ↑ → çarpışma sıklığı ↑", "Sıcaklık ↑ → Ea’yı aşan parçacık ↑", "Temas yüzeyi ↑ → çarpışma yüzeyi ↑", "Katalizör → Ea ↓ (ΔH değişmez)"]);
  S("kim11-hiz-denklemi", "Hız denklemi", "flow", ["Deneyleri karşılaştır (tek derişim değişsin)", "Hız oranı = derişim oranı^derece", "Dereceyi bul: H = k[A]ᵐ[B]ⁿ", "k’yı bir deneyden hesapla (birimiyle)"]);

  /* ---- BİYOLOJİ ---- */
  S("biy11-homeostazi", "Homeostazi döngüsü", "flow", ["Değişim (uyaran)", "Algılayıcı (reseptör)", "Denetim merkezi (beyin/bez)", "Etkileyici (kas, bez, organ)", "Değer normale döner"]);
  S("biy11-geri-bildirim", "Geri bildirim türleri", "hub", ["Geri bildirim", "Negatif: değişimi ters yönde düzeltir (kan şekeri, ısı)", "Pozitif: değişimi büyütür (doğum, pıhtılaşma)", "Kan şekeri: insülin ↓, glukagon ↑"]);
  S("biy11-sinir-endokrin", "Sinir ve hormon", "hub", ["Eş güdüm", "Sinir: elektriksel impuls, çok hızlı, kısa süreli", "Endokrin: hormon, kanla, yavaş, uzun süreli", "Hipotalamus ikisini birbirine bağlar"]);
  S("biy11-dolasim-solunum-bosaltim", "Koşarken sistemler", "flow", ["Kas çalışır: O₂ ↓, CO₂ ↑", "Solunum merkezi uyarılır", "Soluk ve nabız hızlanır", "Terle su kaybı → ADH su tutar", "Homeostazi korunur"]);
  S("biy11-termoregulasyon", "Isı düzenleme", "hub", ["Hipotalamus (termostat)", "Soğuk: damar daralır, titreme, ısı üretimi ↑", "Sıcak: damar genişler, ter, ısı kaybı ↑", "Ektoterm: ısı çevreden, endoterm: kendinden"]);
  S("biy11-saglik-sorunlari", "Diyabet", "hub", ["Diyabet (yüksek kan şekeri)", "Tip 1: β hücreleri yok, insülin şart", "Tip 2: insülin direnci, yaşam tarzı", "Önlem: hareket, dengeli beslenme, kontrol"]);
  S("biy11-hormon", "Bitki hormonları", "hub", ["Bitki hormonları", "Oksin: uzama, apikal dominans", "Gibberellin: gövde uzaması, çimlenme", "Sitokinin: hücre bölünmesi", "ABA: dinlenme, stoma kapama • Etilen: olgunlaşma"]);
  S("biy11-tropizma", "Tropizma ve nasti", "hub", ["Bitkilerde tepki", "Tropizma: yöne bağlı (foto, jeo, hidro, tigmo)", "Nasti: yönden bağımsız (mimoza, lale)", "Gövde ışığa pozitif, kök yerçekimine pozitif"]);
  S("biy11-duyu", "Sinir impulsu", "flow", ["Reseptör uyarılır", "Eşik aşılır, Na⁺ girer (depolarizasyon)", "K⁺ çıkar (repolarizasyon)", "Sinapsta nörotransmitter salınır", "Sonraki nöron uyarılır"]);
  S("biy11-hayvan-sinir", "Sinir sistemi evrimi", "flow", ["Ağ tipi: hidra", "Merdiven tipi: planarya", "Ganglion zinciri: solucan, böcek", "Boru tipi: omurgalı (beyin+omurilik)"]);
  S("biy11-insan-sinir", "İnsan sinir sistemi", "hub", ["İnsan sinir sistemi", "MSS: beyin ve omurilik", "ÇSS: somatik (istemli) ve otonom (istem dışı)", "Otonom: sempatik (acil) ↔ parasempatik (dinlenme)"]);
  S("biy11-refleks", "Refleks yayı", "flow", ["Reseptör (uyaran)", "Duyu nöronu", "Omurilik (ara nöron)", "Motor nöron", "Efektör (kas): tepki"]);
  S("biy11-kas", "Kasılma", "flow", ["Motor nöron → asetilkolin", "Ca²⁺ serbest kalır", "Miyozin başı aktine bağlanır", "ATP ile aktin kayar (sarkomer kısalır)", "Ca²⁺ geri alınır: gevşeme"]);
  S("biy11-bagisiklik", "Üç savunma hattı", "flow", ["1. hat: deri, mukus, asit", "2. hat: fagositoz, iltihap, ateş", "3. hat: B ve T lenfosit, antikor", "Bellek hücresi: ikinci karşılaşmada hızlı tepki"]);
  S("biy11-tepki", "Uyaran–tepki", "flow", ["Uyaran", "Algı (reseptör)", "İletim (sinir/hormon)", "Tepki (hareket, büyüme, salgı)"]);

  /* ---- FİZİK ---- */
  S("fiz11-elektriksel-kuvvet", "Coulomb ve alan", "hub", ["Elektriksel etkileşim", "F = k·q₁q₂ / r² (ters kare)", "E = F / q = kQ / r²", "Aynı işaret iter, zıt işaret çeker", "İletkenin içinde E = 0 (Faraday kafesi)"]);
  S("fiz11-manyetik-alan", "Manyetik kuvvet", "hub", ["Manyetik alan B", "F = q·v·B·sinθ (yük)", "F = B·I·L·sinθ (akımlı tel)", "Yön: sağ el kuralı", "Kuvvet hıza dik → çembersel yörünge"]);
  S("fiz11-induksiyon", "İndüksiyon", "flow", ["Manyetik akı Φ değişir", "ε = −N·ΔΦ/Δt", "Lenz: değişime karşı koyan akım", "Elektrik enerjisi (dinamo, santral)"]);
  S("fiz11-transformator", "Trafo", "flow", ["Primer sargıya AC uygulanır", "Demir çekirdekte değişen akı", "Vp/Vs = Np/Ns", "Güç korunur: Vp·Ip = Vs·Is"]);
  S("fiz11-isik-sayilari", "Aydınlanma", "flow", ["Işık şiddeti I (cd)", "Akı Φ = 4πI (lm)", "Aydınlanma E = I / d² (lx)", "Uzaklık 2 kat → aydınlanma ¼"]);
  S("fiz11-duzlem-ayna", "Düzlem ayna görüntüsü", "hub", ["Düzlem ayna", "Görüntü simetrik, eşit uzaklık", "Sanal, düz, eşit boy, yan ters", "Tam boy için ayna = boyun yarısı", "İki ayna: n = 360/θ − 1"]);
  S("fiz11-kuresel-ayna", "Küresel aynalar", "hub", ["Küresel ayna", "f = R/2; çukur: toplar", "Merkez ötesi → ters, küçük, gerçek", "F içi → düz, büyük, sanal", "Tümsek: hep düz, küçük, sanal"]);
  S("fiz11-kirilma", "Kırılma ve tam yansıma", "flow", ["n = c / v; hız ortama göre değişir", "n₁ sinθ₁ = n₂ sinθ₂", "Yoğun → az yoğun: sınır açısı sinθc = n₂/n₁", "θ > θc: tam yansıma (fiber optik)"]);
  S("fiz11-prizma-mercek", "Mercekler", "hub", ["Mercekler", "Yakınsak: paralel ışın odakta toplanır", "2f ötesi → ters, küçük, gerçek", "f içi → düz, büyük, sanal (büyüteç)", "Iraksak: hep düz, küçük, sanal"]);
  S("fiz11-iki-boyut", "İki boyutlu hareket", "flow", ["Hareketi yatay ve düşey ayır", "Yatay: sabit hız x = v₀t", "Düşey: serbest düşme y = ½gt²", "Zaman ortak; bileşke hızı birleştir"]);
  S("fiz11-newton-yasalari", "Newton yasaları", "hub", ["Newton yasaları", "1. Eylemsizlik: ΣF = 0 → sabit hız", "2. ΣF = m·a", "3. Etki–tepki farklı cisimlerde", "Serbest cisim diyagramı çiz"]);
  S("fiz11-surtunme", "Sürtünme", "flow", ["F < μₛN: cisim durur, f = F", "F = μₛN: kaymanın eşiği", "F > μₛN: kayar, f = μₖN", "a = (F − μₖN) / m"]);
  S("fiz11-limit-hiz", "Limit hıza ulaşma", "flow", ["Düşme başlar: direnç küçük, ivme büyük", "Hız ↑ → hava direnci ↑", "Direnç = ağırlık: net kuvvet 0", "Sabit hız (limit hız)"]);
  S("fiz11-cembersel", "Çembersel hareket", "hub", ["Düzgün çembersel hareket", "Sürat sabit, yön değişir", "Merkezcil ivme a = v²/r", "Merkezcil kuvvet F = m·v²/r", "Kuvvet merkeze, hız teğete"]);
  S("fiz11-serbest-dusme", "Serbest düşme", "hub", ["Serbest düşme (g = 10)", "v = g·t", "h = ½·g·t²", "v² = 2gh", "Ardışık saniyeler: yol 1 : 3 : 5"]);

  /* ---- TARİH ---- */
  S("tar11-mucadele", "1683–1789", "flow", ["1683 II. Viyana: başarısız", "1699 Karlofça: ilk büyük toprak kaybı", "1739 Belgrad: geri alındı", "1774 Küçük Kaynarca: Kırım ve nüfuz kaybı"]);
  S("tar11-lale-devri", "Lale Devri", "flow", ["1718 Pasarofça: barış", "Avrupa ile temas, matbaa (1729)", "Saray israfı, halk üzerinde yük", "1730 Patrona Halil İsyanı"]);
  S("tar11-fransiz-ihtilali", "Fransız İhtilali", "flow", ["Eşitsizlik, mali kriz, Aydınlanma", "1789 Bastille, Haklar Bildirisi", "Cumhuriyet, Terör dönemi", "Milliyetçilik ve eşitlik fikri yayılır"]);
  S("tar11-osmanli-donusum", "Reform çizgisi", "flow", ["III. Selim: Nizam-ı Cedid", "II. Mahmud: Sened-i İttifak, Yeniçeri kaldırıldı", "1839 Tanzimat, 1856 Islahat", "1876 Kanun-ı Esasi, 1908 II. Meşrutiyet"]);
  S("tar11-bilim-teknoloji", "Yeni teknolojiler", "hub", ["Telgraf, demiryolu, fotoğraf", "Haberleşme ve merkez denetimi", "Ticaret ve askerî sevkiyat", "Zorluk: yabancı sermaye ve borç"]);
  S("tar11-sanayilesme-cabalari", "Sanayileşme sorunları", "hub", ["Sanayileşme çabaları", "Sorun: sermaye, kapitülasyon, teknik bilgi", "Çözüm: devlet fabrikaları, teknik okul", "Sonuç: yetersiz finansman ve savaşlar"]);
  S("tar11-siyasi-askeri-1908", "1908–1918", "flow", ["1908 II. Meşrutiyet", "1911–13 Trablusgarp, Balkan Savaşları", "1914 I. Dünya Savaşı, 1915 Çanakkale", "1918 Mondros Ateşkesi"]);
  S("tar11-goc-salgin", "Savaşın toplumsal yüzü", "hub", ["Savaşın sonuçları", "Göç: 93 Harbi, Balkan Savaşları", "Salgın: tifüs, kolera, sıtma", "Ekonomik zayıflama, iskân çalışmaları"]);
  S("tar11-lale-devri", "Lale Devri", "flow", ["1718 Pasarofça: barış", "Avrupa ile temas, matbaa (1729)", "Saray israfı, halk üzerinde yük", "1730 Patrona Halil İsyanı"]);
  S("tar11-depremler", "1755 ve 1766", "hub", ["Depremler ve toplum", "1755 Lizbon: tsunami, Aydınlanma tartışması", "1766 İstanbul: yeniden inşa ve yardım", "Ortak: devletin rolü"]);
  S("tar11-sanayi-devrimi", "Sanayi Devrimi", "flow", ["İngiltere: kömür, sermaye, buluş", "Buhar makinesi ve fabrika", "Kentleşme, işçi sınıfı", "Sömürgecilik ve Osmanlı pazarına etki"]);
  S("tar11-insanlik-katki", "Osmanlı’nın katkıları", "hub", ["Katkılar", "Hoşgörü: 1492 Yahudilerin kabulü", "Mimari: Mimar Sinan", "Vakıf: eğitim ve sağlık hizmeti"]);

  /* ---- FELSEFE ---- */
  S("fel11-metin", "Felsefi metin", "flow", ["Problem", "Tez", "Argüman + örnek", "Karşı görüş ve yanıt", "Sonuç"]);
  S("fel11-teknoloji", "Teknoloji ve değer", "hub", ["Teknoloji", "Araçsal bakış: nötr araç", "Yabancılaşma", "Etik sorumluluk, gizlilik, özerklik"]);
  S("fel11-akil-inanc", "Akıl ve inanç", "hub", ["Akıl–inanç", "Uyum: Farabi, İbn Rüşd, Aquinas", "İnancın önceliği: Kierkegaard", "Aklın önceliği: Aydınlanma"]);
  S("fel11-edebiyat", "Edebiyat ve felsefe", "hub", ["Ortak sorular", "Felsefe: kavram ve argüman", "Edebiyat: hikâye ve imge", "Sartre, Camus, Yunus Emre"]);
  S("fel11-hayat-anlami", "Mutluluk görüşleri", "hub", ["Hayatın anlamı", "Hedonizm: Epikür", "Erdem etiği: Aristoteles", "Stoacılık", "Varoluşçuluk: Sartre"]);
  S("fel11-hukuk", "Hukukun kaynağı", "hub", ["Hukuk", "Doğal hukuk: akıl ve adalet", "Pozitivizm: yetkili otoritenin kuralı", "Toplum sözleşmesi: halkın onayı"]);
  S("fel11-cevre", "Çevre etiği", "hub", ["Doğanın değeri", "İnsan merkezli", "Canlı merkezli", "Ekosistem merkezli (Leopold)", "Gelecek kuşak sorumluluğu (Jonas)"]);

  /* ---- EDEBİYAT ---- */
  S("edeb11-karagoz", "Karagöz oyunu", "flow", ["Mukaddime: Hacivat’ın girişi", "Muhavere: Hacivat–Karagöz konuşması", "Fasıl: asıl oyun", "Bitiş: kapanış"]);
  S("edeb11-mektup-dilekce", "Dilekçe", "flow", ["Makam (hitap)", "Metin: konu ve gerekçe", "Dilek: gereğini arz ederim", "Tarih, ad–soyad, imza, adres"]);
  S("edeb11-eposta", "E-posta", "flow", ["Konu satırı", "Hitap", "Giriş: amaç", "Gelişme", "Kapanış ve ad–soyad"]);
  S("edeb11-fiilimsi", "Fiilimsiler", "hub", ["Fiilimsi", "İsim-fiil: -mak, -ma, -ış", "Sıfat-fiil: -an, -dık, -ecek, -mış", "Zarf-fiil: -ıp, -arak, -ince, -ken"]);
  S("edeb11-hikaye-ani", "Fiil çatısı", "hub", ["Çatı", "Etken • Edilgen", "Dönüşlü • İşteş", "Ettirgen"]);
  S("edeb11-orhun-dlt", "Orhun ve DLT", "flow", ["8. yy: Orhun Abideleri", "1893: Thomsen okudu", "11. yy: Kâşgarlı Mahmud", "Dîvânu Lugâti’t-Türk: ilk Türkçe sözlük"]);

  /* ---- İNGİLİZCE ---- */
  S("ing11-job-ads", "Reading a job ad", "flow", ["Read the requirements", "Underline the candidate’s skills", "Match skills and requirements", "Choose the best candidate"]);
  S("ing11-entrepreneurs", "Finding the main idea", "flow", ["Read the title", "Find each topic sentence", "Find what they share", "Choose the general idea"]);
  S("ing11-cv-letter", "CV and letter", "hub", ["Application", "CV: details, education, skills", "Letter: Dear Sir/Madam", "Close: Yours faithfully"]);
  S("ing11-paraphrase", "Paraphrasing", "flow", ["Read the sentence", "Keep the meaning", "Change words and structure", "Check: same meaning?"]);
  S("ing11-listening", "Listening", "flow", ["Read the questions first", "Guess the information type", "Listen for key words", "Choose the answer"]);
  S("ing11-future-plans", "Future forms", "hub", ["Future", "will: decision now, prediction", "be going to: plan, evidence", "Present continuous: arrangement"]);

  /* ---- COĞRAFYA ---- */
  S("cog11-sorunlar", "Mekânsal sorun", "flow", ["Sorunu tanımla", "Doğal ve beşerî nedenler", "Etkiler", "Çözüm önerileri"]);
  S("cog11-cbs", "CBS katmanları", "flow", ["Katmanlar: yol, nehir, nüfus", "Aynı koordinatta birleştirme", "Analiz", "Karar (afet, ulaşım, planlama)"]);
  S("cog11-su-kaynaklari", "Su kaynakları", "hub", ["Su kaynakları", "Yerüstü: akarsu, göl, deniz, buzul", "Yeraltı: kaynak, kuyu", "Yapay: baraj, gölet"]);
  S("cog11-su-etkileri", "Suyun etkisi", "hub", ["Su kaynaklarının etkisi", "Tarım: sulama", "Enerji: hidroelektrik", "Yerleşme ve turizm", "Risk: sel ve kuraklık"]);
  S("cog11-yerlesme-organizasyon", "Yerleşme basamakları", "flow", ["Köy: günlük ihtiyaç", "İlçe: orta düzey hizmet", "İl: üst düzey hizmet", "Metropol: en geniş etki alanı"]);
  S("cog11-etki-alani", "Etki alanı", "hub", ["Etki alanını belirler", "Hizmet çeşitliliği", "Ulaşım ağı", "Rakip merkezler", "Nüfus ve ekonomi"]);
  S("cog11-gida-guvencesi", "Gıda güvencesi", "hub", ["Gıda güvencesi", "Bulunabilirlik", "Erişilebilirlik", "Kullanım", "İstikrar"]);
  S("cog11-surdurulebilir-tarim", "Sürdürülebilir tarım", "hub", ["Sürdürülebilir tarım", "Damla sulama", "Ekim nöbeti", "Organik tarım", "Toprak koruma"]);
  S("cog11-kritik-madenler", "Kritik madenler", "hub", ["Kritik madenler", "Lityum: batarya", "Nadir toprak: elektronik, mıknatıs", "Bor: Türkiye rezervi", "Tedarik zinciri riski"]);

  /* ---- DKAB ---- */
  S("dkab11-kader", "Kader ve irade", "hub", ["Kader", "İlim: Allah önceden bilir", "Cüz’î irade: insan seçer", "Sorumluluk insana aittir", "Tevekkül: çalış, sonucu bırak"]);
  S("dkab11-akil-irade", "Akıl, irade, sorumluluk", "flow", ["Akıl: ayırt etme", "İrade: seçim", "Eylem", "Sorumluluk"]);
  S("dkab11-ayetler", "Ayetlerin mesajı", "hub", ["Ayetler", "Bakara 286: sorumluluk güçle orantılı", "Âl-i İmrân 190–191: tefekkür"]);
  S("dkab11-din-tanimlari", "Din tanımları", "hub", ["Din", "Dinî: hayat rehberi", "Sosyolojik: toplumu birleştirir", "Psikolojik: huzur ve anlam", "Felsefi: anlam arayışı"]);
  S("dkab11-din-felsefe-bilim", "Üç alan", "hub", ["Din–felsefe–bilim", "Din: vahiy, anlam ve amaç", "Felsefe: akıl yürütme", "Bilim: gözlem ve deney"]);
  S("dkab11-din-sanat", "Din ve sanat", "hub", ["Din ve sanat", "Mimari: cami", "Hat ve tezhip", "Musiki ve edebiyat", "Çini ve süsleme"]);
  S("dkab11-medeniyet", "Medeniyet", "hub", ["İslam medeniyeti", "Bilim: Harezmî, İbn Sînâ", "Kurum: medrese, vakıf", "Mimari ve değerler"]);

  /* ---- MATEMATİK ---- */
  S("m11-1-1", "Korelasyon", "flow", ["İki değişkenin verisi", "Saçılım grafiği", "r hesapla (−1 ile 1)", "Yönü ve gücü yorumla", "İlişki ≠ neden–sonuç"]);
  S("m11-1-2", "Veriyi sorgula", "flow", ["Örneklem temsil edici mi?", "Grafik ölçeği dürüst mü?", "Ortak neden var mı?", "Sonuca ne kadar güvenilir?"]);
  S("m11-2-1", "Dörtgen köşegenleri", "hub", ["Köşegen özellikleri", "Paralelkenar: ortalar", "Dikdörtgen: eşit", "Eşkenar dörtgen: dik ve açıortay", "Deltoid: dik; ikizkenar yamuk: eşit"]);
  S("m11-2-2", "Dörtgen hiyerarşisi", "flow", ["Dörtgen", "Yamuk / Paralelkenar", "Dikdörtgen, Eşkenar dörtgen", "Kare"]);
  S("m11-2-3", "Çokgen türleri", "hub", ["Çokgen", "Dışbükey: tüm iç açı < 180°", "İçbükey: en az bir iç açı > 180°", "Düzgün: kenar ve açılar eşit"]);
  S("m11-2-4", "Çokgen formülleri", "hub", ["n kenarlı çokgen", "İç açılar: (n−2)·180°", "Dış açılar: 360°", "Köşegen: n(n−3)/2", "Düzgün: iç açı (n−2)·180/n"]);
  S("m11-2-5", "Problem çözme", "flow", ["Şekli çiz", "Bilinenleri yaz", "Formül seç", "Çöz ve kontrol et"]);
  S("m11-3-1", "Birim çember", "hub", ["Birim çember", "(cosθ, sinθ) noktası", "Bölgelere göre işaret", "Özel açı: 30°, 45°, 60°", "π rad = 180°"]);
  S("m11-3-2", "Trigonometrik denklem", "flow", ["Temel denkleme getir", "Referans açıyı bul", "Bölgelere göre çözümler", "Aralığa göre seç"]);
  S("m11-4-1", "Üstel fonksiyon", "hub", ["f(x) = aˣ", "a > 1: artan (büyüme)", "0 < a < 1: azalan (sönme)", "(0,1) noktası, x ekseni asimptot"]);
  S("m11-4-2", "Logaritma", "flow", ["aᶜ = b", "c = logₐb", "Üstel ↔ logaritma (ters)", "log(xy) = log x + log y"]);
  S("m11-4-3", "Logaritma özellikleri", "hub", ["Özellikler", "Çarpım → toplam", "Bölüm → fark", "Üs → çarpan", "Taban değiştirme"]);
  S("m11-4-4", "Denklem çözümü", "flow", ["Tabanları eşitle ya da log al", "Çöz", "Tanım kümesini kontrol et", "Eşitsizlikte tabana dikkat"]);
  S("m11-5-1", "Bileşke", "flow", ["x", "g(x) önce", "f(g(x)) sonra", "(f∘g)(x)"]);
  S("m11-5-2", "Dört işlem", "hub", ["(f ◦ g)(x)", "Toplama, çıkarma, çarpma", "Bölme: g(x) ≠ 0", "Tanım kümesi kesişim"]);
  S("mat-limit", "Limit", "flow", ["x, a’ya soldan yaklaşır", "x, a’ya sağdan yaklaşır", "İkisi eşitse limit vardır", "Değer olmasa da limit olabilir"]);
  S("mat-trig-cember", "Dönme dolap", "flow", ["Açı θ", "Yükseklik y = h + r·sinθ", "Periyot 360°", "Salınım: h−r ile h+r"]);
  S("mat-ustel-log", "Üstel büyüme", "flow", ["N = N₀·2ᵗ", "Süreyi bul: logaritma", "t = log₂(N/N₀)", "Doğadaki karşılık: bakteri, faiz"]);
  S("mat-cokgen", "Bal peteği", "flow", ["Altıgen iç açı 120°", "3 × 120° = 360°", "Boşluk kalmadan döşenir", "Malzeme ve yer tasarrufu"]);
  S("mat-iki-degisken", "İki değişken", "flow", ["Veri çiftleri", "Saçılım grafiği", "Yön ve güç", "İlişki ≠ neden–sonuç"]);
  S("mat-veri-inceleme", "Grafiği sorgula", "flow", ["Kaynak kim?", "Ölçek ve eksenler", "Örneklem", "Sonuç destekleniyor mu?"]);
  S("kim11-denge", "Kimyasal denge", "flow", ["Tersinir tepkime", "İleri hız = geri hız", "Derişimler sabit kalır", "Denge hâlinde tepkime sürer"]);
  S("kim11-denge-sabiti", "Denge sabiti", "flow", ["aA + bB ⇌ cC + dD", "K = [C]ᶜ[D]ᵈ / [A]ᵃ[B]ᵇ", "Katı ve sıvı yazılmaz", "K büyük: ürün ağırlıklı"]);
  S("kim11-le-chatelier", "Le Chatelier", "flow", ["Dengeye etki (derişim, sıcaklık, basınç)", "Sistem etkiyi azaltmaya çalışır", "Denge kayar", "Katalizör dengeyi kaydırmaz"]);
  S("kim11-su-ph", "Suyun iyonlaşması ve pH", "flow", ["H₂O ⇌ H⁺ + OH⁻", "Kw = [H⁺][OH⁻] = 10⁻¹⁴", "pH = −log[H⁺]", "pH + pOH = 14"]);
  S("kim11-asit-baz-teorileri", "Asit-baz teorileri", "hub", ["Asit-baz", "Arrhenius: H⁺ / OH⁻ verir", "Brønsted-Lowry: proton verir / alır", "Lewis: elektron çifti alır / verir"]);
  S("kim11-asit-baz-kuvveti", "Asit-baz kuvveti", "hub", ["Kuvvet", "Kuvvetli: tamamen iyonlaşır", "Zayıf: kısmen iyonlaşır (Ka, Kb)", "Kuvvet ≠ derişim"]);
  S("kim11-notrallesme", "Nötralleşme", "flow", ["Asit + baz", "H⁺ + OH⁻ → H₂O", "Tuz oluşur, ısı açığa çıkar", "Eşdeğerlik noktası: n(H⁺) = n(OH⁻)"]);
  S("kim11-cozunurluk", "Çözünürlük dengesi", "flow", ["Az çözünen tuz", "Katı ⇌ iyonlar", "Kçç = iyonların çarpımı", "Ortak iyon çözünürlüğü azaltır"]);
  S("kim11-yesil-hidrojen", "Yeşil hidrojen", "flow", ["Yenilenebilir elektrik", "Elektroliz: su → H₂ + O₂", "Depolama ve taşıma", "Yakıt hücresi: elektrik + su"]);
  S("kim11-nano-plastik", "Nano ve plastik", "hub", ["Nanomalzeme ve plastik", "Nano: 1–100 nm, yüzey etkisi", "Plastik: uzun ömürlü polimer", "Sorun: mikroplastik, geri dönüşüm"]);
})();
