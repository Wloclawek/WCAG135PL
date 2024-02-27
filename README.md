# <h1>Testowanie autouzupełniania formularzy (WCAG 1.3.5)</h1>

Międzynarodowe wytyczne WCAG dają zestaw wymagań dla stron internetowych. Ich spełnienie pozwala **osobom z niepełnosprawnościami** korzystać ze stron internetowych. 

## Teoria 1.3.5 WCAG

### Autouzupełnianie - na czym to polega?

<p>Pola formularzy mogą zapamiętywać wprowadzane wartości. Pozwala to szybciej wypełnić formularz. <p>
<img src="./images/autocomplete.gif" alt="Formularz z polami adresowymi do wysyłki. Po kliknięcie w pole ulica pojawia się podpowiedź Nowa. Ta nazwa uzuepełnia pole.">

### Ważne informacje
<p>Technikę stosuje się wyłącznie do danych dotyczących osoby, która wypełnia formularz (<a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H98">Technika H98 WCAG</a>). Dane są zapisywane dopiero po kliknięciu na przycisk np. wyślij lub zapisz. </p>

<p>Pole formularza w kodzie strony musi mieć informację, z której grupy danych chce uzupełniać pola formularza (wartość autocomplete musi być konkretna i zgodna z <a href="https://www.w3.org/TR/WCAG21/#input-purposes">HTML 5.2</a>). Błędna wartość "autocomplete" to błąd!</p>
<p>Unikaj używania: </p>
<ul><li>
 <code>autocomplete="on"</code>. To nie jest pomocne, bo przeglądarka "zgaduje" jak wypełnić pole.</li>
 <li> <code>autocomplete="off"</code>. To utrudnia osobom z niepełnosprawnościami korzystanie ze stron. Menadżer haseł i tak może zignorować takie ustawienie, dlatego nie chroni to haseł. </li>
 </ul>


### Komu to pomaga?

<p>Jest to szczególne pomocne dla osób z niepełnosprawnościami. Wiele grup osób skorzysta z autouzupełniania, np. osoby:<p>

<ul>
<li>z uszkodzonymi lub amputowanymi kończynami górnymi,</li>
<li>sparaliżowane (korzystają z wirtualnych klawiatur),</li>
<li>wrodzononymi wadami kończyn górnych,</li>
<li>niedowładami dłoni,</li>
<li>chorobami i schorzeniami wpływającymi na posługiwanie się sprzętem np. udar, choroba Parkinsona,</li>
<li>chorobami otępiennymi i zaburzającymi pamięć np. choroby naczyniowe, demencje, wirus HIV, urazy głowy,</li>
<li>porażeniem mózgowym.</li>
</ul>

<p>Są tu dwie możliwości wsparcia użytkownika:</p>
<ul>
<li>szybsze uzupełnianie danych,</li>
<li>wyświetlenie dodatkowych ikon wspierających użytkowników z chorobami otępiennymi i innymi. Zainstalowana nakładka na podstawie kodu strony może wyświetlić ikonę, która w łatwiejszy sposób pozwala zrozumieć jakich danych oczekuje formularz.</li>
</ul>
<p>Z tego rozwiązania korzystają także osoby, których stan zdrowia jest bardzo dobry. Docenią to także obcokrajowcy i dyslektycy.</p>

## Praktyka 1.3.5 WCAG
### Przykładowy kod 
```HTML
        <label for="name">Imię i nazwisko</label>
        <input id="name" type="text" autocomplete="name">
```
Serce tej techniki to <code>autocomplete="name"</code>. Jest określony zbiór wartości dla atrybutu <code>autocomplete</code>. Musisz używać wskazane w <a href="https://www.w3.org/TR/WCAG21/#input-purposes">HTML 5.2</a>. Zwróć uwagę, że zupełnie inny jest dla imienia i nazwiska oraz dla samego imienia.

<p>Błędna wartość lub literówka w "autocomplete" to błąd!</p>

```HTML
<label for="given-name">Imię</label>
<input id="given-name" type="text" autocomplete="given-name">
```



        
###  Przydatne linki (w języku angielskim)
<ul>
<li><a href="https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html">Szczegóły kryterium sukcesu 1.3.5 WCAG</a>,</li>
<li><a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H98">Technika H98 WCAG</a> (przykładowy kod),</li>
<li>Słów kilka o <a href="https://www.w3.org/TR/WCAG21/#input-purposes">HTML 5.2</a> czyli wartości jakie są dopuszczalne w atrybucie "autocomplete".</li>

</ul>

### Kontrowersje i mit bezpieczeństwa
<p> Autouzupełnianie często jest wyłączane ze względów bezpieczeństwa. Jest to mylne podejście, ponieważ jego wyłączenie dotyczy także zaufanych i bezpiecznych komputerów. Nie chroni to przed kradzieżą danych, ponieważ duża część metod polega na zapisywaniu wartości wprowadzanych z klawiatury. </p>
<p>Użytkownik musi używać tej samej przeglądarki, aby móc skorzystać z wcześniej wpisanych danych. Na innej przeglądarce lub komputerze nie będzie dostępu do tych danych. Dodatkowo musi przynajmniej raz je wprowadzić i wysłać.</p>
<p>Użytkownik może zarządzać danymi przechowywanymi przez przeglądarkę i jemu należy zostawić wybór. Przeglądarka w "trybie prywatnym" powinna ignorować zapisywanie danych z formularzy. </p>
<p>
Unikanie używania atrybutu "autocomplete" nie chroni użytkownika przed zapisywaniem danych z formularzy przez przeglądarkę, ale za to na pewno dyskryminuje osoby z niepełnosprawnościami i narusza prawo. W wielu krajach zgodność z wybranymi punktami WCAG jest obowiązkowe.
</p>
<p>Przykład jak usuwać dane autouzupełniania z Chrome:</p>
<ul><li>Wypełniajac formularz możesz zdecydować, które dane nie są już potrzebne. Po wyświetleniu propozycji autouzupełnienia przejdź myszą lub tabulatorem do podpowiedzi i wybierz "x". Usunie to autouzupełnienie dla tego rodzaju pola. <br> 
<img src="./images/usun.png" alt="Podpowiedź autouzupełnienia wyświetla X, który umożliwia usunięcie wpisu"></li>
<li>Możesz usunąć wszystkie dane wprowadzone w wybranym czasie. Kliknij trzy kropki w prawym górnym rogu i wybierz "Ustawienia". Znajdź i kliknij zakładkę "Prywatność i bezpieczeństwo", a następnie "Wyczyść dane przeglądania". Wybierz zakładkę "Zaawansowane" i wybierz okres czasu np. "Ostatnie 24 godziny". Zaznacz "Autouzupełnianie danych formularzy".<br><img src="./images/usun_menu.png" alt="Ustawienia przeglądarki Chrome. Zaznaczone pole Autouzupełnianie danych formularzy"> </li></ul>

### Autouzupełnianie prawidłowe kontra autouzupełnianie przeglądarki

<p>Są trzy rodzaje autouzupełniania danych:</p>
<ul>
<li>menadżer hasła może wprowadzać hasło i login,</li>
<li>autouzupełnianie w oparciu o <a href="https://www.w3.org/TR/WCAG21/#input-purposes">HTML 5.2</a> czyli poprawne wartości atrybytu "autocomplete",</li>
<li>autouzupełnianie na podstawie algorytmów przeglądarki <code>autocomplete="on"</code>.</li>
</ul>

<p>Autouzupełnianie formularzy na podstawie algorytmów przeglądarki to próby zgadnięcia jak wypełnić pole. Próby są zależne od przeglądarki. Nie jest to bezbłędne narzędzia. Unikaj używania <code>autocomplete="on"</code>. </p>

## Jak używać narzędzia
### Instalacja

<ol>
<li>Wyświetl pasek zakładek. W Firefoxie i Chrome to skrót <code>Ctrl + Shift + B</code>.</li>
<li>Kliknij prawym przyciskiem na pasek zakładek. W Firefoxie wybierz "Dodaj zakładkę...", a w Chrome "Dodaj stronę".<br>
<img src="./images/zakladka.png" alt="Pasek zakładek i otwarte okno. W nim opcja Dodaj zakładkę..."><br>
<img src="./images/zakladka_Chrome.png" alt="Otwarte okno i opcja Dodaj stronę"></li>
<li>W polu "Nazwa" dodaj tekst "WCAG 1.3.5" lub dowolny inny. Jest to etykieta pod jaką będzie wyświetlane narzędzie.<br>
<img src="./images/dodaj_firefox.png" alt="Opcje dodawania zakładek w Firefoxie. W polu nazwa Testowanie autouzupełniania formularzy (WCAG 1.3.5). W polu adres kod javascript"><br>
<img src="./images/dodaj_chrome.png" alt="Opcje dodawania zakładek w Chrome. W polu nazwa Testowanie autouzupełniania formularzy (WCAG 1.3.5). W polu adres kod javascript"></li>
<li><a href="./code/zakladka.js">Skopiuj treść kodu</a> i wklej go w "Adres"/"Adres URL". </li>
<li>Zapisz. W Firefoxie kliknij "Zachowaj", a w Chrome "Zapisz".</li>
</ol>

### Testowy formularz
<a href="./site/form.html">Możesz potestować narzędzie na stronie z przykładowymi polami formularza</a>. Zapisz formularz na swoim komputerz i otwórz go w przeglądarce internetowej. Użyj narzędzia do testowania.

### Informacje o narzędziu
<ol>
<li>Narzędzie ignoruje pola ukryte (<code>display=none</code>).</li>
<li>Pola z atrybutem "autocomplete" ustawionym na "on" lub "off" są błędem. Są zaznaczone komentarzem: "Autouzupełnianie przez przeglądarkę" lub "Wyłączone autouzupełnianie".<br>
<img src="./images/auto_on_off.png" alt="Dwa pola o etykiecie Podaj imię. Pod etykietami informacje Autouzupełnianie przez przeglądarkę i Wyłączone autouzupełnianie"></li>
<li>Pola bez atrybutu "autocomplete" są zaznaczone obramowaniem złożonym z kółek. To również może być błędem, jeśli istnieje wartość dla "autocomplete" dla pola formularza.<br><img src="./images/kolka.png" alt="Pole z etykietą Podaj nazwę auta. Obramowanie pola składa się z kółek."></li>
</ol>

<p>Programiści popełniają błędy tworząc formularze. Narzędzie nie jest w stanie uwzględnić wszystkie kombinacje złego kodu (np. jeden z dużych polskich portali ma pola formularza ukryte za pomocą techniki <code>left: -10000px;</code>). W przypadku dziwnego zachowania narzędzia sprawdź kod strony. Jest duża szansa, że formularz ma błędy.</p>

<p>Jeżeli wina leży w narzędziu WCAG 1.3.5 to proszę skontaktuj się ze mną.</p>

### Jak urchomić narzędzie i testować?

#### Jak uruchomić?
<ol>
<li>Wejdź na stronę, którą chcesz zbadać.</li>
<li>Kliknij w skryptozakładkę (bookmarklet).</li>
<li>Przejście do kolejnego kroku w formularzu wymaga odświeżenia strony. Także ponowne sprawdzenie kodu wymaga odświeżenia strony i kliknięcie w zakładkę.</li>
</ol>

<p><img src="./images/test.gif" alt="Strona logowania na Wikipedii. Klikniecię w skryptozakładkę na pasku zakładek uruchamia narzędzie. Pojawiają się dodatkowe informacje dot. pól formularzy i ich autouzupełniania."></p>

#### Jak testować?

<p>Narzędzie sprawdza czy pole w formularzu ma wymagane autouzupełnianie. </p>

<ul>
<li>Wymóg autouzupełniania dotyczy tylko danych użytkownika, który wypełnia formularz.</li>
<li>Wyłączone autouzupełnianie lub zostawione przeglądarce to błąd. Musisz korzystać z <a href="https://www.w3.org/TR/WCAG21/#input-purposes">HTML 5.2</a> czyli autouzupełniania z prawidłowymi wartościami</a>. </li>
<li>Przeczytaj sekcje "dodatkowe informacje". Pola formularza bez autouzupełniania to zazwyczaj błąd. </li>
<li>Pola, które powinny mieć autouzupełnianie są opisane w linku dot. <a href="https://www.w3.org/TR/WCAG21/#input-purposes">HTML 5.2</a>. Możesz też sprawdzić <a href="./site/form.html">testowy formularz</a>. Zawiera on wszystkie rodzaje wymaganych pól z autouzupełnianiem. Zapisz sobie na komputerze i otwórz w przeglądarce, a następnie użyj narzędzia.</li>
<li>Literówka lub błędna wartość to błąd np. literówka w słowie "name" <code> autocomplete="given-naem"></code> lub autouzupełnianie dla kraju ustawione na pocztę.


```HTML
        <label for="country">Podaj kraj</label>
        <input id="country" type="text" autocomplete="postal-code">
```
</li>
<li>Informacje o autouzupełnianiu składa się z kilku części. Ikony, która podpowiada do jakiej grupy należy pole (kluczyk symbolizujące hasło). Informacji o tym jaką grupą danych będzie zasilane autouzupełnianie (Nowe hasło). Na końcu jest informacja o etykiecie pola formularza (Hasło). Etykieta pobierana jest z <code>label</code> lub <code>aria-label</code>.<br>
<img src="./images/haslo.png" alt="Pole formularza dot. hasła. Wyświetla się dodatkowa informacja z kluczem i o autouzupełnianiu."></li>
</ul>

### Kontakt
Proszę napisz do mnie e-mail: zglos.blad.programowanie@gmail.com.

### Licencja
Możesz używać dowolnie narzędzia. <a href="https://creativecommons.org/publicdomain/zero/1.0/deed.pl">Jest ono przeniesione do domeny publicznej (CC0)</a>.