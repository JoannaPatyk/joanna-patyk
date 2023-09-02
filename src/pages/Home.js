import React from 'react';
import Landing from '../components/Landing';
import Registration from '../components/Registration';
import Advantages from '../components/Advantages';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import ScrollButton from '../components/ScrollButton';
import Values from '../components/Values';
import '../css/home.css';

function Home() {
    return (
        <div className="home-container">
            <Landing />
            <Registration />
            <Advantages />
            <Values />
            <Banner />
            <Footer />
            <ScrollButton />
        </div>
    );
}

export default Home;
