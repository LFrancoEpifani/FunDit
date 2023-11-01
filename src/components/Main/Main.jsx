import React, { useState, useRef } from 'react';
import Festival from '../../assets/artFestival.jpeg';
import Music from '../../assets/teatro.jpg';
import artShow from '../../assets/microfono.jpg';

export default function Main() {
  const slides = [Festival, Music, artShow];

  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const handleTouchStart = (e) => {
    const touchStartX = e.touches[0].clientX;
    const deltaX = touchStartX - sliderRef.current.getBoundingClientRect().left;

    if (deltaX < sliderRef.current.clientWidth / 2 && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (deltaX >= sliderRef.current.clientWidth / 2 && currentIndex < slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="w-full m-auto relative">
      <div
        ref={sliderRef}
        onTouchStart={handleTouchStart}
        className="w-full h-full bg-cover bg-center duration-500"
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Slide ${index + 1}`}
            style={{
              display: currentIndex === index ? 'block' : 'none',
              width: '100%',
              height: '95vh',
            }}
          />
        ))}
      </div>
    </div>
  );
}
