import React from 'react';
import PrimaryButton from '../ui Components/PrimaryButton';

const Testimonial = () => {
    return (
        <div className='bg-linear-to-r from-[#6366F1] via-[#8B5CF6] to-[#D946EF] flex flex-col gap-10 py-30 justify-center items-center text-center text-white'>

            <div className='flex flex-col gap-4'>
                <h1 className='text-[40px] font-extrabold'>Ready to Transform Your Workflow?</h1>
                <p className='opacity-90'>Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.</p>
            </div>

            <div className='flex flex-col gap-4'>
                <div className='flex gap-4 justify-center'>
                    <PrimaryButton btnText={ "Explore Products"}></PrimaryButton>
                    <PrimaryButton btnText={ "View Pricing"}></PrimaryButton>
                </div>
                <p className='opacity-80'>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    );
};

export default Testimonial;