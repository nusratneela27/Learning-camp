import React from 'react';
import Instructor1 from "../../../assets/instructors/teachers-img-1.jpg"
import Instructor2 from "../../../assets/instructors/teachers-img-2.jpg"
import Instructor3 from "../../../assets/instructors/teachers-img-3.jpg"
import Instructor4 from "../../../assets/instructors/teachers-img-4.jpg"
import Instructor5 from "../../../assets/instructors/teachers-img-5.jpg"
import Instructor6 from "../../../assets/instructors/teachers-img-6.jpg"
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Fade } from 'react-awesome-reveal';

const Instructors = () => {


    return (
        <>
            <SectionTitle
                heading={"Our Instructors"}
                subheading={"Our international teachers"}
            ></SectionTitle>
            <div className='grid gird-cols-1 lg:grid-cols-3 gap-5 px-16 md:px-40 mb-16'>


                <Fade cascade>
                    <div className="card card-compact w-full bg-base-100 shadow-xl">
                        <div >
                            <figure><img className='w-[317px] h-[317px] relative rounded-t' src={Instructor1} alt="Shoes" /></figure>
                        </div>
                        <div className="card-body text-gray-500 text-center">
                            <p className=' text-xl font-semibold '>Name: Adam Riky </p>
                            <p className=' text-xl font-semibold '>English</p>
                        </div>
                    </div>

                    <div className="card card-compact w-full bg-base-100 shadow-xl ">
                        <div >
                            <figure><img className='w-[317px] h-[317px] relative rounded-t' src={Instructor2} alt="Shoes" /></figure>
                        </div>
                        <div className="card-body text-gray-500 text-center">
                            <p className=' text-xl font-semibold '>Name: Park min ho </p>
                            <p className=' text-xl font-semibold '>Korean</p>
                        </div>
                    </div>

                    <div className="card card-compact w-full bg-base-100 shadow-xl ">
                        <div >
                            <figure><img className='w-[317px] h-[317px] relative rounded-t' src={Instructor3} alt="Shoes" /></figure>
                        </div>
                        <div className="card-body text-gray-500 text-center">
                            <p className=' text-xl font-semibold '>Name: David Garza </p>
                            <p className=' text-xl font-semibold '>Germen</p>
                        </div>
                    </div>

                    <div className="card card-compact w-full bg-base-100 shadow-xl ">
                        <div >
                            <figure><img className='w-[317px] h-[317px] relative rounded-t' src={Instructor4} alt="Shoes" /></figure>
                        </div>
                        <div className="card-body text-gray-500 text-center">
                            <p className=' text-xl font-semibold '>Name: David Riky </p>
                            <p className=' text-xl font-semibold '>French</p>
                        </div>
                    </div>
                    <div className="card card-compact w-full bg-base-100 shadow-xl ">
                        <div >
                            <figure><img className='w-[317px] h-[317px] relative rounded-t' src={Instructor5} alt="Shoes" /></figure>
                        </div>
                        <div className="card-body text-gray-500 text-center">
                            <p className=' text-xl font-semibold '>Name: Riky jones </p>
                            <p className=' text-xl font-semibold '>Turkish</p>
                        </div>
                    </div>
                    <div className="card card-compact w-full bg-base-100 shadow-xl ">
                        <div >
                            <figure><img className='w-[317px] h-[317px] relative rounded-t' src={Instructor6} alt="Shoes" /></figure>
                        </div>
                        <div className="card-body text-gray-500 text-center">
                            <p className=' text-xl font-semibold '>Name: David smith </p>
                            <p className=' text-xl font-semibold '>Japanese</p>
                        </div>
                    </div>
                </Fade>

            </div>
        </>
    );
};

export default Instructors;