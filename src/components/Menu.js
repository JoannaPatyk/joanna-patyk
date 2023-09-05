import React, { useRef } from 'react';
import Media from './Media';
import { useNavigate } from 'react-router-dom';
import links from '../utils/links';
import '../css/menu.css';

function Menu() {
    const navigate = useNavigate();
    const menuRef = useRef(null);

    const handleChangePage = (path) => {
        navigate(path);
    };

    return (
        <div className="menu-container">
            <nav className="menu" ref={menuRef}>
                {links.map(({ id, text, path }) => {
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
                })}
            </nav>
            <Media />
        </div>
    );
}

export default Menu;
