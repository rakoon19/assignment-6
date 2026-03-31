

const StepCard = ({ card }) => {
    return (
        <div className='flex flex-col item-center justify-center text-center'>
            <span className="text-right">{ card.serialNo }</span>
            <img src={ card.imgPath} alt="" className='w-25 self-center'/>
            <h3 className="m-4 text-2xl">{ card.heading }</h3>
            <p>{ card.para }</p>
        </div>
    );
};

export default StepCard;