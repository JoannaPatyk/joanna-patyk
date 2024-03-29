import React from 'react';
import DisplaySquares from './DisplaySquares';
import DisplayImages from './DisplayImages';
import advantages from '../utils/advantages';
import advantagesImages from '../utils/advantagesImages';
import advantageSquares from '../utils/advantageSquares';
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
            <DisplayImages elements={advantagesImages} />
            <DisplaySquares elements={advantageSquares} />
        </div>
    );
}

export default Advantages;
