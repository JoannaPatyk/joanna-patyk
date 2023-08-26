import React from 'react';
import '../css/registration.css';

import steps from '../utils/steps';
// import { BsBalloonHeart } from 'react-icons/bs';

function Registration() {
    const displaySteps = steps.map(({ id, title, description }) => {
        return (
            <article className="step" key={id}>
                <h2 className="title">{title}</h2>
                <p className="description">{description}</p>
            </article>
        );
    });

    return (
        <div className="registration-container">
            <h1>Poszukujesz osoby, która stworzy stronę internetową dla Twojej firmy?</h1>
            <section className="steps-container">{displaySteps}</section>
            {/* <BsBalloonHeart className="registration-icon" /> */}
        </div>
    );
}

export default Registration;
