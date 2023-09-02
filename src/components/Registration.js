import React from 'react';
import '../css/registration.css';
import Square from './Square';
import steps from '../utils/steps';
import backgroundPlane from '../images/map.png';
import backgroundIdeas from '../images/ideas.png';
import backgroundFlower from '../images/flower.png';

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

            <Square id="small-1" top="90%" left="5%" backgroundColor="#f7dcc5" filterColor="#e1a36e" />
            <Square id="small-2" top="95%" left="30%" backgroundColor=" #901a47" filterColor="#d68aa7" />
            <Square id="small-4" top="80%" left="80%" backgroundColor="#e1a36e" filterColor="#bf613f" />
        </div>
    );
}

export default Registration;
