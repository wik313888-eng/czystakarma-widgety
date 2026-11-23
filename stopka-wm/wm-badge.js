/* WM Design — plakietka "Projekt i wykonanie" w stopce, wersja "Warstwy" (23.11.2026).
   Kod HTML i CSS 1:1 z karty BRAIN wiedza/wm-design-plakietka.md — nie zmieniac kolorow ani rozmiaru.
   Dla stron bez dostepu do szablonu (Shoper przez GTM): skrypt dokleja plakietke na koncu <footer>,
   DOMENA w linku podstawiana z adresu strony. Stopka czystakarma.pl jest ciemna -> bez wmc--jasna. */
(function () {
  if (window.__wmBadge) return;
  window.__wmBadge = 1;

  var CSS = '/* WM Design: plakietka "Projekt i wykonanie", wersja "Warstwy" (23.11.2026). Ciemna domyslnie; na jasna stopke dodaj klase wmc--jasna. */\n' +
    'a.wmc[href]{--wg1:#8B7CFF;--wg2:#2CC4B2;--wt:rgba(255,255,255,.76);--wl:#F1F2F6;--ww:#0d0f14;display:inline-flex;position:relative;isolation:isolate;box-sizing:border-box;margin:0;padding:0 0 3px;border:0;border-radius:999px;background:none;font-size:13px;font-weight:500;line-height:1;letter-spacing:.01em;text-transform:none;color:var(--wt);text-decoration:none;white-space:nowrap;vertical-align:middle;transition:color .3s}\n' +
    'a.wmc--jasna[href]{--wt:#474c59;--wl:#14161c;--ww:#fff}\n' +
    'a.wmc[href]::before{content:"";position:absolute;left:0;right:0;top:3px;bottom:0;border-radius:999px;background:linear-gradient(100deg,var(--wg1),var(--wg2));z-index:-1;transition:transform .45s cubic-bezier(.2,.8,.2,1),box-shadow .45s}\n' +
    '.wmc .wmc-g{font:inherit;letter-spacing:inherit;color:inherit;display:inline-flex;align-items:center;gap:10px;box-sizing:border-box;height:38px;padding:0 15px 0 16px;border-radius:999px;background:var(--ww);box-shadow:inset 0 1px 0 rgba(255,255,255,.14),inset 0 0 0 1px rgba(255,255,255,.07),0 2px 3px -1px rgba(0,0,0,.5);transition:transform .45s cubic-bezier(.2,.8,.2,1),box-shadow .45s}\n' +
    '.wmc--jasna .wmc-g{box-shadow:inset 0 0 0 1px rgba(20,22,28,.1),0 2px 3px -1px rgba(20,22,28,.35)}\n' +
    '.wmc .wmc-g>span{font:inherit;letter-spacing:inherit;color:inherit;text-transform:none}\n' +
    '.wmc .wmc-k{display:block;flex:none;width:1px;height:14px;background:currentColor;opacity:.28}\n' +
    '.wmc svg.wmc-z{display:block;flex:none;width:auto;height:19px;max-width:none;color:var(--wl);overflow:visible}\n' +
    '.wmc svg.wmc-z g{transform-box:fill-box;transform-origin:center;transition:transform .7s cubic-bezier(.65,0,.35,1)}\n' +
    '.wmc svg.wmc-n{display:block;flex:none;width:auto;height:10px;max-width:none;margin-left:-3px;color:var(--wl)}\n' +
    'a.wmc[href]:hover,a.wmc[href]:focus-visible{color:var(--wl);text-decoration:none}\n' +
    '.wmc:hover .wmc-g,.wmc:focus-visible .wmc-g{transform:translateY(-5px);box-shadow:inset 0 1px 0 rgba(255,255,255,.2),inset 0 0 0 1px rgba(255,255,255,.1),0 9px 10px -6px rgba(0,0,0,.65)}\n' +
    '.wmc--jasna:hover .wmc-g,.wmc--jasna:focus-visible .wmc-g{box-shadow:inset 0 0 0 1px rgba(20,22,28,.1),0 9px 10px -6px rgba(20,22,28,.45)}\n' +
    'a.wmc[href]:hover::before,a.wmc[href]:focus-visible::before{transform:translateY(1px);box-shadow:0 10px 22px -8px var(--wg1)}\n' +
    '.wmc:hover svg.wmc-z g,.wmc:focus-visible svg.wmc-z g{transform:rotate(180deg)}\n' +
    'a.wmc[href]:focus-visible{outline:2px solid var(--wg1);outline-offset:4px}\n' +
    '@media (prefers-reduced-motion:reduce){a.wmc[href]::before,.wmc .wmc-g,.wmc svg.wmc-z g{transition:none}.wmc:hover .wmc-g,.wmc:focus-visible .wmc-g{transform:none}.wmc:hover svg.wmc-z g,.wmc:focus-visible svg.wmc-z g{transform:none}}\n' +
    '.wmc-wrap{text-align:center;padding:22px 16px 28px;line-height:1}';

  var HTML = '<a class="wmc" href="https://wmdesign.pl/?utm_source=DOMENA&amp;utm_medium=footer-credit" target="_blank" rel="noopener"><span class="wmc-g"><span>Projekt i wykonanie</span><i class="wmc-k"></i><svg class="wmc-z" viewBox="14 25 92 70" aria-hidden="true" focusable="false"><defs><linearGradient id="wmcG" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#8B7CFF"/><stop offset="1" stop-color="#2CC4B2"/></linearGradient></defs><g><polyline points="98,87 79,33 60,67 41,33 22,87" fill="none" stroke="url(#wmcG)" stroke-width="10" stroke-linejoin="round" stroke-linecap="round" opacity=".75"/><polyline points="22,33 41,87 60,53 79,87 98,33" fill="none" stroke="currentColor" stroke-width="10" stroke-linejoin="round" stroke-linecap="round"/></g></svg><svg class="wmc-n" viewBox="-1.5 -1.5 107 17" role="img" aria-label="WM Design"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M0,0 V14 M0,0 C6,0 9,3 9,7 C9,11 6,14 0,14"/><path transform="translate(19,0)" d="M9,0 H0 V14 H9 M0,7 H6"/><path transform="translate(38,0)" d="M8.5,3 C8.5,1 6,0.5 4,0.5 C1.5,0.5 0.5,2 0.5,4 C0.5,6 2.5,6.8 4.5,7 C6.5,7.2 8.5,8 8.5,10.5 C8.5,12.5 6,13.5 4,13.5 C2,13.5 0.5,13 0.5,11"/><path transform="translate(57,0)" d="M1,0 H7 M4,0 V14 M1,14 H7"/><path transform="translate(76,0)" d="M8.8,3.5 C7.8,1.3 6,0.5 4.5,0.5 C2,0.5 0.5,2.5 0.5,7 C0.5,11.5 2,13.5 4.5,13.5 C7,13.5 8.8,12 8.8,9.3 V7 H5.5"/><path transform="translate(95,0)" d="M0,14 V0 L9,14 V0"/></g></svg></span></a>';

  function wstaw() {
    if (document.querySelector(".wmc-wrap")) return;
    var styl = document.createElement("style");
    styl.textContent = CSS;
    document.head.appendChild(styl);

    var domena = (location.hostname || "strona").replace(/^www\./, "");
    var wrap = document.createElement("div");
    wrap.className = "wmc-wrap";
    wrap.innerHTML = HTML.replace("DOMENA", encodeURIComponent(domena));

    var stopki = document.getElementsByTagName("footer");
    var cel = stopki.length ? stopki[stopki.length - 1] : document.body;
    cel.appendChild(wrap);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", wstaw);
  else wstaw();
})();
