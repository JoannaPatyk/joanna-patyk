import React from 'react';
import PropTypes from 'prop-types';

function DisplayImages({ elements }) {
    return elements.map(({ id, icon }) => {
        return <div key={id}>{icon}</div>;
    });
}

DisplayImages.propTypes = {
    elements: PropTypes.array
};

export default DisplayImages;
