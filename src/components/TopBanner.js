import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import '../css/topBanner.css';
import { HiArrowLongRight } from 'react-icons/hi2';

function TopBanner() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/contact');
        window.scrollTo(0, 0);
    };

    return (
        <div className="topBanner-container">
            <div className="slogan">
                <p>Projektowanie stron internetowych</p>
                <HiArrowLongRight className="top-banner-icon" />
                <p>Tworzenie Stron www w Krakowie</p>
                <HiArrowLongRight className="top-banner-icon" />
            </div>

            <Button nextClass="slogan-btn" onClick={handleClick}>
                darmowa wycena
            </Button>
        </div>
    );
}

export default TopBanner;
