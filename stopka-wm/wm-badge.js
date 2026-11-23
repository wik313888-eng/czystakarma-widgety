/* WM Design — podpis "Projekt i wykonanie" w stopce. Uniwersalny: jeden <script> na dowolnej stronie.
   Wyglad 1:1 z kamasystem.eu (pastylka z gradientowa obwodka, shine przy najechaniu, uniesienie 3D).
   Link prowadzi na wmdesign.pl z utm_source = domena strony, wiec w statystykach widac, ktora
   realizacja przyprowadzila klienta.                                                              */
(function () {
  if (window.__wmBadge) return;
  window.__wmBadge = 1;

  var CSS = [
    ".wm-badge-wrap{text-align:center;padding:22px 16px 28px;line-height:1}",
    "a.wm-badge{display:inline-flex;align-items:center;gap:11px;padding:10px 20px;border-radius:100px;",
    " font-family:inherit;font-size:14px;font-weight:500;letter-spacing:.01em;text-decoration:none;",
    " color:rgba(255,255,255,.72);border:1px solid transparent;",
    " background:linear-gradient(#12161c,#12161c) padding-box,linear-gradient(120deg,#3ED6FF,#8A6BFF) border-box;",
    " position:relative;overflow:hidden;isolation:isolate;cursor:pointer;",
    " transition:transform .4s cubic-bezier(.22,.61,.36,1),box-shadow .4s cubic-bezier(.22,.61,.36,1),color .4s}",
    "a.wm-badge:hover{color:#fff;transform:translateY(-3px);text-decoration:none;",
    " box-shadow:0 14px 34px -12px rgba(138,107,255,.6),0 0 0 1px rgba(138,107,255,.25)}",
    "a.wm-badge::before{content:\"\";position:absolute;inset:0;z-index:-1;transform:translateX(-130%);",
    " background:linear-gradient(120deg,transparent 0%,rgba(255,255,255,.22) 50%,transparent 100%);",
    " transition:transform .85s cubic-bezier(.22,.61,.36,1)}",
    "a.wm-badge:hover::before{transform:translateX(130%)}",
    ".wm-badge svg{height:22px;width:auto;display:block;opacity:.9;transition:opacity .3s,filter .3s}",
    "a.wm-badge:hover svg{opacity:1;filter:drop-shadow(0 0 6px rgba(138,107,255,.5))}"
  ].join("");

  var LOGO =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 120" role="img" aria-label="WM Design">' +
    '<defs><linearGradient id="wmDuoB" x1="0" y1="0" x2="1" y2="0">' +
    '<stop offset="0" stop-color="#3ED6FF"/><stop offset="1" stop-color="#8A6BFF"/></linearGradient></defs>' +
    '<polyline points="98,87 79,33 60,67 41,33 22,87" fill="none" stroke="url(#wmDuoB)" stroke-width="10" stroke-linejoin="round" stroke-linecap="round" opacity="0.45"/>' +
    '<polyline points="22,33 41,87 60,53 79,87 98,33" fill="none" stroke="#E9E7E0" stroke-width="10" stroke-linejoin="round" stroke-linecap="round"/>' +
    '<g fill="none" stroke="#E9E7E0" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" transform="translate(140,48) scale(1.55)">' +
    '<path d="M0,0 V14 M0,0 C6,0 9,3 9,7 C9,11 6,14 0,14"/>' +
    '<path transform="translate(19,0)" d="M9,0 H0 V14 H9 M0,7 H6"/>' +
    '<path transform="translate(38,0)" d="M8.5,3 C8.5,1 6,0.5 4,0.5 C1.5,0.5 0.5,2 0.5,4 C0.5,6 2.5,6.8 4.5,7 C6.5,7.2 8.5,8 8.5,10.5 C8.5,12.5 6,13.5 4,13.5 C2,13.5 0.5,13 0.5,11"/>' +
    '<path transform="translate(57,0)" d="M1,0 H7 M4,0 V14 M1,14 H7"/>' +
    '<path transform="translate(76,0)" d="M8.8,3.5 C7.8,1.3 6,0.5 4.5,0.5 C2,0.5 0.5,2.5 0.5,7 C0.5,11.5 2,13.5 4.5,13.5 C7,13.5 8.8,12 8.8,9.3 V7 H5.5"/>' +
    '<path transform="translate(95,0)" d="M0,14 V0 L9,14 V0"/></g>' +
    '<line x1="140" y1="82" x2="301" y2="82" stroke="url(#wmDuoB)" stroke-width="2"/></svg>';

  function wstaw() {
    if (document.querySelector(".wm-badge-wrap")) return;
    var styl = document.createElement("style");
    styl.textContent = CSS;
    document.head.appendChild(styl);

    var domena = (location.hostname || "strona").replace(/^www\./, "");
    var a = document.createElement("a");
    a.className = "wm-badge";
    a.href = "https://wmdesign.pl/?utm_source=" + encodeURIComponent(domena) + "&utm_medium=footer-credit";
    a.target = "_blank";
    a.rel = "noopener";
    a.innerHTML = "<span>Projekt i wykonanie</span>" + LOGO;

    var wrap = document.createElement("div");
    wrap.className = "wm-badge-wrap";
    wrap.appendChild(a);

    var stopki = document.getElementsByTagName("footer");
    var cel = stopki.length ? stopki[stopki.length - 1] : document.body;
    cel.appendChild(wrap);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", wstaw);
  else wstaw();
})();
