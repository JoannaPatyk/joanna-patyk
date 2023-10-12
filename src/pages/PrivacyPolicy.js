import React from 'react';
import privacyText from '../utils/privacyText';
import '../css/privacyPolicy.css';

function PrivacyPolicy() {
    return (
        <div className="policy-container">
            <h1>Polityka prywatności </h1>
            <h3>
                Polityka prywatności opisuje zasady przetwarzania przez nas informacji na Twój temat, w tym danych
                osobowych oraz cookies.
            </h3>
            <div className="policy-text">
                {privacyText.map((item, index) => {
                    return (
                        <div key={index}>
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                        </div>
                    );
                })}
            </div>
            <h3>Wszelkie zapytania proszę kierować pod adres email: patykjoanna93@gmail.com</h3>
        </div>
    );
}

export default PrivacyPolicy;
