import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const BookingModal = ({ bookingTreatment, setBookingTreatment, date }) => {
    const [user] = useAuthState(auth);
    const { name, slots } = bookingTreatment;
    const handleBooking = e => {
        e.preventDefault();
        const slot = e.target.timeSlot.value;
        const date = e.target.date.value;
        const personName = e.target.personName.value;
        const phone = e.target.phone.value;
        const email = e.target.email.value;
        const bookingInfo = {
            name,
            slot,
            date,
            personName,
            phone,
            email,
        }
        fetch('http://localhost:5000/bookingTreatment', {
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(bookingInfo)
        }).then(res => res.json()).then(data => console.log(data));

        // only for now, later will handle to close the modal in another way.
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
                                slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}>{slot}
                                </option>)
                            }
                        </select>
                        <input className='p-2 text-lg focus:outline-none rounded-lg bg-gray-300 bg-opacity-70' type="text" name="personName" id="name" disabled value={user?.displayName || ''} required />
                        <input className='p-2 text-lg focus:outline-none rounded-lg bg-gray-300 bg-opacity-70' type="text" name="email" id="email" disabled value={user?.email || ''} required />
                        <input className='p-2 text-lg focus:outline-none rounded-lg bg-gray-300 bg-opacity-70' type="text" name="phone" id="phone" placeholder='Phone Number' required />
                        <input className='uppercase btn btn-accent text-white text-lg font-normal mt-1' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;