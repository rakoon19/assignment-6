import React from 'react';

const CartItem = ({ item, handleRemove }) => {

    return (
        
        <div className='flex p-5 justify-between'>

            <div className='flex gap-4'>
                <img src={ item.icon } alt="" />
                <div className='flex flex-col'>
                    <h5>{ item.name }</h5>
                    <p>{ item.price.currency } { item.price.amount }</p>
                </div>
            </div>

            <div>
                <button onClick={ () => {
                    handleRemove( item.id )
                }}>Remove</button>
            </div>
        </div>
    );
};

export default CartItem;