import React from 'react';

const PrimaryButton = ({ btnText}) => {
    return (
        <button class="w-fit bg-linear-to-r from-[#7C3AED] to-[#A855F7] py-3.75 px-4 rounded-full text-white font-semibold hover:from-white hover:to-white hover:text-purple-600 border border-transparent hover:border-purple-600 transition-all duration-300 shadow-md">
        { btnText }
        </button>   
    );
};

export default PrimaryButton;