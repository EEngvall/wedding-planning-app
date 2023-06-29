import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import VendorListing from "../components/vendorListing";
import photographerImg from "../assets/photographer.jpg";
import catererImg from "../assets/Caterer.jpg";
import venueImg from "../assets/venue.jpg";

const Vendors = () => {
  const vendors = [
    {
      name: "Jake Owens Photography",
      rating: 4.5,
      price: "$$$",
      type: "Photographer",
      image: photographerImg,
    },
    {
      name: "Jack's Catering",
      rating: 3.8,
      price: "$$",
      type: "Caterer",
      image: catererImg,
    },
    {
      name: "The Garden",
      rating: 4.2,
      price: "$$$$",
      type: "Venue",
      image: venueImg,
    },
    // Add more vendors
  ];

  return (
    <Container>
      <h2 className="text-center mb-4">Vendors</h2>
      <Row>
        {vendors.map((vendor, index) => (
          <Col md={4} key={index}>
            <VendorListing {...vendor} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Vendors;
