import React, { useEffect, useState } from 'react';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import LoadingSpinner from '../Shared/LoadingSpinner';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import toast from 'react-hot-toast';
import useToken from '../../hooks/useToken';

const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const [token] = useToken(user);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (token) {
            toast.success('Account Created', { id: 'signupSuccess' });
            toast.success('Email Verification Sent', { id: 'verificationSuccess' });
            navigate(from, { replace: true });
        };

        if (error || updateError) {
            if (error?.message?.includes('email-already-in-use')) {
                setErrorMessage('Email Already Exists');
            }
            else {
                setErrorMessage('Something went Wrong');
            }
        };
    }, [token, navigate, from, error, updateError])

    if (loading || updating) {
        return <LoadingSpinner />
    }

    // handling creating user 
    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
    };

    return (
        <div className='h-screen flex justify-center items-center -mt-20'>
            <div className='w-11/12 md:w-1/2 lg:w-2/5 p-4 shadow-xl rounded-lg'>
                <h3 className='text-2xl text-accent font-semibold text-center mb-10'>Sign Up</h3>

                {/* email and password login  */}
                <form
                    className='flex flex-col'
                    onSubmit={handleSubmit(onSubmit)}>

                    {/* name  */}
                    <label className='text-lg' htmlFor="name">Name</label>
                    <input
                        type='name'
                        name='name'
                        id='name'
                        className='p-2 text-lg focus:outline-none rounded-lg border border-gray-400'
                        {...register("name",
                            {
                                required: {
                                    value: true,
                                    message: 'Name is required'
                                }
                            }
                        )}
                    />
                    {errors.name?.type === 'required' && <small className='text-red-500'>{errors.name.message}</small>}
                    {errors.name?.type === 'pattern' && <small className='text-red-500'>{errors.name.message}</small>}

                    {/* email  */}
                    <label className='text-lg mt-4' htmlFor="email">Email</label>
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

                    {/* password  */}
                    <label className='text-lg mt-4' htmlFor="password">Password</label>
                    <input
                        type='password'
                        name='password'
                        id='password'
                        className='p-2 text-lg focus:outline-none rounded-lg border border-gray-400'
                        {...register("password", {
                            required: {
                                value: true,
                                message: 'Password is required'
                            },
                            pattern: {
                                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                message: 'Minimum eight characters, at least one letter, one number and No Special Character'
                            }
                        }
                        )}
                    />
                    {errors.password?.type === 'required' && <small className='text-red-500'>{errors.password.message}</small>}
                    {errors.password?.type === 'pattern' && <small className='text-red-500'>{errors.password.message}</small>}

                    {/* error message  */}
                    {errorMessage && <p className='text-rose-500 text-sm'>{errorMessage}</p>}

                    {/* submit button  */}
                    <input className='btn btn-accent text-white text-lg font-normal mt-6' type="submit" value='Sign Up' />

                    {/* Login Link  */}
                    <p className='text-center mt-2'><small>Already have an Account? <Link className='text-secondary' to='/login'>Log into Your Account</Link></small></p>
                </form>

                {/* google login  */}
                <SocialLogin />

            </div>
        </div>
    );
};

export default Signup;