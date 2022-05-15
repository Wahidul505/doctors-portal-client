import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile drawer-end">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-center">
                {/* <!-- Page content here --> */}
                <h1 className='text-3xl text-secondary'>Dashboard Content</h1>
                <Outlet />

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-2/3 md:w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>Appointment</Link></li>
                    <li><Link to='/dashboard/review'>Review</Link></li>
                    <li><Link to='/dashboard/users'>Users</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;