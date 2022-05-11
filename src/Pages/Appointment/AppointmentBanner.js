import React from 'react';
import chair from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({ date, setDate }) => {
    const defaultMonth = new Date();
    return (
        <div className="bg-cover bg-no-repeat bg-center mb-28 md:px-8 py-8" style={{ backgroundImage: `url(${bg})` }}>
            <div className="flex flex-col lg:flex-row justify-around items-center gap-4">
                <div>
                    <DayPicker
                        className='bg-white rounded p-4 shadow-lg h-96 w-full'
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        defaultMonth={defaultMonth}
                        fromMonth={defaultMonth}
                    />
                </div>
                <img src={chair} className="lg:max-w-2xl md:w-1/2 rounded-lg shadow-2xl" alt='' />
            </div>
        </div>
    );
};

export default AppointmentBanner;