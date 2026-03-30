import React from 'react';
import NavItems from './NavItems';

const Navbar = () => {

    const navItems = ["Products", "Features", "Pricing", "Testimonials", "FAQ"];

    return (
        <div className='flex justify-between py-4'>
            <h2 className='text-4xl'>DigiTools</h2>
            <ul className='flex gap-8 self-center justify-center'>
                { navItems.map(
                    (item, index) => (<NavItems item={item} key={index}></NavItems>))}
            </ul>
            <div className='flex self-center justify-center'>
                <button>Login</button>
                <button>Get Started</button>
            </div>
        </div>
    );
};

export default Navbar;