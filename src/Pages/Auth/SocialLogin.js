import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import LoadingSpinner from '../Shared/LoadingSpinner';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [token] = useToken(user);

    useEffect(() => {
        if (token) {
            toast.success('Logged In', { id: 'socialLoginSuccess' });
            navigate(from, { replace: true });
        }
    }, [token, navigate, from]);

    if (loading) {
        return <LoadingSpinner />
    }

    if (error) {
        toast.error('Something Went Wrong', { id: 'googleLoginError' });
    }
    return (
        <div>
            {/* google login  */}
            <div className="divider my-6">OR</div>
            <button
                onClick={() => signInWithGoogle()}
                className="btn btn-outline uppercase w-full"
            >Continue with Google</button>
        </div>
    );
};

export default SocialLogin;