import React from 'react';
import about from '../../../JSON/about.json'
import AboutItems from './AboutItems';

const About = () => {

    return (
        <div id='about-section' className='flex flex-col md:flex-row justify-center md:justify-around items-center gap-8 md:gap-0 bg-linear-to-r from-[#6366F1] via-[#8B5CF6] to-[#D946EF] text-white py-10 md:py-15 px-6 md:px-20 lg:px-50'>
            {about.map((item, index) => (
                <React.Fragment key={index}>
                    <AboutItems statName={item.statName} statNum={item.statNum} />

                    {index !== about.length - 1 && (
                        <div className="divider md:divider-horizontal before:bg-white/20 after:bg-white/20 w-full md:w-auto"></div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export default About;