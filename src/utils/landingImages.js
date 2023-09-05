import backgroundImage from '../images/bulb.png';
import dotImage1 from '../images/pink-dots.png';
import dotImage2 from '../images/pink-dots.png';
import starsImage1 from '../images/yellow-stars.png';
import starsImage2 from '../images/big-star.png';

const landingImages = [
    { id: 0, src: dotImage1, cls: 'landing-images landing-dot1-image', alt: 'Kropki' },
    { id: 1, src: starsImage2, cls: 'landing-images landing-stars2-image', alt: 'Gwiazdki' },
    { id: 2, src: starsImage1, cls: 'landing-images landing-stars1-image', alt: 'Gwiazdki' },
    { id: 3, src: dotImage2, cls: 'landing-images landing-dot2-image', alt: 'Kropki' },
    { id: 4, src: backgroundImage, cls: 'landing-background-image', alt: 'Żarówka' }
];

export default landingImages;
