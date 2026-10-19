/* TYT/AYT matematik konu listesi.
   KAYNAK: MEB, "ÖSYM tarafından 2026 yılında gerçekleştirilecek TYT, AYT ve YDT sınavlarına esas ortak derslere ait kazanım ve açıklamalar"
   (ttkb.meb.gov.tr, Matematik bölümü: 9., 10., 11., 12. sınıf ve 11–12. sınıf Temel Düzey konu başlıkları).
   DİKKAT 1: Bu belge ESKİ (2018–2020) öğretim programının kodlarını kullanır ve 2026 sınavı içindir. 12. sınıfa 2027-28'de geçecek öğrenci
             (Maarif programı) için ÖSYM'nin 2028 sınavına ait güncel "kazanım ve açıklamalar" belgesi yayımlanınca bu liste güncellenecek.
   DİKKAT 2: TYT = "Temel Matematik" (9., 10. sınıf + Temel Düzey), AYT = "Matematik" (ileri düzey) eşlemesi belgedeki yapıdan çıkarılmıştır;
             ÖSYM'nin soru dağılımı tablosuyla teyit edilecek (taslak). */
window.KESIF = window.KESIF || { lessons: {}, daily: [] };
KESIF.yks = {
  source: "MEB–ÖSYM 2026 TYT/AYT kazanım ve açıklamalar belgesi (Matematik)",
  tyt: ["9", "10", "td"], ayt: ["9", "10", "11", "12"],
  levels: [
    { id: "9", title: "9. sınıf", areas: [
      { id: "9.1", title: "Mantık", topics: [["9.1.1", "Önermeler ve birleşik önermeler"]] },
      { id: "9.2", title: "Kümeler", topics: [["9.2.1", "Kümelerde temel kavramlar"], ["9.2.2", "Kümelerde işlemler"]] },
      { id: "9.3", title: "Denklemler ve eşitsizlikler", topics: [["9.3.1", "Sayı kümeleri"], ["9.3.2", "Bölünebilme kuralları"], ["9.3.3", "Birinci dereceden denklemler ve eşitsizlikler"], ["9.3.4", "Üslü ifadeler ve denklemler"], ["9.3.5", "Denklemler ve eşitsizliklerle ilgili uygulamalar"]] },
      { id: "9.4", title: "Üçgenler", topics: [["9.4.1", "Üçgenlerde temel kavramlar"], ["9.4.2", "Üçgenlerde eşlik ve benzerlik"], ["9.4.3", "Üçgenin yardımcı elemanları"], ["9.4.4", "Dik üçgen ve trigonometri"], ["9.4.5", "Üçgenin alanı"]] },
      { id: "9.5", title: "Veri", topics: [["9.5.1", "Merkezî eğilim ve yayılım ölçüleri"], ["9.5.2", "Verilerin grafikle gösterilmesi"]] } ] },
    { id: "10", title: "10. sınıf", areas: [
      { id: "10.1", title: "Sayma ve olasılık", topics: [["10.1.1", "Sıralama ve seçme"], ["10.1.2", "Basit olayların olasılıkları"]] },
      { id: "10.2", title: "Fonksiyonlar", topics: [["10.2.1", "Fonksiyon kavramı ve gösterimi"], ["10.2.2", "İki fonksiyonun bileşkesi ve bir fonksiyonun tersi"]] },
      { id: "10.3", title: "Polinomlar", topics: [["10.3.1", "Polinom kavramı ve polinomlarla işlemler"], ["10.3.2", "Polinomların çarpanlara ayrılması"]] },
      { id: "10.4", title: "İkinci dereceden denklemler", topics: [["10.4.1", "İkinci dereceden bir bilinmeyenli denklemler"]] },
      { id: "10.5", title: "Dörtgenler ve çokgenler", topics: [["10.5.1", "Çokgenler"], ["10.5.2", "Dörtgenler ve özellikleri"], ["10.5.3", "Özel dörtgenler"]] },
      { id: "10.6", title: "Uzay geometri", topics: [["10.6.1", "Katı cisimler"]] } ] },
    { id: "11", title: "11. sınıf (ileri düzey)", areas: [
      { id: "11.1", title: "Trigonometri", topics: [["11.1.1", "Yönlü açılar"], ["11.1.2", "Trigonometrik fonksiyonlar"]] },
      { id: "11.2", title: "Analitik geometri", topics: [["11.2.1", "Doğrunun analitik incelenmesi"]] },
      { id: "11.3", title: "Fonksiyonlarda uygulamalar", topics: [["11.3.1", "Fonksiyonlarla ilgili uygulamalar"], ["11.3.2", "İkinci dereceden fonksiyonlar ve grafikleri"], ["11.3.3", "Fonksiyonların dönüşümleri"]] },
      { id: "11.4", title: "Denklem ve eşitsizlik sistemleri", topics: [["11.4.1", "İkinci dereceden iki bilinmeyenli denklem sistemleri"], ["11.4.2", "İkinci dereceden bir bilinmeyenli eşitsizlikler ve eşitsizlik sistemleri"]] },
      { id: "11.5", title: "Çember ve daire", topics: [["11.5.1", "Çemberin temel elemanları"], ["11.5.2", "Çemberde açılar"], ["11.5.3", "Çemberde teğet"], ["11.5.4", "Dairenin çevresi ve alanı"]] },
      { id: "11.6", title: "Uzay geometri", topics: [["11.6.1", "Katı cisimler"]] },
      { id: "11.7", title: "Olasılık", topics: [["11.7.1", "Koşullu olasılık"], ["11.7.2", "Deneysel ve teorik olasılık"]] } ] },
    { id: "12", title: "12. sınıf (ileri düzey)", areas: [
      { id: "12.1", title: "Üstel ve logaritmik fonksiyonlar", topics: [["12.1.1", "Üstel fonksiyon"], ["12.1.2", "Logaritma fonksiyonu"], ["12.1.3", "Üstel, logaritmik denklemler ve eşitsizlikler"]] },
      { id: "12.2", title: "Diziler", topics: [["12.2.1", "Gerçek sayı dizileri"]] },
      { id: "12.3", title: "Trigonometri", topics: [["12.3.1", "Toplam-fark ve iki kat açı formülleri"], ["12.3.2", "Trigonometrik denklemler"]] },
      { id: "12.4", title: "Dönüşümler", topics: [["12.4.1", "Analitik düzlemde temel dönüşümler"]] },
      { id: "12.5", title: "Türev", topics: [["12.5.1", "Limit ve süreklilik"], ["12.5.2", "Anlık değişim oranı ve türev"], ["12.5.3", "Türevin uygulamaları"]] },
      { id: "12.6", title: "İntegral", topics: [["12.6.1", "Belirsiz integral"], ["12.6.2", "Belirli integral ve uygulamaları"]] },
      { id: "12.7", title: "Analitik geometri", topics: [["12.7.1", "Çemberin analitik incelenmesi"]] } ] },
    { id: "td", title: "11–12. sınıf Temel Düzey", areas: [
      { id: "TD.11.1", title: "11. sınıf: Sayılar", topics: [["TD.11.1.1", "Sayı kümeleri"], ["TD.11.1.2", "Bölünebilme"]] },
      { id: "TD.11.2", title: "11. sınıf: Üçgenler", topics: [["TD.11.2.1", "Dik üçgen"]] },
      { id: "TD.11.3", title: "11. sınıf: Denklem ve eşitsizlikler", topics: [["TD.11.3.1", "Birinci dereceden denklem ve eşitsizlikler"], ["TD.11.3.2", "Bilinçli tüketici aritmetiği"]] },
      { id: "TD.11.4", title: "11. sınıf: Çember ve daire", topics: [["TD.11.4.1", "Çemberin temel elemanları"], ["TD.11.4.2", "Çemberde açılar"], ["TD.11.4.3", "Dairenin çevresi ve alanı"]] },
      { id: "TD.12.1", title: "12. sınıf: Denklem ve eşitsizlikler", topics: [["TD.12.1.1", "Üslü ve köklü ifadeler"], ["TD.12.1.2", "Bilinçli tüketici aritmetiği"]] },
      { id: "TD.12.2", title: "12. sınıf: Veri", topics: [["TD.12.2.1", "Gerçek hayat durumlarıyla ilgili istatistik problemleri"]] },
      { id: "TD.12.3", title: "12. sınıf: Ölçme", topics: [["TD.12.3.1", "Çevre, alan ve hacim ölçme"]] },
      { id: "TD.12.4", title: "12. sınıf: Katı cisimler", topics: [["TD.12.4.1", "Küre ve silindir"]] } ] }
  ]
};

