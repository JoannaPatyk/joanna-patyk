import React from 'react';
import {
    PiWhatsappLogoThin,
    PiStarThin,
    PiRainbowThin,
    PiRocketLaunchThin,
    PiPushPinThin,
    PiPaperclipThin
} from 'react-icons/pi';

const contactImages = [
    { id: 0, icon: <PiWhatsappLogoThin className="contact-images contact-phone-image" /> },
    { id: 1, icon: <PiStarThin className="contact-images contact-star-image" /> },
    { id: 2, icon: <PiRainbowThin className="contact-images contact-rainbow-image" /> },
    { id: 3, icon: <PiRocketLaunchThin className="contact-images contact-rocket-image" /> },
    { id: 4, icon: <PiPushPinThin className="contact-images contact-pin-image" /> },
    { id: 5, icon: <PiPaperclipThin className="contact-images contact-clip-image" /> }
];

export default contactImages;
