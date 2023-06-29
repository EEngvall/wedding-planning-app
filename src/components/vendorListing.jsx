import React from "react";
import { Card, Badge } from "react-bootstrap";
import "../Styles/vendors.css";

const VendorListing = ({ name, rating, price, type, image }) => {
  return (
    <Card className="mb-4 vendor-card">
      <Card.Img variant="top" src={image} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <Badge bg="primary text-black">{type}</Badge>
          <Badge bg="secondary text-black" className="ms-2">
            Rating: {rating}
          </Badge>
          <Badge bg="info  text-black" className="ms-2">
            Price: {price}
          </Badge>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default VendorListing;
