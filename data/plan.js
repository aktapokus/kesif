/* Dersler, ağırlıklar ve haftalık ritim.
   Ağırlıklar YKS (EA alanı) soru dağılımından türetilmiş TAHMİNDİR; ÖSYM kılavuzundan doğrulanmalıdır (bkz. docs/YOL_HARITASI.md). */
window.KESIF = window.KESIF || { lessons: {}, daily: [] };
KESIF.subjects = {
  mat:   { name: "Matematik",   icon: "∑",  w: 40,  note: "TYT 40 + AYT 40 soru" },
  tur:   { name: "Türkçe",      icon: "✎",  w: 20,  note: "TYT 40 soru (paragraf en ağır)" },
  edeb:  { name: "Edebiyat",    icon: "❦",  w: 12,  note: "AYT 24 soru" },
  tar:   { name: "Tarih",       icon: "⌛", w: 7.5, note: "TYT 5 + AYT 10 soru" },
  cog:   { name: "Coğrafya",    icon: "🌍", w: 5.5, note: "TYT 5 + AYT 6 soru" },
  fel:   { name: "Felsefe",     icon: "💭", w: 2.5, note: "TYT 5 soru" },
  fiz:   { name: "Fizik",       icon: "⚛",  w: 3.5, note: "TYT 7 soru" },
  kim:   { name: "Kimya",       icon: "⚗",  w: 3.5, note: "TYT 7 soru" },
  biy:   { name: "Biyoloji",    icon: "🧬", w: 3,   note: "TYT 6 soru" }
};
/* Haftalık ritim: 0=Pazar … 6=Cumartesi. Her gün tek ana keşif (≈25 dk) + günlük sorular. */
KESIF.week = {
  1: ["mat"], 2: ["tur"], 3: ["tar", "cog"], 4: ["mat"], 5: ["edeb", "fel"], 6: ["fiz", "kim", "biy"], 0: ["tur", "mat"]
};
KESIF.dayNames = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
