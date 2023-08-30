import React, { useEffect, useState } from 'react';
import '../css/values.css';
import values from '../utils/values';

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
            <h3>
                Poniżej znajdziesz zasady, które przewodzą mojemu podejściu do tworzenia pięknych, funkcjonalnych i
                efektywnych stron. Jeśli jesteś zainteresowany/a współpracą przy tworzeniu swojej strony internetowej,
                serdecznie zapraszam do kontaktu. Chętnie poznam Twoje potrzeby i pomogę stworzyć stronę, która
                odzwierciedli Twój charakter. Jeśli masz jeszcze jakieś pytania, śmiało pytaj!
            </h3>
            <div className="values">{displayValues}</div>
            <div className="values-description">
                {activeDescription && (
                    <div className="value-text">
                        <h2>{activeTitle}</h2>
                        {activeDescription}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Values;
