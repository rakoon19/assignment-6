import React from 'react';

const AboutItems = ({ statNum, statName}) => {
    return (
        <>
        <div className='flex flex-col gap-3 '>
            <h2 className='text-6xl font-extrabold'>{ statNum }</h2>
            <p className='text-2xl font font-medium'>{ statName}</p>
        </div>
        </>
    );
};

export default AboutItems;