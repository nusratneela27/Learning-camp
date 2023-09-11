import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { FaPencilAlt } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

const MyClass = () => {
    const { user } = useAuth();
    const [myClass, setMyClass] = useState([]);

    const url = `https://learning-camp-server-five.vercel.app/class?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyClass(data))
    }, [url])

    return (
        <div className='w-full max-w-screen-xl mx-auto'>
            <Helmet>
                <title>e Crft | My Class</title>
            </Helmet>

            <div className="overflow-x-auto">
                <table className="table w-full mt-5 px-8">
                    {/* head */}
                    <thead className='bg-sky-800 text-white px-8'>
                        <tr>
                            <th>#</th>
                            <th>Images</th>
                            <th>Instructor</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th className='text-end'>Updated</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myClass.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.instructor}
                                </td>
                                <td>
                                    {item.instructorEmail}
                                </td>
                                <td className="">${item.price}</td>
                                <td>
                                    {item.status}
                                </td>
                                <td className='text-end'>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-sky-800 text-white"><FaPencilAlt></FaPencilAlt></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyClass;