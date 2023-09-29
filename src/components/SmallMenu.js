import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import links from '../utils/links';
import '../css/smallMenu.css';

function SmallMenu({ isOpen, setIsOpen }) {
    const navigate = useNavigate();

    const handleChangePage = (path) => {
        navigate(path);
        setIsOpen(!isOpen);
    };

    const displayMenu = links.map(({ id, text, path }) => {
        return (
            <div
                className="small-menu-element"
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
                <p>{text}</p>
            </div>
        );
    });

    return <nav className={isOpen ? 'small-menu small-menu-move' : 'small-menu'}>{displayMenu}</nav>;
}

SmallMenu.propTypes = {
    isOpen: PropTypes.bool,
    setIsOpen: PropTypes.func
};

export default SmallMenu;
