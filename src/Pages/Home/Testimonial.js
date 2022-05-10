import React from 'react';
import quote from '../../assets/icons/quote.svg';
import ReviewCard from './ReviewCard';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';


const Testimonial = () => {
    const reviews = [
        { id: 1, name: 'Winson Herry', image: people1, reviewDetails: 'This is very generous website to book an appointment of a dentist and healthy checkup of teeth. I like to thanks all of the doctors of Doctors Portal for their warm hospitality and proper checkup.', location: 'California' },
        { id: 2, name: 'Winson Herry', image: people2, reviewDetails: 'This is very generous website to book an appointment of a dentist and healthy checkup of teeth. I like to thanks all of the doctors of Doctors Portal for their warm hospitality and proper checkup.', location: 'California' },
        { id: 3, name: 'Winson Herry', image: people3, reviewDetails: 'This is very generous website to book an appointment of a dentist and healthy checkup of teeth. I like to thanks all of the doctors of Doctors Portal for their warm hospitality and proper checkup.', location: 'California' }
    ]
    return (
        <div>
            <div className='flex justify-between items-center mb-20'>
                <div>
                    <p className='text-primary text-xl font-semibold mb-1'>Testimonial</p>
                    <h3 className='text-gray-700 text-2xl md:text-4xl'>What Our Patients Says</h3>
                </div>
                <img className='w-24 md:w-48' src={quote} alt="" />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-24 lg:px-8'>
                {
                    reviews.map(review => <ReviewCard
                        key={review.id}
                        review={review}
                    />)
                }
            </div>
        </div>
    );
};

export default Testimonial;