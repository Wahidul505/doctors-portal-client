import React, { useEffect, useState } from 'react';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import LoadingSpinner from '../Shared/LoadingSpinner';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';


const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [errorMessage, setErrorMessage] = useState();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        };

        if (error) {
            console.log(error?.message);
            if (error?.message?.includes('wrong-password')) {
                setErrorMessage('Wrong Password')
            }
            else if (error?.message?.includes('user-not-found')) {
                setErrorMessage('Invalid Email Address');
            }
            else {
                setErrorMessage('Something Went Wrong');
            }
        }
    }, [user, navigate, from, error]);

    if (loading) {
        return <LoadingSpinner />
    }

    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password);
    };

    return (
        <div className='h-screen flex justify-center items-center -mt-20'>
            <div className='w-11/12 md:w-1/2 lg:w-2/5 p-4 shadow-xl rounded-lg'>
                <h3 className='text-2xl text-accent font-semibold text-center mb-10'>Login</h3>

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
                    <input className='btn btn-accent text-white text-lg font-normal mt-6' type="submit" value='Login' />

                    {/* sign up Link  */}
                    <p className='text-center mt-2'><small>New to Doctors Portal? <Link className='text-secondary' to='/signup'>Create new Account</Link></small></p>
                </form>

                {/* google login  */}
                <SocialLogin />
            </div>
        </div>
    );
};

export default Login;