import React from 'react';
import doctor from '../../assets/images/doctor-small.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const AppointmentBanner = () => {
    return (
        <section className='flex bg-cover bg-no-repeat bg-center items-center justify-center px-8 my-32 py-8 lg:py-0 -mx-12' style={{
            background: `url(${appointment})`
        }}>
            <div className='flex-1 hidden lg:block'>
                <img className='w-full -mt-24' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                    <p className='text-secondary mb-3 font-bold'>Appointment</p>
                    <h1 class="text-4xl font-semibold text-white">Make an appointment Today</h1>
                    <p class="py-6 text-white">You Can make appointment by clicking on the 'GET STARTED' button. With in 1 hour we will respond to you. Don't think, just make an appointment for your secure treatment.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
        </section>
    );
};

export default AppointmentBanner;