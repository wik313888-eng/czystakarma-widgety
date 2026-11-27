(function() {

  // -------------------------------------------------------
  // KALKULATOR PORCJI — Kłaczek Menu (mokra karma, słoiki 400 g)
  // CzystaKarma.pl / Shoper SPA — moduł 293
  // 27.11.2026:
  //  - zestawy: cena dzielona przez liczbę słoików (wcześniej „zestaw” małą literą
  //    nie był wykrywany i cena 12 słoików liczyła się jak cena jednego)
  //  - waga z przecinkiem („2,4”) działa w każdej przeglądarce
  //  - bez dawki dla szczeniąt: Kłaczek Menu zalecamy psom od 8. miesiąca życia
  //  - słoiki liczone z prawdziwej porcji, bez zaokrąglania w górę do ćwiartki
  // -------------------------------------------------------

  var SLOIK_GRAMY = 400;

  function obliczPorcje(wagaKg) {
    if (wagaKg <= 15) return Math.round(wagaKg * 0.025 * 1000);
    return Math.round(wagaKg * 0.0225 * 1000);
  }

  function fmt(num, miejscaDzies) {
    return num.toFixed(miejscaDzies !== undefined ? miejscaDzies : 2).replace('.', ',');
  }

  function fmtKrotko(num) {
    return fmt(num, 1).replace(',0', '');
  }

  function odmianaSloik(n) {
    if (n === 1) return 'słoik';
    var r10 = n % 10, r100 = n % 100;
    if (r10 >= 2 && r10 <= 4 && (r100 < 12 || r100 > 14)) return 'słoiki';
    return 'słoików';
  }

  function opisDzienny(gramy) {
    if (gramy < SLOIK_GRAMY) {
      var dni = SLOIK_GRAMY / gramy;
      var dol = Math.floor(dni), gora = Math.ceil(dni);
      var zakres = dol === gora ? String(dol) : dol + '–' + gora;
      return 'Jeden słoik (400 g) wystarczy na ok. ' + zakres + ' dni';
    }
    var cwiartki = Math.round(gramy / SLOIK_GRAMY * 4) / 4;
    var nazwy = { 1: '1 słoik', 1.25: '1¼ słoika', 1.5: '1½ słoika', 1.75: '1¾ słoika', 2: '2 słoiki', 2.25: '2¼ słoika', 2.5: '2½ słoika', 2.75: '2¾ słoika', 3: '3 słoiki' };
    return 'To ok. ' + (nazwy[cwiartki] || fmt(gramy / SLOIK_GRAMY, 1) + ' słoika') + ' dziennie';
  }

  // liczba słoików w produkcie: „zestaw 12 słoików”, „6 × 400 g”; pojedynczy słoik = 1
  function liczbaSloikow(h1Tekst) {
    var t = h1Tekst.toLowerCase();
    var m = t.match(/(\d+)\s*(?:×|x)\s*400/) || t.match(/(\d+)\s*słoik/);
    if (m) return parseInt(m[1], 10);
    return /zestaw/.test(t) ? 0 : 1;
  }

  var ZESTAWY = {
    'kaczka':      '/karma-mokra-kaczka-zestaw-12-sloikow',
    'indyk':       '/karma-mokra-indyk-zestaw-12-sloikow',
    'jagnięcina':  '/karma-mokra-jagniecina-zestaw-12-sloikow',
    'konina':      '/karma-mokra-konina-zestaw-12-sloikow',
    'kozina':      '/karma-mokra-kozina-zestaw-12-sloikow',
    'łosoś':       '/klaczek-menu-losos-zestaw-12-sloikow',
    'wołowina':    '/klaczek-menu-wolowina-zestaw-12-sloikow',
    'królik':      '/klaczek-menu-krolik-zestaw-12-sloikow',
    'kurczak':     '/karma-mokra-kurczak-zestaw-12-sloikow',
    'wieprzowina': '/karma-mokra-wieprzowina-zestaw-12-sloikow'
  };

  function znajdzZestaw(h1Tekst) {
    // tylko część tytułowa przed „400” — pomija ogon „…bez kurczaka”
    var tytul = h1Tekst.split('400')[0].toLowerCase();
    for (var smak in ZESTAWY) {
      if (tytul.indexOf(smak) !== -1) return { smak: smak, url: ZESTAWY[smak] };
    }
    return null;
  }

  function buildCalc() {
    var h1El = document.querySelector('h1');
    if (!h1El) return false;
    var h1Tekst = h1El.textContent;
    if (h1Tekst.indexOf('Kłaczek Menu') === -1) return false;
    if (document.getElementById('klaczek-menu-calc')) return true;
    if (!document.querySelector('[class*="buy-button"]')) return false;

    var productActions = document.querySelector('.product-actions');
    if (!productActions) return false;

    var ileSloikow = liczbaSloikow(h1Tekst);
    if (!ileSloikow) return true; // zestaw o nieznanej liczbie słoików — lepiej bez kalkulatora niż z błędną ceną

    var priceEls = document.querySelectorAll('.product-price__final-price .price__value.js__price-value');
    var priceEl = priceEls.length >= 2 ? priceEls[1] : (priceEls.length === 1 ? priceEls[0] : null);
    if (!priceEl) return false;

    var cenaProduktu = parseFloat(priceEl.textContent.trim().replace(/[^0-9,.]/g, '').replace(',', '.'));
    if (!cenaProduktu || isNaN(cenaProduktu)) return false;

    var cenaSloika = cenaProduktu / ileSloikow;
    var cenaZaGram = cenaSloika / SLOIK_GRAMY;
    var jestZestawem = ileSloikow > 1;
    var zestaw = jestZestawem ? null : znajdzZestaw(h1Tekst);

    var html =
      '<div id="klaczek-menu-calc" data-wersja="2" style="background:#f0ebfa;border-left:4px solid #60397a;padding:16px 20px;margin:16px 0 8px 0;border-radius:0 4px 4px 0;font-family:inherit;">' +
        '<div style="font-weight:700;color:#401f58;margin-bottom:14px;font-size:15px;">🐾 Ile słoików Kłaczek Menu potrzebuje Twój pies?</div>' +
        '<div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:4px;">' +
          '<label for="km-weight" style="color:#555;font-size:14px;font-weight:600;white-space:nowrap;">Waga psa:</label>' +
          '<div style="display:flex;align-items:center;gap:6px;">' +
            '<input id="km-weight" type="text" inputmode="decimal" autocomplete="off" placeholder="np. 10" style="width:80px;padding:7px 10px;border:1.5px solid #c4b0e0;border-radius:6px;font-size:16px;color:#401f58;outline:none;background:#fff;"/>' +
            '<span style="color:#555;font-size:14px;">kg</span>' +
          '</div>' +
          '<span style="color:#926bb8;font-size:12px;">pies dorosły, 2,25–2,5% masy ciała / dzień</span>' +
        '</div>' +
        '<div id="km-result" style="margin-top:14px;display:none;padding:12px 14px;background:#fff;border:1.5px solid #c4b0e0;border-radius:6px;">' +
          '<div id="km-porcja" style="font-size:15px;color:#401f58;font-weight:700;margin-bottom:8px;"></div>' +
          '<div id="km-slojki" style="font-size:14px;color:#401f58;margin-bottom:6px;"></div>' +
          '<div id="km-koszty" style="font-size:14px;color:#555;line-height:1.9;"></div>' +
          '<div id="km-miesiac" style="margin-top:8px;font-size:13px;color:#60397a;font-weight:600;"></div>' +
          '<div id="km-zestaw" style="display:none;margin-top:10px;padding:10px 12px;background:#f0ebfa;border-left:3px solid #60397a;border-radius:0 4px 4px 0;font-size:13px;line-height:1.6;"></div>' +
        '</div>' +
        '<div style="margin-top:8px;font-size:11px;color:#888;">Dawka wg zaleceń producenta z etykiety: pies do 15 kg 2–3%, powyżej 15 kg 2–2,5% masy ciała. Przy karmieniu mieszanym dostosuj proporcje. Kłaczek Menu zalecamy psom od 8. miesiąca życia — nie podawaj szczeniętom.</div>' +
      '</div>';

    productActions.insertAdjacentHTML('afterend', html);

    var weightInput = document.getElementById('km-weight');
    var resultDiv   = document.getElementById('km-result');
    var porcjaDiv   = document.getElementById('km-porcja');
    var slojkiDiv   = document.getElementById('km-slojki');
    var kosztyDiv   = document.getElementById('km-koszty');
    var miesiacDiv  = document.getElementById('km-miesiac');
    var zestawDiv   = document.getElementById('km-zestaw');

    function przelicz() {
      var waga = parseFloat(String(weightInput.value).replace(/\s/g, '').replace(',', '.'));
      if (!waga || waga < 0.5 || waga > 90) { resultDiv.style.display = 'none'; return; }

      var porcja        = obliczPorcje(waga);
      var slojkiTydz    = porcja * 7 / SLOIK_GRAMY;
      var slojkiMiesiac = Math.ceil(porcja * 30 / SLOIK_GRAMY);
      var kosztDzien    = porcja * cenaZaGram;

      porcjaDiv.textContent = 'Pies ' + fmtKrotko(waga) + ' kg: ok. ' + porcja + ' g dziennie (2 posiłki po ok. ' + Math.round(porcja / 2) + ' g)';
      var tydz = Math.round(slojkiTydz * 2) / 2;
      slojkiDiv.innerHTML = opisDzienny(porcja) + ' &nbsp;|&nbsp; ok. ' + fmtKrotko(tydz || 0.5) + ' ' + (tydz === 1 ? 'słoik' : 'słoika') + ' tygodniowo';
      kosztyDiv.innerHTML = 'Koszt dzienny: <strong style="color:#401f58">~' + fmt(kosztDzien, 2) + ' zł</strong>' +
        (jestZestawem ? ' <span style="color:#926bb8;font-size:12px;">(cena słoika w zestawie: ' + fmt(cenaSloika, 2) + ' zł)</span>' : '') +
        '<br>Koszt miesięczny: <strong style="color:#401f58">~' + Math.round(kosztDzien * 30) + ' zł</strong>';
      miesiacDiv.textContent = 'Na miesiąc potrzebujesz ok. ' + slojkiMiesiac + ' ' + odmianaSloik(slojkiMiesiac) + ' Kłaczek Menu.';

      if (zestaw && slojkiMiesiac >= 10) {
        var ileZest = Math.max(1, Math.round(slojkiMiesiac / 12));
        var opisZest = ileZest === 1
          ? 'Zamów <strong>1 zestaw 12 słoików (11+1 gratis)</strong> — 1 słoik gratis, taniej niż osobno.'
          : 'Zamów <strong>' + ileZest + ' × zestaw 12 słoików (11+1 gratis)</strong> — łącznie ' + (ileZest * 12) + ' słoików, ' + ileZest + ' gratis.';
        zestawDiv.innerHTML = '💡 Taniej w zestawie: ' + opisZest + ' <span id="km-zestaw-link" style="color:#401f58;font-weight:700;white-space:nowrap;cursor:pointer;text-decoration:underline;">Zobacz zestaw →</span>';
        zestawDiv.style.display = 'block';
        var linkZestaw = document.getElementById('km-zestaw-link');
        if (linkZestaw) {
          linkZestaw.addEventListener('mousedown', function(e) {
            e.preventDefault();
            e.stopPropagation();
            window.location.href = zestaw.url;
          });
        }
      } else {
        zestawDiv.style.display = 'none';
      }

      resultDiv.style.display = 'block';
    }

    weightInput.addEventListener('input',  przelicz);
    weightInput.addEventListener('change', przelicz);
    return true;
  }

  function startPolling() {
    var proba = 0;
    var interval = setInterval(function() {
      proba++;
      if (buildCalc() || proba >= 50) clearInterval(interval);
    }, 300);
  }

  var ostatniUrl  = window.location.href;
  var orygPush    = history.pushState;
  var orygReplace = history.replaceState;
  history.pushState = function() { orygPush.apply(history, arguments); naZmianeUrl(); };
  history.replaceState = function() { orygReplace.apply(history, arguments); naZmianeUrl(); };
  window.addEventListener('popstate', naZmianeUrl);

  function naZmianeUrl() {
    var nowyUrl = window.location.href;
    if (nowyUrl === ostatniUrl) return;
    ostatniUrl = nowyUrl;
    var stary = document.getElementById('klaczek-menu-calc');
    if (stary) stary.remove();
    startPolling();
  }

  startPolling();

})();
