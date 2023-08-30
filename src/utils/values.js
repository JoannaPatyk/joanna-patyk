import React from 'react';
import { GiPencilBrush } from 'react-icons/gi';
import { LuHeartHandshake } from 'react-icons/lu';
import { RxRocket } from 'react-icons/rx';
import { PiMedalLight } from 'react-icons/pi';

const values = [
    {
        id: 0,
        icon: <GiPencilBrush className="active" />,
        title: 'Estetyka i Użyteczność',
        text: [
            <p key={0}>
                Wierzę, że forma i funkcja powinny iść ze sobą w parze. Moje projekty łączą estetykę z intuicyjną
                nawigacją oraz łatwością użytkowania. <span>Kładę nacisk na czytelność, konsekwentność wizualną</span>,
                aby strona była przyjemna dla oka i prostą w obsłudze.
            </p>
        ]
    },
    {
        id: 1,
        icon: <LuHeartHandshake />,
        title: 'Partnerstwo i zaufanie',
        text: [
            <p key={0}>
                Współpraca opiera się na <span>wzajemnym zaufaniu i otwartej komunikacji</span>. Dążę do zrozumienia
                Twoich celów i wizji, aby móc w pełni oddać ich charakter w tworzonym projekcie. Regularnie dzielę się
                postępem prac, aby osiągnąć optymalny rezultat.
            </p>
        ]
    },
    {
        id: 2,
        icon: <RxRocket />,
        title: 'Optymalizacja i Szybkość',
        text: [
            <p key={0}>
                Strony internetowe powinny być nie tylko estetyczne, ale także szybkie i efektywne. Zwracam uwagę na
                optymalizację kodu, obrazów i innych zasobów, <span>aby strona wczytywała się szybko i płynnie</span>.
                To kluczowe dla dobrej jakości doświadczenia użytkownika.
            </p>
        ]
    },
    {
        id: 3,
        icon: <PiMedalLight />,
        title: 'Etyka i Poufność',
        text: [
            <p key={0}>
                Szanuję prywatność odwiedzających i dbam o{' '}
                <span>etyczne praktyki w obszarze zbierania i przetwarzania danych</span>. Gwarantuję poufność
                przekazywanych informacji oraz dbam o zgodność z obowiązującymi przepisami dotyczącymi ochrony danych.
            </p>
        ]
    }
];

export default values;
