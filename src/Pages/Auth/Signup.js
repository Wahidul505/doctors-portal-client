import React from 'react';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import LoadingSpinner from '../Shared/LoadingSpinner';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    let errorMessage;

    if (user || gUser) {
        console.log(user || gUser);
    };

    if (loading || gLoading || updating) {
        return <LoadingSpinner />
    }

    if (error || gError || updateError) {
        errorMessage = <p className='text-rose-500 text-sm'>{error?.message || gError?.message || updateError?.message}</p>
    };



    const onSubmit = async data => {
        console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        navigate('/appointment');
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
                    {errorMessage}

                    {/* submit button  */}
                    <input className='btn btn-accent text-white text-lg font-normal mt-6' type="submit" value='Sign Up' />

                    {/* Login Link  */}
                    <p className='text-center mt-2'><small>Already have an Account? <Link className='text-secondary' to='/login'>Log into Your Account</Link></small></p>
                </form>

                {/* google login  */}
                <div className="divider my-6">OR</div>
                <button
                    onClick={() => signInWithGoogle()}
                    className="btn btn-outline uppercase w-full"
                >Continue with Google</button>
            </div>
        </div>
    );
};

export default Signup;