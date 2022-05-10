import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';
import TreatmentBanner from './TreatmentBanner';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Info/>
            <Services/>
            <TreatmentBanner/>
        </div>
    );
};

export default Home;