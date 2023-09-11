import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

const AllInstructors = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch('https://learning-camp-server-five.vercel.app/all-instructors')
            .then(res => res.json())
            .then(data => {
                setInstructors(data)
            })
    }, [])

    return (
        <div className="w-full max-w-screen-xl mx-auto pt-48 pb-16">
            <Helmet>
                <title>e Crft| All Instructors</title>
            </Helmet>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead className='bg-sky-800 text-white'>
                            <tr>
                                <th>#</th>
                                <th>Instructors</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>See Classes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                instructors.map((instructor, index) => (
                                    <tr key={instructor._id}>
                                        <td>{index + 1}</td>
                                        <td>
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={instructor.img} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </td>
                                        <td>{instructor.instructorName} </td>
                                        <td>{instructor.instructorEmail}</td>
                                        <td>
                                            <button className="btn bg-sky-800 text-white">See Classes</button>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>

                    </table>
                </div>

            </div>
        </div>
    );
};

export default AllInstructors;