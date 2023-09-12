import React from 'react';
import {
    PiPlanetThin,
    PiOrangeSliceThin,
    PiLineSegmentsThin,
    PiEyeClosedThin,
    PiCurrencyEthThin
} from 'react-icons/pi';

const landingImages = [
    { id: 0, icon: <PiPlanetThin className="advantages-images advantages-stars" /> },
    { id: 1, icon: <PiOrangeSliceThin className="advantages-images dot advantages-green-dots1" /> },
    { id: 2, icon: <PiLineSegmentsThin className="advantages-images dot advantages-green-dots2" /> },
    { id: 3, icon: <PiEyeClosedThin className="advantages-images dot advantages-pink-dots" /> },
    { id: 4, icon: <PiCurrencyEthThin className="advantages-images advantages-plane" /> }
];

export default landingImages;
