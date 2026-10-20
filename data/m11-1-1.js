/* 11. sınıf Matematik, 1. Tema İstatistiksel Araştırma Süreci — MAT.11.1.1 İki nicel değişkenli veriler (konu anlatımı, sıfırdan).
   Kaynak: tymm.meb.gov.tr/matematik-dersi/unite/298 (içerik çerçevesi ve açıklamalar). Programdaki sınırlar: korelasyon katsayısı formülle hesaplatılmaz (araç/yazılım hesaplar),
   regresyon analizi yer almaz; önce "bölgelere göre sayım oranı", sonra serpme diyagramı ve korelasyon katsayısı; ilişki ≠ neden-sonuç; aykırı değer korelasyonu etkiler.
   Veri kümeleri öğretim için UYDURULMUŞTUR. Standart: docs/DERS-STANDARDI.md. Özgün içerik (CC BY-NC-SA 4.0). */
(function () {
  var old = KESIF.lessons["mat-iki-degisken"].steps;
  var SETS1 = old[1].cfg.sets, SETS2 = old[4].cfg.sets, SETS3 = old[9].cfg.sets;
  KESIF.lessons["mat-iki-degisken"].hidden = true; /* yerine geçti: bu ders; yardım bağlantıları eski adımlara hâlâ gidebilir */
  KESIF.lessons["m11-1-1"] = {
    id: "m11-1-1", subject: "mat", title: "İki nicel değişken arasında ilişki var mı?", minutes: 25,
    grade: "11. sınıf Matematik, 1. Tema İstatistiksel Araştırma Süreci, MAT.11.1.1 (Maarif: veriyle çalışma ve veriye dayalı karar verme)",
    hook: "Telefonda geçirdiğin süre ile uyku süren arasında bir ilişki var mı? Bunu nasıl anlarsın?",
    steps: [
      { type: "mcq", predict: true, q: "Aşağıdaki sorulardan hangisi, verilerle yanıtlanabilecek iki nicel değişkenin ilişkisini araştırır?",
        opts: [
          { t: "Öğrencilerin günlük ekran süresi arttıkça uyku süreleri de değişiyor mu?", ok: true, why: "İki değişken de sayıyla ölçülür (saat) ve soru birlikte değişimi sorguluyor: ekran süresi ve uyku süresi." },
          { t: "Sınıftaki öğrencilerin en sevdiği renk hangisidir?", why: "Renk bir kategoridir, sayıyla ölçülmez; ve tek değişken var." },
          { t: "Okulumuzun kaç öğrencisi var?", why: "Tek bir sayıdır; iki değişken arasındaki ilişkiyi araştırmıyor." },
          { t: "Hangi gün yağmur yağdı?", why: "Veri toplanabilir ama iki nicel değişkenin birlikte değişimini sorgulamıyor." }
        ],
        explain: "İlişki sorusunun iki parçası vardır: iki ayrı sayısal ölçüm ve ‘biri değişince diğeri de değişiyor mu?’ sorusu." },

      { type: "text", title: "Önce sözlük: nicel değişken, gözlem, ilişkililik",
        say: "Nicel değişken, sayıyla ölçülen özelliktir. Gözlem birimi, ölçümün yapıldığı kişi, gün ya da nesnedir. İki değişken birlikte değişiyorsa aralarında ilişki vardır.",
        html: `<div class="grid"><div class="card"><h3>Nicel değişken</h3><p class="small">Sayıyla ölçülen özellik: boy, süre, sıcaklık, not. (Renk, takım gibi etiketler nicel değildir.)</p></div>
<div class="card"><h3>Gözlem birimi</h3><p class="small">Ölçümün yapıldığı şey: bir öğrenci, bir gün, bir şehir.</p></div>
<div class="card pick"><h3>İlişkililik</h3><p class="small">İki değişkenin <b>birlikte değişme eğilimi</b>. Biri artarken diğeri de artıyor ya da azalıyorsa ilişki vardır.</p></div></div>
<p class="callout why" style="margin-top:12px"><b>Örnek:</b> 8 gün boyunca bir tezgâhın her gün hava sıcaklığını ve sattığı dondurma sayısını yazdık. Gözlem birimi bir gündür; her gün için <b>iki sayı</b> (sıcaklık, satış) var.</p>` },

      { type: "text", title: "Bir araştırma nasıl yapılır? Beş adım",
        say: "İstatistiksel araştırma beş adımdan oluşur: soru sor, plan yap, veriyi topla, analiz et, sonucu yorumla.",
        html: `<ol class="body"><li><b>Soru:</b> merak ettiğin gerçek bir durumdan, iki nicel değişkeni içeren bir soru yaz.</li><li><b>Plan:</b> veriyi kimden, nasıl (anket, ölçüm, gözlem) toplayacağını yaz.</li><li><b>Veri:</b> topla ve analiz edilebilir hâle getir (tabloya yaz, hataları ayıkla).</li><li><b>Analiz:</b> tablo, serpme diyagramı, bölgelere göre sayım oranı ya da korelasyon katsayısı kullan.</li><li><b>Yorum:</b> bulguyu araştırma sorusuna bağla.</li></ol>
<p class="callout why"><b>Neden bu sıra?</b> Önce soru olmazsa hangi veriyi toplayacağını bilemezsin; önce plan olmazsa toplanan veri soruya cevap vermeyebilir.</p>` },

      { type: "text", title: "Önceki grafikler yetmez mi?",
        say: "Daha önce öğrendiğin çizgi grafiği, histogram ve kutu grafiği tek bir değişkene bakar. İki değişkenin birlikte değiştiğini görmek için her gözlemi iki sayıyla gösteren bir grafik gerekir.",
        html: `<p class="big">Histogram yalnızca <b>sıcaklığın</b> dağılımını gösterir; kutu grafiği yalnızca <b>satışı</b>.</p>
<p>Peki <b>"sıcaklık arttıkça satış da artıyor mu?"</b> sorusunu hangisi cevaplar? Hiçbiri: iki ölçümü <b>aynı gözlem</b> için birlikte göstermeleri gerekir.</p>
<p class="callout">Çözüm: her günü iki sayıyla bir <b>nokta</b> yap: yatay eksen sıcaklık, dikey eksen satış. Bu grafiğe <b>serpme diyagramı</b> (saçılım grafiği) denir.</p>` },

      { type: "scatter", title: "Her gün bir nokta: serpme diyagramı",
        say: "Her çift bir nokta. Üç veri kümesini gez ve noktalar sağa gittikçe yukarı mı aşağı mı gidiyor bak.",
        intro: "Her nokta <b>bir günü</b> (ya da bir öğrenciyi) gösteriyor: yatay eksen birinci değişken, dikey eksen ikinci değişken. Üstteki düğmelerle üç veri kümesini gez. Noktalar <b>sağa gittikçe yukarı mı, aşağı mı</b> gidiyor, yoksa dağınık mı?",
        cfg: { sets: SETS1, noline: true } },

      { type: "mcq", predict: true, q: "Ekran süresi arttıkça uyku süresi (örnek veride) nasıl değişiyor?",
        opts: [
          { t: "Azalıyor: noktalar sağa gittikçe aşağı iniyor.", ok: true, why: "Nokta bulutu soldan sağa doğru aşağı iniyor: ekran süresi arttıkça uyku süresi azalıyor. Buna ters yönlü (negatif) ilişki denir." },
          { t: "Artıyor: noktalar sağa gittikçe yukarı çıkıyor.", why: "Yukarı çıkan bulut dondurma örneğiydi. Ekran–uyku bulutu aşağı iniyor." },
          { t: "Hiç değişmiyor: ilişki yok.", why: "İlişkisiz veri ayakkabı numarası–not kümesiydi; orada noktalar dağınıktı. Burada noktalar belirgin biçimde aşağı iniyor." },
          { t: "Ekran süresi uykuyu azaltıyor.", why: "Grafik birlikte değiştiğini gösterir, ‘neden’ olduğunu göstermez. Bunu birazdan göreceğiz." }
        ],
        explain: "Yön: noktalar sağa gittikçe yükseliyorsa pozitif, alçalıyorsa negatif, belirgin bir eğilim yoksa ilişki yok." },

      { type: "text", title: "İlişkiyi saymayla ölçmek: bölgelere göre sayım",
        say: "Noktaları, iki değişkenin ortalamalarından geçen iki çizgiyle dört bölgeye ayır. Sağ üst ve sol alt bölgelerdeki noktalar aynı yönlü ilişkiyi, sol üst ve sağ alt bölgelerdekiler ters yönlü ilişkiyi gösterir.",
        html: `<p>Yatay çizgi <b>y'nin ortalamasından</b>, düşey çizgi <b>x'in ortalamasından</b> geçsin. Grafik dört bölgeye ayrılır:</p>
<div class="grid"><div class="card pick"><h3>Sağ üst + sol alt</h3><p class="small">x ortalamadan büyükken y de büyük; x küçükken y de küçük → <b>aynı yönlü</b>.</p></div>
<div class="card"><h3>Sol üst + sağ alt</h3><p class="small">x büyükken y küçük; x küçükken y büyük → <b>ters yönlü</b>.</p></div></div>
<p class="callout why" style="margin-top:12px"><b>Neden sayma?</b> Hangi bölgede daha çok nokta olduğunu sayarak ilişkinin yönünü ve gücünü sayılarla söyleyebilirsin. Hepsi aynı iki bölgedeyse ilişki güçlü; dört bölgeye eşit dağılmışsa ilişki yok.</p>` },

      { type: "scatter", title: "Bölgelere ayır ve say",
        say: "Bölgelere ayır kutusunu işaretle. Her bölgedeki nokta sayısını gör. Hangi bölgelerde nokta toplanıyor?",
        intro: "<b>Bölgelere ayır</b> kutusunu işaretle. Yeşil çizgiler ortalamalardan geçiyor; köşelerdeki sayılar o bölgedeki nokta sayısı. Üç veri kümesinde de <b>aynı yönlü</b> mü yoksa <b>ters yönlü</b> bölgelerde mi nokta fazla?",
        cfg: { sets: SETS1, noline: true, quad: true } },

      { type: "mcq", q: "Bir veri kümesinde 20 nokta var. Bölgelere göre sayımda sağ üst 9, sol alt 8, sol üst 2, sağ alt 1 nokta bulunuyor. Bu veriler için ne söylenebilir?",
        opts: [
          { t: "Aynı yönlü (pozitif) ve güçlü bir ilişki vardır: 20 noktanın 17'si sağ üst ve sol alt bölgelerindedir.", ok: true, why: "9 + 8 = 17 nokta aynı yönlü bölgelerde (17/20). Büyük çoğunluk bu iki bölgede: pozitif ve güçlü." },
          { t: "Ters yönlü (negatif) bir ilişki vardır.", why: "Ters yönlü bölgelerde (sol üst + sağ alt) yalnızca 2 + 1 = 3 nokta var." },
          { t: "İlişki yoktur; noktalar eşit dağılmıştır.", why: "İlişki olmasaydı noktalar dört bölgeye yaklaşık eşit dağılırdı (5-5-5-5 gibi)." },
          { t: "Sağ üstte en çok nokta olduğu için ilişki yalnızca üst bölgelerdedir.", why: "Yön için iki bölgeyi birlikte (sağ üst + sol alt) karşılaştırırız; yalnızca tek bir bölgeye bakmak yeterli değildir." }
        ],
        explain: "Karar için: aynı yönlü bölgelerdeki noktaların toplamını, ters yönlü bölgelerdekilerle karşılaştır." },

      { type: "text", title: "Korelasyon katsayısı: ilişkiyi tek sayıda özetlemek",
        say: "Korelasyon katsayısı, doğrusal ilişkinin yönünü ve gücünü eksi bir ile bir arasında tek bir sayıyla özetler. Bu sayıyı elle hesaplamayız, hesap aracı bulur.",
        html: `<p><b>Korelasyon katsayısı (r):</b> doğrusal ilişkinin yönünü ve gücünü özetleyen sayı. Her zaman <b>−1 ile 1 arasındadır</b>. Bu derste r'yi <b>formülle hesaplamıyoruz</b>; hesap aracı ya da yazılım hesaplar, biz yorumlarız.</p>
<table class="tbl" style="max-width:520px"><thead><tr><th>|r| yaklaşık</th><th>Güç</th></tr></thead><tbody><tr><td>0'a çok yakın</td><td>ilişki yok denecek kadar zayıf</td></tr><tr><td>0,2 – 0,5</td><td>zayıf</td></tr><tr><td>0,5 – 0,8</td><td>orta</td></tr><tr><td>0,8 – 1</td><td>güçlü</td></tr></tbody></table>
<p class="callout why" style="margin-top:12px"><b>İşareti yönü gösterir:</b> r > 0 aynı yönlü (pozitif), r < 0 ters yönlü (negatif). Bu eşik değerleri bir yorumlama kılavuzudur; ders kitabında farklı aralıklar da verilebilir.</p>` },

      { type: "mcq", q: "Bir serpme diyagramı için hesaplanan korelasyon katsayısı r = −0,85'tir. Bu ilişki için hangisi doğrudur?",
        opts: [
          { t: "Ters yönlü ve güçlü doğrusal bir ilişki vardır.", ok: true, why: "İşaret eksi → ters yönlü; |r| = 0,85 → 1'e yakın → güçlü." },
          { t: "Aynı yönlü ve güçlü bir ilişki vardır.", why: "İşaret eksi olduğu için yön ters; ‘aynı yönlü’ pozitif r içindir." },
          { t: "Ters yönlü ama zayıf bir ilişki vardır.", why: "Güç, işarete değil mutlak değere bakılarak bulunur: |−0,85| = 0,85 büyüktür." },
          { t: "İlişki yoktur çünkü r negatiftir.", why: "Negatif r ‘ilişki yok’ demek değildir; yön tersi demektir. İlişki yokluğu r ≈ 0 ile anlaşılır." }
        ],
        explain: "Önce işaretine (yön), sonra mutlak değerine (güç) bak." },

      { type: "scatter", title: "Tek bir aykırı nokta ne yapar?",
        say: "Kırmızı halkalı noktayı yukarı aşağı oynat. Tek bir nokta korelasyon katsayısını ne kadar değiştiriyor? Sonra hız ve yakıt kümesine bak.",
        intro: "Kırmızı halkalı <b>son noktayı</b> kaydırıcıyla oynat: tek bir nokta <b>r</b>'yi ne kadar değiştiriyor? Sonra <b>Hız ↔ yakıt</b> kümesine geç: noktalar bir U çiziyor. İlişki <i>var</i> ama doğru boyunca değil; <b>r</b> ne söylüyor?",
        cfg: { sets: SETS2, outlier: true, noline: true } },

      { type: "mcq", q: "Hız–yakıt verisinde noktalar belirgin bir U biçimi çiziyor ama r sıfıra yakın çıkıyor. Bunun nedeni nedir?",
        opts: [
          { t: "r yalnızca doğrusal ilişkiyi ölçer; U biçimi doğrusal değildir, bu yüzden r ≈ 0 çıkar.", ok: true, why: "Sol yarıda noktalar aşağı, sağ yarıda yukarı gidiyor; iki etki birbirini götürür. İlişki var ama doğrusal değil." },
          { t: "Hız ile yakıt arasında hiçbir ilişki yoktur.", why: "Noktalar çok düzenli bir desen çiziyor; ilişki var ama doğrusal değil." },
          { t: "Veri yanlış toplanmıştır.", why: "Veri düzenli. Sorun r'nin yalnızca doğrusal ilişkiyi görmesinde." },
          { t: "Hız arttıkça yakıt tüketimi hep artar.", why: "Önce azalıp sonra artıyor; ‘hep artar’ yanlış." }
        ],
        explain: "Her zaman önce serpme diyagramına bak, sonra r'ye. r tek başına yanıltabilir." },

      { type: "text", title: "İlişkili olmak, neden olmak demek değildir",
        say: "İki değişken birlikte değişiyorsa biri diğerine sebep olduğunu söyleyemeyiz. Üçüncü bir etken ikisini birden etkiliyor olabilir.",
        html: `<p>Aynı 8 günde <b>dondurma satışı</b> ile <b>plajdaki yüzme kazası sayısı</b> birlikte artıyor. Dondurma yemek kazaya mı yol açıyor?</p>
<p>Büyük ihtimalle hayır: sıcak havada <b>hem</b> dondurma satışı artıyor <b>hem</b> daha çok kişi denize giriyor. İkisini birden artıran <b>üçüncü bir etken</b> var: sıcak hava.</p>
<p class="callout why"><b>Kural:</b> ilişkili olmak, neden–sonuç ilişkisi olduğu anlamına <b>gelmez</b>. Haberlerde "X yapanlarda Y daha yüksek" cümlesini görünce sor: ikisini birden etkileyen başka bir şey olabilir mi?</p>` },

      { type: "scatter", title: "Dondurma ve kaza: ilişki var, sebep başka",
        say: "Dondurma satışı ile yüzme kazası kümesini aç. Noktalar çok düzenli ama dondurma kazanın sebebi değil.",
        intro: "<b>Dondurma ↔ yüzme kazası</b> kümesini aç: noktalar çok düzenli, ilişki güçlü. Yine de sebep dondurma değil. Sonra <b>Sıcaklık ↔ dondurma</b> kümesiyle karşılaştır.",
        cfg: { sets: SETS3, noline: true } },

      { type: "mcq", q: "Bir şehirde yaz aylarında hem boğulma vakaları hem de klima satışları artıyor. En makul açıklama hangisidir?",
        opts: [
          { t: "Sıcak hava, hem klima satışını hem denize girme (dolayısıyla boğulma) sayısını artırıyor olabilir.", ok: true, why: "Ortak etken (sıcaklık) iki değişkeni birlikte artırıyor: ilişki var ama biri ötekinin nedeni değil." },
          { t: "Klima almak boğulmalara yol açıyor.", why: "Klima ile boğulma arasında doğrudan bir neden–sonuç mekanizması yok." },
          { t: "Boğulmalar arttığı için insanlar klima alıyor.", why: "Ters yön de mantıksız; klima satışı bu yüzden artmaz." },
          { t: "İlişki yoktur, veriler tesadüfen birlikte artmıştır.", why: "İkisi her yaz birlikte artıyor; ilişki var, yalnızca nedeni doğrudan değil." }
        ],
        explain: "Ortak etken: iki değişkeni birlikte değiştiren üçüncü değişken." },

      { type: "mcq", q: "Bir öğrenci, kendi okulundaki 30 öğrenciye anket yapıp çalışma süresi ile deneme notu arasında güçlü pozitif ilişki bulmuş. ‘Türkiye'deki tüm lise öğrencilerinde de böyledir’ diyor. Bu çıkarım için ne söylenebilir?",
        opts: [
          { t: "Tek okuldaki 30 kişilik örneklemden tüm ülke için kesin sonuç çıkarılamaz; örneklem büyüklüğü ve seçim biçimi değerlendirilmeli.", ok: true, why: "Örneklem tek bir okuldan ve küçük; genelleme için daha çeşitli ve rastgele seçilmiş bir örneklem gerekir." },
          { t: "Güçlü bir ilişki bulunduysa her yerde aynı sonuç çıkar.", why: "Başka okullarda sonuç farklı olabilir; örneklem tüm evreni temsil etmeyebilir." },
          { t: "30 öğrenci hiçbir zaman yeterli değildir.", why: "Küçük örneklem de bilgi verir; asıl mesele temsil gücü ve çıkarımın ölçüsüdür." },
          { t: "İlişki pozitif olduğu için çalışma süresi notu artırıyordur.", why: "İlişki neden–sonuç anlamına gelmez; ayrıca bu soru genelleme hakkında." }
        ],
        explain: "Genelleme yaparken örneklemin kim olduğuna ve ne kadar çeşitli olduğuna bak; sonucu kesin değil ‘olası’ diye ifade et." },

      { type: "reflect", q: "Peki ya neden? Kendi hayatından iki nicel değişken seç (örneğin çalışma süresi ve deneme neti). İlişkinin yönünü tahmin et. Bu ilişkiyi bir araştırmayla nasıl sınardın? Hangi veriyi, kimden toplardın?",
        hint: "Örnek düşünce: Çalışma süresi ile deneme neti büyük olasılıkla aynı yönlü ilişkili olur. Sınamak için 30–50 öğrenciden haftalık çalışma süresi ve son deneme netini toplar, serpme diyagramı çizer, bölgelere göre sayar, r'ye bakardım. Uykusuzluk gibi ortak etkenleri de yorumda düşünürdüm; ilişki çıksa bile ‘çalışmak neti artırır’ demeden önce başka açıklamaları değerlendirirdim." },

      { type: "text", title: "Özet ve sınavda ne işe yarar",
        say: "İki nicel değişkenli veride her gözlem bir noktadır. Yön, güç ve biçime bak. Bölgelere göre sayım ve korelasyon katsayısı ilişkiyi özetler. İlişkili olmak neden olmak demek değildir.",
        html: `<ul class="body"><li>Her gözlem iki sayıdır; <b>serpme diyagramında</b> bir nokta olur.</li><li><b>Yön:</b> sağa gittikçe yukarı → pozitif; aşağı → negatif. <b>Güç:</b> noktalar bir doğru boyunca ne kadar toplu?</li><li><b>Bölgelere göre sayım:</b> aynı yönlü bölgelerdeki nokta çoksa pozitif ilişki.</li><li><b>r:</b> −1 ile 1 arası; işaret = yön, mutlak değer = güç. Doğrusal ilişkiyi ölçer, aykırı değerden etkilenir.</li><li><b>İlişki ≠ neden–sonuç</b>; sonucu verinin geldiği örneklemin ötesine genellerken dikkatli ol.</li></ul>
<p class="callout">Sınavda şöyle görürsün: bir serpme diyagramı, bir tablo ya da bir r değeri verilir; yönü, gücü ya da bir yorumun doğruluğu sorulur. Önce grafiğe bak, sonra sayıya.</p>` }
    ]
  };
})();
