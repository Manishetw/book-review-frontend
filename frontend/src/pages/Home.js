import React from 'react';
import { Carousel } from 'react-bootstrap';
import bookImage from '../assets/images/backimageslide.png';
import backImageSlide from '../assets/images/backimageslide.png';
import book1 from '../assets/images/book1.jpg';
import book2 from '../assets/images/book2.jpg';
import book3 from '../assets/images/book3.jpg';
import book4 from '../assets/images/book4.jpg';
import book5 from '../assets/images/book5.jpg';
import book6 from '../assets/images/book6.jpg';
import book7 from '../assets/images/book7.jpg';
import book8 from '../assets/images/book8.jpg';
import book9 from '../assets/images/book9.jpg';
import book10 from '../assets/images/book10.jpg';
import book11 from '../assets/images/book11.jpg';
import book12 from '../assets/images/book12.jpg';

const Home = () => {
    return (
        <div>
             <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h1>Welcome to the Book Review App</h1>
            <p>Discover and review your favorite books!</p>
            </div>
        <Carousel>
            <Carousel.Item>
                <div style={{ position: 'relative', color: '#fff', textAlign: 'center' }}>
                    <img
                        className='d-block w-100'
                        src={backImageSlide}
                        alt='Background Image'
                        style={{ height: '400px', objectFit: 'cover' }}
                    />
                    <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translate(-50%, -10%)', color: '#000' }}>
                        <h2>Featured Books</h2>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                            <img src={book1} alt='Book 1' style={{ height: '200px' }} />
                            <img src={book2} alt='Book 2' style={{ height: '200px' }} />
                            <img src={book3} alt='Book 3' style={{ height: '200px' }} />
                            <img src={book4} alt='Book 4' style={{ height: '200px' }} />
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div style={{ position: 'relative', color: '#fff', textAlign: 'center' }}>
                    <img
                        className='d-block w-100'
                        src={bookImage}
                        alt='Background Image'
                        style={{ height: '400px', objectFit: 'cover' }}
                    />
                    <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translate(-50%, -10%)', color: '#000' }}>
                        <h2>Recommended Reads</h2>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                            <img src={book5} alt='Book 5' style={{ height: '200px' }} />
                            <img src={book6} alt='Book 6' style={{ height: '200px' }} />
                            <img src={book7} alt='Book 7' style={{ height: '200px' }} />
                            <img src={book8} alt='Book 8' style={{ height: '200px' }} />
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div style={{ position: 'relative', color: '#fff', textAlign: 'center' }}>
                    <img
                        className='d-block w-100'
                        src={backImageSlide}
                        alt='Background Image'
                        style={{ height: '400px', objectFit: 'cover' }}
                    />
                    <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translate(-50%, -10%)', color: '#000' }}>
                        <h2>Popular Choices</h2>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                            <img src={book9} alt='Book 9' style={{ height: '200px' }} />
                            <img src={book10} alt='Book 10' style={{ height: '200px' }} />
                            <img src={book11} alt='Book 11' style={{ height: '200px' }} />
                            <img src={book12} alt='Book 12' style={{ height: '200px' }} />
                        </div>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
        
     </div>
    );
};

export default Home;
