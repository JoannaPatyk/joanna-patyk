import React from 'react';
import ApplicationForm from '../components/ApplicationForm';
import ScrollButton from '../components/ScrollButton';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

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
