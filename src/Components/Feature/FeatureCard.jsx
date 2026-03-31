// import React from 'react';

// const FeatureCard = ({ card, handleBuyNow}) => {


//     if (card.length === 0) {
//         return (
//             <div>
//                 <h2>No Products Available</h2>
//                 <p>There are no available products to buy.</p>
//             </div>
//         );
//     }
//     return (
//         <div className='flex flex-col'>

//             <p>{ card.badge }</p>
//             <img src={ card.icon } alt="" />
//             <h4>{ card.name }</h4>
//             <p>{ card.description }</p>

//             <span className='flex'>
//                 <p>{ card.price.currency }</p>
//                 <p>{ card.price.amount }</p>
//                 <p>/{ card.price.billing }</p>
//             </span>

//             <div>
//                 { card.features.map((feature, index) => (<p key={ index }>{ feature }</p>))}
//             </div>

//             <button onClick={() => { handleBuyNow(card) }}>Buy Now</button>
//         </div>
//     );
// };

// export default FeatureCard;












import React from 'react';
import { FaCheck } from "react-icons/fa6";

const FeatureCard = ({ card, handleBuyNow }) => {
    if (!card) return null;

    // Logic to determine badge colors based on the text
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

    return (
        <div className='relative flex flex-col p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 w-full h-full'>
            
            {card.badge && (
                <span className={`absolute top-6 right-6 px-3 py-1 rounded-full text-xs font-bold ${getBadgeStyles(card.badge)}`}>
                    {card.badge}
                </span>
            )}

            <div className='w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-6'>
                <img src={card.icon} alt={card.name} className='w-10 h-10 object-contain' />
            </div>

            <div className='flex-1'>
                <h4 className='text-2xl font-bold text-[#101727] mb-3'>{card.name}</h4>
                <p className='text-[#627382] text-sm leading-relaxed mb-6'>
                    {card.description}
                </p>

                <div className='flex items-baseline gap-1 mb-8'>
                    <span className='text-3xl font-extrabold text-[#101727]'>
                        {card.price.currency}{card.price.amount}
                    </span>
                    <span className='text-slate-400 text-sm'>
                        /{card.price.billing === 'Monthly' ? 'Mo' : 'One-Time'}
                    </span>
                </div>

                <ul className='space-y-3 mb-10'>
                    {card.features.map((feature, index) => (
                        <li key={index} className='flex items-center gap-2 text-sm text-[#627382]'>
                            <FaCheck size={18} className='text-green-500 shrink-0' strokeWidth={3} />
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>

            <button 
                onClick={() => handleBuyNow(card)}
                className='w-full py-4 rounded-full bg-linear-to-r from-[#7C3AED] to-[#A855F7] text-white font-bold text-lg hover:opacity-90 transition-opacity active:scale-95'
            >
                Buy Now
            </button>
        </div>
    );
};

export default FeatureCard;