import React from 'react';
import PropTypes from 'prop-types';

function Button({ id, children, onClick, nextClass, disabled = false, type = 'button' }) {
    return (
        <button id={id} type={type} onClick={onClick} className={`basic-btn ${nextClass}`} disabled={disabled}>
            {children}
        </button>
    );
}

Button.propTypes = {
    type: PropTypes.string,
    nextClass: PropTypes.string,
    id: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    children: PropTypes.node.isRequired
};

export default Button;
