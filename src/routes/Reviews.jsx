import React, { useState } from "react";
import { Container, Row, Col, Card, Pagination } from "react-bootstrap";

const Reviews = () => {
  const reviewsPerPage = 6; // Number of reviews per page
  const [currentPage, setCurrentPage] = useState(1);

  const reviews = [
    // Reviews for Page 1
    {
      firstName: "John",
      tier: "Tier 1",
      rating: 4,
      review: "Great service and affordable pricing!",
    },
    {
      firstName: "Jane",
      tier: "Tier 2",
      rating: 5,
      review: "The best wedding planning experience ever!",
    },
    {
      firstName: "David",
      tier: "Tier 3",
      rating: 3,
      review: "Could use some improvement in certain areas.",
    },
    // Add more reviews for Page 1

    // Reviews for Page 2
    {
      firstName: "Sarah",
      tier: "Tier 1",
      rating: 4,
      review: "Highly recommend their services!",
    },
    {
      firstName: "Michael",
      tier: "Tier 2",
      rating: 5,
      review: "Exceeded my expectations!",
    },
    {
      firstName: "Emily",
      tier: "Tier 3",
      rating: 4,
      review: "Professional and attentive to detail.",
    },
    // Add more reviews for Page 2

    // Reviews for Page 3
    {
      firstName: "Alex",
      tier: "Tier 1",
      rating: 3,
      review: "Decent service but needs improvement.",
    },
    {
      firstName: "Sophia",
      tier: "Tier 2",
      rating: 5,
      review: "Absolutely amazing! Couldn't be happier.",
    },
    {
      firstName: "Daniel",
      tier: "Tier 3",
      rating: 4,
      review: "Great value for the price.",
    },
    // Add more reviews for Page 3
  ];

  // Calculate total number of pages based on reviews length and reviewsPerPage
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  // Get the reviews to display for the current page
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container>
      <h2 className="text-center mb-4">Reviews</h2>
      <Row>
        {currentReviews.map((review, index) => (
          <Col md={4} key={index}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>{review.firstName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Tier: {review.tier}
                </Card.Subtitle>
                <Card.Text>{renderStarRating(review.rating)}</Card.Text>
                <Card.Text>{review.review}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Pagination className="justify-content-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </Container>
  );
};

// Helper function to render star rating
const renderStarRating = (rating) => {
  const stars = [];

  for (let i = 0; i < rating; i++) {
    stars.push(
      <span key={i} className="star">
        &#9733;
      </span>
    );
  }

  return stars;
};

export default Reviews;
