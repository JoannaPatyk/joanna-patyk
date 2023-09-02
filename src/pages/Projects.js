import React from 'react';
import Menu from '../components/Menu';
import Media from '../components/Media';
import Banner from '../components/Banner';
import ScrollButton from '../components/ScrollButton';
import Footer from '../components/Footer';
import projects from '../utils/projects';
import starsImage from '../images/yellow-stars.png';

import '../css/projects.css';

function Projects() {
    const displayProjectContent = projects.map(({ id, title, images, description, characteristics, technologies }) => {
        return (
            <div key={id} className="project">
                <h2 className="project-title">
                    Projekt: <span>{title}</span>
                </h2>
                {images}
                <div className="project-description">
                    {description}
                    <h4 className="points-title">Cechy projektu:</h4>
                    <div className="characteristics">
                        <ul>{characteristics}</ul>
                    </div>
                    <h4 className="points-title">Technologie użyte w projekcie:</h4>
                    <div className="technologies">{technologies}</div>
                </div>
            </div>
        );
    });

    return (
        <>
            <Menu />
            <Media />
            <div className="projects-container">
                <h1>
                    Zapraszam do <span>zapoznania się</span> z częścią moich projektów
                </h1>
                <h2> Każdy projekt to unikalne wyzwanie, którego podjęłam się z pasją i zaangażowaniem.</h2>
                <h3 className="main-description">
                    Pracując nad stronami internetowymi, stawiam na estetykę, funkcjonalność oraz intuicyjny interfejs.
                    Poniżej znajduje się kilka przykładów zrealizowanych projektów. Jeśli szukasz osoby do realizacji
                    swojej wizji, jestem gotowa do działania. Razem możemy stworzyć stronę, która będzie wizytówką
                    Twojego biznesu w sieci.{' '}
                    <span>
                        Skontaktuj się ze mną, aby omówić swoje potrzeby i rozpocząć ekscytującą podróż w świecie
                        tworzenia stron internetowych!
                    </span>
                </h3>
                <div className="projects">{displayProjectContent}</div>

                <img src={starsImage} className="stars-image" alt="" />
            </div>
            <ScrollButton />
            <Banner />
            <Footer />
        </>
    );
}

export default Projects;
