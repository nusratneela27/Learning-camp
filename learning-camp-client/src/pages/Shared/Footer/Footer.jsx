import React from 'react';
import logo from '../../../assets/White_logo.png'
import { FaArrowRight } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-slate-900 px-16 md:px-32 text-white">
            <div className="grid md:grid-cols-2 gap-4">
                <div className="my-14">
                    <div><img src={logo} alt="" /></div>
                    <div className="grid grid-cols-2">
                        <div>
                            <h1 className="font-bold">Quick Links</h1>
                            <ul>
                                <li>About Us</li>
                                <li>Classes</li>
                                <li>Instructor</li>
                                <li>Pricing</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className="font-bold">Useful Links</h1>
                            <ul>
                                <li>Privacy Policy</li>
                                <li>Terms And Conditions</li>
                                <li>Support</li>
                                <li>Disclaimer</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-center my-14">
                        <h4 className="flex items-center">Ready to get started?</h4>
                        <button className="bg-gradient-to-r from-green-500 via-green-400 to-green-300 px-5 py-2 rounded ms-3">Get Started</button>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className='-my-12'>
                            <h1 className="font-bold">Help</h1>
                            <ul>
                                <li>FAQ</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className="font-bold text-3xl mb-2">Subscribe to our newsletter</h1>
                            <div className="flex mb-3">
                                <input type="email" placeholder="username@site.com" className="bg-transparent border-b-2 w-4/6 md:w-5/6" />
                                <p className="p-3 bg-green-600 rounded-full"><FaArrowRight ></FaArrowRight></p>

                            </div>
                            <div className="flex justify-between w-2/5 mb-3">
                                <i className="fa-brands fa-facebook-f"></i>
                                <i className="fa-brands fa-twitter"></i>
                                <i className="fa-brands fa-square-instagram"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <p className="text-center pb-10 pt-10">Copyright © 2021. All rights reserved.</p>
        </footer>
    );
};

export default Footer;