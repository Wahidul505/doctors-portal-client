import React from 'react';
import treatment from '../../assets/images/treatment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const TreatmentBanner = () => {
    return (
        <div class="hero min-h-screen px-8 -mt-8">
  <div class="hero-content flex-col lg:flex-row gap-16">
    <img src={treatment} class="max-w-sm rounded-lg shadow-2xl" alt='' />
    <div>
      <h1 class="text-5xl font-bold text-gray-700">Exceptional Dental Care, on Your Term</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <PrimaryButton>Get Started</PrimaryButton>
    </div>
  </div>
</div>
    );
};

export default TreatmentBanner;