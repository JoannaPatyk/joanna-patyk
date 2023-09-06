import React from 'react';
import PropTypes from 'prop-types';
import '../css/variables.css';

function Square({ id, className, top, left, backgroundColor, filterColor }) {
    let styles = {
        top: top,
        left: left,
        backgroundColor: backgroundColor,
        filter: `drop-shadow(6px 6px ${filterColor})`
    };

    return <div id={id} className={`square ${className} )`} style={styles}></div>;
}

Square.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    top: PropTypes.string,
    left: PropTypes.string,
    backgroundColor: PropTypes.string,
    filterColor: PropTypes.string
};

export default Square;
