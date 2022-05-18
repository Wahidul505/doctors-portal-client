import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import toast from 'react-hot-toast';

const BookingModal = ({ bookingTreatment, setBookingTreatment, date, refetch }) => {
    const [user] = useAuthState(auth);
    const { _id, name, slots, price } = bookingTreatment;
    const formattedDate = format(date, 'PP');
    const handleBooking = e => {
        e.preventDefault();
        const slot = e.target.timeSlot.value;
        const phone = e.target.phone.value;
        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            price,
            patient: user.email,
            patientName: user.displayName,
            phone
        }

        fetch('https://boiling-badlands-47206.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        }).then(res => res.json()).then(data => {
            if (data.success) {
                toast.success(`Appointment booked on ${formattedDate} at ${slot}`, { id: 'bookedSuccess', duration: '400' });
            }
            else {
                toast.error(`Already have an Appointment on ${data?.booking?.date} at ${data?.booking?.slot}`, { id: 'bookedError', duration: '400' });
            }
            refetch();
            // setting the bookingTreatment to null to close the modal 
            setBookingTreatment(null);
        })

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