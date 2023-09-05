import React, { useEffect, useState } from 'react';
import Square from './Square';
import Button from './Button';
import '../css/values.css';
import values from '../utils/values';
import valuesImage from '../utils/valuesImage';
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
            <Square id="small-1" top="70%" left="-15%" backgroundColor="#d68aa7" filterColor="#901a47" />
            <Square id="small-1" top="40%" left="110%" backgroundColor="#f9e3d1" filterColor="#e1a36e" />
        </div>
    );
}

export default Values;
