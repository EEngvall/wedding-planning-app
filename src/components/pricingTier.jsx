import React from "react";

const PricingTier = ({ title, price, features, isLarger }) => {
  const tierClassName = isLarger ? "pricing-model larger" : "pricing-model";

  return (
    <div className={tierClassName}>
      <h3 className="text-success">{title}</h3>
      <p className="text-info">{price}</p>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default PricingTier;
