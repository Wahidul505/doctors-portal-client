import React from 'react';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const Info = () => {
    const infos = [
        { id: 1, title: 'Opening Hours', description: 'From 9am to 9pm', icon: clock, colorFrom: 'from-primary', colorTo: 'to-secondary' },
        { id: 2, title: 'Visit Our Location', description: 'Cheragi Pahar, ZamalKhan, Ctg', icon: marker, colorFrom: 'from-accent', colorTo: 'to-accent' },
        { id: 3, title: 'Contact Us Now', description: '01766633344', icon: phone, colorFrom: 'from-primary', colorTo: 'to-secondary' },
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 px-8 gap-6'>
            {
                infos.map(info => <InfoCard
                    key={info.id}
                    info={info}
                />)
            }
        </div>
    );
};

export default Info;