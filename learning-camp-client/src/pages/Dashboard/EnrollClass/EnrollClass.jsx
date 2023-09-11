import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { Helmet } from 'react-helmet-async';

const EnrollClass = () => {
    const { user } = useAuth();
    const [payments, setPayment] = useState([]);

    useEffect(() => {
        fetch(`https://learning-camp-server-five.vercel.app/payments/student`)
            .then(res => res.json())
            .then(data => {
                setPayment(data)
            })
    }, [])

    return (
        <div className='w-full max-w-screen-xl mx-auto'>
            <Helmet>
                <title>e Crft | My Enroll Class</title>
            </Helmet>
            <div className="overflow-x-auto w-full px-20">
                <table className="table w-full mt-12 px-8">
                    {/* head */}
                    <thead className=' bg-sky-800 text-white px-8'>
                        <tr>
                            <th>#</th>
                            <th>transactionId</th>
                            <th>date</th>
                            <th>Price</th>
                            <th>status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    {item.transactionId}
                                </td>
                                <td>
                                    {item.date}
                                </td>
                                <td className="">${item.price}</td>
                                <td className="">{item.status}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EnrollClass;