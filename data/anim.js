/* Ders animasyonları (canvas). Telefon genişliğinde okunur olması için çizim alanı 420 birim genişliğindedir; sayısal çıktılar tuvalin altındaki HTML alanında (A.read) gösterilir.
   Her animasyon KESIF.anim[ad] = function (A) { ... }; A: ctx, W, H, size(h), col, slider, button, toggle, cap, read, frame.
   Modeller öğretim amaçlı sadeleştirilmiştir (ölçek ve parçacık sayıları gösterim içindir). Özgün içerik (CC BY-NC-SA 4.0). */
window.KESIF = window.KESIF || { lessons: {}, daily: [] };
KESIF.anim = KESIF.anim || {};
(function () {
  var TAU = Math.PI * 2;
  function arrow(c, x1, y1, x2, y2, color, lw) {
    var a = Math.atan2(y2 - y1, x2 - x1), h = 10;
    c.strokeStyle = color; c.fillStyle = color; c.lineWidth = lw || 3; c.lineCap = "round";
    c.beginPath(); c.moveTo(x1, y1); c.lineTo(x2, y2); c.stroke();
    c.beginPath(); c.moveTo(x2, y2); c.lineTo(x2 - h * Math.cos(a - 0.45), y2 - h * Math.sin(a - 0.45)); c.lineTo(x2 - h * Math.cos(a + 0.45), y2 - h * Math.sin(a + 0.45)); c.closePath(); c.fill();
  }
  function txt(c, s, x, y, color, size, align, bold) { c.fillStyle = color; c.font = (bold ? "700 " : "500 ") + (size || 14) + "px system-ui, sans-serif"; c.textAlign = align || "left"; c.textBaseline = "middle"; c.fillText(s, x, y); }
  function dot(c, x, y, r, color) { c.fillStyle = color; c.beginPath(); c.arc(x, y, r, 0, TAU); c.fill(); }
  function rrect(c, x, y, w, h, r, fill, stroke) { c.beginPath(); c.moveTo(x + r, y); c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r); c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r); c.closePath(); if (fill) { c.fillStyle = fill; c.fill(); } if (stroke) { c.strokeStyle = stroke; c.lineWidth = 2; c.stroke(); } }
  var f1 = function (v) { return (Math.round(v * 10) / 10).toString().replace(".", ","); };
  var f2 = function (v) { return (Math.round(v * 100) / 100).toString().replace(".", ","); };
  function L(t, color) { return '<span style="color:' + (color || "inherit") + '">' + t + "</span>"; }

  /* 1) Düzgün çembersel hareket ve merkezcil kuvvet */
  KESIF.anim.circ = function (A) {
    A.size(330);
    var c = A.ctx, th = 0, cut = null, cx = 210, cy = 170;
    var sv = A.slider("Hız v (m/s)", 1, 10, 4, 0.5), sr = A.slider("Yarıçap r (m)", 1, 5, 2, 0.5), sm = A.slider("Kütle m (kg)", 1, 5, 1, 1);
    var base = "Hızı artır: gerekli merkezcil kuvvet hızın karesiyle büyür. Yarıçapı küçült: aynı hızla daha sıkı dönmek daha çok kuvvet ister.";
    A.button("İpi kopar", function () { var v = sv.get(), r = sr.get(), R = 40 + r * 20; cut = { x: cx + R * Math.cos(th), y: cy - R * Math.sin(th), vx: -Math.sin(th) * v * 24, vy: -Math.cos(th) * v * 24 }; A.cap("İp koptu: merkezcil kuvvet kalktı. Cisme başka kuvvet etki etmediği için o andaki hız yönünde, yani çembere teğet bir doğruda gider."); });
    A.button("Baştan", function () { cut = null; A.cap(base); });
    A.cap(base);
    A.frame(function (dt) {
      var v = sv.get(), r = sr.get(), m = sm.get(), R = 40 + r * 20, w = v / r, ac = v * v / r, F = m * ac;
      c.clearRect(0, 0, A.W, A.H);
      c.strokeStyle = A.col("--line"); c.lineWidth = 2; c.setLineDash([6, 6]); c.beginPath(); c.arc(cx, cy, R, 0, TAU); c.stroke(); c.setLineDash([]);
      var x, y;
      if (!cut) { th += w * dt * 0.45; x = cx + R * Math.cos(th); y = cy - R * Math.sin(th); c.strokeStyle = A.col("--muted"); c.lineWidth = 2; c.beginPath(); c.moveTo(cx, cy); c.lineTo(x, y); c.stroke(); dot(c, cx, cy, 5, A.col("--muted")); }
      else { cut.x += cut.vx * dt; cut.y += cut.vy * dt; x = cut.x; y = cut.y; if (x < -30 || x > A.W + 30 || y < -30 || y > A.H + 30) { cut.x = cx; cut.y = cy; } }
      var vx = cut ? cut.vx : -Math.sin(th), vy = cut ? cut.vy : -Math.cos(th), vl = Math.hypot(vx, vy) || 1;
      arrow(c, x, y, x + vx / vl * (14 + v * 7), y + vy / vl * (14 + v * 7), A.col("--good"), 4);
      if (!cut) { var fl = Math.min(R - 14, 10 + F * 1.7); arrow(c, x, y, x + (cx - x) / R * fl, y + (cy - y) / R * fl, A.col("--bad"), 4); }
      dot(c, x, y, 8 + m * 1.6, A.col("--accent"));
      txt(c, "yeşil: hız (teğet)", 12, 18, A.col("--good"), 14, "left", true); txt(c, "kırmızı: merkezcil kuvvet", 12, 38, A.col("--bad"), 14, "left", true);
      A.read(L("v = " + f1(v) + " m/s,  r = " + f1(r) + " m,  m = " + m + " kg") + "<br>" + L("a = v² / r = " + f1(ac) + " m/s²") + "<br>" + L("F = m·v² / r = " + f1(F) + " N", "#c0344a") + "<br>" + L("ω = v / r = " + f2(w) + " rad/s") + "<br>" + L("Dönme dolap, viraj ve çamaşır makinesinde de merkeze çeken bir kuvvet vardır.", "var(--muted)"));
    });
  };

  /* 2) Galvanik hücre (Zn–Cu) */
  KESIF.anim.galv = function (A) {
    A.size(390);
    var c = A.ctx, bridge = true, flow = 1, t = 0, ele = [], ions = [];
    for (var i = 0; i < 12; i++) ele.push(i / 12);
    for (var j = 0; j < 6; j++) ions.push({ p: j / 6, kind: j % 2 });
    A.toggle("Tuz köprüsü takılı", true, function (v) { bridge = v; A.cap(v ? "Tuz köprüsü iyon akışıyla iki yarı hücrenin yük dengesini sağlar; elektron akışı sürer." : "Tuz köprüsü çıkarıldı: yük dengesi bozulur, elektron akışı kısa sürede durur ve voltmetre sıfıra iner."); });
    A.button("Baştan", function () { t = 0; });
    A.cap("Çinko elektrot elektron verir (yükseltgenir, çözünür). Elektronlar dış devreden bakır elektroda gider ve Cu²⁺ iyonlarını indirger (bakır birikir).");
    function wirePt(s) { var d = s * 270; if (d < 80) return [90, 150 - d]; d -= 80; if (d < 240) return [90 + d, 70]; d -= 240; return [330, 70 + d]; }
    A.frame(function (dt) {
      flow += ((bridge ? 1 : 0) - flow) * Math.min(1, dt * 1.4); t += dt * flow;
      c.clearRect(0, 0, A.W, A.H);
      rrect(c, 12, 225, 160, 150, 12, "rgba(120,170,255,.28)", A.col("--line")); rrect(c, 248, 225, 160, 150, 12, "rgba(60,140,255,.45)", A.col("--line"));
      var wZn = Math.max(10, 26 - t * 0.5), wCu = Math.min(44, 26 + t * 0.5);
      c.fillStyle = "#9aa3ad"; c.fillRect(90 - wZn / 2, 140, wZn, 215); txt(c, "Zn", 90, 126, A.col("--ink"), 16, "center", true);
      c.fillStyle = "#c46a2d"; c.fillRect(330 - wCu / 2, 140, wCu, 215); txt(c, "Cu", 330, 126, A.col("--ink"), 16, "center", true);
      c.strokeStyle = A.col("--ink"); c.lineWidth = 3; c.beginPath(); c.moveTo(90, 140); c.lineTo(90, 70); c.lineTo(176, 70); c.moveTo(244, 70); c.lineTo(330, 70); c.lineTo(330, 140); c.stroke();
      dot(c, 210, 70, 34, A.col("--card")); c.strokeStyle = A.col("--ink"); c.lineWidth = 3; c.beginPath(); c.arc(210, 70, 34, 0, TAU); c.stroke();
      txt(c, f2(1.1 * flow) + " V", 210, 64, A.col("--ink"), 16, "center", true); txt(c, "voltmetre", 210, 84, A.col("--muted"), 11, "center");
      for (var i = 0; i < ele.length; i++) { ele[i] = (ele[i] + dt * 0.13 * flow) % 1; var p = wirePt(ele[i]); if (p[1] === 70 && p[0] > 174 && p[0] < 246) continue; dot(c, p[0], p[1], 5, "#ffd23f"); }
      txt(c, "e⁻ →", 130, 52, "#d9a400", 15, "center", true); txt(c, "e⁻ →", 292, 52, "#d9a400", 15, "center", true);
      c.lineJoin = "round"; c.strokeStyle = "rgba(160,160,160,.8)"; c.lineWidth = 16; c.beginPath(); c.moveTo(130, 262); c.lineTo(130, 190); c.lineTo(290, 190); c.lineTo(290, 262); c.stroke();
      c.strokeStyle = A.col("--card2"); c.lineWidth = 10; c.beginPath(); c.moveTo(130, 262); c.lineTo(130, 190); c.lineTo(290, 190); c.lineTo(290, 262); c.stroke();
      if (bridge) for (var k = 0; k < ions.length; k++) { ions[k].p = (ions[k].p + dt * 0.1 * flow) % 1; var q = ions[k].p, bx; if (ions[k].kind === 0) { bx = 130 + q * 160; dot(c, bx, 190, 6, "#e0555c"); } else { bx = 130 + (1 - q) * 160; dot(c, bx, 190, 6, "#3a7bd5"); } }
      txt(c, "Tuz köprüsü", 210, 166, A.col("--muted"), 13, "center");
      var nz = Math.min(7, Math.floor(t * 0.6)); for (var z = 0; z < nz; z++) { var zx = 30 + (z * 23) % 130, zy = 250 + (z * 37) % 100; if (Math.abs(zx - 90) < 22) zx += 44; dot(c, zx, zy, 8, "#7f9bd6"); txt(c, "2+", zx, zy, "#fff", 9, "center", true); }
      var nc = Math.max(0, 7 - Math.floor(t * 0.6)); for (var u = 0; u < nc; u++) { var ux = 268 + (u * 29) % 130, uy = 250 + (u * 41) % 100; if (Math.abs(ux - 330) < 26) ux += 46; dot(c, ux, uy, 8, "#2c6fd1"); txt(c, "2+", ux, uy, "#fff", 9, "center", true); }
      txt(c, "Zn kütlesi azalır", 92, 388, A.col("--muted"), 13, "center"); txt(c, "Cu kütlesi artar", 330, 388, A.col("--muted"), 13, "center");
      A.read(L("ANOT (−), yükseltgenme: Zn → Zn²⁺ + 2e⁻", "#c0344a") + "<br>" + L("KATOT (+), indirgenme: Cu²⁺ + 2e⁻ → Cu", "#1f7a4d") + "<br>" + L("E°pil = E°katot − E°anot = 0,34 − (−0,76) = 1,10 V") + "<br>" + L("Şu anki voltaj: " + f2(1.1 * flow) + " V" + (bridge ? "" : " (tuz köprüsü yok: devre tamamlanmıyor)")));
    });
  };

  /* 3) DNA'nın kendini eşlemesi */
  KESIF.anim.dnarep = function (A) {
    A.size(360);
    var c = A.ctx, t = 0, spd = A.slider("Hız", 0.3, 2, 1, 0.1), n = 15, step = 25, x0 = 24;
    var seq = "ATGCGTACCTAGGCT", comp = { A: "T", T: "A", G: "C", C: "G" }, colr = { A: "#e0555c", T: "#3a7bd5", G: "#2fa36b", C: "#d99a00" };
    A.button("Baştan oynat", function () { t = 0; });
    var caps = [[0, "1) Eşlenmeden önce: iki zincir tamamlayıcı bazlarla (A–T, G–C) bağlıdır."], [1.5, "2) Helikaz enzimi çift sarmalı açar; eşlenme çatalı oluşur."], [4, "3) DNA polimeraz açılan her zincire tamamlayıcı nükleotitleri ekler. Üstte sentez kesintisizdir (öncü zincir)."], [8, "4) Altta sentez parçalar hâlinde yapılır (Okazaki parçaları): geciken zincir."], [12, "5) DNA ligaz parçaları birleştirir. Her DNA bir eski, bir yeni zincirden oluşur: yarı korunumlu eşlenme."]];
    var last = -1;
    A.frame(function (dt) {
      t += dt * spd.get(); if (t > 19) t = 0;
      var ci = 0; for (var i = 0; i < caps.length; i++) if (t >= caps[i][0]) ci = i; if (ci !== last) { last = ci; A.cap(caps[ci][1]); }
      c.clearRect(0, 0, A.W, A.H);
      var fork = x0 + Math.max(0, Math.min(1, (t - 1.5) / 9)) * (n * step - 8), yTop = 150, yBot = 215;
      for (var k = 0; k < n; k++) {
        var x = x0 + k * step, open = x < fork, sep = open ? Math.min(44, (fork - x) * 0.3) : 0, b = seq[k % seq.length], cb = comp[b], ty = yTop - sep, by = yBot + sep;
        if (!open) { c.strokeStyle = A.col("--line"); c.lineWidth = 2; c.beginPath(); c.moveTo(x, ty + 9); c.lineTo(x, by - 9); c.stroke(); }
        c.fillStyle = colr[b]; c.fillRect(x - 10, ty - 10, 20, 20); txt(c, b, x, ty, "#fff", 13, "center", true);
        c.fillStyle = colr[cb]; c.fillRect(x - 10, by - 10, 20, 20); txt(c, cb, x, by, "#fff", 13, "center", true);
        if (open && t > 4 && (fork - x) / 28 > 0.6) { var ny = ty - 28; c.fillStyle = colr[cb]; c.fillRect(x - 10, ny - 10, 20, 20); txt(c, cb, x, ny, "#fff", 13, "center", true); }
        if (open && t > 8) { var frag = Math.floor(k / 5), appear = 8 + (n / 5 - frag) * 0.8; if (t > appear && (fork - x) / 28 > 1 && (k % 5 !== 4 || t < 12)) { var ny2 = by + 28; c.fillStyle = colr[b]; c.fillRect(x - 10, ny2 - 10, 20, 20); txt(c, b, x, ny2, "#fff", 13, "center", true); } }
      }
      if (t > 1.5) { c.fillStyle = "#8a63d2"; c.beginPath(); c.moveTo(fork, 165); c.lineTo(fork + 24, 182); c.lineTo(fork, 200); c.closePath(); c.fill(); txt(c, "helikaz", Math.min(fork + 4, 360), 250 + 40, "#8a63d2", 14, "center", true); }
      if (t > 4) { var px = Math.max(x0 + 10, fork - 50); dot(c, px, yTop - 78, 15, A.col("--accent")); txt(c, "polimeraz", Math.min(px, 350), yTop - 104, A.col("--accent-text", "--accent"), 14, "center", true); }
      if (t > 12) txt(c, "DNA ligaz birleştirdi ✓", 210, 336, A.col("--good"), 15, "center", true);
      txt(c, "orta: eski (şablon) zincirler · dışta: yeni zincirler", 210, 22, A.col("--muted"), 13, "center");
      A.read(L("Öncü zincir: kesintisiz sentezlenir.") + "<br>" + L("Geciken zincir: Okazaki parçaları, sonra ligaz.") + "<br>" + L("Sonuç: iki DNA, her biri 1 eski + 1 yeni zincir.", "#1f7a4d"));
    });
  };

  /* 4) Açısal momentumun korunumu (patenci) */
  KESIF.anim.skater = function (A) {
    A.size(300);
    var c = A.ctx, th = 0, sr = A.slider("Kollar: kapalı ← → açık", 0.4, 2.2, 2.0, 0.05), I0 = 0.5, m = 1, Lc = 3, cx = 210, cy = 150;
    A.cap("Kolları kapat: kütle dönme eksenine yaklaşır, eylemsizlik momenti I küçülür. Açısal momentum L = I·ω korunduğu için ω artar.");
    A.frame(function (dt) {
      var r = sr.get(), I = I0 + 2 * m * r * r, w = Lc / I, K = 0.5 * I * w * w;
      th += w * dt * 1.2; c.clearRect(0, 0, A.W, A.H);
      var pr = r * 62;
      c.strokeStyle = A.col("--line"); c.lineWidth = 1; c.setLineDash([4, 5]); c.beginPath(); c.arc(cx, cy, pr, 0, TAU); c.stroke(); c.setLineDash([]);
      for (var s = -1; s <= 1; s += 2) { var ax = cx + s * pr * Math.cos(th), ay = cy - s * pr * Math.sin(th); c.strokeStyle = A.col("--ink"); c.lineWidth = 6; c.lineCap = "round"; c.beginPath(); c.moveTo(cx, cy); c.lineTo(ax, ay); c.stroke(); dot(c, ax, ay, 11, A.col("--accent")); }
      dot(c, cx, cy, 24, A.col("--muted")); txt(c, "gövde", cx, cy, "#fff", 12, "center", true);
      c.strokeStyle = A.col("--good"); c.lineWidth = 4; c.beginPath(); c.arc(cx, cy, Math.min(pr + 20, 136), -th - 0.7, -th, false); c.stroke();
      txt(c, "üstten görünüş", 10, 16, A.col("--muted"), 13, "left");
      A.read(L("Kol uzunluğu r = " + f2(r) + " m") + "<br>" + L("I = I₀ + 2·m·r² = " + f2(I) + " kg·m²") + "<br>" + L("ω = L / I = " + f2(w) + " rad/s", "#1f7a4d") + "<br>" + L("L = I·ω = " + f2(I * w) + " (sabit kalır)", "#c0344a") + "<br>" + L("K = ½·I·ω² = " + f2(K) + " J (kolları kapatırken yapılan iş enerjiyi artırır)") + "<br>" + L("Buz patencisi, dalgıç ve jimnastikçi bu ilkeden yararlanır.", "var(--muted)"));
    });
  };

  /* 5) Kepler: eşit alanlar */
  KESIF.anim.orbit = function (A) {
    A.size(330);
    var c = A.ctx, M = 0, se = A.slider("Yörünge basıklığı (e)", 0.05, 0.8, 0.6, 0.05), ox = 210, cy = 165, a = 190;
    A.cap("Gezegen Güneş’e yakınken hızlı, uzakken yavaştır. Eşit sürelerde taranan alanlar (boyalı bölgeler) eşittir: Kepler’in ikinci kanunu.");
    function solve(Mv, e) { var E = Mv; for (var i = 0; i < 8; i++) E = E - (E - e * Math.sin(E) - Mv) / (1 - e * Math.cos(E)); return E; }
    function pos(Mv, e) { var E = solve(Mv, e), b = a * Math.sqrt(1 - e * e); return [a * (Math.cos(E) - e), b * Math.sin(E)]; }
    A.frame(function (dt) {
      var e = se.get(), b = a * Math.sqrt(1 - e * e), cx = ox + a * e;
      M += dt * TAU / 9; c.clearRect(0, 0, A.W, A.H);
      c.strokeStyle = A.col("--line"); c.lineWidth = 2; c.beginPath(); for (var k = 0; k <= 120; k++) { var E2 = k / 120 * TAU, xx = ox + a * Math.cos(E2), yy = cy - b * Math.sin(E2); if (k === 0) c.moveTo(xx, yy); else c.lineTo(xx, yy); } c.closePath(); c.stroke();
      var d = 0.5; [[-d / 2, d / 2, "rgba(224,85,92,.38)"], [Math.PI - d / 2, Math.PI + d / 2, "rgba(58,123,213,.38)"]].forEach(function (w) {
        c.fillStyle = w[2]; c.beginPath(); c.moveTo(cx, cy); for (var q = 0; q <= 24; q++) { var p = pos(w[0] + (w[1] - w[0]) * q / 24, e); c.lineTo(cx + p[0], cy - p[1]); } c.closePath(); c.fill();
      });
      var p0 = pos(M, e), px = cx + p0[0], py = cy - p0[1], r = Math.hypot(p0[0], p0[1]), rmin = a * (1 - e), vrel = Math.sqrt((2 / r - 1 / a) / (2 / rmin - 1 / a));
      dot(c, cx, cy, 14, "#f2b705"); txt(c, "Güneş", cx, cy + 26, A.col("--muted"), 13, "center");
      c.strokeStyle = A.col("--muted"); c.lineWidth = 1; c.beginPath(); c.moveTo(cx, cy); c.lineTo(px, py); c.stroke(); dot(c, px, py, 9, A.col("--accent"));
      var p1 = pos(M + 0.02, e), vx = p1[0] - p0[0], vy = -(p1[1] - p0[1]), vl = Math.hypot(vx, vy) || 1; arrow(c, px, py, px + vx / vl * (14 + 40 * vrel), py + vy / vl * (14 + 40 * vrel), A.col("--good"), 4);
      txt(c, "kırmızı ve mavi dilimlerin alanı eşit", 210, 14, A.col("--muted"), 13, "center");
      A.read(L("Gezegen–Güneş uzaklığı: " + f2(r / a) + " a") + "<br>" + L("Hız (günberi hızına göre): %" + Math.round(vrel * 100), "#1f7a4d") + "<br>" + L("Kırmızı dilim günberide (hızlı), mavi dilim günötede (yavaş) taranır; alanları eşittir.") + "<br>" + L("Üçüncü kanun: yörünge büyüdükçe periyot artar (T² ∝ a³).", "var(--muted)"));
    });
  };

  /* 6) Kimyasal denge ve Le Chatelier */
  KESIF.anim.denge = function (A) {
    A.size(470);
    var c = A.ctx, nA = 80, nB = 20, kf = 0.06, kb = 0.03, hist = [], parts = [], tick = 0;
    function mk(type) { return { x: 20 + Math.random() * 380, y: 50 + Math.random() * 170, vx: (Math.random() - 0.5) * 70, vy: (Math.random() - 0.5) * 70, type: type }; }
    for (var i = 0; i < 100; i++) parts.push(mk(i < 80 ? "A" : "B"));
    A.button("A ekle (+30)", function () { nA += 30; A.cap("Girene (A) eklendi: denge bozuldu. Sistem eklenen maddeyi azaltacak yönde, yani ileri yönde tepki verir (Le Chatelier)."); });
    A.button("B ekle (+30)", function () { nB += 30; A.cap("Ürüne (B) eklendi: sistem bu etkiyi azaltmak için geri yönde ilerler."); });
    A.button("Sıfırla", function () { nA = 80; nB = 20; hist = []; });
    A.cap("A ⇌ B tersinir tepkimesi: ileri ve geri hızlar eşitlenince derişimler sabit kalır ama tepkime durmaz (dinamik denge). Madde ekleyerek dengeyi bozmayı dene.");
    A.frame(function (dt) {
      var rf = kf * nA, rb = kb * nB, dn = (rb - rf) * dt * 3; nA += dn; nB -= dn; tick += dt; if (tick > 0.12) { tick = 0; hist.push([nA, nB]); if (hist.length > 160) hist.shift(); }
      var wantA = Math.round(nA), wantB = Math.round(nB);
      while (parts.length < wantA + wantB) parts.push(mk("A"));
      while (parts.length > wantA + wantB) parts.pop();
      var ca = 0; parts.forEach(function (p) { if (p.type === "A") ca++; });
      for (var i = 0; i < parts.length && ca !== wantA; i++) { if (ca > wantA && parts[i].type === "A") { parts[i].type = "B"; ca--; } else if (ca < wantA && parts[i].type === "B") { parts[i].type = "A"; ca++; } }
      c.clearRect(0, 0, A.W, A.H);
      rrect(c, 10, 36, 400, 190, 10, null, A.col("--line")); txt(c, "Tepkime kabı", 14, 20, A.col("--ink"), 14, "left", true); txt(c, "● A", 330, 20, "#3a7bd5", 14, "left", true); txt(c, "● B", 372, 20, "#f08a24", 14, "left", true);
      parts.forEach(function (p) { p.x += p.vx * dt; p.y += p.vy * dt; if (p.x < 18 || p.x > 402) p.vx *= -1; if (p.y < 44 || p.y > 218) p.vy *= -1; dot(c, Math.max(18, Math.min(402, p.x)), Math.max(44, Math.min(218, p.y)), 5, p.type === "A" ? "#3a7bd5" : "#f08a24"); });
      var gx = 10, gy = 270, gw = 400, gh = 170, mx = 170; txt(c, "Madde miktarı – zaman", gx, 254, A.col("--ink"), 14, "left", true); c.strokeStyle = A.col("--line"); c.lineWidth = 1.5; c.strokeRect(gx, gy, gw, gh);
      [["#3a7bd5", 0], ["#f08a24", 1]].forEach(function (s) { c.strokeStyle = s[0]; c.lineWidth = 3; c.beginPath(); hist.forEach(function (h, i) { var x = gx + i / 160 * gw, y = gy + gh - Math.min(mx, h[s[1]]) / mx * gh; if (i === 0) c.moveTo(x, y); else c.lineTo(x, y); }); c.stroke(); });
      var eq = Math.abs(rf - rb) < 0.4;
      A.read(L("A: " + Math.round(nA) + "   B: " + Math.round(nB) + "   K = [B]/[A] = " + f2(nB / Math.max(1, nA))) + "<br>" + L("ileri hız = " + f1(rf), "#3a7bd5") + " · " + L("geri hız = " + f1(rb), "#d9720f") + "<br>" + L(eq ? "Denge: ileri hız = geri hız (tepkime sürüyor)" : "Denge yeniden kuruluyor…", eq ? "#1f7a4d" : "var(--muted)"));
    });
  };

  /* 7) Protein sentezi (translasyon) */
  KESIF.anim.transl = function (A) {
    A.size(330);
    var c = A.ctx, t = 0, cod = [["AUG", "UAC", "Met", "#e0555c"], ["GCU", "CGA", "Ala", "#2fa36b"], ["UUC", "AAG", "Fen", "#3a7bd5"], ["UAA", "", "DUR", "#777"]], per = 3.2;
    A.button("Baştan oynat", function () { t = 0; });
    A.cap("mRNA ribozomdan geçerken her kodon (3 baz) bir amino asidi belirler. tRNA’nın antikodonu kodonla eşleşir, amino asitler peptit bağıyla eklenir; bitiş kodonunda protein serbest kalır.");
    A.frame(function (dt) {
      t += dt; if (t > per * 4 + 2) t = 0; c.clearRect(0, 0, A.W, A.H);
      var y = 270, x0 = 14, cw = 100;
      c.strokeStyle = A.col("--ink"); c.lineWidth = 3; c.beginPath(); c.moveTo(6, y); c.lineTo(414, y); c.stroke(); txt(c, "mRNA (5′ → 3′)", 10, y + 36, A.col("--muted"), 13);
      cod.forEach(function (d, i) { var x = x0 + i * cw; rrect(c, x, y - 18, cw - 8, 36, 6, d[3], null); txt(c, d[0], x + (cw - 8) / 2, y, "#fff", 19, "center", true); });
      var idx = Math.min(3, Math.floor(t / per)), ph = (t % per) / per, rx = x0 + idx * cw, mid = rx + (cw - 8) / 2;
      c.fillStyle = "rgba(138,99,210,.28)"; c.beginPath(); c.ellipse(mid, y - 40, 56, 46, 0, 0, TAU); c.fill(); c.strokeStyle = "#8a63d2"; c.lineWidth = 2; c.stroke(); txt(c, "ribozom", mid, y - 94, "#8a63d2", 13, "center", true);
      if (idx < 3) { var d = cod[idx], ty = y - 142 + (1 - Math.min(1, ph * 2.2)) * -60; rrect(c, mid - 38, ty, 76, 48, 8, "#f4f1fb", "#8a63d2"); txt(c, d[1], mid, ty + 14, "#5b3fa6", 15, "center", true); dot(c, mid, ty + 34, 10, d[3]); txt(c, d[2], mid, ty + 34, "#fff", 9, "center", true); }
      var done = Math.min(3, idx + (ph > 0.55 ? 1 : 0)); if (idx === 3) done = 3;
      for (var i = 0; i < done; i++) { var cx = 40 + i * 46, cy = 40; if (i > 0) { c.strokeStyle = A.col("--ink"); c.lineWidth = 3; c.beginPath(); c.moveTo(cx - 46 + 15, cy); c.lineTo(cx - 15, cy); c.stroke(); } dot(c, cx, cy, 16, cod[i][3]); txt(c, cod[i][2], cx, cy, "#fff", 11, "center", true); }
      txt(c, "büyüyen polipeptit", 12, 14, A.col("--ink"), 13, "left", true);
      if (idx === 3) txt(c, "UAA: bitiş kodonu, protein serbest ✓", 210, 100, A.col("--good"), 15, "center", true);
      A.read(L("Kodon (mRNA) ↔ antikodon (tRNA): A–U ve G–C eşleşir.") + "<br>" + L("AUG = başlangıç (Met); UAA = bitiş kodonu.", "var(--muted)") + "<br>" + L(idx < 3 ? "Şu an okunan kodon: " + cod[idx][0] + " → " + cod[idx][2] : "Sentez bitti.", "#5b3fa6"));
    });
  };

  /* 8) Refleks yayı */
  KESIF.anim.refleks = function (A) {
    A.size(360);
    var c = A.ctx, t = -1, run = false;
    A.button("Sıcak cisme dokun", function () { t = 0; run = true; A.cap("Duyu nöronu uyarıyı omuriliğe taşır; omurilik motor nörona komut verir (refleks, beyni beklemeden). Bilgi aynı anda beyne de gider; acıyı bu yüzden elimizi çektikten sonra fark ederiz."); });
    A.button("Sıfırla", function () { t = -1; run = false; });
    A.cap("Dokunmayı dene: refleks yayında yol kısadır, tepki çok hızlıdır.");
    var P = { hand: [60, 300], cord: [210, 215], muscle: [360, 300], brain: [210, 60] };
    function lerp(a, b, u) { return [a[0] + (b[0] - a[0]) * u, a[1] + (b[1] - a[1]) * u]; }
    A.frame(function (dt) {
      if (run) t += dt; c.clearRect(0, 0, A.W, A.H);
      function path(a, b, col) { c.strokeStyle = col; c.lineWidth = 5; c.beginPath(); c.moveTo(a[0], a[1]); c.lineTo(b[0], b[1]); c.stroke(); }
      path(P.hand, P.cord, "#3a7bd5"); path(P.cord, P.muscle, "#e0555c"); path(P.cord, P.brain, A.col("--muted"));
      rrect(c, P.cord[0] - 58, P.cord[1] - 22, 116, 44, 10, A.col("--card"), A.col("--line")); txt(c, "omurilik", P.cord[0], P.cord[1], A.col("--ink"), 15, "center", true);
      rrect(c, P.brain[0] - 48, P.brain[1] - 28, 96, 56, 14, A.col("--card"), A.col("--line")); txt(c, "beyin", P.brain[0], P.brain[1], A.col("--ink"), 15, "center", true);
      var pulled = t > 1.6, move = pulled ? Math.min(30, (t - 1.6) * 60) : 0;
      dot(c, P.hand[0] - move * 0.4, P.hand[1] - move, 28, "#f2b999"); txt(c, "el", P.hand[0] - move * 0.4, P.hand[1] - move, "#7a4a2a", 14, "center", true);
      if (t >= 0 && t < 1.0) { var q = lerp(P.hand, P.cord, t); dot(c, q[0], q[1], 8, "#3a7bd5"); }
      if (t >= 1.0 && t < 1.6) { var q2 = lerp(P.cord, P.muscle, (t - 1.0) / 0.6); dot(c, q2[0], q2[1], 8, "#e0555c"); }
      if (t >= 1.0 && t < 2.4) { var q3 = lerp(P.cord, P.brain, (t - 1.0) / 1.4); dot(c, q3[0], q3[1], 7, A.col("--muted")); }
      dot(c, P.muscle[0], P.muscle[1], pulled ? 22 : 28, pulled ? "#e0555c" : A.col("--muted")); txt(c, "kas", P.muscle[0], P.muscle[1] + 44, A.col("--ink"), 14, "center");
      txt(c, "duyu nöronu", 90, 232, "#3a7bd5", 13, "center", true); txt(c, "motor nöron", 330, 232, "#e0555c", 13, "center", true);
      if (t > 2.4) txt(c, "“Ay, sıcak!” beyin şimdi fark etti", 210, 14, A.col("--bad"), 15, "center", true);
      A.read(L(t < 0 ? "Dokunmak için düğmeye bas." : t < 1.6 ? "Refleks: omurilik karar verdi, el geri çekiliyor." : t < 2.4 ? "Beyne giden bilgi daha uzun yol alıyor…" : "Bilinç sonradan geldi: refleks beyni beklemez.", "#1f7a4d") + "<br>" + L("Yol: reseptör → duyu nöronu → omurilik → motor nöron → kas (efektör)", "var(--muted)"));
    });
  };

  /* 9) pH ölçeği */
  KESIF.anim.ph = function (A) {
    A.size(330);
    var c = A.ctx, sp = A.slider("pH", 0, 14, 7, 0.5), pts = [];
    for (var i = 0; i < 120; i++) pts.push({ x: Math.random(), y: Math.random(), vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4 });
    A.cap("pH ölçeği logaritmiktir: pH 1 birim azalınca H₃O⁺ derişimi 10 katına çıkar. Her çözeltide pH + pOH = 14 (25 °C).");
    var cols = ["#e0243c", "#ef6a2a", "#f2b705", "#c6d531", "#2fa36b", "#2c9ea6", "#3a7bd5", "#6a4fd1", "#8a3fb3"];
    A.frame(function (dt) {
      var pH = sp.get(), ci = Math.min(8, Math.floor(pH / 14 * 9)), nH = Math.round(70 * Math.pow(0.52, pH)), nO = Math.round(70 * Math.pow(0.52, 14 - pH));
      c.clearRect(0, 0, A.W, A.H);
      rrect(c, 40, 20, 340, 200, 16, cols[ci] + "66", A.col("--line"));
      pts.forEach(function (p, i) { p.x += p.vx * dt; p.y += p.vy * dt; if (p.x < 0 || p.x > 1) p.vx *= -1; if (p.y < 0 || p.y > 1) p.vy *= -1; var px = 56 + Math.max(0, Math.min(1, p.x)) * 308, py = 34 + Math.max(0, Math.min(1, p.y)) * 172; if (i < nH) { dot(c, px, py, 8, "#e0243c"); txt(c, "+", px, py, "#fff", 12, "center", true); } else if (i < nH + nO) { dot(c, px, py, 8, "#2c6fd1"); txt(c, "−", px, py, "#fff", 13, "center", true); } });
      for (var k = 0; k < 9; k++) { c.fillStyle = cols[k]; c.fillRect(30 + k * 40, 250, 40, 26); }
      txt(c, "0", 30, 292, A.col("--muted"), 13, "center"); txt(c, "7", 30 + 4.5 * 40, 292, A.col("--muted"), 13, "center"); txt(c, "14", 30 + 9 * 40, 292, A.col("--muted"), 13, "center");
      var mxp = 30 + pH / 14 * 360; c.fillStyle = A.col("--ink"); c.beginPath(); c.moveTo(mxp, 246); c.lineTo(mxp - 8, 230); c.lineTo(mxp + 8, 230); c.closePath(); c.fill();
      txt(c, "asidik", 60, 316, "#e0243c", 14, "center", true); txt(c, "nötr", 210, 316, "#2fa36b", 14, "center", true); txt(c, "bazik", 360, 316, "#6a4fd1", 14, "center", true);
      A.read(L("pH = " + f1(pH), "inherit") + "<br>" + L("[H₃O⁺] = 10^(−" + f1(pH) + ") M", "#c0244a") + "<br>" + L("pOH = 14 − pH = " + f1(14 - pH) + " → [OH⁻] = 10^(−" + f1(14 - pH) + ") M", "#2c6fd1") + "<br>" + L(pH < 7 ? "[H₃O⁺] > [OH⁻]: asidik ortam" : pH > 7 ? "[H₃O⁺] < [OH⁻]: bazik ortam" : "[H₃O⁺] = [OH⁻]: nötr ortam", "#1f7a4d") + "<br>" + L("(Parçacık sayısı gösterim amaçlıdır.)", "var(--muted)"));
    });
  };
})();
