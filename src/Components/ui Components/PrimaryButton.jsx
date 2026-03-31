import React from 'react';

const PrimaryButton = ({ btnText}) => {
    return (
        <button className='bg-linear-to-r from-[#7C3AED] to-[#A855F7] py-3.75 px-4 rounded-full text-white font-semibold'>
            { btnText }
        </button>
    );
};

export default PrimaryButton;