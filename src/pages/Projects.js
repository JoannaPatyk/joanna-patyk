import React from 'react';
import Menu from '../components/Menu';
import Banner from '../components/Banner';
import ScrollButton from '../components/ScrollButton';
import DisplayProjects from '../components/DisplayProjects';
import Footer from '../components/Footer';
import DisplaySquares from '../components/DisplaySquares';
import projectImages from '../utils/projectImages';
import projectsSquares from '../utils/projectsSquares';
import '../css/projects.css';

function Projects() {
    const imageElements = projectImages.map(({ id, src, className, alt }) => (
        <img key={id} src={src} className={className} alt={alt} />
    ));

    return (
        <>
            <Menu />
            <div className="projects-container">
                <h1>
                    Zapraszam do <span>zapoznania się</span> z częścią <span>wykonanych projektów</span>
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
                <DisplayProjects />
                {imageElements}
                <DisplaySquares elements={projectsSquares} />
            </div>
            <ScrollButton />
            <Banner />
            <Footer />
        </>
    );
}

export default Projects;
