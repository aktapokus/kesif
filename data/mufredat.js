/* 11. sınıf matematik konu sırası.
   KAYNAK: MEB, "Ortaöğretim Matematik 11. Sınıf Ders Kitabı" (2025 baskı, TTKB kabulü 03.07.2026) İÇİNDEKİLER bölümü; tymm.meb.gov.tr.
   Sıra ve başlıklar kitaptan alınmıştır. MAT.11.x kodları MEB ODSGM 2026-27 konu-soru dağılım tablosundan doğrulandı (1.1–5.2 tamamı; tymm.meb.gov.tr ünite sayfalarıyla doğrulandı. Not: kitabın 4. ve 5. teması programda "3. Tema: Nicelikler ve Değişimler (2) ve (3)" altındadır).
   TYT/AYT eşlemesi ÖSYM kılavuzundan doğrulanmadı (taslak). */
window.KESIF = window.KESIF || { lessons: {}, daily: [] };
KESIF.s11 = {
  source: "MEB 11. sınıf Matematik ders kitabı, içindekiler (2025 baskı)",
  themes: [
    { n: 1, title: "İstatistiksel Araştırma Süreci", topics: [
      { id: "1.1", mat: "MAT.11.1.1", title: "İki niceliksel değişkenli veriler", lesson: "m11-1-1" },
      { id: "1.2", mat: "MAT.11.1.2", title: "Başkaları tarafından oluşturulan iki niceliksel değişkenli verileri inceleme", lesson: "m11-1-2" } ] },
    { n: 2, title: "Geometrik Şekiller", topics: [
      { id: "2.1", mat: "MAT.11.2.1", title: "Dörtgenlerin özellikleri", lesson: "m11-2-1" },
      { id: "2.2", mat: "MAT.11.2.2", partial: true, title: "Özel dörtgenler arasındaki ilişkiler", lesson: "m11-2-2" },
      { id: "2.3", mat: "MAT.11.2.3", partial: true, title: "Çokgenlerin sınıflandırılması", lesson: "m11-2-3" },
      { id: "2.4", mat: "MAT.11.2.4", partial: true, title: "Dışbükey çokgenlerin özellikleri", lesson: "m11-2-4" },
      { id: "2.5", mat: "MAT.11.2.5", title: "Çokgenlerle ilgili problemler", lesson: "m11-2-5" } ] },
    { n: 3, title: "Nicelikler ve Değişimler (1)", topics: [
      { id: "3.1", mat: "MAT.11.3.1", title: "Trigonometrik fonksiyonlar ve nitel özellikleri", lesson: "m11-3-1", partial: true },
      { id: "3.2", mat: "MAT.11.3.2", title: "Trigonometrik fonksiyonlarla ifade edilebilen denklemler içeren problemler", lesson: null } ] },
    { n: 4, title: "Nicelikler ve Değişimler (2)", topics: [
      { id: "4.1", mat: "MAT.11.3.3", title: "Üstel fonksiyonlar ve nitel özellikleri", lesson: "m11-4-1" },
      { id: "4.2", mat: "MAT.11.3.4", title: "Üstel fonksiyonların ters fonksiyonları", lesson: "mat-ustel-log", partial: true },
      { id: "4.3", mat: "MAT.11.3.5", title: "Logaritmik fonksiyonlar ve nitel özellikleri", lesson: "mat-ustel-log", partial: true },
      { id: "4.4", mat: "MAT.11.3.6", title: "Üstel ve logaritmik fonksiyonlarla ifade edilebilen denklem ve eşitsizlikler içeren problemler", lesson: null } ] },
    { n: 5, title: "Nicelikler ve Değişimler (3)", topics: [
      { id: "5.1", mat: "MAT.11.3.7", title: "Fonksiyonların bileşkesi", lesson: "m11-5-1" },
      { id: "5.2", mat: "MAT.11.3.8", title: "Fonksiyonlarda dört işlem", lesson: null } ] }
  ]
};
/* Dersin hangi sekmelerde göründüğü: s11 = 11. sınıf sırası, tyt, ayt. (TYT/AYT eşlemesi taslak.) */
KESIF.tracks = {
  "mat-limit": ["ayt"],
  "mat-trig-cember": ["s11", "ayt"],
  "mat-ustel-log": ["s11", "ayt"],
  "mat-iki-degisken": ["s11"],
  "mat-veri-inceleme": ["s11"],
  "mat-cokgen": ["s11"],
  "fiz-hareket": ["tyt"],
  "fiz11-serbest-dusme": ["tyt"], "fiz11-iki-boyut": ["tyt"], "fiz11-newton-yasalari": ["tyt"], "fiz11-surtunme": ["tyt"], "fiz11-limit-hiz": ["tyt"], "fiz11-cembersel": ["tyt"],
  "cog-boylam": ["tyt", "ayt"],
  "kim-periyodik": ["tyt"],
  "tur-paragraf-giris": ["tyt"],
  "tur-sozcuk-anlam": ["tyt"],"tur-cumle-anlam": ["tyt"],"tur-paragraf-yapi": ["tyt"],"tur-ses-bilgisi": ["tyt"],"tur-yazim": ["tyt"],"tur-noktalama": ["tyt"],"tur-sozcuk-turleri": ["tyt"],"tur-fiil": ["tyt"],"tur-cumle-ogeleri": ["tyt"],"tur-cumle-turleri": ["tyt"],"tur-anlatim-bozuklugu": ["tyt"],
  "tar11-mucadele": ["tyt", "ayt"], "kim11-enerji": ["tyt", "ayt"], "kim11-enerji-kaynagi": ["tyt", "ayt"], "kim11-bag-enerjisi": ["tyt", "ayt"], "kim11-olusum-entalpisi": ["tyt", "ayt"], "kim11-carpisma": ["tyt", "ayt"], "kim11-ortalama-hiz": ["tyt", "ayt"], "kim11-hiz-faktorler": ["tyt", "ayt"], "kim11-hiz-denklemi": ["tyt", "ayt"], "biy11-tepki": ["tyt", "ayt"], "biy11-hormon": ["tyt", "ayt"], "biy11-tropizma": ["tyt", "ayt"], "biy11-duyu": ["tyt", "ayt"], "biy11-hayvan-sinir": ["tyt", "ayt"], "biy11-insan-sinir": ["tyt", "ayt"], "biy11-refleks": ["tyt", "ayt"], "biy11-kas": ["tyt", "ayt"], "biy11-bagisiklik": ["tyt", "ayt"], "fel11-cevre": ["tyt", "ayt"],
  "m11-1-1": ["s11"], "m11-1-2": ["s11"], "m11-2-2": ["s11"], "m11-2-3": ["s11"], "m11-2-4": ["s11"], "m11-2-5": ["s11"], "m11-2-1": ["s11"], "m11-3-1": ["s11", "ayt"], "m11-4-1": ["s11", "ayt"], "m11-5-1": ["s11"],
  "tur-paragraf": ["tyt"],
  "tar-malazgirt": ["tyt", "ayt"],
  "edeb-soz-sanatlari": ["ayt"],
  "cog-mevsim": ["tyt", "ayt"],
  "fiz-newton": ["tyt"],
  "kim-mol": ["tyt"],
  "biy-ozmos": ["tyt"],
  "fel-arguman": ["ayt"]
};
