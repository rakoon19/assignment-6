const StepCard = ({ card }) => {
return (
        <div className='relative flex flex-col items-center justify-center text-center p-10 w-full max-w-95 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow '>

            <span className="absolute top-6 right-6 flex items-center justify-center text-[14px] w-8 h-8 rounded-full bg-linear-to-r from-[#7C3AED] to-[#A855F7] text-white font-bold shrink-0">
                { card.serialNo }
            </span>

            <div className='w-24 h-24 rounded-full bg-[#F3E8FF] flex items-center justify-center mb-6'>
                <img src={ card.imgPath } alt={ card.heading } className='w-12 h-12 object-contain'/>
            </div>

            <h3 className="text-2xl font-bold text-[#101727] mb-3">
                { card.heading }
            </h3>
            
            <p className='text-[#627382] leading-relaxed'>
                { card.para }
            </p>
        </div>
    );
};

export default StepCard;