/* ÖSYM'nin resmî yayınları. Soru metinleri telif nedeniyle bu uygulamaya KOPYALANMAZ; yalnızca resmî sayfalara bağlantı verilir.
   Bağlantılar ÖSYM sitesinden doğrulanmıştır; diğer yıllar için resmî arşiv sayfasına bakınız. */
KESIF.osym = {
  note: "Sınav soruları ÖSYM'nin telifindedir ve yazılı izin olmadan çoğaltılamaz (2026-YKS kılavuzu). Bu yüzden soru metinleri burada değil, ÖSYM'nin kendi sayfasında.",
  archive: { title: "ÖSYM — YKS çıkmış sorular (arşiv)", url: "https://www.osym.gov.tr/tr,15164/yks-cikmis-sorular.html" },
  years: [
    { y: 2026, url: "https://www.osym.gov.tr/2026-yuksekogretim-kurumlari-sinavi-2026yks-temel-soru-kitapciklari-ve-cevap-anahtarlari-yayimlandi" },
    { y: 2025, url: "https://www.osym.gov.tr/TR,33280/2025-yks-tyt-ayt-ve-ydt-temel-soru-kitapciklari-ve-cevap-anahtarlari.html" },
    { y: 2024, url: "https://www.osym.gov.tr/2024yks-tyt-ayt-ve-ydt-temel-soru-kitapciklari-ve-cevap-anahtarlari" },
    { y: 2022, url: "https://www.osym.gov.tr/2022yks-tyt-ayt-ve-ydt-temel-soru-kitapciklari-ve-cevap-anahtarlari" },
    { y: 2020, url: "https://www.osym.gov.tr/TR,19369/2020-yks-tyt-ayt-ve-ydt-temel-soru-kitapciklari-ve-cevap-anahtarlari.html" },
    { y: 2018, url: "https://www.osym.gov.tr/2018yks-tyt-ayt-ydt-temel-soru-kitapciklari-ve-cevap-anahtarlari" }
  ]
};

