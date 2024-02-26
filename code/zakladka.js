javascript: (() => {
    document.body.innerHTML += `
    <style>
    [class^='a11y-auto']{border: 3px dashed black; background: yellow !important; color: black !important; padding:3px; display: inline-block; margin: 5px; z-index: 99999}
    .a11y-auto-name::before {content: '\\1F464 \\0020 Tytuły, imię, nazwisko'}
    .a11y-auto-honorific-prefix::before{content: '\\1F464 \\0020 Tytuł (np. Pan, Pani, Dr, Prof.)'}
    .a11y-auto-given-name::before{content: '\\1F464 \\0020 Imię'}
    .a11y-auto-additional-name::before{content: '\\1F464 \\0020 Drugie imię'}
    .a11y-auto-family-name::before{content: '\\1F464 \\0020 Nazwisko'}
    .a11y-auto-honorific-suffix::before{content: '\\1F464 \\0020 Suffix (amerykańskie i zachodnioeuropejskie dodatki na końcu, które nadają nowe
        znaczenie np. junior, senior, II. Może też tytuł naukowy lub honorowy)'}
    .a11y-auto-nickname::before{content: '\\1F464 \\0020 Pseudonim'}
    .a11y-auto-organization-title::before{content: '\\1F454 \\0020 Stanowisko'}
    .a11y-auto-username::before{content: '\\1F464 \\0020 Użytkownik'}
    .a11y-auto-new-password::before{content: '\\1F511 \\0020 Nowe hasło'}
    .a11y-auto-current-password::before{content: '\\1F511 \\0020 Obecne hasło'}
    .a11y-auto-organization::before{content: '\\1F3E2 \\1F3ED \\1F3EA \\0020 Organizacja/Nazwa firmy'}
    .a11y-auto-street-address::before{content: '\\1F3E0 \\0020 Adres - ulica'}
    .a11y-auto-address-line1::before{content: '\\1F3E0  \\0020 Ulica - linia 1'}
    .a11y-auto-address-line2::before{content: '\\1F3E0  \\0020 Ulica - linia 2'}
    .a11y-auto-address-line3::before{content: '\\1F3E0  \\0020 Ulica - linia 3'}
    .a11y-auto-address-level4::before{content: '\\1F3E0 \\1F3E2 \\1F3ED \\0020 Adres miasto (czwarty poziom podziału kraju)'}
    .a11y-auto-address-level3::before{content: '\\1F3E0 \\0020 Adres gmina (trzeci poziom podziału kraju)'}
    .a11y-auto-address-level2::before{content: '\\1F3E0 \\0020 Adres powiat (drugi poziom podziału kraju)'}
    .a11y-auto-address-level1::before{content: '\\1F3E0 \\0020 Adres województwo (lub stan, kanton - najwyższy poziom podziału kraju)'}
    .a11y-auto-country::before{content: '\\1F3E0 \\1F5FA \\0020 Kod kraju (np. PL lub DE. Składa się z dwóch liter, zgodny z ISO 3166-1 alfa-2)'}
    .a11y-auto-country-name::before{content: '\\1F3E0 \\1F5FA \\0020 Kraj'}
    .a11y-auto-postal-code::before{content: '\\1F4EB \\0020 Kod pocztowy'}
    .a11y-auto-cc-name::before{content: '\\1F4B3 \\1F464 \\0020 Imię i nazwisko na dokumencie płatniczym'}
    .a11y-auto-cc-given-name::before{content: '\\1F4B3 \\1F464 \\0020 Imię na dokumencie płatniczym'}
    .a11y-auto-cc-additional-name::before{content: '\\1F4B3 \\1F464  \\0020 Drugie imię na dokumencie płatniczym'}
    .a11y-auto-cc-family-name::before{content: '\\1F4B3 \\1F464 \\0020 Nazwisko na dokumencie płatniczym'}
    .a11y-auto-cc-number::before{content: '\\1F4B3 \\0020 Numer karty płatniczej'}
    .a11y-auto-cc-exp::before{content: '\\1F4B3 \\1F4C6 \\0020 Data ważności karty płatniczej'}
    .a11y-auto-cc-exp-month::before{content: '\\1F4B3 \\1F4C6 \\0020 Miesiąc ważności karty płatniczej'}
    .a11y-auto-cc-exp-year::before{content: '\\1F4B3 \\1F4C6 \\0020 Rok ważności karty płatniczej'}
    .a11y-auto-cc-csc::before{content: '\\1F4B3 \\1F511 \\0020 Kod bezpieczeństwa karty płatniczej (np. CVC)'}
    .a11y-auto-cc-type::before{content: '\\1F4B3 \\0020 Rodzaj karty płatniczej (np. Visa albo Master Card)'}   
    .a11y-auto-transaction-currency::before{content: '\\1F4B0 \\0020 Waluta transakcji (trzyliterowy kod np. PLN, USD, GBP, zgodny z ISO
        4217)'}   
    .a11y-auto-transaction-amount::before{content: '\\1F4B0 \\0020 Kwota transakcji (liczba zmiennoprzecinkowa)'} 
    .a11y-auto-language::before{content: '\\1F5E3 \\0020 Preferowany język (kod języka, zgodny z BCP 47)'}    
    .a11y-auto-bday::before{content: '\\1F382 \\0020 Data urodzin'}  
    .a11y-auto-bday-day::before{content: '\\1F382 \\0020 Dzień urodzin'}  
    .a11y-auto-bday-month::before{content: '\\1F382 \\0020 Miesiąc urodzin'}    
    .a11y-auto-bday-year::before{content: '\\1F382 \\0020 Rok urodzin'}  
    .a11y-auto-sex::before{content: '\\1F6BA \\1F6B9 \\0020 Płeć'}    
    .a11y-auto-url::before{content: '\\1F4BB \\0020 Adres strony internetowej'}    
    .a11y-auto-photo::before{content: '\\1F4F7 \\0020 Zdjęcie (adres url)'}   
    .a11y-auto-tel::before{content: '\\1F4DE \\0020 Telefon (z numerem kierunkowym kraju np. +48)'}  
    .a11y-auto-tel-country-code::before{content: '\\1F4DE \\1F5FA \\0020 Numer kierunkowy kraju np. +48)'}  
    .a11y-auto-tel-national::before{content: ' \\1F4DE \\0020 Telefon (bez kierunkowego do regionu np. 22)'} 
    .a11y-auto-tel-area-code::before{content: '\\1F4DE \\0020 Kierunkowy do regionu np. 22'} 
    .a11y-auto-tel-local::before{content: '\\1F4DE \\0020 Telefon (bez kierunkowego kraju i regionu)'} 
    .a11y-auto-tel-local-prefix::before{content: '\\1F4DE \\0020 Pierwsza część telefonu (podział telefonu na dwa, bez kierunkowych)'}
    .a11y-auto-tel-local-suffix::before{content: '\\1F4DE \\0020 Druga część telefonu (podział telefonu na dwa, bez kierunkowych)'}  
    .a11y-auto-tel-extension::before{content: '\\1F4DE \\0020 Telefon wewnętrzny'}  
    .a11y-auto-email::before{content: '\\1F4E7 \\0020 E-mail'}  
    .a11y-auto-impp::before{content: '\\1F4BB \\0020 Adres url punktu końcowego protokołu wiadomości (np.: aim:goim?screenname=przyklad)'}  
    input:not([autocomplete]), textarea:not([autocomplete]), select:not([autocomplete]){border:2px dotted red !important;}
    .a11y-auto-on{border: 3px solid red}
    .a11y-auto-off{border: 3px solid red}
    </style>
    `;
    document.querySelectorAll("[autocomplete]").forEach((element) => {
        let span = document.createElement("span");
        if(element.style.display!="none"){
        element.before(span);
        span.tabIndex = 0;
    }
      

        if (element.getAttribute('autocomplete') != 'off' && element.getAttribute('autocomplete') != 'on') {
            span.innerHTML += " - przeznaczenie pola";
            if (element.getAttribute('id') || element.getAttribute('aria-label')) {
                let id = document.querySelectorAll('[for=' + element.getAttribute('id') + ']');
                if (id[0]) { span.innerHTML += ", opis pola: " + id[0].innerHTML; }
                if (element.getAttribute('aria-label')) { span.innerHTML += ", opis pola: " + element.getAttribute('aria-label') }
            }
            span.className = "a11y-auto-" + element.getAttribute('autocomplete');
        }
        if (element.getAttribute('autocomplete') == 'off') {
            span.className = "a11y-auto-off";
            span.innerHTML += "Wyłączone autouzupełnianie";
        }
        if (element.getAttribute('autocomplete') == 'on') {
            span.className = "a11y-auto-on";
            span.innerHTML += "Autouzupełnianie przez przeglądarkę";
        }
    });
})();
