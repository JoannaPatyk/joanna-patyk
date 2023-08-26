import React from 'react';

import Menu from './Menu';
import Button from './Button';
import Square from './Square';

import '../css/landing.css';
import backgroundImage from '../images/bulb.png';

import dotImage1 from '../images/dot1.png';
import dotImage2 from '../images/dot2.png';
import starsImage1 from '../images/stars1.png';
import starsImage2 from '../images/stars2.png';

import { AiFillGithub } from 'react-icons/ai';
import { HiOutlineMailOpen } from 'react-icons/hi';

function Landing() {
    return (
        <div className="landing-container">
            <Menu />
            <div className="landing-contact-icon-container">
                <AiFillGithub className="landing-contact-icon" />
                <HiOutlineMailOpen className="landing-contact-icon" />
            </div>
            <div className="landing-content">
                <h1 className="landing-title">
                    <span className="part-1">Twoja wizja</span>
                    <span className="part-2">moja kreatywność</span>
                    <span className="part-3">stworzę Twój ślad w sieci</span>
                </h1>
                <Button>kontakt</Button>
            </div>

            <Square id="big" />
            <Square id="medium" />
            <Square id="small-1" />
            <Square id="small-2" />
            <Square id="small-3" />

            <img src={dotImage1} className="dot-image1" alt="" />
            <img src={starsImage2} className="stars-image2" alt="" />
            <img src={starsImage1} className="stars-image1" alt="" />
            <img src={dotImage2} className="dot-image2" alt="" />

            <img src={backgroundImage} className="background-image" alt="" />
        </div>
    );
}

export default Landing;
