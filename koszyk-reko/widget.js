/* CzystaKarma — panel "Dobierz do tego" po dodaniu do koszyka.
   Uklad kafli (decyzja usera 2026-08-25):
     rzad 1: Klaczek Menu, Klaczek Menu, przysmak, przysmak
     rzad 2: gryzak, posypka, olej, przysmak
   Dane: reko.json (generator .work/reko_build.js). Koszyk: storefront /api/basket.
   Test bez dodawania: ?ckr=444  albo  ckrPokaz(444) w konsoli.                        */
(function () {
  if (window.__ckrReko) return;
  window.__ckrReko = 1;

  var S = document.currentScript || {};
  var CFG = {
    baza: (S.dataset && S.dataset.baza) || "https://cdn.jsdelivr.net/gh/wik313888-eng/czystakarma-widgety@main/koszyk-reko/",
    prog: 299,                 // darmowa dostawa
    ukryjNatywny: ""           // selektor natywnego drawera Shopera, gdyby zaczal kolidowac
  };
  var LS_ID = "BasketLocalStore.basketId", LS_KOSZYK = "BasketLocalStore.basket", LS_TS = "BasketLocalStore.basketUpdateTimestamp";

  var DANE = window.__CKR_DANE || null;
  var stanKoszyka = { suma: 0, warianty: [] };
  var wlasneDodanie = false;

  /* ---------------- pomocnicze ---------------- */
  function zl(v) { return (Math.round(v * 100) / 100).toFixed(2).replace(".", ",") + " zł"; }
  function lsGet(k) { try { return (localStorage.getItem(k) || "").replace(/^"|"$/g, ""); } catch (e) { return ""; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function ga(nazwa, dane) {
    try { window.dataLayer = window.dataLayer || []; window.dataLayer.push(Object.assign({ event: nazwa }, dane)); } catch (e) {}
  }
  function api(sciezka, opcje) {
    return fetch(sciezka, Object.assign({ credentials: "include", headers: { "Content-Type": "application/json" } }, opcje || {}))
      .then(function (r) { return r.json().catch(function () { return null; }); });
  }
  function dane() {
    if (DANE) return Promise.resolve(DANE);
    return fetch(CFG.baza + "reko.json").then(function (r) { return r.json(); }).then(function (j) { DANE = j; CFG.prog = j.prog || CFG.prog; return j; });
  }

  /* ---------------- koszyk ---------------- */
  function idKoszyka() {
    var id = lsGet(LS_ID);
    if (id) return Promise.resolve(id);
    return api("/api/basket/", { method: "POST" }).then(function (j) {
      var n = j && j.basket && j.basket.id;
      if (n) { lsSet(LS_ID, n); lsSet(LS_TS, String(Date.now())); }
      return n;
    });
  }
  // Shoper zwraca pozycje raz jako {0:[...]}, raz jako {list:[...]} — lecimy rekurencyjnie po variantId
  function zbierzWarianty(o, out, gl) {
    if (!o || gl > 5) return out;
    if (Array.isArray(o)) { o.forEach(function (x) { zbierzWarianty(x, out, gl + 1); }); return out; }
    if (typeof o === "object") {
      if (o.variantId) { out.push(Number(o.variantId)); return out; }
      Object.keys(o).forEach(function (k) { if (k !== "_links") zbierzWarianty(o[k], out, gl + 1); });
    }
    return out;
  }
  function odswiezKoszyk() {
    return idKoszyka().then(function (id) {
      if (!id) return stanKoszyka;
      return api("/api/basket/" + id).then(function (j) {
        var b = (j && j.basket) || j || {};
        var bez = b.sumWithoutPaymentAndShipping || b.sum || {};
        stanKoszyka = { suma: Number(bez.grossValue || 0), warianty: zbierzWarianty(b.items, [], 0), id: id };
        return stanKoszyka;
      });
    });
  }
  function dodaj(sid, ilosc) {
    return idKoszyka().then(function (id) {
      wlasneDodanie = true;
      return api("/api/basket/" + id + "/item/" + sid, {
        method: "POST",
        body: JSON.stringify({ quantity: ilosc || 1, options: {}, isExchangedWithLoyaltyPoints: false, bundledItems: [] })
      }).then(function (j) {
        setTimeout(function () { wlasneDodanie = false; }, 400);
        var bledy = ((j && j.flashMessages) || []).filter(function (m) { return m.isError; });
        try { localStorage.removeItem(LS_KOSZYK); } catch (e) {}
        lsSet(LS_TS, String(Date.now()));
        if (bledy.length) throw new Error(bledy[0].message || "Nie udało się dodać");
        return j;
      });
    });
  }

  /* ---------------- style ---------------- */
  function styl() {
    if (document.getElementById("ckr-styl")) return;
    var s = document.createElement("style");
    s.id = "ckr-styl";
    s.textContent = [
      ".ckr-tlo{position:fixed;inset:0;background:rgba(30,16,44,.45);z-index:2147483000;opacity:0;transition:opacity .22s}",
      ".ckr-tlo.on{opacity:1}",
      ".ckr-panel{position:fixed;top:0;right:0;bottom:0;width:460px;max-width:100%;background:#fff;z-index:2147483001;display:flex;flex-direction:column;transform:translateX(100%);transition:transform .26s cubic-bezier(.3,.8,.4,1);box-shadow:-8px 0 40px rgba(40,20,60,.22);color:#2b1b38}",
      ".ckr-panel.on{transform:none}",
      ".ckr-gora{padding:18px 52px 14px 20px;border-bottom:1px solid #efeaf4}",
      ".ckr-ok{display:flex;align-items:center;gap:9px;font-weight:700;font-size:16px;color:#401f58}",
      ".ckr-ptaszek{width:22px;height:22px;border-radius:50%;background:#401f58;color:#fff;display:flex;align-items:center;justify-content:center;font-size:13px;flex:0 0 auto}",
      ".ckr-nazwa{margin:7px 0 0;font-size:13px;line-height:1.4;color:#6b5b78}",
      ".ckr-x{position:absolute;top:12px;right:12px;width:34px;height:34px;border:0;background:#f4f0f8;border-radius:50%;font-size:18px;line-height:1;cursor:pointer;color:#5b4a69}",
      ".ckr-x:hover{background:#e9e0f2}",
      ".ckr-pasek{margin:14px 20px 0;background:#f6f2fa;border-radius:12px;padding:12px 14px}",
      ".ckr-pasek b{color:#401f58}",
      ".ckr-tor{height:7px;border-radius:99px;background:#e6dcf0;margin-top:8px;overflow:hidden}",
      ".ckr-wyp{height:100%;border-radius:99px;background:linear-gradient(90deg,#60397a,#401f58);transition:width .35s}",
      ".ckr-tresc{flex:1;overflow-y:auto;padding:16px 20px 8px;-webkit-overflow-scrolling:touch}",
      ".ckr-h{font-size:12px;font-weight:700;letter-spacing:.03em;text-transform:uppercase;color:#8a789a;margin:4px 0 10px}",
      ".ckr-siatka{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:18px}",
      ".ckr-kafel{border:1px solid #eee6f3;border-radius:14px;padding:9px;display:flex;flex-direction:column;position:relative;background:#fff}",
      ".ckr-kafel img{width:100%;aspect-ratio:1;object-fit:contain;border-radius:10px;background:#faf8fc;display:block}",
      ".ckr-plakietka{position:absolute;top:6px;left:6px;background:#401f58;color:#fff;font-size:10px;font-weight:600;padding:3px 7px;border-radius:99px;z-index:2}",
      ".ckr-marka{font-size:10px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:#9a8aa8;margin:8px 0 2px}",
      ".ckr-tyt{font-size:12.5px;line-height:1.32;margin:0 0 2px;min-height:33px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;color:#2b1b38;font-weight:600}",
      ".ckr-cena{font-weight:800;font-size:15px;color:#401f58;margin-bottom:8px}",
      ".ckr-dodaj{margin-top:auto;border:1.5px solid #401f58;background:#fff;color:#401f58;border-radius:10px;padding:8px 6px;font-size:12.5px;font-weight:700;cursor:pointer;transition:.15s}",
      ".ckr-dodaj:hover{background:#401f58;color:#fff}",
      ".ckr-dodaj[disabled]{border-color:#cfc4da;color:#8b7c99;cursor:default;background:#f7f4fa}",
      ".ckr-dol{padding:12px 20px calc(12px + env(safe-area-inset-bottom));border-top:1px solid #efeaf4;display:flex;gap:10px;background:#fff}",
      ".ckr-kasa{flex:1;background:#401f58;color:#fff;border:0;border-radius:12px;padding:14px;font-size:15px;font-weight:700;cursor:pointer}",
      ".ckr-kasa:hover{background:#4d2669}",
      ".ckr-dalej{background:#fff;border:1.5px solid #ded3e8;color:#5b4a69;border-radius:12px;padding:14px 16px;font-size:14px;font-weight:600;cursor:pointer}",
      "@keyframes ckrIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}",
      ".ckr-kafel{animation:ckrIn .32s cubic-bezier(.2,.7,.4,1) both;transition:box-shadow .18s,transform .18s}",
      ".ckr-kafel:hover{box-shadow:0 6px 22px rgba(64,31,88,.14);transform:translateY(-2px)}",
      ".ckr-zaufanie{margin-top:8px;font-size:11.5px;color:#8a789a}",
      ".ckr-pasek-ok{background:#eef8ef}",
      ".ckr-pasek-ok .ckr-wyp{background:#3f9d58}",
      ".ckr-pasek-ok b{color:#2c7a42}",
      ".ckr-domyka{display:block;margin-top:6px;background:#fff7e0;color:#8a6a00;border:1px solid #f0dfa0;font-size:10.5px;font-weight:700;padding:3px 7px;border-radius:8px;text-align:center}",
      ".ckr-hero{display:flex;align-items:center;gap:12px;border:1.5px solid #d9c8ec;background:linear-gradient(135deg,#faf6ff,#f3ebfb);border-radius:16px;padding:12px;margin-bottom:16px;animation:ckrIn .32s both;position:relative}",
      ".ckr-hero img{width:74px;height:74px;object-fit:contain;border-radius:10px;background:#fff;flex:0 0 auto}",
      ".ckr-hero-txt{flex:1;min-width:0}",
      ".ckr-hero-h{font-weight:800;font-size:14.5px;color:#401f58;line-height:1.25}",
      ".ckr-hero-i{font-size:12px;color:#6b5b78;margin:3px 0 4px}",
      ".ckr-hero-c{font-weight:800;font-size:15px;color:#401f58}",
      ".ckr-hero-btn{flex:0 0 auto;background:#401f58;color:#fff;padding:10px 13px;border-radius:11px}",
      ".ckr-hero-btn:hover{background:#4d2669}",
      ".ckr-plakietka-mocna{background:#2c7a42}",
      "@media(max-width:520px){.ckr-panel{width:100%;top:auto;height:92vh;border-radius:18px 18px 0 0;transform:translateY(100%)}.ckr-hero{flex-wrap:wrap}.ckr-hero-btn{flex:1 1 100%}}",
      "@media(min-width:900px){.ckr-siatka{grid-template-columns:repeat(4,1fr)}.ckr-panel{width:760px}}"
    ].join("");
    document.head.appendChild(s);
  }

  /* ---------------- panel ---------------- */
  function zamknij() {
    var p = document.getElementById("ckr-panel"), t = document.getElementById("ckr-tlo");
    if (p) { p.classList.remove("on"); setTimeout(function () { p.remove(); }, 260); }
    if (t) { t.classList.remove("on"); setTimeout(function () { t.remove(); }, 260); }
    if (CFG.ukryjNatywny) [].forEach.call(document.querySelectorAll(CFG.ukryjNatywny), function (e) { e.style.display = ""; });
  }

  /* Shoper na stronach kategorii pokazuje wlasny popup "Dodano do koszyka" pod naszym panelem —
     klient po "Kupuje dalej" musialby zamykac drugie okno. Ubijamy go: najpierw jego wlasnym X
     (wtedy Shoper sam sprzata backdrop i blokade scrolla), w ostatecznosci chowamy na twardo. */
  function ubijNatywnyPopup() {
    var trafienia = 0;
    [].forEach.call(document.querySelectorAll('[class*="modal"],[class*="popup"],[class*="dialog"]'), function (el) {
      if (el.id === "ckr-panel" || el.id === "ckr-tlo" || el.style.display === "none") return;
      if (!/dodano do koszyka/i.test(el.textContent || "")) return;
      var x = el.querySelector('button[aria-label*="amknij"],button[class*="close"],.modal-close,[data-dismiss]');
      if (x) x.click(); else el.style.display = "none";
      trafienia++;
    });
    if (trafienia) [].forEach.call(document.querySelectorAll(".backdrop"), function (b) {
      if (b.id !== "ckr-tlo") b.style.display = "none";
    });
    return trafienia;
  }

  function pasekHtml() {
    var brak = Math.max(0, CFG.prog - stanKoszyka.suma);
    var proc = Math.min(100, stanKoszyka.suma / CFG.prog * 100);
    var tekst = brak > 0
      ? "Do darmowej dostawy brakuje <b>" + zl(brak) + "</b>"
      : "🎉 <b>Masz darmową dostawę!</b>";
    return '<div class="ckr-pasek' + (brak <= 0 ? " ckr-pasek-ok" : "") + '" id="ckr-pasek"><div style="font-size:13px">' + tekst +
      '</div><div class="ckr-tor"><div class="ckr-wyp" style="width:' + proc + '%"></div></div></div>';
  }
  // zloty znacznik na NAJTANSZYM elemencie, ktory jednym klikiem domyka darmowa dostawe
  function odswiezDomykacz() {
    var brak = CFG.prog - stanKoszyka.suma;
    var p = document.getElementById("ckr-panel");
    if (!p) return;
    [].forEach.call(p.querySelectorAll(".ckr-domyka"), function (e) { e.remove(); });
    if (brak <= 0) return;
    var kand = [].slice.call(p.querySelectorAll("[data-cena]")).filter(function (el) {
      return Number(el.getAttribute("data-cena")) >= brak && !el.querySelector(".ckr-dodaj[disabled]");
    }).sort(function (a, b) { return Number(a.getAttribute("data-cena")) - Number(b.getAttribute("data-cena")); });
    if (!kand[0]) return;
    var z = document.createElement("span");
    z.className = "ckr-domyka";
    z.textContent = "✓ z tym masz darmową dostawę";
    (kand[0].querySelector(".ckr-hero-txt") || kand[0]).appendChild(z);   // na hero: pod tekstem, nie obok przycisku
  }
  function odswiezPasek() {
    var el = document.getElementById("ckr-pasek");
    if (el) el.outerHTML = pasekHtml();
    odswiezDomykacz();
  }

  function kafel(t, powod, i) {
    var wKoszyku = stanKoszyka.warianty.indexOf(t.s) > -1;
    var mocna = powod === "to samo białko";          // najsilniejszy argument sprzedazowy — wyrozniamy
    return '<div class="ckr-kafel" data-sid="' + t.s + '" data-poz="' + i + '" data-cena="' + t.c + '" style="animation-delay:' + (i * 45) + 'ms">' +
      (powod ? '<span class="ckr-plakietka' + (mocna ? " ckr-plakietka-mocna" : "") + '">' + powod + "</span>" : "") +
      '<a href="' + t.u + '" target="_blank" rel="noopener"><img loading="lazy" src="' + CFG.baza + "img/" + t.g + '.webp" alt=""></a>' +
      (t.b ? '<div class="ckr-marka">' + t.b + "</div>" : "") +
      '<div class="ckr-tyt">' + t.n + "</div>" +
      '<div class="ckr-cena">' + zl(t.c) + "</div>" +
      '<button class="ckr-dodaj"' + (wKoszyku ? " disabled" : "") + ">" + (wKoszyku ? "✓ w koszyku" : "+ dodaj") + "</button></div>";
  }

  // karta hero: zestaw 11+1 / pelne opakowanie po probce — najwiekszy skok wartosci koszyka
  function heroHtml(u, d) {
    var t = d.t[u[0]];
    var wKoszyku = stanKoszyka.warianty.indexOf(t.s) > -1;
    var btn = u[1] === "pelne" ? "Dodaj opakowanie" : "Dodaj zestaw";
    return '<div class="ckr-hero" data-sid="' + t.s + '" data-cena="' + t.c + '" data-rodzaj="' + u[1] + '">' +
      '<img src="' + CFG.baza + "img/" + t.g + '.webp" alt="">' +
      '<div class="ckr-hero-txt"><div class="ckr-hero-h">' + u[2] + "</div>" +
      '<div class="ckr-hero-i">' + u[3] + "</div>" +
      '<div class="ckr-hero-c">' + zl(t.c) + "</div></div>" +
      '<button class="ckr-dodaj ckr-hero-btn"' + (wKoszyku ? " disabled" : "") + ">" + (wKoszyku ? "✓ w koszyku" : btn) + "</button></div>";
  }

  function pokaz(sid, nazwaDodanego) {
    return dane().then(function (d) {
      var wpis = d.p[String(sid)];
      if (wpis && wpis.length) wpis = { k: wpis };                  // stary format (tablica) tez dziala
      if (!wpis || !wpis.k || !wpis.k.length) return;
      // nazwa dodanego z bazy (h1 na stronie kategorii to tytul KATEGORII, nie produktu)
      var wT = d.t.filter(function (t) { return t.s === Number(sid); })[0];
      if (wT) nazwaDodanego = (wT.b ? wT.b + " " : "") + wT.n;
      return odswiezKoszyk().then(function () {
        styl();
        zamknij();
        if (CFG.ukryjNatywny) [].forEach.call(document.querySelectorAll(CFG.ukryjNatywny), function (e) { e.style.display = "none"; });

        var kafle = wpis.k.map(function (o, i) { return { t: d.t[o[0]], r: o[1], i: i }; });
        var r1 = kafle.slice(0, 4), r2 = kafle.slice(4, 8);
        var hero = wpis.u ? heroHtml(wpis.u, d) : "";

        var tlo = document.createElement("div"); tlo.className = "ckr-tlo"; tlo.id = "ckr-tlo";
        var p = document.createElement("aside"); p.className = "ckr-panel"; p.id = "ckr-panel";
        p.innerHTML =
          '<button class="ckr-x" aria-label="Zamknij">×</button>' +
          '<div class="ckr-gora"><div class="ckr-ok"><span class="ckr-ptaszek">✓</span> Dodano do koszyka</div>' +
          (nazwaDodanego ? '<p class="ckr-nazwa">' + nazwaDodanego + "</p>" : "") +
          '<div class="ckr-zaufanie">🚚 Wysyłka w 24 h &nbsp;·&nbsp; ↩ 14 dni na zwrot</div></div>' +
          pasekHtml() +
          '<div class="ckr-tresc">' + hero +
            '<div class="ckr-h">Dobierz do tego</div><div class="ckr-siatka">' + r1.map(function (k) { return kafel(k.t, k.r, k.i); }).join("") + "</div>" +
            (r2.length ? '<div class="ckr-h">Na dłużej i do miski</div><div class="ckr-siatka">' + r2.map(function (k) { return kafel(k.t, k.r, k.i); }).join("") + "</div>" : "") +
          "</div>" +
          '<div class="ckr-dol"><button class="ckr-dalej" id="ckr-btn-koszyk">Do koszyka</button><button class="ckr-kasa" id="ckr-btn-dalej">Kupuję dalej</button></div>';

        document.body.appendChild(tlo);
        document.body.appendChild(p);
        setTimeout(function () { tlo.classList.add("on"); p.classList.add("on"); }, 20);   // setTimeout, nie rAF — dziala tez w tle

        // popup Shopera potrafi wyskoczyc chwile PO naszym panelu — polujemy przez ~2,5 s
        ubijNatywnyPopup();
        var proby = 0;
        var lowca = setInterval(function () { ubijNatywnyPopup(); if (++proby >= 14) clearInterval(lowca); }, 180);

        tlo.onclick = zamknij;
        p.querySelector(".ckr-x").onclick = zamknij;
        // "Kupuję dalej" = glowny przycisk (decyzja usera): panel znika, klient zostaje w zakupach
        p.querySelector("#ckr-btn-dalej").onclick = zamknij;
        p.querySelector("#ckr-btn-koszyk").onclick = function () { ga("ckr_do_koszyka", {}); location.href = "/pl/basket"; };

        p.addEventListener("click", function (e) {
          var b = e.target.closest && e.target.closest(".ckr-dodaj");
          if (!b || b.disabled) return;
          var kaf = b.closest(".ckr-kafel"), her = b.closest(".ckr-hero");
          var el = kaf || her;
          var s = Number(el.getAttribute("data-sid"));
          var cena = Number(el.getAttribute("data-cena"));
          var poz = kaf ? kafle[Number(kaf.getAttribute("data-poz"))] : null;
          var powod = poz ? poz.r : (her.getAttribute("data-rodzaj") === "pelne" ? "upsell-pelne" : "upsell-zestaw");
          var staryNapis = b.textContent;
          b.disabled = true; b.textContent = "…";
          dodaj(s, 1).then(function () {
            b.textContent = "✓ w koszyku";
            stanKoszyka.warianty.push(s);
            stanKoszyka.suma += cena;
            odswiezPasek();
            ga("ckr_dodano", {                       // wlasna nazwa: nie dubluje add_to_cart sklepu w GA4
              ckr_zrodlo: kaf ? "panel_reko" : "panel_hero", ckr_pozycja: poz ? poz.i + 1 : 0, ckr_powod: powod,
              ecommerce: { currency: "PLN", value: cena, items: [{ item_id: String(s), price: cena, quantity: 1 }] }
            });
          }).catch(function (err) {
            b.disabled = false; b.textContent = staryNapis;
            alert(err.message || "Nie udało się dodać produktu.");
          });
        });

        odswiezDomykacz();
        ga("ckr_panel_otwarty", { ckr_produkt: String(sid), ckr_kafli: kafle.length, ckr_hero: wpis.u ? wpis.u[1] : "brak" });
      });
    }).catch(function (e) { if (window.console) console.warn("[ckr]", e); });
  }

  /* ---------------- wykrywanie dodania do koszyka ---------------- */
  var RE_ITEM = /\/api\/basket\/[a-z0-9]+\/item\/(\d+)/i;
  function nazwaZeStrony() {
    var h = document.querySelector("h1");
    return h ? (h.textContent || "").trim().split(/\s[—–]\s/)[0].slice(0, 80) : "";
  }
  function zlapano(url, metoda) {
    if (!url || String(metoda || "").toUpperCase() !== "POST" || wlasneDodanie) return;
    var m = String(url).match(RE_ITEM);
    if (!m) return;
    setTimeout(function () { pokaz(Number(m[1]), nazwaZeStrony()); }, 250);
  }

  var _fetch = window.fetch;
  window.fetch = function (wej, opcje) {
    try { zlapano(typeof wej === "string" ? wej : (wej && wej.url), (opcje && opcje.method) || (wej && wej.method)); } catch (e) {}
    return _fetch.apply(this, arguments);
  };
  var _open = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function (m, u) {
    try { this.__ckrM = m; this.__ckrU = u; } catch (e) {}
    return _open.apply(this, arguments);
  };
  var _send = XMLHttpRequest.prototype.send;
  XMLHttpRequest.prototype.send = function () {
    var x = this;
    try {
      x.addEventListener("load", function () { if (x.status >= 200 && x.status < 300) zlapano(x.__ckrU, x.__ckrM); });
    } catch (e) {}
    return _send.apply(this, arguments);
  };

  /* ---------------- sekcja na stronie koszyka ----------------
     Zastepuje miejsce platnego modulu Shopera. Odpala sie TYLKO gdy natywnej
     karuzeli "Inni klienci kupili rowniez" nie ma na stronie (brak kolizji).   */
  function koszykSekcja() {
    if (!/\/basket\/?$/.test(location.pathname)) return;
    dane().then(function (d) {
      return odswiezKoszyk().then(function () {
        if (document.getElementById("ckr-sekcja")) return;
        var maNatywna = [].some.call(document.querySelectorAll("h2,h3,div"), function (e) {
          return e.children.length === 0 && /inni klienci kupili/i.test(e.textContent || "");
        });
        if (maNatywna || !stanKoszyka.warianty.length) return;
        // rekomendacje pod NAJDROZSZY produkt w koszyku, ktory ma mape
        var sidy = stanKoszyka.warianty.filter(function (s) { return d.p[String(s)]; });
        if (!sidy.length) return;
        var sid = sidy.sort(function (a, b) {
          var ca = (d.t.filter(function (t) { return t.s === a; })[0] || {}).c || 0;
          var cb = (d.t.filter(function (t) { return t.s === b; })[0] || {}).c || 0;
          return cb - ca;
        })[0];
        var wpis = d.p[String(sid)];
        if (wpis && wpis.length) wpis = { k: wpis };
        styl();
        var kafle = wpis.k.slice(0, 4).map(function (o, i) { return { t: d.t[o[0]], r: o[1], i: i }; });
        var sek = document.createElement("div");
        sek.id = "ckr-sekcja";
        sek.style.cssText = "max-width:1200px;margin:28px auto;padding:0 20px";
        sek.innerHTML = '<div class="ckr-h" style="font-size:16px;text-transform:none;color:#2b1b38;letter-spacing:0">Dobierz do tego</div>' +
          '<div class="ckr-siatka" style="grid-template-columns:repeat(auto-fill,minmax(160px,1fr))">' +
          kafle.map(function (k) { return kafel(k.t, k.r, k.i); }).join("") + "</div>";
        var cel = document.querySelector("main") || document.body;
        cel.appendChild(sek);
        sek.addEventListener("click", function (e) {
          var b = e.target.closest && e.target.closest(".ckr-dodaj");
          if (!b || b.disabled) return;
          var kaf = b.closest(".ckr-kafel"), s = Number(kaf.getAttribute("data-sid"));
          var cena = Number(kaf.getAttribute("data-cena"));
          b.disabled = true; b.textContent = "…";
          dodaj(s, 1).then(function () {
            ga("ckr_dodano", { ckr_zrodlo: "koszyk_sekcja", ckr_powod: kafle[Number(kaf.getAttribute("data-poz"))].r,
              ecommerce: { currency: "PLN", value: cena, items: [{ item_id: String(s), price: cena, quantity: 1 }] } });
            location.reload();                       // strona koszyka musi pokazac nowa pozycje
          }).catch(function (err) {
            b.disabled = false; b.textContent = "+ dodaj";
            alert(err.message || "Nie udało się dodać produktu.");
          });
        });
        ga("ckr_sekcja_koszyk", { ckr_produkt: String(sid) });
      });
    }).catch(function () {});
  }

  /* ---------------- start ---------------- */
  window.ckrPokaz = pokaz;
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", koszykSekcja);
  else setTimeout(koszykSekcja, 800);
  var test = (location.search.match(/[?&]ckr=(\d+)/) || [])[1];
  if (test) setTimeout(function () { pokaz(Number(test), "Podgląd testowy panelu"); }, 600);
  else if ("requestIdleCallback" in window) requestIdleCallback(function () { dane(); });
  else setTimeout(dane, 3000);
})();
