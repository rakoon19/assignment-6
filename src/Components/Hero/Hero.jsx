import banner from '/public/assets/banner.png'
import PrimaryButton from '../ui Components/PrimaryButton'

const Hero = () => {
return (
        <div className='flex items-center gap-15 justify-center w-full py-21 px-10'>
            
            <div className='flex-1 max-w-[550px]'> 
                <img src={ banner } alt="banner" className="w-full h-auto rounded-2xl" />
            </div>
            
            <div className='w-full max-w-[639px]'>
                <div className='flex flex-col gap-6 items-start justify-center'>
                    
                    {/* notify */}
                    <PrimaryButton btnText={'New: AI-Powered Tools Available'} />
                    
                    <div> 
                        <h1 className='text-7xl text-[#101727] font-extrabold mb-6 leading-[1.1]'>
                            Supercharge Your <br /> Digital Workflow
                        </h1>
                        <p className='text-[18px] text-[#627382] leading-relaxed max-w-[500px]'>
                            Access premium AI tools, design assets, templates, and productivity
                            software—all in one place. Start creating faster today.
                        </p>
                    </div>

                    <div className='flex gap-4 mt-4'>
                        <PrimaryButton btnText={'Explore Products'} />
                        <PrimaryButton btnText={'Watch Demo'} />
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Hero;