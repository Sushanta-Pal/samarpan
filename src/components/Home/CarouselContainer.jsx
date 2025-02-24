import React, { useState, useEffect } from "react";
import "./MyCarousel.css"; 
import logo from '../../assets/logo.jpg'

const MyCarousel = () => {
  const description = "Ek Soch Ek Biswas";
  const images = [
    "https://lh3.googleusercontent.com/pw/AP1GczPzbj9QRm2EbQswD7cLdz606-2kvYB20Q0deg1edsb7sfR_rTdl2z5AJtNEvyGN9i_LxmEWUUW66mgUNmbYPn0UPGsMME62s6i3ywSPTMv2jmHgPqmIXANRhFiyr1-8HWeaAr2mBAb3VL1colSz9cUa=w960-h720-s-no",
    "https://lh3.googleusercontent.com/pw/AP1GczOMyTJC-OiH7kRQmshzP6stbOKg8PGgJ62wkgqWGlPFHji_p4qDlVBlp67r2nyCMi4x3FgyqKIBYyksBM9JbKjVbth5QBS9vS_zAXr4LEjyQrsfZgCHzmJJfTiuDd3lZMOfhC_9d2Wmol2mXiRWd1sj=w960-h720-s-no",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length === 0) return; // Prevents errors if the images array is empty
  
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
  
    return () => clearInterval(interval);
  }, [images.length]); // Added images.length as a dependency
  

  return (
    <div className="carousel-container-home">
      <div className="carousel" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div className="slider" key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <div className="slide-content">
        <img src={logo} alt="samrpan logo" className="logo-home"/>
        <h1 className="animated-title">
          <span>SAMARPAN</span>
        </h1>
        <p className="animated-description">{description}</p>
        <button>Join Us</button>
      </div>
    </div>
  );
};

export default MyCarousel;