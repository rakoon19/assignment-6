import React from 'react';

const FeatureCard = ({ card, handleBuyNow}) => {

    return (
        <div className='flex flex-col'>

            <p>{ card.badge }</p>
            <img src={ card.icon } alt="" />
            <h4>{ card.name }</h4>
            <p>{ card.description }</p>

            <span className='flex'>
                <p>{ card.price.currency }</p>
                <p>{ card.price.amount }</p>
                <p>/{ card.price.billing }</p>
            </span>

            <div>
                { card.features.map((feature, index) => (<p key={ index }>{ feature }</p>))}
            </div>

            <button onClick={() => { handleBuyNow(card) }}>Buy Now</button>
        </div>
    );
};

export default FeatureCard;