/* Ders animasyonları, ikinci paket: genel amaçlı (zaman çizgisi tl, kavram akışı flow) ve alana özgü (enerji profili, çarpışma teorisi, nöron, tropizma, geri bildirim, gölge oyunu, asit kuvveti, titrasyon, kas kasılması).
   Genel animasyonlar ders adımındaki st.data ile beslenir (A.st.data). Telefonda okunur olması için çizim alanı 420 birim genişliğindedir; sayısal çıktılar A.read ile tuvalin altına yazılır.
   Modeller öğretim amaçlı sadeleştirilmiştir. Özgün içerik (CC BY-NC-SA 4.0). */
KESIF.anim = KESIF.anim || {};
(function () {
  var TAU = Math.PI * 2;
  function arrow(c, x1, y1, x2, y2, color, lw) { var a = Math.atan2(y2 - y1, x2 - x1), h = 9; c.strokeStyle = color; c.fillStyle = color; c.lineWidth = lw || 3; c.lineCap = "round"; c.beginPath(); c.moveTo(x1, y1); c.lineTo(x2, y2); c.stroke(); c.beginPath(); c.moveTo(x2, y2); c.lineTo(x2 - h * Math.cos(a - 0.45), y2 - h * Math.sin(a - 0.45)); c.lineTo(x2 - h * Math.cos(a + 0.45), y2 - h * Math.sin(a + 0.45)); c.closePath(); c.fill(); }
  function txt(c, s, x, y, color, size, align, bold) { c.fillStyle = color; c.font = (bold ? "700 " : "500 ") + (size || 14) + "px system-ui, sans-serif"; c.textAlign = align || "left"; c.textBaseline = "middle"; c.fillText(s, x, y); }
  function dot(c, x, y, r, color) { c.fillStyle = color; c.beginPath(); c.arc(x, y, r, 0, TAU); c.fill(); }
  function rrect(c, x, y, w, h, r, fill, stroke, lw) { c.beginPath(); c.moveTo(x + r, y); c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r); c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r); c.closePath(); if (fill) { c.fillStyle = fill; c.fill(); } if (stroke) { c.strokeStyle = stroke; c.lineWidth = lw || 2; c.stroke(); } }
  function wrap(c, text, x, y, maxW, lh, color, size, align, bold) { var words = String(text).split(" "), line = "", yy = y, n = 0; c.font = (bold ? "700 " : "500 ") + (size || 14) + "px system-ui, sans-serif"; words.forEach(function (w) { var t = line ? line + " " + w : w; if (c.measureText(t).width > maxW && line) { txt(c, line, x, yy, color, size, align, bold); yy += lh; n++; line = w; } else line = t; }); if (line) { txt(c, line, x, yy, color, size, align, bold); n++; } return n; }
  function lines(c, text, maxW, size, bold) { var words = String(text).split(" "), line = "", n = 0; c.font = (bold ? "700 " : "500 ") + (size || 14) + "px system-ui, sans-serif"; words.forEach(function (w) { var t = line ? line + " " + w : w; if (c.measureText(t).width > maxW && line) { n++; line = w; } else line = t; }); return n + (line ? 1 : 0); }
  var f1 = function (v) { return (Math.round(v * 10) / 10).toString().replace(".", ","); };
  var f2 = function (v) { return (Math.round(v * 100) / 100).toString().replace(".", ","); };
  function L(t, color) { return '<span style="color:' + (color || "inherit") + '">' + t + "</span>"; }
  var PAL = ["#e0555c", "#2fa36b", "#3a7bd5", "#d99a00", "#8a63d2", "#2c9ea6"];

  /* ===== Zaman çizgisi: st.data = { events: [{ y, t, d }] } ===== */
  KESIF.anim.tl = function (A) {
    var ev = (A.st.data && A.st.data.events) || [], c = A.ctx, t = 0, rowH = 70;
    A.size(Math.max(200, 40 + ev.length * rowH));
    A.button("Baştan oynat", function () { t = 0; });
    var last = -1; A.cap((A.st.data && A.st.data.cap) || "Olaylar zamanın akışıyla tek tek belirir. Her olayın nedenine ve sonucuna bak: bir olay genellikle bir sonrakini hazırlar.");
    A.frame(function (dt) {
      t += dt; var shown = Math.min(ev.length, Math.floor(t / 1.6) + 1); c.clearRect(0, 0, A.W, A.H);
      c.strokeStyle = A.col("--line"); c.lineWidth = 4; c.beginPath(); c.moveTo(70, 20); c.lineTo(70, 20 + ev.length * rowH - 20); c.stroke();
      c.strokeStyle = A.col("--accent"); c.beginPath(); c.moveTo(70, 20); c.lineTo(70, 20 + Math.min(ev.length - 1, (t / 1.6)) * rowH); c.stroke();
      ev.forEach(function (e, i) {
        if (i >= shown) return; var y = 30 + i * rowH, age = Math.min(1, (t - i * 1.6) / 0.6), cur = i === shown - 1;
        c.globalAlpha = age; dot(c, 70, y, cur ? 11 : 8, cur ? A.col("--accent") : A.col("--muted")); txt(c, e.y, 58, y, A.col("--ink"), 15, "right", true);
        wrap(c, e.t, 92, y - 10, 310, 18, A.col("--ink"), 16, "left", true);
        wrap(c, e.d || "", 92, y + 11, 310, 16, A.col("--muted"), 13, "left", false); c.globalAlpha = 1;
      });
      A.read(L(shown < ev.length ? "Olay " + shown + " / " + ev.length : "Tüm olaylar göründü ✓", "#1f7a4d"));
    });
  };

  /* ===== Kavram akışı: st.data = { mode: "col"|"cycle"|"tree", nodes: [{ t, s }] } ===== */
  KESIF.anim.flow = function (A) {
    var d = A.st.data || { nodes: [] }, nodes = d.nodes, mode = d.mode || "col", c = A.ctx, t = 0, n = nodes.length;
    if (mode === "col") A.size(30 + n * 84); else if (mode === "tree") A.size(330); else A.size(380);
    A.button("Baştan oynat", function () { t = 0; });
    A.cap(d.cap || "Adımlar sırayla belirir. Her kutuya bak: bir önceki kutu bir sonrakine nasıl yol açıyor?");
    function box(i, x, y, w, h, hl) { var col = PAL[i % PAL.length]; rrect(c, x, y, w, h, 12, hl ? col : A.col("--card"), col, hl ? 3 : 2); var tc = hl ? "#fff" : A.col("--ink"), sc = hl ? "#f4f4f4" : A.col("--muted"); var lt = lines(c, nodes[i].t, w - 16, 15, true), ls = nodes[i].s ? lines(c, nodes[i].s, w - 16, 12) : 0, tot = lt * 18 + ls * 15, y0 = y + (h - tot) / 2 + 9; wrap(c, nodes[i].t, x + w / 2, y0, w - 16, 18, tc, 15, "center", true); if (nodes[i].s) wrap(c, nodes[i].s, x + w / 2, y0 + lt * 18 + 2, w - 16, 15, sc, 12, "center", false); }
    A.frame(function (dt) {
      t += dt; var shown = Math.min(n, Math.floor(t / 1.5) + 1), cur = shown - 1; c.clearRect(0, 0, A.W, A.H);
      if (mode === "col") {
        for (var i = 0; i < shown; i++) { var y = 14 + i * 84; if (i > 0) arrow(c, 210, y - 18, 210, y + 2, A.col("--muted"), 3); box(i, 30, y, 360, 62, i === cur); }
      } else if (mode === "tree") {
        if (n > 0) { box(0, 110, 12, 200, 56, cur === 0); }
        var k = n - 1, w = Math.min(190, (A.W - 20 - (k - 1) * 10) / Math.max(1, k)), x0 = (A.W - (k * w + (k - 1) * 10)) / 2;
        for (var j = 1; j < shown; j++) { var x = x0 + (j - 1) * (w + 10); arrow(c, 210, 68, x + w / 2, 128, A.col("--muted"), 2); box(j, x, 130, w, 180, j === cur); }
      } else {
        var cx = 210, cy = 190, rx = 140, ry = 135, bw = 118, bh = 56;
        for (var q = 0; q < shown; q++) { var ang = -Math.PI / 2 + q * TAU / n, px = cx + rx * Math.cos(ang), py = cy + ry * Math.sin(ang); if (q > 0) { var pa = -Math.PI / 2 + (q - 1) * TAU / n; arrow(c, cx + rx * Math.cos(pa), cy + ry * Math.sin(pa), px, py, A.col("--muted"), 2); } }
        if (shown === n && n > 2) { var la = -Math.PI / 2 + (n - 1) * TAU / n; arrow(c, cx + rx * Math.cos(la), cy + ry * Math.sin(la), cx + rx * Math.cos(-Math.PI / 2), cy + ry * Math.sin(-Math.PI / 2), A.col("--accent"), 2); }
        for (var r = 0; r < shown; r++) { var an = -Math.PI / 2 + r * TAU / n; box(r, cx + rx * Math.cos(an) - bw / 2, cy + ry * Math.sin(an) - bh / 2, bw, bh, r === cur); }
      }
      A.read(L(nodes[cur] ? nodes[cur].t + (nodes[cur].s ? ": " + nodes[cur].s : "") : "", "#1f7a4d"));
    });
  };

  /* ===== Enerji profili (tepkime koordinatı) ===== */
  KESIF.anim.energy = function (A) {
    A.size(340);
    var c = A.ctx, cat = false, exo = true, t = 0;
    A.toggle("Katalizör ekle", false, function (v) { cat = v; A.cap(v ? "Katalizör aktivasyon enerjisini düşürür; tepkime daha kolay başlar ama girenler ve ürünlerin enerjisi, yani ΔH değişmez." : "Katalizörsüz: tepkimenin başlaması için tepe noktasını aşacak kadar enerji gerekir."); });
    A.toggle("Ekzotermik (ısı verir)", true, function (v) { exo = v; });
    A.cap("Tepkimenin başlaması için girenlerin bir enerji tepesini (aktivasyon enerjisi) aşması gerekir. Tepe aşılınca ürünler oluşur; ürünlerin enerjisi girenlerden düşükse ısı açığa çıkar (ekzotermik).");
    A.frame(function (dt) {
      t += dt; var Er = 230, Ep = exo ? 290 : 190, peak = cat ? 160 : 90, top = 60, gx = 40, gw = 350;
      var yR = Er, yP = exo ? 285 : 150, yPk = cat ? 130 : 70; c.clearRect(0, 0, A.W, A.H);
      txt(c, "Enerji", 8, 14, A.col("--muted"), 13, "left", true); arrow(c, 36, 300, 36, 30, A.col("--muted"), 2); arrow(c, 36, 300, 410, 300, A.col("--muted"), 2); txt(c, "tepkime ilerlemesi →", 410, 320, A.col("--muted"), 13, "right");
      function curve(py, col, lw, dash) { c.strokeStyle = col; c.lineWidth = lw; if (dash) c.setLineDash(dash); c.beginPath(); for (var i = 0; i <= 100; i++) { var u = i / 100, x = gx + 20 + u * (gw - 40), y; var base = yR + (yP - yR) * (u * u * (3 - 2 * u)); var bump = Math.exp(-Math.pow((u - 0.42) / 0.2, 2)); y = base - bump * (base - py) * 1; y = Math.min(y, Math.min(yR, yP)); y = base - bump * (base - py); if (i === 0) c.moveTo(x, y); else c.lineTo(x, y); } c.stroke(); c.setLineDash([]); }
      curve(70 + 0, A.col("--muted"), 3, cat ? [6, 6] : null); if (cat) curve(130, A.col("--accent"), 4);
      var py = cat ? 130 : 70; txt(c, "Girenler", 60, yR + 22, A.col("--ink"), 14, "left", true); txt(c, "Ürünler", 340, yP + 22, A.col("--ink"), 14, "center", true);
      txt(c, "aktifleşmiş kompleks", 208, py - 14, A.col("--bad"), 12, "center", true);
      arrow(c, 130, yR, 130, py, A.col("--bad"), 2); txt(c, "Ea", 146, (yR + py) / 2, A.col("--bad"), 14, "left", true);
      arrow(c, 380, yR, 380, yP, exo ? A.col("--good") : A.col("--bad"), 2); txt(c, "ΔH", 392, (yR + yP) / 2, exo ? A.col("--good") : A.col("--bad"), 14, "left", true);
      c.strokeStyle = A.col("--line"); c.lineWidth = 1; c.setLineDash([4, 5]); c.beginPath(); c.moveTo(36, yR); c.lineTo(380, yR); c.stroke(); c.setLineDash([]);
      var u2 = (t % 4) / 4, bx = gx + 20 + u2 * (gw - 40), bb = yR + (yP - yR) * (u2 * u2 * (3 - 2 * u2)) - Math.exp(-Math.pow((u2 - 0.42) / 0.2, 2)) * ((yR + (yP - yR) * (u2 * u2 * (3 - 2 * u2))) - py); dot(c, bx, bb, 8, A.col("--accent"));
      var Ea = Math.round((yR - py) / 2.5), dH = Math.round((yR - yP) / 2.5);
      A.read(L("Aktivasyon enerjisi Ea ≈ " + Ea + " kJ" + (cat ? " (katalizörle düştü)" : ""), "#c0344a") + "<br>" + L("ΔH = Eürün − Egiren = " + (dH > 0 ? "+" : "") + dH + " kJ → " + (exo ? "ekzotermik (ısı verir)" : "endotermik (ısı alır)"), exo ? "#1f7a4d" : "#c0344a") + "<br>" + L("Katalizör Ea’yı düşürür; ΔH aynı kalır.", "var(--muted)"));
    });
  };

  /* ===== Çarpışma teorisi ve hız faktörleri ===== */
  KESIF.anim.coll = function (A) {
    A.size(400);
    var c = A.ctx, sT = A.slider("Sıcaklık", 1, 5, 2, 1), sN = A.slider("Derişim (parçacık sayısı)", 10, 40, 20, 5), cat = false, parts = [], prods = [], hits = 0, eff = 0, tmr = 0, rate = 0, win = [];
    A.toggle("Katalizör", false, function (v) { cat = v; A.cap(v ? "Katalizör etkin çarpışma için gereken enerjiyi düşürür: aynı sıcaklıkta daha çok çarpışma tepkimeyle sonuçlanır." : "Katalizörsüz: yalnız yeterli enerjili ve uygun doğrultulu çarpışmalar tepkime verir."); });
    A.button("Sıfırla", function () { parts = []; prods = []; hits = 0; eff = 0; win = []; });
    A.cap("Çarpışma teorisi: parçacıklar çarpışmalı, yeterli enerjiyle (Ea) ve uygun doğrultuda. Sıcaklığı ya da derişimi artırınca etkin çarpışma sayısı nasıl değişiyor?");
    function mk(k) { var a = Math.random() * TAU; return { x: 20 + Math.random() * 380, y: 40 + Math.random() * 300, a: a, k: k, flash: 0 }; }
    A.frame(function (dt) {
      var N = sN.get(), T = sT.get(), sp = 25 + T * 28, thr = cat ? 1.6 : 3.2; while (parts.length < N) parts.push(mk(parts.length % 2)); while (parts.length > N) parts.pop();
      c.clearRect(0, 0, A.W, A.H); rrect(c, 10, 30, 400, 320, 10, null, A.col("--line"));
      parts.forEach(function (p) { p.x += Math.cos(p.a) * sp * dt; p.y += Math.sin(p.a) * sp * dt; if (p.x < 18 || p.x > 402) { p.a = Math.PI - p.a; p.x = Math.max(18, Math.min(402, p.x)); } if (p.y < 40 || p.y > 342) { p.a = -p.a; p.y = Math.max(40, Math.min(342, p.y)); } if (p.flash > 0) p.flash -= dt; });
      for (var i = 0; i < parts.length; i++) for (var j = i + 1; j < parts.length; j++) { var a = parts[i], b = parts[j]; if (a.k === b.k) continue; var dx = a.x - b.x, dy = a.y - b.y; if (dx * dx + dy * dy < 150 && a.flash <= 0 && b.flash <= 0) { hits++; a.flash = b.flash = 0.25; var e = (T * 1.1) * (0.5 + Math.random()); if (e > thr && Math.random() < 0.6) { eff++; prods.push({ x: (a.x + b.x) / 2, y: (a.y + b.y) / 2, life: 1.2 }); } } }
      parts.forEach(function (p) { dot(c, p.x, p.y, 7, p.flash > 0 ? "#fff" : p.k ? "#f08a24" : "#3a7bd5"); if (p.flash > 0) { c.strokeStyle = "#e0555c"; c.lineWidth = 2; c.beginPath(); c.arc(p.x, p.y, 12, 0, TAU); c.stroke(); } });
      prods = prods.filter(function (q) { q.life -= dt; return q.life > 0; }); prods.forEach(function (q) { c.globalAlpha = Math.max(0, q.life); dot(c, q.x, q.y, 10, "#2fa36b"); txt(c, "AB", q.x, q.y, "#fff", 9, "center", true); c.globalAlpha = 1; });
      tmr += dt; if (tmr > 1) { tmr = 0; win.push(eff); if (win.length > 1) rate = eff - win[win.length - 2]; if (win.length > 6) win.shift(); }
      txt(c, "● A", 340, 16, "#3a7bd5", 13, "left", true); txt(c, "● B", 380, 16, "#f08a24", 13, "left", true);
      A.read(L("Sıcaklık seviyesi: " + T + " · parçacık sayısı: " + N + (cat ? " · katalizör var" : "")) + "<br>" + L("Toplam çarpışma: " + hits + " · etkin çarpışma (ürün): " + eff, "#1f7a4d") + "<br>" + L("Son saniyedeki etkin çarpışma ≈ " + rate + " → tepkime hızı", "#c0344a") + "<br>" + L("Etkin çarpışma = yeterli enerji + uygun doğrultu. Sıcaklık, derişim, katalizör bu oranı değiştirir.", "var(--muted)"));
    });
  };

  /* ===== Nöron: impuls ve sinaps ===== */
  KESIF.anim.neuron = function (A) {
    A.size(420);
    var c = A.ctx, t = -1, run = false, hist = [];
    A.button("Uyar", function () { t = 0; run = true; hist = []; A.cap("Uyarı eşik değerini aşınca akson boyunca bir elektriksel impuls (aksiyon potansiyeli) ilerler; sinapsta kimyasal haberci (nörotransmitter) salınır ve diğer nöronu uyarır."); });
    A.button("Sıfırla", function () { t = -1; run = false; hist = []; });
    A.cap("‘Uyar’a bas: impuls akson boyunca ilerler, Ranvier boğumlarında sıçrar ve sinapsta kimyasal habercilerle diğer nörona aktarılır.");
    var xs = 40, xe = 300, ya = 90;
    A.frame(function (dt) {
      if (run) t += dt; c.clearRect(0, 0, A.W, A.H);
      /* dendritler + gövde */
      c.strokeStyle = A.col("--muted"); c.lineWidth = 3; for (var i = -1; i <= 1; i++) { c.beginPath(); c.moveTo(xs, ya); c.lineTo(8, ya + i * 34); c.stroke(); }
      dot(c, xs, ya, 24, "#8aa0d6"); txt(c, "gövde", xs, ya, "#fff", 11, "center", true); txt(c, "dendrit", 16, ya + 54, A.col("--muted"), 12, "left");
      /* akson + miyelin */
      c.strokeStyle = A.col("--muted"); c.lineWidth = 4; c.beginPath(); c.moveTo(xs + 24, ya); c.lineTo(xe, ya); c.stroke();
      for (var m = 0; m < 4; m++) { rrect(c, 90 + m * 52, ya - 11, 38, 22, 8, "#f2d49b", "#d9a400", 1.5); }
      txt(c, "miyelin kılıf", 140, ya - 28, "#b07a00", 12, "center", true); txt(c, "Ranvier boğumu", 168, ya + 34, A.col("--muted"), 11, "center");
      /* sinaps */
      var sx = xe + 4; c.fillStyle = "#8aa0d6"; c.beginPath(); c.arc(sx + 8, ya, 14, 0, TAU); c.fill(); txt(c, "uç", sx + 8, ya + 28, A.col("--muted"), 12, "center");
      rrect(c, sx + 40, ya - 30, 66, 60, 12, "#b7c6ea", null); txt(c, "diğer nöron", sx + 73, ya, "#23336a", 11, "center", true);
      txt(c, "sinaps", sx + 34, ya - 44, A.col("--bad"), 12, "center", true);
      var imp = null; if (t >= 0) { var u = Math.min(1, t / 2.2); imp = xs + 24 + u * (xe - xs - 24); }
      if (imp !== null && t < 2.6) { dot(c, imp, ya, 10, "#ffd23f"); c.strokeStyle = "#d9a400"; c.lineWidth = 2; c.beginPath(); c.arc(imp, ya, 15, 0, TAU); c.stroke(); }
      if (t >= 2.2 && t < 3.6) { for (var k = 0; k < 6; k++) { var uu = Math.min(1, (t - 2.2 - k * 0.04) / 0.7), px = sx + 20 + uu * 24, py = ya + (k - 2.5) * 5 * (1 + uu); if (uu > 0) dot(c, px, py, 3.5, "#e0555c"); } }
      if (t >= 2.9) { rrect(c, sx + 40, ya - 30, 66, 60, 12, "#ffd23f", null); txt(c, "uyarıldı ✓", sx + 73, ya, "#5a4300", 12, "center", true); }
      /* potansiyel grafiği */
      var gx = 20, gy = 190, gw = 380, gh = 190; c.strokeStyle = A.col("--line"); c.lineWidth = 1.5; c.strokeRect(gx, gy, gw, gh); txt(c, "Zar potansiyeli (mV) – zaman", gx + 4, gy - 12, A.col("--ink"), 13, "left", true);
      function Y(v) { return gy + gh - (v + 90) / 130 * gh; } c.strokeStyle = A.col("--line"); c.setLineDash([4, 4]); c.beginPath(); c.moveTo(gx, Y(-70)); c.lineTo(gx + gw, Y(-70)); c.moveTo(gx, Y(-55)); c.lineTo(gx + gw, Y(-55)); c.stroke(); c.setLineDash([]);
      txt(c, "−70 (dinlenme)", gx + gw - 4, Y(-70) + 12, A.col("--muted"), 11, "right"); txt(c, "−55 (eşik)", gx + gw - 4, Y(-55) - 10, A.col("--bad"), 11, "right"); txt(c, "+30", gx + 4, Y(30) + 2, A.col("--muted"), 11, "left");
      function vAt(tt) { if (tt < 0.3) return -70; var s = tt - 0.3; if (s < 0.25) return -70 + s / 0.25 * 15; if (s < 0.45) return -55 + (s - 0.25) / 0.2 * 85; if (s < 0.9) return 30 - (s - 0.45) / 0.45 * 115; if (s < 1.5) return -85 + (s - 0.9) / 0.6 * 15; return -70; }
      var ph = "dinlenme"; if (t >= 0) { var cur = vAt(t - 0.5 > 0 ? t - 0.5 : 0); if (t - 0.5 > 0) { hist.push([t, cur]); } if (hist.length > 0) { c.strokeStyle = "#e0555c"; c.lineWidth = 3; c.beginPath(); hist.forEach(function (h, i) { var x = gx + 8 + (h[0] - 0.5) / 3.2 * (gw - 16), y = Y(h[1]); if (i === 0) c.moveTo(x, y); else c.lineTo(x, y); }); c.stroke(); } var s2 = t - 0.8; ph = s2 < 0 ? "dinlenme" : s2 < 0.25 ? "eşiğe yükseliyor" : s2 < 0.45 ? "depolarizasyon (Na⁺ girer)" : s2 < 0.9 ? "repolarizasyon (K⁺ çıkar)" : s2 < 1.5 ? "aşırı polarizasyon, sonra dinlenme" : "dinlenme"; }
      A.read(L(t < 0 ? "Dinlenme potansiyeli: iç taraf dışa göre yaklaşık −70 mV." : "Evre: " + ph, "#1f7a4d") + "<br>" + L("Miyelinli aksonda impuls Ranvier boğumları arasında sıçrar: daha hızlıdır.", "var(--muted)") + "<br>" + L("Sinapsta uyarı kimyasal haberciyle (nörotransmitter) aktarılır.", "var(--muted)"));
    });
  };

  /* ===== Tropizma: ışık ve yer çekimi ===== */
  KESIF.anim.tropizma = function (A) {
    A.size(360);
    var c = A.ctx, mode = "isik", dir = 1, bend = 0, grav = 0, pts = [], t = 0;
    for (var i = 0; i < 26; i++) pts.push({ u: Math.random(), s: Math.random() < 0.5 ? 0 : 1 });
    A.button("Işık sağdan", function () { mode = "isik"; dir = 1; A.cap("Işık sağdan: oksin hormonu gölgeli (sol) tarafa kayar; o taraftaki hücreler daha çok uzar ve gövde ışığa doğru eğilir (pozitif fototropizma)."); });
    A.button("Işık soldan", function () { mode = "isik"; dir = -1; A.cap("Işık soldan: oksin sağa kayar, gövde sola, ışığa doğru eğilir."); });
    A.button("Fideyi yatır", function () { mode = "yer"; grav = 1; A.cap("Yatay fidede oksin yer çekimiyle alt tarafa toplanır. Gövdede alt taraf daha çok uzar, gövde yukarı döner (negatif jeotropizma); kökte aynı oksin büyümeyi engeller, kök aşağı döner (pozitif jeotropizma)."); });
    A.button("Dik konum", function () { mode = "isik"; dir = 0; bend = 0; grav = 0; });
    A.cap("Oksin hormonu hücre uzamasını sağlar. Işığa ya da yer çekimine göre oksinin dağılımı değişir ve bitki o yöne doğru ya da ters yöne bükülür.");
    A.frame(function (dt) {
      t += dt; c.clearRect(0, 0, A.W, A.H);
      var target = mode === "isik" ? dir * 0.6 : 0; bend += (target - bend) * Math.min(1, dt * 0.8); grav += ((mode === "yer" ? 1 : 0) - grav) * Math.min(1, dt * 0.8);
      if (mode === "isik" && dir !== 0) { for (var r = 0; r < 5; r++) { var yy = 40 + r * 40; arrow(c, dir === 1 ? 410 : 10, yy, dir === 1 ? 340 : 80, yy, "#d9a400", 3); } dot(c, dir === 1 ? 395 : 25, 24, 14, "#ffd23f"); txt(c, "ışık", dir === 1 ? 395 : 25, 50, "#b07a00", 12, "center", true); }
      c.fillStyle = "#c7a57a"; c.fillRect(0, 300, A.W, 60); txt(c, "toprak", 380, 340, "#6b4a28", 13, "right", true);
      var bx = 210, by = 300, len = 190;
      if (mode === "yer") {
        var a = -Math.PI / 2 + (1 - grav) * (Math.PI / 2); /* yatıktan dike */
        c.strokeStyle = "#2fa36b"; c.lineWidth = 12; c.lineCap = "round"; c.beginPath(); c.moveTo(bx, by - 20); c.quadraticCurveTo(bx + 10 + (1 - grav) * 50, by - 20 - len * 0.55, bx + (1 - grav) * len * 0.95, by - 20 - len * (0.55 + 0.45 * grav) + (1 - grav) * 30); c.stroke();
        c.strokeStyle = "#8a5a2b"; c.lineWidth = 8; c.beginPath(); c.moveTo(bx, by - 20); c.quadraticCurveTo(bx - 10 - (1 - grav) * 40, by + 10, bx - (1 - grav) * 100, by + 28 + grav * 22); c.stroke();
        for (var q = 0; q < pts.length; q++) { var p = pts[q]; var px = bx + p.u * (1 - grav) * 150 + (grav) * (p.s ? 8 : -8) * 0, py = by - 20 - p.u * len * (0.55 + 0.45 * grav) + (1 - grav) * p.u * 20; if (p.u > 0.6) continue; dot(c, px + (p.s ? 4 : -4) * 0, py + 6 + (1 - grav) * 6, 3.5, "#e0555c"); }
        txt(c, "oksin alt tarafta toplanır", 210, 30, "#c0344a", 14, "center", true);
        txt(c, "kök aşağı döner", 120, 345, "#6b4a28", 13, "center");
      } else {
        var topx = bx + bend * 120, topy = by - len + Math.abs(bend) * 40;
        c.strokeStyle = "#2fa36b"; c.lineWidth = 14; c.lineCap = "round"; c.beginPath(); c.moveTo(bx, by); c.quadraticCurveTo(bx, by - len * 0.6, topx, topy); c.stroke();
        dot(c, topx, topy - 6, 16, "#4bbf7f"); c.strokeStyle = "#8a5a2b"; c.lineWidth = 8; c.beginPath(); c.moveTo(bx, by); c.lineTo(bx, by + 30); c.stroke();
        for (var q2 = 0; q2 < pts.length; q2++) { var p2 = pts[q2], k = p2.u, yy2 = by - k * len * 0.85, xx2 = bx + bend * 120 * k * k; var side = dir === 0 ? (p2.s ? 1 : -1) : (p2.s ? -dir : -dir); var shade = dir === 0 ? 0 : (Math.abs(bend) / 0.6); var off = dir === 0 ? (p2.s ? 5 : -5) : (-dir * (3 + 5 * shade)); dot(c, xx2 + off, yy2, 3.5, "#e0555c"); }
        txt(c, dir === 0 ? "ışık yok/eşit: oksin her yanda eşit" : "oksin ışıktan uzak (gölgeli) tarafa toplanır", 210, 350 - 6, "#c0344a", 13, "center", true);
      }
      A.read(L("Kırmızı noktalar: oksin hormonu.", "#c0344a") + "<br>" + L("Oksin fazla olan taraf (gövdede) daha çok uzar → bitki diğer tarafa doğru bükülür.", "#1f7a4d") + "<br>" + L("Kökte aynı oksin miktarı büyümeyi engeller; bu yüzden kök yer çekimine doğru döner.", "var(--muted)"));
    });
  };

  /* ===== Negatif geri bildirim (termostat / vücut sıcaklığı) ===== */
  KESIF.anim.geribildirim = function (A) {
    A.size(380);
    var c = A.ctx, env = A.slider("Ortam sıcaklığı (°C)", -10, 45, 10, 1), Tb = 37, hist = [], tmr = 0, fb = true;
    A.toggle("Geri bildirim (düzenleme) açık", true, function (v) { fb = v; A.cap(v ? "Düzenleme açık: sapma algılanınca titreme ya da terleme devreye girer ve sıcaklık 37 °C’ye döner (negatif geri bildirim)." : "Düzenleme kapalı: vücut sıcaklığı ortama doğru kayar; iç denge bozulur."); });
    A.cap("Vücut sıcaklığı 37 °C civarında tutulur. Ortam değişince sapma algılanır ve ters yönde bir tepki (titreme ya da terleme) başlar: negatif geri bildirim.");
    A.frame(function (dt) {
      var E = env.get(), dev = Tb - 37, resp = fb ? -Math.max(-1, Math.min(1, dev / 1.2)) : 0, heat = 0.04 * (E - Tb); Tb += (heat + resp * 0.09) * dt * 5; if (!fb) Tb += 0; tmr += dt; if (tmr > 0.1) { tmr = 0; hist.push(Tb); if (hist.length > 200) hist.shift(); }
      c.clearRect(0, 0, A.W, A.H);
      var gx = 20, gy = 30, gw = 380, gh = 170; c.strokeStyle = A.col("--line"); c.lineWidth = 1.5; c.strokeRect(gx, gy, gw, gh); txt(c, "Vücut sıcaklığı – zaman", gx, gy - 14, A.col("--ink"), 13, "left", true);
      function Y(v) { return gy + gh - (v - 30) / 14 * gh; } c.setLineDash([5, 5]); c.strokeStyle = A.col("--good"); c.beginPath(); c.moveTo(gx, Y(37)); c.lineTo(gx + gw, Y(37)); c.stroke(); c.setLineDash([]); txt(c, "37 °C (denge noktası)", gx + gw - 4, Y(37) - 10, A.col("--good"), 12, "right", true);
      c.strokeStyle = "#e0555c"; c.lineWidth = 3; c.beginPath(); hist.forEach(function (h, i) { var x = gx + i / 200 * gw, y = Y(Math.max(30, Math.min(44, h))); if (i === 0) c.moveTo(x, y); else c.lineTo(x, y); }); c.stroke();
      /* tepki çubukları */
      var cold = Math.max(0, -resp), hot = Math.max(0, resp);
      rrect(c, 40, 250, 150, 26, 8, A.col("--card2"), A.col("--line")); rrect(c, 40, 250, 150 * cold, 26, 8, "#3a7bd5", null); txt(c, "titreme / damar daralması", 115, 242, A.col("--ink"), 12, "center", true);
      rrect(c, 230, 250, 150, 26, 8, A.col("--card2"), A.col("--line")); rrect(c, 230, 250, 150 * hot, 26, 8, "#e0555c", null); txt(c, "terleme / damar genişlemesi", 305, 242, A.col("--ink"), 12, "center", true);
      /* döngü */
      txt(c, "Algılayıcı (deri, hipotalamus) → Merkez (hipotalamus) → Etkili (kas, ter bezi, damar)", 210, 312, A.col("--muted"), 12, "center"); txt(c, "→ sıcaklık denge noktasına döner", 210, 332, A.col("--muted"), 12, "center");
      A.read(L("Ortam: " + E + " °C · Vücut: " + f1(Tb) + " °C", Math.abs(Tb - 37) < 0.6 ? "#1f7a4d" : "#c0344a") + "<br>" + L(!fb ? "Düzenleme yok: sıcaklık ortama doğru sürükleniyor." : cold > 0.05 ? "Soğuk: titreme ve damar daralması ısıyı korur/üretir." : hot > 0.05 ? "Sıcak: terleme ve damar genişlemesi ısı kaybettirir." : "Sapma yok: denge.", "inherit"));
    });
  };

  /* ===== Gölge oyunu (Karagöz) ===== */
  KESIF.anim.karagoz = function (A) {
    A.size(340);
    var c = A.ctx, t = 0, dlg = (A.st.data && A.st.data.lines) || [["H", "Selamün aleyküm, Karagöz!"], ["K", "Ne? Selam mı? Ben kimseye selam borcu bırakmadım ki!"], ["H", "Yahu selam borç değil, hürmettir."], ["K", "Hürmet mi? Bende hürmet yok, evde bir tek kilim var."], ["H", "Sen beni yine yanlış anlıyorsun."], ["K", "Anladım anladım! Yanlış anlamak da bende borç olsun."]];
    A.button("Baştan", function () { t = 0; });
    A.cap("Karagöz oyununda mizah çoğunlukla yanlış anlamalardan ve söz oyunlarından doğar: Hacivat edebî ve nazik konuşur, Karagöz sözü gerçek anlamıyla ya da başka bir anlamla anlar.");
    function hac(x, y, sp) { c.fillStyle = "#1b1b1f"; c.beginPath(); c.ellipse(x, y - 60 + sp, 22, 28, 0, 0, TAU); c.fill(); c.fillRect(x - 8, y - 140 + sp, 16, 40); c.fillRect(x - 24, y - 112 + sp, 48, 10); c.fillRect(x - 26, y - 36 + sp, 52, 76); c.fillRect(x - 24, y + 40 + sp, 18, 40); c.fillRect(x + 6, y + 40 + sp, 18, 40); }
    function kar(x, y, sp) { c.fillStyle = "#1b1b1f"; c.beginPath(); c.ellipse(x, y - 56 + sp, 24, 24, 0, 0, TAU); c.fill(); c.beginPath(); c.moveTo(x - 24, y - 70 + sp); c.lineTo(x, y - 112 + sp); c.lineTo(x + 24, y - 70 + sp); c.closePath(); c.fill(); c.beginPath(); c.ellipse(x, y + 4 + sp, 36, 40, 0, 0, TAU); c.fill(); c.fillRect(x - 24, y + 40 + sp, 16, 40); c.fillRect(x + 8, y + 40 + sp, 16, 40); c.fillRect(x + 28, y - 10 + sp, 34, 8); }
    A.frame(function (dt) {
      t += dt; var per = 3.4, i = Math.min(dlg.length - 1, Math.floor(t / per)), done = t > per * dlg.length; c.clearRect(0, 0, A.W, A.H);
      var g = c.createLinearGradient(0, 0, 0, 340); g.addColorStop(0, "#fff3d6"); g.addColorStop(1, "#ffe2a0"); c.fillStyle = g; c.fillRect(0, 0, A.W, 340); c.strokeStyle = "#8a5a2b"; c.lineWidth = 10; c.strokeRect(5, 5, 410, 330);
      var sp = Math.sin(t * 6) * 2;
      hac(110, 245, dlg[i][0] === "H" && !done ? sp : 0); kar(310, 245, dlg[i][0] === "K" && !done ? sp : 0);
      txt(c, "Hacivat", 110, 322, "#5c3a12", 13, "center", true); txt(c, "Karagöz", 310, 322, "#5c3a12", 13, "center", true);
      if (!done) { var h = dlg[i][0] === "H", bx = h ? 20 : 120, bw = 280; rrect(c, bx, 22, bw, 78, 14, "#fffaf0", "#8a5a2b", 2); wrap(c, dlg[i][1], bx + bw / 2, 61 - (lines(c, dlg[i][1], bw - 24, 16, true) - 1) * 10, bw - 24, 20, "#3b2410", 16, "center", true); }
      else txt(c, "Perde kapandı: yanlış anlama güldürdü ✓", 210, 60, "#5c3a12", 16, "center", true);
      A.read(L("Konuşan: " + (dlg[i][0] === "H" ? "Hacivat (eğitimli, süslü konuşan)" : "Karagöz (halktan, açık sözlü, sözü yanlış anlayan)"), "#1f7a4d") + "<br>" + L("Oyunun bölümleri: Mukaddime, Muhavere, Fasıl, Bitiş.", "var(--muted)"));
    });
  };

  /* ===== Güçlü / zayıf asit iyonlaşması ===== */
  KESIF.anim.asit = function (A) {
    A.size(330);
    var c = A.ctx, t = 0, strong = [], weak = [];
    function mk(n, tp) { var a = []; for (var i = 0; i < n; i++) a.push({ x: Math.random(), y: Math.random(), vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25, ion: tp === "s" }); return a; }
    strong = mk(20, "s"); weak = mk(20, "w");
    A.cap("Aynı derişimdeki iki asit: HCl (kuvvetli) suda tamamen iyonlaşır; CH₃COOH (zayıf) çok azı iyonlaşır, çoğu molekül olarak kalır. Bu yüzden zayıf asidin pH’ı daha yüksektir.");
    A.button("Baştan", function () { t = 0; });
    A.frame(function (dt) {
      t += dt; c.clearRect(0, 0, A.W, A.H);
      function beaker(x0, arr, strongOne) { rrect(c, x0, 40, 190, 210, 14, "rgba(120,170,255,.22)", A.col("--line")); arr.forEach(function (p, i) { p.x += p.vx * dt; p.y += p.vy * dt; if (p.x < 0 || p.x > 1) p.vx *= -1; if (p.y < 0 || p.y > 1) p.vy *= -1; var px = x0 + 14 + Math.max(0, Math.min(1, p.x)) * 162, py = 54 + Math.max(0, Math.min(1, p.y)) * 180; if (!strongOne) { if (Math.random() < 0.002) p.ion = !p.ion; if (p.ion && Math.random() < 0.03) p.ion = false; if (!p.ion && Math.random() < 0.0035) p.ion = true; } if (p.ion) { dot(c, px - 6, py, 6, "#e0243c"); txt(c, "+", px - 6, py, "#fff", 9, "center", true); dot(c, px + 7, py, 6, "#2c6fd1"); txt(c, "−", px + 7, py, "#fff", 10, "center", true); } else { rrect(c, px - 11, py - 6, 22, 12, 6, "#a8a8b3", null); txt(c, strongOne ? "HCl" : "HA", px, py, "#fff", 8, "center", true); } }); }
      beaker(18, strong, true); beaker(212, weak, false);
      txt(c, "0,1 M HCl (kuvvetli)", 113, 24, A.col("--ink"), 14, "center", true); txt(c, "0,1 M CH₃COOH (zayıf)", 307, 24, A.col("--ink"), 14, "center", true);
      var nw = weak.filter(function (p) { return p.ion; }).length;
      txt(c, "● H₃O⁺", 60, 272, "#e0243c", 13, "center", true); txt(c, "● anyon", 140, 272, "#2c6fd1", 13, "center", true); txt(c, "▬ molekül", 250, 272, "#8a8a95", 13, "center", true);
      A.read(L("HCl: moleküllerin %100’ü iyonlaşmış → [H₃O⁺] = 0,1 M → pH = 1", "#c0244a") + "<br>" + L("CH₃COOH: bu anda " + nw + "/20 molekül iyonlaşmış (gerçekte %1–2) → [H₃O⁺] = √(Ka·C) ≈ 10⁻³ M → pH ≈ 3", "#2c6fd1") + "<br>" + L("Kuvvet = iyonlaşma eğilimi; derişim değil.", "var(--muted)"));
    });
  };

  /* ===== Titrasyon (kuvvetli asit – kuvvetli baz) ===== */
  KESIF.anim.titrasyon = function (A) {
    A.size(360);
    var c = A.ctx, V = 0, auto = false, drops = [], Ma = 0.1, Va = 20, Mb = 0.1, eq = Ma * Va / Mb; /* mL */
    A.button("Damlat (+1 mL)", function () { V = Math.min(40, V + 1); drops.push({ y: 120, v: 0 }); });
    A.button("Hızlı akıt", function () { auto = !auto; });
    A.button("Baştan", function () { V = 0; auto = false; });
    A.cap("Bürete NaOH (0,1 M) doldurulmuş; erlende 20 mL 0,1 M HCl ve fenolftalein var. Eşdeğerlik noktasında n(H⁺) = n(OH⁻); fenolftalein pembeleşir.");
    var tm = 0;
    A.frame(function (dt) {
      if (auto) { tm += dt; if (tm > 0.18 && V < 40) { tm = 0; V = Math.min(40, V + 0.5); drops.push({ y: 120, v: 0 }); } }
      c.clearRect(0, 0, A.W, A.H);
      rrect(c, 190, 20, 40, 150, 6, "rgba(120,170,255,.25)", A.col("--ink")); c.fillStyle = "rgba(120,170,255,.55)"; c.fillRect(192, 22 + (V / 40) * 140 * 0, 36, 146 - (V / 40) * 140); txt(c, "NaOH", 210, 12, A.col("--ink"), 13, "center", true);
      c.fillStyle = A.col("--ink"); c.fillRect(204, 170, 12, 20);
      drops.forEach(function (d) { d.v += 600 * dt; d.y += d.v * dt * 0.2; dot(c, 210, d.y + 70, 4, "#3a7bd5"); }); drops = drops.filter(function (d) { return d.y + 70 < 250; });
      var over = V > eq + 0.01, col = V < eq - 0.01 ? "rgba(240,240,255,.8)" : V >= eq ? (V === eq ? "rgba(255,170,205,.7)" : "rgba(235,60,150,.85)") : "rgba(240,240,255,.8)";
      c.beginPath(); c.moveTo(130, 250); c.lineTo(180, 250); c.lineTo(180, 300); c.lineTo(110, 335); c.lineTo(310, 335); c.lineTo(240, 300); c.lineTo(240, 250); c.lineTo(290, 250); c.lineTo(190, 250); c.closePath(); c.fillStyle = "rgba(240,240,250,.35)"; c.strokeStyle = A.col("--ink"); c.lineWidth = 3;
      c.beginPath(); c.moveTo(180, 210); c.lineTo(180, 270); c.lineTo(120, 335); c.lineTo(300, 335); c.lineTo(240, 270); c.lineTo(240, 210); c.stroke(); c.save(); c.beginPath(); c.moveTo(181, 270); c.lineTo(121, 334); c.lineTo(299, 334); c.lineTo(239, 270); c.closePath(); c.clip(); c.fillStyle = col; c.fillRect(100, 270, 220, 70); c.restore();
      txt(c, "HCl + fenolftalein", 210, 350, A.col("--muted"), 12, "center", true);
      var pH; var nOH = Mb * V, nH = Ma * Va, vt = Va + V; if (V < eq) pH = -Math.log10(Math.max(1e-12, (nH - nOH) / vt)); else if (V === eq) pH = 7; else pH = 14 + Math.log10((nOH - nH) / vt);
      txt(c, "pH = " + f1(pH), 330, 290, A.col("--ink"), 16, "center", true);
      A.read(L("Eklenen NaOH: " + f1(V) + " mL · n(OH⁻) = " + f2(Mb * V) + " mmol") + "<br>" + L("n(H⁺) = 0,1·20 = 2 mmol · eşdeğerlik: M_a·V_a = M_b·V_b → V_b = " + f1(eq) + " mL", "#c0244a") + "<br>" + L(V < eq ? "Asit fazla: renksiz." : Math.abs(V - eq) < 0.01 ? "Eşdeğerlik noktası: pH ≈ 7, renk dönüyor." : "Baz fazla: pembe.", "#1f7a4d"));
    });
  };

  /* ===== Kas kasılması (kayan iplikler) ===== */
  KESIF.anim.kas = function (A) {
    A.size(300);
    var c = A.ctx, sl = A.slider("Kasılma (%)", 0, 100, 0, 5), phase = 0;
    A.cap("Kasılırken aktin (ince) iplikler miyozin (kalın) iplikler üzerinde kayar; Z çizgileri birbirine yaklaşır, sarkomer kısalır. Bu hareket için ATP ve Ca²⁺ gerekir.");
    A.frame(function (dt) {
      phase += dt; var s = sl.get() / 100; c.clearRect(0, 0, A.W, A.H);
      var zl = 40 + 30 * s, zr = 380 - 30 * s, y0 = 90;
      /* iki sarkomer (basit): sol Z, orta M, sağ Z */
      var mid = (zl + zr) / 2, w = zr - zl, thick = 110 - 0 * s;
      c.fillStyle = "#e0555c"; rrect(c, mid - thick / 2, y0 + 56, thick, 12, 6, "#e0555c", null); rrect(c, mid - thick / 2, y0 + 86, thick, 12, 6, "#e0555c", null); rrect(c, mid - thick / 2, y0 + 116, thick, 12, 6, "#e0555c", null);
      var act = 0.5 * (w - thick) + 0.0; var slide = 35 * s;
      c.fillStyle = "#3a7bd5"; [y0 + 41, y0 + 71, y0 + 101, y0 + 131].forEach(function (yy, i) { var lenA = 120; rrect(c, zl, yy, lenA, 7, 3, "#3a7bd5", null); rrect(c, zr - lenA, yy + 0, lenA, 7, 3, "#3a7bd5", null); });
      c.strokeStyle = A.col("--ink"); c.lineWidth = 5; c.beginPath(); c.moveTo(zl, y0 + 24); c.lineTo(zl, y0 + 160); c.moveTo(zr, y0 + 24); c.lineTo(zr, y0 + 160); c.stroke(); txt(c, "Z", zl, y0 + 176, A.col("--ink"), 13, "center", true); txt(c, "Z", zr, y0 + 176, A.col("--ink"), 13, "center", true);
      for (var k = 0; k < 6; k++) { var bx = mid - thick / 2 + 8 + k * 17, by = y0 + 56 + (k % 3) * 30; var cr = Math.sin(phase * 5 + k) * 3; c.strokeStyle = "#a63a40"; c.lineWidth = 2; c.beginPath(); c.moveTo(bx, by + 6); c.lineTo(bx + 6, by - 7 + cr); c.stroke(); }
      txt(c, "miyozin (kalın)", mid, y0 + 14, "#c0344a", 13, "center", true); txt(c, "aktin (ince)", zl + 60, y0 + 30, "#3a7bd5", 13, "center", true);
      var wid = Math.round(w); txt(c, "sarkomer", mid, 28, A.col("--ink"), 14, "center", true); arrow(c, zl, 46, zr, 46, A.col("--muted"), 2); arrow(c, zr, 46, zl, 46, A.col("--muted"), 2);
      A.read(L("Sarkomer uzunluğu ≈ " + Math.round(w / 3.4 * 10) / 10 + " birim (rahat: " + Math.round(340 / 3.4) + ")", "#1f7a4d") + "<br>" + L("Kasılınca: Z çizgileri yaklaşır, sarkomer ve H bölgesi kısalır; iplik boyları değişmez, iplikler kayar.", "inherit") + "<br>" + L("ATP: miyozin başlarının aktine bağlanıp ayrılması için; Ca²⁺: bağlanma bölgelerini açmak için.", "var(--muted)"));
    });
  };
})();
