import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Media from './Media';
import { useNavigate } from 'react-router-dom';
import links from '../utils/links';
import { PiX, PiTextAlignLeft } from 'react-icons/pi';
import '../css/menu.css';
import SmallMenu from './SmallMenu';

function Menu({ handleToggle, isOpen, setIsOpen }) {
    const navigate = useNavigate();
    const menuRef = useRef(null);

    const handleChangePage = (path) => {
        navigate(path);
    };

    const displayMenu = links.map(({ id, text, path }) => {
        return (
            <div
                className="menu-element"
                role="button"
                tabIndex={0}
                key={id}
                onClick={() => handleChangePage(path)}
                onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                        handleChangePage(path);
                    }
                }}
                onKeyUp={(event) => {
                    if (event.key === 'Escape') {
                        event.target.blur();
                    }
                }}
            >
                {text}
            </div>
        );
    });

    return (
        <div className="menu-container">
            <nav className="menu" ref={menuRef}>
                {displayMenu}
            </nav>
            <div className="menu-box">
                <button className="menu-icon" onClick={handleToggle}>
                    {isOpen ? <PiX /> : <PiTextAlignLeft />}
                </button>
                {isOpen ? <SmallMenu isOpen={isOpen} setIsOpen={setIsOpen} /> : null}
            </div>
            <Media />
        </div>
    );
}

Menu.propTypes = {
    handleToggle: PropTypes.func,
    setIsOpen: PropTypes.func,
    isOpen: PropTypes.bool
};

export default Menu;
