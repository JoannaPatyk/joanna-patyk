import React from 'react';
import { PiRocketLaunch, PiShootingStar, PiPhoneCall } from 'react-icons/pi';

const links = [
    { id: 0, icon: <PiRocketLaunch className="small-menu-icon" />, text: 'start', path: '/' },
    { id: 1, icon: <PiShootingStar className="small-menu-icon" />, text: 'projekty', path: '/projects' },
    { id: 2, icon: <PiPhoneCall className="small-menu-icon" />, text: 'kontakt', path: '/contact' }
];

export default links;
