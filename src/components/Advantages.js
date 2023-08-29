import React from 'react';
import Square from './Square';
import advantages from '../utils/advantages';
import advantagesImages from '../utils/advantagesImages';
import '../css/advantages.css';

function Advantages() {
    const displayAdvantages = advantages.map(({ id, title, text }) => {
        return (
            <article key={id} className="advantage">
                <h2>{title}</h2>
                {text}
            </article>
        );
    });

    const displayImages = advantagesImages.map(({ id, src, cls, alt }) => {
        return <img key={id} src={src} className={cls} alt={alt} />;
    });

    return (
        <div className="advantages-container">
            <h1>Czy warto posiadać stronę internetową?</h1>
            <h2>
                W dzisiejszym dynamicznym środowisku biznesowym posiadanie własnej strony internetowej stało się
                nieodzownym elementem sukcesu firmy. W dobie, w której większość konsumentów poszukuje informacji,
                produktów i usług w sieci, brak obecności online może być równoznaczny z utratą ogromnego potencjału
                rynkowego.
            </h2>
            <section className="advantage-container">{displayAdvantages}</section>
            {displayImages}
            <Square id="small-7" />
            <Square id="small-8" />
            <Square id="small-9" />
        </div>
    );
}

export default Advantages;
