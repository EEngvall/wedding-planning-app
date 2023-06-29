import { React } from "react";
import { Card } from "react-bootstrap";

const PricingTier = ({ title, price, features, isLarger }) => {
  return (
    <div>
      <Card className="mb-4 pricing-card">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text className="text-center">
            <span className="price">{price}</span>
            <ul className="features-list">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PricingTier;
