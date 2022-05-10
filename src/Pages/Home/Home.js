import React from 'react';
import MakeAppointment from './MakeAppointment';
import Banner from './Banner';
import Info from './Info';
import Testimonial from './Testimonial';
import Services from './Services';
import TreatmentBanner from './TreatmentBanner';
import ContactForm from './ContactForm';
import Footer from '../Shared/Footer';

const Home = () => {
    return (
        <div>
            <Banner />
            <Info />
            <Services />
            <TreatmentBanner />
            <MakeAppointment />
            <Testimonial />
            <ContactForm />
            <Footer />
        </div>
    );
};

export default Home;