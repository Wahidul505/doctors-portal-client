import React from 'react';
import chair from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Banner = () => {
    return (
        <div className="bg-cover bg-no-repeat bg-center mb-8 px-8 py-12" style={{ backgroundImage: `url(${bg})` }}>
            <div className="flex flex-col md:flex-row gap-12">
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
                <img src={chair} className="lg:max-w-2xl md:w-1/2 rounded-lg shadow-2xl shrink-0" alt='' />
            </div>
        </div>
    );
};

export default Banner;