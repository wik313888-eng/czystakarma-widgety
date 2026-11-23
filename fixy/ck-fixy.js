/* CzystaKarma: poprawki CSS wstrzykiwane przez GTM (23.11.2026).
   1) "Wybierz bialko" na telefonie: kompilator CSS Shopera zamienia `grid-column: 1 / -1` na `grid-column: -1`
      (liczy to jak dzielenie), przez co powstaje trzecia kolumna i 6 z 9 kafli ma 23 px szerokosci.
      Zapis start/end osobno nie da sie "policzyc".
   2) Plakietka WM Design: motyw dokleja ikonke "link zewnetrzny" (::after) do kazdego a[target=_blank] w stopce.
   Docelowo punkt 1 poprawic w CSS sklepu (panel), wtedy ten plik mozna ograniczyc do punktu 2. */
(function () {
  if (window.__ckFixy) return;
  window.__ckFixy = 1;
  var css =
    "@media(max-width:767px){.ck-bialka__grid .ck-b[href*=\"egzotyczne\"]{grid-column-start:1!important;grid-column-end:-1!important}}" +
    ".ck-bialka__head p{grid-column-start:1!important;grid-column-end:-1!important}" +
    "a.wmc[href]::after{content:none!important;display:none!important}";
  var s = document.createElement("style");
  s.id = "ck-fixy";
  s.textContent = css;
  document.head.appendChild(s);
})();
