import { useState } from "react";
import FeatureCard from "./FeatureCard";
import Cart from "../Cart/Cart";
import featurecard from '../../../JSON/featurecard.json'

const Feature = ({ setFeatureBTN, featureBTN }) => {
    const [cart, setCart] = useState([]);

    const handleBuyNow = (card) => {
        setCart([...cart, card])
    }
    return (
        <div className="py-30">

            <div className="flex flex-col gap-4"> 
                
                <h1 className="text-[#101727] text-5xl font-extrabold text-center   ">Premium Digital Tools</h1>
                <p className="text-[#627382] text-center">Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>

                <div className="flex gap-4 justify-center">
                    <button 
                        onClick={() => setFeatureBTN('products')} 
                        className={`py-4 px-10 rounded-full font-bold transition-all ${featureBTN === 'products' ? 'bg-linear-to-r from-[#7C3AED] to-[#A855F7] text-white shadow-lg' : 'bg-gray-100 text-[#627382]'}`}
                    >
                        Products
                    </button>
                    
                    <button 
                        onClick={() => setFeatureBTN('cart')}
                        className={`py-4 px-10 rounded-full font-bold transition-all ${featureBTN === 'cart' ? 'bg-linear-to-r from-[#7C3AED] to-[#A855F7] text-white shadow-lg' : 'bg-gray-100 text-[#627382]'}`}
                    >
                        Cart ({cart.length})
                    </button>
                </div>

            </div>

            <div className="grid grid-cols-3 gap-7.5">

            { featureBTN === 'products' && 
                (
                <>
                { featurecard.map((card) => (<FeatureCard card={ card } key={ card.id } handleBuyNow={ handleBuyNow}></FeatureCard>))} 
                </> )
            }
            </div>

            { featureBTN === 'cart' && (<Cart cart={ cart } setCart= { setCart }></Cart>)}

            
        </div>
    );
};

export default Feature;






