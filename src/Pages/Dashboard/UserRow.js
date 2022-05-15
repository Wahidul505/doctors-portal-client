import React from 'react';
import toast from 'react-hot-toast';

const UserRow = ({ user, index, refetch }) => {
    const { email, role } = user;
    const handleMakeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => {
            if (res.status === 403) {
                toast.error("You don't have the authorization to make an admin", { id: '403Error' });
            }
            return res.json()
        }).then(data => {
            if (data.modifiedCount > 0) {
                toast.success(`${email} is now an Admin`, { id: 'adminSuccess' });
                refetch();
            }
            else {
                return;
            }
        });
    }
    return (
        <tr>
            <th>{index}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button className='btn btn-sm' onClick={handleMakeAdmin}>Make Admin</button>}</td>
            <td><button className='btn btn-sm'>Remove User</button></td>
        </tr>
    );
};

export default UserRow;