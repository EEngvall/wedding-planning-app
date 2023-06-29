import React from "react";
import { Container, Card, Button } from "react-bootstrap";

const LandingPage = () => {
  return (
    <Container className="text-center mt-5">
      <Card>
        <Card.Body>
          <Card.Title>Welcome to ModRoots</Card.Title>
          <Card.Text>A platform to plan your dream wedding</Card.Text>
          <Button variant="primary" size="lg">
            Get Started
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default LandingPage;
