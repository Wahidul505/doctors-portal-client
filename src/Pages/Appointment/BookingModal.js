import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ bookingTreatment, setBookingTreatment, date }) => {
    const { _id, name, slots } = bookingTreatment;
    const handleBooking = e => {
        e.preventDefault();
        const slot = e.target.timeSlot.value;
        const date = e.target.date.value;
        const email = e.target.email.value;
        console.log(_id, slot, date, name, email);
        setBookingTreatment(null);
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-semibold text-xl">{name}</h3>
                    <form onSubmit={handleBooking} className='flex flex-col gap-4 mt-8'>
                        <input className='p-2 text-lg focus:outline-none rounded-lg bg-gray-300 bg-opacity-70' type="text" name="date" id="date" value={format(date, 'PP')} disabled />
                        <select className='p-2 text-lg focus:outline-none rounded-lg bg-gray-300 bg-opacity-70' name="timeSlot" id="timeSlot">
                            {
                                slots.map(slot => <option
                                    value={slot}>{slot}
                                </option>)
                            }
                        </select>
                        <input className='p-2 text-lg focus:outline-none rounded-lg bg-gray-300 bg-opacity-70' type="text" name="name" id="name" placeholder='Full Name' required />
                        <input className='p-2 text-lg focus:outline-none rounded-lg bg-gray-300 bg-opacity-70' type="text" name="phone" id="phone" placeholder='Phone Number' required />
                        <input className='p-2 text-lg focus:outline-none rounded-lg bg-gray-300 bg-opacity-70' type="text" name="email" id="email" placeholder='Email' required />
                        <input className='uppercase btn btn-accent text-white text-lg font-normal mt-1' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;