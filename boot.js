/* Güncelleme bekçisi: tarayıcı önbelleği eski sayfayı gösteriyorsa yeni sürümü otomatik getirir (bir kez dener, döngüye girmez).
   version.txt her yayında tools/bump.js tarafından güncellenir. Sekme arka plandan dönünce de kontrol eder; altbilgide elle "Yenile" bağlantısı vardır. */
(function () {
  "use strict";
  var s = document.currentScript || document.querySelector('script[src*="boot.js"]'), m = s && /[?&]v=(\d+)/.exec(s.src), cur = m && m[1];
  if (!cur) return;
  function go(latest, force) { location.replace(location.pathname + "?v=" + latest + (force ? "&r=" + Date.now() : "") + location.hash); }
  function check(manual) {
    try {
      fetch("version.txt?t=" + Date.now(), { cache: "no-store" }).then(function (r) { return r.ok ? r.text() : ""; }).then(function (t) {
        var latest = (t || "").trim();
        if (!/^\d+$/.test(latest)) return;
        if (latest === cur) { if (manual) go(latest, true); return; }
        if (manual) { go(latest, true); return; }
        var key = "kesif.reload." + latest;
        try { if (sessionStorage.getItem(key)) { showBar(latest); return; } sessionStorage.setItem(key, "1"); } catch (e) { showBar(latest); return; }
        go(latest, false);
      }).catch(function () {});
    } catch (e) {}
  }
  function showBar(latest) {
    if (document.getElementById("kesif-upd")) return;
    var d = document.createElement("div");
    d.id = "kesif-upd"; d.setAttribute("role", "status");
    d.style.cssText = "position:fixed;left:0;right:0;bottom:0;z-index:99;background:#2F5BD6;color:#fff;padding:12px 16px;text-align:center;font:600 16px system-ui";
    d.innerHTML = 'Yeni sürüm var. <button type="button" style="margin-left:8px;min-height:40px;padding:0 14px;border-radius:10px;border:0;font:700 16px system-ui">Yenile</button>';
    d.querySelector("button").onclick = function () { go(latest, true); };
    document.body.appendChild(d);
  }
  check(false);
  document.addEventListener("visibilitychange", function () { if (document.visibilityState === "visible") check(false); });
  window.addEventListener("DOMContentLoaded", function () {
    var f = document.querySelector(".foot"); if (!f) return;
    var a = document.createElement("p"); a.className = "muted small"; a.style.marginTop = "8px";
    a.innerHTML = 'Sürüm ' + cur + ' · <a href="#" id="kesif-yenile">Sayfa eski görünüyorsa buraya dokun</a>';
    f.appendChild(a); a.querySelector("a").onclick = function (e) { e.preventDefault(); check(true); };
  });
})();
