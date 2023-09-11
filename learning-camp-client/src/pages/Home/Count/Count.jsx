import React from 'react';
import CountUp from 'react-countup';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Count = () => {

    return (
        <div className="bg-slate-100 py-20">
            <SectionTitle
                heading={"We are Proud"}
                subheading={"Total Calculation"}
            >
            </SectionTitle>
            <div className='container mx-auto px-16 mb-20 mt-20 me-16'>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className='border-r-2 me-20'>
                        <CountUp
                            className='text-6xl'
                            end={2000}
                            duration="10" />
                        <p className='pt-9 text-2xl text-slate-600'>Students</p>
                    </div>
                    <div className='border-r-2 me-20'>
                        <CountUp
                            className='text-6xl'
                            end={950}
                            duration="10" />
                        <p className='pt-9 text-2xl text-slate-600'>Courses</p>
                    </div>
                    <div className='border-r-2 me-20'>
                        <CountUp
                            className='text-6xl'
                            end={1600}
                            duration="10" />
                        <p className='pt-9 text-2xl text-slate-600'>Hours Video</p>
                    </div>
                    <div>
                        <CountUp
                            className='text-6xl'
                            end={150}
                            duration="10" />
                        <p className='pt-9 text-2xl text-slate-600'>Countries Reached</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Count;