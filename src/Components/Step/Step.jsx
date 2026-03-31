import step from '../../../JSON/step.json'
import StepCard from './StepCard';

const Step = () => {
    return (
        <div className='flex flex-col gap-10 py-30'> 
            <div className='text-center flex flex-col gap-4'>
                <h1 className='text-5xl font-extrabold'>Get Started in 3 Steps</h1>
                <p className='text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
            </div>

            <div className='flex gap-7.5 justify-center'>
                { step.map((card) => ( <StepCard card={ card } key={ card.serialNo }></StepCard>))}
            </div>

        </div>
    );
};

export default Step;