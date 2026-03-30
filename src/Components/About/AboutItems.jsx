import React from 'react';

const AboutItems = ({ statNum, statName}) => {
    return (
        <div className='flex flex-col gap-3'>
            <h2 className='text-15'>{ statNum }</h2>
            <p className='text-6'>{ statName}</p>
        </div>
    );
};

export default AboutItems;