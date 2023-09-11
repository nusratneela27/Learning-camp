import React from 'react';
import img1 from "../../../assets/teaching/image_box_1-1.png"
import img2 from "../../../assets/teaching/image_box_2-1.png"
import img3 from "../../../assets/teaching/image_box_3-1.png"

const Teaching = () => {
    return (
        <div className='bg-stone-200 py-20'>
            <div className="container mx-auto px-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                    <div className='flex justify-center'>
                        <div className='p-4'>
                            <h1 className='text-2xl font-bold pb-3'>Worldwide Recognize</h1>
                            <p>Our online course certificates can be used around the world and also in most popular universities and companies.
                            </p>
                            <button className="btn btn-outline btn-access border-0 border-b-4 bg-gradient-to-r from-slate-500 via-slate-400 to-amber-100 mt-5 text-black">Start Teaching</button>
                        </div>
                        <div>
                            <img className='pt-10' src={img1} height={200} width={200} alt="" />
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div className='p-4'>
                            <h1 className='text-2xl font-bold pb-3'>Mostly Online Learning</h1>
                            <p>Our online course certificates can be used around the world and also in most popular universities and companies.
                            </p>
                            <button className="btn btn-outline btn-access border-0 border-b-4 bg-gradient-to-r from-slate-500 via-slate-400 to-amber-100 mt-5 text-black">Start Teaching</button>
                        </div>
                        <div>
                            <img className='pt-10' src={img2} height={200} width={200} alt="" />
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div className='p-4'>
                            <h1 className='text-2xl font-bold pb-3'>Graduate in as little as 1 Year</h1>
                            <p>Our online course certificates can be used around the world and also in most popular universities and companies.
                            </p>
                            <button className="btn btn-outline btn-access border-0 border-b-4 bg-gradient-to-r from-slate-500 via-slate-400 to-amber-100 mt-5 text-black">Start Teaching</button>
                        </div>
                        <div>
                            <img className='pt-10' src={img3} height={200} width={200} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teaching;