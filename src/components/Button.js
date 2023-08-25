import React from 'react';
import PropTypes from 'prop-types';
import { BsBalloonHeart } from 'react-icons/bs';

function Button({ id, children, onClick, type = 'button' }) {
    return (
        <button id={id} type={type} onClick={onClick} className="basic-btn">
            <p>{children}</p>
            <BsBalloonHeart className="icon-btn" />
        </button>
    );
}

Button.propTypes = {
    type: PropTypes.string,
    id: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired
};

export default Button;
