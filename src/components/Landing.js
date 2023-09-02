import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/landing.css';
import Menu from './Menu';
import Button from './Button';
import Square from './Square';
import Media from './Media';
import landingImages from '../utils/landingImages';

function Landing() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/contact');
        window.scrollTo(0, 0);
    };

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
                <Button nextClass="landing-btn" onClick={handleClick}>
                    kontakt
                </Button>
            </div>

            <Square id="big" top="5%" left="42%" backgroundColor="#f7dcc5" />
            <Square id="medium" top="80%" left="-30%" backgroundColor="#383040" />
            <Square id="small-1" top="35%" left="53%" backgroundColor="#605966" filterColor="#383040" />
            <Square id="small-2" top="78%" left="45%" backgroundColor="#d68aa7" filterColor="#901a47" />
            <Square id="small-3" top="25%" left="10%" backgroundColor="#f7dcc5" filterColor="#e1a36e" />

            {displayImages}
        </div>
    );
}

export default Landing;
