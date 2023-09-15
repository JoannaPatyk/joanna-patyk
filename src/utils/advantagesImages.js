import React from 'react';
import {
    PiPlanetThin,
    PiOrangeSliceThin,
    PiLineSegmentsThin,
    PiEyeClosedThin,
    PiCurrencyEthThin
} from 'react-icons/pi';

const landingImages = [
    { id: 0, icon: <PiPlanetThin className="advantages-images advantages-planet-image" /> },
    { id: 1, icon: <PiOrangeSliceThin className="advantages-images advantages-orange-image" /> },
    { id: 2, icon: <PiLineSegmentsThin className="advantages-images advantages-line-image" /> },
    { id: 3, icon: <PiEyeClosedThin className="advantages-images advantages-eye-image" /> },
    { id: 4, icon: <PiCurrencyEthThin className="advantages-images advantages-currency-image" /> }
];

export default landingImages;
