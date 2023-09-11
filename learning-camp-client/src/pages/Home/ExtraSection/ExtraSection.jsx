import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import event1 from '../../../assets/event/event-img-1.png'
import event2 from '../../../assets/event/event-img-2.png'
import event3 from '../../../assets/event/event-img-3.png'
import event5 from '../../../assets/event/event-img-5.png'
import { Slide } from 'react-awesome-reveal';

const ExtraSection = () => {
    return (
        <div className=' bg-sky-100 py-10'>
            <SectionTitle
                heading={"Upcoming events"}
                subheading={"Education Events"}
            ></SectionTitle>
            <div className='grid grid-cols-1 lg:grid-cols-2  gap-5 px-16 md:px-40'>
                <Slide>
                    <div>
                        <div className='grid grid-cols-1 lg:grid-cols-2 rounded-lg mb-5 py-7 px-4 bg-gray-100'>
                            <img className='ps-20' src={event1} alt="" />
                            <div className='pt-9'>
                                <h1 className='text-2xl font-bold pb-5'>Comprehensive literacy and reading recovery conference</h1>
                                <p className='text-emerald-600 text-xl flex gap-2'><FaMapMarkerAlt></FaMapMarkerAlt> Washington, DC</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 lg:grid-cols-2 rounded-lg mb-5 py-7 px-4 bg-gray-100'>
                            <img className='ps-20' src={event2} alt="" />
                            <div className='pt-9'>
                                <h1 className='text-2xl font-bold pb-5'>Future of higher education: an invitation to lead</h1>
                                <p className='text-emerald-600 text-xl flex gap-2'><FaMapMarkerAlt></FaMapMarkerAlt> New Orleans, LA</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 lg:grid-cols-2 rounded-lg mb-5 py-7 px-4 bg-gray-100'>
                            <img className='ps-20' src={event3} alt="" />
                            <div className='pt-9'>
                                <h1 className='text-2xl font-bold pb-5'>National reading recovery & literacy conference</h1>
                                <p className='text-emerald-600 text-xl flex gap-2'><FaMapMarkerAlt></FaMapMarkerAlt> Bellevue, WA</p>
                            </div>
                        </div>
                    </div>
                </Slide>
                <div>
                    <img src={event5} alt="" />
                </div>

            </div>
        </div>
    );
};

export default ExtraSection;