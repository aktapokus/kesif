/* Ders animasyonları, üçüncü paket: çubuk yarışı (bars), enerji düzeyleri (levels), ortalama hız (ortalamahiz), tepkime derecesi (order). Veri ders adımındaki st.data ile gelir. Özgün içerik (CC BY-NC-SA 4.0). */
KESIF.anim = KESIF.anim || {};
(function () {
  var TAU = Math.PI * 2;
  function arrow(c, x1, y1, x2, y2, color, lw) { var a = Math.atan2(y2 - y1, x2 - x1), h = 9; c.strokeStyle = color; c.fillStyle = color; c.lineWidth = lw || 3; c.lineCap = "round"; c.beginPath(); c.moveTo(x1, y1); c.lineTo(x2, y2); c.stroke(); c.beginPath(); c.moveTo(x2, y2); c.lineTo(x2 - h * Math.cos(a - 0.45), y2 - h * Math.sin(a - 0.45)); c.lineTo(x2 - h * Math.cos(a + 0.45), y2 - h * Math.sin(a + 0.45)); c.closePath(); c.fill(); }
  function txt(c, s, x, y, color, size, align, bold) { c.fillStyle = color; c.font = (bold ? "700 " : "500 ") + (size || 14) + "px system-ui, sans-serif"; c.textAlign = align || "left"; c.textBaseline = "middle"; c.fillText(s, x, y); }
  function dot(c, x, y, r, color) { c.fillStyle = color; c.beginPath(); c.arc(x, y, r, 0, TAU); c.fill(); }
  function rrect(c, x, y, w, h, r, fill, stroke, lw) { c.beginPath(); c.moveTo(x + r, y); c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r); c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r); c.closePath(); if (fill) { c.fillStyle = fill; c.fill(); } if (stroke) { c.strokeStyle = stroke; c.lineWidth = lw || 2; c.stroke(); } }
  var f1 = function (v) { return (Math.round(v * 10) / 10).toString().replace(".", ","); };
  var f2 = function (v) { return (Math.round(v * 100) / 100).toString().replace(".", ","); };
  function L(t, color) { return '<span style="color:' + (color || "inherit") + '">' + t + "</span>"; }
  var PAL = ["#e0555c", "#2fa36b", "#3a7bd5", "#d99a00", "#8a63d2", "#2c9ea6", "#c0392b", "#16a085"];

  /* ===== Çubuk yarışı: st.data = { items: [{ t, v }], unit } ===== */
  KESIF.anim.bars = function (A) {
    var d = A.st.data || { items: [] }, items = d.items.slice(), c = A.ctx, t = 0, mx = Math.max.apply(null, items.map(function (i) { return i.v; })) || 1;
    A.size(30 + items.length * 44);
    A.button("Baştan oynat", function () { t = 0; });
    A.cap(d.cap || "Çubuklar büyürken değerleri karşılaştır: hangisi en büyük, hangisi en küçük? Fark neden var?");
    A.frame(function (dt) {
      t += dt; c.clearRect(0, 0, A.W, A.H);
      items.forEach(function (it, i) { var y = 16 + i * 44, u = Math.min(1, Math.max(0, (t - i * 0.35) / 1.2)); u = 1 - Math.pow(1 - u, 3); var w = 250 * it.v / mx * u; txt(c, it.t, 6, y + 12, A.col("--ink"), 14, "left", true); rrect(c, 130, y, 260, 24, 8, A.col("--card2"), null); if (w > 1) rrect(c, 130, y, Math.max(8, w), 24, 8, PAL[i % PAL.length], null); txt(c, f1(it.v * u) + " " + (d.unit || ""), 130 + Math.max(8, w) + 6, y + 12, A.col("--ink"), 13, "left", true); });
      A.read(L(d.note || "", "#1f7a4d"));
    });
  };

  /* ===== Enerji düzeyleri: st.data = { levels: [{ t, v }], arrows: [[i, j, "etiket"]], unit } ===== */
  KESIF.anim.levels = function (A) {
    var d = A.st.data || { levels: [], arrows: [] }, lv = d.levels, ar = d.arrows || [], c = A.ctx, t = 0, vmin = Math.min.apply(null, lv.map(function (l) { return l.v; })), vmax = Math.max.apply(null, lv.map(function (l) { return l.v; }));
    A.size(360);
    A.button("Baştan oynat", function () { t = 0; });
    A.cap(d.cap || "Enerji düzeylerini ve aralarındaki geçişleri sırayla izle. Ok aşağıysa enerji azalır (ısı açığa çıkar), yukarıysa artar (ısı alınır).");
    function Y(v) { var r = vmax - vmin || 1; return 40 + (vmax - v) / r * 240; }
    A.frame(function (dt) {
      t += dt; c.clearRect(0, 0, A.W, A.H);
      var shownL = Math.min(lv.length, Math.floor(t / 1.0) + 1), shownA = Math.min(ar.length, Math.max(0, Math.floor((t - lv.length * 0.6) / 1.8) + 1));
      arrow(c, 24, 320, 24, 24, A.col("--muted"), 2); txt(c, "Enerji / entalpi (" + (d.unit || "kJ") + ")", 34, 14, A.col("--muted"), 12, "left", true);
      var n = lv.length; lv.forEach(function (l, i) { if (i >= shownL) return; var x = 50 + i * (330 / Math.max(1, n)), w = Math.min(120, 300 / Math.max(1, n)); var y = Y(l.v); var u = Math.min(1, (t - i * 1.0) / 0.5); c.globalAlpha = u; c.strokeStyle = PAL[i % PAL.length]; c.lineWidth = 6; c.beginPath(); c.moveTo(x, y); c.lineTo(x + w, y); c.stroke(); txt(c, l.t, x + w / 2, y - 22, A.col("--ink"), 13, "center", true); txt(c, f1(l.v), x + w / 2, y - 8, PAL[i % PAL.length], 13, "center", true); c.globalAlpha = 1; });
      ar.forEach(function (a, k) { if (k >= shownA) return; var i = a[0], j = a[1], xi = 50 + i * (330 / n) + Math.min(120, 300 / n) / 2, xj = 50 + j * (330 / n) + Math.min(120, 300 / n) / 2, yi = Y(lv[i].v), yj = Y(lv[j].v), u = Math.min(1, (t - (lv.length * 0.6 + k * 1.8)) / 1.2); var col = lv[j].v < lv[i].v ? "#2fa36b" : "#e0555c"; var ex = xi + (xj - xi) * 0.5, ey = yi + (yj - yi) * u; if (u > 0) arrow(c, ex, yi, ex, ey, col, 4); if (u >= 1) { txt(c, a[2], ex + 8, (yi + yj) / 2, col, 13, "left", true); } });
      var last = shownA > 0 ? ar[shownA - 1] : null; A.read(L(last ? last[2] : "Düzeyler belirir…", "#1f7a4d") + (d.note ? "<br>" + L(d.note, "var(--muted)") : ""));
    });
  };

  /* ===== Ortalama hız (derişim–zaman grafiği) ===== */
  KESIF.anim.ortalamahiz = function (A) {
    A.size(340);
    var c = A.ctx, s1 = A.slider("Başlangıç zamanı (s)", 0, 40, 0, 5), s2 = A.slider("Zaman aralığı (s)", 5, 40, 20, 5), t = 0;
    A.cap("Derişim zamanla azalıyor. Ortalama hız, seçilen aralıkta derişim değişiminin süreye oranıdır; grafikte kesen doğrunun eğimidir. Başlangıçta eğim dik, ilerledikçe daha yataydır: tepkime yavaşlar.");
    function C(x) { return 1.0 * Math.exp(-0.035 * x); }
    A.frame(function (dt) {
      t += dt; c.clearRect(0, 0, A.W, A.H);
      var gx = 50, gy = 30, gw = 350, gh = 240, xt = function (x) { return gx + x / 80 * gw; }, yt = function (v) { return gy + gh - v * gh; };
      c.strokeStyle = A.col("--line"); c.lineWidth = 1.5; c.strokeRect(gx, gy, gw, gh); txt(c, "[A] (M)", gx - 4, gy - 10, A.col("--ink"), 12, "left", true); txt(c, "zaman (s)", gx + gw, gy + gh + 18, A.col("--ink"), 12, "right", true);
      [0, 0.5, 1].forEach(function (v) { txt(c, f1(v), gx - 6, yt(v), A.col("--muted"), 11, "right"); }); [0, 20, 40, 60, 80].forEach(function (x) { txt(c, String(x), xt(x), gy + gh + 12, A.col("--muted"), 11, "center"); });
      var prog = Math.min(1, t / 1.5); c.strokeStyle = "#3a7bd5"; c.lineWidth = 4; c.beginPath(); for (var i = 0; i <= 80 * prog; i++) { var x = xt(i), y = yt(C(i)); if (i === 0) c.moveTo(x, y); else c.lineTo(x, y); } c.stroke();
      var a = s1.get(), b = Math.min(80, a + s2.get()), ca = C(a), cb = C(b);
      c.strokeStyle = "#e0555c"; c.lineWidth = 3; c.beginPath(); c.moveTo(xt(a), yt(ca)); c.lineTo(xt(b), yt(cb)); c.stroke(); dot(c, xt(a), yt(ca), 6, "#e0555c"); dot(c, xt(b), yt(cb), 6, "#e0555c");
      c.setLineDash([4, 4]); c.strokeStyle = "#888"; c.lineWidth = 1; c.beginPath(); c.moveTo(xt(a), yt(ca)); c.lineTo(xt(a), gy + gh); c.moveTo(xt(b), yt(cb)); c.lineTo(xt(b), gy + gh); c.moveTo(xt(a), yt(ca)); c.lineTo(gx, yt(ca)); c.moveTo(xt(b), yt(cb)); c.lineTo(gx, yt(cb)); c.stroke(); c.setLineDash([]);
      var rate = (ca - cb) / (b - a);
      A.read(L("Δ[A] = " + f2(cb) + " − " + f2(ca) + " = " + f2(cb - ca) + " M · Δt = " + (b - a) + " s") + "<br>" + L("Ortalama hız = −Δ[A]/Δt = " + f2(rate * 1000) + " × 10⁻³ M/s", "#c0344a") + "<br>" + L("Aralığı kaydır: ilerledikçe ortalama hız küçülür (reaktif azalıyor, çarpışma azalıyor).", "var(--muted)"));
    });
  };

  /* ===== Tepkime derecesi: hız = k [A]^n ===== */
  KESIF.anim.order = function (A) {
    A.size(320);
    var c = A.ctx, n = 1, sC = A.slider("Derişim [A] (M)", 0.5, 4, 1, 0.5), t = 0;
    A.button("0. derece", function () { n = 0; A.cap("0. derece: hız derişimden bağımsızdır; derişim 2 katına çıkınca hız aynı kalır."); });
    A.button("1. derece", function () { n = 1; A.cap("1. derece: hız derişimle doğru orantılıdır; derişim 2 katına çıkınca hız 2 katına çıkar."); });
    A.button("2. derece", function () { n = 2; A.cap("2. derece: hız derişimin karesiyle orantılıdır; derişim 2 katına çıkınca hız 4 katına çıkar."); });
    A.cap("Derişimi değiştir ve tepkime derecesini seç: hız denklemi H = k·[A]ⁿ. Derece, derişim değişince hızın nasıl değiştiğini söyler ve deneyle bulunur.");
    A.frame(function (dt) {
      t += dt; c.clearRect(0, 0, A.W, A.H); var C0 = sC.get(), k = 1;
      var gx = 50, gy = 30, gw = 340, gh = 220, X = function (x) { return gx + x / 4 * gw; }, Y = function (v) { return gy + gh - v / 16 * gh; };
      c.strokeStyle = A.col("--line"); c.lineWidth = 1.5; c.strokeRect(gx, gy, gw, gh); txt(c, "hız", gx - 4, gy - 10, A.col("--ink"), 12, "left", true); txt(c, "[A] (M)", gx + gw, gy + gh + 16, A.col("--ink"), 12, "right", true);
      c.strokeStyle = "#3a7bd5"; c.lineWidth = 4; c.beginPath(); for (var i = 0; i <= 80; i++) { var x = i / 20, y = Math.min(16, k * Math.pow(x, n)); if (i === 0) c.moveTo(X(x), Y(y)); else c.lineTo(X(x), Y(y)); } c.stroke();
      var r = k * Math.pow(C0, n), r1 = k * Math.pow(1, n); dot(c, X(C0), Y(Math.min(16, r)), 8, "#e0555c"); c.setLineDash([4, 4]); c.strokeStyle = "#e0555c"; c.lineWidth = 1.5; c.beginPath(); c.moveTo(X(C0), Y(Math.min(16, r))); c.lineTo(X(C0), gy + gh); c.moveTo(X(C0), Y(Math.min(16, r))); c.lineTo(gx, Y(Math.min(16, r))); c.stroke(); c.setLineDash([]);
      [1, 2, 3, 4].forEach(function (x) { txt(c, String(x), X(x), gy + gh + 12, A.col("--muted"), 11, "center"); });
      txt(c, n + ". derece", gx + 12, gy + 14, "#3a7bd5", 14, "left", true);
      A.read(L("H = k·[A]^" + n + (n === 0 ? " = k" : "") + "  (k = 1)", "inherit") + "<br>" + L("[A] = " + f1(C0) + " M → H = " + f1(r) + " (derişim 1 M iken H = " + f1(r1) + ")", "#c0344a") + "<br>" + L("Derişim 2 katına çıkarsa hız " + (n === 0 ? "değişmez (×1)" : n === 1 ? "2 katına çıkar (×2)" : "4 katına çıkar (×4)"), "#1f7a4d"));
    });
  };
})();
