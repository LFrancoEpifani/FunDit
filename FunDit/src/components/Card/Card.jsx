import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import Flyer_4 from '../../assets/Flyer_4.jpg';
import Flyer_3 from '../../assets/Flyer_3.jpg';
import Flyer_2 from '../../assets/Flyer_2.jpg';

export default function Card() {

    // Creamos un useState que contendrá un array con los indices de las tarjetas que se volteen
  const [flippedCards, setFlippedCards] = useState([]);
    // Definimos la función handleFlip que se encargará de manejar el efecto de volteo de tarjetas.
    // Toma como argumento el indice de la tarjeta
  const handleFlip = (index) => {
    // Verificamos si el índice ya está presente en el array flippedCards utilizando el método includes.
    if (flippedCards.includes(index)) {
        // Si está presente, singifica que se ha volteado, por lo que elimnamos del array el indice con el método filter.
      setFlippedCards(flippedCards.filter((item) => item !== index));
    } else {
        // Esto permite alternar el estado de volteo
      setFlippedCards([...flippedCards, index]);
    }
  };


  return (
    <div>
        {[{imagen: Flyer_3, titulo: 'BASS PORT' }, {imagen: Flyer_4, titulo: 'HIPSTER BEACH'}].map((card, index) => {

        <div key={index} className={`card my-6 p-4 ${flippedCards.includes(index) ? 'flipped' : 'unflipped'}`}>
          <div className='position relative border-2 border-black'>
            <img className='' src={card.imagen} alt="" />
            <div className='bg-white opacity-70 border border-black rounded-full w-10 h-10 position absolute top-0 right-0 m-4 flex items-center justify-center'>
              <button onClick={() => handleFlip()}>
                <Icon className='switch text-2xl' icon="icon-park:switch" />
              </button>
            </div>
          </div>
          <div className={` bg-black p-4 relative ${flippedCards.includes(index) ? 'back' : ''}`}>
            <h2 className='flyer_tittle text-center text-white text-lg'>{card.titulo}</h2>
          </div>
        </div>
      })}
    </div>
  );
}
