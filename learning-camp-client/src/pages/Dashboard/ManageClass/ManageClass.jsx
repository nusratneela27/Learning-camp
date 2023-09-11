import React from 'react';
import useManageClass from '../../../hooks/useManageClass';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt } from 'react-icons/fa';

const ManageClass = () => {
    const [classes, , refetch] = useManageClass();
    const [axiosSecure] = useAxiosSecure();

    const handleDelete = (item) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/class/${item._id}`)
                    .then(res => {
                        console.log('deleted res', res.data);
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Course has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }

    return (
        <div className='w-full max-w-screen-xl mx-auto'>
            <Helmet>
                <title>e Crft | Manage Class</title>
            </Helmet>

            <div className="overflow-x-auto w-full">
                <table className="table w-full ">

                    <thead className='bg-sky-800 text-white'>
                        <tr>
                            <th>#</th>
                            <th>Item</th>
                            <th>Instructor Name</th>
                            <th>Instructor email</th>
                            <th> Available seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{item.course}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.instructor}
                                </td>
                                <td>
                                    {item.instructorEmail}
                                </td>
                                <td>
                                    {item.seats}
                                </td>
                                <td className="">${item.price}</td>
                                <td className='text-center'>
                                    {item.status}
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageClass;