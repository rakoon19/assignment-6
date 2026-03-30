import banner from '/public/assets/banner.png'

const Hero = () => {
    return (
        <div className='flex gap-15 self-center justify-center'>
            
            <div>
                <img src={ banner } alt="" />
            </div>

            <div className='flex flex-col gap-8'>
                 {/* notify */}
                <div>
                    <p>New: AI-Powered Tools Available</p>
                </div>
                <div>
                    <h1 className='text-[72px]'>Supercharge Your <br /> Digital Workflow</h1>
                    <p>Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.</p>
                </div>
                <div>
                    <button>Explore Products</button>
                    <button>Watch Demo</button>
                </div>
            </div>
            
        </div>
    );
};

export default Hero;