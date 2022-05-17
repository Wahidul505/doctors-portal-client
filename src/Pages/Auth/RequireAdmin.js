import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import LoadingSpinner from '../Shared/LoadingSpinner';

const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    const location = useLocation();

    if (loading || adminLoading) {
        return <LoadingSpinner />
    }

    if (user && admin) {
        return children;
    }
    else {
        signOut(auth);
        return <Navigate to='/' state={{ from: location }} replace />
    }
};

export default RequireAdmin;