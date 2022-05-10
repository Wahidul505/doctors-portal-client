import React, { useState } from 'react';
import chair from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = () => {
    const [date, setDate] = useState(new Date());
    const defaultMonth = new Date();
    return (
        <div className="bg-cover bg-no-repeat bg-center mb-8 md:px-8 py-8" style={{ backgroundImage: `url(${bg})` }}>
            <div className="flex flex-col md:flex-row justify-around items-start">
                <div>
                    <DayPicker
                        className='bg-white rounded p-4 shadow-lg h-96 w-full'
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        defaultMonth={defaultMonth}
                        fromMonth={defaultMonth}
                    />
                    <div className='mt-4 text-gray-700 font-semibold mb-8'>
                        <p>You picked {format(date, 'PP')}.</p>
                    </div>
                </div>
                <img src={chair} className="lg:max-w-2xl md:w-1/2 rounded-lg shadow-2xl" alt='' />
            </div>
        </div>
    );
};

export default AppointmentBanner;