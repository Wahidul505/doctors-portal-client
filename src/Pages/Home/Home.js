import React from 'react';
import AppointmentBanner from './AppointmentBanner';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';
import TreatmentBanner from './TreatmentBanner';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner />
            <Info />
            <Services />
            <TreatmentBanner />
            <AppointmentBanner />
        </div>
    );
};

export default Home;