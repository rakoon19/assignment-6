import React from 'react';
import SocialLinks from './SocialLinks';
import footerlink from '../../../JSON/footerlink.json'
import FooterLink from './FooterLink';

const FooterPaths = () => {
    return (
        <div className='flex justify-between self-center'>

            <div className='flex flex-col gap-4'>
                <h2>DigiTools</h2>
                <p>Premium digital tools for creators,<br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.</p>
            </div>

            { footerlink.map((item) => (<FooterLink item={ item } key={ item.id }></FooterLink>))}

            <div className='flex flex-col gap-4'>
                <h2>Social Links</h2>
                <SocialLinks></SocialLinks>
            </div>

        </div>
    );
};

export default FooterPaths;