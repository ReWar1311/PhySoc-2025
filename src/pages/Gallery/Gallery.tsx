import { useState, useEffect } from 'react';
import './Gallery.css';

import event1 from "../../assets/event.jpg";
import event2 from "../../assets/event.jpg";
import event3 from "../../assets/event.jpg";
import event4 from "../../assets/event.jpg";    
import event5 from "../../assets/event.jpg";

interface GalleryImages {
  [key: string]: string;
}


const Gallery = () => {
  //store images in an object
  const galleryImages: GalleryImages = { event1, event2, event3, event4, event5 };
  //-----------------------------------------------------------------------------------
  const images = Object.values(galleryImages);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev" | null>(null);

  const handleNext = () => {
    setDirection("next");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setDirection("prev");
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const getPreviousIndex = () => (currentIndex - 1 + images.length) % images.length;
  const getNextIndex = () => (currentIndex + 1) % images.length;

  useEffect(() => {
    if (direction) {
      const timer = setTimeout(() => {
        setDirection(null);
      }, 500); // Match the duration of CSS animation
      return () => clearTimeout(timer);
    }
  }, [direction]);

  return (
    <div className="gallery">
    <div className="carousel-container">
      <div className="carousel-images">
        <div className={`carousel-image previous ${direction === 'prev' ? 'slide-in-side-left' : ''}`}
          style={{ backgroundImage: `url(${images[getPreviousIndex()]})` }}
          onClick={handlePrev}
        ></div>
        <div className={`carousel-main-image scale-up ${direction === 'next' ? 'slide-in-from-right' : direction === 'prev' ? 'slide-in-from-left' : ''}`}>
          <div
            className="blurred-background"
            style={{ backgroundImage: `url(${images[currentIndex]})` }}
          ></div>
          <img
            src={images[currentIndex]}
            alt="Main display"
            className="main-image"
          />
        </div>
        <div className={`carousel-image next ${direction === 'next' ? 'slide-in-side-right' : ''}`}
          style={{ backgroundImage: `url(${images[getNextIndex()]})` }}
          onClick={handleNext}
        ></div>
      </div>
      <div className="carousel-controls">
        <button onClick={handlePrev} className="carousel-button left">&#9664;</button>
        <button onClick={handleNext} className="carousel-button right">&#9654;</button>
      </div>
    </div>
    </div>
  );
};

export default Gallery;
