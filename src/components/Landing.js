import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import '../css/landing.css';
import Button from './Button';
import DisplaySquares from './DisplaySquares';
import DisplayImages from './DisplayImages';
import landingSquare from '../utils/landingSquares';
import landingImages from '../utils/landingImages';
import backgroundImage from '../images/bulb.png';

function Landing() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/contact');
        window.scrollTo(0, 0);
    };

    return (
        <div className="landing-container">
            <div className="landing-content">
                <h1 className="landing-title">
                    <span className="part-1">Twoja wizja</span>
                    <span className="part-2">moja kreatywność</span>
                    <span className="part-3">stworzę Twój ślad w sieci</span>
                </h1>
                <Button nextClass="landing-btn" onClick={handleClick}>
                    kontakt
                </Button>
            </div>
            <DisplaySquares elements={landingSquare} />
            <DisplayImages elements={landingImages} />
            <img src={backgroundImage} className="landing-background-image" alt="Żarówka" />
        </div>
    );
}

Landing.propTypes = {
    isOpen: PropTypes.boolean
};

export default Landing;
