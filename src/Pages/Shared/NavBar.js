import { signOut } from 'firebase/auth';
import { BsCaretLeftFill } from 'react-icons/bs';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const NavBar = () => {
    const [user] = useAuthState(auth);
    const { pathname } = useLocation();
    const handleSignOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    }
    const menuItems = <>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/appointment'>Appointment</Link></li>
        <li><Link to='/reviews'>Reviews</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/about'>About</Link></li>
        {user && <li><Link to='/dashboard'>Dashboard</Link></li>}
        <li>{user ?
            <button className='bg-secondary bg-opacity-30' onClick={handleSignOut}>SignOut</button>
            : <Link to='/login'>Login</Link>}</li>
    </>
    return (
        <div className="navbar bg-base-100 px-8 mb-12 md:mb-24">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">Doctors Portal</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            {
                pathname.includes('/dashboard') && <div className="navbar-end lg:hidden">
                    <label tabIndex="1" htmlFor="my-drawer-2" className="btn btn-ghost lg:hidden">
                        <BsCaretLeftFill className='text-2xl text-accent' />
                    </label>
                </div>
            }
        </div>
    );
};

export default NavBar;