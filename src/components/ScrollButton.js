import React, { useState, useEffect } from 'react';
import { TbArrowBigUpLines } from 'react-icons/tb';

function ScrollButton() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            const windowHeight = window.innerHeight;
            const halfWindowHeight = windowHeight / 2;

            if (position > halfWindowHeight) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleButtonUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {showButton && (
                <button id="btn-up" onClick={handleButtonUp}>
                    <TbArrowBigUpLines className="btn-up-icon" />
                </button>
            )}
        </>
    );
}

export default ScrollButton;
