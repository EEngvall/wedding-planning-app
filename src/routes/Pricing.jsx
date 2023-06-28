import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PricingTier from "../components/pricingTier";
import "../Styles/pricing.css";

const PricingPage = () => {
  const tiers = [
    {
      title: "Tier 1",
      price: "$9.99/month",
      features: ["Feature 1", "Feature 2", "Feature 3"],
      isLarger: false,
    },
    {
      title: "Tier 3",
      price: "$19.99/month",
      features: ["Feature 1", "Feature 2", "Feature 3"],
      isLarger: true,
    },
    {
      title: "Tier 2",
      price: "$14.99/month",
      features: ["Feature 1", "Feature 2", "Feature 3"],
      isLarger: false,
    },
  ];

  return (
    <Container>
      <h2 className="text-center mb-4">Pricing</h2>
      <Row className="justify-content-center">
        {tiers.map((tier, index) => (
          <Col sm={4} className="text-center" key={index}>
            <PricingTier {...tier} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PricingPage;
