import React from 'react';
import toast from 'react-hot-toast';

const DeleteDoctor = ({ deletingDoctor, refetch, setDeletingDoctor }) => {
    const { name, email } = deletingDoctor;
    const handleDeleteDoctor = email => {
        fetch(`https://boiling-badlands-47206.herokuapp.com/doctor/${email}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json()).then(data => {
            if (data.deletedCount) {
                toast.success(`Doctor: ${name} is deleted`, { id: 'doctorDeleteSuccess' });
                setDeletingDoctor(null);
                refetch();
            }
            else {
                toast.error('Something went wrong', { id: 'doctorDeleteError' });
            }
        })
    }
    return (
        <div className='z-10'>
            <input type="checkbox" id="delete-doctor-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-error">Are You sure You Want to delete {name}</h3>
                    <p className="py-4">Once You Delete a Doctor, the Doctor will remove from the Doctor list.</p>
                    <div className="modal-action">
                        <button className='btn btn-sm btn-error' onClick={() => handleDeleteDoctor(email)}>Delete</button>
                        <label htmlFor="delete-doctor-modal" className="btn btn-sm">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteDoctor;