import React, { useState, useEffect } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { Link } from 'react-router-dom';

const CheckoutForm = ({ appointment, refetch }) => {
    const { _id, price, patient, patientName } = appointment;
    const stripe = useStripe();
    const elements = useElements();
    const [displayError, setDisplayError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [displaySuccess, setDisplaySuccess] = useState('');
    const [transactionId, setTransactionId] = useState('');



    useEffect(() => {
        fetch('https://boiling-badlands-47206.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json()).then(data => {
                if (data.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            })
    }, [price]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        setDisplayError(error?.message || '');
        setDisplaySuccess('');

        // confirming the payment 
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patientName,
                        email: patient
                    },
                },
            },
        );
        if (intentError) {
            setDisplayError(intentError?.message);
            return;
        }
        else {
            // payment info to send in database 
            const payment = {
                appointmentId: _id,
                transactionId: paymentIntent.id
            }

            // storing the payment info into the database 
            fetch(`https://boiling-badlands-47206.herokuapp.com/booking/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            }).then(res => res.json()).then(data => {
                setDisplayError('');
                setTransactionId(paymentIntent.id);
                setDisplaySuccess('Congrats! Your Payment is Completed');
            });
        }
        refetch();
    };


    return (
        <div>
            <div className='border border-accent rounded-lg p-4'>
                <form onSubmit={handleSubmit}>
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                    <button className='btn btn-primary btn-sm my-4' type="submit" disabled={!stripe || !clientSecret || appointment?.paid}>
                        Pay
                    </button>
                </form>
                {
                    displayError && <p className='text-error'>{displayError}</p>
                }
            </div>
            {
                (displaySuccess && transactionId) && <div className='mt-4'>
                    <p className='text-success text-xl'>{displaySuccess}</p>
                    <p className='text-gray-700 text-xl mb-8'>Your Payment Transaction Id: <span className='text-primary'>{transactionId}</span></p>
                    <Link to='/dashboard' className='underline text-pink-500'>Back to Your Appointments</Link>
                </div>
            }
        </div>
    );
};

export default CheckoutForm;