import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Button from './Button';
import DisplaySquares from './DisplaySquares';
import DisplayImages from './DisplayImages';
import contactSquares from '../utils/contactSquares';
import contactImages from '../utils/contactImages';
import formFields from '../utils/formFields';
import { HiOutlineMailOpen } from 'react-icons/hi';
import '../css/applicationForm.css';

const initialState = {
    name: '',
    email: '',
    phone: '',
    singleCheck: '',
    multiCheck: '',
    blogCheck: '',
    shopCheck: '',
    theme: '',
    appearance: '',
    message: ''
};

function ApplicationForm() {
    const form = useRef();
    const [toSend, setToSend] = useState(initialState);
    const [checked, setChecked] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(true);

    const { singleCheck, multiCheck, blogCheck, shopCheck } = toSend;

    const checkboxOptions = [
        { name: 'single', label: 'single page', checked: singleCheck },
        { name: 'multi', label: 'multi page', checked: multiCheck },
        { name: 'blog', label: 'blog', checked: blogCheck },
        { name: 'shop', label: 'sklep internetowy', checked: shopCheck }
    ];

    const handleFormFieldChange = (e, field) => {
        setToSend({
            ...toSend,
            [field]: e.target.value
        });
    };

    const handleAgreementChange = () => {
        setChecked(!checked);
        setButtonDisabled(!buttonDisabled);
    };

    const isEmailValid = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const sendEmail = async (e) => {
        e.preventDefault();

        if (!isEmailValid(toSend.email) || toSend.email === '') {
            alert('Proszę podać prawidłowy adres email.');
            return;
        }

        try {
            await emailjs.sendForm(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                form.current,
                process.env.REACT_APP_PUBLIC_KEY
            );

            alert('Dziękujemy 😊, wiadomość została wysłana!');
            setToSend(initialState);
            setChecked(!checked);
        } catch (error) {
            alert('Nie udało się, spróbuj ponownie 😟');
        }
    };

    return (
        <div className="form-container">
            <form ref={form} className="contact-form" onSubmit={sendEmail}>
                <h1>
                    Zachęcam do skorzystania z <span>formularza kontaktowego</span>
                </h1>
                <h2>
                    Napisz, chętnie <span>odpowiem na Twoje pytania!</span> Skontaktuj się w dowolnym momencie, a
                    postaram się pomóc.
                </h2>
                <h3>
                    Poniżej znajduje się formularz zgłoszeniowy zawierający kilka pytań.{' '}
                    <span>Udzielenie odpowiedzi na nie umożliwi przesłanie wstępnej wyceny.</span> Ostateczne koszty
                    zostaną przedstawione po ustaleniu szczegółów.
                </h3>
                <h4>
                    Jeśli wolisz komunikację mailową, możesz napisać na adres:
                    <a href="mailto:patykjoanna93@gmail.com">
                        <HiOutlineMailOpen className="email-icon" />
                    </a>
                </h4>
                <div className="questions">
                    <label>
                        1. Jakiego rodzaju strona Cię interesuje?
                        {checkboxOptions.map(({ name, checked, label }) => (
                            <label className="checkbox-container" htmlFor={name} key={name}>
                                <input
                                    name={name}
                                    type="checkbox"
                                    id={name}
                                    checked={checked}
                                    onChange={() => {
                                        setToSend({
                                            ...toSend,
                                            [`${name}Check`]: !checked
                                        });
                                    }}
                                />
                                <span className="checkmark"></span>
                                <p>{label}</p>
                            </label>
                        ))}
                    </label>

                    {formFields.map(({ id, name, label, type, placeholder }) => (
                        <div key={id}>
                            <label htmlFor={id}>{label}</label>
                            {type === 'textarea' ? (
                                <textarea
                                    id={id}
                                    value={toSend[name]}
                                    name={name}
                                    placeholder={placeholder}
                                    onChange={(e) => handleFormFieldChange(e, name)}
                                ></textarea>
                            ) : (
                                <input
                                    id={id}
                                    value={toSend[name]}
                                    name={name}
                                    type={type}
                                    placeholder={placeholder}
                                    onChange={(e) => handleFormFieldChange(e, name)}
                                />
                            )}
                        </div>
                    ))}

                    <label className="checkbox-container" htmlFor="agreement">
                        <input
                            type="checkbox"
                            id="agreement"
                            name="agreement"
                            checked={checked}
                            onChange={handleAgreementChange}
                        />
                        <span className="checkmark"></span>
                        <p>
                            Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z ustawą o ochronie danych
                            osobowych w związku z realizacją zgłoszenia.
                        </p>
                    </label>
                </div>
                <Button nextClass="application-btn" type="submit" disabled={buttonDisabled}>
                    wyślij
                </Button>
            </form>
            <DisplayImages elements={contactImages} />
            <DisplaySquares elements={contactSquares} />
        </div>
    );
}

export default ApplicationForm;
