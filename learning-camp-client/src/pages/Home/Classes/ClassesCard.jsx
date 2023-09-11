import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';
import useCart from '../../../hooks/useCart';

const ClassesCard = ({ courses }) => {
    const { _id, image, course, instructor, seats, price } = courses;
    const { user } = useContext(AuthContext);
    const [, refetch] = useCart()
    const navigate = useNavigate();

    const handleSelectClass = courses => {
        if (user && user.email) {
            const cartItem = { courseId: _id, image, course, price, instructor, email: user.email }
            fetch('https://learning-camp-server-five.vercel.app/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Course added on the cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to select course',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }

    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
            <figure className="pt-2">
                <img src={image} className="rounded-xl " />
            </figure>
            <div className="card-body">
                <h2 className="card-title font-bold">Language: {course}</h2>
                <p className='text-xl font-semibold '>Instructor: {instructor}</p>
                <p className=' text-xl font-semibold '>Available Seats: {seats}</p>
                <p className=" text-xl text-emerald-500 font-semibold ">Price: ${price}</p>
                <button onClick={() => handleSelectClass(courses)} className=" bg-gradient-to-r from-slate-900 via-slate-600 to-slate-200 py-2 rounded ms-3 font-bold text-white"><Link>Select Classes</Link></button>
            </div>
        </div>
    );
};

export default ClassesCard;