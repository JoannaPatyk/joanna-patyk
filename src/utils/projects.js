import React from 'react';
import '../css/projects.css';
import het1 from '../screens/het-1.png';
import sbq1 from '../screens/sbq-1.png';
import id1 from '../screens/id-1.png';

import { FaReact, FaCss3Alt, FaHtml5, FaNodeJs } from 'react-icons/fa';
import { SiStyledcomponents, SiExpress, SiMongodb } from 'react-icons/si';

const projects = [
    {
        id: 0,
        title: [
            <a href="https://household-expenses-tracker-frontend.onrender.com/" className="link" key={0}>
                Aplikacja Household Expenses Tracker
            </a>
        ],
        images: [<img key={0} src={het1} className="project-image het-image1" alt="" />],
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
            </div>,
            <div key={4} className="technologie">
                <FaNodeJs />
                <p className="node">Node.js</p>
            </div>,
            <div key={5} className="technologie">
                <SiExpress />
                <p className="express">Express.js</p>
            </div>,
            <div key={6} className="technologie">
                <SiMongodb />
                <p className="mongo">Mongodb</p>
            </div>
        ]
    },
    {
        id: 1,
        title: [
            <a href="https://skill-boost-quality-website.onrender.com/" className="link" key={0}>
                Skill Boost Quality
            </a>
        ],
        images: [<img key={0} src={sbq1} className="project-image sbq-image1" alt="" />],
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
            <a href="https://interior-designer-website.onrender.com/" className="link" key={0}>
                Wizytówka architekta wnętrz
            </a>
        ],
        images: [<img key={0} src={id1} className="project-image id-image1" alt="" />],
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
    }
];

export default projects;
