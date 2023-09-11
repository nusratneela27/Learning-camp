import React from 'react';
import { FaBook, FaHome, FaUserFriends, FaUserGraduate, FaUsers, FaWallet } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import Navbar from '../pages/Shared/Navbar/Navbar';
import { Helmet } from 'react-helmet-async';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';

const DashBoard = () => {
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    return (
        <div>
            <Helmet>
                <title>e Crtf| Dashboard</title>
            </Helmet>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">

                    <Outlet></Outlet>

                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-sky-800 font-bold text-xl pt-52 mx-auto">

                        {
                            isAdmin ? <>
                                <li className='text-center text-2xl bg-cyan-200 rounded-3xl  py-5 mb-20'>Admin Dashboard</li>
                                <li><NavLink to="/dashboard/manageclass"><FaBook></FaBook>Manage Classes</NavLink></li>
                                <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> Manage Users</NavLink></li>
                            </> : <>
                            </>
                        }

                        {
                            isInstructor ? <>
                                <li className='text-center text-2xl bg-cyan-200 rounded-3xl  py-5 mb-20'>Instructor Dashboard</li>
                                <li><NavLink to="/dashboard/addclass"><FaBook></FaBook>Add a Class</NavLink></li>
                                <li><NavLink to="/dashboard/instructorclass"><FaUsers></FaUsers> My Classes</NavLink></li>
                            </> : <>
                            </>
                        }

                        {
                            !isAdmin && !isInstructor ? <>
                                <li className='text-center text-2xl bg-cyan-200 rounded-3xl  py-5 mb-20'>Student Dashboard</li>
                                <li><NavLink to="/dashboard/mycart"><FaBook></FaBook>My Selected Classes</NavLink></li>
                                <li><NavLink to="/dashboard/enrollclass"><FaUsers></FaUsers> My Enrolled Classes</NavLink></li>
                                <li><NavLink to='/dashboard/payment'><FaWallet /> Payment</NavLink></li>
                            </> : <>
                            </>
                        }

                        <div className="divider text-white py-5">OR</div>

                        <li><NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
                        <li><NavLink to="/instructor"><FaUserGraduate></FaUserGraduate> Instructor</NavLink></li>
                        <li><NavLink to="/classes"><FaUserFriends></FaUserFriends> Classes</NavLink></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoard;