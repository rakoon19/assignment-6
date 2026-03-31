import CartItem from "./CartItem";
import { LuShoppingCart } from "react-icons/lu";

const Cart = ({ cart = [], setCart}) => {
    const handleRemove = (id) => {
        setCart(cart.filter(item => item.id !== id));
    }
    const total = cart?.reduce((sum, item) => sum + item.price.amount, 0);


    if (cart.length === 0) {
        return (
            <div className='bg-white border border-gray-100 rounded-3xl shadow-sm transition-shadow '>
                <h2 className="font-bold text-2xl
                p-10">Your Cart</h2>
                    <div className="flex justify-center items-center flex-col gap-4 py-20">
                        <LuShoppingCart size={100} className='text-[#92a4b4]'/>
                        <p className='text-[#92a4b4] text-xl'>Your cart is empty</p>
                    </div>
            </div>
        );
    }
    return (
        <div className='bg-white border border-gray-100 rounded-3xl shadow-sm transition-shadow gap-6'>

            <h2 className="font-bold text-2xl
                p-10">
                    Your Cart
            </h2>

            <div className="mx-10">
                {cart?.map((item) => (
                    <CartItem item={item} key={item.id} handleRemove={ handleRemove }/>
                ))} 
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 mx-10 mb-10">
                
                    <div className="flex justify-between items-center mb-6">
                        <span className="text-gray-400">Total:</span>
                        <span className="text-3xl font-extrabold text-[#101727]">${total}</span>
                    </div>

                    <button 
                        onClick={() => alert('Proceeding to checkout...')}
                        className="w-full py-4 rounded-full bg-linear-to-r from-[#7C3AED] to-[#A855F7] text-white font-bold text-lg shadow-lg"
                    >
                        Proceed To Checkout
                    </button>
            </div>
        </div>
    )}


export default Cart;