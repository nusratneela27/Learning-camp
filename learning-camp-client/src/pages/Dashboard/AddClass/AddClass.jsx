import React from 'react';
import { useForm } from 'react-hook-form';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const AddClass = () => {
    const { user, } = useAuth();
    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        data.status = "pending"

        fetch("https://learning-camp-server-five.vercel.app/class", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    console.log(data);
                    Swal.fire({
                        title: 'Success!',
                        text: 'Class Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    reset();
                }
            });

    }

    return (
        <div className="w-full px-10">
            <Helmet>
                <title>e Crft | Add Class</title>
            </Helmet>
            <SectionTitle
                heading={"Add a class"}
                subheading={"New Class"}
            ></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)} className='bg-slate-300 p-20 rounded-lg'>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Class Name</span>
                    </label>
                    <input type="text" placeholder="class Name"
                        {...register("course", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>

                <div className="flex my-4">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor</span>
                        </label>
                        <input type="text" placeholder="class Name"
                            {...register("instructor", { required: true })}
                            className="input input-bordered w-full " defaultValue={user?.displayName} />
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor Email</span>
                        </label>
                        <input type="email" placeholder="Instructor email"
                            {...register("instructorEmail", { required: true })}
                            className="input input-bordered w-full " value={user?.email} />
                    </div>
                </div>
                <div className="flex my-4">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Available seat</span>
                        </label>
                        <input type="number" {...register("seats", { required: true })} placeholder="Available seat" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Price</span>
                        </label>
                        <input type="number" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Image link</span>
                    </label>
                    <input type="url" placeholder="image link"
                        {...register("image", { required: true })}
                        className="input input-bordered w-full " />
                </div>


                {/* <select defaultValue='pending' className="text-input" {...register("status", { required: true })}>
                    <option value="pending">pending</option>
                    <option value="approved">approved</option>
                    <option value="denied">denied</option>
                </select> */}


                <input className="btn btn-sm mt-4" type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddClass;