import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import Flyer_4 from '../../assets/Flyer_4.jpg';

export default function Card() {
  
  const [isRotated, setIsRotated] = useState(false);
  const [opacity, setOpacity] = useState(1);

  const toggleImage = () => {
    setIsRotated(!isRotated);
    setOpacity(isRotated ? 1 : 0.5);
  };

  return (

      <div className={`w-full relative bg-black transition duration-1000 ${isRotated ? 'bg-opacity-100' : 'bg-opacity-0'}`}>
      <div
        className={`image-wrapper  ${isRotated ? 'rotated ' : ''}`}
        onClick={toggleImage}
      >
        <div className="image bg-black" style={{ opacity }}>
          <img
            src={Flyer_4}
            alt="Imagen"
            className="w-full h-full"
          />
           {isRotated && (
            <div className=''>
              <h1 className=""></h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
