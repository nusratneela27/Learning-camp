import React from 'react';
import img1 from "../../../assets/Blog/spending-time-online-.jpg"
import img2 from "../../../assets/Blog/woman-learning-english-online-e1625538535869.jpg"
import img3 from "../../../assets/Blog/woman-teacher-teaching-online-coronavirus-and-online-distance-learning-concept-.jpg"
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const BlogAndArticles = () => {
    return (
        <>
            <SectionTitle
                heading={"Our Blog"}
                subheading={"Latest Blog & Articles"}
            ></SectionTitle>
            <section className="container mx-auto px-16 mb-28 min-h-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="rounded-lg border-2">
                        <img className="mx-auto my-5 w-10/12" src={img1} alt="" />
                        <div className="p-8">
                            <small>Feb 05, 2027</small>
                            <h1 className="font-semibold text-2xl">8 Most Asked Questions About The Ielts Exam</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua....</p>
                            <h5 className="font-extrabold">Read More</h5>
                        </div>
                    </div>
                    <div className="rounded-lg border-2">
                        <img className="mx-auto my-5 w-10/12" src={img2} alt="" />
                        <div className="p-8">
                            <small>Feb 05, 2027</small>
                            <h1 className="font-semibold text-2xl">How To Set Yourself Up For Success A New Career</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua....</p>
                            <h5 className="font-extrabold">Read More</h5>
                        </div>
                    </div>
                    <div className="rounded-lg border-2">
                        <img className="mx-auto my-5 w-10/12" src={img3} alt="" />
                        <div className="p-8">
                            <small>Feb 05, 2027</small>
                            <h1 className="font-semibold text-2xl">Why Are You Thinking About Learning Better English?</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua....</p>
                            <h5 className="font-extrabold">Read More</h5>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogAndArticles;