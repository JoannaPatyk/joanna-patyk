import React from 'react';

import Menu from './Menu';
import Button from './Button';
import Square from './Square';

import '../css/landing.css';
import backgroundImage from '../images/bulb.png';

import img1 from '../images/img1.png';
import img7 from '../images/img7.png';
import img6 from '../images/img6.png';
import img2 from '../images/img2.png';

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
            <img src={img1} className="img1" alt="" />
            <img src={img7} className="img7" alt="" />
            <img src={img6} className="img6" alt="" />
            <img src={img2} className="img2" alt="" />
            <img src={backgroundImage} className="background-image" alt="" />
        </div>
    );
}

export default Landing;
