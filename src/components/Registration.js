import React from 'react';
import '../css/registration.css';
import DisplaySquares from './DisplaySquares';
import steps from '../utils/steps';
import registrationSquare from '../utils/registrationSquares';

import backgroundPlane from '../images/violet-bg-map.png';
import backgroundIdeas from '../images/violet-bg-ideas.png';
import backgroundFlower from '../images/violet-bg-flower.png';

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
            <section className="steps-container">
                {displaySteps}
                <img src={backgroundPlane} className="background-image-plane" alt="Samolot" />
                <img src={backgroundIdeas} className="background-image-ideas" alt="Żarówka" />
                <img src={backgroundFlower} className="background-image-flower" alt="Kwiat" />
            </section>
            <DisplaySquares elements={registrationSquare} />
        </div>
    );
}

export default Registration;
