import banner from '/public/assets/banner.png'
import PrimaryButton from '../ui Components/PrimaryButton'
import { TbLivePhotoFilled } from "react-icons/tb";
import { LuPlay } from "react-icons/lu";

const Hero = () => {
return (
        <div className='flex flex-col md:flex-row items-center gap-8 md:gap-15 justify-center w-full py-10 md:py-21 px-4 md:px-10'>
        
            <div className='flex-1 w-full md:max-w-137.5 order-2 md:order-1'> 
                <img src={ banner } alt="banner" className="w-full h-auto rounded-2xl" />
            </div>
            
            <div className='w-full md:max-w-159.75 order-1 md:order-2'>
                <div className='flex flex-col gap-4 md:gap-6 items-center md:items-start justify-center text-center md:text-left'>
                    
                    {/* notify */}
                    <div className="inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 bg-purple-100 rounded-full">
                        <TbLivePhotoFilled className='w-2 h-2 bg-[#7C3AED] rounded-full'/>
                        <span className="text-purple-600 font-semibold text-xs md:text-sm">
                            New: AI-Powered Tools Available
                        </span>
                    </div>
                    
                    <div> 
        
                        <h1 className='text-4xl md:text-6xl lg:text-7xl text-[#101727] font-extrabold mb-4 md:mb-6 leading-[1.1]'>
                            Supercharge Your <br className='hidden md:block' /> Digital Workflow
                        </h1>
                        
                        <p className='text-base md:text-[18px] text-[#627382] leading-relaxed max-w-full md:max-w-137.5'>
                            Access premium AI tools, design assets, templates, and productivity
                            software—all in one place. Start creating faster today.
                        </p>
                    </div>
                    
                    <div className='flex flex-col md:flex-row items-center gap-3 md:gap-4 mt-2 md:mt-4 w-full sm:w-auto'>

                        <PrimaryButton btnText={'Explore Products'} />

                        <button className="w-fit flex items-center gap-2 px-6 py-3 border border-purple-500 rounded-full text-purple-600 font-semibold hover:bg-purple-600 hover:text-white transition-colors duration-300">
                        <LuPlay size={18} strokeWidth={2.5} />
                        
                        <span>Watch Demo</span>
                        </button>

                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Hero;