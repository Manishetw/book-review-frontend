import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import bookImage from '../assets/images/book.jpeg';  // Adjust the path according to your folder structure

const BookDetails = () => {
    const book = {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classic Fiction",
        description: "A novel about the American dream and the roaring twenties.",
        image:bookImage,
        reviews: [
            { user: "Alice", comment: "A masterpiece!" },
            { user: "Bob", comment: "Loved the symbolism." }
        ]
    };

    return (
        <Container className="mt-4">
            <Row>
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src={book.image} />
                    </Card>
                </Col>
                <Col md={8}>
                    <h2>{book.title}</h2>
                    <h5 className="text-muted">by {book.author}</h5>
                    <p><strong>Genre:</strong> {book.genre}</p>
                    <p>{book.description}</p>
                    <Button variant="primary">Buy Now</Button>
                </Col>
            </Row>
            
            <Row className="mt-4">
                <Col>
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
        </Container>
    );
};

export default BookDetails;
