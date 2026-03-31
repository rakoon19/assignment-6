import CartItem from "./CartItem";

const Cart = ({ cart, setCart }) => {
    const handleRemove = (id) => {
        setCart(cart.filter(item => item.id !== id));
    }


    return (
        <div>
            {cart?.map((item) => (
                <CartItem item={item} key={item.id} handleRemove={ handleRemove }/>
            ))} 
        </div>
    )
};

export default Cart;