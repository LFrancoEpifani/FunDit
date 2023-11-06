import React, { useState, useRef, useEffect } from 'react';
import Festival from '../../assets/artFestival.jpeg';
import Music from '../../assets/teatro.jpg';
import artShow from '../../assets/microfono.jpg';



export default function Main() {
  const photos = [artShow, Music, Festival];
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const nextSlide = () => {
    if (currentIndex < photos.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <div className="w-full m-auto relative">
      <div
        ref={sliderRef}
        className="h-screen relative"
        style={{ overflow: 'hidden' }}
      >
        {photos.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full ${
              currentIndex === index ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-1000 ease-in-out`}
          >
            <img src={slide} alt={`Slide ${index + 1}`} className="main-img w-full h-full"/>
          </div>
        ))}
      </div>
    </div>
  );
}
