import React from 'react';
import { PiRainbowCloudThin, PiCookieThin, PiRocketLaunchThin, PiShootingStarThin } from 'react-icons/pi';

const registrationImages = [
    { id: 0, icon: <PiShootingStarThin className="registration-images registration-star-image" /> },
    { id: 1, icon: <PiRainbowCloudThin className="registration-images registration-rainbow-image" /> },
    { id: 2, icon: <PiRocketLaunchThin className="registration-images registration-rocket-image" /> },
    { id: 3, icon: <PiCookieThin className="registration-images registration-sparkle-image" /> }
];

export default registrationImages;
