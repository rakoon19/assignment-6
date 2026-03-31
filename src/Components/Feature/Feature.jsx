import FeatureCard from "./FeatureCard";
import featurecard from '../../../JSON/featurecard.json'

const Feature = () => {
    return (
        <div>

            <div className="flex flex-col gap-4"> 
                <h1>Premium Digital Tools</h1>
                <p>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
                <div className="flex">
                    <button>Products</button>
                    <button>Cart (2)</button>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-7.5">
            { featurecard.map((card) => (<FeatureCard card={ card } key={ card.id }></FeatureCard>))}
            </div>
        </div>
    );
};

export default Feature;