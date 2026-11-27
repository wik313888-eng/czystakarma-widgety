
(function() {
  'use strict';

  var url = window.location.href.toLowerCase();

  var faqData = {

    // ===== ŁOSOŚ =====
    'losos': {
      urls: ['klaczek-menu-losos'],
      faq: [
        { q: "Czy olej z łososia dla psa można zastąpić karmą z łososiem?", a: "Karma z łososiem dostarcza omega-3 w połączeniu z pełnowartościowym białkiem, witaminami i minerałami — to kompleksowe rozwiązanie. Olej z łososia jest skoncentrowanym źródłem omega-3 ale bez białka. Kłaczek Menu Łosoś zawiera obie formy — 65% mięsa łososia i olej z łososia (1,5%) — co daje wyższą podaż omega-3 niż sama suplementacja olejem do zwykłej karmy." },
        { q: "Czy karma z łososiem pomaga przy wypadaniu sierści psa?", a: "Łosoś to bogate źródło kwasów EPA i DHA (omega-3), które wbudowują się w błony komórek skóry, wzmacniają barierę ochronną naskórka i mogą zmniejszać stany zapalne odpowiedzialne za wypadanie sierści. Właściciele zgłaszają poprawę kondycji sierści przy regularnym podawaniu. Kłaczek Menu Łosoś zawiera 65% łososia i dodatkowo olej z łososia — podwójne źródło omega-3." },
        { q: "Co na wypadanie sierści u psa — co pomaga?", a: "Nadmierne wypadanie sierści poza sezonem linienia często wynika z niedoboru kwasów omega-3, alergii pokarmowej lub suchej skóry. Karma z łososiem jako głównym składnikiem dostarcza EPA i DHA, które wspierają kondycję sierści od środka. Efekty widoczne po 4–6 tygodniach regularnego podawania. Przy alergii pokarmowej konieczna jest dieta eliminacyjna — łosoś jako monobiałkowa karma jest dobrym pierwszym krokiem." },
        { q: "Sucha skóra u psa — jak leczyć dietą?", a: "Sucha, łuszcząca się skóra u psa często sygnalizuje niedobór nienasyconych kwasów tłuszczowych w diecie. Karma z łososiem dostarcza kwasów omega-3 EPA i DHA, które wbudowują się w błony komórek skóry i wzmacniają jej naturalną barierę ochronną. Kłaczek Menu Łosoś ma 15% tłuszczu, z czego znaczna część to tłuszcz rybny. Efekty na skórze widoczne po 6–8 tygodniach regularnego podawania." },
        { q: "Omega-3 dla psa — jakie korzyści dla skóry i sierści?", a: "Kwasy omega-3 EPA i DHA działają od środka — wbudowują się w błony komórek skóry, zmniejszają stany zapalne odpowiedzialne za świąd i wypadanie sierści, wzmacniają barierę ochronną naskórka. Łosoś to najlepsze naturalne źródło obu form. Kłaczek Menu Łosoś dostarcza 65% łososia i olej z łososia (1,5%) — to wyjątkowo wysoka podaż omega-3 w jednej karmie mokrej." },
        { q: "Jaka karma rybna dla psa jest najlepsza?", a: "Karma rybna dla psa powinna zawierać tłuste ryby morskie bogate w omega-3 EPA i DHA — łosoś, sardynki lub śledź. Ważna jest metoda produkcji — gotowanie na parze przed zapakowaniem lepiej zachowuje kwasy omega-3 niż sterylizacja w 120–130°C. Szklany słoik bez BPA jest lepszy niż metalowa puszka — omega-3 są wrażliwe na utlenianie w kontakcie z metalem. Kłaczek Menu Łosoś ma 65% łososia i olej z łososia w szklanym słoiku." },
        { q: "Czy łosoś jest zdrowy dla psa?", a: "Tak — łosoś to wartościowe źródło białka i kwasów omega-3 EPA i DHA dla psa. Dostarcza witamin A, B12, D i E oraz minerałów. Kwasy omega-3 wspierają zdrowie skóry, sierści, układu sercowo-naczyniowego i mózgu. W Kłaczek Menu Łosoś mięso i tusze łososia stanowią 65% składu — jakości human grade. Dodatkowy olej z łososia (1,5%) to podwójne źródło omega-3." }
      ]
    },

    // ===== KRÓLIK =====
    'krolik': {
      urls: ['klaczek-menu-krolik'],
      faq: [
        { q: "Czy pies może jeść ryż?", a: "Tak — ryż jest bezpieczny dla psów i dobrze tolerowany przez wrażliwy układ pokarmowy. Brązowy ryż w Kłaczek Menu Królik to pełnoziarniste, lekkostrawne źródło węglowodanów bogate w witaminy z grupy B i błonnik — nie wywołuje skoków insuliny, dobrze tolerowany przez psy z wrażliwymi jelitami. To nie jest typowy wypełniacz jak pszenica czy kukurydza, lecz składnik funkcjonalny." },
        { q: "Ryż dla psa — kiedy podawać i jakie korzyści?", a: "Ryż dla psa jest szczególnie wartościowy przy problemach trawiennych — łagodzi podrażniony układ pokarmowy i pomaga uformować stolec. Brązowy ryż zawiera więcej błonnika i witamin niż biały. W Kłaczek Menu Królik brązowy ryż stanowi 6% składu — jedyny smak w linii z tym składnikiem. Wspiera uczucie sytości i dostarcza energii bez nadmiernego obciążania trzustki." },
        { q: "Karma z królikiem dla psa alergika — co warto wiedzieć?", a: "Królik to białko rzadko spotykane w popularnych karmach — większość psów z alergią nie miała z nim wcześniej kontaktu, więc układ odpornościowy go nie rozpoznaje. Kłaczek Menu Królik jest monobiałkowy, bez kurczaka, bez wołowiny. Zawiera brązowy ryż — nie dla psów na ściśle bezzbożowej diecie eliminacyjnej (wybierz wtedy Koninę lub Kozinę). Dobry pierwszy krok przy diagnostyce alergii pokarmowej." },
        { q: "Karma monobiałkowa dla psa — co to znaczy i kiedy stosować?", a: "Karma monobiałkowa dla psa zawiera dokładnie jedno źródło białka zwierzęcego — np. wyłącznie królika, wyłącznie koninę lub wyłącznie łososia. Dzięki temu układ odpornościowy psa z alergią pokarmową nie jest stymulowany przez alergen. To podstawa diety eliminacyjnej — stosuje się ją przez minimum 8–12 tygodni bez żadnych innych białek, smakołyków ani suplementów z białkami." },
        { q: "Lekkostrawna karma mokra dla psa — jak wybrać?", a: "Lekkostrawna karma mokra powinna mieć niski tłuszcz, jedno rzadkie białko i krótki skład bez zbóż-wypełniaczy. Królik to jedno z najchudszych i najlekkostrawniejszych mięs — delikatna struktura włókien ułatwia trawienie. Kłaczek Menu Królik ma 150 kcal/100g i 9% tłuszczu. Brązowy ryż jako lekkostrawne węglowodany wspiera odbudowę mikrobioty jelitowej." },
        { q: "Dieta eliminacyjna dla psa — od czego zacząć?", a: "Dieta eliminacyjna polega na karmieniu wyłącznie jednym nowym białkiem przez minimum 8–12 tygodni. Wybierz białko którego pies wcześniej nie jadł — królik, konina lub kozina. W całym okresie nie podawaj żadnych innych karm, smakołyków ani suplementów z białkami zwierzęcymi. Obserwuj skórę, uszy i stolec. Wyniki diety warto omówić z weterynarzem po zakończeniu obserwacji." },
        { q: "Czy gotowany ryż dla psa jest zdrowy?", a: "Tak — gotowany ryż jest zdrowy dla psów, szczególnie brązowy który zawiera więcej błonnika i witamin B niż biały. Jest lekkostrawny, rzadko uczula i dobrze reguluje konsystencję stolca. W karmach gotowych ryż jest gotowany przed zapakowaniem — w Kłaczek Menu Królik brązowy ryż stanowi 6% składu jako jedyny smak w linii z tym składnikiem. Nie należy go mylić z pszenicą czy kukurydzą które są typowymi wypełniaczami." }
      ]
    },

    // ===== KONINA =====
    'konina': {
      urls: ['karma-mokra-konina', 'klaczek-menu-konina'],
      faq: [
        { q: "Łupież u psa — skąd się bierze i co pomaga?", a: "Łupież u psa może mieć podłoże alergiczne, grzybicze lub wynikać z niedoboru kwasów tłuszczowych. Przy podłożu alergicznym kluczowa jest zmiana na karmę monobiałkową z rzadkim białkiem którego pies wcześniej nie jadł — konina lub kozina. Efekty na skórze widoczne po 6–8 tygodniach konsekwentnej diety eliminacyjnej. Przy nawracającym łupieżu mimo zmiany diety konieczna diagnostyka u weterynarza dermatologa." },
        { q: "Świąd u psa — jakie są przyczyny i co pomaga?", a: "Świąd u psa najczęściej powoduje alergia pokarmowa, atopowe zapalenie skóry lub alergia środowiskowa. Przy alergii pokarmowej świąd utrzymuje się przez cały rok. Pierwszym krokiem jest zmiana na karmę monobiałkową z rzadkim białkiem — konina lub kozina — przez minimum 8 tygodni. Konina jako najrzadsze dostępne białko jest pierwszym wyborem gdy kurczak, wołowina i jagnięcina już zawiodły." },
        { q: "Zapalenie uszu u psa — czy może być objawem alergii?", a: "Tak — nawracające zapalenia uszu to jeden z typowych objawów alergii pokarmowej u psów. Gdy zapalenie wraca mimo leczenia, przyczyną może być nierozpoznany alergen w karmie. Zmiana na karmę monobiałkową z rzadkim białkiem (konina, kozina) przez minimum 8 tygodni pozwala ocenić czy dieta ma wpływ. Kłaczek Menu Konina — najrzadsze białko na rynku, bezzbożowa, bez kurczaka i wołowiny." },
        { q: "Konina dla psa — czy jest zdrowa i kiedy stosować?", a: "Tak — mięso końskie to wartościowe źródło białka dla psa z 16,3% białka i niskim tłuszczem (6,5%). Jest lekkostrawne i najrzadziej uczula ze wszystkich popularnych mięs — psy rzadko miały z nim kontakt przez karmy komercyjne. Konina jest pierwszym wyborem przy diecie eliminacyjnej i silnej alergii wielobiałkowej gdy kurczak, wołowina, indyk i jagnięcina już zawiodły." },
        { q: "Mokra karma bez kurczaka dla psa — na co zwrócić uwagę?", a: "Karma mokra bez kurczaka powinna zawierać inne pełnowartościowe białko — koninę, kozinę, jagnięcinę lub łososia. Ważne: sprawdź skład pod kątem ukrytych składników drobiu (wywar drobiowy, tłuszcz drobiowy, mączka drobiowa). Kłaczek Menu Konina nie zawiera żadnych składników drobiu ani zbóż — 70% mięsa końskiego, bezzbożowa, szklany słoik bez BPA." },
        { q: "Karma dla psa z nietolerancją pokarmową — jak wybrać?", a: "Karma dla psa z nietolerancją pokarmową powinna być monobiałkowa z rzadkim białkiem (konina, kozina, królik), bezzbożowa, bez sztucznych konserwantów i w szklanym słoiku bez BPA. Dieta eliminacyjna z jednym nowym białkiem przez minimum 8 tygodni to metoda diagnostyczna i terapeutyczna jednocześnie. Kłaczek Menu Konina ma najprostszy skład w linii — 17 składników, najrzadsze białko, zero zbóż." },
        { q: "Jak złagodzić swędzenie skóry u psa naturalnie?", a: "Przy alergii pokarmowej podstawą jest eliminacja alergenu — zmiana na karmę monobiałkową z rzadkim białkiem (konina, kozina) przez minimum 8 tygodni. Kwasy omega-3 z oleju z alg (w Kłaczek Menu Konina) mogą wspierać barierę skórną i zmniejszać stany zapalne. Kąpiele z szamponem łagodzącym podrażnienia. Przy braku poprawy po 8 tygodniach konieczna diagnostyka alergologiczna u weterynarza — świąd może mieć też podłoże środowiskowe." }
      ]
    },

    // ===== KACZKA =====
    'kaczka': {
      urls: ['karma-mokra-kaczka'],
      faq: [
        { q: "Dlaczego pies nie chce jeść i co zrobić?", a: "Pies nie chce jeść najczęściej z powodu nudy żywieniowej, stresu, choroby lub wybredności rasowej. Pierwszym krokiem jest zmiana na karmę z intensywnym aromatem — kaczka dzięki najwyższej zawartości naturalnego tłuszczu (13%) działa zapachowo inaczej niż delikatniejsze białka. Właściciele psów niejadków zgłaszają że kaczka jest często pierwszym smakiem który pies zjada bez wymuszania. Jeśli pies nie je od kilku dni i jest osowiały, warto skonsultować się z weterynarzem." },
        { q: "Jaka karma dla wybrednego psa niejadka?", a: "Karma dla wybrednego psa niejadka powinna mieć intensywny, naturalny aromat — tłuszcz jest nośnikiem zapachu, im więcej tym silniejszy sygnał zapachowy. Kłaczek Menu Kaczka ma 13% naturalnego tłuszczu — najwyższy w linii. Mokra karma w słoiku pachnie i wygląda jak prawdziwe jedzenie, widoczne kawałki mięsa. Rotacja białek (indyk → kaczka → łosoś) często rozwiązuje problem wybredności przez urozmaicenie diety." },
        { q: "Karma wysokoenergetyczna dla aktywnego psa — co wybrać?", a: "Karma wysokoenergetyczna dla aktywnego psa powinna mieć wyższy tłuszcz i wyższą kaloryczność. Kłaczek Menu Kaczka ma 180 kcal/100g i 13% tłuszczu — najwyższe wartości spośród karm mięsnych w linii Kłaczek Menu. Idealna dla psów sportowych, pracujących i bardzo aktywnych ras jak husky, border collie czy owczarki. Tłuszcz dostarcza energii wolnospalającej przy długotrwałym wysiłku." },
        { q: "Dlaczego pies nie je od tygodnia — kiedy do weterynarza?", a: "Pies który nie je przez ponad 2–3 dni wymaga wizyty u weterynarza — może to być objaw choroby, bólu lub niedrożności. Krótsze epizody niechęci do jedzenia (1–2 dni) u zdrowego psa często mają podłoże behawioralne lub żywieniowe. Przy psach wybrednych rasowo warto spróbować zmiany na karmę z intensywnym aromatem — kaczka lub wołowina — przed wizytą weterynaryjną." },
        { q: "Jak zachęcić psa do jedzenia?", a: "Sposoby na zachęcenie psa do jedzenia: zmiana na karmę z intensywniejszym aromatem (kaczka, wołowina), podgrzanie mokrej karmy do temperatury ciała, rotacja białek żeby uniknąć nudy żywieniowej, ustalenie stałych pór posiłków i zabranie miski po 15 minutach. Mokra karma pachnie i wygląda bardziej apetycznie niż sucha. Jeśli pies odmawia jedzenia regularnie przez kilka dni, warto wykluczyć przyczynę zdrowotną." },
        { q: "Rotacja karm dla psa — czy jest zdrowa?", a: "Tak — rotacja białek jest korzystna dla psów bez alergii pokarmowej. Zmiana białka co kilka miesięcy (indyk → kaczka → łosoś) zmniejsza ryzyko wykształcenia nietolerancji, urozmaica dietę i utrzymuje apetyt. Rotację wprowadza się stopniowo przez 7 dni. Psy z alergią pokarmową lub na diecie eliminacyjnej powinny stosować jedno białko minimum 8–12 tygodni przed zmianą." },
        { q: "Czy kaczka jest zdrowa dla psa?", a: "Tak — kaczka to wartościowe źródło białka, żelaza, cynku i witamin z grupy B. Wyższa zawartość naturalnego tłuszczu (13%) oznacza więcej energii i intensywniejszy aromat. Kaczka jest rzadszym białkiem niż kurczak — mniejsze ryzyko że pies był już na nią uczulony. W Kłaczek Menu mięso kaczki i szyje kacze stanowią 70% składu, jakości human grade." }
      ]
    },

    // ===== KOZINA =====
    'kozina': {
      urls: ['karma-mokra-kozina', 'klaczek-menu-kozina'],
      faq: [
        { q: "Jakie mięso najmniej uczula psa?", a: "Mięso które najrzadziej uczula psy to kozina, konina, kangur i dziczyzna — białka rzadko spotykane w karmach komercyjnych, na które psy nie zdążyły wykształcić reakcji immunologicznej. Kurczak i wołowina jako najczęściej stosowane wywołują alergie najczęściej. Karma z koziną to jeden z pierwszych wyborów przy diecie eliminacyjnej i alergii skórnej u psa." },
        { q: "Atopowe zapalenie skóry u psa — jakie są objawy?", a: "Objawy atopowego zapalenia skóry u psa to nawracający świąd, drapanie, wylizywanie łap, zaczerwienienie skóry między palcami, nawracające zapalenia uszu i matowa sierść. Atopia może mieć podłoże pokarmowe lub środowiskowe. Przy podłożu pokarmowym zmiana na karmę monobiałkową z rzadkim białkiem — np. kozinę — przez minimum 8 tygodni jest pierwszym krokiem diagnostycznym." },
        { q: "Jaka karma dla psa z alergią skórną?", a: "Przy alergii skórnej u psa najskuteczniejsza jest karma monobiałkowa z rzadkim białkiem — kozina, konina lub królik. Bezzbożowa, bez kurczaka, bez sztucznych konserwantów, w szklanym słoiku bez BPA. Kłaczek Menu Kozina zawiera 70% mięsa koziego jakości human grade — rzadkie białko, naturalne antyoksydanty (brzoskwinia, burak czerwony), bez żadnych popularnych alergenów." },
        { q: "Co na wypadanie sierści u psa?", a: "Nadmierne wypadanie sierści u psa może być objawem alergii pokarmowej — obok świądu i problemów skórnych. Zmiana na karmę monobiałkową z rzadkim białkiem i bezzbożową może poprawić kondycję sierści po 6–8 tygodniach. Brzoskwinia i burak czerwony w Kłaczek Menu Kozina dostarczają naturalnych antyoksydantów wspierających skórę i sierść." },
        { q: "Karma dla psa alergika — jak wybrać?", a: "Karma dla psa alergika powinna mieć jedno rzadkie źródło białka (kozina, konina, królik), być bezzbożowa, bez kurczaka i bez sztucznych konserwantów. Opakowanie ma znaczenie — szklany słoik bez BPA nie zawiera substancji migrujących do jedzenia. Karma powinna być pełnoporcjowa, zgodna z normami FEDIAF. Najlepsza karma dla psa z alergią skórną to karma monobiałkowa z białkiem którego pies jeszcze nie jadł." },
        { q: "Karma hipoalergiczna mokra dla psa — na co zwrócić uwagę?", a: "Karma hipoalergiczna mokra dla psa powinna zawierać jedno rzadkie białko (kozina, konina, królik), być bezzbożowa, bez kurczaka i bez sztucznych konserwantów. Szklany słoik bez BPA jest lepszy niż puszka — zero migracji substancji z opakowania. Ważna jest pełnoporcjowość — karma musi pokrywać wszystkie potrzeby żywieniowe psa, zgodna z normami FEDIAF." },
        { q: "Jak długo trwa dieta eliminacyjna dla psa?", a: "Dieta eliminacyjna dla psa trwa minimum 8–12 tygodni ścisłego stosowania jednego białka. W tym czasie pies dostaje wyłącznie karmę z jednym rzadkim białkiem — np. kozinę — bez żadnych innych karm, smakołyków ani suplementów z białkami. Pierwsze efekty (zmniejszenie świądu) po 4–6 tygodniach. Pełna poprawa skóry po 8–12 tygodniach." }
      ]
    },

    // ===== JAGNIĘCINA =====
    'jagniecina': {
      urls: ['karma-mokra-jagniecina'],
      faq: [
        { q: "Biegunka u psa — co podać i kiedy do weterynarza?", a: "Przy biegunce u psa pierwszym krokiem jest 12–24 godzinny post z dostępem do wody, a następnie lekka dieta — lekkostrawna karma mokra z rzadkim białkiem jak jagnięcina. Jeśli biegunka trwa ponad 48 godzin, jest krwawa lub towarzyszą jej wymioty i apatia — konieczna wizyta u weterynarza. Karma monobiałkowa z jagnięciną bez zbóż i bez kurczaka pomaga ustalić czy przyczyną jest nietolerancja białka." },
        { q: "Jaka karma dla psa z problemami trawiennymi?", a: "Najlepsza karma dla psa z problemami trawiennymi to karma mokra z jednym rzadkim, delikatnym białkiem — jagnięcina, indyk lub kozina. Bezzbożowa, bez kurczaka, bez sztucznych konserwantów. Jagnięcina ma delikatną strukturę włókien i jest wyjątkowo dobrze tolerowana przy nawracających biegunkach i gazach. Kłaczek Menu Jagnięcina zawiera dodatkowo olej z nasion konopi z naturalnymi kwasami omega — jedyny taki składnik w linii." },
        { q: "Czy omega-3 dla psa pomaga przy problemach skórnych i trawiennych?", a: "Tak — kwasy omega-3 mogą wspierać naturalną barierę ochronną skóry i zmniejszać stany zapalne. Olej z nasion konopi w Kłaczek Menu Jagnięcina zawiera idealne proporcje omega-3 do omega-6 (1:3). To jedyny smak w linii z tym składnikiem. Przy problemach skórnych na tle alergii pokarmowej dieta jest kluczowym elementem — warto skonsultować z weterynarzem." },
        { q: "Czy probiotyk dla psa pomaga przy biegunce i problemach trawiennych?", a: "Probiotyk dla psa może wspierać odbudowę mikrobioty jelitowej po biegunce, antybiotykoterapii lub zmianie karmy. Działa najlepiej w połączeniu z lekkostrawną, monobiałkową karmą mokrą. Jagnięcina bez zbóż nie obciąża odbudowującego się jelita. Przed podaniem probiotyku psu warto skonsultować się z weterynarzem — nie każdy probiotyk jest odpowiedni dla każdego psa." },
        { q: "Śmierdzące gazy u psa — co je powoduje i co pomaga?", a: "Śmierdzące gazy u psa najczęściej powoduje nietolerancja pokarmowa, fermentacja zbóż i skrobi w jelicie grubym oraz niska jakość białka w karmie. Zmiana na karmę bezzbożową z jednym rzadkim białkiem (jagnięcina, indyk) znacząco zmniejsza produkcję gazów. Olej z nasion konopi w Kłaczek Menu Jagnięcina wspiera mikrobiotę jelitową. Przy utrzymujących się gazach warto wykluczyć choroby jelita u weterynarza." },
        { q: "Karma z jagnięciną dla psa — dla kogo jest najlepsza?", a: "Karma z jagnięciną jest najlepsza dla psów z wrażliwym układem pokarmowym, nawracającymi biegunkami i nietolerancją kurczaka lub wołowiny. Jagnięcina to rzadsze białko niż kurczak — mniejsze ryzyko reakcji alergicznej. Idealna przy rekonwalescencji, po antybiotykoterapii i jako pierwsza karma mokra po problemach trawiennych. Kłaczek Menu Jagnięcina ma 135 kcal/100g i olej z nasion konopi — jedyny smak w linii z tym składnikiem." },
        { q: "Karma dla psa po operacji — co podawać?", a: "Po operacji pies potrzebuje lekkostrawnej, monobiałkowej karmy mokrej z rzadkim, delikatnym białkiem. Jagnięcina jest wyjątkowo dobrze tolerowana przez odbudowujący się układ pokarmowy. Kłaczek Menu Jagnięcina (135 kcal/100g, bez zbóż, olej z nasion konopi) to dobry wybór w rekonwalescencji. Karmienie małymi porcjami 3–4 razy dziennie po zabiegu. Zawsze skonsultuj dietę pooperacyjną z weterynarzem." }
      ]
    },

    // ===== INDYK =====
    'indyk': {
      urls: ['karma-mokra-indyk', 'klaczek-menu-indyk'],
      faq: [
        { q: "Jakie są objawy alergii pokarmowej u psa?", a: "Objawy alergii pokarmowej u psa to przede wszystkim świąd skóry, wylizywanie i gryzienie łap, nawracające zapalenia uszu, matowa lub wypadająca sierść oraz biegunki i wzdęcia. W odróżnieniu od alergii środowiskowej, alergia pokarmowa utrzymuje się przez cały rok. Pierwszym krokiem diagnostycznym jest zmiana na karmę monobiałkową z jednym rzadkim białkiem — np. indykiem — przez minimum 8 tygodni." },
        { q: "Co to jest karma monobiałkowa dla psa i kiedy ją stosować?", a: "Karma monobiałkowa dla psa zawiera dokładnie jedno źródło białka zwierzęcego — np. wyłącznie indyka, wyłącznie kozinę lub wyłącznie koninę. Dzięki temu układ odpornościowy psa z alergią lub nietolerancją pokarmową nie jest stymulowany przez znane alergeny. Stosuje się ją w diecie eliminacyjnej (min. 8 tygodni) oraz na co dzień u psów z potwierdzoną nietolerancją." },
        { q: "Jaka lekkostrawna karma mokra dla psa z problemami trawiennymi?", a: "Lekkostrawna karma mokra dla psa z problemami trawiennymi powinna mieć niski tłuszcz, jedno źródło białka i krótki skład bez zbóż. Kłaczek Menu Indyk ma 5,7% tłuszczu i 141 kcal/100g — to najniższe wartości w linii. Wysoka wilgotność (70%) wspiera trawienie. Przy biegunkach i gazach warto podzielić porcję na 3 mniejsze posiłki zamiast 2 większych." },
        { q: "Nietolerancja pokarmowa u psa — objawy i czym różni się od alergii?", a: "Nietolerancja pokarmowa u psa to reakcja układu pokarmowego — biegunka, gazy, wymioty — bez udziału układu odpornościowego. Alergia pokarmowa angażuje układ immunologiczny i daje objawy skórne: świąd, drapanie, zapalenia uszu. Obie wymagają diety eliminacyjnej z jednym rzadkim białkiem. Przy podejrzeniu nietolerancji pokarmowej warto skonsultować się z weterynarzem." },
        { q: "Jaka karma mokra dla psa alergika bez drobiu?", a: "Karma mokra dla psa alergika bez drobiu powinna zawierać rzadkie białko inne niż kurczak i indyk — kozinę, koninę lub jagnięcinę. Monobiałkowa, bezzbożowa, bez sztucznych konserwantów, w szklanym słoiku bez BPA. Przy alergii wyłącznie na kurczaka indyk jest bezpiecznym pierwszym krokiem — to inne białko, bez reakcji krzyżowej z kurczakiem." },
        { q: "Jaka karma monobiałkowa mokra dla szczeniaka?", a: "Karma monobiałkowa mokra dla szczeniaka powinna być pełnoporcjowa, zgodna z normami FEDIAF dla szczeniąt, z jednym źródłem białka. Kłaczek Menu Indyk nie jest przeznaczona dla szczeniąt — zalecamy ją psom od 8. miesiąca życia. Przy podejrzeniu alergii pokarmowej u szczeniaka wybór karmy i białka skonsultuj z weterynarzem." },
        { q: "Czy mięso z indyka jest zdrowe dla psa?", a: "Tak — mięso z indyka to wartościowe źródło białka dla psa. Zawiera mniej tłuszczu niż kurczak czy wołowina, jest lekkostrawne i rzadko wywołuje reakcje alergiczne. Pierś z indyka to pełnowartościowe białko z aminokwasami niezbędnymi dla psów. W Kłaczek Menu Indyk pierś stanowi 60% składu, całkowita zawartość mięsa i podrobów to 70% — jakości human grade." }
      ]
    },

    // ===== WOŁOWINA =====
    'wolowina': {
      urls: ['klaczek-menu-wolowina'],
      faq: [
        { q: "Wołowina dla psa — czy jest zdrowa?", a: "Tak — wołowina to wartościowe źródło białka dla psa. Dostarcza żelaza, cynku i witamin z grupy B naturalnie wspierających energię i zdrowe mięśnie. Kłaczek Menu Wołowina ma 17,5% białka — najwyższy wynik w linii. W przeliczeniu na suchą masę to ok. 51% białka — więcej niż większość karm suchych premium. Mięso i podroby wołowe stanowią 70% składu, jakości human grade." },
        { q: "Karma dla amstaffa — czego potrzebuje?", a: "Amstaf to rasa muskularna z wysokim zapotrzebowaniem na białko do utrzymania masy mięśniowej. Karma dla amstaffa powinna mieć wysoką zawartość białka — min. 15–17% w świeżej masie — i być bezzbożowa. Kłaczek Menu Wołowina z 17,5% białka to najwyższy wynik w linii mokrych karm. Wysoka smakowitość wołowiny sprawia że nawet wybredne amstaffy chętnie ją jedzą." },
        { q: "Karma dla rottweilera — jak wybrać?", a: "Rottweiler to duża, aktywna rasa z wysokim zapotrzebowaniem na białko. Karma dla rottweilera powinna mieć wysoką zawartość białka (min. 15–17% w świeżej masie), być bezzbożowa i zawierać naturalne składniki bez wypełniaczy. Kłaczek Menu Wołowina z 17,5% białka i intensywnym aromatem wołowiny to dobry wybór dla tej rasy. Dla psów powyżej 20 kg rozważ żywienie mieszane — karma mokra jako topper do suchej." },
        { q: "Karma dla owczarka belgijskiego — jaka najlepsza?", a: "Owczarek belgijski to aktywna, inteligentna rasa z wysoką przemianą materii. Potrzebuje karmy z wysokim białkiem i dobrze przyswajalnym mięsem. Kłaczek Menu Wołowina z 17,5% białka i 150 kcal/100g dobrze wspiera aktywne psy pracujące. Karma mokra z wołowiną jako topper do suchej zwiększa smakowitość i nawodnienie. Dla psów pracujących porcję dostosuj do intensywności wysiłku." },
        { q: "Karma dla malamuta — co karmić?", a: "Malamut to duże, aktywne psie robocze z wysokim zapotrzebowaniem energetycznym. Karma dla malamuta powinna mieć wysokie białko i kaloryczność. Kłaczek Menu Wołowina z 17,5% białka i intensywnym aromatem wołowiny to dobry wybór. Dla dużej rasy jak malamut rozważ żywienie mieszane — karma mokra z wołowiną jako 20–30% porcji dla aromatu i wartości odżywczych, dobra sucha karma bezzbożowa jako baza." },
        { q: "Mokra karma wysokobiałkowa dla psa — kiedy stosować?", a: "Mokra karma wysokobiałkowa dla psa jest wskazana dla ras aktywnych i pracujących z wysokim zapotrzebowaniem na białko do budowy i regeneracji mięśni, psów w rekonwalescencji po chorobie lub operacji (białko wspiera gojenie tkanek) oraz psów wybrednych niejadków — wysokie białko i intensywny aromat zwiększają smakowitość. Kłaczek Menu Wołowina z 17,5% białka to najwyższy wynik w linii." },
        { q: "Karma dla szczeniaka dużej rasy — na co zwrócić uwagę?", a: "Karma dla szczeniaka dużej rasy powinna być pełnoporcjowa (FEDIAF), mieć odpowiedni stosunek wapnia do fosforu wspierający prawidłowy rozwój kości, wysokie białko do budowy masy mięśniowej i nie powodować zbyt szybkiego przyrostu masy ciała. Kłaczek Menu Wołowina nie jest przeznaczona dla szczeniąt — zalecamy ją psom od 8. miesiąca życia, a szczenięciu dużej rasy podawaj karmę dla szczeniąt dużych ras. Kontroluj tempo wzrostu — zbyt szybkie tycie może obciążać stawy u dużych ras." }
      ]
    },

    // ===== PEPTICARE GASTRO BALANCE 1,5 kg =====
    'pepticare_gastro': {
      urls: ['klaczek-pepticare-gastro-balance-1-5-kg'],
      faq: [
        { q: "Karma hydrolizowana dla psa — co to jest i jak działa?", a: "Karma hydrolizowana dla psa zawiera białko rozłożone enzymatycznie do di- i tri-peptydów poniżej 0,5 kDa — zbyt małych, by układ odpornościowy je rozpoznał jako alergen. Peptydy wchłaniane przez transporter PepT1 bez wcześniejszego trawienia — stąd przyswajalność 95% vs ~75–80% w standardowych karmach lekkostrawnych. Kłaczek PeptiCare Gastro Balance to karma hydrolizowana dla psa na jelita i trawienie z postbiotykiem TruPet™." },
        { q: "Co podać psu na bulgotanie w brzuchu?", a: "Bulgotanie w brzuchu psa (borborygmy) to efekt nadmiernej fermentacji w jelitach lub gromadzenia gazów. Najczęstsze przyczyny: zbyt szybkie jedzenie, nietolerancja białka lub zbóż, zbyt duże porcje. Zmiana na lekkostrawną karmę hydrolizowaną bez zbóż i z probiotykiem lub postbiotykiem może znacząco ograniczyć bulgotanie. Gastro Balance z postbiotykiem TruPet™ wspiera mikrobiotę jelitową i zmniejsza fermentację. Przy silnych, nawracających bólach brzucha — wizyta u weterynarza." },
        { q: "Najlepsza karma dla psa z wrażliwym układem pokarmowym — co wybrać?", a: "Najlepsza karma dla psa z wrażliwym układem pokarmowym łączy hydrolizowane białko (najwyższa przyswajalność), brak zbóż i probiotyk lub postbiotyk wspierający mikrobiotę. Gastro Balance spełnia wszystkie trzy kryteria — 95% przyswajalności, postbiotyk TruPet™ z udokumentowanym wzrostem Bifidobacterium, bezzbożowa bez kurczaka. Przyswajalność 95% to mniej niestrawionych resztek w jelicie i mniej gazów." },
        { q: "Karma peptydowa dla psa — kiedy stosować?", a: "Karma peptydowa dla psa stosowana jest przy alergii pokarmowej, nietolerancji białka, przewlekłych problemach trawiennych, wrażliwym żołądku i po antybiotykoterapii. Peptydy poniżej 0,5 kDa nie wywołują reakcji immunologicznej — układ odpornościowy ich nie rozpoznaje. Gastro Balance to karma peptydowa dla psa na jelita z postbiotykiem TruPet™ — szczególnie polecana przy nawracających biegunkach, gazach i nieregularnym stolcu." },
        { q: "Chora trzustka u psa — jak żywić?", a: "Pies z chorą trzustką potrzebuje diety niskotłuszczowej, lekkostrawnej, z łatwo przyswajalnym białkiem i bez zbóż. Gastro Balance ma 15,5% tłuszczu i 95% przyswajalność białka hydrolizowanego — mniej pracy dla trzustki przy trawieniu. Postbiotyk TruPet™ wspiera mikrobiotę jelitową zaburzoną przez przewlekłe choroby trzustki. Dietę przy zapaleniu trzustki zawsze konsultuj z weterynarzem — w ostrej fazie może być wymagana ścisła dieta weterynarzyjna." },
        { q: "Biegunka u psa — co podać i kiedy do weterynarza?", a: "Biegunka u psa przez 1–2 dni bez innych objawów często mija przy lekkostrawnej diecie — białe mięso, gotowany ryż lub karma hydrolizowana bez zbóż. Gastro Balance jako karma hydrolizowana dla psa na jelita z postbiotykiem TruPet™ może wspierać odbudowę mikrobioty po biegunce. Biegunka trwająca ponad 48 godzin, krwawa lub z wymiotami i gorączką wymaga pilnej wizyty u weterynarza." },
        { q: "Pies wymiotuje — co podać i co może oznaczać?", a: "Wymioty u psa raz na kilka tygodni po zjedzeniu trawy lub żółcią rano to często norma. Regularne wymioty po jedzeniu mogą sygnalizować zbyt szybkie jedzenie, nietolerancję białka lub problem żołądkowy. Zmiana na karmę hydrolizowaną bez zbóż podawaną w małych porcjach 3 razy dziennie może ograniczyć wymioty przy nietolerancji. Wymioty z krwią, pianą, przy jednoczesnej apatii lub twardym brzuchu — natychmiastowa wizyta u weterynarza." }
      ]
    },

    // ===== PEPTICARE SKIN BALANCE 1,5 kg =====
    'pepticare_skin': {
      urls: ['klaczek-pepticare-skin-balance-1-5-kg'],
      faq: [
        { q: "Karma dla białego psa — jak wybrać przy przebarwieniach?", a: "Przebarwienia sierści u białych psów (żółte lub rdzawe zacieki) najczęściej powoduje alergia pokarmowa lub nietolerancja składnika karmy. Zmiana na karmę hipoalergiczną z hydrolizowanym białkiem łososia usuwa główne alergeny. Skin Balance z 5,7% kwasów omega (EPA, DHA, GLA) wspiera barierę skórną i może redukować przebarwienia na tle zapalnym. Efekty przy alergii widoczne po 4–8 tygodniach." },
        { q: "Karma dla psów alergików bez kurczaka i zbóż — co wybrać?", a: "Karma dla psa alergika powinna zawierać rzadkie lub hydrolizowane białko — hydrolizat łososia w Skin Balance jest zbyt małą cząsteczką (poniżej 0,5 kDa) by układ odpornościowy ją rozpoznał. Bez kurczaka, bez zbóż, bez sztucznych konserwantów. Dodatkowo 5,7% kwasów omega aktywnie wspiera barierę skórną, a kolagen 2,9% regeneruje tkanki skóry przy alergicznym zapaleniu." },
        { q: "Jaka karma dla maltańczyka na zacieki pod oczami?", a: "Zacieki pod oczami u maltańczyka mają kilka przyczyn — anatomiczną (niedrożność kanalika łzowego) lub alergiczną. Przy podłożu alergicznym zmiana na karmę hipoalergiczną z hydrolizowanym białkiem łososia może zmniejszyć stan zapalny nasilający zacieki. Skin Balance bez kurczaka, bez zbóż, z 5,7% omega wspiera barierę skórną. Przy anatomicznej przyczynie zacieków konieczna konsultacja weterynarza." },
        { q: "Karma dla psa z alergią skórną — hydrolizat czy monobiałkowa?", a: "Hydrolizat białka (Skin Balance) i karma monobiałkowa to dwa różne podejścia do alergii. Hydrolizat działa przez rozkład białka do peptydów poniżej 0,5 kDa — nierozpoznawalnych przez układ odpornościowy. Monobiałkowa działa przez dobór rzadkiego białka którego pies nie zna. Hydrolizat skuteczniejszy przy wielobiałkowej alergii lub gdy trudno ustalić alergen. Skin Balance łączy hydrolizat łososia z aktywnym wsparciem bariery skórnej (omega 5,7%, kolagen 2,9%)." },
        { q: "Wypadanie sierści u psa — dieta czy choroba?", a: "Sezonowe wypadanie sierści 2 razy w roku to norma. Nadmierne wypadanie przez cały rok może być objawem alergii pokarmowej, niedoboru kwasów omega-3 lub chorób endokrynologicznych (niedoczynność tarczycy, Cushing). Przy alergii pokarmowej dieta hipoalergiczna z hydrolizowanym łososiem i wysoką zawartością omega-3 może znacząco poprawić kondycję sierści. Skin Balance z 5,7% omega i kolagen 2,9% to kompleksowe wsparcie skóry i sierści. Bez poprawy po 8 tygodniach — diagnostyka u weterynarza." },
        { q: "Pies się drapie i wylizuje łapy — co podać?", a: "Drapanie i wylizywanie łap przez cały rok (nie tylko sezonowo) to typowy objaw alergii pokarmowej lub atopii. Pierwszym krokiem jest zmiana na karmę hipoalergiczną z hydrolizowanym białkiem. Skin Balance z hydrolizatem łososia (peptydy poniżej 0,5 kDa) eliminuje reakcję immunologiczną na białko, a 5,7% kwasów omega zmniejsza stany zapalne skóry od środka. Efekty przy alergii pokarmowej widoczne po 4–8 tygodniach ścisłej diety." },
        { q: "Alergia u psa — objawy i co podać?", a: "Objawy alergii u psa to świąd, drapanie, wylizywanie łap, nawracające zapalenia uszu, rdzawe zacieki pod oczami i zmieniona konsystencja stolca. Alergia pokarmowa utrzymuje się przez cały rok — w odróżnieniu od sezonowej alergii na pyłki. Pierwszym krokiem jest zmiana na karmę z hydrolizowanym białkiem lub monobiałkową przez minimum 8 tygodni. Skin Balance z hydrolizatem łososia i 5,7% omega to karma kierunkowa na alergię skórną." }
      ]
    },

    // ===== PEPTICARE DENTAL BALANCE 1,5 kg =====
    'pepticare_dental': {
      urls: ['klaczek-pepticare-dental-balance-1-5-kg'],
      faq: [
        { q: "Kamień nazębny u psa — jak usunąć i zapobiegać?", a: "Kamień nazębny u psa to zmineralizowana płytka nazębna — raz uformowany wymaga scalingu u weterynarza. Zapobieganie polega na ograniczeniu mineralizacji płytki zanim powstanie kamień. Heksametafosforan sodu w PlaqueDefence™ chelatuje wapń ze śliny zanim zdąży połączyć się z płytką. Dental Balance stosowana codziennie może ograniczać odkładanie nowego kamienia między wizytami weterynaryjnymi." },
        { q: "Domowe sposoby na kamień nazębny u psa — co działa?", a: "Domowe sposoby na kamień nazębny u psa: regularne szczotkowanie pastą enzymatyczną (2–3 razy w tygodniu), żucie twardych gryzaków mechanicznie usuwających płytkę i karma z kompleksem aktywnym jak PlaqueDefence™ działającym chemicznie przez cały dzień. Dental Balance z PlaqueDefence™ ogranicza mineralizację płytki. Przy zaawansowanym kamieniu niezbędny skaling u weterynarza — domowe metody nie usuwają istniejącego kamienia." },
        { q: "Sucha karma dla psa z hydrolizowanym białkiem — czym różni się od zwykłej?", a: "Sucha karma dla psa z hydrolizowanym białkiem zawiera białko rozłożone enzymatycznie do di- i tri-peptydów poniżej 0,5 kDa — znacznie łatwiej wchłaniane przez transporter PepT1 niż całe białko. Dental Balance to sucha karma z hydrolizowanym białkiem indyka i łososia, kolagenem 3% i kompleksem PlaqueDefence™. Połączenie wyższej przyswajalności z aktywnym działaniem na higienę jamy ustnej niedostępnym w standardowych karmach." },
        { q: "Jak dbać o zęby psa na co dzień?", a: "Codzienna higiena jamy ustnej psa: szczotkowanie pastą enzymatyczną, gryzaki mechanicznie usuwające płytkę, karma z kompleksem aktywnym PlaqueDefence™ działającym chemicznie. Dental Balance podawana codziennie tworzy system profilaktyczny — heksametafosforan sodu wiąże wapń ze śliny zanim powstanie kamień, wodorosty i żurawina hamują adhezję bakterii, mięta wspiera świeżość oddechu. Niezbędne przeglądy stomatologiczne u weterynarza co 12 miesięcy." },
        { q: "Karma na kamień nazębny dla psa — co wybrać?", a: "Karma na kamień nazębny dla psa powinna zawierać składniki aktywnie ograniczające mineralizację płytki — heksametafosforan sodu, wodorosty i prebiotyki modulujące mikrobiotę jamy ustnej. Dental Balance z PlaqueDefence™ (heksametafosforan sodu 6150 mg/kg, algi morskie, mięta, żurawina, zielona herbata) i kolagenu 3% to jedyna karma w linii PeptiCare kierunkowa na higienę jamy ustnej. Potwierdzone badaniem — 93% psów poprawiło higienę jamy ustnej po 12 tygodniach." },
        { q: "Kamień nazębny u psa — domowe sposoby usuwania", a: "Istniejącego kamienia nazębnego nie można usunąć domowymi sposobami — potrzebny skaling ultradźwiękowy u weterynarza. Domowe działania skuteczne są w profilaktyce (zapobieganiu odkładaniu nowego kamienia): szczotkowanie pastą enzymatyczną, gryzaki, karma z PlaqueDefence™. Dental Balance stosowana regularnie może ograniczać tempo odkładania się nowego kamienia i wydłużać czas między skalingami. W badaniu Dr Desa Groome'a 93% psów miało mniejszy kamień po 12 tygodniach." },
        { q: "Zepsute zęby u psa — objawy i kiedy do weterynarza?", a: "Zepsute zęby u psa objawiają się nieświeżym oddechem, niechęcią do jedzenia twardych rzeczy, pawiem pyska, krwawieniem dziąseł i widocznym kamieniem lub ciemnymi plamami na zębach. Ponad 80% psów powyżej 3. roku życia ma jakąś formę choroby jamy ustnej. Przy objawach chorych zębów konieczna wizyta u weterynarza — stomatologia weterynaryjna może wymagać znieczulenia ogólnego. Dental Balance jako profilaktyka codziennego wsparcia higieny jamy ustnej." }
      ]
    },

    // ===== PEPTICARE WEIGHT BALANCE 1,5 kg =====
    'pepticare_weight': {
      urls: ['klaczek-pepticare-weight-balance-1-5-kg'],
      faq: [
        { q: "Karma dla psów po sterylizacji — co wybrać i kiedy zmienić?", a: "Karma dla psów po sterylizacji powinna być niskokaloryczna z wysokim białkiem chroniącym mięśnie. Sterylizacja i kastracja spowalniają metabolizm o 20–30% — zmiana karmy powinna nastąpić jak najwcześniej po zabiegu, najlepiej w ciągu 2–4 tygodni. Weight Balance z 315 kcal/100g i białkiem 29% zapobiega tyciu bez głodzenia. Lekkostrawna i hipoalergiczna — dobrze tolerowana w rekonwalescencji po zabiegu." },
        { q: "Karma dla psa z nadwagą — jak odchudzić psa skutecznie?", a: "Karma dla psa z nadwagą powinna łączyć niską kaloryczność z wysokim białkiem (chroni mięśnie), błonnikiem (wydłuża sytość) i składnikami aktywnie wspierającymi metabolizm. Weight Balance: 315 kcal/100g, białko 29%, błonnik 8,5%, L-karnityna 1442 mg/kg i peptydy rybne stymulujące hormony sytości CCK i GLP-1. Zdrowe odchudzanie: 0,5–1% masy ciała tygodniowo. Mierz porcję wagą kuchenną, nie miarką objętościową." },
        { q: "Jak odchudzić psa — skuteczny plan krok po kroku?", a: "Jak odchudzić psa: (1) zważ psa i oblicz cel wagowy, (2) wybierz karmę odchudzającą z aktywnym wsparciem metabolizmu jak Weight Balance, (3) mierz porcje wagą kuchenną, (4) podziel dobową porcję na 3 posiłki zamiast 2, (5) zastąp smakołyki marchewką lub ogórkiem, (6) waż psa co 2 tygodnie. Zdrowe tempo: 0,5–1% masy ciała tygodniowo. Przy bardzo otyłym psie plan odchudzania skonsultuj z weterynarzem." },
        { q: "Karma hydrolizowana biała ryba dla psa — kiedy stosować?", a: "Karma z hydrolizowanym białkiem białej ryby jest wskazana przy nadwadze połączonej z alergią pokarmową lub wrażliwym układem pokarmowym. Biała ryba jako rzadkie białko rzadko uczula — idealna karma eliminacyjna przy jednoczesnym odchudzaniu. Weight Balance z hydrolizatem białej ryby łączy niską kaloryczność (315 kcal/100g) z hipoalergicznością i aktywnym wsparciem metabolizmu przez peptydy rybne stymulujące CCK i GLP-1." },
        { q: "Dysplazja u psa — jak żywić przy nadwadze?", a: "Przy dysplazji u psa każdy nadmiarowy kilogram to 4 kg dodatkowego obciążenia stawów biodrowych i kolanowych. Redukcja wagi to kluczowy element wsparcia psa z dysplazją. Weight Balance działa dwutorowo: redukuje masę ciała i zawiera omułek zielonowargowy (0,3%) oraz kolagen 1,3% mogące wspierać chrząstkę stawową. Schemat redukcji wagi przy dysplazji zawsze konsultuj z weterynarzem — zbyt szybkie odchudzanie może być równie szkodliwe." },
        { q: "Karma light dla psów — czym różni się od Weight Balance?", a: "Karma light dla psów ogranicza kalorie przez wyższy błonnik i niższy tłuszcz — to pasywna redukcja. Weight Balance działa aktywnie: peptydy rybne stymulują hormony sytości CCK i GLP-1 (pies czuje sytość biochemicznie), L-karnityna transportuje kwasy tłuszczowe do mitochondriów, błonnik 8,5% wydłuża sytość mechanicznie. Standard light: 350–380 kcal/100g. Weight Balance: 315 kcal/100g + trzy aktywne mechanizmy odchudzania jednocześnie." },
        { q: "Suczka po sterylizacji — kiedy zmienić karmę i jak żywić?", a: "Suczka po sterylizacji powinna dostać niskokalorycz karmę jak najwcześniej po zabiegu — metabolizm spada o 20–30% natychmiast. Pierwsze 2–4 tygodnie po zabiegu: lekkostrawna karma rekonwalescencyjna, potem przejście na Weight Balance. Białko 29% chroni masę mięśniową, 315 kcal/100g nie pozwala tyć. Przy sterylizacji laparoskopowej powrót do normalnego żywienia szybszy niż przy klasycznej operacji." }
      ]
    },

    // ===== PEPTICARE WELLNESS BALANCE 1,5 kg =====
    'pepticare_wellness': {
      urls: ['klaczek-pepticare-wellness-balance-1-5-kg'],
      faq: [
        { q: "Karma z białkiem hydrolizowanym łososia — co wyróżnia?", a: "Karma z hydrolizowanym białkiem łososia zawiera peptydy poniżej 0,5 kDa z naturalnym potencjałem antyoksydacyjnym — w badaniu Uniwersytetu w Liège (2024) hydrolizat łososia zneutralizował 75% wolnych rodników w teście ABTS. Łosoś zawiera naturalnie więcej antyoksydantów niż białe mięsa. Wellness Balance z 64% peptydów poniżej 0,5 kDa to najwyższa frakcja w linii PeptiCare. Jedyna karma All Life Stages w linii — szczenię, dorosły, senior." },
        { q: "Prebiotyk dla psa — jak działa i kiedy stosować?", a: "Prebiotyk dla psa (FOS, MOS) to składniki pokarmowe selektywnie stymulujące wzrost korzystnych bakterii jelitowych. FOS w Wellness Blend™ odżywia Lactobacillus i Bifidobacterium, MOS ogranicza adhezję patogenów do nabłonka. 70% komórek odpornościowych psa zlokalizowanych jest w jelitach — zdrowy mikrobiom to fundament odporności. Prebiotyki szczególnie polecane przy zmianie diety, po antybiotykoterapii i dla psów często chorujących." },
        { q: "Karma dla psa seniora — co powinna zawierać?", a: "Karma dla psa seniora powinna mieć łatwo przyswajalne hydrolizowane białko (mniej pracy dla starzejących się jelit), antyoksydanty chroniące przed stresem oksydacyjnym narastającym z wiekiem, kolagen wspierający stawy i prebiotyki wzmacniające mikrobiom jelitowy. Wellness Balance spełnia wszystkie kryteria — 75% neutralizacja wolnych rodników, kolagen 2,8%, FOS i MOS, olej MCT wspierający funkcje poznawcze seniorów. All Life Stages — może być podawana przez całe życie psa." },
        { q: "Karma dla szczeniaka — All Life Stages a karma dla szczeniąt?", a: "Karma All Life Stages spełnia normy FEDIAF jednocześnie dla wzrostu szczeniąt i utrzymania dorosłych — musi zawierać więcej wapnia i fosforu niż karma dla dorosłych, by wspierać budowę kości. Wellness Balance jest certyfikowana All Life Stages — można ją podawać szczeniakowi od 12. tygodnia bez ryzyka niedoborów. Zaletą: jeden worek dla szczeniaka i dorosłego psa w domu. Dawkowanie szczeniaka jest wyższe niż dorosłego — przelicz porcję na 4% masy ciała podzieloną na 3–4 posiłki." },
        { q: "Kurkuma dla psa — czy jest bezpieczna i jakie korzyści?", a: "Kurkuma jest bezpieczna dla psów w rozsądnych ilościach zawartych w karmie. Kurkumina (aktywny związek) ma udokumentowane właściwości antyoksydacyjne i przeciwzapalne — może wspierać stawy, układ odpornościowy i trawienie. W Wellness Blend™ kurkuma stanowi 0,1% składu — dawka funkcjonalna bez ryzyka przedawkowania. Podawanie dużych ilości czystej kurkumy nie jest zalecane bez konsultacji weterynarza — może zaburzać krzepliwość krwi." },
        { q: "Odporność psa — jak wzmocnić dietą?", a: "Odporność psa wzmacnia się przez trzy mechanizmy: antyoksydanty chroniące komórki odpornościowe przed wolnymi rodnikami, prebiotyki budujące zdrowy mikrobiom jelitowy (gdzie kształtuje się 70% odporności) i wysoko przyswajalne białko dostarczające budulca dla przeciwciał. Wellness Balance łączy wszystkie trzy — 75% neutralizacja wolnych rodników, FOS + MOS + 6 składników Wellness Blend™, 64% peptydów poniżej 0,5 kDa. Efekty po 7–14 dniach regularnego stosowania." },
        { q: "Kolagen dla psa — jakie korzyści i w jakiej formie?", a: "Kolagen dla psa wspiera stawy, ścięgna, tkanki łączne i kondycję skóry z sierścią. Najlepiej przyswajalna forma to kolagen hydrolizowany — peptydy kolagenowe wchłaniane przez transporter PepT1. Wellness Balance ma 2,8% kolagenu — najwyższy poziom w linii PeptiCare, wyższy niż Gastro (brak) i Skin (2,9%). Hydrolizowane białko łososia naturalnie bogate w hydroksyprolinę i glicynę — aminokwasy kluczowe do syntezy kolagenu w tkankach stawowych." }
      ]
    }

  };

  function findFaq() {
    for (var smak in faqData) {
      var data = faqData[smak];
      for (var i = 0; i < data.urls.length; i++) {
        if (url.indexOf(data.urls[i]) !== -1) {
          return data.faq;
        }
      }
    }
    return null;
  }

  var faq = findFaq();
  if (!faq) return;

  var mainEntity = faq.map(function(item) {
    return {
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    };
  });

  var schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": mainEntity
  };

  var script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(schema);
  document.head.appendChild(script);

})();
