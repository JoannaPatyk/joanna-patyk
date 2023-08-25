import React from 'react';
import PropTypes from 'prop-types';

function Square({ id }) {
    return <div id={id} className="square"></div>;
}

Square.propTypes = {
    id: PropTypes.string
};

export default Square;
