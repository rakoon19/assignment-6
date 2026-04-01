import FeatureCard from "./FeatureCard";
import Cart from "../Cart/Cart";
import featurecard from '../../../JSON/featurecard.json'
import { toast } from 'react-toastify';

const Feature = ({ setFeatureBTN, featureBTN, cart, setCart }) => {

    const handleBuyNow = (card) => {
        setCart([...cart, card]);
        toast.success(`${card.name} added to cart!`, {
        icon: "🛒"
    });
    }

    return (
        <div 
            id="feature-section"
            className="py-12 md:py-20 lg:py-30 space-y-8 md:space-y-12 px-6 md:px-20 lg:px-50 mx-auto"
        >

            <div className="flex flex-col gap-3 md:gap-4"> 
                
                <h1 className="text-[#101727] text-3xl md:text-4xl lg:text-5xl font-extrabold text-center">
                    Premium Digital Tools
                </h1>
                
                <p className="text-[#627382] text-center text-sm md:text-base px-4 md:px-0">
                    Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
                </p>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center p-2 rounded-2xl bg-gray-100 w-fit items-center self-center">

                    <button 
                        onClick={() => setFeatureBTN('products')} 
                        className={`w-fit sm:w-auto py-3 md:py-4 px-6 md:px-10 rounded-full font-bold transition-all ${featureBTN === 'products' ? 'bg-linear-to-r from-[#7C3AED] to-[#A855F7] text-white shadow-lg' : 'bg-gray-100 text-[#627382]'}`}
                    >
                        Products
                    </button>
                    
                    <button 
                        onClick={() => setFeatureBTN('cart')}
                        className={`w-fit sm:w-auto py-3 md:py-4 px-6 md:px-10 rounded-full font-bold transition-all ${featureBTN === 'cart' ? 'bg-linear-to-r from-[#7C3AED] to-[#A855F7] text-white shadow-lg' : 'bg-gray-100 text-[#627382]'}`}
                    >
                        Cart ({cart.length})
                    </button>

                </div>
            </div>

            <div className="grid grid-cols-1 max-w-7xl mx-auto md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-7.5">

                {featureBTN === 'products' &&
                    featurecard.map((card) => (
                        <FeatureCard 
                            card={card}
                            key={card.id}
                            handleBuyNow={handleBuyNow}
                            cart={cart}
                        />
                    ))
                }

            </div>

            {featureBTN === 'cart' && (
                <Cart cart={cart} setCart={setCart} />
            )}
        </div>
    );
};

export default Feature;