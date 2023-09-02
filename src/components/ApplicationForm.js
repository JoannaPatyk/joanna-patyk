import React from 'react';
import Button from './Button';
import Square from './Square';
import Menu from './Menu';
import Media from './Media';
import '../css/applicationForm.css';
import websiteTypes from '../utils/websiteTypes';

function ApplicationForm() {
    const displayCheckbox = websiteTypes.map(({ id, label }) => {
        return (
            <label key={id} className="checkbox-container" htmlFor={id}>
                <input type="checkbox" id={id} />
                <span className="checkmark"></span>
                {label}
            </label>
        );
    });

    return (
        <>
            <Menu />
            <Media />
            <div className="form-container">
                <form className="contact-form">
                    <h1>FORMULARZ ZGŁOSZENIOWY</h1>
                    <h3>
                        Poniżej znajduje się formularz zgłoszeniowy zawierający kilka pytań. Udzielenie odpowiedzi na
                        nie umożliwi przesłanie wstępnej wyceny. Ostateczne koszty zostaną przedstawione po ustaleniu
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
                    <Button nextClass="application-btn" type="submit">
                        wyślij
                    </Button>

                    <Square id="small-1" top="90%" left="12%" backgroundColor="#f7dcc5" filterColor="#e1a36e" />
                    <Square id="small-3" top="70%" left="5%" backgroundColor="#d68aa7 " filterColor="#901a47" />

                    <Square id="small-11" />
                    <Square id="small-12" />
                </form>
            </div>
        </>
    );
}

export default ApplicationForm;
