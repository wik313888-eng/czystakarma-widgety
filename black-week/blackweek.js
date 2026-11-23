/* BLACK WEEK 23–30.11.2026 na czystakarma.pl (przez GTM).
   1) Wstazki "Okazja" na kaflach -> "BLACK WEEK −20%".
   2) Strona glowna: sekcja Black Week z 10 przecenionymi produktami (5x Menu 400 g + 5 przysmakow),
      wstawiana nad sekcja "Wybierz bialko". Ceny i Omnibus na sztywno = promocje Shoper id 6–15.
   Po 30.11.2026 23:59 skrypt nie robi nic (sam wygasa). */
(function () {
  if (window.__ckBW) return;
  window.__ckBW = 1;
  if (Date.now() > new Date("2026-11-30T23:59:59+01:00").getTime()) return;

  var FIOLET = "#401f58", LIMONKA = "#d8ff3f";

  /* ---------- 1) wstazka BLACK WEEK zamiast "Okazja" (wszedzie, gdzie Shoper daje ribbon_promo) ---------- */
  var css = "" +
    ".ribbon.ribbon_promo{font-size:0!important;line-height:0!important;letter-spacing:0!important;" +
    "background:linear-gradient(100deg,#17101f,#2c1245 70%," + FIOLET + ")!important;color:" + LIMONKA + "!important;" +
    "padding:9px 19px 9px 12px!important;border-radius:4px 0 0 4px!important;" +
    "clip-path:polygon(0 0,100% 0,calc(100% - 11px) 50%,100% 100%,0 100%);" +
    "box-shadow:0 2px 8px rgba(23,16,31,.45)!important}" +
    ".ribbon.ribbon_promo::after{content:'BLACK WEEK −20%';font-size:14px;font-weight:900;line-height:1;" +
    "letter-spacing:.06em;color:" + LIMONKA + ";white-space:nowrap}" +

    /* ---------- 2) sekcja na glownej ---------- */
    ".ckbw{position:relative;overflow:hidden;width:91.666%;max-width:1440px;margin:26px auto 34px;padding:34px 26px 30px;border-radius:24px;" +
    "background:radial-gradient(900px 420px at 85% -10%,rgba(216,255,63,.14),transparent 60%)," +
    "linear-gradient(135deg,#120a1e,#2c1245 62%," + FIOLET + ");color:#fff}" +
    ".ckbw *{box-sizing:border-box}" +
    ".ckbw-head{display:flex;flex-wrap:wrap;align-items:baseline;gap:10px 18px;margin:0 0 6px}" +
    ".ckbw-pill{display:inline-block;background:" + LIMONKA + ";color:#17101f;font-size:12px;font-weight:800;" +
    "letter-spacing:.08em;padding:6px 12px;border-radius:999px;text-transform:uppercase}" +
    ".ckbw h2{margin:10px 0 2px;font-size:clamp(30px,5vw,46px);line-height:1.04;font-weight:900;color:#fff;letter-spacing:.01em}" +
    ".ckbw h2 b{color:" + LIMONKA + ";font-weight:900}" +
    ".ckbw-sub{margin:4px 0 20px;font-size:15px;color:rgba(255,255,255,.82);max-width:640px}" +
    ".ckbw-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:12px}" +
    ".ckbw-k{display:flex;flex-direction:column;background:#fff;border-radius:14px;padding:12px 12px 14px;" +
    "text-decoration:none;color:#1c1324;position:relative;transition:transform .2s,box-shadow .2s}" +
    ".ckbw-k:hover{transform:translateY(-4px);box-shadow:0 14px 26px -12px rgba(0,0,0,.55);text-decoration:none;color:#1c1324}" +
    ".ckbw-k img{width:100%;aspect-ratio:1/1;object-fit:contain;margin:0 0 8px;border-radius:10px;mix-blend-mode:multiply}" +
    ".ckbw{scroll-margin-top:90px}" +
    ".ckbw-m{font-size:10.5px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#8a7f96}" +
    ".ckbw-n{font-size:15px;font-weight:800;margin:2px 0 8px;color:#1c1324;line-height:1.25}" +
    ".ckbw-c{margin-top:auto;display:flex;align-items:baseline;gap:8px;flex-wrap:wrap}" +
    ".ckbw-now{font-size:19px;font-weight:900;color:" + FIOLET + "}" +
    ".ckbw-old{font-size:13px;color:#9a90a6;text-decoration:line-through}" +
    ".ckbw-proc{font-size:11px;font-weight:800;background:#17101f;color:" + LIMONKA + ";border-radius:5px;padding:3px 6px}" +
    ".ckbw-omni{font-size:10px;color:#9a90a6;margin-top:5px;line-height:1.3}" +
    ".ckbw-cta{display:flex;gap:12px;flex-wrap:wrap;margin-top:22px}" +
    ".ckbw-cta a{display:inline-block;padding:13px 26px;border-radius:999px;font-size:14.5px;font-weight:700;text-decoration:none;transition:transform .15s}" +
    ".ckbw-cta a:hover{transform:translateY(-2px);text-decoration:none}" +
    ".ckbw-cta .ckbw-b1{background:" + LIMONKA + ";color:#17101f}" +
    ".ckbw-cta .ckbw-b2{background:transparent;color:#fff;border:1.5px solid rgba(255,255,255,.5)}" +
    "@media(max-width:1100px){.ckbw-grid{grid-template-columns:repeat(3,1fr)}}" +
    "@media(max-width:700px){.ckbw{width:auto;margin:18px 12px 26px;padding:26px 16px 24px;border-radius:18px}" +
    ".ckbw-grid{display:flex;overflow-x:auto;gap:10px;margin:0 -16px;padding:2px 16px 10px;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch}" +
    ".ckbw-grid::-webkit-scrollbar{display:none}" +
    ".ckbw-k{flex:0 0 46%;scroll-snap-align:start}}" +
    "@media(prefers-reduced-motion:reduce){.ckbw-k,.ckbw-cta a{transition:none}}";

  /* ---------- 3) waski pasek na gorze kazdej strony (poza koszykiem i zamowieniem) ---------- */
  css += ".ckbw-pas{display:flex;width:100%;box-sizing:border-box;align-self:stretch;justify-content:center;align-items:center;gap:8px 14px;flex-wrap:wrap;padding:10px 14px;" +
    "background:linear-gradient(100deg,#120a1e,#2c1245 70%," + FIOLET + ");color:#fff!important;font-size:14px;font-weight:600;" +
    "text-decoration:none!important;text-align:center;line-height:1.3}" +
    ".ckbw-pas b{color:" + LIMONKA + ";font-weight:900;letter-spacing:.05em}" +
    ".ckbw-pas i{font-style:normal;background:" + LIMONKA + ";color:#17101f;border-radius:999px;padding:4px 12px;font-size:12.5px;font-weight:800;white-space:nowrap}" +
    "@media(max-width:700px){.ckbw-pas{font-size:13px;padding:9px 10px}}";

  var styl = document.createElement("style");
  styl.textContent = css;
  document.head.appendChild(styl);

  var sciezka = location.pathname.replace(/\/+$/, "") || "/";
  var glowna = sciezka === "/" || sciezka === "/pl";

  function pasek() {
    if (/basket|order|checkout/i.test(sciezka) || document.querySelector(".ckbw-pas")) return;
    var mn = document.querySelector("main");
    if (!mn) return;
    var a = document.createElement("a");
    a.className = "ckbw-pas";
    a.href = glowna ? "#black-week" : "/#black-week";
    a.innerHTML = "<span><b>BLACK WEEK −20%</b> na 5 smaków Kłaczek Menu i 5 przysmaków · do niedzieli 30.11</span><i>Zobacz →</i>";
    mn.insertBefore(a, mn.firstChild);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", pasek);
  else pasek();

  if (!glowna) return;

  var P = [
    { m: "Kłaczek Menu 400 g", n: "Kurczak", o: "19,99", c: "15,99", img: 1832, u: "/klaczek-menu-kurczak-400g" },
    { m: "Kłaczek Menu 400 g", n: "Kaczka", o: "23,00", c: "18,40", img: 1197, u: "/karma-mokra-kaczka-dla-psa-wybrednego-human-grade-szklany-sloik" },
    { m: "Kłaczek Menu 400 g", n: "Łosoś", o: "23,00", c: "18,40", img: 1201, u: "/klaczek-menu-losos-400g" },
    { m: "Kłaczek Menu 400 g", n: "Konina", o: "24,00", c: "19,20", img: 1196, u: "/karma-mokra-konina-dla-psa-alergika-human-grade-szklany-sloik" },
    { m: "Kłaczek Menu 400 g", n: "Kozina", o: "26,00", c: "20,80", img: 1194, u: "/karma-mokra-kozina-dla-psa-alergika-human-grade-szklany-sloik" },
    { m: "Przysmak 300 g", n: "Air Dried konina", o: "45,00", c: "36,00", img: 2155, u: "/suszona-konina-dla-psa-300g-air-dried-horse" },
    { m: "Przysmak 300 g", n: "Air Dried jagnięcina", o: "45,00", c: "36,00", img: 2157, u: "/suszona-jagniecina-dla-psa-300g-air-dried-lamb" },
    { m: "Gryzak 150 g", n: "Dental z kaczką", o: "25,00", c: "20,00", img: 2159, u: "/gryzak-dentystyczny-dla-psa-dental-beef-duck-150g" },
    { m: "Gryzak 150 g", n: "Dental z koniną", o: "27,00", c: "21,60", img: 2161, u: "/gryzak-dentystyczny-dla-psa-dental-beef-horse-150g" },
    { m: "Gryzak 150 g", n: "Dental z królikiem", o: "27,00", c: "21,60", img: 2163, u: "/gryzak-dentystyczny-dla-psa-dental-beef-rabbit-150g" }
  ];

  function kafle() {
    return P.map(function (p) {
      return '<a class="ckbw-k" href="' + p.u + '">' +
        '<img src="/environment/cache/images/productGfx_' + p.img + '_350_350/p.webp" alt="' + p.n + '" loading="lazy" width="350" height="350">' +
        '<span class="ckbw-m">' + p.m + "</span>" +
        '<span class="ckbw-n">' + p.n + "</span>" +
        '<span class="ckbw-c"><span class="ckbw-now">' + p.c + ' zł</span><span class="ckbw-old">' + p.o + ' zł</span><span class="ckbw-proc">−20%</span></span>' +
        '<span class="ckbw-omni">Najniższa cena z 30 dni przed obniżką: ' + p.o + " zł</span></a>";
    }).join("");
  }

  function dniDoKonca() {
    var ms = new Date("2026-11-30T23:59:59+01:00").getTime() - Date.now();
    return Math.max(1, Math.ceil(ms / 86400000));
  }

  function wstaw() {
    if (document.querySelector(".ckbw")) return;
    var sec = document.createElement("section");
    sec.className = "ckbw";
    sec.id = "black-week";
    var dni = dniDoKonca();
    sec.innerHTML =
      '<div class="ckbw-head"><span class="ckbw-pill">Tylko do niedzieli 30.11</span>' +
      '<span style="font-size:13px;color:rgba(255,255,255,.65)">koniec za ' + dni + (dni === 1 ? " dzień" : " dni") + "</span></div>" +
      "<h2>BLACK WEEK <b>−20%</b></h2>" +
      '<p class="ckbw-sub">5 smaków Kłaczek Menu w słoikach i 5 suszonych przysmaków — przez tydzień 20% taniej. Bez kodów, ceny już obniżone.</p>' +
      '<div class="ckbw-grid">' + kafle() + "</div>" +
      '<div class="ckbw-cta"><a class="ckbw-b1" href="/klaczek-menu-karma-dla-psa">Karmy Kłaczek Menu</a>' +
      '<a class="ckbw-b2" href="https://czystakarma.pl/karma-suszona-powietrzem-dla-psa">Przysmaki i gryzaki</a></div>';

    /* zaraz pod hero: sekcja jako dziecko <main>, po siatce z modulem hero */
    var mn = document.querySelector("main") || document.body;
    var hero = document.querySelector(".ck-hero-text");
    var siatka = hero;
    while (siatka && siatka.parentElement && siatka.parentElement !== mn) siatka = siatka.parentElement;
    if (siatka && siatka.parentElement === mn) mn.insertBefore(sec, siatka.nextSibling);
    else mn.insertBefore(sec, mn.firstChild);
    /* wejscie z paska na innej stronie: /#black-week -> przewin, gdy sekcja juz jest */
    if (location.hash === "#black-week") setTimeout(function () { sec.scrollIntoView({ block: "start" }); }, 300);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", wstaw);
  else wstaw();
})();
