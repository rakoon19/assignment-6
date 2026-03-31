const StepCard = ({ card }) => {
return (
        <div className='relative flex flex-col items-center justify-center text-center p-6 md:p-8 lg:p-10 w-full max-w-full md:max-w-95 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow'>

            <span className="absolute top-4 right-4 md:top-6 md:right-6 flex items-center justify-center text-xs md:text-[14px] w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-white font-bold shrink-0">
                { card.serialNo }
            </span>

            <div className='w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#F3E8FF] flex items-center justify-center mb-4 md:mb-6'>
                <img src={ card.imgPath } alt={ card.heading } className='w-10 h-10 md:w-12 md:h-12 object-contain'/>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-[#101727] mb-2 md:mb-3">
                { card.heading }
            </h3>

            <p className='text-sm md:text-base text-[#627382] leading-relaxed'>
                { card.para }
            </p>
        </div>
    );
};

export default StepCard;