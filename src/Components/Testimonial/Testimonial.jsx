import React from 'react';
import PrimaryButton from '../ui Components/PrimaryButton';

const Testimonial = () => {
    return (
        <div id='testimonial-section' className='bg-linear-to-r from-[#6366F1] via-[#8B5CF6] to-[#D946EF] flex flex-col gap-10 py-20 sm:py-24 md:py-28 lg:py-30 justify-center items-center text-center text-white mx-auto px-6 sm:px-10 md:px-20 lg:px-32'>

            <div className='flex flex-col gap-4 max-w-3xl'>
                <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold'>
                    Ready to Transform Your Workflow?
                </h1>
                <p className='opacity-90 text-sm sm:text-base md:text-lg'>
                    Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.
                </p>
            </div>

            <div className='flex flex-col gap-4'>
                <div className='flex flex-col sm:flex-row gap-4 justify-center'>

                        <button className="w-fit self-center px-6 py-2 rounded-full bg-white text-purple-600 font-medium hover:bg-linear-to-r from-[#6366F1] via-[#8B5CF6] to-[#c681d0] hover:text-white transition">
                        Explore Products
                        </button>

                        <button className="w-fit self-center px-6 py-2 rounded-full border border-white text-white font-medium hover:bg-white hover:text-purple-600 transition">
                            View Pricing
                        </button>
                </div>
                <p className='opacity-80 text-sm sm:text-base'>
                    14-day free trial • No credit card required • Cancel anytime
                </p>
            </div>
        </div>
    );
};

export default Testimonial;