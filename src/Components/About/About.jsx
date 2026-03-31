import React from 'react';
import about from '../../../JSON/about.json'
import AboutItems from './AboutItems';

const About = () => {

    return (
        <div className='flex justify-around items-center bg-linear-to-r from-[#6366F1] via-[#8B5CF6] to-[#D946EF] text-white py-15'>
            {about.map((item, index) => (
                <React.Fragment key={index}>
                    <AboutItems statName={item.statName} statNum={item.statNum} />

                    {index !== about.length - 1 && (
                        <div className="divider lg:divider-horizontal before:bg-white/20 after:bg-white/20"></div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export default About;