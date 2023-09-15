import React from 'react';
import { PiIceCreamLight, PiTelegramLogoThin, PiSpiralThin, PiWaveSineThin } from 'react-icons/pi';
import { BsBalloonHeart, BsClouds } from 'react-icons/bs';

const landingImages = [
    { id: 0, icon: <PiTelegramLogoThin className="landing-images landing-plane-image" /> },
    { id: 1, icon: <PiIceCreamLight className="landing-images landing-iceCreme-image" /> },
    { id: 2, icon: <BsBalloonHeart className="landing-images landing-balloon-image" /> },
    { id: 3, icon: <BsClouds className="landing-images landing-cloud-image" /> },
    { id: 4, icon: <PiSpiralThin className="landing-images landing-spiral-image" /> },
    { id: 5, icon: <PiWaveSineThin className="landing-images landing-wave-image" /> }
];

export default landingImages;
