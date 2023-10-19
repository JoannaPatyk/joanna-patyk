import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { showErrorEmailMessage, showError, showMessage } from '../utils/notification';
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
    theme: '',
    appearance: '',
    message: ''
};

function ApplicationForm() {
    const form = useRef();
    const [toSend, setToSend] = useState(initialState);
    const [checked, setChecked] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(true);

    const { singleCheck, multiCheck, blogCheck } = toSend;

    const checkboxOptions = [
        { name: 'single', label: 'single page - jednostronicowa strona, bez zakładek', checked: singleCheck },
        { name: 'multi', label: 'multi page -  strona z kilkoma zakładkami', checked: multiCheck },
        { name: 'blog', label: 'blog - strona z regularnymi wpisami', checked: blogCheck }
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
            showErrorEmailMessage();
            return;
        }

        try {
            await emailjs.sendForm(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                form.current,
                process.env.REACT_APP_PUBLIC_KEY
            );

            showMessage();
            setToSend(initialState);
            setButtonDisabled(true);
            setChecked(!checked);
        } catch (error) {
            showError();
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
                <div className="questions">
                    <label>
                        Jakiego rodzaju strona Cię interesuje?
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
                <h3>
                    Jeśli wolisz komunikację mailową, możesz napisać na adres:
                    <a href="mailto:patykjoanna93@gmail.com">
                        <HiOutlineMailOpen className="email-icon" />
                    </a>
                </h3>
            </form>
            <DisplayImages elements={contactImages} />
            <DisplaySquares elements={contactSquares} />
        </div>
    );
}

export default ApplicationForm;
