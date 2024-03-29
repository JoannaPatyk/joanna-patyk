import React from 'react';
import '../css/projects.css';

import het1 from '../screens/het-1.png';
import het2 from '../screens/het-2.png';
import het3 from '../screens/het-3.png';
import het4 from '../screens/het-4.png';
import het5 from '../screens/het-5.png';
import het6 from '../screens/het-6.png';
import het7 from '../screens/het-7.png';
import het8 from '../screens/het-8.png';
import het9 from '../screens/het-9.png';
import het10 from '../screens/het-10.png';
import het11 from '../screens/het-11.png';
import het12 from '../screens/het-12.png';
import het13 from '../screens/het-13.png';

import sbq1 from '../screens/sbq-1.png';
import sbq2 from '../screens/sbq-2.png';
import sbq3 from '../screens/sbq-3.png';
import sbq4 from '../screens/sbq-4.png';
import sbq5 from '../screens/sbq-5.png';
import sbq6 from '../screens/sbq-6.png';
import sbq7 from '../screens/sbq-7.png';
import sbq8 from '../screens/sbq-8.png';

import id1 from '../screens/id-1.png';
import id2 from '../screens/id-2.png';
import id3 from '../screens/id-3.png';
import id4 from '../screens/id-4.png';
import id5 from '../screens/id-5.png';

import ls1 from '../screens/ls-1.png';
import ls2 from '../screens/ls-2.png';
import ls3 from '../screens/ls-3.png';
import ls4 from '../screens/ls-4.png';
import ls5 from '../screens/ls-5.png';
import ls6 from '../screens/ls-6.png';
import ls7 from '../screens/ls-7.png';
import ls8 from '../screens/ls-8.png';
import ls9 from '../screens/ls-9.png';

import su1 from '../screens/su-1.png';
import su2 from '../screens/su-2.png';
import su3 from '../screens/su-3.png';
import su4 from '../screens/su-4.png';
import su5 from '../screens/su-6.png';

import { FaReact, FaCss3Alt, FaHtml5, FaNodeJs } from 'react-icons/fa';
import { SiStyledcomponents, SiExpress, SiMongodb, SiEnvato, SiAdobe } from 'react-icons/si';
import { FaWordpress, FaElementor } from 'react-icons/fa6';
import { DiJavascript1 } from 'react-icons/di';

