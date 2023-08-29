import React from 'react';
import '../css/registration.css';
import Square from './Square';
import steps from '../utils/steps';
import backgroundPlane from '../images/map.png';
import backgroundIdeas from '../images/ideas.png';

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
            <img src={backgroundPlane} className="background-image-plane" alt="Samolot" />
            <img src={backgroundIdeas} className="background-image-ideas" alt="Żarówka" />
            <Square id="small-4" />
            <Square id="small-5" />
            <Square id="small-6" />
        </div>
    );
}

export default Registration;
