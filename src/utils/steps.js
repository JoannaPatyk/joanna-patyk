import React from 'react';
import { PiArrowBendRightDownThin, PiArrowBendLeftDownThin } from 'react-icons/pi';

const steps = [
    {
        id: 0,
        title: 'Krok 1: Skontaktuj się',
        description:
            'Tworzenie strony zaczyna się od zrozumienia Twoich celów, wizji i potrzeb. Skontaktuj się ze mną, omówimy szczegóły współpracy. Twoje pomysły są dla mnie cenną wskazówką.'
    },
    {
        id: 1,
        title: '',
        description: <PiArrowBendRightDownThin className="arrow1" />
    },
    {
        id: 2,
        title: '',
        description: <PiArrowBendLeftDownThin className="arrow2" />
    },
    {
        id: 3,
        title: 'Krok 2: Przedstaw oczekiwania',
        description:
            'Przekaż, co jest dla Ciebie ważne, abym mogła to uwzględnić w projekcie. Twoje oczekiwania stają się moimi wytycznymi. Twoja strona to Twoja wirtualna wizytówka.'
    },
    {
        id: 4,
        title: 'Krok 3: Indywidualny projekt',
        description:
            'Opierając się na otrzymanych informacjach, przedstawię Ci moją koncepcję. Zaproponuje rozwiązania, które będą wyróżniały Twoją stronę na tle konkurencji.'
    },
    {
        id: 4,
        title: '',
        description: <PiArrowBendRightDownThin className="arrow3" />
    },
    {
        id: 5,
        title: '',
        description: ''
    },
    {
        id: 6,
        title: 'Krok 4: Realizacja usługi',
        description:
            'Po zatwierdzeniu projektu, przechodzę do działania. Będę Cię na bieżąco informować o postępach. Twoja wizja staje się rzeczywistością, a efekt końcowy spełni Twoje oczekiwania.'
    }
];

export default steps;