const projects = [
    {
        id: 0,
        title: [
            <a href="https://household-expenses-tracker-frontend.onrender.com/" className="link" key={0}>
                Aplikacja Household Expenses Tracker
            </a>
        ],
        images: [
            { id: 1, src: het1, className: 'project-image het-image1', alt: 'Strona główna' },
            { id: 2, src: het2, className: 'project-image het-image1', alt: 'Strona rejestracji' },
            { id: 3, src: het3, className: 'project-image het-image1', alt: 'Strona główna' },
            { id: 4, src: het4, className: 'project-image het-image1', alt: 'Dodawanie kategorii' },
            { id: 5, src: het5, className: 'project-image het-image1', alt: 'Dodawanie wydatków' },
            { id: 6, src: het6, className: 'project-image het-image1', alt: 'Panel informacyjny' },
            { id: 7, src: het7, className: 'project-image het-image1', alt: 'Lista wydatków' },
            { id: 8, src: het8, className: 'project-image het-image1', alt: 'Budżet' },
            { id: 9, src: het9, className: 'project-image het-image1', alt: 'Tworzenie grup' },
            { id: 10, src: het10, className: 'project-image het-image1', alt: 'Wykres kołowy' },
            { id: 11, src: het11, className: 'project-image het-image1', alt: 'Zmiana nazwy grupy' },
            { id: 12, src: het12, className: 'project-image het-image1', alt: 'Motyw jasny' },
            { id: 14, src: het13, className: 'project-image het-image1', alt: 'Motyw jasny' }
        ],
        description: [
            <h3 key={0}>
                Czy kiedykolwiek zastanawiałeś/łaś się, dokąd znika Twoje zarobione pieniądze w ciągu miesiąca?
                Stworzyłam poglądową aplikację do zarządzania wydatkami, która pomoże zyskać pełną kontrolę nad
                finansami i osiągnąć swoje cele oszczędnościowe!
            </h3>
        ],
        characteristics: [
            <li key={0}>
                <span>Przejrzysty podgląd wydatków</span> - aplikacja umożliwia dokładne monitorowanie wydatków w
                różnych kategoriach, które użytkownik może dostosować do własnych potrzeb. Użytkownik może dodać własne,
                wybrane przez siebie kategorię i zgodnie z nimi zapisywać poniesione wydatki. Dodatkowo aby zobrazować
                poniesione koszty aplikacja zawiera intuicyjne wykresy i zestawienia ułatwiają zrozumienie wzorców
                wydatków.
            </li>,
            <li key={1}>
                <span>Ustalanie budżetu</span> - użytkownik ma możliwość określenia limitu wydatków dla poszczególnych
                kategorii. Aplikacja obrazuje przez przypisane do każdej kategorii słupki, jaki poziom ustalonego limitu
                kwoty został już osiągnięty, pomagające w ten sposób uniknąć nadmiernych wydatków.
            </li>,
            <li key={2}>
                <span>Tworzenie grup</span> - aplikacja umożliwia współdzielenia budżetu z innymi osobami przez
                utworzenie grupy osób, które wspólnie mogą tworzyć listę wydatków. Wystarczy przesłać przez aplikację
                zaproszenie na e-mail do osoby z którą chcemy dzielić budżet. Jeśli zaproszenie zostanie zaakceptowane
                można przystąpić do wspólnego korzystania z aplikacji w grupie.
            </li>,
            <li key={3}>
                <span>Personalizacja</span> - użytkownik ma możliwość dostosowania aplikacji do swoich preferencji,
                dodając własne kategorie wydatków czy definiując niestandardowe budżety. Ale także tworząc grupę osób z
                którą współdzieli się listę wydatków, co jest dobrym rozwiązaniem dla gospodarstwa domowego składającego
                się z kilku osób. Użytkownik ma też możliwość wybrania motywu aplikacji, dostępne są dwie możliwości
                ciemny lub jasny.
            </li>
        ],
        technologies: [
            <div key={0} className="technologie">
                <FaReact />
                <p className="react">React</p>
            </div>,
            <div key={1} className="technologie">
                <DiJavascript1 />
                <p className="react">JavaScript</p>
            </div>,
            <div key={2} className="technologie">
                <SiStyledcomponents />
                <p className="styled">Styled-components</p>
            </div>,
            <div key={3} className="technologie">
                <FaCss3Alt />
                <p className="css">CSS</p>
            </div>,
            <div key={4} className="technologie">
                <FaHtml5 />
                <p className="html">HTML</p>
            </div>,
            <div key={5} className="technologie">
                <FaNodeJs />
                <p className="node">Node.js</p>
            </div>,
            <div key={6} className="technologie">
                <SiExpress />
                <p className="express">Express.js</p>
            </div>,
            <div key={7} className="technologie">
                <SiMongodb />
                <p className="mongo">Mongodb</p>
            </div>
        ]
    },
    {
        id: 1,
        title: [
            <a href="https://interior-designer-website.onrender.com/" className="link" key={0}>
                Wizytówka architekta wnętrz
            </a>
        ],
        images: [
            { id: 1, src: id1, className: 'project-image id-image1', alt: 'Strona główna' },
            { id: 2, src: id2, className: 'project-image id-image1', alt: 'Slider' },
            { id: 3, src: id3, className: 'project-image id-image1', alt: 'Zalety' },
            { id: 4, src: id4, className: 'project-image id-image1', alt: 'Realizacja usługi' },
            { id: 5, src: id5, className: 'project-image id-image1', alt: 'Kontakt' }
        ],
        description: [
            <h3 key={0}>
                Stworzyłam przykładowy projekt będący dynamiczną wizytówką dla architekta wnętrz. Dzięki wyjątkowemu
                minimalistycznemu i czytelnemu układowi, Klienci mogą łatwo przeglądać dostępne usługi oraz zrealizowane
                projekty.
            </h3>
        ],
        characteristics: [
            <li key={0}>
                <span>Przejrzyste menu</span> - przedstawienie menu w sposób czytelny i atrakcyjny wizualnie, tak aby
                korzystanie ze strony było łatwe dla użytkownika i umożliwiało szybkie przemieszczanie się po stronie.
            </li>,
            <li key={1}>
                <span>Prezentacja projektów</span> - uwzględnienie kluczowej kwestii jaką jest możliwość przeglądania
                zrealizowanych projektów w formie mini slajderów.
            </li>,
            <li key={2}>
                <span>Logo i dodatkowe informacje</span> - stworzenie logo oraz sekcja "O mnie", które budują zaufanie
                do firmy i zwiększają jej wiarygodność w oczach potencjalnych klientów.
            </li>
        ],
        technologies: [
            <div key={0} className="technologie">
                <FaReact />
                <p className="react">React</p>
            </div>,
            <div key={1} className="technologie">
                <SiStyledcomponents />
                <p className="styled">Styled-components</p>
            </div>,
            <div key={2} className="technologie">
                <FaCss3Alt />
                <p className="css">CSS</p>
            </div>,
            <div key={3} className="technologie">
                <FaHtml5 />
                <p className="html">HTML</p>
            </div>
        ]
    },
    {
        id: 2,
        title: [
            <a href="https://skill-boost-quality-website.onrender.com/" className="link" key={0}>
                Skill Boost Quality
            </a>
        ],
        images: [
            { id: 1, src: sbq1, className: 'project-image sbq-image1', alt: 'Strona główna' },
            { id: 2, src: sbq2, className: 'project-image sbq-image1', alt: 'Strona główna z aktywnym menu' },
            { id: 3, src: sbq3, className: 'project-image sbq-image1', alt: 'Motto firmy' },
            { id: 4, src: sbq4, className: 'project-image sbq-image1', alt: 'Formularz kontaktowy' },
            { id: 5, src: sbq5, className: 'project-image sbq-image1', alt: 'Informacje o zakresie usług' },
            { id: 6, src: sbq6, className: 'project-image sbq-image1', alt: 'Informację ze stopki' },
            { id: 7, src: sbq7, className: 'project-image sbq-image1', alt: 'Strona główna z aktywnym przyciskiem' },
            { id: 8, src: sbq8, className: 'project-image sbq-image1', alt: 'Opis jednej z usług' }
        ],
        description: [
            <h3 key={0}>
                Dla firmy zajmującej się audytami branży spożywczej - Skill Boost Quality stworzyłam responsywną stronę
                internetową, która nie tylko odzwierciedla jej markę, ale również ułatwia Klientom nawigację po ofercie
                usług. Strona stanowi wizytówkę firmy.
            </h3>
        ],
        characteristics: [
            <li key={0}>
                <span>Responsywny design</span> - strona została stworzona z myślą o użytkownikach korzystających
                zarówno z urządzeń mobilnych, jak i desktopowych. Responsywny design gwarantuje optymalne i niezakłócone
                doświadczenie przeglądania bez względu na to, czy użytkownik jest na smartfonie, tablecie czy
                komputerze. Strona automatycznie dostosowuje się do rozmiaru ekranu, co sprawia, że treści są czytelne,
                elementy interaktywne są łatwo dostępne, a nawigacja jest intuicyjna.
            </li>,
            <li key={1}>
                <span>Intuicyjny układ strony</span> - prosta nawigacja, szybkie znalezienie informacji. Zadbałam o to,
                aby strona była miejscem, gdzie łatwo znajdziesz potrzebne informacje. Intuicyjny układ strony został
                zaprojektowany tak, aby użytkownik nie musiał tracić czasu na szukanie. Kluczowe informacje są łatwo
                dostępne, a nawigacja jest przejrzysta i intuicyjna. Bez względu na to, czy użytkownik przegląda ofertę,
                czy szukasz kontaktu, przejście przez stronę będzie przyjemne i efektywne.
            </li>,
            <li key={2}>
                <span>Formularz kontaktowy</span> - aby nawiązanie kontaktu było proste i bezpieczne udostępniono
                wygodny formularz kontaktowy, który pozwala nam na szybkie odpowiedzi na pytania i potrzeby użytkownika.
                Formularz jest łatwy w użyciu, a dane są u nas w pełni chronione. Dzięki niemu można szybko i wygodnie
                skontaktować się z firmą, bez potrzeby korzystania z tradycyjnej poczty elektronicznej czy innych
                kanałów komunikacji.
            </li>
        ],
        technologies: [
            <div key={0} className="technologie">
                <FaReact />
                <p className="react">React</p>
            </div>,
            <div key={1} className="technologie">
                <SiStyledcomponents />
                <p className="styled">Styled-components</p>
            </div>,
            <div key={2} className="technologie">
                <FaCss3Alt />
                <p className="css">CSS</p>
            </div>,
            <div key={3} className="technologie">
                <FaHtml5 />
                <p className="html">HTML</p>
            </div>
        ]
    },
    {
        id: 3,
        title: [
            <a href="/projects/" className="link" key={0}>
                Studio urody
            </a>
        ],
        images: [
            { id: 1, src: su1, className: 'project-image sbq-image1', alt: 'Strona główna' },
            { id: 2, src: su2, className: 'project-image sbq-image1', alt: 'O nas' },
            { id: 3, src: su3, className: 'project-image sbq-image1', alt: 'Zakres usług' },
            { id: 4, src: su4, className: 'project-image sbq-image1', alt: 'Cennik' },
            { id: 5, src: su5, className: 'project-image sbq-image1', alt: 'Kalendarz' },
            {}
        ],
        description: [
            <h3 key={0}>
                Przykładowa strona dla studia urody specjalizującego się w pielęgnacji paznokci. Strona ta pełni rolę
                wizytówki dla studia, umożliwiając potencjalnym Klientom łatwe zapoznanie się z oferowanymi usługami.
                Zawiera kalendarz spotkań umożliwiający umówienie wizyty online. Ostatnia zakładka na stronie
                internetowej zawiera dane kontaktowe studia urody oraz formularz kontaktowy, który umożliwia Klientom
                wysłanie zapytania.
            </h3>
        ],
        characteristics: [
            <li key={0}>
                <span>Estetycznym designem</span> - harmonijna kolorystyka oraz czytelny układ przyciągają uwagę
                odwiedzających i budują pozytywne wrażenie.
            </li>,
            <li key={1}>
                <span>Kalendarz spotkań</span> - możliwość rezerwacji terminu wizyty za pośrednictwem wbudowanego
                kalendarza spotkań. Dzięki temu narzędziu użytkownicy mogą dostosować swoje usługi do indywidualnych
                potrzeb i budżetu oraz sprawdzić dostępność terminów, co zwiększa atrakcyjność oferty studia urody..
            </li>
        ],
        technologies: [
            <div key={0} className="technologie">
                <FaWordpress />
                <p className="wordpress">WordPress</p>
            </div>,
            <div key={0} className="technologie">
                <FaElementor />
                <p className="elementor">Elementor</p>
            </div>,
            <div key={0} className="technologie">
                <SiEnvato />
                <p className="envato">Envato</p>
            </div>,
            <div key={0} className="technologie">
                <SiAdobe />
                <p className="adobe">Adobe Color</p>
            </div>
        ]
    },
    {
        id: 4,
        title: [
            <a href="/projects/" className="link" key={0}>
                Kancelaria prawna
            </a>
        ],
        images: [
            { id: 1, src: ls1, className: 'project-image sbq-image1', alt: 'Strona główna' },
            { id: 2, src: ls2, className: 'project-image sbq-image1', alt: 'Strona główna z aktywnym menu' },
            { id: 3, src: ls3, className: 'project-image sbq-image1', alt: 'Motto firmy' },
            { id: 4, src: ls4, className: 'project-image sbq-image1', alt: 'Formularz kontaktowy' },
            { id: 5, src: ls5, className: 'project-image sbq-image1', alt: 'Informacje o zakresie usług' },
            { id: 6, src: ls6, className: 'project-image sbq-image1', alt: 'Informację ze stopki' },
            { id: 7, src: ls7, className: 'project-image sbq-image1', alt: 'Strona główna z aktywnym przyciskiem' },
            { id: 8, src: ls8, className: 'project-image sbq-image1', alt: 'Opis jednej z usług' },
            { id: 9, src: ls9, className: 'project-image sbq-image1', alt: 'Opis jednej z usług' }
        ],
        description: [
            <h3 key={0}>
                Korzystając z systemu zarządzania treścią na stronie www, jakim jest Wordpress, stworzyłam przykładowy
                projekt będący wizytówką dla kancelarii prawnej. Potencjalni Klienci mogą łatwo przeglądać dostępne
                usługi. Witryna zawiera stronę główną z ogólnymi informacjami na temat kancelarii, zakresem usług oraz
                danymi kontaktowymi. Kolejna zakładka zawiera informacje o pracownikach oraz przykładowe opinie
                klientów. Na następnej podstronie znajdują się szersze informacje o świadczonych usługach. Ostatnia
                zakładka została poświęcona danym kontaktowym i zawiera formularz oraz FAQ wraz z danymi kontaktowymi.
            </h3>
        ],
        characteristics: [
            <li key={0}>
                <span>Minimalistyczny design</span> - stron wyróżnia się minimalistycznym designem, który skupia uwagę
                na istotnych informacjach. Niebieska kolorystyka nadaje stronie profesjonalny i zaufany charakter, co
                pomaga budować pozytywny wizerunek kancelarii prawnej. Dzięki przejrzystemu układowi i estetyce,
                użytkownicy łatwo znajdą potrzebne informacje.
            </li>,
            <li key={1}>
                <span>Łatwa nawigacja</span> - rojekt strony został stworzony z myślą o prostocie i intuicyjności
                nawigacji. Oferujemy klientom płynne i szybkie przeglądanie treści, dzięki czemu mogą łatwo znaleźć
                potrzebne informacje na temat usług prawnych, zespołu prawników oraz danych kontaktowych.
            </li>
        ],
        technologies: [
            <div key={0} className="technologie">
                <FaWordpress />
                <p className="wordpress">WordPress</p>
            </div>,
            <div key={0} className="technologie">
                <FaElementor />
                <p className="elementor">Elementor</p>
            </div>,
            <div key={0} className="technologie">
                <SiEnvato />
                <p className="envato">Envato</p>
            </div>,
            <div key={0} className="technologie">
                <SiAdobe />
                <p className="adobe">Adobe Color</p>
            </div>
        ]
    }
];

export default projects;
