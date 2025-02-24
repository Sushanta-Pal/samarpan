import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './card.css';

const GOOGLE_SHEET_ID = '1fUWGd-i0Z60jfsEjCT186BdDspyeo-onglnafQYqOlA';
const SHEET_NAME = 'Events';
const API_URL = `https://opensheet.vercel.app/${GOOGLE_SHEET_ID}/${SHEET_NAME}`;

const Card = () => {
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation


    });

    // Fetch Data
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        console.log('Fetched Data:', response.data);
        console.log('Data Successfully fatched');

        // Format the fetched data
        const formattedData = response.data.map((card, index) => {
          const cleanedImageUrls = card.Image
            ? card.Image.split(/\s*,\s*/).map(url => url.trim())
            : [];

          return {
            id: card.id || index,
            title: card.title || 'No Title',
            date: card.date || 'No Date',
            content: card.contents || 'No Content',
            imageUrls: cleanedImageUrls,
          };
        });

        setCards(formattedData);
        AOS.refresh(); // Refresh AOS after setting data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Navigate to the carousel page
  const goCarousel = (card) => {
    navigate('/carousel', { 
      state: { 
        images: card.imageUrls, 
        title: card.title, 
        date: card.date, 
        content: card.content 
      } 
    });
  };

  return (
    <div className="image-card-container">
      {cards.length === 0 ? (
        <p>Loading...</p>
      ) : (
        cards.map((card, index) => (
          <div key={index} className="image-card" data-aos="zoom-in-up">
            {card.imageUrls.length > 0 && (
              <img 
                src={card.imageUrls[0]} 
                alt={card.title} 
                className="card-image"
                onClick={() => goCarousel(card)}
              />
            )}
            <h3 className="card-title">{card.title}</h3>
            <p className="card-date"><strong>Date:</strong> {card.date}</p>
            <p className="card-content">
              {card.content.length > 100 ? `${card.content.substring(0, 100)}...` : card.content}
            </p>
            <button className="view-more-btn" onClick={() => goCarousel(card)}>
              View More
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Card;
