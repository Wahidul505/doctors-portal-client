import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppointment = () => {
    const [appointments, setAppointments] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        fetch(`https://boiling-badlands-47206.herokuapp.com/booking?patient=${user.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                }
                return res.json()
            })
            .then(data => setAppointments(data));
    }, [user]);
    return (
        <div>
            <h1 className='text-center text-3xl text-secondary mb-6'>My Appointments</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments?.map((appointment, index) => <tr key={appointment._id}>
                                <th>{index + 1}</th>
                                <td>{appointment.patientName}</td>
                                <td>{appointment.treatment}</td>
                                <td>{appointment.date}</td>
                                <td>{appointment.slot}</td>
                                <td>
                                    {(appointment.price && !appointment.paid) &&
                                        <Link to={`/dashboard/payment/${appointment._id}`} className='btn btn-xs btn-secondary'>Pay</Link>}
                                    {
                                        (appointment.price && appointment.paid) &&
                                        <div>
                                            <span className='text-success text-xl'>Paid</span>
                                            <p className='text-gray-700 text-sm'>Transaction Id: <span className='text-secondary'>{appointment.transactionId}</span></p>
                                        </div>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;