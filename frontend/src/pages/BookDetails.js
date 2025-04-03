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
};

export default BookDetails;
