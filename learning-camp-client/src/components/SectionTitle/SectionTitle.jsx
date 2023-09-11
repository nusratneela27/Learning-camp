import React from 'react';

const SectionTitle = ({ heading, subheading }) => {
    return (
        <div className='text-center my-10'>
            <h3 className='text-4xl font-bold text-gray-500'>{heading}</h3>
            <p className='text-emerald-600 text-2xl mt-2'>--- {subheading} ---</p>
        </div>
    );
};

export default SectionTitle;