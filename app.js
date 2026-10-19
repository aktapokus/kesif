/* Aktapokus Keşif — sunucusuz, hesapsız. Tüm ilerleme yalnızca bu tarayıcıda (localStorage). */
(function () {
  "use strict";
  const K = window.KESIF, $app = document.getElementById("app");
  const KEY = "kesif.v1";

  /* ---------- kayıt ---------- */
  const blank = () => ({ done: {}, days: {}, review: [], notes: {}, goal: 10, exam: false, sel: null, goalMin: 0, subjGoal: {}, study: {}, run: { on: false, subj: "gen" }, goalDone: {} });
  let S;
  try { S = Object.assign(blank(), JSON.parse(localStorage.getItem(KEY) || "{}")); } catch (e) { S = blank(); }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} if (K.sync) K.sync.push(S); };
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
    if (h[0] === "plan") page = "plan"; else if (h[0] === "ayarlar") page = "ayarlar"; else if (h[0] === "dersler") page = "dersler";
    const nav = document.querySelector(`[data-nav="${page}"]`); if (nav) nav.setAttribute("aria-current", "page");
    closeFS();
    if (h[0] === "ders" && K.lessons[h[1]]) return renderLesson(K.lessons[h[1]], +h[2] || 0);
    if (h[0] === "gunluk") return startDaily();
    if (h[0] === "plan") return renderPlan();
    if (h[0] === "dersler") return renderSubjects();
    if (h[0] === "ayarlar") return renderSettings();
    renderHome();
    $app.focus({ preventScroll: true });
  }
  window.addEventListener("hashchange", route);

  /* ---------- ana sayfa ---------- */
  function todaysLessons() {
    const dow = new Date().getDay(), want = K.week[dow] || [];
    const sel = selSet(), have = Object.values(K.lessons).filter(l => sel.has(l.subject));
    let list = have.filter(l => want.includes(l.subject));
    if (!list.length) list = have.filter(l => !S.done[l.id]);
    if (!list.length) list = have;
    if (!list.length) list = Object.values(K.lessons);
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
    html += `</div><p style="margin-top:28px"><a class="btn ghost" href="#/dersler">Tüm dersler ve hedeflerim →</a></p><div>`;
    $app.innerHTML = html + "</div>";
  }

  /* ---------- ders seçimi ve çalışma süresi ---------- */
  const selSet = () => new Set(S.sel && S.sel.length ? S.sel : Object.keys(K.subjects));
  const studyDay = () => (S.study[today()] = S.study[today()] || {});
  const totalSecs = () => Object.values(studyDay()).reduce((a, b) => a + b, 0);
  const fmtT = sec => { sec = Math.floor(sec); const h = Math.floor(sec / 3600), m = Math.floor(sec % 3600 / 60), s2 = sec % 60, p = n => String(n).padStart(2, "0"); return (h ? h + ":" : "") + p(m) + ":" + p(s2); };
  const subjName = k => k === "gen" ? "Genel" : (K.subjects[k] ? K.subjects[k].name : k);
  function beep() { try { const c = new (window.AudioContext || window.webkitAudioContext)(), o = c.createOscillator(), g = c.createGain(); o.connect(g); g.connect(c.destination); g.gain.value = 0.08; o.frequency.value = 660; o.start(); o.stop(c.currentTime + 0.35); } catch (e) {} }
  function announce(msg) { const d = document.getElementById("tbdone"); if (!d) return; d.hidden = false; d.querySelector("span").textContent = msg; beep(); document.title = "✓ Süre bitti · Aktapokus Keşif"; }
  function addStudy(subj, secs) { const d = studyDay(); d[subj] = (d[subj] || 0) + secs; checkGoals(); }
  function checkGoals() {
    const t = today(), tot = totalSecs();
    if (S.goalMin && tot >= S.goalMin * 60) { if (!S.goalDone[t]) { S.goalDone[t] = true; S.run.on = false; announce("Bitti! Bugünkü " + S.goalMin + " dakikalık çalışma hedefin tamamlandı. 🎉"); } }
    else if (S.goalDone[t]) delete S.goalDone[t];
    for (const k in S.subjGoal) { const g = S.subjGoal[k], key = t + k; if (g && (studyDay()[k] || 0) >= g * 60) { if (!S.goalDone[key]) { S.goalDone[key] = true; announce(subjName(k) + " hedefin (" + g + " dk) tamamlandı. 🎉"); } } else if (S.goalDone[key]) delete S.goalDone[key]; }
  }
  let lastTick = Date.now();
  setInterval(() => {
    const now = Date.now(), dt = Math.min(120, (now - lastTick) / 1000); lastTick = now;
    if (S.run.on) { addStudy(S.run.subj, dt); if (Math.floor(totalSecs()) % 15 === 0) save(); }
    updateBar();
  }, 1000);
  window.addEventListener("pagehide", save);
  function buildBar() {
    const bar = document.getElementById("tbar"); if (!bar) return;
    bar.innerHTML = `<div class="tb-main"><span class="tb-time" id="tbt">00:00</span><span class="muted small" id="tbg"></span><div class="tb-prog"><i id="tbp"></i></div></div>
<div class="tb-act"><select id="tbs" aria-label="Çalıştığım ders"></select><button class="btn" id="tbr" type="button">Başlat</button><button class="btn ghost" id="tbo" type="button" aria-expanded="false">Hedef · süre ekle</button></div>
<div id="tbpanel" hidden><div><span class="muted small">Bugünkü çalışma hedefim:</span><div class="chips">${[15, 25, 45, 60, 90].map(n => `<button class="btn ghost" data-gm="${n}" type="button">${n} dk</button>`).join("")}<button class="btn ghost" data-gm="0" type="button">Hedefsiz</button></div></div>
<div><label class="muted small" for="tbc">Kendi sürem (dk)</label> <input id="tbc" type="number" min="1" max="600" style="width:90px"> <button class="btn ghost" id="tbcs" type="button">Hedefi ayarla</button></div>
<div><label class="muted small" for="tba">Elle süre ekle (dk)</label> <input id="tba" type="number" min="1" max="600" style="width:90px"> <button class="btn ghost" id="tbas" type="button">Süreyi ekle</button> <span class="muted small" id="tbam"></span></div></div>
<div id="tbdone" hidden><span></span><button class="btn ghost" id="tbx" type="button">Tamam</button></div>`;
    const $ = id => bar.querySelector(id);
    $("#tbr").onclick = () => { S.run.on = !S.run.on; lastTick = Date.now(); save(); updateBar(true); };
    $("#tbs").onchange = e => { S.run.subj = e.target.value; save(); updateBar(true); };
    $("#tbo").onclick = () => { const p = $("#tbpanel"); p.hidden = !p.hidden; $("#tbo").setAttribute("aria-expanded", String(!p.hidden)); };
    bar.querySelectorAll("[data-gm]").forEach(b => b.onclick = () => { S.goalMin = +b.dataset.gm; delete S.goalDone[today()]; checkGoals(); save(); updateBar(true); });
    $("#tbcs").onclick = () => { const n = Math.round(+$("#tbc").value); if (n >= 1 && n <= 600) { S.goalMin = n; delete S.goalDone[today()]; checkGoals(); save(); updateBar(true); $("#tbc").value = ""; } };
    $("#tbas").onclick = () => { const n = Math.round(+$("#tba").value); if (n >= 1 && n <= 600) { addStudy(S.run.subj, n * 60); save(); updateBar(true); $("#tba").value = ""; $("#tbam").textContent = n + " dk " + subjName(S.run.subj) + " için eklendi."; } };
    $("#tbx").onclick = () => { $("#tbdone").hidden = true; document.title = "Aktapokus Keşif"; };
    updateBar(true);
  }
  function updateBar(full) {
    const bar = document.getElementById("tbar"); if (!bar) return;
    const tot = totalSecs(), g = S.goalMin * 60;
    bar.querySelector("#tbt").textContent = fmtT(tot);
    bar.querySelector("#tbg").textContent = g ? "/ " + S.goalMin + " dk hedef" : "hedef yok";
    bar.querySelector("#tbp").style.width = g ? Math.min(100, tot / g * 100) + "%" : "0";
    if (full === true) {
      const opts = ["gen"].concat([...selSet()]); if (!opts.includes(S.run.subj)) opts.push(S.run.subj);
      bar.querySelector("#tbs").innerHTML = opts.map(k => `<option value="${k}" ${k === S.run.subj ? "selected" : ""}>${esc(subjName(k))}</option>`).join("");
      bar.querySelector("#tbr").textContent = S.run.on ? "Duraklat" : "Başlat";
      bar.querySelector("#tbr").classList.toggle("ghost", S.run.on);
      bar.querySelectorAll("[data-gm]").forEach(b => { b.style.borderColor = +b.dataset.gm === S.goalMin ? "var(--accent)" : ""; });
    }
  }

  /* ---------- dersler sayfası: ders seç, hedef koy ---------- */
  function renderSubjects() {
    const sel = selSet(), td = studyDay();
    let html = `<h1>Dersler</h1><p class="lede">Çalışmak istediğin dersleri seç; her derse günlük bir süre hedefi koyabilirsin. Üstteki sayaç seçtiğin derse yazılır. Seçmediğin dersler "Bugün" önerisinde çıkmaz ama burada durur.</p>`;
    for (const k in K.subjects) {
      const sb = K.subjects[k], on = sel.has(k), g = S.subjGoal[k] || 0, mins = Math.floor((td[k] || 0) / 60);
      const ls = Object.values(K.lessons).filter(l => l.subject === k);
      html += `<section class="subj ${on ? "on" : ""}"><label style="display:flex;gap:10px;align-items:center;min-height:44px;font:700 20px var(--f-display)"><input type="checkbox" data-sel="${k}" ${on ? "checked" : ""} style="width:24px;height:24px"> ${esc(sb.icon)} ${esc(sb.name)}</label>
<p class="muted small" style="margin:0">${esc(sb.note)}</p>
<div class="setrow"><label class="muted small" for="g_${k}">Günlük hedefim</label><select id="g_${k}" data-sg="${k}">${[0, 10, 15, 20, 30, 45, 60, 90, 120].map(n => `<option value="${n}" ${n === g ? "selected" : ""}>${n ? n + " dk" : "hedef yok"}</option>`).join("")}</select>
<span class="small">Bugün: <b>${mins} dk</b></span>${g ? `<div class="minibar" aria-hidden="true"><i style="width:${Math.min(100, mins / g * 100)}%"></i></div>${mins >= g ? "<b class='t-ok'>✓</b>" : ""}` : ""}</div>
<div class="lst">${ls.length ? ls.map(l => `<a href="#/ders/${l.id}/0">${S.done[l.id] ? "✓ " : "› "}${esc(l.title)} <span class="muted small">≈ ${l.minutes} dk</span></a>`).join("") : `<span class="muted small">Bu ders için keşif hazırlanıyor.</span>`}</div></section>`;
    }
    $app.innerHTML = html;
    $app.querySelectorAll("[data-sel]").forEach(c => c.onchange = () => { const cur = selSet(); c.checked ? cur.add(c.dataset.sel) : cur.delete(c.dataset.sel); S.sel = [...cur]; save(); updateBar(true); renderSubjects(); });
    $app.querySelectorAll("[data-sg]").forEach(c => c.onchange = () => { S.subjGoal[c.dataset.sg] = +c.value; checkGoals(); save(); renderSubjects(); });
  }

  /* ---------- hesap (isteğe bağlı eşitleme) ---------- */
  function accountCard() {
    const u = K.sync && K.sync.user();
    if (!K.sync) return "";
    return `<div class="card" id="acc" style="margin-top:16px"><h3>Hesap (isteğe bağlı)</h3>` + (u
      ? `<p class="muted small">Giriş yapıldı: <b>${esc(u.email || "")}</b>. İlerlemen, günlük skorların, tekrar kutun ve "peki ya neden" notların bu hesaba eşitlenir (${esc(K.sync.status() || "bekleniyor")}). Başkası göremez; herkese açık sıralama yoktur.</p>
<div class="row"><button class="btn ghost" id="so" type="button">Çıkış yap</button><button class="btn ghost" id="sd" type="button">Sunucudaki verilerimi sil</button></div>`
      : `<p class="muted small">Giriş yapmazsan her şey yalnızca bu tarayıcıda kalır. Giriş yaparsan ilerlemeni başka cihazda da sürdürebilirsin. Şifre yok: e-postana bir bağlantı gelir. Saklanan: e-posta adresin, ilerleme, günlük skor, tekrar kutusu ve yazdığın notlar.</p>
<label class="muted small" for="em">E-posta</label><div class="row"><input id="em" type="email" autocomplete="email" placeholder="ornek@mail.com" style="flex:1 1 220px"><button class="btn" id="sl2" type="button">Giriş bağlantısı gönder</button></div><p class="small" id="am" role="status"></p>`) + `</div>`;
  }
  function bindAccount() {
    const so = $app.querySelector("#so"), sd = $app.querySelector("#sd"), sl2 = $app.querySelector("#sl2");
    if (so) so.onclick = () => { K.sync.signOut(); renderSettings(); };
    if (sd) sd.onclick = async () => { if (confirm("Sunucudaki ilerleme ve notların silinsin mi? Bu cihazdaki veriler kalır.")) { const ok = await K.sync.deleteData(); alert(ok ? "Sunucudaki verilerin silindi." : "Silinemedi; bağlantını kontrol et."); } };
    if (sl2) sl2.onclick = async () => {
      const em = $app.querySelector("#em").value.trim(), m = $app.querySelector("#am");
      if (!/^\S+@\S+\.\S+$/.test(em)) { m.textContent = "Geçerli bir e-posta yaz."; return; }
      sl2.disabled = true; m.textContent = "Gönderiliyor…";
      try { await K.sync.sendLink(em); m.textContent = "Bağlantı gönderildi. E-postanı aç (spam klasörüne de bak) ve bağlantıya bu cihazda tıkla."; }
      catch (e) { m.textContent = "Gönderilemedi: " + e.message; }
      sl2.disabled = false;
    };
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
    if (S.run.on && S.run.subj !== L.subject) { S.run.subj = L.subject; updateBar(true); }
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
      navBtns(false); question(host, st, ok => { dayRecordLesson(st, ok); navBtns(true); }, true, { L, i });
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
  /* Konu anlatımı: soruya bağlı ders adımı. Günlük sorularda K.help'ten, ders içi sorularda en yakın önceki anlatım/keşif adımından. */
  function topicOf(q, hlp, extra) {
    if (hlp && hlp.topic && K.lessons[hlp.topic.lesson]) return { L: K.lessons[hlp.topic.lesson], i: hlp.topic.step };
    if (extra && extra.L) for (let j = extra.i - 1; j >= 0; j--) if (["text", "explorer", "circle", "expo"].includes(extra.L.steps[j].type)) return { L: extra.L, i: j };
    return null;
  }
  function question(host, q, done, inLesson, extra) {
    const opts = shuffle(q.opts), t0 = Date.now();
    host.innerHTML = `${q.predict ? '<span class="eyebrow">Tahmin et</span>' : ""}${q.passage ? `<div class="passage">${esc(q.passage)}</div>` : ""}<div class="qtext" style="font:600 clamp(21px,3vw,28px)/1.45 var(--f-display)">${esc(q.q)}</div>
<div class="opts">${opts.map((o, i) => `<button class="opt" type="button" data-i="${i}"><span class="k">${LET[i]}</span>${esc(o.t)}</button>`).join("")}</div>
<div class="helpbar" id="hb"><span class="muted small">Takıldın mı?</span><button class="btn ghost" data-h="hint" type="button">💡 İpucu</button><button class="btn ghost" data-h="topic" type="button">📖 Konu anlatımı</button><button class="btn ghost" data-h="solve" type="button">🧩 Çözümü göster</button></div><div id="hp"></div><div id="fb"></div>`;
    let answered = false;
    const hlp = (K.help && K.help[q.id]) || {}, tp = topicOf(q, hlp, extra);
    const hintTxt = q.hint || hlp.hint || (inLesson ? "Az önce yaptığın keşfi hatırla: grafikte ya da tabloda ne gördün? \"Konu anlatımı\" seni o adıma götürür." : "");
    const hb = host.querySelector("#hb"), hp = host.querySelector("#hp");
    if (!hintTxt) hb.querySelector('[data-h="hint"]').remove();
    if (!tp) hb.querySelector('[data-h="topic"]').remove();
    hb.addEventListener("click", e => {
      const b = e.target.closest("[data-h]"); if (!b || answered) return;
      if (b.dataset.h === "hint") { hp.innerHTML = `<div class="fb"><b>💡 İpucu:</b> ${esc(hintTxt)}</div>`; }
      else if (b.dataset.h === "topic") {
        hp.innerHTML = `<div class="fb topic"><b>📖 Konu anlatımı</b> <span class="muted small">(${esc(tp.L.title)})</span><div id="tpc" style="margin-top:10px"></div><p class="small" style="margin-top:12px"><a href="#/ders/${tp.L.id}/${tp.i}">Dersin bu adımını tam ekran aç →</a></p></div>`;
        const c = hp.querySelector("#tpc"), st = tp.L.steps[tp.i];
        if (st.type === "text") c.innerHTML = `<h3>${st.title}</h3><div class="body">${st.html}</div>`;
        else if (st.type === "explorer") explorer(st, c); else if (st.type === "circle") circleLab(st, c); else if (st.type === "expo") expoLab(st, c);
        hp.scrollIntoView({ block: "nearest", behavior: "smooth" });
      } else if (b.dataset.h === "solve") {
        answered = true; const right = opts.find(x => x.ok);
        host.querySelectorAll(".opt").forEach((x, i) => { x.disabled = true; if (opts[i].ok) x.classList.add("ok"); });
        hb.style.display = "none"; hp.innerHTML = "";
        host.querySelector("#fb").innerHTML = `<div class="fb"><b>🧩 Adım adım çözüm</b><br>${q.solution ? esc(q.solution) : `Doğru cevap: <b>${esc(right.t)}</b>.<br>${esc(right.why)}`}${q.explain ? `<br><br><span class="muted">${esc(q.explain)}</span>` : ""}<br><br><span class="muted small">Çözümü gördüğün için bu soru tekrar kutusuna eklendi; sonra kendin çözmeyi dene.</span></div>`;
        done(false);
      }
    });
    host.querySelector(".opts").addEventListener("click", e => {
      const b = e.target.closest(".opt"); if (!b || answered) return; answered = true; hb.style.display = "none"; hp.innerHTML = "";
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
${accountCard()}<div class="card" style="margin-top:16px"><h3>Verilerim</h3><p class="muted small">İlerleme ve notların bu tarayıcıda durur; giriş yaptıysan ayrıca hesabına eşitlenir. Bu düğme yalnızca bu cihazdaki verileri siler (sunucudakini yukarıdaki hesap kartından silersin):</p><button class="btn ghost" id="wipe" type="button">Tüm verileri sil</button></div>`;
    bindAccount();
    $app.querySelectorAll("[data-g]").forEach(b => b.onclick = () => { S.goal = +b.dataset.g; save(); renderSettings(); });
    $app.querySelector("#ex").onclick = () => { S.exam = !S.exam; save(); renderSettings(); };
    $app.querySelector("#wipe").onclick = () => { if (confirm("Tüm ilerleme ve notlar silinsin mi?")) { S = blank(); save(); renderSettings(); } };
  }

  buildBar();
  if (K.sync && K.sync.user()) K.sync.pull().then(r => {
    if (r) { S = Object.assign(blank(), K.sync.merge(S, r)); try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} K.sync.push(S); buildBar(); }
    route();
  });
  route();
})();
