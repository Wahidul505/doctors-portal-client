import React from 'react';

const ReviewCard = ({ review }) => {
    const { name, reviewDetails, image, location } = review;
    return (
        <div>
            <p className='text-lg mb-8'>{reviewDetails}</p>
            <div className='flex items-center gap-4'>
                <div class="avatar">
                    <div class="w-20 rounded-full ring ring-primary ring-offset-base-100">
                        <img src={image} alt='' />
                    </div>
                </div>
                <div>
                    <p className='font-semibold text-xl'>{name}</p>
                    <p className='text-lg'>{location}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;