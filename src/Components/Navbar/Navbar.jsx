import React from 'react';
import NavItems from './NavItems';
import PrimaryButton from '../ui Components/PrimaryButton'
import { LuShoppingCart } from "react-icons/lu";

const Navbar = () => {

    const navItems = ["Products", "Features", "Pricing", "Testimonials", "FAQ"];

    return (
        <div className='flex justify-between py-4'>
            <h2 className='text-4xl font-bold'>DigiTools</h2>
            <ul className='flex gap-8 self-center justify-center'>
                { navItems.map(
                    (item, index) => (<NavItems item={item} key={index}></NavItems>))}
            </ul>
            <div className='flex self-center justify-center items-center gap-4'>
                <LuShoppingCart size={20} className='w-5 h-5'/>
                <button>Login</button>
                <PrimaryButton btnText='Get Started'></PrimaryButton>
            </div>
        </div>
    );
};

export default Navbar;