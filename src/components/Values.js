import React, { useEffect, useState } from 'react';
import Button from './Button';
import '../css/values.css';
import values from '../utils/values';
import valuesImage from '../utils/valuesImage';
import valuesSquare from '../utils/valuesSquares';
import DisplaySquares from '../components/DisplaySquares';
import { MdOutlineKeyboardDoubleArrowRight, MdOutlineKeyboardDoubleArrowLeft } from 'react-icons/md';

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

    const handleToggleLeft = () => {
        if (activeId === null) return;

        let currentIndex = values.findIndex((item) => item.id === activeId);
        if (currentIndex === -1) return;

        let newIndex = currentIndex - 1;
        if (newIndex < 0) {
            newIndex = values.length - 1;
        }

        const newValue = values[newIndex];
        handleClick(newValue.id, newValue.text, newValue.title);
    };

    const handleToggleRight = () => {
        if (activeId === null) return;

        let currentIndex = values.findIndex((item) => item.id === activeId);
        if (currentIndex === -1) return;

        let newIndex = currentIndex + 1;
        if (newIndex >= values.length) {
            newIndex = 0;
        }

        const newValue = values[newIndex];
        handleClick(newValue.id, newValue.text, newValue.title);
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

    const displayImages = valuesImage.map(({ id, src, className, alt }) => {
        return <img key={id} src={src} className={className} alt={alt} />;
    });

    return (
        <div className="values-container">
            <h1>Jakie wartości mną kierują?</h1>
            <h3>
                Poniżej znajdziesz zasady, które przewodzą mojemu podejściu do tworzenia pięknych, funkcjonalnych i
                efektywnych stron. Jeśli jesteś zainteresowany/a współpracą przy tworzeniu swojej strony internetowej,
                serdecznie zapraszam do kontaktu. Chętnie poznam Twoje potrzeby i pomogę stworzyć stronę, która
                odzwierciedli Twój charakter.
            </h3>
            <h2>Jeśli masz jeszcze jakieś pytania, śmiało pytaj!</h2>
            <div className="values">{displayValues}</div>

            <div className="values-description">
                {activeDescription && (
                    <div className="value-content">
                        <h2>{activeTitle}</h2>
                        <div className="value-text">
                            <Button onClick={handleToggleLeft} nextClass="values-btn">
                                <MdOutlineKeyboardDoubleArrowLeft />
                            </Button>
                            {activeDescription}
                            <Button onClick={handleToggleRight} nextClass="values-btn">
                                <MdOutlineKeyboardDoubleArrowRight />
                            </Button>
                        </div>
                    </div>
                )}
            </div>
            {displayImages}
            <DisplaySquares elements={valuesSquare} />
        </div>
    );
}

export default Values;
