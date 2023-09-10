import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MdOutlineKeyboardDoubleArrowRight, MdOutlineKeyboardDoubleArrowLeft } from 'react-icons/md';

function Slider({ array }) {
    const [currentIndex, setCurrentIndex] = useState(1);

    const goToNextSlide = () => {
        let nextIndex = currentIndex + 1;

        if (nextIndex === array.length) {
            nextIndex = 1;
        }

        setCurrentIndex(nextIndex);
    };

    const goToPrevSlide = () => {
        let nextIndex = currentIndex - 1;

        if (nextIndex < 1) {
            nextIndex = array.length - 1;
        }
        setCurrentIndex(nextIndex);
    };
    return (
        <div className="slider-container">
            <button onClick={goToPrevSlide} className="toggle-btn">
                <MdOutlineKeyboardDoubleArrowLeft className="toggle-icon" />
            </button>
            {array.map(({ id, src, className, alt }) => (
                <img
                    key={id}
                    src={src}
                    className={className}
                    alt={alt}
                    style={{ display: id === currentIndex ? 'block' : 'none' }}
                />
            ))}
            <button onClick={goToNextSlide} className="toggle-btn">
                <MdOutlineKeyboardDoubleArrowRight className="toggle-icon" />
            </button>
        </div>
    );
}

Slider.propTypes = {
    array: PropTypes.array
};

Slider.defaultProps = {
    array: []
};

export default Slider;
