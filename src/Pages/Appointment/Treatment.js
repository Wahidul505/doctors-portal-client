import React from 'react';

const Treatment = ({ treatment, setBookedTreatment }) => {
    const { name, slots } = treatment;
    return (
        <div class="card lg:mx-w-lg bg-base-100 shadow-lg">
            <div class="card-body items-center text-center">
                <h2 class="card-title text-secondary">{name}</h2>
                <p>
                    {slots.length ?
                        <span>{slots[0]}</span>
                        :
                        <span className='text-rose-500'>Try Another Day</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available</p>
                <div class="card-actions mt-3">
                    <label 
                    onClick={()=>setBookedTreatment(treatment)}
                    disabled={slots.length === 0} 
                    for="booking-modal" 
                    class="btn modal-button btn-primary">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Treatment;