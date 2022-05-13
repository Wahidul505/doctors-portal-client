import React, { useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import LoadingSpinner from '../Shared/LoadingSpinner';

const ResetPassword = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

    // handling error 
    if (error) {
        setErrorMessage(error.message);
    }

    // reset password handler 
    const onSubmit = async data => {
        await sendPasswordResetEmail(data.email);
        toast.success('Reset Password Link Sent to Your Email', { id: 'resetSuccess' });
    }

    if (sending) {
        return <LoadingSpinner />
    }

    return (
        <div className='h-screen flex justify-center items-center -mt-20'>
            <div className='w-11/12 md:w-1/2 lg:w-2/5 p-4 shadow-xl rounded-lg'>
                <h3 className='text-2xl text-accent font-semibold text-center mb-10'>Reset Password</h3>

                {/* email and password login  */}
                <form
                    className='flex flex-col'
                    onSubmit={handleSubmit(onSubmit)}>
                    {/* email  */}
                    <label className='text-lg' htmlFor="email">Email</label>
                    <input
                        type='email'
                        name='email'
                        id='email'
                        className='p-2 text-lg focus:outline-none rounded-lg border border-gray-400'
                        {...register("email",
                            {
                                required: {
                                    value: true,
                                    message: 'Email is required'
                                },
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: 'Invalid Email'
                                }
                            }
                        )}
                    />
                    {errors.email?.type === 'required' && <small className='text-red-500'>{errors.email.message}</small>}
                    {errors.email?.type === 'pattern' && <small className='text-red-500'>{errors.email.message}</small>}

                    {/* error message  */}
                    {errorMessage && <p className='text-rose-500 text-sm'>{errorMessage}</p>}

                    {/* submit button  */}
                    <input className='btn btn-accent text-white text-lg font-normal mt-6' type="submit" value='Reset' />
                    {/* login Link  */}
                    <p className='text-center mt-2'><small>Back to <Link className='text-secondary' to='/login'>Login</Link></small></p>

                </form>
            </div>
        </div>
    );
};

export default ResetPassword;