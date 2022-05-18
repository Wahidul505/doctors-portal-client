import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../Shared/LoadingSpinner';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L0f8BK96S4Dx2sqbNrb8CtiStAD5MvRtuaitvoIxKHkgpfokbzhX3YpcAYd1dbbGAqk5v0cqrXzzSL581c6mJHw00LKqElvb1');

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/booking/${id}`;
    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));


    if (isLoading) {
        return <LoadingSpinner />
    }

    const { treatment, date, slot, patientName, price } = appointment;

    return (
        <div>
            <div class="card lg:card-side bg-base-100 shadow-xl p-4">
                <h1 className='text-primary text-2xl'>Hello {patientName}</h1>
                <hr />
                <h2 className='text-xl text-gray-700 my-2'>Your Appointment fixed on:
                    <br />
                    <span
                        className='text-secondary'>{date}</span> at <span
                            className='text-secondary'>{slot}</span>
                </h2>
                <h2 className='text-gray-700 text-xl'>Please, Pay <span className='text-secondary'>${price}</span> for your Appointment on: <span className="text-secondary">{treatment}</span></h2>
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;