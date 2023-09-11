import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { signIn } = useContext(AuthContext);
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const onSubmit = data => {
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                Swal.fire({
                    title: 'User Login successful',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
    }

    // A#123456

    return (
        <>
            <Helmet>
                <title>e Crft | Login</title>
            </Helmet>
            <div className="hero loginBanner">
                <div className="hero-content flex-col lg:flex-row">

                    <div className="card shadow-2xl bg-slate-400 pb-10">
                        <div className='text-center mt-6'>
                            <h1 className='text-4xl font-bold'>Log In</h1>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={show ? "text" : "password"}  {...register("password", { required: true, })} name="password" placeholder="password" className="input input-bordered" />
                                <p onClick={() => setShow(!show)} className='text-2xl absolute top-60 pe-5 right-5'><small>
                                    {
                                        show ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                    }
                                </small></p>
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                            </div>

                            <div className="form-control mt-6">
                                <input className="btn btn-neutral" type="submit" value="login" />
                            </div>
                        </form>

                        <SocialLogin></SocialLogin>

                        <p className='px-6 text-sm text-center text-gray-950 font-bold'>Don't have an account yet?{' '}
                            <Link to='/signup' className='hover:underline hover:text-emerald-900 text-violet-900'>
                                Register
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;