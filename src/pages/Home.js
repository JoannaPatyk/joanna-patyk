import React from 'react';
import Landing from '../components/Landing';
import Registration from '../components/Registration';
import Advantages from '../components/Advantages';
import Banner from '../components/Banner';
import Information from '../components/Information';
import Footer from '../components/Footer';
import ScrollButton from '../components/ScrollButton';

function Home() {
    return (
        <>
            <Landing />
            <Registration />
            <Advantages />
            <Information />
            <Banner />
            <Footer />
            <ScrollButton />
        </>
    );
}

export default Home;
