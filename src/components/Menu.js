import React, { useState, useRef } from 'react';
import Media from './Media';
import { useNavigate } from 'react-router-dom';
import links from '../utils/links';
import { MdOutlineKeyboardDoubleArrowLeft } from 'react-icons/md';
import { HiOutlineMenu } from 'react-icons/hi';
import '../css/menu.css';
import SmallMenu from './SmallMenu';

function Menu() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const menuRef = useRef(null);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

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
                    {isOpen ? <MdOutlineKeyboardDoubleArrowLeft /> : <HiOutlineMenu />}
                </button>
                {isOpen ? <SmallMenu isOpen={isOpen} setIsOpen={setIsOpen} /> : null}
            </div>
            <Media />
        </div>
    );
}

export default Menu;
