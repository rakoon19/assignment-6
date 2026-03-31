import React, { useState } from 'react';
import { FaCheck } from "react-icons/fa6";
import { BsCheckCircleFill } from 'react-icons/bs';

const FeatureCard = ({ card, handleBuyNow, cart }) => { 
    const [added, setAdded] = useState(false);
    
    if (!card) return null;

    const isInCart = cart.some(item => item.id === card.id); 

    const getBadgeStyles = (badge) => {
        switch (badge) {
            case 'Best Seller':
                return 'bg-[#FFEDD5] text-[#D97706]';
            case 'Popular':
                return 'bg-[#F3E8FF] text-[#7C3AED]';
            case 'New':
                return 'bg-[#DCFCE7] text-[#15803D]';
            default:
                return 'bg-gray-100 text-gray-600';
        }
    };

    const handleClick = () => {
        if (isInCart) return; 
        handleBuyNow(card);
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    return (
        <div className='relative flex flex-col p-6 md:p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 w-full h-full'>
            
            {card.badge && (
                <span className={`absolute top-4 right-4 md:top-6 md:right-6 px-2.5 md:px-3 py-1 rounded-full text-xs font-bold ${getBadgeStyles(card.badge)}`}>
                    {card.badge}
                </span>
            )}

            <div className='w-14 h-14 md:w-16 md:h-16 rounded-full bg-gray-50 flex items-center justify-center mb-4 md:mb-6'>
                <img src={card.icon} alt={card.name} className='w-8 h-8 md:w-10 md:h-10 object-contain' />
            </div>

            <div className='flex-1'>
                <h4 className='text-xl md:text-2xl font-bold text-[#101727] mb-2 md:mb-3'>{card.name}</h4>
                
                <p className='text-[#627382] text-sm leading-relaxed mb-4 md:mb-6'>
                    {card.description}
                </p>

                <div className='flex items-baseline gap-1 mb-6 md:mb-8'>
                    <span className='text-2xl md:text-3xl font-extrabold text-[#101727]'>
                        {card.price.currency}{card.price.amount}
                    </span>
                    <span className='text-slate-400 text-sm'>
                        /{card.price.billing === 'Monthly' ? 'Mo' : 'One-Time'}
                    </span>
                </div>

                <ul className='space-y-2 md:space-y-3 mb-6 md:mb-10'>
                    {card.features.map((feature, index) => (
                        <li key={index} className='flex items-center gap-2 text-xs md:text-sm text-[#627382]'>
                            <FaCheck size={16} className='md:w-4.5 md:h-4.5 text-green-500 shrink-0' strokeWidth={3} />
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>

            <button 
                onClick={handleClick}
                disabled={isInCart} 
                className={`w-full py-3 md:py-4 rounded-full text-white font-bold text-base md:text-lg transition-all active:scale-95 flex items-center justify-center gap-2 ${
                    isInCart
                        ? 'bg-gray-400 cursor-not-allowed'
                        : added 
                            ? 'bg-green-500 hover:bg-green-600' 
                            : 'bg-linear-to-r from-[#7C3AED] to-[#A855F7] hover:opacity-90'
                }`}
            >
                {isInCart ? (
                    <>
                        <BsCheckCircleFill className="text-lg md:text-xl" />
                        In Cart
                    </>
                ) : added ? (
                    <>
                        <BsCheckCircleFill className="text-lg md:text-xl" />
                        Added to Cart
                    </>
                ) : (
                    'Buy Now'
                )}
            </button>
        </div>
    );
};

export default FeatureCard;