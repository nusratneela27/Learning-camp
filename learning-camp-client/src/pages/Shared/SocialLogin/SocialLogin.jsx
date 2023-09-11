import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SocialLogin = () => {
    const { googleSign } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSign()
            .then(result => {
                const loggedUser = result.user;

                const saveUser = { name: loggedUser.displayName, img: loggedUser.photoURL, email: loggedUser.email }
                fetch('https://learning-camp-server-five.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Google Login Successfully',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate(from, { replace: true });
                    })
            })
    }

    return (
        <div>
            <div className='flex items-center space-x-1 ps-4 pe-4'>
                <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                <p className='px-3 text-sm dark:text-gray-950'>Login with social accounts</p>
                <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
            </div>
            <div onClick={handleGoogleSignIn} className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
                <FaGoogle size={25} />
                <p>Continue with Google</p>
            </div>
        </div>
    );
};

export default SocialLogin;