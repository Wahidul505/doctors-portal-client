import React from 'react';
import chair from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png';

const Banner = () => {
    return (
        <div class="hero min-h-screen px-0 md:px-8 bg-cover bg-no-repeat bg-center" style={{backgroundImage:`url(${bg})`}}>
            <div class="hero-content flex-col lg:flex-row-reverse gap-8">
                <img src={chair} class="max-w-lg w-full rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn bg-gradient-to-r from-secondary to-primary text-white font-semibold border-0">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;