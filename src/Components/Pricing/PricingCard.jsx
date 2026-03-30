

const PricingCard = ({ card }) => {
    return (
  <div key={card.id} className="">
    <h2>{card.name}</h2>
    <p>{card.description}</p>
    <p>${card.price}/{card.billing}</p>

    {card.popular && <span>{card.badge}</span>}

    <ul>
      {card.features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>

    <button>{card.buttonText}</button>
  </div>
    );
};

export default PricingCard;