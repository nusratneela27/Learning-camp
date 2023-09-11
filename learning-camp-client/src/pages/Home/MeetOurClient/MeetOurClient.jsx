import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Fade, Slide } from 'react-awesome-reveal';

const MeetOurClient = () => {
    return (
        <>
            <SectionTitle
                heading={"FeedBack"}
                subheading={"What Our Students Say"}
            ></SectionTitle>
            <section className="flex justify-center mb-28">
                <div className="grid md:grid-cols-2 gap-4 bg-gradient-to-r from-gray-600 via-stone-900 to-stone-900 md:w-5/6 rounded-lg text-white px-16">
                    <div className="flex justify-center items-center">
                        <div className="w-5/6">
                            <h1 className="font-bold text-5xl mb-3 mt-10">Meet Our Students</h1>
                            <Fade delay={1e3} cascade damping={1e-1}>
                                <p className="mb-3">There are many variations of passages of Lorem Ipsum available,
                                    but the majority have suffered alteration in some form, by
                                    injected humour, or randomised words which don't look even
                                    slightly believable.</p>
                            </Fade>
                            <button className="btn btn-outline btn-access border-0 border-b-4 bg-gradient-to-r from-slate-500 via-slate-400 to-amber-100 mt-4 text-black">See All</button>
                        </div>
                    </div>


                    <div className="relative py-24">


                        <div className=" z-10 absolute top-52 md:-left-10 w-3/4">
                            <div className="bg-white rounded-lg flex relative h-60 items-center text-black px-5">
                                <div>
                                    <p className="mb-3">When it comes to learning new languages, Crtf presents unique challenges and rewards. We've vetted the top sites to help anyone who wants to learn get started.</p>
                                    <h4 className="font-bold mb-2">Adam Smith</h4>
                                    <small>Student of English clubs</small>
                                </div>
                            </div>
                        </div>


                        <div className="relative left-20 md:left-32 opacity-40 w-3/4">
                            <div
                                className="relative bg-white h-56 rounded-lg text-black flex px-5 items-center"
                            >
                                <div className="absolute -top-5 -left-5">
                                </div>
                                <div>
                                    <p className="mb-5">
                                        When it comes to learning new languages, Crtf presents unique challenges and rewards. We've vetted the top sites to help anyone who wants to learn get started.
                                    </p>
                                    <h4 className="font-bold">Adam Smith</h4>
                                    <small>Student of English club</small>
                                </div>
                            </div>
                        </div>


                        <div className="relative left-20 md:left-32 top-10 opacity-40 w-3/4">
                            <div
                                className="relative bg-white h-56 rounded-lg text-black flex px-5 items-center"
                            >
                                <div className="absolute -top-5 -left-5">
                                </div>
                                <div>
                                    <p className="mb-5">
                                        When it comes to learning new languages, Crtf presents unique challenges and rewards. We've vetted the top sites to help anyone who wants to learn get started.
                                    </p>

                                    <h4 className="font-bold">Adam Smith</h4>

                                    <small>Student of English club</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MeetOurClient;