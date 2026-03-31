import React, { useState } from 'react';
import NavItems from './NavItems';
import PrimaryButton from '../ui Components/PrimaryButton';
import { LuShoppingCart, LuMenu, LuX } from "react-icons/lu";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navItems = ["Products", "Features", "Pricing", "Testimonials", "FAQ"];

    return (
        <div className='sticky top-0 z-50 bg-white border-b border-gray-200'>
            <div className='mx-auto px-4 md:px-12 lg:px-50 flex justify-between py-4'>
                
                <h2 className='text-4xl font-bold'>DigiTools</h2>
                
                <ul className='hidden md:flex gap-8 self-center justify-center'>
                    {navItems.map((item, index) => (
                        <NavItems item={item} key={index} />
                    ))}
                </ul>
                
                <div className='hidden md:flex self-center justify-center items-center gap-4'>
                    <LuShoppingCart size={20} className='w-5 h-5'/>
                    <button>Login</button>
                    <PrimaryButton btnText='Get Started' />
                </div>

                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className='md:hidden self-center'
                >
                    {isOpen ? <LuX size={28} /> : <LuMenu size={28} />}
                </button>
            </div>

            {isOpen && (
                <div className='md:hidden bg-white border-t border-gray-200'>
                    <ul className='flex flex-col py-4'>
                        {navItems.map((item, index) => (
                            <li key={index} className='px-4 py-3 hover:bg-gray-50'>
                                <a href="">{item}</a>
                            </li>
                        ))}
                    </ul>
                    
                    <div className='flex flex-col gap-3 px-4 pb-4 border-t border-gray-100 pt-4'>
                        <button className='flex items-center gap-2 py-2'>
                            <LuShoppingCart size={20} />
                            Cart
                        </button>
                        <button className='py-2 text-left'>Login</button>
                        <PrimaryButton btnText='Get Started' />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;