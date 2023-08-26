import React from 'react';
import Landing from '../components/Landing';
import Registration from '../components/Registration';
import Advantages from '../components/Advantages';
// import Footer from '../components/Footer';

function Home() {
    return (
        <>
            <Landing />
            <Registration />
            <Advantages />
            {/* <Footer /> */}
        </>
    );
}

export default Home;
