import React from 'react';
import ApplicationForm from '../components/ApplicationForm';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Information from '../components/Information';

function Contact() {
    return (
        <div className="contact-container">
            <ApplicationForm />
            <Information />
            <Banner />
            <Footer />
        </div>
    );
}

export default Contact;
