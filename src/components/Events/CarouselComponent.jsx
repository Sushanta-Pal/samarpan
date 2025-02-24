import React from 'react';
import { Carousel } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import './CarouselComponent.css'

const CarouselComponent = () => {
  const location = useLocation();
  const { images = [], title = '', date = '', content = '' } = location.state || {};
  console.log('Received images in carousel:', images); // Debugging

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">{title}</h2>
  <Carousel>
    {images.map((image, index) => {
      const imageUrl = typeof image === 'object' ? image.image || '' : image;
      return (
        <Carousel.Item key={index}>
        <div className="carousel-content">
          <img className="carousel-image" src={imageUrl} alt={`Slide ${index}`} />
        </div>
      </Carousel.Item>
      
      );
    })}
  </Carousel>
  <div className="carousel-text">
            <p className="carousel-date"><strong>Date:</strong> {date}</p>
            <p className="carousel-description">{content}</p>
          </div>
</div>

  );
};

export default CarouselComponent;
