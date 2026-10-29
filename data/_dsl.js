/* Kısa ders yazım yardımcıları (KESIF.dsl): T metin adımı, M çoktan seçmeli, R yansıtma, G kart ızgarası, L ders kaydı, QB soru bankası üreticisi. Özgün içerik (CC BY-NC-SA 4.0). */
(function () {
  var strip = function (h) { return h.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim().slice(0, 1200); };
  var D = KESIF.dsl = {};
  D.T = function (title, html) { return { type: "text", title: title, say: strip(html), html: html }; };
  D.M = function (q, right, why, wr, ex, pre) { var o = [{ t: right, ok: true, why: why }]; wr.forEach(function (w) { o.push({ t: w[0], why: w[1] }); }); var s = { type: "mcq", q: q, opts: o, explain: ex }; if (pre) s.predict = true; return s; };
  D.AN = function (name, title, data, say) { return { type: "anim", name: name, title: title, data: data || null, say: say || "" }; };
  /* DEEP(id, adımlar): mevcut dersin son iki adımının (yansıtma + özet) önüne ek açıklama/animasyon adımları ekler; böylece yardım adımı dizinleri bozulmaz. */
  D.DEEP = function (id, steps) { var Ls = KESIF.lessons[id]; if (!Ls) { (KESIF.deepMissing = KESIF.deepMissing || []).push(id); return; } if (Ls._deep) return; Ls._deep = 1; var n = Ls.steps.length; Array.prototype.splice.apply(Ls.steps, [n - 2, 0].concat(steps)); };
  D.R = function (q, hint) { return { type: "reflect", q: q, hint: "Örnek düşünce: " + hint }; };
  D.G = function (a) { return '<div class="grid">' + a.map(function (c) { return '<div class="card' + (c[2] ? " pick" : "") + '"><h3>' + c[0] + '</h3><p class="small">' + c[1] + '</p></div>'; }).join("") + '</div>'; };
  D.L = function (id, subject, title, grade, hook, steps) { KESIF.lessons[id] = { id: id, subject: subject, title: title, minutes: 20, grade: grade, hook: hook, steps: steps }; };
  /* soru bankası: QB(subject, kn, s11|null, lesson, helpSteps, sinav, idPrefix) → {Q, A} */
  D.QB = function (subj, kn, s11, lesson, st, sinav, pre) {
    var M = (KESIF.meta = KESIF.meta || {}), H = (KESIF.help = KESIF.help || {}), n = 0;
    function reg(id, tur) { var m = { sinav: sinav || ["s11"], kaynak: "özgün", tur: tur }; if (s11) m.s11 = s11; else m.kn = kn; return m; }
    return {
      Q: function (zor, q, right, why, wr, hint, think, steps) {
        n++; var id = pre + "q" + n, o = [{ t: right, ok: true, why: why }]; wr.forEach(function (w) { o.push({ t: w[0], why: w[1] }); });
        KESIF.daily.push({ id: id, subject: subj, q: q, opts: o, hint: hint, think: think, solution: steps });
        var m = reg(id, "beceri temelli"); m.zor = zor; M[id] = m; H[id] = { topic: { lesson: lesson, step: st[(n - 1) % st.length] } };
      },
      A: function (zor, q, answers, hint, think, steps, rubric) {
        var id = pre + "o1"; KESIF.daily.push({ id: id, subject: subj, type: "open", q: q, answers: answers, hint: hint, think: think, solution: steps, rubric: rubric, explain: "", opts: [] });
        var m = reg(id, "açık uçlu"); m.zor = zor; M[id] = m; H[id] = { topic: { lesson: lesson, step: st[0] } };
      }
    };
  };
})();
