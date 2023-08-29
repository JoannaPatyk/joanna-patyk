import React from 'react';

const steps = [
    {
        id: 0,
        title: 'Krok 1: Skontaktuj się',
        description: [
            <p key={0}>
                Tworzenie strony zaczyna się od <span>zrozumienia Twoich celów</span>, wizji i potrzeb. Skontaktuj się
                ze mną, omówimy szczegóły współpracy. Twoje pomysły są dla mnie cenną wskazówką.
            </p>
        ]
    },
    {
        id: 1,
        title: 'Krok 2: Przedstaw oczekiwania',
        description: [
            <p key={0}>
                Przekaż, co jest <span>ważne dla Ciebie</span>, abym mogła to uwzględnić w projekcie. Twoje oczekiwania
                stają się moimi wytycznymi. Twoja strona to Twoja wirtualna wizytówka.
            </p>
        ]
    },
    {
        id: 2,
        title: 'Krok 3: Indywidualny projekt',
        description: [
            <p key={0}>
                Opierając się na otrzymanych informacjach, przedstawię Ci moją koncepcję. Zaproponuje rozwiązania, które
                będą <span>wyróżniały Twoją stronę na tle konkurencji</span>.
            </p>
        ]
    },
    {
        id: 3,
        title: 'Krok 4: Realizacja usługi',
        description: [
            <p key={0}>
                Po zatwierdzeniu projektu, przechodzę do działania. Będę Cię na bieżąco informować o postępach. Twoja
                wizja staje się rzeczywistością, <span>a efekt końcowy spełni Twoje oczekiwania</span>.
            </p>
        ]
    }
];

export default steps;
