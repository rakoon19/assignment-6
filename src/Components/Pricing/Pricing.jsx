import PricingHeader from "./PricingHeader";
import PricingCard from "./PricingCard";
import pricing from '../../../JSON/pricing.json'

const Pricing = () => {
    return (
        <div className="flex flex-col gap-8 md:gap-12 lg:gap-15 py-12 md:py-20 lg:py-30 text-center px-6 md:px-12">

            <PricingHeader></PricingHeader>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-7.5 justify-center">
                { pricing.map((card) => (<PricingCard card={ card } key={ card.id }></PricingCard>))}
            </div>

        </div>

    );
};

export default Pricing;