import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import ServiceCard from './ServiceCard';

const Services = () => {
    const services = [
        { id: 1, icon: fluoride, title: 'Fluoride Treatment', description: 'With fluoride treatment clean your teeth' },
        { id: 2, icon: cavity, title: 'Cavity Filling', description: 'Fill Your teeth and remove Cavity' },
        { id: 3, icon: whitening, title: 'Teeth Whitening', description: 'Make Your teeth White and Strong' }
    ]
    return (
        <div className='my-32'>
        <div className='text-center mb-8'>
            <p className='text-secondary text-lg font-semibold uppercase mb-1'>Our Services</p>
            <p className='text-gray-700 text-3xl'>Services We Provide</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {
                services.map(service => <ServiceCard
                    key={service.id}
                    service={service}
                    />)
                }
        </div>
                </div>
    );
};

export default Services;