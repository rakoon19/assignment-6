import CartItem from "./CartItem";

const Cart = ({ cart = [], setCart}) => {
    const handleRemove = (id) => {
        setCart(cart.filter(item => item.id !== id));
    }
    const total = cart?.reduce((sum, item) => sum + item.price.amount, 0);
    const currency = '$';


    if (cart.length === 0) {
        return (
            <div>
                <h2>Your Cart</h2>
                <p>Your cart is empty</p>
            </div>
        );
    }
    return (
        <div>

            <h2>Your Cart</h2>

            <div>
                {cart?.map((item) => (
                    <CartItem item={item} key={item.id} handleRemove={ handleRemove }/>
                ))} 
            </div>

            <div>
                <p>Total:</p>
                <div>
                    <p>{ currency }</p>
                    <p>{ total }</p>
                </div>
            </div>
        </div>
    )}


export default Cart;