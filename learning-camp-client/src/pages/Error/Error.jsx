import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import errors from '../../assets/error.avif'

const Error = () => {
    const { error, status } = useRouteError()
    return (
        <section className='flex items-center h-screen p-16 text-gray-900'>
            <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>

                <div className='max-w-md text-center'>
                    <img src={errors} alt="" />
                    <p className='text-2xl font-semibold md:text-3xl mb-8'>
                        {error?.message}
                    </p>
                    <Link
                        to='/'
                        className='px-8 py-3 font-semibold rounded bg-fuchsia-400 text-gray-900'
                    >
                        Back to homepage
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Error;