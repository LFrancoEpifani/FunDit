import React, { useState, useRef, useEffect } from 'react';
import Festival from '../../assets/artFestival.jpeg';
import Music from '../../assets/teatro.jpg';
import artShow from '../../assets/microfono.jpg';

export default function Main() {
  const photos = [artShow, Music, Festival];
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden">
      <div ref={sliderRef} className="h-full relative">
        {photos.map((slide, index) => (
          <div
            key={index}
            className={`absolute transition-all duration-1000 ease-in-out transform  ${
              currentIndex === index ? 'opacity-100 scale-100 ' : 'opacity-0 scale-90'
            }`}
          >
            <img src={slide} alt={`Slide ${index + 1}`} className="w-full h-screen object-fill"/>
            {/* Optional overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
