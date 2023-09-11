import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate()

    const onSubmit = data => {
        setError('');
        if (data.password !== data.confirm) {
            setError('Your password did not match')
            return;
        }

        createUser(data.email, data.password)
            .then(result => {

                const loggedUser = result.user;

                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = { name: data.name, img: data.photoURL, email: data.email }
                        fetch('https://learning-camp-server-five.vercel.app/users', {
                            method: "POST",
                            headers: {
                                "content-type": "application/json"
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created Successfully',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })

                    })
                    .catch(error => console.log(error))
            })
    }

    return (
        <>
            <Helmet>
                <title>e Crft | Register</title>
            </Helmet>
            <div className="hero loginBanner">
                <div className="hero-content">
                    <div className="card shadow-2xl bg-slate-400 pb-10 pt-5">
                        <div className='text-center mt-6'>
                            <h1 className='text-4xl font-bold'>Register</h1>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                            <div className='flex gap-3'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text"  {...register("name", { required: true })} name="name" placeholder="Your Name" className="input input-bordered" />
                                    {errors.name && <span className="text-red-600">Name is required</span>}
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                    {errors.email && <span className="text-red-600">Email is required</span>}
                                </div>

                            </div>

                            <div className='flex gap-3'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password"  {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
                                    })}
                                        name="password" placeholder="password" className="input input-bordered" />
                                    {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                    {errors.password?.type === 'minLength' && <p className="text-red-600">Password is less than 6 characters</p>}
                                    {errors.password?.type === 'pattern' && <p className="text-red-600">don't have a capital letter & don't have a special character</p>}
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input type="password"  {...register("confirm", { required: true, })} name="confirm" placeholder="Confirm password" className="input input-bordered" />
                                    {errors.password?.type === 'required' && <p className="text-red-600">Password confirm required</p>}
                                    <p className="text-red-600">{error}</p>
                                </div>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Photo URL is required</span>}
                            </div>

                            <div className="form-control mt-6">
                                <input className="btn btn-neutral" type="submit" value="Register" />
                            </div>
                        </form>

                        <SocialLogin></SocialLogin>

                        <p className='px-6 text-sm text-center text-gray-950 font-bold'>
                            Don't have an account yet?{' '}
                            <Link to='/login' className='hover:underline hover:text-emerald-900 text-violet-900'>
                                Login
                            </Link>
                        </p>

                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;