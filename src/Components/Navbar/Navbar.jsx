import React, { useState } from 'react';
import NavItems from './NavItems';
import PrimaryButton from '../ui Components/PrimaryButton';
import { LuShoppingCart, LuMenu, LuX } from "react-icons/lu";

const Navbar = ({ cart = [], setFeatureBTN }) => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: "Products", id: "feature-section" },
        { name: "Features", id: "about-section" },
        { name: "Pricing", id: "pricing-section" },
        { name: "Testimonials", id: "testimonial-section" },
        { name: "FAQ", id: "faq-section" }
    ];

    const handleNavClick = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        } else {
            console.warn(`Element with id ${sectionId} not found.`);
        }
        setIsOpen(false); 
    };

    const handleCartClick = () => {
        setFeatureBTN('cart');
        handleNavClick("feature-section");
    };

    return (
        <nav className='sticky top-0 z-50 bg-white border-b border-gray-200'>
            <div className='max-w-7xl mx-auto px-4 md:px-12 flex justify-between py-4 items-center'>
                
                <h2 className='text-2xl md:text-3xl font-bold'>DigiTools</h2>

                <ul className='hidden md:flex gap-8'>
                    {navItems.map((item, index) => (
                        <NavItems 
                            key={index}
                            item={item.name}
                            id={item.id}
                            handleNavClick={handleNavClick}
                        />
                    ))}
                </ul>

                <div className='hidden md:flex items-center gap-6'>
                    <button 
                        onClick={handleCartClick} 
                        className="relative p-3 -m-3"
                    >
                        <LuShoppingCart className='w-6 h-6'/>
                        {cart.length > 0 && (
                            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-semibold min-w-5 h-5 px-1.5 flex items-center justify-center rounded-full">
                                {cart.length}
                            </span>
                        )}
                    </button>
                    <button className='hover:text-blue-600 transition-colors'>Login</button>
                    <PrimaryButton btnText='Get Started' />
                </div>

                <div className="flex gap-4 md:hidden items-center">
                    <button onClick={handleCartClick} className="relative p-2 -m-2">
                        <LuShoppingCart size={24} />
                        {cart.length > 0 && (
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-semibold min-w-[18px] h-[18px] px-1 flex items-center justify-center rounded-full">
                                {cart.length}
                            </span>
                        )}
                    </button>
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <LuX size={28} /> : <LuMenu size={28} />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className='md:hidden bg-white border-t border-gray-200 absolute w-full left-0 shadow-md'>
                    <ul className='flex flex-col py-2'>
                        {navItems.map((item, index) => (
                            <NavItems 
                                key={index}
                                item={item.name}
                                id={item.id}
                                handleNavClick={handleNavClick}
                                mobile={true}
                            />
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;