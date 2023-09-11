import React, { useEffect, useState } from 'react';
import ClassesCard from '../Home/Classes/ClassesCard';
import { Helmet } from 'react-helmet-async';

const Classes = () => {
    const [classes, setClasses] = useState([])

    useEffect(() => {
        fetch('https://learning-camp-server-five.vercel.app/class')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])
    return (
        <div>
            <Helmet>
                <title>e Crft | Classes</title>
            </Helmet>
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 pt-40 ">
                {
                    classes.map(courses => <ClassesCard
                        key={courses._id}
                        courses={courses}
                    ></ClassesCard>)
                }
            </div>
        </div>
    );
};

export default Classes;