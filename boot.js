/* Güncelleme bekçisi: tarayıcı önbelleği eski sayfayı gösteriyorsa yeni sürümü otomatik getirir (bir kez dener, döngüye girmez).
   version.txt her yayında tools/bump.js tarafından güncellenir. */
(function () {
  "use strict";
  try {
    var s = document.querySelector('script[src*="app.js"]'), m = s && /[?&]v=(\d+)/.exec(s.src), cur = m && m[1];
    if (!cur) return;
    fetch("version.txt?t=" + Date.now(), { cache: "no-store" }).then(function (r) { return r.ok ? r.text() : ""; }).then(function (t) {
      var latest = (t || "").trim();
      if (!/^\d+$/.test(latest) || latest === cur) return;
      var key = "kesif.reload." + latest;
      try { if (sessionStorage.getItem(key)) { showBar(latest); return; } sessionStorage.setItem(key, "1"); } catch (e) { showBar(latest); return; }
      location.replace(location.pathname + "?v=" + latest + location.hash);
    }).catch(function () {});
  } catch (e) {}
  function showBar(latest) {
    var d = document.createElement("div");
    d.setAttribute("role", "status");
    d.style.cssText = "position:fixed;left:0;right:0;bottom:0;z-index:99;background:#2F5BD6;color:#fff;padding:12px 16px;text-align:center;font:600 16px system-ui";
    d.innerHTML = 'Yeni sürüm var. <button type="button" style="margin-left:8px;min-height:40px;padding:0 14px;border-radius:10px;border:0;font:700 16px system-ui">Yenile</button>';
    d.querySelector("button").onclick = function () { location.replace(location.pathname + "?v=" + latest + "&r=" + Date.now() + location.hash); };
    document.body.appendChild(d);
  }
})();
