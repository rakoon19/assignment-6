import PricingHeader from "./PricingHeader";
import PricingCard from "./PricingCard";
import pricing from '../../../JSON/pricing.json'

const Pricing = () => {
    return (
        <div className="flex flex-col gap-15 py-30 text-center ">

            <PricingHeader></PricingHeader>

            <div className="flex gap-7.5 justify-center">
                { pricing.map((card) => (<PricingCard card={ card } key={ card.id }></PricingCard>))}
            </div>

        </div>

    );
};

export default Pricing;