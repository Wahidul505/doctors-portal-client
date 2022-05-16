import React from 'react';
import { Link } from 'react-router-dom';
import treatment from '../../assets/images/treatment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const TreatmentBanner = () => {
    return (
        <div className="md:px-8 -mt-8">
  <div className="flex flex-col lg:flex-row gap-16">
    <img src={treatment} className="rounded-lg shadow-2xl w-full md:w-1/3" alt='' />
    <div>
      <h1 className="text-5xl font-bold text-gray-700">Exceptional Dental Care, on Your Term</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <Link to='/appointment'><PrimaryButton>Get Started</PrimaryButton></Link>
    </div>
  </div>
</div>
    );
};

export default TreatmentBanner;