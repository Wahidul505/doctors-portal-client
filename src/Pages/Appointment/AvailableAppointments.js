import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Treatment from './Treatment';

const AvailableAppointments = ({ date }) => {
    const [treatments, setTreatments] = useState([]);
    const [bookingTreatment, setBookingTreatment] = useState(null);
    useEffect(() => {
        fetch('http://localhost:5000/treatment')
            .then(res => res.json())
            .then(data => setTreatments(data));
    }, []);
    return (
        <div>
            <p className='text-xl text-secondary text-center'>Available Appointments on {format(date, 'PP')}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4'>
                {
                    treatments.map(treatment => <Treatment
                        key={treatment._id}
                        treatment={treatment}
                        setBookingTreatment={setBookingTreatment}
                    />)
                }
            </div>
            {bookingTreatment && <BookingModal
                bookingTreatment={bookingTreatment}
                date={date}
                setBookingTreatment={setBookingTreatment}
            />}
        </div>
    );
};

export default AvailableAppointments;