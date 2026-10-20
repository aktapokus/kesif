/* Aktapokus Anlatım — sunucusuz, hesapsız. Tüm ilerleme yalnızca bu tarayıcıda (localStorage). */
(function () {
  "use strict";
  const K = window.KESIF, $app = document.getElementById("app");
  const KEY = "kesif.v1";

  /* ---------- kayıt ---------- */
  const blank = () => ({ done: {}, days: {}, review: [], notes: {}, goal: 10, exam: false, sel: null, goalMin: 0, subjGoal: {}, study: {}, run: { on: false, subj: "gen" }, goalDone: {}, profile: { name: "" }, qs: {}, exams: [], pickSubj: "all", pal: "mavi", errs: {} });
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
    if (h[0] === "plan") page = "plan"; else if (h[0] === "takvim") page = "takvim"; else if (h[0] === "ayarlar") page = "ayarlar"; else if (h[0] === "dersler") page = "dersler"; else if (h[0] === "profil") page = "profil"; else if (h[0] === "mufredat") page = "mufredat"; else if (h[0] === "banka" || h[0] === "cikmis") page = "banka"; else if (h[0] === "deneme") page = "deneme";
    const nav = document.querySelector(`[data-nav="${page}"]`); if (nav) nav.setAttribute("aria-current", "page");
    { let sj = h[0] === "ders" && K.lessons[h[1]] ? K.lessons[h[1]].subject : h[0] === "dersler" && /^k:/.test(h[1] || "") ? h[1].slice(2).split(":")[0] : S.pickSubj; const de = document.documentElement; if (sj && K.subjects[sj]) de.dataset.subj = sj; else delete de.dataset.subj; }
    closeFS();
    if (h[0] === "ders" && K.lessons[h[1]]) return renderLesson(K.lessons[h[1]], +h[2] || 0);
    if (h[0] === "gunluk") return startDaily();
    if (h[0] === "takvim") return renderCalendar();
    if (h[0] === "plan") return renderPlan();
    if (h[0] === "dersler") return renderDersler(h[1] || (S.pickSubj && K.subjects[S.pickSubj] ? "k:" + S.pickSubj : "tum"));
    if (h[0] === "mufredat") return renderCurriculum();
    if (h[0] === "profil") return renderProfile();
    if (h[0] === "banka") return renderBank(h[1] ? decodeURIComponent(h[1]) : "");
    if (h[0] === "cikmis") return renderCikmis();
    if (h[0] === "deneme") return renderExamSetup(h[1] || "");
    if (h[0] === "ayarlar") return renderSettings();
    renderHome();
    $app.focus({ preventScroll: true });
  }
  window.addEventListener("hashchange", route);

  /* ---------- ana sayfa ---------- */
  function todaysLessons() {
    if (S.pickSubj && S.pickSubj !== "all" && K.subjects[S.pickSubj]) { const mine = LES().filter(l => l.subject === S.pickSubj); return { list: mine, want: [S.pickSubj] }; }
    const dow = new Date().getDay(), want = K.week[dow] || [];
    const sel = selSet(), have = LES().filter(l => sel.has(l.subject));
    let list = have.filter(l => want.includes(l.subject));
    if (!list.length) list = have.filter(l => !S.done[l.id]);
    if (!list.length) list = have;
    if (!list.length) list = LES();
    return { list, want };
  }
  /* ---------- çalışma takvimi (GitHub tarzı zincir) ---------- */
  const fmtD = dt => dt.getFullYear() + "-" + String(dt.getMonth() + 1).padStart(2, "0") + "-" + String(dt.getDate()).padStart(2, "0");
  function dayInfo(k) {
    const st = S.study[k] || {}, secs = Object.values(st).reduce((a, b) => a + b, 0), n = (S.days[k] && S.days[k].n) || 0, ok = (S.days[k] && S.days[k].ok) || 0;
    const min = Math.round(secs / 60), eff = Math.max(min, n);
    return { st, min, n, ok, eff, lvl: eff >= 45 ? 4 : eff >= 25 ? 3 : eff >= 10 ? 2 : eff >= 1 ? 1 : 0 };
  }
  function chainStats() {
    const act = new Set(); const keys = new Set(Object.keys(S.study).concat(Object.keys(S.days))); keys.forEach(k => { if (dayInfo(k).eff >= 1) act.add(k); });
    let best = 0, run = 0; const arr = [...act].sort();
    arr.forEach((k, i) => { const p = i ? new Date(arr[i - 1] + "T12:00:00") : null; if (p) p.setDate(p.getDate() + 1); run = p && fmtD(p) === k ? run + 1 : 1; if (run > best) best = run; });
    return { days: act.size, best, cur: streak() };
  }
  function calendarHtml(weeks) {
    const end = new Date(); end.setHours(12, 0, 0, 0);
    const start = new Date(end); start.setDate(start.getDate() - ((end.getDay() + 6) % 7) - (weeks - 1) * 7);
    const goalMin = S.goalMin || 15, mon = ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"];
    let cells = "", labels = "", last = -1;
    for (let w = 0; w < weeks; w++) {
      const d0 = new Date(start); d0.setDate(d0.getDate() + w * 7);
      labels += `<span class="cal-m">${d0.getMonth() !== last ? mon[d0.getMonth()] : ""}</span>`; last = d0.getMonth();
      for (let r = 0; r < 7; r++) {
        const d = new Date(d0); d.setDate(d.getDate() + r); const k = fmtD(d);
        if (d > end) { cells += `<i class="cal-c fut"></i>`; continue; }
        const inf = dayInfo(k), hit = inf.min >= goalMin;
        cells += `<button type="button" class="cal-c l${inf.lvl}${k === today() ? " now" : ""}" data-d="${k}" aria-label="${k}: ${inf.min} dk, ${inf.n} soru">${hit ? "✓" : ""}</button>`;
      }
    }
    return `<div class="cal-wrap"><div class="cal-days" aria-hidden="true"><span>Pzt</span><span></span><span>Çar</span><span></span><span>Cum</span><span></span><span></span></div><div><div class="cal-ms" style="grid-template-columns:repeat(${weeks},1fr)">${labels}</div><div class="cal" style="grid-template-columns:repeat(${weeks},1fr)">${cells}</div></div></div>
<p class="cal-legend small muted">Az <i class="cal-c l0"></i><i class="cal-c l1"></i><i class="cal-c l2"></i><i class="cal-c l3"></i><i class="cal-c l4"></i> Çok · ✓ = günlük hedef (${goalMin} dk) tamam</p><p class="small" id="cal-info" role="status">Bir güne dokun; o gün ne kadar çalıştığını göster.</p>`;
  }
  function bindCalendar(root) {
    root.querySelectorAll(".cal-c[data-d]").forEach(b => b.onclick = () => {
      const k = b.dataset.d, inf = dayInfo(k), sub = Object.keys(inf.st).filter(x => inf.st[x] >= 60).map(x => esc(subjName(x)) + " " + Math.round(inf.st[x] / 60) + " dk").join(" · ");
      const dt = new Date(k + "T12:00:00");
      root.querySelector("#cal-info").innerHTML = `<b>${dt.getDate()} ${["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"][dt.getMonth()]}</b>: ${inf.min || inf.n ? inf.min + " dk çalışma, " + inf.n + " soru" + (inf.n ? " (" + inf.ok + " doğru)" : "") + (sub ? " · " + sub : "") : "çalışma yok"}`;
    });
  }
  function renderCalendar() {
    const c = chainStats();
    $app.innerHTML = `<span class="eyebrow">Takvim</span><h1>Çalışma zincirin</h1><p class="lede">Her çalıştığın gün bir kare boyanır. Amaç mükemmel olmak değil; zinciri kopmadan sürdürmek. Bir gün kaçırırsan ertesi gün yeniden başlarsın.</p>
<div class="grid" style="margin:14px 0;grid-template-columns:repeat(3,1fr)"><article class="card"><h3 class="small">Şimdiki zincir</h3><p class="stat" style="font-size:24px">${c.cur} gün</p></article><article class="card"><h3 class="small">En uzun zincir</h3><p class="stat" style="font-size:24px">${c.best} gün</p></article><article class="card"><h3 class="small">Çalıştığın gün</h3><p class="stat" style="font-size:24px">${c.days}</p></article></div>
<div class="card">${calendarHtml(Math.min(53, Math.max(12, Math.floor((document.documentElement.clientWidth - 110) / 17))))}</div>`;
    bindCalendar($app);
  }

  function renderHome() {
    const r = dayRec(), goal = S.goal, pct = Math.min(100, Math.round(r.n / goal * 100));
    const { list, want } = todaysLessons();
    const wantNames = want.map(s => K.subjects[s].name).join(" · ");
    let pending = list.find(l => !S.done[l.id]) || list[0];
    const nxl = s11NextLesson(); if (nxl && list.some(l => l.id === nxl)) pending = K.lessons[nxl];
    const dayName = K.dayNames[new Date().getDay()];
    let html = `<span class="eyebrow">${dayName}</span><h1>Bugün neyi keşfedeceksin?</h1>
<p class="lede">Ezber yok. ${S.pickSubj && S.pickSubj !== "all" ? "Seçtiğin ders" : "Bugünün planı"}: <b>${esc(wantNames || "serbest")}</b>. Önce bir fikri anla, sonra soruyla dene.</p>
<div class="grid" style="margin-top:22px">`;
    if (pending) html += `<article class="card pick"><span class="tag">${esc(K.subjects[pending.subject].name)}</span><span class="tag">≈ ${pending.minutes} dk</span>
<h3>${esc(pending.title)}</h3><p class="muted small">${esc(pending.hook)}</p>
<a class="btn" href="#/ders/${pending.id}/${S.done[pending.id] ? 0 : (S.notes["p_" + pending.id] || 0)}">${S.done[pending.id] ? "Konuyu tekrar et" : (S.notes["p_" + pending.id] ? "Kaldığın yerden devam" : "Konuya başla")}</a></article>`;
    html += `<article class="card"><div class="row"><div class="ring" style="--p:${pct}"><b>${r.n}/${goal}</b></div>
<div><h3>Günlük sorular</h3><p class="muted small" style="margin:0">Hedef: ${goal} soru${r.n ? " · doğru: " + r.ok : ""}</p></div></div>
<p style="margin-top:14px"><a class="btn ${r.n >= goal ? "ghost" : ""}" href="#/gunluk">${r.n >= goal ? "Bir tur daha" : "Soruları çöz"}</a></p></article>`;
    if (K.s11) { const all = s11Topics(), dn = all.filter(topicDone).length, nx = s11Next(); html += `<article class="card"><h3>11. sınıf yolculuğu</h3><p class="muted small" style="margin:0 0 8px">${dn}/${all.length} konu tamam${nx ? ` · sıradaki: <b>${esc(nx.id)} ${esc(nx.title)}</b>` : ""}</p><a class="btn ghost" href="#/dersler/s11">Sırayı gör</a></article>`; }
    { const c = chainStats(); html += `<article class="card" style="grid-column:1/-1"><div class="row" style="justify-content:space-between;align-items:baseline"><h3 style="margin:0">Çalışma zincirin</h3><span class="small muted">Zincir: <b>${c.cur} gün</b> · En uzun: ${c.best}</span></div>${calendarHtml(Math.min(26, Math.max(12, Math.floor((document.documentElement.clientWidth - 60) / 15))))}<a class="small" href="#/takvim">Tüm takvim →</a></article>`; }
    if (S.review.length) html += `<article class="card"><h3>Tekrar kutusu</h3><p class="muted small">Düşünceyi yeniden kurmak istediğin ${S.review.length} soru var. Cezası yok; sadece ikinci şans.</p><a class="btn ghost" href="#/gunluk/tekrar">Tekrar et</a></article>`;
    html += `</div><p style="margin-top:28px"><a class="btn ghost" href="#/dersler">Tüm dersler ve hedeflerim →</a></p><div>`;
    if (!pending) html += `<article class="card pick"><h3>${esc(K.subjects[S.pickSubj] ? K.subjects[S.pickSubj].name : "Bu ders")}</h3><p class="muted small">Bu ders için henüz konu anlatımı yok; soru bankasından çalışabilirsin.</p><a class="btn" href="#/banka/ders:${esc(S.pickSubj)}">Sorulara git</a> <a class="btn ghost" href="#/dersler/k:${esc(S.pickSubj)}">Ders sayfası</a></article>`;
    $app.innerHTML = html + "</div>"; bindCalendar($app);
  }

  /* ---------- ders seçimi ve çalışma süresi ---------- */
  const selSet = () => new Set(S.sel && S.sel.length ? S.sel : Object.keys(K.subjects));
  const studyDay = () => (S.study[today()] = S.study[today()] || {});
  const totalSecs = () => Object.values(studyDay()).reduce((a, b) => a + b, 0);
  const fmtT = sec => { sec = Math.floor(sec); const h = Math.floor(sec / 3600), m = Math.floor(sec % 3600 / 60), s2 = sec % 60, p = n => String(n).padStart(2, "0"); return (h ? h + ":" : "") + p(m) + ":" + p(s2); };
  const subjName = k => k === "gen" ? "Genel" : (K.subjects[k] ? K.subjects[k].name : k);
  function beep() { try { const c = new (window.AudioContext || window.webkitAudioContext)(), o = c.createOscillator(), g = c.createGain(); o.connect(g); g.connect(c.destination); g.gain.value = 0.08; o.frequency.value = 660; o.start(); o.stop(c.currentTime + 0.35); } catch (e) {} }
  function announce(msg) { const d = document.getElementById("tbdone"); if (!d) return; d.hidden = false; d.querySelector("span").textContent = msg; beep(); document.title = "✓ Süre bitti · aktapokus-kesif"; }
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
  /* TEK ders seçici: üstteki liste kutusu. Ana sayfa önerisi, günlük sorular ve çalışma sayacı hep bunu izler. */
  function setSubject(k) { S.pickSubj = k && K.subjects[k] ? k : "all"; S.run.subj = S.pickSubj === "all" ? "gen" : S.pickSubj; save(); updateBar(true); }
  function buildBar() {
    const bar = document.getElementById("tbar"); if (!bar) return;
    bar.innerHTML = `<div class="tb-main"><span class="tb-time" id="tbt">00:00</span><span class="muted small" id="tbg"></span><div class="tb-prog"><i id="tbp"></i></div></div>
<div class="tb-act"><select id="tbs" aria-label="Ders seç"></select><button class="btn" id="tbr" type="button">Başlat</button><button class="btn ghost" id="tbo" type="button" aria-expanded="false">Hedef ⏱</button></div>
<div id="tbpanel" hidden><div><span class="muted small">Bugünkü çalışma hedefim:</span><div class="chips">${[15, 25, 45, 60, 90].map(n => `<button class="btn ghost" data-gm="${n}" type="button">${n} dk</button>`).join("")}<button class="btn ghost" data-gm="0" type="button">Hedefsiz</button></div></div>
<div><label class="muted small" for="tbc">Kendi sürem (dk)</label> <input id="tbc" type="number" min="1" max="600" style="width:90px"> <button class="btn ghost" id="tbcs" type="button">Hedefi ayarla</button></div>
<div><label class="muted small" for="tba">Elle süre ekle (dk)</label> <input id="tba" type="number" min="1" max="600" style="width:90px"> <button class="btn ghost" id="tbas" type="button">Süreyi ekle</button> <span class="muted small" id="tbam"></span></div></div>
<div id="tbdone" hidden><span></span><button class="btn ghost" id="tbx" type="button">Tamam</button></div>`;
    const $ = id => bar.querySelector(id);
    $("#tbr").onclick = () => { S.run.on = !S.run.on; lastTick = Date.now(); save(); updateBar(true); };
    $("#tbs").onchange = e => {
      setSubject(e.target.value);
      const to = S.pickSubj === "all" ? "#/" : "#/dersler/k:" + S.pickSubj;
      if (/^#\/(banka|deneme|mufredat|dersler\/okul)/.test(location.hash)) route(); /* bu sayfalar seçilen derse göre kendini süzer */
      else if (location.hash === to || (to === "#/" && /^(#\/?)?$/.test(location.hash))) route();
      else location.hash = to;
    };
    $("#tbo").onclick = () => { const p = $("#tbpanel"); p.hidden = !p.hidden; $("#tbo").setAttribute("aria-expanded", String(!p.hidden)); };
    bar.querySelectorAll("[data-gm]").forEach(b => b.onclick = () => { S.goalMin = +b.dataset.gm; delete S.goalDone[today()]; checkGoals(); save(); updateBar(true); });
    $("#tbcs").onclick = () => { const n = Math.round(+$("#tbc").value); if (n >= 1 && n <= 600) { S.goalMin = n; delete S.goalDone[today()]; checkGoals(); save(); updateBar(true); $("#tbc").value = ""; } };
    $("#tbas").onclick = () => { const n = Math.round(+$("#tba").value); if (n >= 1 && n <= 600) { addStudy(S.run.subj, n * 60); save(); updateBar(true); $("#tba").value = ""; $("#tbam").textContent = n + " dk " + subjName(S.run.subj) + " için eklendi."; } };
    $("#tbx").onclick = () => { $("#tbdone").hidden = true; document.title = "aktapokus-kesif"; };
    updateBar(true);
  }
  function updateBar(full) {
    const bar = document.getElementById("tbar"); if (!bar) return;
    const tot = totalSecs(), g = S.goalMin * 60;
    bar.querySelector("#tbt").textContent = fmtT(tot);
    bar.querySelector("#tbg").textContent = g ? "/ " + S.goalMin + " dk hedef" : "hedef yok";
    bar.querySelector("#tbp").style.width = g ? Math.min(100, tot / g * 100) + "%" : "0";
    if (full === true) {
      const cur = S.pickSubj && K.subjects[S.pickSubj] ? S.pickSubj : "all";
      bar.querySelector("#tbs").innerHTML = `<option value="all" ${cur === "all" ? "selected" : ""}>Haftalık plan</option>` + Object.keys(K.subjects).map(k => `<option value="${k}" ${k === cur ? "selected" : ""}>${esc(K.subjects[k].name)}</option>`).join("");
      bar.querySelector("#tbr").textContent = S.run.on ? "Duraklat" : "Başlat";
      bar.querySelector("#tbr").classList.toggle("ghost", S.run.on);
      bar.querySelectorAll("[data-gm]").forEach(b => { b.style.borderColor = +b.dataset.gm === S.goalMin ? "var(--accent)" : ""; });
    }
  }

  /* ---------- okul sınavı: MEB ODSGM konu-soru dağılım tablosu (senaryolar) + deneme ---------- */
  const SCH = { grade: "11", exam: 1, scen: 0 };
  function renderSchool() {
    if (!K.okul) { $app.innerHTML = `<h1>Okul sınavı</h1>${tabsHtml("okul")}<p>Tablo yüklenemedi.</p>`; return; }
    const sk = S.pickSubj && K.subjects[S.pickSubj] ? S.pickSubj : "mat";
    if (sk !== "mat") { $app.innerHTML = `<h1>${esc(K.subjects[sk].name)} · Okul sınavı</h1>${tabsHtml("okul")}<p class="lede">Bu ders için MEB ortak yazılı sınav tablosu uygulamaya henüz eklenmedi. Şimdilik konu anlatımları ve soru bankasıyla çalışabilirsin; okul sınavı çalışması matematikte hazır. Yukarıdaki listeden dersi değiştirebilirsin.</p><p><a class="btn" href="#/dersler/k:${sk}">${esc(K.subjects[sk].name)} konularına git</a></p>`; return; }
    const G = K.okul.grades, g = G[SCH.grade], nS = SCH.exam === 1 ? g.n1 : g.n2, key = SCH.exam === 1 ? "e1" : "e2";
    if (SCH.scen >= nS) SCH.scen = 0;
    const rows = g.rows.map(r => ({ r, n: (r[key] || [])[SCH.scen] || 0 })).filter(x => x.n > 0);
    const total = rows.reduce((a, x) => a + x.n, 0);
    const s11id = r => r.code.indexOf("MAT.11.") === 0 ? r.code.slice(7) : null;
    const have = r => { const id = s11id(r); return id ? K.daily.filter(q => (qmeta(q).s11 || "") === id).length : 0; };
    let html = `<h1>Matematik · Okul sınavı</h1>${tabsHtml("okul")}<p class="lede">MEB'in yayımladığı ${esc(K.okul.term)} <b>ortak yazılı sınav</b> konu-soru dağılım tablosu. Okul zümresi senaryolardan birini seçer; sınav <b>açık uçlu / kısa cevaplı</b> yapılır. Hangi senaryonun kullanılacağını matematik öğretmeninden öğren, sonra o senaryoyu burada dene.</p>
<div class="row" style="gap:8px;flex-wrap:wrap;margin:10px 0"><span class="muted small">Sınıf:</span>${["9", "10", "11", "12"].map(x => `<button class="btn ${SCH.grade === x ? "" : "ghost"}" data-g="${x}" type="button">${x}. sınıf</button>`).join("")}<span class="muted small" style="margin-left:12px">Sınav:</span><button class="btn ${SCH.exam === 1 ? "" : "ghost"}" data-e="1" type="button">1. yazılı</button><button class="btn ${SCH.exam === 2 ? "" : "ghost"}" data-e="2" type="button">2. yazılı</button></div>`;
    if (!nS) html += `<p class="callout">Bu sınıf için ${SCH.exam}. yazılının senaryo tablosu ayrıca yayımlanacak (MEB notu).</p>`;
    else {
      html += `<div class="row" style="gap:6px;flex-wrap:wrap;margin:8px 0"><span class="muted small">Senaryo:</span>${Array.from({ length: nS }, (_, i) => `<button class="btn ${SCH.scen === i ? "" : "ghost"}" data-s="${i}" type="button">${i + 1}</button>`).join("")}</div>
<div class="card"><table class="tbl"><thead><tr><th>Konu (kazanım)</th><th>Soru</th><th>Bende hazır</th></tr></thead><tbody>${rows.map(x => { const hv = SCH.grade === "11" ? have(x.r) : 0, id = s11id(x.r); return `<tr><td><span class="muted small">${esc(x.r.code)}</span><br>${esc(x.r.konu)}${id ? ` <a class="small" href="#/banka/${encodeURIComponent("s:" + id)}">sorular</a>` : ""}</td><td class="num"><b>${x.n}</b></td><td class="num">${SCH.grade === "11" ? (hv >= x.n ? '<b class="t-ok">' + hv + " ✓</b>" : hv) : "–"}</td></tr>`; }).join("")}<tr><td><b>Toplam</b></td><td class="num"><b>${total}</b></td><td></td></tr></tbody></table></div>`;
      if (SCH.grade === "11") html += `<p style="margin-top:14px"><button class="btn" id="sgo" type="button">Bu senaryoyu dene (40 dk)</button> <span class="muted small" id="smsg" role="status">Senaryodaki her konudan istenen sayıda özgün soru seçilir (varsa açık uçlu öncelikli).</span></p>`;
      else html += `<p class="muted small" style="margin-top:14px">Bu sınıf için uygulamada henüz soru yok; yalnızca MEB dağılımı gösteriliyor (şimdilik 11. sınıf öncelikli).</p>`;
    }
    html += `<p class="muted small" style="margin-top:14px">Kaynak: ${esc(K.okul.source)}. Sınav süresi okulca belirlenir; deneme süresi 40 dk varsayılmıştır.</p>`;
    $app.innerHTML = html;
    $app.querySelectorAll("[data-g]").forEach(b => b.onclick = () => { SCH.grade = b.dataset.g; SCH.scen = 0; renderSchool(); });
    $app.querySelectorAll("[data-e]").forEach(b => b.onclick = () => { SCH.exam = +b.dataset.e; SCH.scen = 0; renderSchool(); });
    $app.querySelectorAll("[data-s]").forEach(b => b.onclick = () => { SCH.scen = +b.dataset.s; renderSchool(); });
    const go = $app.querySelector("#sgo");
    if (go) go.onclick = () => {
      const paper = []; let miss = 0;
      rows.forEach(x => { const id = s11id(x.r), pool = shuffle(K.daily.filter(q => (qmeta(q).s11 || "") === id)).sort((a, b) => (b.type === "open" ? 1 : 0) - (a.type === "open" ? 1 : 0)); const take = pool.slice(0, x.n); miss += x.n - take.length; take.forEach(q => paper.push({ q, opts: q.type === "open" ? null : shuffle(q.opts), sel: null, vals: [], text: "", rub: new Set() })); });
      if (!paper.length) { $app.querySelector("#smsg").textContent = "Bu senaryo için henüz soru yok."; return; }
      if (miss && !confirm(miss + " soru eksik (bu konularda yeterli soru henüz yazılmadı). Eldeki sorularla devam edilsin mi?")) return;
      runExam(paper, 40);
    };
  }

  /* ---------- müfredat: her ders için resmî konu/kazanım listesi + içerik doluluğu ---------- */
  const UNIT_KN = { fiz: ["n:fiz|11. sınıf Fizik · Serbest düşme", "n:fiz|11. sınıf Fizik · İki boyutta hareket", "n:fiz|11. sınıf Fizik · Newton yasaları", "n:fiz|11. sınıf Fizik · Sürtünme", "n:fiz|11. sınıf Fizik · Limit hız", "n:fiz|11. sınıf Fizik · Çembersel hareket"], tar: ["n:tar|11. sınıf Tarih · 1683–1789 mücadeleleri", "n:tar|11. sınıf Tarih · Lale Devri", "n:tar|11. sınıf Tarih · 1755 Lizbon ve 1766 İstanbul depremleri", "n:tar|11. sınıf Tarih · Sanayi Devrimi"], kim: ["n:kim|11. sınıf Kimya · Tepkimelerde enerji değişimi", "n:kim|11. sınıf Kimya · Enerji kaynakları", "n:kim|11. sınıf Kimya · Bağ enerjisi", "n:kim|11. sınıf Kimya · Oluşum entalpisi", "n:kim|11. sınıf Kimya · Çarpışma teorisi", "n:kim|11. sınıf Kimya · Ortalama tepkime hızı", "n:kim|11. sınıf Kimya · Hıza etki eden faktörler", "n:kim|11. sınıf Kimya · Hız denklemi"], biy: ["n:biy|11. sınıf Biyoloji · Canlılık ve tepki", "n:biy|11. sınıf Biyoloji · Bitkisel hormonlar", "n:biy|11. sınıf Biyoloji · Bitki tepkileri ve deney", "n:biy|11. sınıf Biyoloji · Duyu organları ve nöron", "n:biy|11. sınıf Biyoloji · Hayvanlarda sinir sistemi", "n:biy|11. sınıf Biyoloji · İnsan sinir sistemi", "n:biy|11. sınıf Biyoloji · Refleks", "n:biy|11. sınıf Biyoloji · İskelet, kas ve kasılma", "n:biy|11. sınıf Biyoloji · Bağışıklık ve alerji"], fel: ["n:fel|11. sınıf Felsefe · Çevre ve insan; çevre etiği", "n:fel|11. sınıf Felsefe · Felsefi metin yazımı"] };
  const UNIT_KN2 = { biy: { 1: ["n:biy|11. sınıf Biyoloji · Homeostazi", "n:biy|11. sınıf Biyoloji · Geri bildirim mekanizmaları", "n:biy|11. sınıf Biyoloji · Sinir ve endokrin sistemin eş güdümü", "n:biy|11. sınıf Biyoloji · Dolaşım, solunum ve boşaltım", "n:biy|11. sınıf Biyoloji · Termoregülasyon", "n:biy|11. sınıf Biyoloji · Homeostaziyle ilgili sağlık sorunları"] }, kim: { 1: ["n:kim|11. sınıf Kimya · Kimyasal denge", "n:kim|11. sınıf Kimya · Denge sabiti ve Q", "n:kim|11. sınıf Kimya · Dengeyi etkileyen faktörler", "n:kim|11. sınıf Kimya · Suyun otoiyonizasyonu ve pH", "n:kim|11. sınıf Kimya · Asit–baz teorileri", "n:kim|11. sınıf Kimya · Asit–baz kuvveti ve pH hesapları", "n:kim|11. sınıf Kimya · Nötralleşme ve titrasyon", "n:kim|11. sınıf Kimya · Çözünürlük dengesi"], 2: ["n:kim|11. sınıf Kimya · Yeşil hidrojen ve atıktan enerji", "n:kim|11. sınıf Kimya · Nanoteknoloji ve mikroplastikler"] }, fiz: { 1: ["n:fiz|11. sınıf Fizik · Elektriksel kuvvet ve alan", "n:fiz|11. sınıf Fizik · Manyetik alan ve manyetik kuvvet", "n:fiz|11. sınıf Fizik · İndüksiyon", "n:fiz|11. sınıf Fizik · Transformatörler"], 2: ["n:fiz|11. sınıf Fizik · Işık şiddeti, akısı ve aydınlanma", "n:fiz|11. sınıf Fizik · Düzlem aynalar", "n:fiz|11. sınıf Fizik · Küresel aynalar", "n:fiz|11. sınıf Fizik · Kırılma ve fiber optik", "n:fiz|11. sınıf Fizik · Prizmalar ve mercekler"] }, tar: { 1: ["n:tar|11. sınıf Tarih · Fransız İhtilali", "n:tar|11. sınıf Tarih · 1789–1908 Osmanlı", "n:tar|11. sınıf Tarih · Bilim, sanat ve teknoloji", "n:tar|11. sınıf Tarih · Osmanlı'da sanayileşme çabaları"], 2: ["n:tar|11. sınıf Tarih · 1908–1918 siyasi ve askerî gelişmeler", "n:tar|11. sınıf Tarih · Göçler ve salgınlar", "n:tar|11. sınıf Tarih · Osmanlı’nın insanlık tarihine katkıları"] }, fel: { 1: ["n:fel|11. sınıf Felsefe · Teknoloji ve hayat"], 2: ["n:fel|11. sınıf Felsefe · Akıl ve inanç"], 3: ["n:fel|11. sınıf Felsefe · Edebiyat ve felsefe"], 4: ["n:fel|11. sınıf Felsefe · Hayatın anlamı"], 5: ["n:fel|11. sınıf Felsefe · Hukuk ve felsefe"] } };
  const LES = () => Object.values(K.lessons).filter(l => !l.hidden);
  const LESSON_MAARIF = { "fiz11-serbest-dusme": ["FİZ.11.1.1", "FİZ.11.1.2"], "fiz11-iki-boyut": ["FİZ.11.1.3"], "fiz11-newton-yasalari": ["FİZ.11.1.4", "FİZ.11.1.5"], "fiz11-surtunme": ["FİZ.11.1.6", "FİZ.11.1.7"], "fiz11-limit-hiz": ["FİZ.11.1.8"], "fiz11-cembersel": ["FİZ.11.1.9", "FİZ.11.1.10"], "fiz11-elektriksel-kuvvet": ["FİZ.11.2.1", "FİZ.11.2.2", "FİZ.11.2.3"], "fiz11-manyetik-alan": ["FİZ.11.2.4", "FİZ.11.2.5", "FİZ.11.2.6", "FİZ.11.2.7", "FİZ.11.2.8", "FİZ.11.2.9"], "fiz11-induksiyon": ["FİZ.11.2.10", "FİZ.11.2.11", "FİZ.11.2.12"], "fiz11-transformator": ["FİZ.11.2.13"], "fiz11-isik-sayilari": ["FİZ.11.3.1"], "fiz11-duzlem-ayna": ["FİZ.11.3.2"], "fiz11-kuresel-ayna": ["FİZ.11.3.3", "FİZ.11.3.4"], "fiz11-kirilma": ["FİZ.11.3.5", "FİZ.11.3.6", "FİZ.11.3.7"], "fiz11-prizma-mercek": ["FİZ.11.3.8", "FİZ.11.3.9", "FİZ.11.3.10"], "tar11-mucadele": ["TAR.11.1.1"], "tar11-lale-devri": ["TAR.11.1.2"], "tar11-depremler": ["TAR.11.1.3"], "tar11-sanayi-devrimi": ["TAR.11.1.4"], "tar11-fransiz-ihtilali": ["TAR.11.2.1"], "tar11-osmanli-donusum": ["TAR.11.2.2"], "tar11-bilim-teknoloji": ["TAR.11.2.3"], "tar11-sanayilesme-cabalari": ["TAR.11.2.4"], "tar11-siyasi-askeri-1908": ["TAR.11.3.1"], "tar11-goc-salgin": ["TAR.11.3.2"], "tar11-insanlik-katki": ["TAR.11.3.3"], "tar11-siyasi-askeri-1908": ["TAR.11.3.1"], "kim11-enerji": ["KİM.11.1.1"], "kim11-enerji-kaynagi": ["KİM.11.1.2"], "kim11-bag-enerjisi": ["KİM.11.1.3"], "kim11-olusum-entalpisi": ["KİM.11.1.4"], "kim11-carpisma": ["KİM.11.1.5"], "kim11-ortalama-hiz": ["KİM.11.1.6"], "kim11-hiz-faktorler": ["KİM.11.1.7"], "kim11-hiz-denklemi": ["KİM.11.1.8"], "kim11-denge": ["KİM.11.2.1", "KİM.11.2.2"], "kim11-denge-sabiti": ["KİM.11.2.3", "KİM.11.2.4"], "kim11-le-chatelier": ["KİM.11.2.5"], "kim11-su-ph": ["KİM.11.2.6"], "kim11-asit-baz-teorileri": ["KİM.11.2.7"], "kim11-asit-baz-kuvveti": ["KİM.11.2.8", "KİM.11.2.9"], "kim11-notrallesme": ["KİM.11.2.10", "KİM.11.2.11", "KİM.11.2.12"], "kim11-cozunurluk": ["KİM.11.2.13", "KİM.11.2.14"], "kim11-yesil-hidrojen": ["KİM.11.3.1"], "kim11-nano-plastik": ["KİM.11.3.2", "KİM.11.3.3"], "biy11-tepki": ["BİY.11.1.1"], "biy11-hormon": ["BİY.11.1.2"], "biy11-tropizma": ["BİY.11.1.3", "BİY.11.1.4"], "biy11-duyu": ["BİY.11.1.5"], "biy11-hayvan-sinir": ["BİY.11.1.6"], "biy11-insan-sinir": ["BİY.11.1.7"], "biy11-refleks": ["BİY.11.1.8"], "biy11-kas": ["BİY.11.1.9", "BİY.11.1.10"], "biy11-bagisiklik": ["BİY.11.1.11", "BİY.11.1.12"], "biy11-homeostazi": ["BİY.11.2.1"], "biy11-geri-bildirim": ["BİY.11.2.2"], "biy11-sinir-endokrin": ["BİY.11.2.3"], "biy11-dolasim-solunum-bosaltim": ["BİY.11.2.4", "BİY.11.2.5", "BİY.11.2.6", "BİY.11.2.7"], "biy11-termoregulasyon": ["BİY.11.2.8"], "biy11-saglik-sorunlari": ["BİY.11.2.9", "BİY.11.2.10"], "fel11-cevre": ["FEL.11.1.1", "FEL.11.1.2"] };
  const LESSON_KZ = { "fiz-hareket": ["fiz:9.3.1.2", "fiz:9.3.1.3", "fiz:9.3.1.4", "fiz:9.3.1.5"], "cog-boylam": ["cog:9.1.4", "cog:9.1.5"], "kim-periyodik": ["kim:9.2.3.1", "kim:9.2.3.2", "kim:9.2.3.3"], "tur-paragraf": ["edeb:A.4.4"] };
  const MUF = { gaps: false, view: "okul", grade: "11" };
  function covCounts() {
    const cnt = {}; K.daily.forEach(q => { const m = qmeta(q); if (m.yks) cnt[m.yks] = (cnt[m.yks] || 0) + 1; if (m.s11) cnt["s:" + m.s11] = (cnt["s:" + m.s11] || 0) + 1; });
    const les = {}; Object.keys(LESSON_KZ).forEach(id => LESSON_KZ[id].forEach(c => { (les[c] = les[c] || []).push(id); }));
    Object.keys(K.lessonYks || {}).forEach(id => K.lessonYks[id].forEach(c => { (les[c] = les[c] || []).push(id); }));
    return { cnt, les };
  }
  function subjCoverage(k, cv) {
    if (k === "mat") { const all = K.yks.levels.flatMap(l => l.areas.flatMap(a => a.topics.map(t => t[0]))); const withQ = all.filter(c => cv.cnt[c]).length; const t11 = s11Topics(); return { total: all.length + t11.length, withQ: withQ + t11.filter(p => cv.cnt["s:" + p.id]).length, withL: new Set(Object.keys(cv.les).filter(c => !c.includes(":"))).size + t11.filter(p => p.lesson).length }; }
    const items = (KZ_OF[k] || []).flatMap(key => (K.kz[key] ? K.kz[key].items.filter(i => i.c).map(i => key + ":" + i.c) : []));
    return { total: items.length, withQ: items.filter(c => cv.cnt[c]).length, withL: items.filter(c => cv.les[c]).length };
  }
  function renderCurriculum() {
    const cv = covCounts(), cur = S.pickSubj && K.subjects[S.pickSubj] ? S.pickSubj : "all";
    let html = `<h1>Müfredat</h1><p class="lede">Resmî konu ve kazanım listesi, her kazanımın yanında uygulamada <b>konu anlatımı</b> ve <b>soru</b> olup olmadığı. Boş görünenler henüz hazırlanmadı: açık sözlü olmak için bunu gösteriyorum.</p>`;
    if (cur === "all") {
      html += `<p class="muted small">Bir dersin ayrıntısı için üstteki ders listesinden dersi seç ya da aşağıdan bir derse dokun.</p><div class="card klist">${Object.keys(K.subjects).map(k => { const c = subjCoverage(k, cv), nl = LES().filter(l => l.subject === k).length; return `<div class="krow"><span class="kl"><b>${esc(K.subjects[k].icon)} ${esc(K.subjects[k].name)}</b><br><span class="muted small">${c.total} konu/kazanım · soru olan: ${c.withQ} (%${c.total ? Math.round(c.withQ / c.total * 100) : 0}) · ${nl} konu anlatımı</span></span><button class="btn ghost" data-ms="${k}" type="button">Aç</button></div>`; }).join("")}</div>
<p class="muted small" style="margin-top:12px">Kaynak: MEB 11. sınıf matematik kitabı ve MEB–ÖSYM 2026 kazanım belgesi (eski program kodları). Mantık, Sosyoloji, Psikoloji kodları belgede yok (ünite.kazanım sırası). Yabancı diller henüz yok.</p>`;
      $app.innerHTML = html; $app.querySelectorAll("[data-ms]").forEach(b => b.onclick = () => { setSubject(b.dataset.ms); renderCurriculum(); }); return;
    }
    const sb = K.subjects[cur], c = subjCoverage(cur, cv), mf = K.maarif && K.maarif[cur === "tur" ? "edeb" : cur];
    html += `<h2>${esc(sb.name)}</h2><div class="row" style="gap:8px;flex-wrap:wrap;margin:8px 0"><button class="btn ${MUF.view === "okul" ? "" : "ghost"}" data-v="okul" type="button">Okul müfredatı</button><button class="btn ${MUF.view === "sinav" ? "" : "ghost"}" data-v="sinav" type="button">Sınav (TYT/AYT)</button></div>`;
    if (MUF.view === "okul") {
      if (!mf || !Object.keys(mf.grades).length) html += `<p class="callout">Bu ders için okul müfredatı (Maarif) henüz eklenmedi. "Sınav (TYT/AYT)" görünümünde resmî kazanım listesi var.</p>`;
      else {
        const gs = Object.keys(mf.grades); if (!gs.includes(MUF.grade)) MUF.grade = gs.includes("11") ? "11" : gs[0];
        html += `<div class="row" style="gap:6px;flex-wrap:wrap;margin:4px 0 12px"><span class="muted small">Sınıf:</span>${gs.map(g => `<button class="btn ${MUF.grade === g ? "" : "ghost"}" data-g="${g}" type="button">${g}. sınıf</button>`).join("")}</div><p class="muted small">Türkiye Yüzyılı Maarif Modeli öğretim programı (MEB). Ünite/tema, ders saati, konular ve öğrenme çıktıları resmî programdandır.</p>`;
        const s11byCode = {}; if (cur === "mat" && MUF.grade === "11") s11Topics().forEach(p => { if (p.mat) s11byCode[p.mat] = p; });
        mf.grades[MUF.grade].forEach((u, ui) => {
          const covered = cur === "mat" && MUF.grade === "11" ? u.lo.filter(x => { const t = s11byCode[x.c]; return t && (cv.cnt["s:" + t.id] || t.lesson); }).length : 0;
          html += `<details class="subj" ${mf.grades[MUF.grade].length <= 3 ? "open" : ""}><summary style="font:700 18px var(--f-display);cursor:pointer;min-height:44px;display:flex;align-items:center;gap:8px;flex-wrap:wrap">${esc(u.title)} <span class="muted small">${esc(u.hours ? u.hours + " ders saati" : "")}${cur === "mat" && MUF.grade === "11" ? " · içerik: " + covered + "/" + u.lo.length : ""}</span></summary>`;
          if (u.konu.length) html += `<p class="muted small" style="margin:4px 0">Konular: ${u.konu.map(x => esc(x.replace(/^•\s*/, ""))).join(" · ")}</p>`;
          const ulessons = [];
          const ukeys = cur === "mat" && MUF.grade === "11" && K.s11.themes[ui] ? K.s11.themes[ui].topics.map(p => "s:" + p.id) : MUF.grade === "11" && ui === 0 && UNIT_KN[cur] ? UNIT_KN[cur] : MUF.grade === "11" && UNIT_KN2[cur] && UNIT_KN2[cur][ui] ? UNIT_KN2[cur][ui] : null;
          u.lo.forEach(x => {
            const t = s11byCode[x.c], qn = t ? (cv.cnt["s:" + t.id] || 0) : 0, ls = (t && t.lesson ? [t.lesson] : []).concat(Object.keys(LESSON_MAARIF).filter(id => LESSON_MAARIF[id].includes(x.c)));
            ls.forEach(id => { if (!ulessons.includes(id)) ulessons.push(id); });
            if (MUF.gaps && (qn || ls.length) && cur === "mat") return;
            html += `<div class="row" style="align-items:flex-start;gap:10px;flex-wrap:wrap;margin:6px 0"><span class="muted small" style="min-width:92px">${esc(x.c)}</span><span style="flex:1 1 220px">${esc(x.t)}</span>${ls.map(id => `<a class="btn ${S.done[id] ? "ghost" : ""}" href="#/ders/${id}/0">Anlatım${S.done[id] ? " ✓" : ""}</a>`).join("")}${qn ? `<a class="btn ghost" href="#/banka/${encodeURIComponent("s:" + t.id)}">Soru (${qn})</a>` : ""}</div>`;
          });
          html += `<div class="row" style="gap:8px;flex-wrap:wrap;margin:14px 0 4px;padding-top:12px;border-top:1px dashed var(--line)"><a class="btn" href="${ulessons[0] ? "#/ders/" + ulessons[0] + "/0" : "#/dersler/k:" + cur}">Konu anlatımı</a><a class="btn ghost" href="${ukeys ? "#/banka/unit:" + encodeURIComponent(ukeys.join("~")) : "#/banka/ders:" + cur}">Örnek sorular</a><a class="btn ghost" href="#/dersler/okul">Okul sınavı denemeleri ve çözümleri</a><a class="btn ghost" href="${ukeys ? "#/deneme/unit:" + encodeURIComponent(ukeys.join("~")) : "#/deneme/" + cur}">Deneme sınavı</a></div>`;
          html += `</details>`;
        });
        if (cur !== "mat") html += `<p class="muted small">Bu derste uygulamadaki soru ve konu anlatımları henüz okul müfredatı kodlarına bağlanmadı; "Sınav (TYT/AYT)" görünümünde kazanım bazlı doluluk görünür.</p>`;
      }
    } else {
    html += `<p class="callout"><b>Doluluk:</b> ${c.total} konu/kazanımdan <b>${c.withQ}</b>'inde soru var (%${c.total ? Math.round(c.withQ / c.total * 100) : 0}); konu anlatımı bağlı olan: <b>${c.withL}</b>.</p>
<label style="display:flex;gap:8px;align-items:center;min-height:44px"><input type="checkbox" id="mg" ${MUF.gaps ? "checked" : ""} style="width:22px;height:22px"> Yalnızca henüz içeriği olmayanları göster</label>`;
    const row = (code, text, qn, ls, link) => `<div class="row" style="align-items:flex-start;gap:10px;flex-wrap:wrap;margin:6px 0"><span class="muted small" style="min-width:76px">${esc(code)}</span><span style="flex:1 1 220px">${esc(text)}</span>${ls.map(id => `<a class="btn ${S.done[id] ? "ghost" : ""}" href="#/ders/${id}/0">Anlatım${S.done[id] ? " ✓" : ""}</a>`).join("")}${qn ? `<a class="btn ghost" href="${link}">Soru (${qn})</a>` : '<span class="muted small">içerik hazırlanıyor</span>'}</div>`;
    if (cur === "mat") {
      html += `<h3 style="margin-top:20px">11. sınıf (kitap sırası)</h3>`;
      K.s11.themes.forEach(th => { html += `<h4 style="margin:12px 0 4px">${th.n}. Tema: ${esc(th.title)}</h4>`; th.topics.forEach(p => { const qn = cv.cnt["s:" + p.id] || 0, ls = p.lesson ? [p.lesson] : []; if (MUF.gaps && (qn || ls.length)) return; html += row(p.mat || p.id, p.title, qn, ls, "#/banka/" + encodeURIComponent("s:" + p.id)); }); });
      html += `<h3 style="margin-top:24px">TYT / AYT konuları (MEB–ÖSYM)</h3>`;
      K.yks.levels.forEach(lv => { const tabs = [K.yks.tyt.includes(lv.id) ? "TYT" : "", K.yks.ayt.includes(lv.id) ? "AYT" : ""].filter(Boolean).join(" · "); html += `<details class="subj"><summary style="font:700 18px var(--f-display);cursor:pointer;min-height:44px;display:flex;align-items:center;gap:8px;flex-wrap:wrap">${esc(lv.title)} <span class="muted small">${tabs}</span></summary>`; lv.areas.forEach(ar => { html += `<h4 style="margin:10px 0 4px">${esc(ar.title)}</h4>`; ar.topics.forEach(t => { const qn = cv.cnt[t[0]] || 0, ls = (cv.les[t[0]] || []).filter((x, i, a) => a.indexOf(x) === i && K.lessons[x]); if (MUF.gaps && (qn || ls.length)) return; html += row(t[0], t[1], qn, ls, "#/banka/" + encodeURIComponent("y:" + t[0])); }); }); html += `</details>`; });
    } else {
      (KZ_OF[cur] || []).forEach(key => { const sub = K.kz[key]; if (!sub) return; html += `<h3 style="margin-top:20px">${esc(sub.name)}</h3>`; let unitShown = ""; sub.items.forEach(i => { if (i.u) { unitShown = `<h4 style="margin:12px 0 4px">${esc(i.u)}</h4>`; return; } const id = key + ":" + i.c, qn = cv.cnt[id] || 0, ls = (cv.les[id] || []).filter((x, ix, a) => a.indexOf(x) === ix && K.lessons[x]); if (MUF.gaps && (qn || ls.length)) return; html += unitShown; unitShown = ""; html += row(i.c, i.t, qn, ls, "#/banka/" + encodeURIComponent("y:" + id)); }); });
    }
    }
    $app.innerHTML = html;
    const mg = $app.querySelector("#mg"); if (mg) mg.onchange = e => { MUF.gaps = e.target.checked; renderCurriculum(); };
    $app.querySelectorAll("[data-v]").forEach(b => b.onclick = () => { MUF.view = b.dataset.v; renderCurriculum(); });
    $app.querySelectorAll("[data-g]").forEach(b => b.onclick = () => { MUF.grade = b.dataset.g; renderCurriculum(); });
  }

  /* ---------- tüm dersler: ders kartları ve ders sayfası ---------- */
  const KZ_OF = { mat: [], tur: ["edeb"], edeb: ["edeb"], tar: ["tar", "ink"], cog: ["cog"], fel: ["fel", "man", "sos", "psi", "din"], fiz: ["fiz"], kim: ["kim"], biy: ["biy"] };
  function renderAllSubjects() {
    let html = `<h1>Dersler</h1>${tabsHtml("tum")}<p class="lede">Bir ders seç: konu anlatımları, soru bankası ve resmî konu/kazanım listesi tek yerde. (Matematik için 11. sınıf sırası ve TYT/AYT konuları ayrı sekmelerde.)</p><div class="grid">`;
    Object.keys(K.subjects).forEach(k => {
      const sb = K.subjects[k], ls = LES().filter(l => l.subject === k), dn = ls.filter(l => S.done[l.id]).length, nq = K.daily.filter(q => q.subject === k).length;
      html += `<a class="card" style="text-decoration:none;color:inherit" href="#/dersler/k:${k}"><span class="tag">${esc(sb.icon)} ${esc(sb.name)}</span><h3>${ls.length} konu anlatımı · ${nq} soru</h3><p class="muted small">${dn}/${ls.length} konu anlatımı tamam · ${esc(sb.note)}</p></a>`;
    });
    $app.innerHTML = html + "</div>";
  }
  function kzHtml(key, cnt) {
    const sub = K.kz && K.kz[key]; if (!sub) return "";
    let h = `<details class="subj"><summary style="font:700 20px var(--f-display);cursor:pointer;min-height:44px;display:flex;align-items:center">${esc(sub.name)}</summary>`;
    sub.items.forEach(i => {
      if (i.u) h += `<h3 style="margin:14px 0 6px">${esc(i.u)}</h3>`;
      else h += `<div class="row" style="align-items:flex-start;gap:10px;flex-wrap:wrap;margin:6px 0"><span class="muted small" style="min-width:76px">${esc(i.c)}</span><span style="flex:1 1 240px">${esc(i.t)}</span>${cnt[key + ":" + i.c] ? `<a class="btn ghost" href="#/banka/${encodeURIComponent("y:" + key + ":" + i.c)}">Soru (${cnt[key + ":" + i.c]})</a>` : ""}</div>`;
    });
    return h + `</details>`;
  }
  const SINAV_OF = { mat: ["tyt", "ayt"], tur: ["tyt"], edeb: ["ayt"], tar: ["tyt", "ayt"], cog: ["tyt", "ayt"], fel: ["tyt", "ayt"], fiz: ["tyt", "ayt"], kim: ["tyt", "ayt"], biy: ["tyt", "ayt"] };
  function renderSubjectPage(spec) {
    const parts = String(spec).split(":"), k = parts[0], sb = K.subjects[k]; if (!sb) return renderAllSubjects();
    if (S.pickSubj !== k) setSubject(k);
    const avail = SINAV_OF[k] || ["tyt", "ayt"], view = avail.includes(parts[1]) ? parts[1] : "konu", cv = covCounts();
    const qk = {}; K.daily.filter(q => q.subject === k).forEach(q => { const key = konuKey(q); qk[key] = (qk[key] || 0) + 1; });
    const nq = K.daily.filter(q => q.subject === k).length;
    const tabs = SEC_TABS(k);
    const les = id => K.lessons[id] ? `<a class="btn ${S.done[id] ? "ghost" : ""}" href="#/ders/${id}/${S.done[id] ? 0 : (S.notes["p_" + id] || 0)}">${S.done[id] ? "Anlatım ✓" : S.notes["p_" + id] ? "Devam" : "Anlatım"}</a>` : "";
    const row = (code, text, ls, qn, link) => `<div class="row subjrow" style="align-items:center;gap:8px;flex-wrap:wrap;margin:5px 0">${code ? `<span class="muted small" style="min-width:60px">${esc(code)}</span>` : ""}<span style="flex:1 1 130px;line-height:1.35">${esc(text)}</span>${ls.filter((x, i, a) => a.indexOf(x) === i).map(les).join("")}${qn ? `<a class="btn ghost" href="${link}">Soru (${qn})</a>` : ""}</div>`;
    let html = `<p class="small" style="margin:0 0 4px"><a href="#/dersler/tum">← Tüm dersler</a></p><h1>${esc(sb.name)}</h1>
<nav class="tabs" role="tablist" aria-label="${esc(sb.name)} bölümleri">${tabs.map(t => `<a role="tab" href="${secHref(k, t[0])}" ${t[0] === view ? 'aria-selected="true" aria-current="page"' : 'aria-selected="false"'}>${t[1]}</a>`).join("")}</nav>`;
    const kzList = open => (KZ_OF[k] || []).map(key => {
      const sub = K.kz && K.kz[key]; if (!sub) return "";
      let h = `<details class="subj" ${open ? "open" : ""}><summary style="font:700 18px var(--f-display);cursor:pointer;min-height:44px;display:flex;align-items:center">${esc(sub.name)}</summary>`;
      sub.items.forEach(i => { if (i.u) h += `<h3 style="margin:14px 0 6px">${esc(i.u)}</h3>`; else { const id = key + ":" + i.c; h += row(i.c, i.t, (cv.les[id] || []).filter(x => K.lessons[x]), cv.cnt[id] || 0, "#/banka/" + encodeURIComponent("y:" + id)); } });
      return h + `</details>`;
    }).join("");
    if (view === "konu") {
      /* ders işleme: konuları sırayla öğren */
      const mine = LES().filter(l => l.subject === k);
      if (k === "mat") {
        const all = s11Topics(), done = all.filter(topicDone).length, nx = s11Next();
        html += `<p class="lede">11. sınıf matematiği, ders kitabındaki sırayla. ${done}/${all.length} konu tamam.</p>`;
        K.s11.themes.forEach(th => {
          html += `<h2 style="margin:22px 0 4px">${th.n}. Tema: ${esc(th.title)}</h2>`;
          th.topics.forEach(p => { const isNext = nx && nx.id === p.id; html += `<div ${isNext ? 'style="border-left:4px solid var(--accent);padding-left:10px"' : ""}>${row(p.id, p.title, p.lesson ? [p.lesson] : [], qk["s:" + p.id] || 0, "#/banka/" + encodeURIComponent("s:" + p.id))}</div>`; });
        });
      } else {
        html += `<p class="lede">${esc(sb.note)}</p>`;
        if (mine.length) html += `<h2 style="margin:18px 0 4px">Konu anlatımları</h2>` + mine.map(l => row("", l.title + " · ≈" + l.minutes + " dk", [l.id], 0, "")).join("");
        const kn = Object.keys(qk).filter(x => x.indexOf("n:" + k + "|") === 0);
        if (kn.length) html += `<h2 style="margin:22px 0 4px">Konulara göre sorular</h2>` + kn.map(x => row("", x.split("|")[1], [], qk[x], "#/banka/" + encodeURIComponent(x))).join("");
        if ((KZ_OF[k] || []).length && K.kz) html += `<h2 style="margin:22px 0 4px">Resmî konu ve kazanım listesi</h2>` + kzList(false);
      }
    } else {
      /* sınav çalışması: TYT / AYT konuları */
      html += `<p class="lede">${esc(sb.note)}</p>`;
      if (k === "mat") {
        K.yks.levels.filter(lv => K.yks[view].includes(lv.id)).forEach(lv => {
          html += `<details class="subj" open><summary style="font:700 18px var(--f-display);cursor:pointer;min-height:44px;display:flex;align-items:center">${esc(lv.title)}</summary>`;
          lv.areas.forEach(ar => { html += `<h3 style="margin:14px 0 6px">${esc(ar.title)}</h3>`; ar.topics.forEach(t => { html += row(t[0], t[1], Object.keys(K.lessonYks || {}).filter(id => K.lessonYks[id].includes(t[0])), qk["y:" + t[0]] || 0, "#/banka/y:" + t[0]); }); });
          html += `</details>`;
        });
      } else if (K.kz && (KZ_OF[k] || []).length) html += kzList((KZ_OF[k] || []).length === 1);
      html += `<div class="row" style="gap:10px;flex-wrap:wrap;margin:22px 0 0"><a class="btn" href="#/deneme/${k}">${view.toUpperCase()} denemesi çöz</a>${nq ? `<a class="btn ghost" href="#/banka/ders:${k}">Tüm sorular (${nq})</a>` : ""}</div>`;
    }
    $app.innerHTML = html;
  }

  /* ---------- Dersler: 11. sınıf sırası, TYT, AYT, hedeflerim ---------- */
  const SEC_TABS = k => { const av = SINAV_OF[k] || ["tyt", "ayt"]; return [["konu", "Konular"]].concat(av.map(a => [a, a.toUpperCase()]), [["okul", "Okul sınavı"]]); };
  const secHref = (k, t) => t === "okul" ? "#/dersler/okul" : "#/dersler/k:" + k + (t === "konu" ? "" : ":" + t);
  const tabsHtml = cur => { const k = S.pickSubj && K.subjects[S.pickSubj] ? S.pickSubj : "mat", on = cur === "okul" ? "okul" : "konu"; return `<nav class="tabs" role="tablist" aria-label="${esc(K.subjects[k].name)} bölümleri">${SEC_TABS(k).map(t => `<a role="tab" href="${secHref(k, t[0])}" ${t[0] === on ? 'aria-selected="true" aria-current="page"' : 'aria-selected="false"'}>${t[1]}</a>`).join("")}</nav>`; };
  const s11Topics = () => K.s11 ? K.s11.themes.flatMap(t => t.topics.map(p => Object.assign({ theme: t }, p))) : [];
  const topicDone = p => !!(p.lesson && S.done[p.lesson]);
  function s11Next() { const t = s11Topics().find(p => !topicDone(p)); return t || null; }
  function s11NextLesson() { const t = s11Topics().find(p => p.lesson && !S.done[p.lesson]); return t ? t.lesson : null; }
  function lessonLink(id, label) { const l = K.lessons[id]; return `<a class="btn ${S.done[id] ? "ghost" : ""}" href="#/ders/${id}/${S.done[id] ? 0 : (S.notes["p_" + id] || 0)}">${label || (S.done[id] ? "Tekrar" : S.notes["p_" + id] ? "Devam" : "Konuya başla")}</a>`; }
  function renderDersler(tab) {
    if (tab === "hedef") return renderGoals();
    if (tab === "tum") return renderAllSubjects();
    if (tab === "okul") return renderSchool();
    if (tab.indexOf("k:") === 0) return renderSubjectPage(tab.slice(2));
    if (tab === "tyt" || tab === "ayt") return renderExam(tab);
    let html = `<h1>Dersler</h1>${tabsHtml(tab)}`;
    if (tab === "s11") {
      const all = s11Topics(), done = all.filter(topicDone).length, nx = s11Next();
      html += `<p class="lede">11. sınıf matematiği, resmî ders kitabındaki sırayla. Sırayla gidersen her konu bir öncekinin üstüne kurulur.</p>
<div class="row" style="margin:6px 0 18px"><div class="minibar" aria-hidden="true"><i style="width:${all.length ? done / all.length * 100 : 0}%"></i></div><b>${done}/${all.length} konu</b></div>`;
      K.s11.themes.forEach(th => {
        html += `<section class="subj on"><h2 style="margin:0 0 4px">${th.n}. Tema: ${esc(th.title)}</h2><div class="lst" style="gap:10px;margin-top:10px">`;
        th.topics.forEach(p => {
          const isNext = nx && nx.id === p.id, has = !!p.lesson && !!K.lessons[p.lesson];
          html += `<div class="row" style="align-items:center;gap:12px;flex-wrap:wrap;${isNext ? "border-left:4px solid var(--accent);padding-left:10px" : ""}"><span style="font-weight:700;min-width:34px">${p.id}</span>${p.mat ? `<span class="tag" title="Resmî kazanım kodu (MEB ODSGM tablosu)">${esc(p.mat)}</span>` : ""}<span style="flex:1 1 220px">${esc(p.title)}${isNext ? ' <span class="tag">sıradaki</span>' : ""}${p.partial ? ' <span class="muted small">(bir bölümü)</span>' : ""}</span>${has ? `${S.done[p.lesson] ? '<b class="t-ok">✓</b>' : ""} ${lessonLink(p.lesson)}` : '<span class="muted small">konu anlatımı hazırlanıyor</span>'}</div>`;
        });
        html += `</div></section>`;
      });
      html += `<p class="muted small">Kaynak: ${esc(K.s11.source)}. Kazanım kodları ayrıca doğrulanacak.</p>`;
    }
    $app.innerHTML = html;
  }

  /* ---------- soru bankası, TYT/AYT sekmeleri, çıkmış sorular ---------- */
  let customSet = null, customBack = "#/";
  const qmeta = q => Object.assign({ sinav: [], zor: 1, kaynak: "özgün" }, (K.meta && K.meta[q.id]) || {});
  const SINAV = [["all", "Hepsi"], ["s11", "11. sınıf"], ["tyt", "TYT"], ["ayt", "AYT"]];
  const ZOR = ["", "kolay", "orta", "zor"];
  function kzFind(id) { const i = id.indexOf(":"); if (i < 0 || !K.kz) return null; const k = id.slice(0, i), c = id.slice(i + 1), sub = K.kz[k]; if (!sub) return null; const it = sub.items.find(x => x.c === c); return { name: sub.name, text: it ? it.t : "" }; }
  function yksTitle(id) { if (id.indexOf(":") > -1) { const f = kzFind(id); return f ? f.text : null; } if (!K.yks) return null; for (const lv of K.yks.levels) for (const ar of lv.areas) for (const t of ar.topics) if (t[0] === id) return t[1]; return null; }
  function s11Title(id) { const t = s11Topics().find(p => p.id === id); return t ? t.title : null; }
  function konuKey(q) { const m = qmeta(q); return m.yks ? "y:" + m.yks : m.s11 ? "s:" + m.s11 : m.kn ? "n:" + q.subject + "|" + m.kn : "d:" + q.subject; }
  function konuLabel(key) { const [k, v] = [key.slice(0, 1), key.slice(2)]; return k === "y" ? (v.indexOf(":") > -1 && kzFind(v) ? kzFind(v).name + " " + v.slice(v.indexOf(":") + 1) + " " : v + " ") + (yksTitle(v) || "") : k === "n" ? (K.subjects[v.split("|")[0]] ? K.subjects[v.split("|")[0]].name : "") + " · " + v.split("|")[1] : k === "s" ? "11. sınıf " + v + " " + (s11Title(v) || "") : (K.subjects[v] ? K.subjects[v].name : v) + " (genel)"; }
  const BF = { sinav: "all", ders: "all", konu: "all", zor: 0 };
  const bankMatch = q => { const m = qmeta(q); return (BF.sinav === "all" || m.sinav.includes(BF.sinav)) && (BF.ders === "all" || q.subject === BF.ders) && (BF.konu === "all" || konuKey(q) === BF.konu) && (!BF.keys || BF.keys.has(konuKey(q))) && (!BF.zor || m.zor === BF.zor); };
  const qStat = id => (S.qs && S.qs[id]) || { n: 0, ok: 0 };
  function renderBank(param) {
    if (!param && BF._ps !== (S.pickSubj || "all")) { BF._ps = S.pickSubj || "all"; BF.ders = BF._ps; BF.konu = "all"; }
    if (param) BF.keys = null;
    if (param && /^unit:/.test(param)) { BF.keys = new Set(param.slice(5).split("~")); BF.konu = "all"; BF.sinav = "all"; BF.ders = "all"; BF.zor = 0; }
    if (param && /^[ysdn]:/.test(param)) { BF.konu = param; BF.sinav = "all"; BF.ders = "all"; BF.zor = 0; }
    if (param && /^ders:/.test(param)) { BF.ders = param.slice(5); BF.konu = "all"; BF.sinav = "all"; BF.zor = 0; }
    const all = K.daily.slice(), list = all.filter(bankMatch);
    const groups = {}; list.forEach(q => { (groups[konuKey(q)] = groups[konuKey(q)] || []).push(q); });
    const konular = [...new Set(all.map(konuKey))].sort();
    const subs = [...new Set(all.map(q => q.subject))];
    const solved = list.filter(q => qStat(q.id).n > 0).length;
    $app.innerHTML = `<h1>Soru bankası</h1><p class="lede">Her soru bir konuya bağlı; her soruda <b>ipucu</b>, <b>konu anlatımı</b> ve <b>adım adım çözüm</b> var. Filtreyi seç, çözmeye başla.</p>
${BF.keys ? `<p class="callout">Ünite süzgeci açık: ${BF.keys.size} konu. <button class="btn ghost" id="bkc" type="button">Süzgeci kaldır</button></p>` : ""}<div class="subj on"><div class="setrow"><span class="muted small">Sınav:</span><span class="chips" style="display:flex;gap:6px;flex-wrap:wrap">${SINAV.map(s => `<button class="btn ${BF.sinav === s[0] ? "" : "ghost"}" data-f="sinav:${s[0]}" type="button">${s[1]}</button>`).join("")}</span></div>
<div class="setrow"><label class="muted small" for="fd">Ders</label><select id="fd"><option value="all">Hepsi</option>${subs.map(k => `<option value="${k}" ${BF.ders === k ? "selected" : ""}>${esc(K.subjects[k].name)}</option>`).join("")}</select>
<label class="muted small" for="fk">Konu</label><select id="fk" style="max-width:100%"><option value="all">Hepsi</option>${konular.map(k => `<option value="${k}" ${BF.konu === k ? "selected" : ""}>${esc(konuLabel(k))}</option>`).join("")}</select>
<label class="muted small" for="fz">Zorluk</label><select id="fz"><option value="0">Hepsi</option>${[1, 2, 3].map(z => `<option value="${z}" ${BF.zor === z ? "selected" : ""}>${ZOR[z]}</option>`).join("")}</select></div></div>
<div class="card" style="margin:14px 0"><table class="tbl"><thead><tr><th>Ders</th><th>Soru</th><th>Anlatım</th></tr></thead><tbody>${Object.keys(K.subjects).map(k => { const nq = all.filter(q => q.subject === k).length, nl = LES().filter(l => l.subject === k).length; return `<tr><td><a href="#/banka/ders:${k}">${esc(K.subjects[k].icon)} ${esc(K.subjects[k].name)}</a></td><td class="num">${nq}</td><td class="num">${nl}</td></tr>`; }).join("")}</tbody></table></div>
<div class="row" style="align-items:center;gap:14px;margin:14px 0"><b>${list.length} soru</b><span class="muted small">çözülen: ${solved}</span><button class="btn" id="bgo" type="button" ${list.length ? "" : "disabled"}>Bu filtreyi çöz</button><a class="btn ghost" href="#/deneme">Deneme sınavı</a><a class="btn ghost" href="#/cikmis">Çıkmış sorular</a></div>
${list.length ? `<div class="card klist">${Object.keys(groups).sort().map(k => `<div class="krow"><span class="kl">${esc(konuLabel(k).length > 110 ? konuLabel(k).slice(0, 107) + "…" : konuLabel(k))}</span><span class="kc muted small">${groups[k].length} soru · ${groups[k].filter(q => qStat(q.id).n > 0).length} çözülen</span><button class="btn ghost" data-go="${k}" type="button">Çöz</button></div>`).join("")}</div>` : `<p class="callout">Bu filtreyle soru yok. Soru bankası her hafta genişliyor; filtreyi gevşet.</p>`}
<p class="muted small" style="margin-top:14px">Kaynak: tüm sorular bu proje için özgün yazılmıştır ("çıkmış soru" değildir). ÖSYM çıkmış soruları telif nedeniyle burada değil, ÖSYM'nin sayfasındadır.</p>`;
    $app.querySelectorAll("[data-f]").forEach(b => b.onclick = () => { BF.sinav = b.dataset.f.split(":")[1]; renderBank(); });
    const bkc = $app.querySelector("#bkc"); if (bkc) bkc.onclick = () => { BF.keys = null; renderBank(); };
    $app.querySelector("#fd").onchange = e => { BF.ders = e.target.value; BF.keys = null; renderBank(); };
    $app.querySelector("#fk").onchange = e => { BF.konu = e.target.value; BF.keys = null; renderBank(); };
    $app.querySelector("#fz").onchange = e => { BF.zor = +e.target.value; renderBank(); };
    const go = set => { if (!set.length) return; customSet = shuffle(set); customBack = "#/banka"; location.hash = "#/gunluk/ozel"; };
    $app.querySelector("#bgo").onclick = () => go(list);
    $app.querySelectorAll("[data-go]").forEach(b => b.onclick = () => go(groups[b.dataset.go]));
  }
  function renderCikmis() {
    const o = K.osym;
    $app.innerHTML = `<h1>Çıkmış sorular</h1><p class="lede">Geçmiş yılların sınav soruları çalışmanın en iyi parçalarından biri. Resmî kaynağı ÖSYM'dir.</p>
<div class="callout"><b>Neden sorular burada değil?</b> ${esc(o.note)}</div>
<div class="card" style="margin:16px 0"><h3>Resmî soru kitapçıkları ve cevap anahtarları</h3><p class="muted small">Her yıl için TYT, AYT ve YDT kitapçıkları ÖSYM'nin sayfasında. Bağlantılar ÖSYM sitesinden doğrulandı.</p>
<div class="row" style="flex-wrap:wrap;gap:8px"><a class="btn" href="${o.archive.url}" target="_blank" rel="noopener">${esc(o.archive.title)} ↗</a>${o.years.map(y => `<a class="btn ghost" href="${y.url}" target="_blank" rel="noopener">${y.y} YKS ↗</a>`).join("")}</div></div>
<div class="card"><h3>Nasıl çalışmalısın?</h3><ol class="body"><li>Önce <a href="#/banka">soru bankasından</a> konuyu çalış (ipucu, konu anlatımı ve adım adım çözümle).</li><li>Sonra ÖSYM'nin kitapçığından <b>aynı konuyu</b> arayıp çıkmış soruları çöz.</li><li>Yanlışta uygulamaya dön: ilgili konunun keşfini ve çözümlü sorularını tekrar et.</li></ol>
<p class="muted small">Yakında: konu bazlı künye listesi ("2024 AYT Matematik, 12. soru → türev"); yalnızca soru numarası ve konu etiketi, soru metni yok.</p></div>`;
  }
  function renderExam(tab) {
    const label = tab === "tyt" ? "TYT" : "AYT";
    let html = `<h1>Dersler</h1>${tabsHtml(tab)}<p class="lede">${label} çalışmaların burada ayrı izlenir. Konu listesi MEB–ÖSYM kazanım belgesinden alınmıştır; ilerlemen diğer sekmelerle ortaktır.</p>
<p class="callout small">Bu liste 2026 sınavının (eski program) belgesine dayanır. Maarif programıyla 2028 sınavına girecek öğrenci için ÖSYM'nin yeni belgesi yayımlanınca güncellenecek. ${label} / konu eşlemesi taslaktır.</p>`;
    html += `<div class="row" style="gap:8px;flex-wrap:wrap;margin:6px 0 14px"><span class="muted small">Derse git:</span>${Object.keys(K.subjects).map(k => `<a class="btn ghost" href="#/dersler/k:${k}">${esc(K.subjects[k].icon)} ${esc(K.subjects[k].name)}</a>`).join("")}</div>`;
    if (K.yks) {
      html += `<h2>${label} Matematik konuları</h2>`;
      K.yks.levels.filter(lv => K.yks[tab].includes(lv.id)).forEach(lv => {
        html += `<details class="subj" ${lv.id === "11" || lv.id === "12" ? "open" : ""}><summary style="font:700 20px var(--f-display);cursor:pointer;min-height:44px;display:flex;align-items:center">${esc(lv.title)}</summary>`;
        lv.areas.forEach(ar => {
          html += `<h3 style="margin:14px 0 6px">${esc(ar.title)}</h3><div class="lst" style="gap:8px">`;
          ar.topics.forEach(t => {
            const qs = K.daily.filter(q => (qmeta(q).yks || "") === t[0]), ls = Object.keys(K.lessonYks || {}).filter(id => K.lessonYks[id].includes(t[0]) && K.lessons[id]);
            html += `<div class="row" style="align-items:center;gap:10px;flex-wrap:wrap"><span class="muted small" style="min-width:64px">${esc(t[0])}</span><span style="flex:1 1 220px">${esc(t[1])}</span>${ls.map(id => `<a class="btn ${S.done[id] ? "ghost" : ""}" href="#/ders/${id}/0">Anlatım${S.done[id] ? " ✓" : ""}</a>`).join("")}${qs.length ? `<a class="btn ghost" href="#/banka/y:${t[0]}">Soru (${qs.length})</a>` : '<span class="muted small">soru hazırlanıyor</span>'}</div>`;
          });
          html += `</div>`;
        });
        html += `</details>`;
      });
    }
    if (K.kz) {
      const cnt = {}; K.daily.forEach(q => { const m = qmeta(q); if (m.yks && m.yks.indexOf(":") > -1) cnt[m.yks] = (cnt[m.yks] || 0) + 1; });
      const N = tab === "tyt" ? { edeb: "Türkçe testi: 40 soru", tar: "Tarih: 5 soru", ink: "Tarih testi içinde", cog: "Coğrafya: 5 soru", fel: "Felsefe: 5 soru", man: "Felsefe grubu / Mantık", sos: "Felsefe grubu / Sosyoloji", psi: "Felsefe grubu / Psikoloji", din: "Din Kültürü: 5 soru", fiz: "Fizik: 7 soru", kim: "Kimya: 7 soru", biy: "Biyoloji: 6 soru" }
        : { edeb: "Edebiyat: 24 soru", tar: "Tarih-1: 10 · Tarih-2: 11", ink: "Tarih testi içinde", cog: "Coğrafya-1: 6 · Coğrafya-2: 11", fel: "Felsefe grubu: 12", man: "Felsefe grubu: 12 (Mantık)", sos: "Felsefe grubu: 12 (Sosyoloji)", psi: "Felsefe grubu: 12 (Psikoloji)", din: "Din Kültürü: 6", fiz: "Fizik: 14", kim: "Kimya: 13", biy: "Biyoloji: 13" };
      html += `<h2 style="margin-top:28px">Diğer dersler (${label})</h2><p class="muted small">Resmî kazanım listesi (kod + kazanım). Kendi alanına ait dersleri aç; soru sayısı varsa "Soru" bağlantısı çıkar. Sınavdaki soru sayıları 2026-YKS kılavuzundandır.</p>`;
      ["edeb", "tar", "ink", "cog", "fel", "man", "sos", "psi", "din", "fiz", "kim", "biy"].forEach(k => {
        const sub = K.kz[k]; if (!sub) return;
        const nq = sub.items.filter(i => i.c && cnt[k + ":" + i.c]).reduce((a, i) => a + cnt[k + ":" + i.c], 0);
        html += `<details class="subj"><summary style="font:700 20px var(--f-display);cursor:pointer;min-height:44px;display:flex;align-items:center;gap:10px;flex-wrap:wrap">${esc(sub.name)} <span class="muted small">${esc(N[k] || "")}${nq ? " · " + nq + " soru hazır" : ""}</span></summary>`;
        sub.items.forEach(i => {
          if (i.u) html += `<h3 style="margin:14px 0 6px">${esc(i.u)}</h3>`;
          else html += `<div class="row" style="align-items:flex-start;gap:10px;flex-wrap:wrap;margin:6px 0"><span class="muted small" style="min-width:76px">${esc(i.c)}</span><span style="flex:1 1 240px">${esc(i.t)}</span>${cnt[k + ":" + i.c] ? `<a class="btn ghost" href="#/banka/${encodeURIComponent("y:" + k + ":" + i.c)}">Soru (${cnt[k + ":" + i.c]})</a>` : ""}</div>`;
        });
        html += `</details>`;
      });
      html += `<p class="muted small">Yabancı dil dersleri bu listeye eklenecek; Mantık, Sosyoloji ve Psikoloji kodları belgede yoktur (ünite.kazanım sırası). Kaynak: MEB–ÖSYM 2026 kazanım belgesi (eski program kodları).</p>`;
    }
    const others = LES().filter(l => (K.tracks[l.id] || []).includes(tab) && l.subject !== "mat");
    others.forEach(l => { html += `<section class="subj on"><h2 style="margin:0">${esc(K.subjects[l.subject].icon)} ${esc(K.subjects[l.subject].name)}</h2><div class="row" style="align-items:center;gap:12px;flex-wrap:wrap;margin-top:8px"><span style="flex:1 1 220px">${esc(l.title)} <span class="muted small">≈ ${l.minutes} dk</span></span>${S.done[l.id] ? '<b class="t-ok">✓</b>' : ""} ${lessonLink(l.id)}</div></section>`; });
    html += `<p class="muted small" style="margin-top:14px">Diğer dersler (Türkçe, sosyal, fen) için de aynı biçimde resmî konu listesi eklenecek. <a href="#/cikmis">Çıkmış sorular →</a></p>`;
    $app.innerHTML = html;
  }

  /* ---------- sınav hazırlık modu: konu seç, süreli ve puanlı mini deneme ---------- */
  const normA = v => String(v).toLowerCase().replace(/\s+/g, "").replace(/\*|·|×/g, "").replace(/kök/g, "√").replace(/cm²|cm2|cm|derece|°|adet|tane/g, "").replace(/,/g, ".");
  const sameA = (a, b) => { const x = normA(a), y = normA(b); if (x === y) return true; return /^-?[\d.]+$/.test(x) && /^-?[\d.]+$/.test(y) && Math.abs(parseFloat(x) - parseFloat(y)) < 1e-9; };
  const openAuto = (q, vals) => (q.answers || []).length > 0 && q.answers.every((a, i) => sameA(vals[i] || "", a.v) || (a.accept || []).some(x => sameA(vals[i] || "", x)));
  const rubMax = q => (q.rubric || []).reduce((a, r) => a + r[0], 0);
  const EXC = { sel: null, n: 10, min: 20, open: true };
  let examTimer = null;
  function renderExamSetup(preset) {
    const all = K.daily.slice(), counts = {}; all.forEach(q => { const k = konuKey(q); counts[k] = (counts[k] || 0) + 1; });
    const keys = Object.keys(counts).sort(), keySubj = {}; all.forEach(q => { keySubj[konuKey(q)] = q.subject; });
    if (preset && /^unit:/.test(preset)) { const ks = new Set(decodeURIComponent(preset.slice(5)).split("~")); EXC.sel = new Set(keys.filter(k => ks.has(k))); EXC._ps = "unit"; }
    else if (preset && K.subjects[preset]) EXC.sel = new Set(keys.filter(k => keySubj[k] === preset));
    else if (!preset && EXC._ps !== (S.pickSubj || "all")) { EXC._ps = S.pickSubj || "all"; EXC.sel = EXC._ps === "all" ? new Set(keys) : new Set(keys.filter(k => keySubj[k] === EXC._ps)); }
    if (!EXC.sel) EXC.sel = new Set(keys);
    const sjs = Object.keys(K.subjects).filter(k => keys.some(x => keySubj[x] === k));
    if (!EXC.view || !sjs.includes(EXC.view)) EXC.view = preset && sjs.includes(preset) ? preset : sjs.includes(S.pickSubj) ? S.pickSubj : sjs[0];
    else if (preset && sjs.includes(preset)) EXC.view = preset;
    const hist = (S.exams || []).slice(-6).reverse();
    $app.innerHTML = `<h1>Sınav hazırlık modu</h1><p class="lede">Konularını seç; süreli ve puanlı bir mini deneme çöz. Sorular tek tek geri bildirim vermez, sınav gibi: bitirince puanını, konu bazlı sonucunu ve çözümlerini görürsün.</p>
<div class="subj on"><h3 style="margin:0 0 6px">1. Konular</h3>
<div class="setrow"><label class="muted small" for="xs">Ders</label><select id="xs">${sjs.map(k => `<option value="${k}" ${k === EXC.view ? "selected" : ""}>${esc(K.subjects[k].name)}</option>`).join("")}</select><label class="muted small" for="xf2">Ara</label><input id="xf2" type="search" placeholder="konu ara" value="${esc(EXC.q || "")}" style="width:160px"></div>
<div class="row" style="gap:8px;margin:8px 0;flex-wrap:wrap"><button class="btn ghost" id="xa" type="button">Bu dersin hepsi</button><button class="btn ghost" id="xd" type="button">Bu dersi temizle</button><button class="btn ghost" id="xc" type="button">Tümünü temizle</button></div>
<div class="lst" id="xl"></div><p class="small" id="xsum" role="status" style="margin:10px 0 0"></p></div>
<div class="subj on"><h3 style="margin:0 0 6px">2. Deneme ayarı</h3><div class="setrow"><label class="muted small" for="xn">Soru sayısı</label><select id="xn">${[5, 8, 10, 15, 20].map(n => `<option value="${n}" ${EXC.n === n ? "selected" : ""}>${n}</option>`).join("")}</select>
<label class="muted small" for="xm">Süre (dk)</label><select id="xm">${[10, 15, 20, 30, 45, 60].map(n => `<option value="${n}" ${EXC.min === n ? "selected" : ""}>${n}</option>`).join("")}</select><label class="muted small" for="xc2">veya kendi süren</label><input id="xc2" type="number" min="1" max="180" placeholder="dk" style="width:90px"></div>
<label style="display:flex;gap:10px;align-items:center;min-height:44px"><input type="checkbox" id="xo" ${EXC.open ? "checked" : ""} style="width:22px;height:22px"> Açık uçlu soruları da ekle (yaklaşık üçte biri)</label>
<p class="muted small">Puanlama: çoktan seçmeli doğru = 1 puan, yanlış ve boş = 0 (eksi puan yok). Açık uçlu soru puanlama anahtarındaki puan kadar; kısa cevabın doğruysa sonuç puanı otomatik verilir, işlem basamaklarını kendin işaretlersin.</p></div>
<p><button class="btn" id="xgo" type="button">Denemeyi başlat</button> <span id="xmsg" class="muted small" role="status"></span></p>
<h2 style="margin-top:28px">Geçmiş denemelerin</h2>${hist.length ? `<div class="card"><table class="tbl"><thead><tr><th>Tarih</th><th>Puan</th><th>%</th><th>Süre</th></tr></thead><tbody>${hist.map(h => `<tr><td>${esc(new Date(h.t).toLocaleDateString("tr-TR"))}</td><td class="num">${h.score}/${h.max}</td><td class="num">%${h.pct}</td><td class="num">${fmtT(h.secs)}</td></tr>`).join("")}</tbody></table></div>` : `<p class="muted">Henüz deneme yok.</p>`}`;
    const short = k => konuLabel(k).replace(/^[^·]*·\s*/, "").replace(/^\d+\. sınıf [^·]*·\s*/, "");
    const drawList = () => {
      const q = (EXC.q || "").toLocaleLowerCase("tr"), vk = keys.filter(k => keySubj[k] === EXC.view && (!q || short(k).toLocaleLowerCase("tr").includes(q)));
      $app.querySelector("#xl").innerHTML = vk.length ? vk.map(k => `<label style="display:flex;gap:10px;align-items:center;min-height:40px"><input type="checkbox" data-k="${esc(k)}" ${EXC.sel.has(k) ? "checked" : ""} style="width:20px;height:20px"><span style="flex:1">${esc(short(k))}</span><span class="muted small">${counts[k]} soru</span></label>`).join("") : `<p class="muted small">Eşleşen konu yok.</p>`;
      $app.querySelectorAll("[data-k]").forEach(c => c.onchange = () => { c.checked ? EXC.sel.add(c.dataset.k) : EXC.sel.delete(c.dataset.k); sum(); });
      sum();
    };
    const sum = () => { const by = {}; let nq = 0; EXC.sel.forEach(k => { by[keySubj[k]] = (by[keySubj[k]] || 0) + 1; nq += counts[k] || 0; }); const parts = Object.keys(by).map(j => esc(K.subjects[j].name) + ": " + by[j] + " konu").join(" · "); $app.querySelector("#xsum").innerHTML = EXC.sel.size ? `<b>Seçili:</b> ${parts} · ${nq} soru` : `<span class="muted">Henüz konu seçilmedi.</span>`; };
    $app.querySelector("#xs").onchange = e => { EXC.view = e.target.value; drawList(); };
    $app.querySelector("#xf2").oninput = e => { EXC.q = e.target.value; drawList(); };
    $app.querySelector("#xa").onclick = () => { keys.filter(k => keySubj[k] === EXC.view).forEach(k => EXC.sel.add(k)); drawList(); };
    $app.querySelector("#xd").onclick = () => { keys.filter(k => keySubj[k] === EXC.view).forEach(k => EXC.sel.delete(k)); drawList(); };
    $app.querySelector("#xc").onclick = () => { EXC.sel = new Set(); drawList(); };
    drawList();
    $app.querySelector("#xn").onchange = e => { EXC.n = +e.target.value; };
    $app.querySelector("#xm").onchange = e => { EXC.min = +e.target.value; };
    $app.querySelector("#xo").onchange = e => { EXC.open = e.target.checked; };
    $app.querySelector("#xgo").onclick = () => {
      const custom = Math.round(+$app.querySelector("#xc2").value), minutes = custom >= 1 && custom <= 180 ? custom : EXC.min;
      const pool = K.daily.filter(q => EXC.sel.has(konuKey(q)) && (EXC.open || q.type !== "open")), msg = $app.querySelector("#xmsg");
      if (!pool.length) { msg.textContent = "Önce en az bir konu seç."; return; }
      const mc = shuffle(pool.filter(q => q.type !== "open")), op = shuffle(pool.filter(q => q.type === "open"));
      const nOpen = EXC.open ? Math.min(op.length, Math.round(EXC.n / 3)) : 0, nMc = Math.min(mc.length, EXC.n - nOpen);
      const paper = mc.slice(0, nMc).concat(op.slice(0, Math.min(op.length, EXC.n - nMc))).map(q => ({ q, opts: q.type === "open" ? null : shuffle(q.opts), sel: null, vals: [], text: "", rub: new Set() }));
      runExam(paper, minutes);
    };
  }
  function runExam(paper, minutes) {
    closeFS(); document.body.style.overflow = "hidden";
    fs = el("div", { class: "fs", role: "dialog", "aria-modal": "true", "aria-label": "Deneme sınavı" }); document.body.appendChild(fs);
    const total = minutes * 60, t0 = Date.now(); let idx = 0, over = false;
    fs.innerHTML = `<div class="inner"><div class="exbar"><b id="xt" class="xt">--:--</b><span class="muted small" id="xp"></span><button class="btn ghost" id="xq" type="button">Kapat</button><button class="btn" id="xf" type="button">Bitir</button></div><div class="xnav" id="xnv"></div><div id="xb"></div><div class="row" style="margin-top:14px"><button class="btn ghost" id="xpv" type="button">← Önceki</button><button class="btn" id="xnx" type="button">Sonraki →</button></div></div>`;
    const $ = s => fs.querySelector(s);
    function nav() { $("#xnv").innerHTML = paper.map((e, i) => { const a = e.q.type === "open" ? (e.text.trim() || e.vals.some(v => v)) : e.sel !== null; return `<button type="button" class="chip ${a ? "on" : ""} ${i === idx ? "cur" : ""}" data-i="${i}" aria-label="Soru ${i + 1}${a ? " (cevaplandı)" : ""}">${i + 1}</button>`; }).join(""); $("#xp").textContent = (idx + 1) + "/" + paper.length; }
    function show() {
      const e = paper[idx], q = e.q, b = $("#xb");
      if (q.type === "open") {
        b.innerHTML = `<span class="eyebrow">Açık uçlu · ${rubMax(q)} puan</span><div class="qtext" style="font:600 clamp(20px,3vw,26px)/1.45 var(--f-display)">${esc(q.q)}</div><label class="muted small" for="wk" style="display:block;margin-top:10px">Çözümün (işlem basamakları puan getirir)</label><textarea id="wk" rows="6">${esc(e.text)}</textarea>${(q.answers || []).map((a, i) => `<div class="setrow" style="margin-top:8px"><label class="muted small" style="min-width:140px" for="an${i}">${esc(a.label)}</label><input id="an${i}" type="text" autocomplete="off" value="${esc(e.vals[i] || "")}" style="min-height:44px;border-radius:12px;border:1.5px solid var(--line);background:var(--card2);color:var(--ink);padding:0 10px;font:inherit"></div>`).join("")}`;
        b.querySelector("#wk").oninput = ev => { e.text = ev.target.value; nav(); };
        (q.answers || []).forEach((a, i) => { b.querySelector("#an" + i).oninput = ev => { e.vals[i] = ev.target.value; nav(); }; });
      } else {
        b.innerHTML = `<span class="eyebrow">Çoktan seçmeli · 1 puan</span>${q.passage ? `<div class="passage">${esc(q.passage)}</div>` : ""}<div class="qtext" style="font:600 clamp(20px,3vw,26px)/1.45 var(--f-display)">${esc(q.q)}</div><div class="opts">${e.opts.map((o, i) => `<button class="opt ${e.sel === i ? "sel" : ""}" type="button" data-o="${i}"><span class="k">${LET[i]}</span>${esc(o.t)}</button>`).join("")}</div><p><button class="btn ghost" id="xclr" type="button">Cevabı temizle</button></p>`;
        b.querySelector(".opts").onclick = ev => { const o = ev.target.closest("[data-o]"); if (!o) return; e.sel = +o.dataset.o; show(); };
        b.querySelector("#xclr").onclick = () => { e.sel = null; show(); };
      }
      $("#xpv").disabled = idx === 0; $("#xnx").disabled = idx === paper.length - 1; nav(); fs.scrollTop = 0;
    }
    $("#xnv").onclick = ev => { const c = ev.target.closest("[data-i]"); if (c) { idx = +c.dataset.i; show(); } };
    $("#xpv").onclick = () => { idx = Math.max(0, idx - 1); show(); };
    $("#xnx").onclick = () => { idx = Math.min(paper.length - 1, idx + 1); show(); };
    $("#xq").onclick = () => { if (confirm("Denemeyi bırakmak istiyor musun? Bu denemenin sonucu kaydedilmez.")) { closeFS(); location.hash = "#/deneme"; } };
    $("#xf").onclick = () => { const blank = paper.filter(e => e.q.type === "open" ? !(e.text.trim() || e.vals.some(v => v)) : e.sel === null).length; if (!blank || confirm(blank + " soru boş. Yine de bitirilsin mi?")) finish(); };
    function tick() { const left = Math.max(0, total - Math.floor((Date.now() - t0) / 1000)), t = $("#xt"); if (!t) return; t.textContent = fmtT(left); t.classList.toggle("warn", left <= 60); if (left <= 0 && !over) { over = true; finish(true); } }
    examTimer = setInterval(tick, 500); tick();
    function finish(timeUp) { clearInterval(examTimer); examTimer = null; showResult(paper, Math.min(total, Math.floor((Date.now() - t0) / 1000)), timeUp); }
    show();
  }
  function showResult(paper, secs, timeUp) {
    paper.forEach(e => { if (e.q.type === "open") { const ok = openAuto(e.q, e.vals); e.auto = ok; if (ok && e.q.rubric.length) e.rub.add(e.q.rubric.length - 1); } });
    const rec = { t: Date.now(), secs, score: 0, max: 0, pct: 0, topics: {} };
    const compute = () => {
      let sc = 0, mx = 0; const tp = {};
      paper.forEach(e => { const q = e.q, k = konuKey(q); let got, m; if (q.type === "open") { m = rubMax(q); got = [...e.rub].reduce((a, i) => a + q.rubric[i][0], 0); } else { m = 1; got = e.sel !== null && e.opts[e.sel].ok ? 1 : 0; } sc += got; mx += m; (tp[k] = tp[k] || [0, 0]); tp[k][0] += got; tp[k][1] += m; e.got = got; e.m = m; });
      rec.score = sc; rec.max = mx; rec.pct = mx ? Math.round(sc / mx * 100) : 0; rec.topics = tp;
    };
    compute();
    paper.forEach(e => { const q = e.q; if (q.type === "open") return; const okq = e.got === 1; const qq = (S.qs[q.id] = S.qs[q.id] || { n: 0, ok: 0 }); qq.n++; if (okq) qq.ok++; if (okq) S.review = S.review.filter(x => x !== q.id); else if (!S.review.includes(q.id)) S.review.push(q.id); });
    S.exams = (S.exams || []).concat([rec]); save();
    const render = () => {
      compute(); S.exams[S.exams.length - 1] = rec; save();
      const rows = Object.keys(rec.topics).sort((a, b) => rec.topics[a][0] / rec.topics[a][1] - rec.topics[b][0] / rec.topics[b][1]);
      const weak = rows.filter(k => rec.topics[k][0] / rec.topics[k][1] < 0.6).slice(0, 3);
      const st = fs.scrollTop;
      fs.innerHTML = `<div class="inner"><button class="btn ghost close" type="button" id="xcl">Kapat ✕</button><h1>${timeUp ? "Süre doldu" : "Deneme bitti"} ✦</h1>
<p class="stat" style="margin:0">${rec.score} / ${rec.max} puan <span class="muted small" style="font:600 18px var(--f-body)">· %${rec.pct} · süre ${fmtT(secs)}</span></p>
<h2>Konu bazlı sonuç</h2><div class="card"><table class="tbl"><thead><tr><th>Konu</th><th>Puan</th><th>%</th></tr></thead><tbody>${rows.map(k => { const [g, m] = rec.topics[k], p = Math.round(g / m * 100); return `<tr><td>${esc(konuLabel(k))}</td><td class="num">${g}/${m}</td><td class="num"><b class="${p >= 80 ? "t-ok" : p < 60 ? "t-no" : ""}">%${p}</b></td></tr>`; }).join("")}</tbody></table></div>
${weak.length ? `<h3>Önerilen çalışma</h3><ul class="body">${weak.map(k => `<li>${esc(konuLabel(k))} → <a href="#/banka/${encodeURIComponent(k)}">soru bankasında çöz</a></li>`).join("")}</ul>` : `<p class="callout">Konuların hepsinde %60 ve üzerindesin. Zorluğu artırmak için soru sayısını artır ya da süreyi kısalt.</p>`}
<p class="muted small">Yanlış yaptığın çoktan seçmeli sorular tekrar kutuna eklendi.</p>
<h2>Soru soru inceleme</h2>${paper.map((e, i) => { const q = e.q, ok = e.got === e.m; return `<details class="sol" ${ok ? "" : "open"}><summary><b>${i + 1}.</b> ${ok ? "✓" : "✗"} ${esc(q.q.length > 90 ? q.q.slice(0, 90) + "…" : q.q)} <span class="muted small">(${e.got}/${e.m})</span></summary>
${q.type === "open" ? `<p class="small">Kısa cevap: ${e.auto ? '<b class="t-ok">doğru</b>' : '<b class="t-no">tutmadı</b>'} · senin cevapların: ${esc(e.vals.filter(Boolean).join(" ; ") || "(boş)")}</p>${(q.answers || []).length ? `<p class="small">Doğru cevaplar: ${(q.answers || []).map(a => esc(a.label) + " = <b>" + esc(a.v) + "</b>").join(" · ")}</p>` : ""}${solHtml(q, true)}<div class="rub"><b>Puanlama anahtarı</b> <span class="muted small">(çözümünde olanları işaretle)</span>${q.rubric.map((r, j) => `<label style="display:flex;gap:10px;align-items:flex-start;min-height:44px;padding:6px 0"><input type="checkbox" data-q="${i}" data-r="${j}" ${e.rub.has(j) ? "checked" : ""} style="width:22px;height:22px;flex:none"><span>${esc(r[1])} <b>(${r[0]} p)</b></span></label>`).join("")}</div>`
        : `<p class="small">Senin cevabın: <b>${e.sel === null ? "(boş)" : esc(e.opts[e.sel].t)}</b> · doğru: <b>${esc(e.opts.find(o => o.ok).t)}</b></p><p class="small">${esc(e.opts.find(o => o.ok).why)}</p>${solHtml(q, true)}`}</details>`; }).join("")}
<p style="margin-top:18px"><a class="btn" href="#/deneme">Yeni deneme</a> <a class="btn ghost" href="#/banka">Soru bankası</a></p></div>`;
      fs.querySelector("#xcl").onclick = () => { closeFS(); location.hash = "#/deneme"; };
      fs.querySelectorAll("[data-r]").forEach(c => c.onchange = () => { const e = paper[+c.dataset.q], j = +c.dataset.r; c.checked ? e.rub.add(j) : e.rub.delete(j); render(); });
      fs.scrollTop = st;
    };
    render();
  }

  /* ---------- hedeflerim: ders seç, hedef koy ---------- */
  function keepScroll(fn) { const y = window.scrollY; fn(); window.scrollTo(0, y); }
  function renderGoals() {
    const sel = selSet(), td = studyDay();
    let html = `${tabsHtml("hedef")}<p class="lede">Çalışmak istediğin dersleri seç; her derse günlük bir süre hedefi koyabilirsin. Üstteki sayaç seçtiğin derse yazılır. Seçmediğin dersler "Bugün" önerisinde çıkmaz ama burada durur.</p>`;
    for (const k in K.subjects) {
      const sb = K.subjects[k], on = sel.has(k), g = S.subjGoal[k] || 0, mins = Math.floor((td[k] || 0) / 60);
      const ls = LES().filter(l => l.subject === k);
      html += `<section class="subj ${on ? "on" : ""}"><label style="display:flex;gap:10px;align-items:center;min-height:44px;font:700 20px var(--f-display)"><input type="checkbox" data-sel="${k}" ${on ? "checked" : ""} style="width:24px;height:24px"> ${esc(sb.icon)} ${esc(sb.name)}</label>
<p class="muted small" style="margin:0">${esc(sb.note)}</p>
<div class="setrow"><label class="muted small" for="g_${k}">Günlük hedefim</label><select id="g_${k}" data-sg="${k}">${[0, 10, 15, 20, 30, 45, 60, 90, 120].map(n => `<option value="${n}" ${n === g ? "selected" : ""}>${n ? n + " dk" : "hedef yok"}</option>`).join("")}</select>
<span class="small">Bugün: <b>${mins} dk</b></span>${g ? `<div class="minibar" aria-hidden="true"><i style="width:${Math.min(100, mins / g * 100)}%"></i></div>${mins >= g ? "<b class='t-ok'>✓</b>" : ""}` : ""}</div>
<div class="lst">${ls.length ? ls.map(l => `<a href="#/ders/${l.id}/0">${S.done[l.id] ? "✓ " : "› "}${esc(l.title)} <span class="muted small">≈ ${l.minutes} dk</span></a>`).join("") : `<span class="muted small">Bu ders için konu anlatımı hazırlanıyor.</span>`}</div></section>`;
    }
    $app.innerHTML = `<h1>Dersler</h1>` + html;
    $app.querySelectorAll("[data-sel]").forEach(c => c.onchange = () => { const cur = selSet(); c.checked ? cur.add(c.dataset.sel) : cur.delete(c.dataset.sel); S.sel = [...cur]; save(); updateBar(true); keepScroll(renderGoals); });
    $app.querySelectorAll("[data-sg]").forEach(c => c.onchange = () => { S.subjGoal[c.dataset.sg] = +c.value; checkGoals(); save(); keepScroll(renderGoals); });
  }

  /* ---------- kullanıcı bölümü ---------- */
  const userLabel = () => { const u = K.sync && K.sync.user(); if (!u) return null; return (S.profile && S.profile.name) || (u.email || "").split("@")[0] || "Hesabım"; };
  function setUser() {
    const a = document.getElementById("usr"); if (!a) return;
    const n = userLabel();
    a.innerHTML = n ? `<span class="avatar" aria-hidden="true">${esc(n.charAt(0).toUpperCase())}</span><span class="uname">${esc(n)}</span>` : "Giriş yap";
    a.setAttribute("aria-label", n ? "Profilim: " + n : "Giriş yap");
  }
  function streak() {
    const act = new Set(Object.keys(S.days).filter(k => (S.days[k].n || 0) > 0).concat(Object.keys(S.study).filter(k => Object.values(S.study[k]).reduce((a, b) => a + b, 0) > 60)));
    const f = dt => dt.getFullYear() + "-" + String(dt.getMonth() + 1).padStart(2, "0") + "-" + String(dt.getDate()).padStart(2, "0");
    const dt = new Date(); if (!act.has(f(dt))) dt.setDate(dt.getDate() - 1);
    let n = 0; while (act.has(f(dt))) { n++; dt.setDate(dt.getDate() - 1); }
    return n;
  }
  function renderProfile() {
    const u = K.sync && K.sync.user();
    if (!u) { $app.innerHTML = `<h1>Giriş</h1><p class="lede">Giriş yaparsan ilerlemen ve notların hesabına bağlanır, başka cihazda da devam edersin. Giriş yapmadan da her şeyi kullanabilirsin.</p>${accountCard()}`; bindAccount(); return; }
    const totSec = Object.values(S.study).reduce((a, dd) => a + Object.values(dd).reduce((x, y) => x + y, 0), 0);
    const week = Object.keys(S.study).filter(k => (Date.now() - new Date(k).getTime()) / 86400000 < 7).reduce((a, k) => a + Object.values(S.study[k]).reduce((x, y) => x + y, 0), 0);
    const qn = Object.values(S.days).reduce((a, r) => a + (r.n || 0), 0), qok = Object.values(S.days).reduce((a, r) => a + (r.ok || 0), 0);
    const all = s11Topics(), dn = all.filter(topicDone).length, mins = x => Math.round(x / 60);
    $app.innerHTML = `<div class="row" style="align-items:center;gap:16px"><span class="avatar big" aria-hidden="true">${esc(userLabel().charAt(0).toUpperCase())}</span><div><span class="eyebrow">Profilim</span><h1 style="margin:0">Merhaba, ${esc(userLabel())}</h1><p class="muted small" style="margin:4px 0 0">${esc(u.email || "")} · ${esc(K.sync.status() || "bekleniyor")}</p></div></div>
<div class="grid" style="margin-top:22px">
<article class="card"><h3>Çalışma süresi</h3><p class="stat">${mins(totSec)} dk</p><p class="muted small" style="margin:0">Bu hafta: ${mins(week)} dk · Seri: <b>${streak()} gün</b></p></article>
<article class="card"><h3>Konu anlatımları</h3><p class="stat">${Object.keys(S.done).length}</p><p class="muted small" style="margin:0">tamamlanan konu anlatımı · 11. sınıf: ${dn}/${all.length} konu</p></article>
<article class="card"><h3>Sorular</h3><p class="stat">${qok}/${qn}</p><p class="muted small" style="margin:0">ilk denemede doğru / çözülen · tekrar kutusunda ${S.review.length}</p></article></div>
${(() => { const E = S.errs || {}, tot = Object.values(E).reduce((a, b) => a + b, 0); if (!tot) return `<div class="card" style="margin-top:16px"><h3>Hata türlerin</h3><p class="muted small">Yanlış yaptığında "Düşünce nerede kaydı?" düğmelerinden birini seç; burada hangi tür hatayı sık yaptığını göreceksin. Hatanın türünü bilmek, onu düzeltmenin ilk adımıdır.</p></div>`; const top = Object.keys(E).sort((a, b) => E[b] - E[a])[0]; return `<div class="card" style="margin-top:16px"><h3>Hata türlerin</h3>${Object.keys(ERR).map(k => `<div class="row" style="align-items:center;gap:10px;margin:6px 0"><span style="min-width:200px">${ERR[k][0]}</span><div class="minibar"><i style="width:${Math.round((E[k] || 0) / tot * 100)}%"></i></div><b>${E[k] || 0}</b></div>`).join("")}<p class="callout small">En sık: <b>${ERR[top][0]}</b>. ${ERR[top][1]}</p></div>`; })()}
<div class="card" style="margin-top:16px"><h3>Görünen ad</h3><p class="muted small">İstersen takma ad yaz; başkaları görmez, yalnızca bu ekranda ve üst çubukta görünür.</p><div class="row"><input id="pn" type="text" maxlength="30" value="${esc((S.profile && S.profile.name) || "")}" placeholder="adın" style="flex:1 1 200px;min-height:44px;border-radius:12px;border:1.5px solid var(--line);background:var(--card2);color:var(--ink);padding:0 10px;font:inherit"><button class="btn" id="pns" type="button">Kaydet</button></div><p class="small" id="pnm" role="status"></p></div>
<div class="card" style="margin-top:16px"><h3>Hesap</h3><div class="row"><a class="btn ghost" href="#/ayarlar">Ayarlar</a><button class="btn ghost" id="so" type="button">Çıkış yap</button><button class="btn ghost" id="sd" type="button">Sunucudaki verilerimi sil</button></div></div>`;
    $app.querySelector("#pns").onclick = () => { S.profile = { name: $app.querySelector("#pn").value.trim().slice(0, 30) }; save(); setUser(); $app.querySelector("#pnm").textContent = "Kaydedildi."; };
    $app.querySelector("#so").onclick = () => { K.sync.signOut(); setUser(); location.hash = "#/profil"; renderProfile(); };
    $app.querySelector("#sd").onclick = async () => { if (confirm("Sunucudaki ilerleme ve notların silinsin mi? Bu cihazdaki veriler kalır.")) { const ok = await K.sync.deleteData(); alert(ok ? "Sunucudaki verilerin silindi." : "Silinemedi; bağlantını kontrol et."); } };
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
    if (so) so.onclick = () => { K.sync.signOut(); setUser(); renderSettings(); };
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

  /* ---------- konu anlatımı grafiği ---------- */
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
    const ystep = (c.ymax - c.ymin) > 10 ? 2 : 1; let tk = "";
    for (let x = Math.ceil(c.xmin); x <= Math.floor(c.xmax); x++) tk += `<line class="ax" x1="${X(x)}" y1="${H - P}" x2="${X(x)}" y2="${H - P + 5}"/><text x="${X(x)}" y="${H - P + 20}" text-anchor="middle" fill="var(--muted)" font-size="17">${String(x).replace("-", "−")}</text>`;
    for (let y = Math.ceil(c.ymin); y <= Math.floor(c.ymax); y += ystep) tk += `<line class="ax" x1="${P - 5}" y1="${Y(y)}" x2="${P}" y2="${Y(y)}"/><text x="${P - 9}" y="${Y(y) + 4}" text-anchor="end" fill="var(--muted)" font-size="17">${String(y).replace("-", "−")}</text>`;
    tk += `<text x="${W - P}" y="${H - 6}" text-anchor="end" fill="var(--ink)" font-size="18" font-weight="700">${esc(c.xTitle || c.varName)} →</text><text x="${P + 4}" y="20" fill="var(--ink)" font-size="18" font-weight="700">↑ ${esc(c.yTitle || c.fLabel)}</text>`;
    host.innerHTML = `<p>${step.intro}</p><div class="lab">
<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(step.title)} grafiği">
<line class="ax" x1="${P}" y1="${Y(Math.max(c.ymin, Math.min(0, c.ymax)))}" x2="${W - P}" y2="${Y(Math.max(c.ymin, Math.min(0, c.ymax)))}"/>
<line class="ax" x1="${X(Math.max(c.xmin, Math.min(0, c.xmax)))}" y1="${P}" x2="${X(Math.max(c.xmin, Math.min(0, c.xmax)))}" y2="${H - P}"/>
<line class="ax" x1="${X(c.a)}" y1="${P}" x2="${X(c.a)}" y2="${H - P}" stroke-dasharray="3 5"/>
${tk}
${hasL ? `<line class="lim" x1="${P}" y1="${Y(c.L)}" x2="${W - P}" y2="${Y(c.L)}"/><text x="${P + 6}" y="${Y(c.L) - 8}" text-anchor="start" fill="var(--good)" font-size="18" font-weight="700">yaklaştığı değer (limit) = ${String(c.L).replace(".", ",")}</text>` : ""}
<path class="curve" d="${d}"/>${hasL ? `<circle class="hole" cx="${X(c.a)}" cy="${Y(c.L)}" r="7"/><text x="${X(c.a) + 12}" y="${Y(c.L) + 24}" fill="var(--accent)" font-size="17">boşluk: burada değer yok</text>` : ""}
<circle class="dot" id="pt" r="8" cx="-20" cy="-20"/><text id="ptl" font-size="18" font-weight="700" fill="var(--ink)" stroke="var(--card2)" stroke-width="4" paint-order="stroke"></text></svg>
<div class="side row" style="margin:10px 0"></div>
<label for="sl" class="muted small">${c.sliderLabel || `Yaklaşma aralığı <b>|${c.varName} − ${String(c.a).replace(".", ",")}|</b> (sağa çek: küçülsün)`}</label>
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
      const tl = host.querySelector("#ptl"), tx = +pt.getAttribute("cx"), ty = +pt.getAttribute("cy");
      tl.textContent = c.varName + " = " + fmt(x) + " → " + fmt(y); tl.setAttribute("text-anchor", tx > W - 190 ? "end" : "start"); tl.setAttribute("x", tx > W - 190 ? tx - 14 : tx + 14); tl.setAttribute("y", Math.max(P + 14, ty - 14));
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
    const c = step.cfg, R = 100, cx = 140, cy = 150, wx = 340, ww = 270;
    const rad = d => d * Math.PI / 180;
    const EX = [[0, "0"], [0.5, "1/2"], [Math.SQRT1_2, "√2/2"], [Math.sqrt(3) / 2, "√3/2"], [1, "1"]];
    const lab = v => { const a = Math.abs(v), m = EX.find(e => Math.abs(e[0] - a) < 1e-9); return m ? (v < 0 && a > 1e-9 ? "−" : "") + m[1] : (+v.toFixed(3)).toString().replace(".", ",").replace("-", "−"); };
    const WX = d => wx + d / 360 * ww, WY = v => cy - R * v;
    const path = fn => { let s = ""; for (let d = 0; d <= 360; d += 3) s += (d ? "L" : "M") + WX(d).toFixed(1) + " " + WY(fn(rad(d))).toFixed(1); return s; };
    let mode = c.wave === "cos" ? "cos" : c.wave === "both" ? "both" : "sin";
    const ticks = [1, EX[3][0], EX[2][0], 0.5, 0, -0.5, -EX[2][0], -EX[3][0], -1];
    host.innerHTML = `<p>${step.intro}</p><div class="lab">
<div class="side row" style="margin:0 0 10px"><span class="muted">Eğri:</span><button class="btn ghost" data-w="sin" type="button">Sinüs</button><button class="btn ghost" data-w="cos" type="button">Kosinüs</button><button class="btn ghost" data-w="both" type="button">İkisi birden</button></div>
<svg viewBox="0 0 640 310" role="img" aria-label="${esc(step.title)}">
<circle cx="${cx}" cy="${cy}" r="${R}" fill="none" stroke="var(--line)" stroke-width="2"/>
<line class="ax" x1="${cx - R - 14}" y1="${cy}" x2="${cx + R + 14}" y2="${cy}"/><line class="ax" x1="${cx}" y1="${cy - R - 14}" x2="${cx}" y2="${cy + R + 14}"/>
<text x="${cx + R + 16}" y="${cy - 6}" fill="var(--muted)" font-size="15">1</text><text x="${cx - R - 30}" y="${cy - 6}" fill="var(--muted)" font-size="15">−1</text>
<g stroke="var(--line)" stroke-width="1" stroke-dasharray="2 5">${ticks.map(t => `<line x1="${wx}" y1="${WY(t)}" x2="${wx + ww}" y2="${WY(t)}"/>`).join("")}</g>
<line class="ax" x1="${wx}" y1="${cy}" x2="${wx + ww + 8}" y2="${cy}"/><line class="ax" x1="${wx}" y1="${cy - R - 14}" x2="${wx}" y2="${cy + R + 14}"/>
<g fill="var(--muted)" font-size="13" text-anchor="end">${ticks.map(t => `<text x="${wx - 6}" y="${WY(t) + 4}">${lab(t)}</text>`).join("")}</g>
<g fill="var(--muted)" font-size="14" text-anchor="middle">${[90, 180, 270, 360].map(d => `<text x="${WX(d)}" y="${cy + R + 32}">${d}°</text>`).join("")}</g>
<path id="gs" d="${path(Math.sin)}" fill="none" stroke="var(--accent)" stroke-opacity=".22" stroke-width="2"/><path id="gc" d="${path(Math.cos)}" fill="none" stroke="var(--cyan)" stroke-opacity=".28" stroke-width="2"/>
<path id="ts" fill="none" stroke="var(--accent)" stroke-width="3.5"/><path id="tc" fill="none" stroke="var(--cyan)" stroke-width="3.5"/>
<g id="mk"></g>
<line id="guide" stroke="var(--accent)" stroke-dasharray="3 5" stroke-width="1.5"/>
<line id="rl" stroke="var(--ink)" stroke-width="2.5"/>
<line id="cv" stroke="var(--cyan)" stroke-width="5" stroke-linecap="round"/><line id="sv" stroke="var(--accent)" stroke-width="5" stroke-linecap="round"/>
<circle id="pt" r="8" fill="var(--ink)"/><circle id="wd" r="6.5" fill="var(--accent)"/><circle id="wc" r="6.5" fill="var(--cyan)"/>
<text id="ls" font-size="17" font-weight="700" fill="var(--accent)" stroke="var(--card2)" stroke-width="4" paint-order="stroke"></text><text id="lc" font-size="17" font-weight="700" fill="var(--cyan)" stroke="var(--card2)" stroke-width="4" paint-order="stroke"></text></svg>
<div class="side row" style="margin:10px 0">${(c.snaps || []).map(a => `<button class="btn ghost" data-a="${a}" type="button">${a}°</button>`).join("")}</div>
<label for="sl" class="muted small">Açı: kabini döndür</label><input id="sl" type="range" min="0" max="360" step="1" value="${c.start || 0}" aria-label="Açı">
<div class="readout"><span>açı = <b id="av">0°</b></span><span style="color:var(--cyan)">cos (yatay) = <b id="cvl" style="color:var(--cyan)">–</b></span><span>sin (yükseklik) = <b id="svl">–</b></span></div>
<table><thead><tr><th>açı</th><th>cos</th><th>sin</th></tr></thead><tbody id="tb"></tbody></table></div>`;
    const q = s => host.querySelector(s), sl = q("#sl"), tb = q("#tb"), mk = q("#mk"), seen = {}, set = (e, o) => { for (const k in o) e.setAttribute(k, o[k]); };
    const NS = "http://www.w3.org/2000/svg";
    function view() {
      const S1 = mode !== "cos", C1 = mode !== "sin", sh = (id, on) => { q(id).style.display = on ? "" : "none"; };
      sh("#gs", S1); sh("#ts", S1); sh("#wd", S1); sh("#ls", S1); sh("#sv", S1); sh("#guide", S1);
      sh("#gc", C1); sh("#tc", C1); sh("#wc", C1); sh("#lc", C1); sh("#cv", C1);
      mk.querySelectorAll("[data-k]").forEach(e => { e.style.display = (e.dataset.k === "sin" ? S1 : C1) ? "" : "none"; });
      host.querySelectorAll("[data-w]").forEach(b => { b.style.borderColor = b.dataset.w === mode ? "var(--accent)" : ""; });
    }
    function mark(d, v, kind, color) {
      const t = document.createElementNS(NS, "text"), o = document.createElementNS(NS, "circle");
      set(o, { cx: WX(d), cy: WY(v), r: 4.5, fill: color, "data-k": kind }); mk.appendChild(o);
      set(t, { x: WX(d), y: WY(v) + (v >= 0 ? -9 : 20), "text-anchor": "middle", "font-size": 13, "font-weight": 700, fill: color, stroke: "var(--card2)", "stroke-width": 3, "paint-order": "stroke", "data-k": kind }); t.textContent = lab(v); mk.appendChild(t);
    }
    function upd() {
      const d = +sl.value, co = Math.cos(rad(d)), si = Math.sin(rad(d)), px = cx + R * co, py = cy - R * si;
      set(q("#rl"), { x1: cx, y1: cy, x2: px, y2: py }); set(q("#pt"), { cx: px, cy: py });
      set(q("#sv"), { x1: px, y1: cy, x2: px, y2: py }); set(q("#cv"), { x1: cx, y1: cy + 0.01, x2: px, y2: cy + 0.01 });
      let ds = "", dc = ""; for (let a = 0; a <= d; a += 3) { ds += (a ? "L" : "M") + WX(a).toFixed(1) + " " + WY(Math.sin(rad(a))).toFixed(1); dc += (a ? "L" : "M") + WX(a).toFixed(1) + " " + WY(Math.cos(rad(a))).toFixed(1); }
      ds += "L" + WX(d).toFixed(1) + " " + WY(si).toFixed(1); dc += "L" + WX(d).toFixed(1) + " " + WY(co).toFixed(1);
      set(q("#ts"), { d: ds }); set(q("#tc"), { d: dc });
      set(q("#wc"), { cx: WX(d), cy: WY(co) }); set(q("#wd"), { cx: WX(d), cy: WY(si) }); set(q("#guide"), { x1: px, y1: py, x2: WX(d), y2: WY(si) });
      const end = WX(d) > wx + ww - 120, ax = end ? "end" : "start", lx = WX(d) + (end ? -12 : 12);
      const ls = q("#ls"), lc = q("#lc"); ls.textContent = "sin " + d + "° = " + lab(si); lc.textContent = "cos " + d + "° = " + lab(co);
      set(ls, { x: lx, y: WY(si) - 12, "text-anchor": ax }); set(lc, { x: lx, y: WY(co) + (mode === "both" && Math.abs(co - si) < 0.35 ? 26 : -12), "text-anchor": ax });
      q("#av").textContent = d + "°"; q("#cvl").textContent = lab(co); q("#svl").textContent = lab(si);
      if ((d % 30 === 0 || d % 45 === 0) && !seen[d]) {
        seen[d] = 1; const rows = [...tb.children]; const tr = el("tr", { "data-d": d }, `<td>${d}°</td><td>${lab(co)}</td><td>${lab(si)}</td>`); tb.insertBefore(tr, rows.find(r => +r.dataset.d > d) || null);
        mark(d, si, "sin", "var(--accent)"); mark(d, co, "cos", "var(--cyan)"); view();
      }
    }
    sl.addEventListener("input", upd);
    host.addEventListener("click", e => { const w = e.target.closest("[data-w]"); if (w) { mode = w.dataset.w; view(); upd(); return; } const b = e.target.closest("[data-a]"); if (b) { sl.value = b.dataset.a; upd(); } });
    view(); upd();
  }


  /* ---------- saçılım grafiği keşfi: iki niceliksel değişken, eğilim doğrusu, ilişki katsayısı r ---------- */
  function scatterLab(step, host) {
    const c = step.cfg, W = 640, H = 360, PL = 56, PR = 20, PT = 26, PB = 52;
    const sets = c.sets.map(s => ({ title: s.title, xt: s.xt, yt: s.yt, note: s.note, x: s.x.slice(), y: s.y.slice(), y0: s.y.slice(), g: s.g ? s.g.slice() : null, gn: s.gn }));
    let cur = 0;
    const f = (v, d) => (+v.toFixed(d == null ? 2 : d)).toString().replace(".", ",").replace("-", "−");
    const nice = raw => { const p = Math.pow(10, Math.floor(Math.log10(raw))), m = raw / p; return (m <= 1 ? 1 : m <= 2 ? 2 : m <= 2.5 ? 2.5 : m <= 5 ? 5 : 10) * p; };
    host.innerHTML = `<p>${step.intro}</p><div class="lab">
<div class="side row" style="margin:0 0 10px">${sets.map((s, i) => `<button class="btn ghost" data-d="${i}" type="button">${esc(s.title)}</button>`).join("")}</div>
<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(step.title)}"><g id="gr"></g></svg>
<div class="row" style="margin:10px 0"><label style="display:${c.noline ? "none" : "flex"};gap:8px;align-items:center;min-height:44px"><input type="checkbox" id="ln" style="width:22px;height:22px"> Eğilim doğrusunu göster</label><label style="display:${c.quad ? "flex" : "none"};gap:8px;align-items:center;min-height:44px"><input type="checkbox" id="qd" style="width:22px;height:22px"> Bölgelere ayır (ortalama çizgileriyle)</label><label id="gw" style="display:none;gap:8px;align-items:center;min-height:44px"><input type="checkbox" id="gp" style="width:22px;height:22px"> Grupları renkle ayır</label></div>
${c.outlier ? `<label for="ol" class="muted small">Son noktayı (halkalı) yukarı–aşağı oynat</label><input id="ol" type="range" min="0" max="100" value="50" aria-label="Son noktayı oynat">` : ""}
<div class="readout"><span>r = <b id="rv">–</b></span><span id="rd" class="muted small"></span></div>
<p class="small" id="eq" style="margin:4px 0"></p><p class="muted small" id="nt"></p></div>`;
    const q = s => host.querySelector(s), ns = "http://www.w3.org/2000/svg";
    function stats(d) {
      const n = d.x.length, mx = d.x.reduce((a, b) => a + b, 0) / n, my = d.y.reduce((a, b) => a + b, 0) / n;
      let sxx = 0, syy = 0, sxy = 0; for (let i = 0; i < n; i++) { sxx += (d.x[i] - mx) ** 2; syy += (d.y[i] - my) ** 2; sxy += (d.x[i] - mx) * (d.y[i] - my); }
      const a = sxy / sxx; return { r: sxy / Math.sqrt(sxx * syy), a, b: my - a * mx };
    }
    function draw() {
      const d = sets[cur], st = stats(d), g = q("#gr"), line = q("#ln").checked, grp = !!(d.g && q("#gp").checked); q("#gw").style.display = d.g ? "flex" : "none";
      const ex = Math.min(...d.x), Ex = Math.max(...d.x), ey = Math.min(...d.y0), Ey = Math.max(...d.y0);
      const xmin = ex - (Ex - ex) * 0.08, xmax = Ex + (Ex - ex) * 0.08, ymin = ey - (Ey - ey) * 0.12, ymax = Ey + (Ey - ey) * 0.12;
      const X = v => PL + (v - xmin) / (xmax - xmin) * (W - PL - PR), Y = v => H - PB - (v - ymin) / (ymax - ymin) * (H - PB - PT);
      let h = "";
      const sx = nice((xmax - xmin) / 6), sy = nice((ymax - ymin) / 5);
      for (let v = Math.ceil(xmin / sx) * sx; v <= xmax; v += sx) h += `<line stroke="var(--line)" x1="${X(v)}" y1="${PT}" x2="${X(v)}" y2="${H - PB}"/><text x="${X(v)}" y="${H - PB + 20}" text-anchor="middle" fill="var(--muted)" font-size="15">${f(v, 1)}</text>`;
      for (let v = Math.ceil(ymin / sy) * sy; v <= ymax; v += sy) h += `<line stroke="var(--line)" x1="${PL}" y1="${Y(v)}" x2="${W - PR}" y2="${Y(v)}"/><text x="${PL - 8}" y="${Y(v) + 5}" text-anchor="end" fill="var(--muted)" font-size="15">${f(v, 1)}</text>`;
      h += `<line class="ax" x1="${PL}" y1="${H - PB}" x2="${W - PR}" y2="${H - PB}"/><line class="ax" x1="${PL}" y1="${PT}" x2="${PL}" y2="${H - PB}"/>`;
      h += `<text x="${(PL + W - PR) / 2}" y="${H - 8}" text-anchor="middle" fill="var(--ink)" font-size="16" font-weight="700">${esc(d.xt)} →</text><text x="${PL}" y="16" fill="var(--ink)" font-size="16" font-weight="700">↑ ${esc(d.yt)}</text>`;
      const gcol = ["var(--accent)", "var(--cyan)"], gst = [];
      if (grp) { for (let k = 0; k < 2; k++) { const sub = { x: [], y: [] }; d.x.forEach((xv, i) => { if (d.g[i] === k) { sub.x.push(xv); sub.y.push(d.y[i]); } }); gst.push({ st: stats(sub), x0: Math.min(...sub.x), x1: Math.max(...sub.x) }); } }
      if (line && !grp) h += `<line x1="${X(xmin)}" y1="${Y(st.a * xmin + st.b)}" x2="${X(xmax)}" y2="${Y(st.a * xmax + st.b)}" stroke="var(--good)" stroke-width="3" stroke-dasharray="7 5"/>`;
      if (line && grp) gst.forEach((o, k) => { h += `<line x1="${X(o.x0)}" y1="${Y(o.st.a * o.x0 + o.st.b)}" x2="${X(o.x1)}" y2="${Y(o.st.a * o.x1 + o.st.b)}" stroke="${gcol[k]}" stroke-width="3.5"/>`; });
      const qon = !!(c.quad && q("#qd").checked); let qinfo = "";
      if (qon) {
        const n = d.x.length, mxv = d.x.reduce((p, v) => p + v, 0) / n, myv = d.y.reduce((p, v) => p + v, 0) / n; let ru = 0, lu = 0, ll = 0, rl = 0;
        d.x.forEach((xv, i) => { const dx = xv - mxv, dy = d.y[i] - myv; if (dx > 0 && dy > 0) ru++; else if (dx < 0 && dy > 0) lu++; else if (dx < 0 && dy < 0) ll++; else if (dx > 0 && dy < 0) rl++; });
        h += `<line x1="${X(mxv)}" y1="${PT}" x2="${X(mxv)}" y2="${H - PB}" stroke="var(--good)" stroke-width="2.5" stroke-dasharray="6 5"/><line x1="${PL}" y1="${Y(myv)}" x2="${W - PR}" y2="${Y(myv)}" stroke="var(--good)" stroke-width="2.5" stroke-dasharray="6 5"/>`;
        h += `<text x="${W - PR - 6}" y="${PT + 18}" text-anchor="end" fill="var(--good)" font-size="20" font-weight="800">${ru}</text><text x="${PL + 8}" y="${PT + 18}" fill="var(--bad)" font-size="20" font-weight="800">${lu}</text><text x="${PL + 8}" y="${H - PB - 8}" fill="var(--good)" font-size="20" font-weight="800">${ll}</text><text x="${W - PR - 6}" y="${H - PB - 8}" text-anchor="end" fill="var(--bad)" font-size="20" font-weight="800">${rl}</text>`;
        const same = ru + ll, opp = lu + rl, tot = same + opp;
        qinfo = `Sağ üst + sol alt: <b>${same}</b> nokta · Sol üst + sağ alt: <b>${opp}</b> nokta` + (tot ? ` · aynı yönlü bölgelerdeki oran: <b>${same}/${tot}</b>` : "");
      }
      d.x.forEach((xv, i) => { const last = c.outlier && i === d.x.length - 1; h += `<circle cx="${X(xv)}" cy="${Y(d.y[i])}" r="${last ? 9 : 7}" fill="${last ? "var(--bad)" : grp ? gcol[d.g[i]] : "var(--accent)"}" ${last ? 'stroke="var(--ink)" stroke-width="3"' : ""}/>`; });
      g.innerHTML = h;
      const r = st.r, ar = Math.abs(r), s = ar < 0.2 ? "yok denecek kadar zayıf" : (ar < 0.5 ? "zayıf" : ar < 0.8 ? "orta düzeyde" : "güçlü") + (r > 0 ? ", aynı yönlü (pozitif)" : ", ters yönlü (negatif)");
      q("#rv").textContent = f(r, 2); q("#rd").textContent = grp ? "→ tüm veri birlikte: " + s : "→ doğrusal ilişki " + s;
      if (grp) q("#eq").innerHTML = gst.map((o, k) => `<span style="color:${gcol[k]};font-weight:700">${esc((d.gn || ["Grup 1", "Grup 2"])[k])}: r = ${f(o.st.r, 2)}, eğim ${f(o.st.a, 2)}</span>`).join(" &nbsp; ");
      else q("#eq").innerHTML = line ? `Eğilim doğrusu: <b>y ≈ ${f(st.a, 2)}·x ${st.b < 0 ? "−" : "+"} ${f(Math.abs(st.b), 1)}</b> (x'in 1 birim artışında y'nin tahmini değişimi ${f(st.a, 2)})` : "";
      if (qinfo) q("#eq").innerHTML = (q("#eq").innerHTML ? q("#eq").innerHTML + "<br>" : "") + qinfo;
      q("#nt").textContent = d.note || "";
      host.querySelectorAll("[data-d]").forEach(b => { b.style.borderColor = +b.dataset.d === cur ? "var(--accent)" : ""; });
    }
    host.addEventListener("click", e => { const b = e.target.closest("[data-d]"); if (b) { cur = +b.dataset.d; sets[cur].y = sets[cur].y0.slice(); syncOl(); draw(); } });
    q("#ln").addEventListener("change", draw); q("#gp").addEventListener("change", draw); q("#qd").addEventListener("change", draw);
    const ol = q("#ol");
    function syncOl() { if (!ol) return; const d = sets[cur], lo = Math.min(...d.y0), hi = Math.max(...d.y0), span = hi - lo; ol.value = Math.round((d.y0[d.y0.length - 1] - (lo - span * 0.6)) / (span * 2.2) * 100); }
    syncOl();
    if (ol) ol.addEventListener("input", () => { const d = sets[cur], lo = Math.min(...d.y0), hi = Math.max(...d.y0), span = hi - lo; d.y[d.y.length - 1] = lo - span * 0.6 + (+ol.value / 100) * span * 2.2; draw(); });
    draw();
  }


  /* ---------- çubuk grafik keşfi: dikey eksenin başlangıcı grafiği nasıl değiştirir? ---------- */
  function barLab(step, host) {
    const c = step.cfg, W = 640, H = 340, PL = 60, PR = 20, PT = 30, PB = 56;
    const f = v => (+v.toFixed(2)).toString().replace(".", ",");
    const mn = Math.min(...c.bars.map(b => b.v)), mx = Math.max(...c.bars.map(b => b.v)), top = c.top || Math.ceil(mx * 1.05);
    const maxBase = Math.floor(mn * 0.96);
    host.innerHTML = `<p>${step.intro}</p><div class="lab"><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(step.title)}"><g id="gr"></g></svg>
<label for="sl" class="muted small">Dikey eksenin başlangıç değeri (sağa çek: eksen yukarıdan başlasın)</label><input id="sl" type="range" min="0" max="${maxBase}" step="1" value="0" aria-label="Eksen başlangıcı">
<div class="readout"><span>eksen: <b id="b0">0</b> ile ${top} arası</span></div><p id="cmp" style="margin:6px 0"></p></div>`;
    const q = s => host.querySelector(s), sl = q("#sl");
    function draw() {
      const base = +sl.value, Y = v => H - PB - (v - base) / (top - base) * (H - PB - PT), bw = (W - PL - PR) / c.bars.length;
      let h = "", st = Math.max(1, Math.round((top - base) / 5));
      for (let v = Math.ceil(base / st) * st; v <= top; v += st) h += `<line stroke="var(--line)" x1="${PL}" y1="${Y(v)}" x2="${W - PR}" y2="${Y(v)}"/><text x="${PL - 8}" y="${Y(v) + 5}" text-anchor="end" fill="var(--muted)" font-size="16">${v}</text>`;
      h += `<line class="ax" x1="${PL}" y1="${PT}" x2="${PL}" y2="${H - PB}"/><line class="ax" x1="${PL}" y1="${H - PB}" x2="${W - PR}" y2="${H - PB}"/><text x="${PL}" y="18" fill="var(--ink)" font-size="16" font-weight="700">↑ ${esc(c.yt)}</text>`;
      c.bars.forEach((b, i) => { const x = PL + bw * i + bw * 0.2, w = bw * 0.6, y = Y(b.v); h += `<rect x="${x}" y="${y}" width="${w}" height="${H - PB - y}" rx="4" fill="${i ? "var(--cyan)" : "var(--accent)"}"/><text x="${x + w / 2}" y="${y - 8}" text-anchor="middle" fill="var(--ink)" font-size="18" font-weight="700">${b.v}</text><text x="${x + w / 2}" y="${H - PB + 26}" text-anchor="middle" fill="var(--ink)" font-size="16">${esc(b.n)}</text>`; });
      q("#gr").innerHTML = h; q("#b0").textContent = base;
      const a = c.bars[0].v, b2 = c.bars[1].v, vis = (b2 - base) / (a - base), real = b2 / a;
      q("#cmp").innerHTML = `Gerçekte ${esc(c.bars[1].n)} değeri, ${esc(c.bars[0].n)} değerinin <b>${f(real)} katı</b> (fark %${f((real - 1) * 100)}). Grafikte ise ${esc(c.bars[1].n)} çubuğu <b>${f(vis)} kat</b> uzun görünüyor.`;
    }
    sl.addEventListener("input", draw); draw();
  }


  /* ---------- çokgen keşfi: n kenarlı düzgün çokgen, üçgenleme, açılar, köşegenler ---------- */
  function polygonLab(step, host) {
    const c = step.cfg, W = 640, H = 330, cx = 190, cy = 165, R = 130;
    const f = v => (+v.toFixed(2)).toString().replace(".", ",");
    host.innerHTML = `<p>${step.intro}</p><div class="lab"><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(step.title)}"><g id="pg"></g><g id="tx" fill="var(--ink)" font-size="19"></g></svg>
<div class="row" style="gap:16px;flex-wrap:wrap;margin:8px 0"><label style="display:flex;gap:8px;align-items:center;min-height:44px"><input type="checkbox" id="m1" checked style="width:22px;height:22px"> Bir köşeden köşegenler (üçgenleme)</label><label style="display:flex;gap:8px;align-items:center;min-height:44px"><input type="checkbox" id="m2" style="width:22px;height:22px"> Tüm köşegenler</label></div>
<label for="sl" class="muted small">Kenar sayısı n</label><input id="sl" type="range" min="3" max="12" step="1" value="${c.start || 5}" aria-label="Kenar sayısı">
<table><thead><tr><th>n</th><th>Üçgen sayısı (n − 2)</th><th>İç açılar toplamı</th><th>Düzgünse 1 iç açı</th><th>1 dış açı</th><th>Köşegen sayısı</th></tr></thead><tbody><tr id="rw"></tr></tbody></table></div>`;
    const q = s => host.querySelector(s), sl = q("#sl"), ns = "http://www.w3.org/2000/svg";
    function draw() {
      const n = +sl.value, pts = []; for (let i = 0; i < n; i++) { const a = -Math.PI / 2 + 2 * Math.PI * i / n; pts.push([cx + R * Math.cos(a), cy + R * Math.sin(a)]); }
      const P = i => pts[i].map(v => v.toFixed(1)).join(","); let h = "";
      const cols = ["color-mix(in srgb, var(--accent) 35%, transparent)", "color-mix(in srgb, var(--cyan) 30%, transparent)"];
      if (q("#m1").checked) for (let i = 1; i < n - 1; i++) h += `<polygon points="${P(0)} ${P(i)} ${P(i + 1)}" fill="${cols[i % 2]}" stroke="none"/>`;
      if (q("#m2").checked) for (let i = 0; i < n; i++) for (let j = i + 2; j < n; j++) { if (i === 0 && j === n - 1) continue; h += `<line x1="${pts[i][0]}" y1="${pts[i][1]}" x2="${pts[j][0]}" y2="${pts[j][1]}" stroke="var(--muted)" stroke-width="1.2"/>`; }
      if (q("#m1").checked) for (let i = 2; i < n - 1; i++) h += `<line x1="${pts[0][0]}" y1="${pts[0][1]}" x2="${pts[i][0]}" y2="${pts[i][1]}" stroke="var(--accent)" stroke-width="2.5"/>`;
      h += `<polygon points="${pts.map((p, i) => P(i)).join(" ")}" fill="none" stroke="var(--ink)" stroke-width="3"/>` + pts.map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="5" fill="var(--ink)"/>`).join("");
      q("#pg").innerHTML = h;
      const sum = (n - 2) * 180, diag = n * (n - 3) / 2;
      q("#tx").innerHTML = `<text x="370" y="60" font-weight="700">n = ${n}</text><text x="370" y="96">Üçgen sayısı: ${n - 2}</text><text x="370" y="132">İç açılar toplamı: ${n - 2} · 180° = ${sum}°</text><text x="370" y="168">Düzgün çokgende iç açı: ${f(sum / n)}°</text><text x="370" y="204">Dış açı: 360° ÷ ${n} = ${f(360 / n)}°</text><text x="370" y="240">Köşegen: ${n} · ${n - 3} ÷ 2 = ${diag}</text><text x="370" y="276" fill="var(--muted)" font-size="15">Bir köşeden ${n - 3} köşegen çizilir</text>`;
      q("#rw").innerHTML = `<td>${n}</td><td>${n - 2}</td><td>${sum}°</td><td>${f(sum / n)}°</td><td>${f(360 / n)}°</td><td>${diag}</td>`;
    }
    sl.addEventListener("input", draw); q("#m1").addEventListener("change", draw); q("#m2").addEventListener("change", draw); draw();
  }


  /* ---------- genel simülasyon: kaydırıcılar + hesaplanan çıktılar + isteğe bağlı SVG (tüm dersler için) ---------- */
  function simLab(step, host) {
    const c = step.cfg, vb = c.vb || "0 0 640 280";
    host.innerHTML = `<p>${step.intro}</p><div class="lab">${c.svg ? `<svg viewBox="${vb}" role="img" aria-label="${esc(step.title)}"><g id="sg"></g></svg>` : ""}
${c.vars.map(v => `<div style="margin-top:8px"><label for="v_${v.k}" class="muted small">${v.label}: <b id="o_${v.k}"></b></label><input id="v_${v.k}" type="range" min="${v.min}" max="${v.max}" step="${v.step || 1}" value="${v.value}" aria-label="${esc(v.label)}"></div>`).join("")}
<div class="readout" style="flex-direction:column;gap:4px">${c.out.map((o, i) => `<span>${o.label} = <b id="r_${i}">–</b></span>`).join("")}</div></div>`;
    const q = s => host.querySelector(s);
    function upd() {
      const v = {}; c.vars.forEach(x => { v[x.k] = +q("#v_" + x.k).value; q("#o_" + x.k).textContent = String(v[x.k]).replace(".", ",") + (x.unit ? " " + x.unit : ""); });
      c.out.forEach((o, i) => { q("#r_" + i).textContent = o.fn(v); });
      if (c.svg) q("#sg").innerHTML = c.svg(v);
    }
    host.addEventListener("input", upd); upd();
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


  /* ---------- etkileşimli adım kaydı: yeni bir laboratuvar türü YALNIZCA buraya eklenir ---------- */
  const LABS = { explorer: explorer, circle: circleLab, expo: expoLab, scatter: scatterLab, bar: barLab, polygon: polygonLab, sim: simLab };
  function mountStep(st, c) {
    if (st.type === "text") c.innerHTML = `<h3>${st.title}</h3><div class="body">${st.html}</div>`;
    else if (LABS[st.type]) LABS[st.type](st, c);
  }

  /* ---------- ders akışı ---------- */
  function renderLesson(L, i) {
    i = Math.max(0, Math.min(L.steps.length - 1, i));
    if (S.pickSubj !== L.subject) setSubject(L.subject);
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
    } else if (LABS[st.type]) {
      host.innerHTML = `<h2>${st.title}</h2>${ttsBtn(st.say)}<div id="ex" style="margin-top:12px"></div>`; LABS[st.type](st, host.querySelector("#ex")); navBtns(true);
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
  function dayRecordLesson(st, ok) { /* ders içi sorular günlük hedefe sayılmaz; yalnızca konu anlatımı akışıdır */ }

  /* ---------- soru bileşenleri ---------- */
  /* Öğrenmeyi öğrenmek: yanlıştan sonra öğrenci hatasının TÜRÜNÜ seçer; profilde hangi tür hatayı sık yaptığı görünür. */
  const ERR = { okuma: ["Soruyu yanlış okudum", "Soruyu yavaş oku; neyin istendiğinin altını çiz ve kendi cümlenle tekrar et."], kavram: ["Kavramı bilmiyordum", "Konu anlatımına dön; kavramı kendi cümlenle yaz ve bir örnek üret."], islem: ["İşlem hatası yaptım", "İşlemleri alt alta, adım adım yaz; sonucu yerine koyarak kontrol et."], acele: ["Acele ettim / dikkatsizlik", "İşaretlemeden önce 5 saniye dur: 'Bu cevap mantıklı mı?' diye sor."] };
  const errChips = id => `<div class="errbox" data-q="${esc(id)}"><span class="muted small">Düşünce nerede kaydı? (Kendine not al)</span><div class="row" style="gap:6px;flex-wrap:wrap;margin-top:6px">${Object.keys(ERR).map(k => `<button class="btn ghost" data-err="${k}" type="button">${ERR[k][0]}</button>`).join("")}</div><p class="small errtip" role="status"></p></div>`;
  document.addEventListener("click", e => {
    const b = e.target.closest("[data-err]"); if (!b) return;
    const box = b.closest(".errbox"), k = b.dataset.err;
    S.errs = S.errs || {}; S.errs[k] = (S.errs[k] || 0) + 1; save();
    box.querySelectorAll("[data-err]").forEach(x => { x.disabled = true; x.classList.toggle("ghost", x !== b); });
    box.querySelector(".errtip").textContent = "Not alındı. İpucu: " + ERR[k][1];
  });
  const THINK = ["Anla: Ne soruluyor? Neler verilmiş? Soruyu kendi cümlenle anlat.", "Planla: Buna benzer bir şey çözdün mü? Şekil ya da tablo çizebilir misin? Küçük bir örnek dene.", "Uygula: Adımları sırayla ve yazarak ilerle.", "Kontrol et: Sonuç mantıklı mı? Başka bir yoldan da bulur muydun?"];
  const solHtml = (q, open) => (q.think ? `<p class="callout" style="margin-top:12px"><b>🧭 Nasıl düşünmeliyiz?</b> ${esc(q.think)}</p>` : "") + (Array.isArray(q.solution) && q.solution.length ? `<details class="sol" ${open ? "open" : ""}><summary><b>🧩 Adım adım çözüm</b></summary><ol class="body">${q.solution.map(x => `<li>${esc(x)}</li>`).join("")}</ol></details>` : "");
  const thinkGuide = () => `<details class="sol"><summary>🧭 Takıldığında kendine sor</summary><ol class="body">${THINK.map(x => `<li>${esc(x)}</li>`).join("")}</ol></details>`;
  /* Konu anlatımı: soruya bağlı ders adımı. Günlük sorularda K.help'ten, ders içi sorularda en yakın önceki anlatım/konu anlatımı adımından. */
  function topicOf(q, hlp, extra) {
    if (hlp && hlp.topic && K.lessons[hlp.topic.lesson]) return { L: K.lessons[hlp.topic.lesson], i: hlp.topic.step };
    const mt = K.meta && K.meta[q.id]; if (mt && mt.s11 && K.topicNotes && K.topicNotes[mt.s11]) return { note: K.topicNotes[mt.s11], title: "11. sınıf " + mt.s11 + " " + (s11Title(mt.s11) || "") };
    if (extra && extra.L) for (let j = extra.i - 1; j >= 0; j--) if (extra.L.steps[j].type === "text" || LABS[extra.L.steps[j].type]) return { L: extra.L, i: j };
    return null;
  }
  function question(host, q, done, inLesson, extra) {
    if (q.type === "open") return openQuestion(host, q, done, inLesson, extra);
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
      else if (b.dataset.h === "topic" && tp.note) { hp.innerHTML = `<div class="fb topic"><b>📖 Konu özeti</b> <span class="muted small">(${esc(tp.title)})</span><div class="body" style="margin-top:10px">${tp.note}</div></div>`; hp.scrollIntoView({ block: "nearest", behavior: "smooth" }); }
      else if (b.dataset.h === "topic") {
        hp.innerHTML = `<div class="fb topic"><b>📖 Konu anlatımı</b> <span class="muted small">(${esc(tp.L.title)})</span><div id="tpc" style="margin-top:10px"></div><p class="small" style="margin-top:12px"><a href="#/ders/${tp.L.id}/${tp.i}">Dersin bu adımını tam ekran aç →</a></p></div>`;
        const c = hp.querySelector("#tpc"), st = tp.L.steps[tp.i];
        mountStep(st, c);
        hp.scrollIntoView({ block: "nearest", behavior: "smooth" });
      } else if (b.dataset.h === "solve") {
        answered = true; const right = opts.find(x => x.ok);
        host.querySelectorAll(".opt").forEach((x, i) => { x.disabled = true; if (opts[i].ok) x.classList.add("ok"); });
        hb.style.display = "none"; hp.innerHTML = "";
        host.querySelector("#fb").innerHTML = `<div class="fb"><b>🧩 Adım adım çözüm</b><br>Doğru cevap: <b>${esc(right.t)}</b>.<br>${esc(right.why)}${Array.isArray(q.solution) ? solHtml(q, true) : typeof q.solution === "string" ? "<br>" + esc(q.solution) : ""}${q.explain ? `<br><br><span class="muted">${esc(q.explain)}</span>` : ""}</div>`;
        done(false);
      }
    });
    host.querySelector(".opts").addEventListener("click", e => {
      const b = e.target.closest(".opt"); if (!b || answered) return; answered = true; hb.style.display = "none"; hp.innerHTML = "";
      const o = opts[+b.dataset.i], ok = !!o.ok, secs = Math.round((Date.now() - t0) / 1000);
      host.querySelectorAll(".opt").forEach((x, i) => { x.disabled = true; if (opts[i].ok) x.classList.add("ok"); });
      if (!ok) b.classList.add("no");
      const right = opts.find(x => x.ok);
      host.querySelector("#fb").innerHTML = `<div class="fb">${ok ? `<b class="t-ok">Doğru, çünkü:</b> ` : `<b class="t-no">Bu seçenek birçok kişinin ilk aklına gelen yol. Neden tutmadığına bakalım:</b> `}${esc(o.why)}${ok ? "" : `<br><br><b>Doğru cevap:</b> ${esc(right.t)} — ${esc(right.why)}`}
${solHtml(q, !ok)}${ok ? "" : errChips(q.id || "")}${q.explain ? `<br><br><span class="muted">${esc(q.explain)}</span>` : ""}${S.exam && !inLesson ? `<div class="time">Süre: ${secs} sn</div>` : ""}</div>`;
      done(ok);
    });
  }
  /* Açık uçlu / kısa cevaplı soru (Maarif okul sınavı biçimi): öğrenci çözümünü yazar, kısa cevap(lar)ı girer;
     sistem kısa cevabı kontrol eder, örnek çözümü ve puanlama anahtarını gösterir, öğrenci kendini puanlar. */
  function openQuestion(host, q, done, inLesson, extra) {
    const hlp = (K.help && K.help[q.id]) || {}, tp = topicOf(q, hlp, extra), hintTxt = q.hint || hlp.hint || "";
    const ans = q.answers || [];
    const norm = v => String(v).toLowerCase().replace(/\s+/g, "").replace(/\*|·|×/g, "").replace(/kök/g, "√").replace(/cm²|cm2|cm|derece|°|adet|tane/g, "").replace(/,/g, ".");
    const same = (a, b) => { const x = norm(a), y = norm(b); if (x === y) return true; const nx = parseFloat(x), ny = parseFloat(y); return !isNaN(nx) && !isNaN(ny) && /^-?[\d.]+$/.test(x) && /^-?[\d.]+$/.test(y) && Math.abs(nx - ny) < 1e-9; };
    host.innerHTML = `<span class="eyebrow">Açık uçlu soru</span><div class="qtext" style="font:600 clamp(21px,3vw,28px)/1.45 var(--f-display)">${esc(q.q)}</div>
${thinkGuide()}<label class="muted small" for="wk" style="display:block;margin-top:12px">Çözümünü buraya yaz (puanlamada işlem basamakları da sayılır; yalnızca bu cihazda kalır).</label><textarea id="wk" rows="5"></textarea>
${ans.map((a, i) => `<div class="setrow" style="margin-top:8px"><label class="muted small" for="an${i}" style="min-width:140px">${esc(a.label)}</label><input id="an${i}" type="text" autocomplete="off" aria-label="${esc(a.label)}" style="min-height:44px;border-radius:12px;border:1.5px solid var(--line);background:var(--card2);color:var(--ink);padding:0 10px;font:inherit"></div>`).join("")}
<div class="helpbar" id="hb"><button class="btn" data-h="check" type="button">Kontrol et</button>${hintTxt ? '<button class="btn ghost" data-h="hint" type="button">💡 İpucu</button>' : ""}${tp ? '<button class="btn ghost" data-h="topic" type="button">📖 Konu özeti</button>' : ""}<button class="btn ghost" data-h="solve" type="button">🧩 Çözümü göster</button></div><div id="hp"></div><div id="fb"></div>`;
    const hb = host.querySelector("#hb"), hp = host.querySelector("#hp"), fb = host.querySelector("#fb"); let finished = false;
    function finish(vals, ok) {
      finished = true; hb.style.display = "none"; hp.innerHTML = "";
      const rows = ans.length ? `<ul class="body">${ans.map((a, i) => `<li>${esc(a.label)}: ${vals && vals[i] !== undefined && vals[i] !== null ? (same(vals[i], a.v) || (a.accept || []).some(x => same(vals[i], x)) ? `<b class="t-ok">${esc(vals[i])} ✓</b>` : `<b class="t-no">${esc(vals[i] || "(boş)")}</b> → doğrusu <b>${esc(a.v)}</b>`) : `doğrusu <b>${esc(a.v)}</b>`}</li>`).join("")}</ul>` : "";
      const rub = Array.isArray(q.rubric) && q.rubric.length ? `<div class="rub"><b>Puanlama anahtarı</b> <span class="muted small">(işaretle: çözümünde var mı?)</span>${q.rubric.map((r, i) => `<label style="display:flex;gap:10px;align-items:flex-start;min-height:44px;padding:6px 0"><input type="checkbox" data-r="${r[0]}" style="width:22px;height:22px;flex:none"><span>${esc(r[1])} <b>(${r[0]} p)</b></span></label>`).join("")}<p><b id="rsc">0</b> / ${q.rubric.reduce((a, r) => a + r[0], 0)} puan</p></div>` : "";
      fb.innerHTML = `<div class="fb"><b>${ok === true ? '<span class="t-ok">Kısa cevabın doğru.</span>' : ok === false ? '<span class="t-no">Kısa cevabın tutmadı.</span>' : "Çözüm"}</b>${rows}${solHtml(q, true)}${ok === false ? errChips(q.id) : ""}${rub}${q.explain ? `<p class="muted">${esc(q.explain)}</p>` : ""}</div>`;
      fb.querySelectorAll("[data-r]").forEach(c => c.onchange = () => { fb.querySelector("#rsc").textContent = [...fb.querySelectorAll("[data-r]:checked")].reduce((a, x) => a + (+x.dataset.r), 0); });
      done(ok === true);
    }
    hb.addEventListener("click", e => {
      const b = e.target.closest("[data-h]"); if (!b || finished) return;
      if (b.dataset.h === "hint") hp.innerHTML = `<div class="fb"><b>💡 İpucu:</b> ${esc(hintTxt)}</div>`;
      else if (b.dataset.h === "topic" && tp.note) hp.innerHTML = `<div class="fb topic"><b>📖 Konu özeti</b> <span class="muted small">(${esc(tp.title)})</span><div class="body" style="margin-top:10px">${tp.note}</div></div>`;
      else if (b.dataset.h === "topic") { hp.innerHTML = `<div class="fb topic"><b>📖 Konu anlatımı</b><div id="tpc" style="margin-top:10px"></div></div>`; const c = hp.querySelector("#tpc"), st = tp.L.steps[tp.i]; mountStep(st, c); }
      else if (b.dataset.h === "solve") finish(null, null);
      else if (b.dataset.h === "check") {
        if (!ans.length) { finish(null, null); return; }
        const vals = ans.map((a, i) => host.querySelector("#an" + i).value.trim());
        if (vals.some(v => !v)) { hp.innerHTML = `<div class="fb">Önce kısa cevap kutularını doldur ya da <b>Çözümü göster</b>'e bas.</div>`; return; }
        finish(vals, ans.every((a, i) => same(vals[i], a.v) || (a.accept || []).some(x => same(vals[i], x))));
      }
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
  function closeFS() { if (examTimer) { clearInterval(examTimer); examTimer = null; } if (fs) { fs.remove(); fs = null; document.body.style.overflow = ""; } }
  function pickDaily(onlyReview) {
    let pool = K.daily;
    if (S.pickSubj && S.pickSubj !== "all") pool = pool.filter(q => q.subject === S.pickSubj);
    if (onlyReview) pool = pool.filter(q => S.review.includes(q.id));
    const weighted = shuffle(pool).sort((a, b) => (S.review.includes(b.id) ? 1 : 0) - (S.review.includes(a.id) ? 1 : 0));
    return weighted.slice(0, Math.min(S.goal, weighted.length));
  }
  function startDaily() {
    const onlyReview = location.hash.indexOf("tekrar") > -1;
    const wasCustom = !!customSet, set = customSet || pickDaily(onlyReview), back = customBack; customSet = null; customBack = "#/";
    renderHome();
    if (!set.length) { $app.insertAdjacentHTML("afterbegin", `<p class="callout">Tekrar kutusu boş.</p>`); return; }
    document.body.style.overflow = "hidden";
    fs = el("div", { class: "fs", role: "dialog", "aria-modal": "true", "aria-label": "Günlük sorular" }); document.body.appendChild(fs);
    let i = 0, ok = 0;
    const step = () => {
      if (i >= set.length) {
        const r = dayRec();
        fs.innerHTML = `<div class="inner"><h1>Bugünkü tur bitti ✦</h1><p class="lede">${set.length} sorudan ${ok} tanesini ilk denemede doğru yaptın. Yanlışlar cezasız: tekrar kutusunda ikinci şansı bekliyor.</p>
<p>Bugün toplam ${r.n}/${S.goal} soru.</p><p><a class="btn" href="${wasCustom ? back : "#/"}">${wasCustom ? "Soru bankasına dön" : "Ana sayfaya dön"}</a></p></div>`; return;
      }
      const q = set[i];
      fs.innerHTML = `<div class="inner"><button class="btn ghost close tts" type="button" id="cl">Kapat ✕</button>
<div class="steps"><div class="meta"><span>${esc(K.subjects[q.subject].name)}</span><span>${i + 1}/${set.length}</span></div><div class="bar"><i style="width:${Math.round(i / set.length * 100)}%"></i></div></div><div id="qh"></div><div class="row" id="qn" style="margin-top:12px"></div></div>`;
      fs.querySelector("#cl").onclick = () => { location.hash = wasCustom ? back : "#/"; };
      question(fs.querySelector("#qh"), q, good => {
        const r = dayRec(); r.n++; if (good) { r.ok++; ok++; S.review = S.review.filter(x => x !== q.id); } else if (!S.review.includes(q.id)) S.review.push(q.id);
        const qq = (S.qs[q.id] = S.qs[q.id] || { n: 0, ok: 0 }); qq.n++; if (good) qq.ok++;
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
    $app.innerHTML = `<h1>Yol haritası</h1><p class="lede">Dokuz dersin tamamı var; ağırlık, sınavda en çok net getiren derslerde (matematik, Türkçe, edebiyat, sosyal). Rakamlar 2026-YKS kılavuzunun soru dağılımından (TYT 120 + AYT-EA 80 soru) çıkarılmıştır; kılavuz değişirse güncellenir.</p>
<div class="card" style="margin:18px 0"><table class="tbl"><thead><tr><th>Ders</th><th>Çalışma payı</th><th>Dayanak</th></tr></thead><tbody>${rows}</tbody></table></div>
<h2>Haftalık ritim</h2><div class="card"><table class="tbl"><tbody>${week}</tbody></table></div>
<p class="muted small" style="margin-top:14px">Her gün: bir ana konu anlatımı (≈25 dk) + günlük sorular. Yorgun günde yalnızca sorular da yeterli.</p>`;
  }
  function renderSettings() {
    $app.innerHTML = `<h1>Ayarlar</h1><div class="card"><h3>Günlük soru hedefi</h3><p class="muted small">Küçük hedef, düzenli devam eder.</p>
<div class="row">${[5, 10, 15, 20].map(n => `<button class="btn ${S.goal === n ? "" : "ghost"}" data-g="${n}" type="button">${n}</button>`).join("")}</div></div>
<div class="card" style="margin-top:16px"><h3>Sınav modu</h3><p class="muted small">Açıkken her sorunun sonunda harcadığın süre görünür. Geri sayım ve baskı yok; yalnızca bilgi.</p>
<button class="btn ${S.exam ? "" : "ghost"}" id="ex" type="button">${S.exam ? "Açık" : "Kapalı"}</button></div>
<div class="card" style="margin-top:16px"><h3>Görünüm (renk)</h3><p class="muted small">Sana yakışan rengi seç; yalnızca bu cihazda kalır.</p><div class="row">${[["turuncu", "Turuncu"], ["sari", "Sarı"], ["acik-yesil", "Açık yeşil"], ["ucuk-mavi", "Uçuk mavi"]].map(x => `<button class="btn ${(S.pal || "turuncu") === x[0] ? "" : "ghost"}" data-pal="${x[0]}" type="button">${x[1]}</button>`).join("")}</div></div>
${accountCard()}<div class="card" style="margin-top:16px"><h3>Verilerim</h3><p class="muted small">İlerleme ve notların bu tarayıcıda durur; giriş yaptıysan ayrıca hesabına eşitlenir. Bu düğme yalnızca bu cihazdaki verileri siler (sunucudakini yukarıdaki hesap kartından silersin):</p><button class="btn ghost" id="wipe" type="button">Tüm verileri sil</button></div>`;
    bindAccount();
    $app.querySelectorAll("[data-pal]").forEach(b => b.onclick = () => { S.pal = b.dataset.pal; document.documentElement.setAttribute("data-pal", S.pal); save(); renderSettings(); });
    $app.querySelectorAll("[data-g]").forEach(b => b.onclick = () => { S.goal = +b.dataset.g; save(); renderSettings(); });
    $app.querySelector("#ex").onclick = () => { S.exam = !S.exam; save(); renderSettings(); };
    $app.querySelector("#wipe").onclick = () => { if (confirm("Tüm ilerleme ve notlar silinsin mi?")) { S = blank(); save(); renderSettings(); } };
  }

  document.documentElement.setAttribute("data-pal", S.pal || "turuncu");
  buildBar(); setUser();
  if (K.sync && K.sync.user()) K.sync.pull().then(r => {
    if (r) { S = Object.assign(blank(), K.sync.merge(S, r)); try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} K.sync.push(S); buildBar(); setUser(); }
    route();
  });
  route();
})();
