/* Aktapokus Keşif — sunucusuz, hesapsız. Tüm ilerleme yalnızca bu tarayıcıda (localStorage). */
(function () {
  "use strict";
  const K = window.KESIF, $app = document.getElementById("app");
  const KEY = "kesif.v1";

  /* ---------- kayıt ---------- */
  const blank = () => ({ done: {}, days: {}, review: [], notes: {}, goal: 10, exam: false });
  let S;
  try { S = Object.assign(blank(), JSON.parse(localStorage.getItem(KEY) || "{}")); } catch (e) { S = blank(); }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} };
  const today = () => { const d = new Date(); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); };
  const dayRec = () => (S.days[today()] = S.days[today()] || { n: 0, ok: 0 });

  /* ---------- yardımcılar ---------- */
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const el = (tag, attrs, html) => { const e = document.createElement(tag); if (attrs) for (const k in attrs) e.setAttribute(k, attrs[k]); if (html != null) e.innerHTML = html; return e; };
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const LET = "ABCDE";
  function speak(text) {
    if (!("speechSynthesis" in window)) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text); u.lang = "tr-TR"; u.rate = 0.95;
    const v = speechSynthesis.getVoices().find(v => /^tr/i.test(v.lang)); if (v) u.voice = v;
    speechSynthesis.speak(u);
  }
  const ttsBtn = text => text && "speechSynthesis" in window ? `<button class="btn ghost tts" data-say="${esc(text)}" type="button">🔊 Sesli dinle</button>` : "";
  document.addEventListener("click", e => { const b = e.target.closest("[data-say]"); if (b) speak(b.dataset.say); });

  /* ---------- yönlendirme ---------- */
  function route() {
    speechSynthesis && speechSynthesis.cancel && speechSynthesis.cancel();
    const h = location.hash.replace(/^#\/?/, "").split("/");
    document.querySelectorAll("[data-nav]").forEach(a => a.removeAttribute("aria-current"));
    let page = "home";
    if (h[0] === "plan") page = "plan"; else if (h[0] === "ayarlar") page = "ayarlar";
    const nav = document.querySelector(`[data-nav="${page}"]`); if (nav) nav.setAttribute("aria-current", "page");
    closeFS();
    if (h[0] === "ders" && K.lessons[h[1]]) return renderLesson(K.lessons[h[1]], +h[2] || 0);
    if (h[0] === "gunluk") return startDaily();
    if (h[0] === "plan") return renderPlan();
    if (h[0] === "ayarlar") return renderSettings();
    renderHome();
    $app.focus({ preventScroll: true });
  }
  window.addEventListener("hashchange", route);

  /* ---------- ana sayfa ---------- */
  function todaysLessons() {
    const dow = new Date().getDay(), want = K.week[dow] || [];
    const have = Object.values(K.lessons);
    let list = have.filter(l => want.includes(l.subject));
    if (!list.length) list = have.filter(l => !S.done[l.id]);
    if (!list.length) list = have;
    return { list, want };
  }
  function renderHome() {
    const r = dayRec(), goal = S.goal, pct = Math.min(100, Math.round(r.n / goal * 100));
    const { list, want } = todaysLessons();
    const wantNames = want.map(s => K.subjects[s].name).join(" · ");
    const pending = list.find(l => !S.done[l.id]) || list[0];
    const dayName = K.dayNames[new Date().getDay()];
    let html = `<span class="eyebrow">${dayName}</span><h1>Bugün neyi keşfedeceksin?</h1>
<p class="lede">Ezber yok. Bugünün planı: <b>${esc(wantNames || "serbest")}</b>. Önce bir fikri anla, sonra soruyla dene.</p><div class="grid" style="margin-top:22px">`;
    if (pending) html += `<article class="card pick"><span class="tag">${esc(K.subjects[pending.subject].name)}</span><span class="tag">≈ ${pending.minutes} dk</span>
<h3>${esc(pending.title)}</h3><p class="muted small">${esc(pending.hook)}</p>
<a class="btn" href="#/ders/${pending.id}/${S.done[pending.id] ? 0 : (S.notes["p_" + pending.id] || 0)}">${S.done[pending.id] ? "Tekrar keşfet" : (S.notes["p_" + pending.id] ? "Kaldığın yerden devam" : "Keşfe başla")}</a></article>`;
    html += `<article class="card"><div class="row"><div class="ring" style="--p:${pct}"><b>${r.n}/${goal}</b></div>
<div><h3>Günlük sorular</h3><p class="muted small" style="margin:0">Hedef: ${goal} soru${r.n ? " · doğru: " + r.ok : ""}</p></div></div>
<p style="margin-top:14px"><a class="btn ${r.n >= goal ? "ghost" : ""}" href="#/gunluk">${r.n >= goal ? "Bir tur daha" : "Soruları çöz"}</a></p></article>`;
    if (S.review.length) html += `<article class="card"><h3>Tekrar kutusu</h3><p class="muted small">Düşünceyi yeniden kurmak istediğin ${S.review.length} soru var. Cezası yok; sadece ikinci şans.</p><a class="btn ghost" href="#/gunluk/tekrar">Tekrar et</a></article>`;
    html += `</div><h2 style="margin-top:36px">Keşif kütüphanesi</h2><div class="grid">`;
    for (const l of Object.values(K.lessons))
      html += `<a class="card" style="text-decoration:none;color:inherit" href="#/ders/${l.id}/0"><span class="tag">${esc(K.subjects[l.subject].name)}</span><h3>${esc(l.title)}</h3><p class="muted small">${S.done[l.id] ? "✓ tamamlandı · " : ""}≈ ${l.minutes} dk</p></a>`;
    for (const k in K.subjects) if (!Object.values(K.lessons).some(l => l.subject === k))
      html += `<div class="card soon"><span class="tag">${esc(K.subjects[k].name)}</span><h3>Yakında</h3><p class="muted small">Bu ders için keşif hazırlanıyor.</p></div>`;
    $app.innerHTML = html + "</div>";
  }

  /* ---------- keşif grafiği ---------- */
  function explorer(step, host) {
    const c = step.cfg, W = 600, H = 320, P = 34;
    const X = x => P + (x - c.xmin) / (c.xmax - c.xmin) * (W - 2 * P);
    const Y = y => H - P - (y - c.ymin) / (c.ymax - c.ymin) * (H - 2 * P);
    const fmt = v => !isFinite(v) || isNaN(v) ? "tanımsız" : Math.abs(v) > 9999 ? (v > 0 ? "+∞'a gidiyor" : "−∞'a gidiyor") : (+v.toFixed(4)).toString().replace(".", ",");
    let d = "", seg = [];
    for (let i = 0; i <= 400; i++) {
      const x = c.xmin + (c.xmax - c.xmin) * i / 400, y = c.f(x);
      if (isFinite(y) && y >= c.ymin - 1 && y <= c.ymax + 1 && Math.abs(x - c.a) > 1e-9) seg.push([X(x), Y(y)]);
      else { if (seg.length > 1) d += "M" + seg.map(p => p[0].toFixed(1) + " " + p[1].toFixed(1)).join("L"); seg = []; }
    }
    if (seg.length > 1) d += "M" + seg.map(p => p[0].toFixed(1) + " " + p[1].toFixed(1)).join("L");
    const hasL = typeof c.L === "number";
    host.innerHTML = `<p>${step.intro}</p><div class="lab">
<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(step.title)} grafiği">
<line class="ax" x1="${P}" y1="${Y(Math.max(c.ymin, Math.min(0, c.ymax)))}" x2="${W - P}" y2="${Y(Math.max(c.ymin, Math.min(0, c.ymax)))}"/>
<line class="ax" x1="${X(Math.max(c.xmin, Math.min(0, c.xmax)))}" y1="${P}" x2="${X(Math.max(c.xmin, Math.min(0, c.xmax)))}" y2="${H - P}"/>
<line class="ax" x1="${X(c.a)}" y1="${P}" x2="${X(c.a)}" y2="${H - P}" stroke-dasharray="3 5"/>
${hasL ? `<line class="lim" x1="${P}" y1="${Y(c.L)}" x2="${W - P}" y2="${Y(c.L)}"/>` : ""}
<path class="curve" d="${d}"/>${hasL ? `<circle class="hole" cx="${X(c.a)}" cy="${Y(c.L)}" r="7"/>` : ""}
<circle class="dot" id="pt" r="8" cx="-20" cy="-20"/></svg>
<div class="side row" style="margin:10px 0"></div>
<label for="sl" class="muted small">Yaklaşma aralığı <b>|${c.varName} − ${String(c.a).replace(".", ",")}|</b> (sağa çek: küçülsün)</label>
<input id="sl" type="range" min="0" max="100" value="0" aria-label="Aralığı küçült">
<div class="readout"><span>${c.varName} = <b id="xv">–</b></span><span>${c.fLabel} = <b id="fv">–</b>${c.unit ? " " + c.unit : ""}</span></div>
<table><thead><tr><th>${c.varName}</th><th>${c.fLabel}</th></tr></thead><tbody id="tb"></tbody></table></div>`;
    let side = c.sides[c.sides.length - 1];
    const sb = host.querySelector(".side");
    if (c.sides.length > 1) {
      sb.innerHTML = `<span class="muted">Yaklaşma yönü:</span><button class="btn ghost" data-s="left" type="button">◀ Soldan</button><button class="btn ghost" data-s="right" type="button">Sağdan ▶</button>`;
      sb.addEventListener("click", e => { const b = e.target.closest("[data-s]"); if (!b) return; side = b.dataset.s; host.querySelector("#tb").innerHTML = ""; seen = {}; upd(); mark(); });
    }
    const mark = () => sb.querySelectorAll("[data-s]").forEach(b => { b.style.borderColor = b.dataset.s === side ? "var(--accent)" : ""; });
    const sl = host.querySelector("#sl"), tb = host.querySelector("#tb"); let seen = {};
    function upd() {
      const dist = c.dmax * Math.pow(10, -3 * sl.value / 100);
      const x = c.a + (side === "left" ? -dist : dist), y = c.f(x), pt = host.querySelector("#pt");
      host.querySelector("#xv").textContent = fmt(x); host.querySelector("#fv").textContent = fmt(y);
      if (isFinite(y) && y >= c.ymin - 1 && y <= c.ymax + 1) { pt.setAttribute("cx", X(x)); pt.setAttribute("cy", Y(y)); } else { pt.setAttribute("cx", X(x)); pt.setAttribute("cy", y > 0 ? P : H - P); }
      for (let k = 0; k <= Math.floor(sl.value / 10); k++) {
        const key = side + k; if (seen[key]) continue; seen[key] = 1;
        const dk = c.dmax * Math.pow(10, -3 * k * 10 / 100), xk = c.a + (side === "left" ? -dk : dk);
        tb.insertBefore(el("tr", null, `<td>${fmt(xk)}</td><td>${fmt(c.f(xk))}</td>`), tb.firstChild);
      }
    }
    sl.addEventListener("input", upd); mark(); upd();
  }

  /* ---------- birim çember keşfi: sin = yükseklik, cos = yatay uzaklık ---------- */
  function circleLab(step, host) {
    const c = step.cfg, R = 100, cx = 140, cy = 150, wx = 330, ww = 280, both = c.wave === "both";
    const rad = d => d * Math.PI / 180;
    const EX = [[0, "0"], [0.5, "1/2"], [Math.SQRT1_2, "√2/2"], [Math.sqrt(3) / 2, "√3/2"], [1, "1"]];
    const lab = v => { const a = Math.abs(v), m = EX.find(e => Math.abs(e[0] - a) < 1e-9); return m ? (v < 0 && a > 1e-9 ? "−" : "") + m[1] : (+v.toFixed(3)).toString().replace(".", ",").replace("-", "−"); };
    const WX = d => wx + d / 360 * ww, WY = v => cy - R * v;
    const path = fn => { let s = ""; for (let d = 0; d <= 360; d += 3) s += (d ? "L" : "M") + WX(d).toFixed(1) + " " + WY(fn(rad(d))).toFixed(1); return s; };
    host.innerHTML = `<p>${step.intro}</p><div class="lab">
<svg viewBox="0 0 640 300" role="img" aria-label="${esc(step.title)}">
<circle cx="${cx}" cy="${cy}" r="${R}" fill="none" stroke="var(--line)" stroke-width="2"/>
<line class="ax" x1="${cx - R - 14}" y1="${cy}" x2="${cx + R + 14}" y2="${cy}"/><line class="ax" x1="${cx}" y1="${cy - R - 14}" x2="${cx}" y2="${cy + R + 14}"/>
<line class="ax" x1="${wx}" y1="${cy}" x2="${wx + ww + 8}" y2="${cy}"/><line class="ax" x1="${wx}" y1="${cy - R - 14}" x2="${wx}" y2="${cy + R + 14}"/>
<g fill="var(--muted)" font-size="13" text-anchor="middle">${[90, 180, 270, 360].map(d => `<text x="${WX(d)}" y="${cy + R + 30}">${d}°</text>`).join("")}<text x="${wx - 14}" y="${WY(1) + 4}">1</text><text x="${wx - 16}" y="${WY(-1) + 4}">−1</text></g>
<path d="${path(Math.sin)}" fill="none" stroke="var(--accent)" stroke-opacity=".22" stroke-width="2"/>
${both ? `<path d="${path(Math.cos)}" fill="none" stroke="var(--cyan)" stroke-opacity=".22" stroke-width="2"/>` : ""}
<path id="ts" fill="none" stroke="var(--accent)" stroke-width="3.5"/>${both ? `<path id="tc" fill="none" stroke="var(--cyan)" stroke-width="3.5"/>` : ""}
<line id="guide" stroke="var(--accent)" stroke-dasharray="3 5" stroke-width="1.5"/>
<line id="rl" stroke="var(--ink)" stroke-width="2.5"/>
<line id="cv" stroke="var(--cyan)" stroke-width="5" stroke-linecap="round"/><line id="sv" stroke="var(--accent)" stroke-width="5" stroke-linecap="round"/>
<circle id="pt" r="8" fill="var(--ink)"/><circle id="wd" r="6" fill="var(--accent)"/>${both ? `<circle id="wc" r="6" fill="var(--cyan)"/>` : ""}</svg>
<div class="side row" style="margin:10px 0">${(c.snaps || []).map(a => `<button class="btn ghost" data-a="${a}" type="button">${a}°</button>`).join("")}</div>
<label for="sl" class="muted small">Açı: kabini döndür</label><input id="sl" type="range" min="0" max="360" step="1" value="${c.start || 0}" aria-label="Açı">
<div class="readout"><span>açı = <b id="av">0°</b></span><span style="color:var(--cyan)">cos (yatay) = <b id="cvl" style="color:var(--cyan)">–</b></span><span>sin (yükseklik) = <b id="svl">–</b></span></div>
<table><thead><tr><th>açı</th><th>cos</th><th>sin</th></tr></thead><tbody id="tb"></tbody></table></div>`;
    const q = s => host.querySelector(s), sl = q("#sl"), tb = q("#tb"), seen = {}, set = (e, o) => { for (const k in o) e.setAttribute(k, o[k]); };
    function upd() {
      const d = +sl.value, co = Math.cos(rad(d)), si = Math.sin(rad(d)), px = cx + R * co, py = cy - R * si;
      set(q("#rl"), { x1: cx, y1: cy, x2: px, y2: py }); set(q("#pt"), { cx: px, cy: py });
      set(q("#sv"), { x1: px, y1: cy, x2: px, y2: py }); set(q("#cv"), { x1: cx, y1: cy + 0.01, x2: px, y2: cy + 0.01 });
      let ds = "", dc = ""; for (let a = 0; a <= d; a += 3) { ds += (a ? "L" : "M") + WX(a).toFixed(1) + " " + WY(Math.sin(rad(a))).toFixed(1); dc += (a ? "L" : "M") + WX(a).toFixed(1) + " " + WY(Math.cos(rad(a))).toFixed(1); }
      ds += "L" + WX(d).toFixed(1) + " " + WY(si).toFixed(1); dc += "L" + WX(d).toFixed(1) + " " + WY(co).toFixed(1);
      set(q("#ts"), { d: ds }); if (both) { set(q("#tc"), { d: dc }); set(q("#wc"), { cx: WX(d), cy: WY(co) }); }
      set(q("#wd"), { cx: WX(d), cy: WY(si) }); set(q("#guide"), { x1: px, y1: py, x2: WX(d), y2: WY(si) });
      q("#av").textContent = d + "°"; q("#cvl").textContent = lab(co); q("#svl").textContent = lab(si);
      if ((d % 30 === 0 || d % 45 === 0) && !seen[d]) { seen[d] = 1; const rows = [...tb.children]; const tr = el("tr", { "data-d": d }, `<td>${d}°</td><td>${lab(co)}</td><td>${lab(si)}</td>`); const nx = rows.find(r => +r.dataset.d > d); tb.insertBefore(tr, nx || null); }
    }
    sl.addEventListener("input", upd);
    host.querySelector(".side").addEventListener("click", e => { const b = e.target.closest("[data-a]"); if (b) { sl.value = b.dataset.a; upd(); } });
    upd();
  }

  /* ---------- üstel / logaritma keşfi: taban kaydırıcısı, isteğe bağlı ayna (y = x) ---------- */
  function expoLab(step, host) {
    const c = step.cfg, W = 540, H = 480, xmin = -3, xmax = 6, ymin = -3, ymax = 5, u = W / (xmax - xmin);
    const X = x => (x - xmin) * u, Y = y => H - (y - ymin) * u;
    const f = v => (+v.toFixed(3)).toString().replace(".", ",").replace("-", "−");
    host.innerHTML = `<p>${step.intro}</p><div class="lab"><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(step.title)}"><defs><clipPath id="cp"><rect x="0" y="0" width="${W}" height="${H}"/></clipPath></defs>
<g stroke="var(--line)" stroke-width="1">${[-2, -1, 1, 2, 3, 4, 5].map(i => `<line x1="${X(i)}" y1="0" x2="${X(i)}" y2="${H}"/>`).join("")}${[-2, -1, 1, 2, 3, 4].map(i => `<line x1="0" y1="${Y(i)}" x2="${W}" y2="${Y(i)}"/>`).join("")}</g>
<line class="ax" x1="0" y1="${Y(0)}" x2="${W}" y2="${Y(0)}"/><line class="ax" x1="${X(0)}" y1="0" x2="${X(0)}" y2="${H}"/>
${c.inverse ? `<line x1="${X(ymin)}" y1="${Y(ymin)}" x2="${X(ymax)}" y2="${Y(ymax)}" stroke="var(--muted)" stroke-dasharray="6 6" stroke-width="2"/><text x="${X(3.6)}" y="${Y(4.1)}" fill="var(--muted)" font-size="15">y = x</text>` : ""}
<g clip-path="url(#cp)"><path id="pe" fill="none" stroke="var(--accent)" stroke-width="4"/>${c.inverse ? `<path id="pl" fill="none" stroke="var(--cyan)" stroke-width="4"/>` : ""}</g>
<circle cx="${X(0)}" cy="${Y(1)}" r="7" fill="var(--accent)"/><text x="${X(0) + 10}" y="${Y(1) - 8}" fill="var(--accent)" font-size="15">(0, 1)</text>
${c.inverse ? `<circle cx="${X(1)}" cy="${Y(0)}" r="7" fill="var(--cyan)"/><text x="${X(1) + 8}" y="${Y(0) + 20}" fill="var(--cyan)" font-size="15">(1, 0)</text>` : ""}</svg>
<div class="side row" style="margin:10px 0">${(c.snaps || []).map(a => `<button class="btn ghost" data-a="${a}" type="button">taban ${String(a).replace(".", ",")}</button>`).join("")}</div>
<label for="sl" class="muted small">Taban a</label><input id="sl" type="range" min="0.2" max="4" step="0.1" value="${c.start || 2}" aria-label="Taban">
<div class="readout"><span>a = <b id="av">–</b></span><span id="note" class="muted small"></span></div>
<table><thead><tr><th>x</th>${[-2, -1, 0, 1, 2, 3].map(x => `<th>${f(x)}</th>`).join("")}</tr></thead><tbody><tr><td class="muted">a<sup>x</sup></td>${[-2, -1, 0, 1, 2, 3].map(x => `<td data-x="${x}"></td>`).join("")}</tr></tbody></table></div>`;
    const q = s => host.querySelector(s), sl = q("#sl");
    function upd() {
      const a = +sl.value; let de = "", dl = "";
      for (let x = -3; x <= 6.001; x += 0.05) { const y = Math.pow(a, x); if (isFinite(y) && Math.abs(y) < 60) { de += (de && de.slice(-1) !== "M" ? "L" : "M") + X(x).toFixed(1) + " " + Y(y).toFixed(1); dl += (dl && dl.slice(-1) !== "M" ? "L" : "M") + X(y).toFixed(1) + " " + Y(x).toFixed(1); } }
      q("#pe").setAttribute("d", de); if (c.inverse) q("#pl").setAttribute("d", dl);
      q("#av").textContent = f(a).replace("−", "-");
      host.querySelectorAll("td[data-x]").forEach(td => td.textContent = f(Math.pow(a, +td.dataset.x)));
      q("#note").textContent = Math.abs(a - 1) < 1e-9 ? "a = 1: eğri düz bir çizgi, logaritma tanımsız (taban 1 olamaz)." : a > 1 ? "a > 1: x arttıkça yükseliyor." : "0 < a < 1: x arttıkça alçalıyor.";
    }
    sl.addEventListener("input", upd);
    host.querySelector(".side").addEventListener("click", e => { const b = e.target.closest("[data-a]"); if (b) { sl.value = b.dataset.a; upd(); } });
    upd();
  }

  /* ---------- ders akışı ---------- */
  function renderLesson(L, i) {
    i = Math.max(0, Math.min(L.steps.length - 1, i));
    S.notes["p_" + L.id] = i; save();
    const st = L.steps[i], total = L.steps.length;
    $app.innerHTML = `<div class="stage"><div class="steps"><div class="meta"><span>${esc(K.subjects[L.subject].name)} · ${esc(L.title)}</span><span>Adım ${i + 1}/${total}</span></div><div class="bar"><i style="width:${Math.round((i + 1) / total * 100)}%"></i></div></div><section id="step"></section><div class="row" id="nav" style="margin-top:22px"></div></div>`;
    const host = document.getElementById("step"), nav = document.getElementById("nav");
    const next = () => { if (i + 1 < total) location.hash = `#/ders/${L.id}/${i + 1}`; else { S.done[L.id] = true; delete S.notes["p_" + L.id]; save(); location.hash = "#/"; } };
    const navBtns = (enabled) => {
      nav.innerHTML = (i > 0 ? `<a class="btn ghost" href="#/ders/${L.id}/${i - 1}">← Geri</a>` : `<a class="btn ghost" href="#/">Çık</a>`) +
        `<button class="btn" id="nx" type="button" ${enabled ? "" : "disabled"}>${i + 1 < total ? "Devam →" : "Bitir ✓"}</button>`;
      nav.querySelector("#nx").onclick = next;
    };
    if (st.type === "text") {
      host.innerHTML = `<h2>${st.title}</h2>${ttsBtn(st.say)}<div class="body" style="margin-top:12px">${st.html}</div>`; navBtns(true);
    } else if (st.type === "explorer") {
      host.innerHTML = `<h2>${st.title}</h2>${ttsBtn(st.say)}<div id="ex" style="margin-top:12px"></div>`; explorer(st, host.querySelector("#ex")); navBtns(true);
    } else if (st.type === "circle") {
      host.innerHTML = `<h2>${st.title}</h2>${ttsBtn(st.say)}<div id="ex" style="margin-top:12px"></div>`; circleLab(st, host.querySelector("#ex")); navBtns(true);
    } else if (st.type === "expo") {
      host.innerHTML = `<h2>${st.title}</h2>${ttsBtn(st.say)}<div id="ex" style="margin-top:12px"></div>`; expoLab(st, host.querySelector("#ex")); navBtns(true);
    } else if (st.type === "mcq") {
      navBtns(false); question(host, st, ok => { dayRecordLesson(st, ok); navBtns(true); }, true);
    } else if (st.type === "tap") {
      navBtns(false); tapQuestion(host, st, () => navBtns(true));
    } else if (st.type === "reflect") {
      const key = "r_" + L.id + "_" + i;
      host.innerHTML = `<span class="eyebrow">Peki ya neden?</span><h2>${esc(st.q)}</h2><label class="muted small" for="rt">Önce kendi düşünceni yaz (yalnızca bu cihazda kalır).</label>
<textarea id="rt">${esc(S.notes[key] || "")}</textarea><p><button class="btn ghost" id="rv" type="button">Örnek bir düşünceyi göster</button></p><div id="hint"></div>`;
      host.querySelector("#rt").oninput = e => { S.notes[key] = e.target.value; save(); };
      host.querySelector("#rv").onclick = () => { host.querySelector("#hint").innerHTML = `<div class="fb">${esc(st.hint)}</div>`; };
      navBtns(true);
    }
    window.scrollTo(0, 0);
  }
  function dayRecordLesson(st, ok) { /* ders içi sorular günlük hedefe sayılmaz; yalnızca keşif akışıdır */ }

  /* ---------- soru bileşenleri ---------- */
  function question(host, q, done, inLesson, extra) {
    const opts = shuffle(q.opts), t0 = Date.now();
    host.innerHTML = `${q.predict ? '<span class="eyebrow">Tahmin et</span>' : ""}${q.passage ? `<div class="passage">${esc(q.passage)}</div>` : ""}<div class="qtext" style="font:600 clamp(21px,3vw,28px)/1.45 var(--f-display)">${esc(q.q)}</div>
<div class="opts">${opts.map((o, i) => `<button class="opt" type="button" data-i="${i}"><span class="k">${LET[i]}</span>${esc(o.t)}</button>`).join("")}</div><div id="fb"></div>`;
    let answered = false;
    host.querySelector(".opts").addEventListener("click", e => {
      const b = e.target.closest(".opt"); if (!b || answered) return; answered = true;
      const o = opts[+b.dataset.i], ok = !!o.ok, secs = Math.round((Date.now() - t0) / 1000);
      host.querySelectorAll(".opt").forEach((x, i) => { x.disabled = true; if (opts[i].ok) x.classList.add("ok"); });
      if (!ok) b.classList.add("no");
      const right = opts.find(x => x.ok);
      host.querySelector("#fb").innerHTML = `<div class="fb">${ok ? `<b class="t-ok">Doğru.</b> ` : `<b class="t-no">Düşünce burada kaymış olabilir:</b> `}${esc(o.why)}${ok ? "" : `<br><br><b>Doğru yol:</b> ${esc(right.t)} — ${esc(right.why)}`}
${q.explain ? `<br><br><span class="muted">${esc(q.explain)}</span>` : ""}${S.exam && !inLesson ? `<div class="time">Süre: ${secs} sn</div>` : ""}</div>`;
      done(ok);
    });
  }
  function tapQuestion(host, q, done) {
    host.innerHTML = `<span class="eyebrow">Kilit cümle avı</span><div class="qtext" style="font:600 clamp(21px,3vw,28px)/1.45 var(--f-display)">${esc(q.q)}</div>
<div class="sentwrap">${q.sents.map((s, i) => `<button class="sent" type="button" data-i="${i}"><span class="n">${i + 1}</span>${esc(s.t)}</button>`).join("")}</div><div id="fb"></div>`;
    let answered = false;
    host.querySelector(".sentwrap").addEventListener("click", e => {
      const b = e.target.closest(".sent"); if (!b || answered) return; answered = true;
      const s = q.sents[+b.dataset.i], ok = !!s.ok;
      host.querySelectorAll(".sent").forEach((x, i) => { x.disabled = true; if (q.sents[i].ok) x.classList.add("ok"); });
      if (!ok) b.classList.add("no");
      host.querySelector("#fb").innerHTML = `<div class="fb">${ok ? '<b class="t-ok">Evet, kilit cümle bu.</b> ' : '<b class="t-no">Bu cümle kilit cümle değil:</b> '}${esc(s.why)}${ok ? "" : `<br><br><b>Kilit cümle:</b> ${esc(q.sents.find(x => x.ok).why)}`}<br><br><span class="muted">${esc(q.explain)}</span></div>`;
      done(ok);
    });
  }

  /* ---------- günlük sorular (tam ekran) ---------- */
  let fs = null;
  function closeFS() { if (fs) { fs.remove(); fs = null; document.body.style.overflow = ""; } }
  function pickDaily(onlyReview) {
    let pool = K.daily;
    if (onlyReview) pool = pool.filter(q => S.review.includes(q.id));
    const weighted = shuffle(pool).sort((a, b) => (S.review.includes(b.id) ? 1 : 0) - (S.review.includes(a.id) ? 1 : 0));
    return weighted.slice(0, Math.min(S.goal, weighted.length));
  }
  function startDaily() {
    const onlyReview = location.hash.indexOf("tekrar") > -1;
    const set = pickDaily(onlyReview);
    renderHome();
    if (!set.length) { $app.insertAdjacentHTML("afterbegin", `<p class="callout">Tekrar kutusu boş. Harika.</p>`); return; }
    document.body.style.overflow = "hidden";
    fs = el("div", { class: "fs", role: "dialog", "aria-modal": "true", "aria-label": "Günlük sorular" }); document.body.appendChild(fs);
    let i = 0, ok = 0;
    const step = () => {
      if (i >= set.length) {
        const r = dayRec();
        fs.innerHTML = `<div class="inner"><h1>Bugünkü tur bitti ✦</h1><p class="lede">${set.length} sorudan ${ok} tanesini ilk denemede doğru yaptın. Yanlışlar cezasız: tekrar kutusunda ikinci şansı bekliyor.</p>
<p>Bugün toplam ${r.n}/${S.goal} soru.</p><p><a class="btn" href="#/">Ana sayfaya dön</a></p></div>`; return;
      }
      const q = set[i];
      fs.innerHTML = `<div class="inner"><button class="btn ghost close tts" type="button" id="cl">Kapat ✕</button>
<div class="steps"><div class="meta"><span>${esc(K.subjects[q.subject].name)}</span><span>${i + 1}/${set.length}</span></div><div class="bar"><i style="width:${Math.round(i / set.length * 100)}%"></i></div></div><div id="qh"></div><div class="row" id="qn" style="margin-top:12px"></div></div>`;
      fs.querySelector("#cl").onclick = () => { location.hash = "#/"; };
      question(fs.querySelector("#qh"), q, good => {
        const r = dayRec(); r.n++; if (good) { r.ok++; ok++; S.review = S.review.filter(x => x !== q.id); } else if (!S.review.includes(q.id)) S.review.push(q.id);
        save();
        const qn = fs.querySelector("#qn"); qn.innerHTML = `<button class="btn" id="go" type="button">${i + 1 < set.length ? "Sonraki →" : "Bitir ✓"}</button>`;
        qn.querySelector("#go").onclick = () => { i++; step(); fs.scrollTop = 0; };
      }, false);
    };
    step();
  }

  /* ---------- yol haritası ve ayarlar ---------- */
  function renderPlan() {
    const rows = Object.entries(K.subjects).sort((a, b) => b[1].w - a[1].w).map(([k, s]) =>
      `<tr><td>${s.icon} ${esc(s.name)}</td><td class="num">%${String(s.w).replace(".", ",")}</td><td class="muted small">${esc(s.note)}</td></tr>`).join("");
    const week = [1, 2, 3, 4, 5, 6, 0].map(d => `<tr><td>${K.dayNames[d]}</td><td>${K.week[d].map(k => esc(K.subjects[k].name)).join(" · ")}</td></tr>`).join("");
    $app.innerHTML = `<h1>Yol haritası</h1><p class="lede">Dokuz dersin tamamı var; ağırlık, sınavda en çok net getiren derslerde (matematik, Türkçe, edebiyat, sosyal). Rakamlar tahmindir; ÖSYM kılavuzundan kontrol edilmelidir.</p>
<div class="card" style="margin:18px 0"><table class="tbl"><thead><tr><th>Ders</th><th>Çalışma payı</th><th>Dayanak</th></tr></thead><tbody>${rows}</tbody></table></div>
<h2>Haftalık ritim</h2><div class="card"><table class="tbl"><tbody>${week}</tbody></table></div>
<p class="muted small" style="margin-top:14px">Her gün: bir ana keşif (≈25 dk) + günlük sorular. Yorgun günde yalnızca sorular da yeterli.</p>`;
  }
  function renderSettings() {
    $app.innerHTML = `<h1>Ayarlar</h1><div class="card"><h3>Günlük soru hedefi</h3><p class="muted small">Küçük hedef, düzenli devam eder.</p>
<div class="row">${[5, 10, 15, 20].map(n => `<button class="btn ${S.goal === n ? "" : "ghost"}" data-g="${n}" type="button">${n}</button>`).join("")}</div></div>
<div class="card" style="margin-top:16px"><h3>Sınav modu</h3><p class="muted small">Açıkken her sorunun sonunda harcadığın süre görünür. Geri sayım ve baskı yok; yalnızca bilgi.</p>
<button class="btn ${S.exam ? "" : "ghost"}" id="ex" type="button">${S.exam ? "Açık" : "Kapalı"}</button></div>
<div class="card" style="margin-top:16px"><h3>Verilerim</h3><p class="muted small">İlerleme ve notların yalnızca bu tarayıcıda durur. Silmek istersen:</p><button class="btn ghost" id="wipe" type="button">Tüm verileri sil</button></div>`;
    $app.querySelectorAll("[data-g]").forEach(b => b.onclick = () => { S.goal = +b.dataset.g; save(); renderSettings(); });
    $app.querySelector("#ex").onclick = () => { S.exam = !S.exam; save(); renderSettings(); };
    $app.querySelector("#wipe").onclick = () => { if (confirm("Tüm ilerleme ve notlar silinsin mi?")) { S = blank(); save(); renderSettings(); } };
  }

  route();
})();
