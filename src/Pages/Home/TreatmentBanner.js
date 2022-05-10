import React from 'react';
import treatment from '../../assets/images/treatment.png';

const TreatmentBanner = () => {
    return (
        <div class="card lg:card-side bg-base-100 shadow-xl px-20 lg:px-36">
  <figure><img className='rounded-lg w-full' src={treatment} alt=""/></figure>
  <div class="card-body pl-8">
    <h2 class="card-title text-4xl font-bold text-gray-700 mb-3">Exceptional Dental Cart, on Your Terms</h2>
    <div>
    <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga tempore aut consectetur laborum, laboriosam, sapiente labore est eveniet odit voluptatem qui harum distinctio quas. Quaerat, sapiente! Quibusdam repudiandae facere exercitationem.</p>
      <button class="btn btn-primary uppercase text-white w-32">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default TreatmentBanner;