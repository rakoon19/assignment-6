import React from 'react';

const Testimonial = () => {
    return (
        <div className='flex flex-col gap-10 py-30 justify-center items-center text-center'>

            <div className='flex flex-col gap-4'>
                <h1 className='text-[40px] font-extrabold'>Ready to Transform Your Workflow?</h1>
                <p>Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.</p>
            </div>

            <div className='flex flex-col gap-4'>
                <div className='flex gap-4 justify-center'>
                    <button>Explore Products</button>
                    <button>View Pricing</button>
                </div>
                <p>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    );
};

export default Testimonial;