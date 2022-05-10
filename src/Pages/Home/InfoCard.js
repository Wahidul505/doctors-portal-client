import React from 'react';

const InfoCard = ({ info }) => {
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl bg-gradient-to-r ${info.colorFrom} ${info.colorTo} flex gap-6 items-center text-white p-4`}>
            <figure>
                <img src={info.icon} alt="Album" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">{info.title}</h2>
                <p>{info.description}</p>
            </div>
        </div>
    );
};

export default InfoCard;