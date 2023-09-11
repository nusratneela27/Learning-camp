import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import ClassesCard from './ClassesCard';

const Classes = () => {
    const [classes, setClasses] = useState([])

    useEffect(() => {
        fetch('https://learning-camp-server-five.vercel.app/topclass')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])

    return (
        <section>
            <SectionTitle
                heading={"Our Popular Courses"}
                subheading={"only the best"}
            ></SectionTitle>
            <div className="grid gird-cols-1 lg:grid-cols-3 gap-5 px-16 md:px-40 mb-16">
                {
                    classes.map(courses => <ClassesCard
                        key={courses._id}
                        courses={courses}
                    ></ClassesCard>)
                }
            </div>
        </section>
    );
};

export default Classes;