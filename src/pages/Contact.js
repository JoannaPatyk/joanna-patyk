import React from 'react';
import ApplicationForm from '../components/ApplicationForm';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import ScrollButton from '../components/ScrollButton';

function Contact() {
    return (
        <div className="contact-container">
            <ApplicationForm />
            <ScrollButton />
            <Banner />
            <Footer />
        </div>
    );
}

export default Contact;
