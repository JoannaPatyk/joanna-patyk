import React from 'react';
import PropTypes from 'prop-types';
import Landing from '../components/Landing';
import Registration from '../components/Registration';
import Advantages from '../components/Advantages';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import ScrollButton from '../components/ScrollButton';
import Values from '../components/Values';
import '../css/home.css';

function Home({ isOpen }) {
    return (
        <div className="home-container">
            <Landing isOpen={isOpen} />
            <Registration />
            <Advantages />
            <Values />
            <Banner />
            <Footer />
            <ScrollButton />
        </div>
    );
}

Home.propTypes = {
    isOpen: PropTypes.bool
};

export default Home;
