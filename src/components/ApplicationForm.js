import React, { useState } from 'react';
import Button from './Button';
import Square from './Square';
import SmallMenu from './SmallMenu';

import '../css/applicationForm.css';
import websiteTypes from '../utils/websiteTypes';
import planeImage from '../images/plane.png';
import flowerImage from '../images/flower.png';
import flowerImage2 from '../images/paper-plane.png';

import { TiThMenuOutline } from 'react-icons/ti';
import { TiArrowBackOutline } from 'react-icons/ti';

function ApplicationForm() {
    const [isOpen, setIsOpen] = useState(false);

    const displayCheckbox = websiteTypes.map(({ id, label }) => {
        return (
            <label key={id} className="checkbox-container" htmlFor={id}>
                <input type="checkbox" id={id} />
                <span className="checkmark"></span>
                {label}
            </label>
        );
    });

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="form-container">
            <div className="menu-container">
                <button className="menu-icon" onClick={handleToggle}>
                    {isOpen ? <TiArrowBackOutline className="menu-icon" /> : <TiThMenuOutline className="menu-icon" />}
                </button>

                <div className={`${isOpen ? 'small-menu show' : 'small-menu'}`}>
                    <SmallMenu isOpen={isOpen} />
                </div>
            </div>

            <form className="contact-form">
                <h1>FORMULARZ ZGŁOSZENIOWY</h1>
                <h3>
                    Poniżej znajduje się formularz zgłoszeniowy zawierający kilka pytań. Udzielenie odpowiedzi na nie
                    umożliwi przesłanie wstępnej wyceny. Ostateczne koszty zostaną przedstawione po ustaleniu
                    szczegółów.
                </h3>

                <div className="questions">
                    <label htmlFor="name">1. Imię:</label>
                    <input id="name" type="text" placeholder="Imię..." />

                    <label htmlFor="email">2. Adres e-mail:</label>
                    <input id="email" type="email" placeholder="E-mail..." />

                    <label htmlFor="email">3. Numer telefonu:</label>
                    <input id="email" type="number" placeholder="Numer telefonu..." />

                    <label htmlFor="email">3. Jakiej tematyki ma dotyczyć strona?</label>
                    <input id="email" type="text" placeholder="Branża..." />

                    <label htmlFor="email">4. Jakiego rodzaju strona Cię interesuje?</label>
                    {displayCheckbox}

                    <label htmlFor="appearance">
                        5. Czy masz już jakaś wizję lub oczekiwania jak powinna wyglądać strona?
                    </label>
                    <textarea id="appearance" type="text" placeholder="Treść wiadomości..." />

                    <label htmlFor="message">6. Czy jest coś jeszcze o czym chcesz wspomnieć?</label>
                    <textarea id="message" placeholder="Treść wiadomości..."></textarea>

                    <label className="checkbox-container" htmlFor="agreement">
                        <input type="checkbox" id="agreement" />
                        <span className="checkmark"></span>
                        <i>
                            Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z ustawą o ochronie danych
                            osobowych w związku z realizacją zgłoszenia.
                        </i>
                    </label>
                </div>

                <img src={flowerImage2} className="contact-flower2-image" alt="Kwiaty" />
                <img src={flowerImage} className="contact-flower-image" alt="Kwiaty" />
                <img src={planeImage} className="contact-plane-image" alt="Samolot papierowy" />

                <Button nextClass="application-btn" type="submit">
                    wyślij
                </Button>

                <Square id="small-10" />
                <Square id="small-11" />
                <Square id="small-12" />
            </form>
        </div>
    );
}

export default ApplicationForm;
