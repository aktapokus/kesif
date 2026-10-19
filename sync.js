/* Aktapokus Keşif — isteğe bağlı hesap ve eşitleme (Supabase Auth e-posta bağlantısı + tek tablo).
   Hesap açmak şart değil: giriş yapılmazsa her şey yalnızca bu tarayıcıda kalır. Yalnızca yayımlanabilir (publishable) anahtar; gizli anahtar ASLA.
   Tablo ve politikalar: docs/kesif_schema.sql */
(function () {
  "use strict";
  var URL = "https://wtrkfzmmhabcpoipaccf.supabase.co", KEY = "sb_publishable_87EZgr1ftB1SnIY5FoDaKA_xmxlD7kU", SK = "kesif.session.v1";
  var K = (window.KESIF = window.KESIF || { lessons: {}, daily: [] });
  var sess = null, timer = null, status = "";
  try { sess = JSON.parse(localStorage.getItem(SK) || "null"); } catch (e) { sess = null; }
  function store(s) { sess = s; try { if (s) localStorage.setItem(SK, JSON.stringify(s)); else localStorage.removeItem(SK); } catch (e) {} }
  function jwt(t) { try { return JSON.parse(decodeURIComponent(escape(atob(t.split(".")[1].replace(/-/g, "+").replace(/_/g, "/"))))); } catch (e) { return {}; } }
  /* e-posta bağlantısı geri döndüğünde adres çubuğundaki #access_token=… kısmını oku ve temizle */
  (function () {
    if (!/access_token=/.test(location.hash)) return;
    var p = new URLSearchParams(location.hash.replace(/^#\/?/, "")), at = p.get("access_token"), rt = p.get("refresh_token");
    if (at && rt) { var c = jwt(at); store({ access_token: at, refresh_token: rt, expires_at: Math.floor(Date.now() / 1000) + (+p.get("expires_in") || 3600), sub: c.sub, email: c.email }); }
    history.replaceState(null, "", location.pathname + "#/ayarlar");
  })();
  function call(path, opt, token) {
    opt = opt || {};
    var h = { apikey: KEY, "Content-Type": "application/json", Authorization: "Bearer " + (token || KEY) };
    for (var k in (opt.headers || {})) h[k] = opt.headers[k];
    return fetch(URL + path, { method: opt.method || "GET", headers: h, body: opt.body });
  }
  async function token() {
    if (!sess) return null;
    if (sess.expires_at - 60 > Date.now() / 1000) return sess.access_token;
    try {
      var r = await call("/auth/v1/token?grant_type=refresh_token", { method: "POST", body: JSON.stringify({ refresh_token: sess.refresh_token }) });
      if (!r.ok) { store(null); return null; }
      var j = await r.json(), c = jwt(j.access_token);
      store({ access_token: j.access_token, refresh_token: j.refresh_token, expires_at: j.expires_at || Math.floor(Date.now() / 1000) + (j.expires_in || 3600), sub: c.sub, email: c.email });
      return sess.access_token;
    } catch (e) { return sess.access_token; }
  }
  function mergeState(a, b) { /* a = bu cihaz, b = sunucu. Hiçbir ilerleme kaybolmaz; çakışmada bu cihaz kazanır. */
    var o = Object.assign({}, b || {}, a || {});
    o.done = Object.assign({}, (b || {}).done, (a || {}).done);
    o.notes = Object.assign({}, (b || {}).notes, (a || {}).notes);
    o.days = {}; var da = (a || {}).days || {}, db = (b || {}).days || {};
    Object.keys(Object.assign({}, da, db)).forEach(function (d) { o.days[d] = { n: Math.max((da[d] || {}).n || 0, (db[d] || {}).n || 0), ok: Math.max((da[d] || {}).ok || 0, (db[d] || {}).ok || 0) }; });
    o.review = Array.from(new Set(((a || {}).review || []).concat((b || {}).review || [])));
    o.study = {}; var sa = (a || {}).study || {}, sb = (b || {}).study || {};
    Object.keys(Object.assign({}, sa, sb)).forEach(function (d) { o.study[d] = {}; var x = sa[d] || {}, y = sb[d] || {}; Object.keys(Object.assign({}, x, y)).forEach(function (k) { o.study[d][k] = Math.max(x[k] || 0, y[k] || 0); }); });
    o.goalMin = (a || {}).goalMin || (b || {}).goalMin || 0;
    o.sel = (a || {}).sel || (b || {}).sel || null;
    o.subjGoal = Object.assign({}, (b || {}).subjGoal, (a || {}).subjGoal);
    o.goalDone = Object.assign({}, (b || {}).goalDone, (a || {}).goalDone);
    return o;
  }
  K.sync = {
    user: function () { return sess ? { email: sess.email } : null; },
    status: function () { return status; },
    merge: mergeState,
    sendLink: async function (email) {
      var r = await call("/auth/v1/otp?redirect_to=" + encodeURIComponent(location.origin + location.pathname), { method: "POST", body: JSON.stringify({ email: email, create_user: true }) });
      if (!r.ok) { var j = {}; try { j = await r.json(); } catch (e) {} throw new Error(j.msg || j.error_description || ("Hata " + r.status)); }
    },
    pull: async function () {
      var t = await token(); if (!t) return null;
      try {
        var r = await call("/rest/v1/kesif_progress?select=data&limit=1", {}, t);
        if (!r.ok) { status = "Eşitlenemedi (sunucu " + r.status + ")"; return null; }
        var rows = await r.json(); status = "Eşitlendi"; return rows[0] ? rows[0].data : {};
      } catch (e) { status = "Eşitlenemedi (çevrimdışı)"; return null; }
    },
    push: function (state) {
      if (!sess) return; clearTimeout(timer);
      timer = setTimeout(async function () {
        var t = await token(); if (!t) return;
        try {
          var r = await call("/rest/v1/kesif_progress?on_conflict=user_id", { method: "POST", headers: { Prefer: "resolution=merge-duplicates,return=minimal" }, body: JSON.stringify({ user_id: sess.sub, data: state, updated_at: new Date().toISOString() }) }, t);
          status = r.ok ? "Eşitlendi" : "Eşitlenemedi (sunucu " + r.status + ")";
        } catch (e) { status = "Eşitlenemedi (çevrimdışı)"; }
      }, 1500);
    },
    deleteData: async function () {
      var t = await token(); if (!t) return false;
      var r = await call("/rest/v1/kesif_progress?user_id=eq." + sess.sub, { method: "DELETE" }, t);
      return r.ok;
    },
    signOut: function () { clearTimeout(timer); store(null); status = ""; }
  };
})();
