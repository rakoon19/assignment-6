import step from '../../../JSON/step.json'
import StepCard from './StepCard';

const Step = () => {
    return (
        <div className='flex flex-col justify-center gap-6 md:gap-10 py-12 md:py-20 lg:py-30 px-6 md:px-12'>            
            <div className='text-center flex flex-col gap-3 md:gap-4 px-4 md:px-0'>
                
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold'>Get Started in 3 Steps</h1>
                
                <p className='text-sm md:text-base text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-7.5 self-center'>
                { step.map((card) => ( <StepCard card={ card } key={ card.serialNo }></StepCard>))}
            </div>

        </div>
    );
};
export default Step;