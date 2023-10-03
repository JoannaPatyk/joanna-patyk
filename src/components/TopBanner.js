import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/topBanner.css';
import Button from '../components/Button';
import ArrowIcon from './ArrowIcon';
import { scrollToTop } from '../utils/scrollToTop';

function TopBanner() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/contact');
        scrollToTop();
    };

    return (
        <div className="topBanner-container">
            <div className="slogan">
                <p>Projektowanie stron internetowych</p>
                <ArrowIcon />
                <p>Tworzenie Stron www w Krakowie</p>
                <ArrowIcon />
            </div>
            <Button nextClass="call-to-action-button" onClick={handleClick}>
                darmowa wycena
            </Button>
        </div>
    );
}

export default TopBanner;
