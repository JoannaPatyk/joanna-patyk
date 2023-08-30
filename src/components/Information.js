import React from 'react';
import { useNavigate } from 'react-router-dom';
import links from '../utils/links';
import '../css/information.css';
import { PiArrowFatLineRightLight } from 'react-icons/pi';

function Information() {
    const navigate = useNavigate();

    const handleClick = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
    };

    const displayLinks = links.map(({ path, text, id }) => (
        <button key={id} className="information-element" onClick={() => handleClick(path)}>
            <PiArrowFatLineRightLight /> {text}
        </button>
    ));

    return (
        <div className="information-container">
            <div className="elements">
                <div className="element">
                    <h2>Menu</h2>
                    {displayLinks}
                </div>
                <div className="element">
                    <h2>Dane</h2>
                    <p>email: email@gmail.com</p>
                </div>
            </div>
        </div>
    );
}

export default Information;
