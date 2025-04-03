<<<<<<< HEAD
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import bookImage from "../assets/images/book.jpeg"; // Adjust the path according to your folder structure

const BookDetails = () => {
  const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic Fiction",
    description: "A novel about the American dream and the roaring twenties.",
    image: bookImage,
    reviews: [
      { user: "Alice", comment: "A masterpiece!" },
      { user: "Bob", comment: "Loved the symbolism." },
    ],
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={book.image} />
          </Card>
        </Col>
        <Col md={8} style={{backgroundColor: "#bde3db" , padding: "20px",height: "80vh"}}>
          <h2>{book.title}</h2>
          <h5 className="text-muted">by {book.author}</h5>
          <p>
            <strong>Genre:</strong> {book.genre}
          </p>
          <p>{book.description}</p>
          <h4>Rate this Book</h4>
          <i class="fa-solid fa-star" style={{ color:"yellow"}}></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star-half-stroke"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <Col md={6} style={{ marginTop: "5px" }}>
            <Button variant="primary" style={{ marginRight: "10px" ,backgroundColor:"#095847"}}>
              vote
            </Button>
            <Button variant="primary" style={{ marginRight: "10px" ,backgroundColor: "#095847"}} >upvote</Button>
            <Button variant="primary"style={{ backgroundColor: "#095847"}}>Buy Now</Button>
          </Col>

          <h4>Reviews</h4>
          {book.reviews.map((review, index) => (
            <Card key={index} className="mb-2">
              <Card.Body>
                <strong>{review.user}:</strong> {review.comment}
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
      <Row className="mt-4"></Row>
      <Row className="mt-4">
        <Col md={6}></Col>
      </Row>
      <Row className="mt-4">
        <Col></Col>
      </Row>
    </Container>
  );
=======
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const BookDetails = () => {
    const location = useLocation();
    const { title, price, image } = location.state || {}; 

    return (
        <Container className="mt-4">
            <Row>
                <Col xs={12} md={4}>
                    <Card>
                        <Card.Img variant="top" src={image} />
                    </Card>
                </Col>
                <Col xs={12} md={8}>
                    <h2>{title}</h2>
                    <h5 className="text-muted">Price: {price}</h5>
                    <p><strong>Description:</strong> A detailed description of the book goes here.</p>
                    <Button variant="primary">Buy Now</Button>
                </Col>
            </Row>

            <Row className="mt-4">
                <Col>
                    <h4>Reviews</h4>
                    <Card>
                        <Card.Body>
                            <strong>Alice:</strong> A masterpiece!
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <strong>Bob:</strong> Loved the symbolism.
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
>>>>>>> 92705987b5ef72bfe6a575cc3c448a235dbda442
};

export default BookDetails;
