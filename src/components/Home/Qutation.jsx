import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Quatation.css';

const Quatation = () => {
  const quotes = [
    {
      img: "https://lh3.googleusercontent.com/pw/AP1GczPzbj9QRm2EbQswD7cLdz606-2kvYB20Q0deg1edsb7sfR_rTdl2z5AJtNEvyGN9i_LxmEWUUW66mgUNmbYPn0UPGsMME62s6i3ywSPTMv2jmHgPqmIXANRhFiyr1-8HWeaAr2mBAb3VL1colSz9cUa=w960-h720-s-no",
      name: "Dr. Wajeeha Al-Bahrana",
      position: "Vice President, Bahrain Women Association for Human Development",
      quote: "The most important thing in life is to learn how to give out love, and let."
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AP1GczPzbj9QRm2EbQswD7cLdz606-2kvYB20Q0deg1edsb7sfR_rTdl2z5AJtNEvyGN9i_LxmEWUUW66mgUNmbYPn0UPGsMME62s6i3ywSPTMv2jmHgPqmIXANRhFiyr1-8HWeaAr2mBAb3VL1colSz9cUa=w960-h720-s-no",
      name: "Dr. Wajeeha Al-Bahrana",
      position: "Vice President, Bahrain Women Association for Human Development",
      quote: "The most important thing in life is to learn how to give out love, and let."
    }
  ];

  return (
    <div className="testimonial-container">
      <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {quotes.map((quote, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <div className="testimonial-content">
                <img src={quote.img} alt={quote.name} className="testimonial-image" />
                <div className="testimonial-text">
                  <p className="testimonial-name">{quote.name}</p>
                  <p className="testimonial-position">{quote.position}</p>
                  <blockquote className="testimonial-quote">{quote.quote}</blockquote>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    </div>
  );
};

export default Quatation;
