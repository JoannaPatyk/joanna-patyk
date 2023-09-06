import React from 'react';
import PropTypes from 'prop-types';
import Square from './Square';

function DisplaySquares({ elements }) {
    return elements.map(({ id, className, top, left, backgroundColor, filterColor }) => (
        <Square
            key={id}
            id={id}
            className={className}
            top={top}
            left={left}
            backgroundColor={backgroundColor}
            filterColor={filterColor}
        />
    ));
}

DisplaySquares.propTypes = {
    elements: PropTypes.array
};

export default DisplaySquares;
