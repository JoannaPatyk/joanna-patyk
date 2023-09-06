import React from 'react';
import PropTypes from 'prop-types';

function DisplayImages({ elements }) {
    return elements.map(({ id, src, className, alt }) => {
        return <img key={id} src={src} className={className} alt={alt} />;
    });
}

DisplayImages.propTypes = {
    elements: PropTypes.array
};

export default DisplayImages;
