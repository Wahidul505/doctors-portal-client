import React from 'react';
import toast from 'react-hot-toast';

const UserRow = ({ user, index, refetch }) => {
    const { email, role } = user;
    const handleMakeAdmin = () => {
        const proceed = window.confirm();
        if (proceed) {
            fetch(`https://boiling-badlands-47206.herokuapp.com/user/admin/${email}`, {
                method: 'PUT',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            }).then(res => {
                if (res.status === 403) {
                    return toast.error("You don't have the authorization to make an admin", { id: '403Error' });
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
        else {
            return;
        }
    };

    const handleDeleteUser = () => {
        const proceed = window.confirm();
        if (proceed) {
            fetch(`https://boiling-badlands-47206.herokuapp.com/user/admin/${email}`, {
                method: 'DELETE',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            }).then(res => {
                if (res.status === 403) {
                    return toast.error("You don't have the authorization to delete an user", { id: '403Error' });
                }
                return res.json()
            }).then(data => {
                if (data.success) {
                    toast.success(`${email} is Deleted`, { id: 'userDeleteSuccess' });
                    refetch();
                }
                else {
                    return;
                }
            });
        }
        else {
            return;
        }

    }
    return (
        <tr>
            <th>{index}</th>
            <td>{email}</td>
            <td>
                {
                    role !== 'admin' ?
                        <button className='btn btn-sm' onClick={handleMakeAdmin}>Make Admin</button> :
                        <div className='text-center'><p className="badge badge-secondary">Admin</p></div>
                }
            </td>
            <td><button className='btn btn-sm' onClick={handleDeleteUser}>Remove User</button></td>
        </tr>
    );
};

export default UserRow;