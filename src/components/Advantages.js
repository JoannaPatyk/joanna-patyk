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
                W dzisiejszym dynamicznym środowisku biznesowym{' '}
                <span>posiadanie własnej strony internetowej stało się nieodzownym elementem sukcesu firmy</span>. W
                dobie, w której większość konsumentów poszukuje informacji, produktów i usług w sieci, brak obecności
                online może być równoznaczny z utratą ogromnego potencjału rynkowego.
            </h2>
            <section className="advantage-container">{displayAdvantages}</section>
            {displayImages}

            <Square id="medium" top="80%" left="-40%" backgroundColor="#383040" />
            <Square id="small-2" top="60%" left="-19%" backgroundColor="#605966" filterColor="#383040" />
            <Square id="small-1" top="35%" left="110%" backgroundColor="#d68aa7" filterColor="#901a47" />
        </div>
    );
}

export default Advantages;
