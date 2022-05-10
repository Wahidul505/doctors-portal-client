import React from 'react';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const ContactForm = () => {
    return (
        <div className='flex flex-col items-center bg-cover bg-no-repeat bg-center py-10 px-4 mt-28 -mx-12' style={{
            background: `url(${appointment})`
        }}>
            <p className='text-xl text-secondary font-semibold'>Contact Us</p>
            <p className='text-white text-4xl'>Stay Connected with Us</p>
            <form className='flex flex-col gap-4 w-full lg:w-2/5 mt-10'>
                <input className='rounded-lg focus:outline-none p-3 text-xl' type="email" name="email" id="email" placeholder='Email Address' required />
                <input className='rounded-lg focus:outline-none p-3 text-xl' type="subject" name="subject" id="subject" placeholder='Subject' required/>
                <textarea className='rounded-lg focus:outline-none p-3 text-xl h-28 mb-4' type="message" name="message" id="message" placeholder='Your Message' required/>
                <button type="submit"><PrimaryButton>Submit</PrimaryButton></button>
            </form>
        </div>
    );
};

export default ContactForm;