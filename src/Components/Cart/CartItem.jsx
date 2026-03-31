
const CartItem = ({ item, handleRemove }) => {
    console.log(item)
    return (
        <div className='flex items-center justify-between p-4 mb-4 bg-[#F8FAFC] rounded-2xl border border-transparent hover:border-gray-100 transition-all'>

            <div className='flex items-center gap-4'>
                <div className='w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm'>
                    <img src={item.icon} alt={item.name} className='w-8 h-8 object-contain' />
                </div>

                <div className='flex flex-col'>
                    <h5 className='text-lg font-bold text-[#101727]'>{item.name}</h5>
                    <p className='text-[#627382] font-medium'>
                        {item.price.currency}{item.price.amount}
                    </p>
                </div>
            </div>

            <div>
                <button 
                    onClick={() => {
                        handleRemove(item.id);
                        alert('Product removed from cart!');
                    }}
                    className='text-[#F43F5E] font-semibold hover:text-red-700 transition-colors text-sm px-2'
                >
                    Remove
                </button>
            </div>
        </div>
    );
};

export default CartItem;