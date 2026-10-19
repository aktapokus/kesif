/* Coğrafya keşfi (9. sınıf): Boylam ve yerel saat — kazanım 9.1.4–9.1.5. Özgün içerik (CC BY-NC-SA 4.0). */
(function () {
  function hm(h) { h = ((h % 24) + 24) % 24; var H = Math.floor(h), M = Math.round((h - H) * 60); if (M === 60) { H = (H + 1) % 24; M = 0; } return (H < 10 ? "0" : "") + H + "." + (M < 10 ? "0" : "") + M; }
  KESIF.lessons["cog-boylam"] = {
    id: "cog-boylam", subject: "cog", title: "Dünya dönüyor: boylam ve yerel saat", minutes: 20,
    grade: "9. sınıf Coğrafya, 9.1.4–9.1.5 (Dünya'nın hareketleri, koordinat sistemi ve zaman); MEB–ÖSYM 2026 belgesindeki kod",
    hook: "Türkiye'de öğle yemeği yenirken Japonya'da neden gün ağarıyor?",
    steps: [
      { type: "text", title: "Dünya 24 saatte bir tur atıyor",
        say: "Dünya kendi ekseni etrafında yirmi dört saatte üç yüz altmış derece döner. Yani her saat on beş derece döner. Bu yüzden her boylamın saati farklıdır.",
        html: `<p class="big">Dünya <b>24 saatte 360°</b> döner. Her saatte kaç derece?</p><p class="math big">360° ÷ 24 = <b>15°</b> / saat &nbsp;·&nbsp; 1° = <b>4 dakika</b></p>
<p>Bu yüzden iki yer arasında <b>15°</b> boylam farkı varsa <b>1 saat</b> yerel saat farkı vardır. Doğuya gidince saat <b>ileri</b>, batıya gidince <b>geri</b>.</p>` },
      { type: "sim", title: "Boylamı ve Greenwich saatini değiştir",
        say: "Greenwich saatini ve şehrin boylamını değiştir. Şehrin yerel saati Greenwich saatine boylamın on beşe bölümü kadar eklenir.",
        intro: "Üstte Dünya'yı <b>Kuzey Kutbu'ndan</b> görüyorsun. Güneş sağda. <b>Sarı çizgi Greenwich</b>, <b>mavi çizgi şehrin boylamı</b>. Greenwich saatini ve şehrin boylamını değiştir: yerel saat nasıl değişiyor? Doğu boylamı pozitif, batı negatif.",
        cfg: { vb: "0 0 640 290", vars: [{ k: "H", label: "Greenwich saati", min: 0, max: 23, step: 1, value: 12, unit: "sa" }, { k: "L", label: "Şehrin boylamı (doğu +, batı −)", min: -180, max: 180, step: 5, value: 30, unit: "°" }],
          out: [{ label: "Şehrin yerel saati", fn: function (v) { return hm(v.H + v.L / 15); } }, { label: "Greenwich'e göre saat farkı", fn: function (v) { var d = v.L / 15; return (d >= 0 ? "+" : "−") + Math.abs(Math.round(d * 100) / 100).toString().replace(".", ",") + " saat"; } }],
          svg: function (v) {
            var cx = 190, cy = 145, R = 105, g = -(v.H - 12) * 15, c = g - v.L, rad = function (d) { return d * Math.PI / 180; }, P = function (a, r) { return [cx + r * Math.cos(rad(a)), cy + r * Math.sin(rad(a))]; };
            var gp = P(g, R), cp = P(c, R), h = '<circle cx="' + cx + '" cy="' + cy + '" r="' + R + '" fill="var(--card)" stroke="var(--line)" stroke-width="3"/><path d="M ' + cx + ' ' + (cy - R) + ' A ' + R + ' ' + R + ' 0 0 0 ' + cx + ' ' + (cy + R) + ' Z" fill="rgba(15,21,38,.18)"/>';
            h += '<circle cx="540" cy="145" r="28" fill="var(--accent)"/><text x="540" y="195" text-anchor="middle" fill="var(--ink)" font-size="16">Güneş</text>';
            h += '<line x1="' + cx + '" y1="' + cy + '" x2="' + gp[0] + '" y2="' + gp[1] + '" stroke="var(--accent)" stroke-width="5"/><circle cx="' + gp[0] + '" cy="' + gp[1] + '" r="8" fill="var(--accent)"/><text x="' + (gp[0] + (gp[0] > cx ? 12 : -12)) + '" y="' + (gp[1] + 5) + '" text-anchor="' + (gp[0] > cx ? "start" : "end") + '" fill="var(--ink)" font-size="16" font-weight="700">Greenwich</text>';
            h += '<line x1="' + cx + '" y1="' + cy + '" x2="' + cp[0] + '" y2="' + cp[1] + '" stroke="var(--cyan)" stroke-width="5"/><circle cx="' + cp[0] + '" cy="' + cp[1] + '" r="8" fill="var(--cyan)"/><text x="' + (cp[0] + (cp[0] > cx ? 12 : -12)) + '" y="' + (cp[1] + (cp[1] > cy ? 20 : -8)) + '" text-anchor="' + (cp[0] > cx ? "start" : "end") + '" fill="var(--ink)" font-size="16" font-weight="700">Şehir</text>';
            h += '<circle cx="' + cx + '" cy="' + cy + '" r="5" fill="var(--ink)"/><text x="' + cx + '" y="' + (cy + R + 24) + '" text-anchor="middle" fill="var(--muted)" font-size="14">Kuzey Kutbu’ndan görünüm; Dünya saat yönünün tersine döner</text>';
            return h; } } },
      { type: "mcq", predict: true, q: "Greenwich'te saat 12.00 iken 45° doğu boylamındaki bir şehirde yerel saat kaçtır?",
        opts: [
          { t: "15.00", ok: true, why: "45° ÷ 15° = 3 saat; doğuda saat ileri: 12.00 + 3 = 15.00." },
          { t: "09.00", why: "Doğuya gidildikçe saat ileri gider; geri alınmış." },
          { t: "13.00", why: "45° için 1 saat değil, 3 saat." },
          { t: "12.45", why: "45° saat değil dakika gibi alınmış; 1° = 4 dakika, 45° = 180 dakika." }
        ], explain: "Boylam farkı ÷ 15 = saat farkı." },
      { type: "text", title: "Hesap yöntemi",
        say: "İki yer arasındaki boylam farkını on beşe böl; doğuya doğru saat ileri, batıya doğru geri. İki yer farklı yarım kürelerdeyse boylamları toplanır.",
        html: `<ol class="body"><li>İki yerin <b>boylam farkını</b> bul. Aynı yönde (ikisi de doğu ya da batı) ise <b>çıkar</b>; farklı yönde (biri doğu, biri batı) ise <b>topla</b>.</li><li>Farkı <b>15</b>'e böl: saat farkı.</li><li>Doğudaki yerin saati <b>ileri</b>.</li></ol>
<p class="callout why"><b>Örnek:</b> 30°D ile 45°B arası fark 30 + 45 = 75° → 75 ÷ 15 = 5 saat. Doğudaki yerde saat 5 saat ileri.</p>` },
      { type: "mcq", q: "A şehri 30° doğu, B şehri 45° batı boylamındadır. A'da saat 14.00 iken B'de saat kaçtır?", opts: [
          { t: "09.00", ok: true, why: "Boylam farkı 30 + 45 = 75° → 5 saat. B batıda: 14.00 − 5 = 09.00." },
          { t: "19.00", why: "Batıya gidildikçe saat geri gider; ileri alınmış." },
          { t: "11.00", why: "75° yerine 45 − 30 = 15° (1 saat) hesaplanmış gibi; farklı yarım kürelerde boylamlar toplanır." },
          { t: "13.00", why: "1 saat fark 15° içindir; fark 75°." }
        ], explain: "Farklı yarım kürelerde boylamlar toplanır." },
      { type: "reflect", q: "Peki ya neden? Neden sabah güneşi doğudaki bir şehirde batıdakinden önce görürüz?",
        hint: "Örnek düşünce: Dünya batıdan doğuya doğru döndüğü için doğudaki yerler Güneş'in ışığına batıdaki yerlerden önce girer. Bu yüzden doğuda güneş önce doğar, yerel saat daha ileridir." },
      { type: "text", title: "Bugünün özeti",
        say: "Bugünkü keşif tamamlandı. Dünya her saatte on beş derece döner. Yerel saat farkı boylam farkının on beşe bölümüdür. Doğuya gidince saat ileri, batıya gidince geri.",
        html: `<ul class="body"><li>360° ÷ 24 saat = <b>15° / saat</b>; 1° = <b>4 dk</b>.</li><li>Saat farkı = boylam farkı ÷ 15.</li><li><b>Doğu → ileri, batı → geri.</b></li><li>Farklı yarım kürelerde boylamlar toplanır, aynı yarım kürede çıkarılır.</li></ul>` }
    ]
  };
})();
