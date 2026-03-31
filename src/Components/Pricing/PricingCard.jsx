import { FaCheck } from "react-icons/fa6";

const PricingCard = ({ card }) => {

    const isPopular = card.popular;

    return (
        <div className={`relative flex flex-col p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm transition-all hover:shadow-md w-full max-w-full md:max-w-95 
            ${isPopular ? 'bg-linear-to-b from-[#7C3AED] to-[#A855F7] text-white md:scale-105 z-10' : 'bg-white text-slate-900'}`}>

            {isPopular && (
                <span className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 bg-[#FFEDD5] text-[#D97706] text-xs font-bold px-3 md:px-4 py-1 md:py-1.5 rounded-full shadow-sm">
                    {card.badge}
                </span>
            )}

            <div className="flex flex-col mb-6 md:mb-8 items-start">
                <h2 className={`${isPopular ? 'text-white' : 'text-[#101727]'} text-xl md:text-2xl font-bold mb-2`}>{card.name}</h2>
                <p className={`${isPopular ? 'text-white/80' : 'text-slate-500'} text-xs md:text-sm`}>
                    {card.description}
                </p>
            </div>

            <div className="mb-6 md:mb-8 text-left">
                <span className="text-4xl md:text-5xl font-bold">${card.price}</span>
                <span className={`text-base md:text-lg ${isPopular ? 'text-white/70' : 'text-slate-400'}`}>/{card.billing}</span>
            </div>

            <ul className="flex-1 space-y-3 md:space-y-4 mb-8 md:mb-10">
                {card.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 md:gap-3 text-xs md:text-sm">
                        <FaCheck
                            size={18} 
                            strokeWidth={3}
                            className={`shrink-0 md:w-5 md:h-5 ${isPopular ? 'text-white' : 'text-green-500'}`} 
                        />
                        <span className={isPopular ? 'text-white/90' : 'text-[#627382]'}>
                            {feature}
                        </span>
                    </li>
                ))}
            </ul>

            <button className={`w-full py-3 md:py-4 rounded-full font-bold text-base md:text-lg transition-all 
                ${isPopular 
                    ? 'bg-white text-[#7C3AED] hover:bg-opacity-90' 
                    : 'bg-linear-to-r from-[#7C3AED] to-[#A855F7] text-white hover:opacity-90'}`}>
                {card.buttonText}
            </button>
        </div>
    );
};

export default PricingCard;