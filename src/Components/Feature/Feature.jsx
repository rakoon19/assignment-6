import { useState } from "react";
import FeatureCard from "./FeatureCard";
import Cart from "../Cart/Cart";
import featurecard from '../../../JSON/featurecard.json'

const Feature = () => {
    const [cart, setCart] = useState([]);

    const handleBuyNow = (card) => {
        setCart([...cart, card])
    }
    return (
        <div>

            <div className="flex flex-col gap-4"> 
                <h1>Premium Digital Tools</h1>
                <p>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
                <div className="flex">
                    <button>Products</button>
                    <button>Cart ({ cart.length })</button>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-7.5">
            { featurecard.map((card) => (<FeatureCard card={ card } key={ card.id } handleBuyNow={ handleBuyNow}></FeatureCard>))}
            <Cart cart={ cart } setCart= { setCart }></Cart>
            </div>
        </div>
    );
};

export default Feature;