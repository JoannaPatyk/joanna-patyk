import React, { useEffect, useState } from 'react';
import Square from './Square';
import '../css/values.css';
import values from '../utils/values';
import planeImage from '../images/paper-plane.png';
import flowerImage from '../images/flower.png';
import bulbImage from '../images/light-bulb.png';

function Values() {
    const [activeId, setActiveId] = useState(null);
    const [activeDescription, setActiveDescription] = useState('');
    const [activeTitle, setActiveTitle] = useState('');

    useEffect(() => {
        let randomIndex = Math.floor(Math.random() * values.length);
        let content = values[randomIndex];

        handleClick(randomIndex);

        setActiveDescription(content.text);
        setActiveTitle(content.title);
    }, []);

    const handleClick = (id, text, title) => {
        setActiveId(id);
        setActiveDescription(text);
        setActiveTitle(title);
    };

    const displayValues = values.map(({ id, icon, title, text }) => {
        const isActive = id === activeId;
        return (
            <div key={id} className={`value ${isActive ? 'active' : ''}`}>
                <button
                    className={`value-icon ${isActive ? 'active' : ''}`}
                    onClick={() => handleClick(id, text, title)}
                >
                    {icon}
                </button>
            </div>
        );
    });

    return (
        <div className="values-container">
            <h1>Jakie wartości mną kierują?</h1>
            <h2>
                Poniżej znajdziesz zasady, które przewodzą mojemu podejściu do tworzenia pięknych, funkcjonalnych i
                efektywnych stron. Jeśli jesteś zainteresowany/a współpracą przy tworzeniu swojej strony internetowej,
                serdecznie zapraszam do kontaktu. Chętnie poznam Twoje potrzeby i pomogę stworzyć stronę, która
                odzwierciedli Twój charakter. <br /> <span>Jeśli masz jeszcze jakieś pytania, śmiało pytaj!</span>
            </h2>
            <div className="values">{displayValues}</div>
            <div className="values-description">
                {activeDescription && (
                    <div className="value-text">
                        <h2>{activeTitle}</h2>
                        {activeDescription}
                    </div>
                )}
            </div>

            <img src={flowerImage} className="values-image-flower" alt="Gwiazda" />
            <img src={planeImage} className="values-image-plane" alt="Strzałka" />
            <img src={bulbImage} className="values-image-bulb" alt="Żarówka" />

            <Square id="small-3" top="103%" left="-8%" backgroundColor="#d68aa7" filterColor="#901a47" />
            <Square id="small-1" top="95%" left="-20%" backgroundColor="#f7dcc5" filterColor="#e1a36e" />
        </div>
    );
}

export default Values;
