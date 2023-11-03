import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import Flyer_4 from '../../assets/Flyer_4.jpg';

export default function Card() {
  
  const [isRotated, setIsRotated] = useState(false);
  

  const toggleImage = () => {
    setIsRotated(!isRotated);
  };

  return (

      <div className="w-full relative transition duration-1000">
      <div
        className={`image-wrapper  ${isRotated ? 'rotated ' : ''}`}
        onClick={toggleImage}
      >
        <div className="image">
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
