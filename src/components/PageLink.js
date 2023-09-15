import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { scrollToTop } from '../utils/scrollToTop';

function PageLink({ to, title }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(to);
        scrollToTop();
    };

    return (
        <button id="footer-menu-btn" onClick={handleClick}>
            <p>{title}</p>
        </button>
    );
}

PageLink.propTypes = {
    title: PropTypes.string,
    to: PropTypes.string
};

export default PageLink;
