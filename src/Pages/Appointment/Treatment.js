import React from 'react';

const Treatment = ({ treatment, setBookingTreatment }) => {
    const { name, slots, price } = treatment;
    return (
        <div className="card lg:mx-w-lg bg-base-100 shadow-lg">
            <div className="card-body items-center text-center">
                <h2 className="card-title text-secondary">{name}</h2>
                <p>
                    {slots.length ?
                        <span>{slots[0]}</span>
                        :
                        <span className='text-rose-500'>Try Another Day</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available</p>
                <p><small className="text-gray-700">Price: ${price}</small></p>
                <div className="card-actions mt-3">
                    <label
                        onClick={() => setBookingTreatment(treatment)}
                        disabled={slots.length === 0}
                        htmlFor="booking-modal"
                        className="btn modal-button btn-primary">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Treatment;