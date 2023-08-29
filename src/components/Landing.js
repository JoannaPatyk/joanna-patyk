import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/landing.css';
import Menu from './Menu';
import Button from './Button';
import Square from './Square';
import Media from './Media';
import landingImages from '../utils/landingImages';
import squareSize from '../utils/squareSize';

function Landing() {
    const navigate = useNavigate();

    const handleClick = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
    };
    const displaySquare = squareSize.map(({ id, size }) => {
        return <Square key={id} id={size} />;
    });

    const displayImages = landingImages.map(({ id, src, cls, alt }) => {
        return <img key={id} src={src} className={cls} alt={alt} />;
    });

    return (
        <div className="landing-container">
            <Menu />
            <Media />
            <div className="landing-content">
                <h1 className="landing-title">
                    <span className="part-1">Twoja wizja</span>
                    <span className="part-2">moja kreatywność</span>
                    <span className="part-3">stworzę Twój ślad w sieci</span>
                </h1>
                <Button nextClass="landing-btn" onClick={() => handleClick('/contact')}>
                    kontakt
                </Button>
            </div>
            {displaySquare}
            {displayImages}
        </div>
    );
}

export default Landing;
