import step from '../../../JSON/step.json'
import StepCard from './StepCard';

const Step = () => {
    return (
        <div className='flex flex-col gap-10 py-30'> 
            <div>
                <h1 className='text-5xl'>Get Started in 3 Steps</h1>
                <p>Start using premium digital tools in minutes, not hours.</p>
            </div>

            <div className='flex gap-7.5 justify-between'>
                { step.map((card) => ( <StepCard card={ card } key={ card.serialNo }></StepCard>))}
            </div>

        </div>
    );
};

export default Step;