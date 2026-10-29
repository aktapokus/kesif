/* Ders animasyonları, dördüncü paket (Fizik): kuvvetler (kuvvet), elektriksel kuvvet (coulomb), manyetik kuvvet (manyetik), indüksiyon (induksiyon), transformatör (trafo), ışık şiddeti (isik), aynalar ve mercekler (ayna, mercek), kırılma (kirilma).
   Modeller öğretim amaçlı sadeleştirilmiştir. Özgün içerik (CC BY-NC-SA 4.0). */
KESIF.anim = KESIF.anim || {};
(function () {
  var TAU = Math.PI * 2;
  function arrow(c, x1, y1, x2, y2, color, lw) { var a = Math.atan2(y2 - y1, x2 - x1), h = 9; c.strokeStyle = color; c.fillStyle = color; c.lineWidth = lw || 3; c.lineCap = "round"; c.beginPath(); c.moveTo(x1, y1); c.lineTo(x2, y2); c.stroke(); c.beginPath(); c.moveTo(x2, y2); c.lineTo(x2 - h * Math.cos(a - 0.45), y2 - h * Math.sin(a - 0.45)); c.lineTo(x2 - h * Math.cos(a + 0.45), y2 - h * Math.sin(a + 0.45)); c.closePath(); c.fill(); }
  function txt(c, s, x, y, color, size, align, bold) { c.fillStyle = color; c.font = (bold ? "700 " : "500 ") + (size || 14) + "px system-ui, sans-serif"; c.textAlign = align || "left"; c.textBaseline = "middle"; c.fillText(s, x, y); }
  function dot(c, x, y, r, color) { c.fillStyle = color; c.beginPath(); c.arc(x, y, r, 0, TAU); c.fill(); }
  function rrect(c, x, y, w, h, r, fill, stroke, lw) { c.beginPath(); c.moveTo(x + r, y); c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r); c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r); c.closePath(); if (fill) { c.fillStyle = fill; c.fill(); } if (stroke) { c.strokeStyle = stroke; c.lineWidth = lw || 2; c.stroke(); } }
  function line(c, x1, y1, x2, y2, color, lw, dash) { c.strokeStyle = color; c.lineWidth = lw || 2; if (dash) c.setLineDash(dash); c.beginPath(); c.moveTo(x1, y1); c.lineTo(x2, y2); c.stroke(); c.setLineDash([]); }
  var f1 = function (v) { return (Math.round(v * 10) / 10).toString().replace(".", ","); };
  var f2 = function (v) { return (Math.round(v * 100) / 100).toString().replace(".", ","); };
  function L(t, color) { return '<span style="color:' + (color || "inherit") + '">' + t + "</span>"; }

  /* ===== Kuvvetler: serbest cisim diyagramı ===== */
  KESIF.anim.kuvvet = function (A) {
    A.size(320);
    var c = A.ctx, sF = A.slider("Uygulanan kuvvet F (N)", 0, 40, 20, 1), sm = A.slider("Kütle m (kg)", 1, 10, 4, 1), sMu = A.slider("Sürtünme katsayısı μ", 0, 0.6, 0.2, 0.05), x = 80, v = 0;
    A.button("Baştan", function () { x = 80; v = 0; });
    A.cap("Net kuvvet = uygulanan kuvvet − sürtünme. Newton’un ikinci yasası: a = F_net / m. Kuvveti, kütleyi ve sürtünmeyi değiştirip ivmenin nasıl değiştiğine bak.");
    A.frame(function (dt) {
      var F = sF.get(), m = sm.get(), mu = sMu.get(), N = m * 10, fs = mu * N, Fnet = F > fs ? F - fs : 0, a = Fnet / m; if (F <= fs) v = 0; v += a * dt; x += v * dt * 14; if (x > 330) { x = 80; v = 0; }
      c.clearRect(0, 0, A.W, A.H); c.fillStyle = "#c7a57a"; c.fillRect(0, 230, A.W, 90); line(c, 0, 230, A.W, 230, A.col("--ink"), 3);
      var w = 40 + m * 3, h = 36 + m * 2.4; rrect(c, x - w / 2, 230 - h, w, h, 6, A.col("--accent"), A.col("--ink"), 2); txt(c, m + " kg", x, 230 - h / 2, "#fff", 14, "center", true);
      arrow(c, x - w / 2 - 4, 230 - h / 2, x - w / 2 - 4 - 10 - F * 2.2, 230 - h / 2, "#e0555c", 4); c.save(); c.restore();
      arrow(c, x + w / 2 + 4, 230 - h / 2, x + w / 2 + 4 + 0, 230 - h / 2, "#e0555c", 1);
      arrow(c, x, 230 - h, x, 230 - h - 40, "#2fa36b", 3); txt(c, "N", x + 10, 230 - h - 44, "#2fa36b", 13, "left", true);
      arrow(c, x, 230, x, 230 + 40, "#8a63d2", 3); txt(c, "mg", x + 14, 230 + 46, "#8a63d2", 13, "left", true);
      if (fs > 0) arrow(c, x + w / 2 + 8, 226, x + w / 2 + 8 - 10 - fs * 1.2, 226, "#d99a00", 4);
      A.read(L("F = " + F + " N (kırmızı; sağa doğru çekiyor)") + "<br>" + L("Sürtünme f = μ·N = " + f1(mu) + "·" + (m * 10) + " = " + f1(fs) + " N (sarı)", "#a77800") + "<br>" + L("Net kuvvet = " + f1(Fnet) + " N → a = Fnet / m = " + f2(a) + " m/s²", "#1f7a4d") + "<br>" + L(F <= fs ? "Uygulanan kuvvet sürtünmeden büyük değil: cisim hareket etmez." : "Kuvvet sürtünmeyi aştı: cisim hızlanıyor.", "var(--muted)"));
    });
  };

  /* ===== Elektriksel kuvvet (Coulomb) ===== */
  KESIF.anim.coulomb = function (A) {
    A.size(280);
    var c = A.ctx, sr = A.slider("Uzaklık r (m)", 1, 5, 2, 0.5), sQ = 1, sq = 1, k = 9;
    A.button("Yükleri aynı yap (+ +)", function () { sq = 1; sQ = 1; A.cap("Aynı cins yükler birbirini iter (itme kuvveti)."); });
    A.button("Zıt yap (+ −)", function () { sq = -1; sQ = 1; A.cap("Zıt cins yükler birbirini çeker (çekme kuvveti)."); });
    A.cap("Coulomb yasası: F = k·Q·q / r². Uzaklık iki katına çıkarsa kuvvet dörtte birine düşer. Yük işaretleri yönü belirler: aynı işaret iter, zıt işaret çeker.");
    A.frame(function (dt) {
      var r = sr.get(), F = k * 1 * 1 / (r * r), px = 60 + r * 40, qx = 360 - 0; c.clearRect(0, 0, A.W, A.H);
      var x1 = 100, x2 = 100 + r * 55; dot(c, x1, 130, 22, sQ > 0 ? "#e0555c" : "#3a7bd5"); txt(c, sQ > 0 ? "+Q" : "−Q", x1, 130, "#fff", 15, "center", true); dot(c, x2, 130, 22, sq > 0 ? "#e0555c" : "#3a7bd5"); txt(c, sq > 0 ? "+q" : "−q", x2, 130, "#fff", 15, "center", true);
      line(c, x1, 175, x2, 175, A.col("--muted"), 2); txt(c, "r = " + f1(r) + " m", (x1 + x2) / 2, 192, A.col("--muted"), 13, "center", true);
      var len = Math.min(70, 8 + F * 12), rep = sq * sQ > 0; arrow(c, x1, 100, x1 + (rep ? -len : len), 100, "#d99a00", 4); arrow(c, x2, 100, x2 + (rep ? len : -len), 100, "#d99a00", 4);
      A.read(L("F = k·Q·q / r² = 9·10⁹·(1·10⁻⁶)(1·10⁻⁶) / " + f1(r * r) + " ≈ " + f2(F / 1000) + " N (Q = q = 1 μC)", "#a77800") + "<br>" + L(rep ? "Aynı cins yükler: İTME" : "Zıt cins yükler: ÇEKME", "#1f7a4d") + "<br>" + L("r iki katı olursa F dörtte biri olur (ters kare).", "var(--muted)"));
    });
  };

  /* ===== Manyetik alanda yüklü parçacık ===== */
  KESIF.anim.manyetik = function (A) {
    A.size(320);
    var c = A.ctx, sv = A.slider("Hız v", 1, 5, 3, 0.5), sB = A.slider("Manyetik alan B", 1, 5, 2, 0.5), th = 0;
    A.cap("B alanı sayfaya dik (içe doğru, ×). Yüklü parçacık alana dik girerse kuvvet hıza dik olur: F = q·v·B. Bu yüzden parçacık çember çizer; yarıçap r = m·v/(q·B).");
    A.frame(function (dt) {
      var v = sv.get(), B = sB.get(), r = 40 * v / B * 0.8, w = v / (r / 40 * 1); th += (v / (r / 28)) * dt * 0.6; c.clearRect(0, 0, A.W, A.H); r = Math.min(120, r);
      for (var i = 0; i < 8; i++) for (var j = 0; j < 6; j++) txt(c, "×", 30 + i * 52, 40 + j * 48, "rgba(120,120,160,.35)", 16, "center");
      var cx = 210, cy = 170; c.strokeStyle = A.col("--line"); c.lineWidth = 2; c.setLineDash([5, 5]); c.beginPath(); c.arc(cx, cy, r, 0, TAU); c.stroke(); c.setLineDash([]);
      var x = cx + r * Math.cos(th), y = cy - r * Math.sin(th); dot(c, x, y, 9, "#e0555c"); txt(c, "+q", x, y, "#fff", 10, "center", true);
      arrow(c, x, y, x + (-Math.sin(th)) * 40, y + (-Math.cos(th)) * 40, "#2fa36b", 3); arrow(c, x, y, x + (cx - x) / r * 40, y + (cy - y) / r * 40, "#e0555c", 3);
      A.read(L("v = " + v + ", B = " + B + " → yarıçap r ∝ v/B = " + f2(v / B) + " birim", "inherit") + "<br>" + L("Yeşil: hız (teğet) · kırmızı: manyetik kuvvet (merkeze, hıza dik)", "#1f7a4d") + "<br>" + L("Manyetik kuvvet hıza dik olduğundan iş yapmaz; parçacığın hızı (sürati) değişmez, yönü değişir.", "var(--muted)"));
    });
  };

  /* ===== İndüksiyon (mıknatıs ve bobin) ===== */
  KESIF.anim.induksiyon = function (A) {
    A.size(300);
    var c = A.ctx, mx = 60, dir = 0, last = mx, emf = 0, sp = A.slider("Mıknatıs hızı", 1, 5, 3, 1);
    A.button("Yaklaştır →", function () { dir = 1; A.cap("Mıknatıs bobine yaklaşırken bobinden geçen manyetik akı artar; akı değiştiği için bobinde emk (indüksiyon akımı) oluşur."); });
    A.button("← Uzaklaştır", function () { dir = -1; A.cap("Mıknatıs uzaklaşırken akı azalır; indüksiyon akımı ters yöne döner (Lenz yasası: oluşan akım akı değişimine karşı koyar)."); });
    A.button("Durdur", function () { dir = 0; A.cap("Mıknatıs durunca akı değişmez: akım olmaz."); });
    A.cap("Faraday: bobinde indüksiyon emk’sı, manyetik akının değişim hızıyla orantılıdır. Mıknatıs hareket ederken akım doğar, durunca kaybolur.");
    A.frame(function (dt) {
      mx += dir * sp.get() * 40 * dt; mx = Math.max(40, Math.min(300, mx)); var v = (mx - last) / Math.max(dt, 1e-3); last = mx; emf += ((v / 40) - emf) * Math.min(1, dt * 8); c.clearRect(0, 0, A.W, A.H);
      for (var i = 0; i < 5; i++) { c.strokeStyle = "#c46a2d"; c.lineWidth = 5; c.beginPath(); c.ellipse(310 + i * 10, 140, 18, 50, 0, 0, TAU); c.stroke(); }
      rrect(c, mx - 50, 118, 50, 44, 6, "#e0555c", A.col("--ink")); rrect(c, mx, 118, 50, 44, 6, "#3a7bd5", A.col("--ink")); txt(c, "K", mx - 25, 140, "#fff", 18, "center", true); txt(c, "G", mx + 25, 140, "#fff", 18, "center", true);
      line(c, 310, 90, 310, 60, A.col("--ink"), 2); line(c, 350, 90, 350, 60, A.col("--ink"), 2); line(c, 310, 60, 350, 60, A.col("--ink"), 2);
      rrect(c, 40, 215, 340, 62, 12, A.col("--card"), A.col("--line")); txt(c, "galvanometre", 80, 232, A.col("--muted"), 12, "left"); var cx = 210, w = Math.max(-1, Math.min(1, emf)); line(c, cx, 270, cx + w * 90, 232, "#e0555c", 4); dot(c, cx, 270, 6, A.col("--ink"));
      A.read(L("Akı değişimi: " + (Math.abs(emf) < 0.05 ? "yok (hareket yok)" : emf > 0 ? "artıyor (yaklaşıyor)" : "azalıyor (uzaklaşıyor)"), "inherit") + "<br>" + L("İndüksiyon akımı: " + (Math.abs(emf) < 0.05 ? "yok" : emf > 0 ? "bir yönde" : "ters yönde"), "#c0344a") + "<br>" + L("Daha hızlı hareket → akı daha hızlı değişir → emk büyür.", "var(--muted)"));
    });
  };

  /* ===== Transformatör ===== */
  KESIF.anim.trafo = function (A) {
    A.size(300);
    var c = A.ctx, sNp = A.slider("Primer sarım sayısı Nₚ", 50, 400, 200, 50), sNs = A.slider("Sekonder sarım sayısı Nₛ", 50, 800, 100, 50), t = 0;
    A.cap("İdeal transformatörde gerilimler sarım sayısıyla orantılıdır: Vₛ/Vₚ = Nₛ/Nₚ. Sarım sayısı fazla olan taraf yüksek gerilimli, düşük akımlıdır; güç (Vₚ·Iₚ = Vₛ·Iₛ) korunur.");
    A.frame(function (dt) {
      t += dt; var Np = sNp.get(), Ns = sNs.get(), Vp = 220, Vs = Vp * Ns / Np, br = Math.min(1, Vs / 400); c.clearRect(0, 0, A.W, A.H);
      rrect(c, 160, 90, 100, 130, 8, "#9aa3ad", A.col("--ink")); txt(c, "demir çekirdek", 210, 155, "#fff", 12, "center", true);
      for (var i = 0; i < Math.min(10, Np / 40); i++) { c.strokeStyle = "#e0555c"; c.lineWidth = 4; c.beginPath(); c.ellipse(160, 110 + i * 10, 22, 6, 0, 0, TAU); c.stroke(); }
      for (var j = 0; j < Math.min(14, Ns / 40); j++) { c.strokeStyle = "#3a7bd5"; c.lineWidth = 4; c.beginPath(); c.ellipse(260, 110 + j * 7, 22, 5, 0, 0, TAU); c.stroke(); }
      txt(c, "Primer " + Np + " sarım", 90, 70, "#e0555c", 13, "center", true); txt(c, "Sekonder " + Ns + " sarım", 335, 70, "#3a7bd5", 13, "center", true); txt(c, "220 V ~", 50, 150, A.col("--ink"), 16, "center", true);
      c.fillStyle = "rgba(255,210,63," + (0.2 + 0.8 * br) + ")"; c.beginPath(); c.arc(365, 220, 24 + 6 * br, 0, TAU); c.fill(); txt(c, "lamba", 365, 262, A.col("--muted"), 12, "center");
      A.read(L("Vₛ = Vₚ·Nₛ/Nₚ = 220·" + Ns + "/" + Np + " = " + Math.round(Vs) + " V", "#1f7a4d") + "<br>" + L(Ns > Np ? "Yükselten transformatör: gerilim artar, akım azalır." : Ns < Np ? "Düşüren transformatör: gerilim azalır, akım artar." : "Gerilim değişmez.", "inherit") + "<br>" + L("Güç korunur: Vₚ·Iₚ = Vₛ·Iₛ (ideal). Enerji nakil hatlarında yüksek gerilim kullanılır çünkü akım küçük olunca ısı kaybı azalır.", "var(--muted)"));
    });
  };

  /* ===== Işık şiddeti ve aydınlanma ===== */
  KESIF.anim.isik = function (A) {
    A.size(280);
    var c = A.ctx, sd = A.slider("Perdenin uzaklığı d (m)", 1, 4, 1, 0.5);
    A.cap("Işık kaynağından uzaklaştıkça aynı ışık akısı daha geniş bir alana yayılır; aydınlanma E = I / d² olduğundan uzaklık iki katına çıkınca aydınlanma dörtte birine düşer.");
    A.frame(function (dt) {
      var d = sd.get(), side = 40 * d, E = 100 / (d * d); c.clearRect(0, 0, A.W, A.H); dot(c, 50, 130, 14, "#ffd23f");
      var x = 50 + d * 70; c.fillStyle = "rgba(255,210,63," + Math.min(0.9, E / 120 + 0.12) + ")"; c.fillRect(x - 4, 130 - side / 2, 8, side); c.strokeStyle = "#d9a400"; c.lineWidth = 1.5; line(c, 50, 130, x, 130 - side / 2, "#d9a400", 1.5, [4, 4]); line(c, 50, 130, x, 130 + side / 2, "#d9a400", 1.5, [4, 4]);
      txt(c, "kaynak", 50, 156, A.col("--muted"), 12, "center"); txt(c, "perde", x, 130 + side / 2 + 14, A.col("--muted"), 12, "center");
      A.read(L("d = " + f1(d) + " m → aydınlatılan alan ∝ d² = " + f1(d * d) + " birim", "inherit") + "<br>" + L("Aydınlanma E = I/d² ∝ 1/" + f1(d * d) + " = %" + Math.round(100 / (d * d)), "#a77800") + "<br>" + L("Uzaklık 2 katı → alan 4 katı, aydınlanma 1/4’ü.", "var(--muted)"));
    });
  };

  /* ===== Küresel ayna ve ince kenarlı mercek: ışın çizimi ===== */
  function optic(A, kind) {
    A.size(340);
    var c = A.ctx, f = 60, sd = A.slider("Cismin uzaklığı", 30, 220, 150, 5), ax = 170, ho = 55, vx = kind === "ayna" ? 360 : 210;
    A.cap(kind === "ayna" ? "Çukur ayna: cismin konumuna göre görüntü gerçek (ters) ya da sanal (düz) olur. 1/f = 1/d₀ + 1/dᵢ." : "Yakınsak mercek: cismin konumuna göre görüntü gerçek (ters) ya da sanal (düz) olur. 1/f = 1/d₀ + 1/dᵢ.");
    A.frame(function (dt) {
      var d0 = sd.get(), di = d0 === f ? 1e6 : f * d0 / (d0 - f), m = -di / d0, xo = vx - d0, yo = ax - ho; c.clearRect(0, 0, A.W, A.H);
      line(c, 10, ax, 410, ax, A.col("--muted"), 1.5, [6, 5]);
      if (kind === "ayna") { c.strokeStyle = A.col("--ink"); c.lineWidth = 5; c.beginPath(); c.arc(vx + 160, ax, 160, Math.PI - 0.55, Math.PI + 0.55); c.stroke(); dot(c, vx - f, ax, 4, "#e0555c"); txt(c, "F", vx - f, ax + 16, "#e0555c", 13, "center", true); dot(c, vx - 2 * f, ax, 4, "#888"); txt(c, "C", vx - 2 * f, ax + 16, "#888", 13, "center", true); }
      else { line(c, vx, ax - 120, vx, ax + 120, A.col("--ink"), 4); arrow(c, vx, ax - 120, vx, ax - 104, A.col("--ink"), 4); arrow(c, vx, ax + 120, vx, ax + 104, A.col("--ink"), 4); dot(c, vx - f, ax, 4, "#e0555c"); dot(c, vx + f, ax, 4, "#e0555c"); txt(c, "F", vx - f, ax + 16, "#e0555c", 13, "center", true); txt(c, "F′", vx + f, ax + 16, "#e0555c", 13, "center", true); }
      arrow(c, xo, ax, xo, yo, "#3a7bd5", 5); txt(c, "cisim", xo, ax + 16, "#3a7bd5", 12, "center", true);
      var real = d0 > f, xi = kind === "ayna" ? vx - di : vx + di, hi = m * ho, yi = ax - hi; if (d0 === f) { A.read(L("Cisim odakta: ışınlar paralel çıkar, görüntü oluşmaz (sonsuzda).", "#c0344a")); return; }
      if (kind === "ayna") {
        var Fx = vx - f, y2 = yo + (ax - yo) * (vx - xo) / (Fx - xo);
        line(c, xo, yo, vx, yo, "#e0555c", 2); line(c, xo, yo, vx, y2, "#d99a00", 2);
        if (real) { line(c, vx, yo, xi, yi, "#e0555c", 2); line(c, vx, y2, xi, y2, "#d99a00", 2); }
        else { line(c, vx, yo, vx - f * 2.8, yo + (ax - yo) * 2.8, "#e0555c", 2); line(c, vx, y2, vx - 190, y2, "#d99a00", 2); line(c, vx, yo, xi, yi, "#e0555c", 1.5, [5, 4]); line(c, vx, y2, xi, y2, "#d99a00", 1.5, [5, 4]); }
      } else {
        var slope = (ax - yo) / (vx - xo);
        line(c, xo, yo, vx, yo, "#e0555c", 2); line(c, vx, yo, vx + f * 2.8, yo + (ax - yo) * 2.8, "#e0555c", 2);
        line(c, xo, yo, vx, ax, "#d99a00", 2); line(c, vx, ax, vx + 190, ax + slope * 190, "#d99a00", 2);
        if (!real) { line(c, vx, yo, xi, yi, "#e0555c", 1.5, [5, 4]); line(c, xo, yo, xi, yi, "#d99a00", 1.5, [5, 4]); }
      }
      if (xi > 0 && xi < 420) { c.globalAlpha = 0.9; arrow(c, xi, ax, xi, yi, real ? "#2fa36b" : "#8a63d2", 5); c.globalAlpha = 1; txt(c, real ? "görüntü" : "sanal", xi, ax + (hi >= 0 ? 16 : -16) + (hi < 0 ? 0 : 0), real ? "#2fa36b" : "#8a63d2", 12, "center", true); }
      A.read(L("d₀ = " + d0 + " (f = " + f + ") → dᵢ = " + f1(di) + " → büyütme m = " + f2(m), "inherit") + "<br>" + L(real ? "Görüntü GERÇEK ve TERS" + (Math.abs(m) > 1 ? ", büyük" : Math.abs(m) < 1 ? ", küçük" : ", eşit boy") : "Görüntü SANAL ve DÜZ, büyük (cisim odak içinde)", "#1f7a4d") + "<br>" + L(kind === "ayna" ? "Gerçek görüntü ayna önünde (ışınlar gerçekten kesişir); sanal görüntü ayna arkasındadır." : "Gerçek görüntü merceğin arkasında oluşur; sanal görüntü cisimle aynı taraftadır (büyüteç).", "var(--muted)"));
    });
  }
  KESIF.anim.ayna = function (A) { optic(A, "ayna"); };
  KESIF.anim.mercek = function (A) { optic(A, "mercek"); };

  /* ===== Kırılma (Snell) ===== */
  KESIF.anim.kirilma = function (A) {
    A.size(320);
    var c = A.ctx, sa = A.slider("Gelme açısı (°)", 0, 85, 40, 1), n1 = 1, n2 = 1.33, mode = 0;
    A.button("Havadan suya", function () { n1 = 1; n2 = 1.33; });
    A.button("Havadan cama", function () { n1 = 1; n2 = 1.5; });
    A.button("Sudan havaya", function () { n1 = 1.33; n2 = 1; A.cap("Yoğun ortamdan seyrek ortama geçerken ışın normalden uzaklaşır; belli bir sınır açıdan sonra tam yansıma olur."); });
    A.cap("Işık, kırılma indisi farklı ortama geçerken yön değiştirir: n₁·sinθ₁ = n₂·sinθ₂. Daha yoğun ortamda (büyük n) ışın normale yaklaşır.");
    A.frame(function (dt) {
      var a = sa.get() * Math.PI / 180, s2 = n1 * Math.sin(a) / n2, tir = s2 > 1, b = tir ? 0 : Math.asin(s2); c.clearRect(0, 0, A.W, A.H);
      c.fillStyle = n2 > n1 ? "rgba(90,150,230,.35)" : "rgba(255,255,255,0)"; c.fillRect(0, 170, A.W, 150); if (n1 > n2) { c.fillStyle = "rgba(90,150,230,.35)"; c.fillRect(0, 0, A.W, 170); }
      line(c, 0, 170, A.W, 170, A.col("--ink"), 3); line(c, 210, 30, 210, 310, A.col("--muted"), 1.5, [5, 5]); txt(c, "normal", 240, 24, A.col("--muted"), 12, "left"); txt(c, "n₁ = " + n1, 20, 40, A.col("--ink"), 14, "left", true); txt(c, "n₂ = " + n2, 20, 300, A.col("--ink"), 14, "left", true);
      var L1 = 130, sx = 210 - L1 * Math.sin(a), sy = 170 - L1 * Math.cos(a); arrow(c, sx, sy, 210, 170, "#e0555c", 4);
      if (!tir) { var ex = 210 + L1 * Math.sin(b), ey = 170 + L1 * Math.cos(b); arrow(c, 210, 170, ex, ey, "#2fa36b", 4); }
      var rx = 210 + 90 * Math.sin(a), ry = 170 - 90 * Math.cos(a); line(c, 210, 170, rx, ry, "rgba(224,85,92,.5)", 2, [4, 4]);
      var crit = n1 > n2 ? Math.asin(n2 / n1) * 180 / Math.PI : null;
      A.read(L("θ₁ = " + Math.round(a * 180 / Math.PI) + "° → θ₂ = " + (tir ? "yok" : Math.round(b * 180 / Math.PI) + "°"), "#1f7a4d") + "<br>" + L(tir ? "TAM YANSIMA: ışık yoğun ortamdan çıkamıyor; tamamen geri yansıyor." : n2 > n1 ? "Seyrekten yoğuna: ışın normale yaklaştı (θ₂ < θ₁)." : "Yoğundan seyreğe: ışın normalden uzaklaştı (θ₂ > θ₁).", "inherit") + (crit ? "<br>" + L("Sınır açı ≈ " + Math.round(crit) + "°; bunun üstünde tam yansıma olur (fiber optik kablo bu ilkeyle çalışır).", "var(--muted)") : ""));
    });
  };

  /* ===== Düzlem ayna ===== */
  KESIF.anim.duzlem = function (A) {
    A.size(300);
    var c = A.ctx, sd = A.slider("Cismin aynaya uzaklığı", 40, 150, 100, 5), vx = 230;
    A.cap("Düzlem aynada görüntü, cismin ayna arkasındaki simetriğidir: aynaya uzaklığı cismin uzaklığına eşit, boyu eşit, görüntü sanal ve düzdür. Gelme açısı yansıma açısına eşittir.");
    A.frame(function (dt) {
      var d = sd.get(), xo = vx - d, xi = vx + d, y0 = 200, h = 60, ey = 80; c.clearRect(0, 0, A.W, A.H);
      c.fillStyle = "rgba(140,190,230,.3)"; c.fillRect(vx, 20, 12, 260); line(c, vx, 20, vx, 280, A.col("--ink"), 4);
      arrow(c, xo, y0, xo, y0 - h, "#3a7bd5", 5); txt(c, "cisim", xo, y0 + 16, "#3a7bd5", 12, "center", true);
      c.globalAlpha = 0.7; arrow(c, xi, y0, xi, y0 - h, "#8a63d2", 5); c.globalAlpha = 1; txt(c, "sanal görüntü", xi, y0 + 16, "#8a63d2", 12, "center", true);
      line(c, xo, y0 - h, vx, ey + 60, "#e0555c", 2); line(c, vx, ey + 60, 20, ey + 60 + (ey + 60 - (y0 - h)) * 0 + 0, "#e0555c", 0); var gx = 30, gy = 120; line(c, vx, ey + 60, gx, gy + 40, "#e0555c", 2); line(c, vx, ey + 60, xi, y0 - h, "#e0555c", 1.5, [5, 4]);
      dot(c, 30, gy + 40, 8, A.col("--ink")); txt(c, "göz", 30, gy + 58, A.col("--ink"), 12, "center", true);
      A.read(L("Cisim–ayna = " + d + " birim · görüntü–ayna = " + d + " birim", "#1f7a4d") + "<br>" + L("Görüntü: sanal, düz, cisimle aynı boyda, yanal ters.", "inherit") + "<br>" + L("Kırmızı kesikli çizgiler görüntü yönünü gösterir: gözümüz ışını hep düz çizgi sanar.", "var(--muted)"));
    });
  };

  /* ===== Limit hız ===== */
  KESIF.anim.limit = function (A) {
    A.size(330);
    var c = A.ctx, t = 0, sm = A.slider("Kütle m", 1, 10, 4, 1), sk = A.slider("Hava direnci katsayısı k", 0.2, 2, 0.8, 0.1), v = 0, hist = [];
    A.button("Baştan", function () { t = 0; v = 0; hist = []; });
    A.cap("Düşen cisme ağırlığı (aşağı) ve hava direnci (yukarı) etki eder. Hız arttıkça direnç de artar; direnç ağırlığa eşit olunca net kuvvet sıfır olur ve cisim sabit hızla (limit hız) düşer.");
    A.frame(function (dt) {
      var m = sm.get(), k = sk.get(), g = 10; var a = g - (k / m) * v * v * 0.2; v += a * dt * 1.2; t += dt; if (hist.length === 0 || t - hist[hist.length - 1][0] > 0.1) { hist.push([t, v]); if (hist.length > 160) hist.shift(); }
      var vlim = Math.sqrt(m * g / (k * 0.2)); c.clearRect(0, 0, A.W, A.H);
      var gx = 40, gy = 40, gw = 360, gh = 200; c.strokeStyle = A.col("--line"); c.lineWidth = 1.5; c.strokeRect(gx, gy, gw, gh); txt(c, "hız – zaman", gx, gy - 14, A.col("--ink"), 13, "left", true);
      var ymax = Math.max(vlim * 1.2, 10); var Y = function (vv) { return gy + gh - vv / ymax * gh; }; line(c, gx, Y(vlim), gx + gw, Y(vlim), "#2fa36b", 2, [6, 5]); txt(c, "limit hız ≈ " + f1(vlim), gx + gw - 4, Y(vlim) - 10, "#2fa36b", 12, "right", true);
      c.strokeStyle = "#e0555c"; c.lineWidth = 3; c.beginPath(); hist.forEach(function (h, i) { var x = gx + i / 160 * gw, y = Y(Math.min(ymax, h[1])); if (i === 0) c.moveTo(x, y); else c.lineTo(x, y); }); c.stroke();
      var fd = (k / 1) * v * v * 0.2 / 1;
      A.read(L("t = " + f1(t) + " s · v = " + f1(v) + " m/s", "inherit") + "<br>" + L("Ağırlık = " + m * 10 + " N · hava direnci = " + f1(Math.min(m * 10, fd * 1)) + " N", "#c0344a") + "<br>" + L(Math.abs(v - vlim) < 0.3 ? "Net kuvvet ≈ 0: sabit (limit) hızla düşüyor." : "Hız hâlâ artıyor; direnç büyüyor.", "#1f7a4d") + "<br>" + L("Kütle büyürse limit hız artar; paraşütle (k büyük) limit hız küçülür.", "var(--muted)"));
    });
  };
})();
