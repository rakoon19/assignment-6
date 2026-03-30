import React from 'react';
import about from '../../../JSON/about.json'
import AboutItems from './AboutItems';

const About = () => {

    return (
        <div className='flex justify-around'>
        { about.map((item, index) => (<AboutItems statName={ item.statName } statNum={ item.statNum }key= {index}></AboutItems>))}
        </div>
    );
};

export default About;