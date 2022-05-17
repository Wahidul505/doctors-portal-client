import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import LoadingSpinner from '../Shared/LoadingSpinner';


const AddDoctor = () => {
    const photoApiKey = 'bc069d2d932f220983e28cf3794a6fcd';
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { data: treatments, isLoading } = useQuery('treatments', () => fetch('http://localhost:5000/treatment')
        .then(res => res.json()));


    const onSubmit = async data => {
        const photo = data.photo[0];
        const formData = new FormData();
        formData.append('image', photo);
        const url = `https://api.imgbb.com/1/upload?key=${photoApiKey}`;
        
        // parent fetch method for posting an image to hosting in imgbb then via series calling second/ child fetch method for posting the doctors data with the hosted image in database through server 
        fetch(url, {
            method: 'POST',
            body: formData
        }).then(res => res.json()).then(result => {
            if (result.success) {
                const doctor = {
                    name: data.name,
                    image: result.data.url,
                    email: data.email,
                    specialty: data.specialty
                }
                fetch('http://localhost:5000/doctor', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(doctor)
                })
                    .then(res => res.json())
                    .then(inserted => {
                        if (inserted.insertedId) {
                            toast.success('Successfully added a Doctor', { id: 'addedSuccess' });
                            reset();
                        }
                        else {
                            toast.error("Couldn't add", { id: 'addedError' });
                        }
                    });
            }
        });

    };

    if (isLoading) {
        return <LoadingSpinner />
    }
    return (
        <div>
            <h1 className='text-center text-3xl text-secondary mb-6'>Add a new Dentist</h1>
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

                {/* specialty  */}
                <label className='text-lg mt-4' htmlFor="specialty">Specialty</label>
                <select {...register("specialty")} className="select select-accent w-full">
                    {
                        treatments.map(treatment => <option
                            key={treatment._id}
                            value={treatment.name}
                        >{treatment.name}</option>)
                    }
                </select>

                {/* Photo  */}
                <label className='text-lg' htmlFor="photo">Photo</label>
                <input
                    type='file'
                    name='photo'
                    id='photo'
                    className='p-2 text-lg focus:outline-none rounded-lg border border-gray-400'
                    {...register("photo",
                        {
                            required: {
                                value: true,
                                message: 'Photo is required'
                            }
                        }
                    )}
                />
                {errors.photo?.type === 'required' && <small className='text-red-500'>{errors.photo.message}</small>}

                {/* submit button  */}
                <input className='btn btn-accent text-white text-lg font-normal mt-6' type="submit" value='Add' />
            </form>
        </div>
    );
};

export default AddDoctor;