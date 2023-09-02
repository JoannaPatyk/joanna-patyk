import React from 'react';
import '../css/projects.css';
import het1 from '../images/het-1.png';
import sbq1 from '../images/sbq-1.png';
import id1 from '../images/id-1.png';

import { FaReact, FaCss3Alt, FaHtml5, FaNodeJs } from 'react-icons/fa';
import { SiStyledcomponents, SiExpress, SiMongodb } from 'react-icons/si';

const projects = [
    {
        id: 0,
        title: 'Aplikacja Household Expenses Tracker',
        images: [<img key={0} src={het1} className="project-image het-image1" alt="" />],
        description: [
            <h3 key={0}>
                Czy kiedykolwiek zastanawiałeś/łaś się, dokąd znika Twoje zarobione pieniądze w ciągu miesiąca?
                Stworzyłam poglądową aplikację do zarządzania wydatkami, która pomoże zyskać pełną kontrolę nad
                finansami i osiągnąć swoje cele oszczędnościowe.
            </h3>
        ],
        characteristics: [
            <li key={0}>
                <span>Przejrzysty podgląd wydatków:</span> możliwość monitorowania dokładnie, ile wydaje się na różne
                kategorie, które samemu można ustawić. Dzięki czytelnym wykresom i zestawieniom, z łatwością można
                zdefiniować wzorce wydatków.
            </li>,
            <li key={1}>
                <span>Ustalanie budżetu:</span> możliwość określenia limitu wydatków dla poszczególnych kategorii.
                Aplikacja obrazuje, gdy użytkownik zbliża się do limitu, pomagające uniknąć nadmiernych wydatków.
            </li>,
            <li key={2}>
                <span>Tworzenie grup:</span> możliwość współdzielenia budżetu z innymi osobami. Aplikacja umożliwia
                utworzenie grupy osób, które wspólnie mogą tworzyć listę wydatków.
            </li>,
            <li key={3}>
                <span>Personalizacja:</span> możliwość dostosowania aplikacji do swoich preferencji, dodając własne
                kategorie wydatków czy definiując niestandardowe budżety.
            </li>
        ],
        technologies: [
            <p key={0}>
                <FaReact className="technologie" />
            </p>,
            <p key={1}>
                <SiStyledcomponents className="technologie" />
            </p>,
            <p key={2}>
                <FaCss3Alt className="technologie" />
            </p>,
            <p key={3}>
                <FaHtml5 className="technologie" />
            </p>,
            <p key={4}>
                <FaNodeJs className="technologie" />
            </p>,
            <p key={5}>
                <SiExpress className="technologie" />
            </p>,
            <p key={6}>
                <SiMongodb className="technologie" />
            </p>
        ]
    },
    {
        id: 1,
        title: 'Skill Boost Quality',
        images: [<img key={0} src={sbq1} className="project-image sbq-image1" alt="" />],
        description: [
            <h3 key={0}>
                Dla firmy zajmującej się audytami branży spozywczej - Skill Boost Quality stworzyłam responsywną stronę
                internetową, która nie tylko odzwierciedla jej markę, ale również ułatwia Klientom nawigację po ofercie
                produktów i usług. Strona stanowi wizytówkę firmy.
            </h3>
        ],
        characteristics: [
            <li key={0}>Responsywny design dla optymalnego wyświetlania na urządzeniach mobilnych i desktopowych.</li>,
            <li key={1}>Intuicyjny układ strony, ułatwiający użytkownikom znalezienie potrzebnych informacji.</li>,
            <li key={2}>Formularz kontaktowy w celu łatwego i bezpiecznego nawiązania kontaktu.</li>
        ],
        technologies: [
            <p key={0}>
                <FaReact className="technologie" />
            </p>,
            <p key={1}>
                <SiStyledcomponents className="technologie" />
            </p>,
            <p key={2}>
                <FaCss3Alt className="technologie" />
            </p>,
            <p key={2}>
                <FaHtml5 className="technologie" />
            </p>
        ]
    },
    {
        id: 3,
        title: 'Wizytówka architekta wnętrz',
        images: [<img key={0} src={id1} className="project-image id-image1" alt="" />],
        description: [
            <h3 key={0}>
                Stworzyłam przykładowy projekt będący dynamiczną wizytówką dla architekta wnętrz. Dzięki wyjątkowemu
                minimalistycznemu i czytelnemu układowi, Klienci mogą łatwo przeglądać dostępne usługi oraz zrealizowane
                projekty.
            </h3>
        ],
        characteristics: [
            <li key={0}>Przedstawienie menu w sposób czytelny i atrakcyjny wizualnie.</li>,
            <li key={1}>Możliwość przeglądania zrealizowanych projektów.</li>,
            <li key={2}>Logo oraz sekcja "O mnie", budujące zaufanie do firmy.</li>
        ],
        technologies: [
            <p key={0}>
                <FaReact className="technologie" />
            </p>,
            <p key={1}>
                <SiStyledcomponents className="technologie" />
            </p>,
            <p key={2}>
                <FaCss3Alt className="technologie" />
            </p>,
            <p key={2}>
                <FaHtml5 className="technologie" />
            </p>
        ]
    }
];

export default projects;
