import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import LoadingSpinner from '../Shared/LoadingSpinner';
import BookingModal from './BookingModal';
import Treatment from './Treatment';

const AvailableAppointments = ({ date }) => {
    const [bookingTreatment, setBookingTreatment] = useState(null);
    const formattedDate = format(date, 'PP');
    const { data: treatments, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`http://localhost:5000/available?date=${formattedDate}`).then(res => res.json()));

    if (isLoading) {
        return <LoadingSpinner />
    }
    return (
        <div>
            <p className='text-xl text-secondary text-center'>Available Appointments on {format(date, 'PP')}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4'>
                {
                    treatments?.map(treatment => <Treatment
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
                refetch={refetch}
            />}
        </div>
    );
};

export default AvailableAppointments;