import React from 'react';
import '../css/registration.css';
import DisplaySquares from './DisplaySquares';
import DisplayImages from './DisplayImages';
import steps from '../utils/steps';
import registrationSquare from '../utils/registrationSquares';
import registrationImages from '../utils/registrationImages';

function Registration() {
    const displaySteps = steps.map(({ id, title, description }) => {
        return (
            <article className="step" key={id}>
                <h2 className="title">{title}</h2>
                {description}
            </article>
        );
    });

    return (
        <div className="registration-container">
            <h1>Poszukujesz kogoś kto stworzy stronę internetową Twojej firmy?</h1>
            <section className="steps-container">{displaySteps}</section>
            <DisplayImages elements={registrationImages} />
            <DisplaySquares elements={registrationSquare} />
        </div>
    );
}

export default Registration;
