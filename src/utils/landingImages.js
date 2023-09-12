import React from 'react';
import { PiIceCreamLight, PiTelegramLogoThin } from 'react-icons/pi';
import { BsBalloonHeart, BsClouds } from 'react-icons/bs';

const landingImages = [
    { id: 0, icon: <PiTelegramLogoThin className="landing-images landing-mountains-image" /> },
    { id: 1, icon: <PiIceCreamLight className="landing-images landing-iceCreme-image" /> },
    { id: 2, icon: <BsBalloonHeart className="landing-images landing-balloon-image" /> },
    { id: 3, icon: <BsClouds className="landing-images landing-cloud-image" /> }
];

export default landingImages;
