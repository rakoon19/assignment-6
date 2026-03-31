import React from 'react';
import SocialLinks from './SocialLinks';
import footerlink from '../../../JSON/footerlink.json';
import FooterLink from './FooterLink';

const FooterPaths = () => {
    return (
        <div className='flex flex-col md:flex-row md:justify-between gap-10'>

            <div className='flex flex-col gap-4'>
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold'>DigiTools</h2>
                <p className="opacity-80 max-w-sm">
                    Premium digital tools for creators,
                    professionals, and businesses. Work smarter
                    with our suite of powerful tools.
                </p>
            </div>

            {footerlink.map((item) => (
                <FooterLink item={item} key={item.id} />
            ))}

            <div className='flex flex-col gap-4'>
                <h2 className='text-lg sm:text-xl font-medium'>Social Links</h2>
                <SocialLinks />
            </div>

        </div>
    );
};

export default FooterPaths;