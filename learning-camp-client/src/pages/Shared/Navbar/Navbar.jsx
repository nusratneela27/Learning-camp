import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import { AuthContext } from '../../../providers/AuthProvider';
import { FaCartPlus, FaMoon, FaRegMoon } from 'react-icons/fa';
import useCart from '../../../hooks/useCart';
import useDark from '../../../hooks/DarkMood';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [cart] = useCart();
    const [isDark, setIsDark] = useState();
    useDark(isDark);

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/instructor">Instructor</Link></li>
        <li><Link to="/classes">Classes</Link></li>
        {
            user ? <>
                <li><Link to="/dashboard">DashBoard</Link></li>
                <button className='flex mt-3'>
                    <FaCartPlus></FaCartPlus> +{cart?.length || 0}
                </button>
            </> : <>
            </>
        }
    </>

    return (
        <>
            <div className="navbar fixed z-10 bg-slate-300 md:px-32">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <Link to='/'>
                        <img className='hidden md:block' src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">

                    <button className='px-8'>
                        {isDark ? <FaMoon className="cursor-pointer text-2xl" onClick={() => setIsDark(false)} /> : <FaRegMoon className="cursor-pointer text-2xl" onClick={() => setIsDark(true)} />}
                    </button>

                    {
                        user ? <>
                            <div
                                className="tooltip tooltip-bottom"
                                data-tip={user?.displayName}
                            >
                                <label tabIndex={0} className="avatar">
                                    <div className="w-10 rounded-full mx-2">
                                        <img src={user?.photoURL} />
                                    </div>
                                </label>
                            </div>

                            <button onClick={handleLogout} className="bg-gradient-to-r from-green-500 via-green-400 to-green-300 px-5 py-2 rounded ms-3 font-bold">LogOut</button>
                        </> : <>
                            <button className="bg-gradient-to-r from-green-500 via-green-400 to-green-300 px-5 py-2 rounded ms-3 font-bold"><Link to="/login">Login</Link></button>
                            {/* <button className="bg-gradient-to-r from-slate-900 via-slate-600 to-slate-200 px-5 py-2 rounded ms-3 font-bold text-white"><Link to="/signup">Register</Link></button> */}
                        </>
                    }
                </div>
            </div>
        </>
    );
};

export default Navbar;