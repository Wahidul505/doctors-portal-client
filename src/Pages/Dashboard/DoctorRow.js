import React from 'react';

const DoctorRow = ({ doctor, index, setDeletingDoctor }) => {
    const { name, image, specialty } = doctor;

    return (
        <tr>
            <th>{index}</th>
            <td><div className="avatar">
                <div className="w-16 rounded">
                    <img src={image ? image : ''} alt="Tailwind-CSS-Avatar-component" />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td>
                <label
                    onClick={() => setDeletingDoctor(doctor)}
                    htmlFor="delete-doctor-modal"
                    className="btn modal-button btn-xs"
                >Delete</label>
            </td>
        </tr>
    );
};

export default DoctorRow;