/* Soru bankası etiketleri: her sorunun hangi konuya (yks: MEB-ÖSYM konu kodu, s11: 11. sınıf kitabı konusu), hangi sınava hizmet ettiği ve zorluk düzeyi.
   kaynak: "özgün" = bu proje için yazılmış. Çıkmış soru metni YOKTUR (telif). */
(function () {
  var M = KESIF.meta = {};
  function tag(ids, o) { ids.forEach(function (i) { M[i] = Object.assign({ kaynak: "özgün", sinav: ["ayt"], zor: 1 }, o); }); }
  tag(["m1", "m2", "m3", "m4"], { yks: "12.5.1", sinav: ["ayt"], zor: 2 });
  tag(["mt1", "mt2", "mt3", "mt4", "mt5", "mt6", "mt7", "mt8", "mt10", "mt11", "mt12"], { yks: "11.1.2", s11: "3.1", sinav: ["ayt"], zor: 1 });
  tag(["mt9"], { yks: "11.1.2", s11: "3.1", sinav: ["ayt"], zor: 2 });
  tag(["mu1", "mu5"], { yks: "12.1.1", s11: "4.1", sinav: ["ayt"], zor: 1 });
  tag(["mu6", "mu9", "mu11"], { yks: "12.1.1", s11: "4.1", sinav: ["ayt"], zor: 2 });
  tag(["mu2", "mu3", "mu4", "mu10", "mu12"], { yks: "12.1.2", s11: "4.3", sinav: ["ayt"], zor: 2 });
  tag(["mu7", "mu8"], { yks: "12.1.2", s11: "4.3", sinav: ["ayt"], zor: 2 });
  tag(["ms1", "ms2", "ms3", "ms4", "ms5", "ms8", "ms9", "ms10"], { s11: "1.1", sinav: ["s11"], zor: 1 });
  tag(["ms6", "ms7"], { s11: "1.1", sinav: ["s11"], zor: 2 });
  tag(["t1", "t2", "t3"], { sinav: ["tyt"], zor: 1 });
})();

/* Hangi keşif hangi konu koduna hizmet ediyor (MEB-ÖSYM kodu). */
KESIF.lessonYks = {
  "mat-limit": ["12.5.1"], "mat-trig-cember": ["11.1.2"], "mat-ustel-log": ["12.1.1", "12.1.2"]
};
