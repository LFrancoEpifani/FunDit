import React from 'react';
import { Icon } from '@iconify/react';
import Flyer from '../../assets/Flyer_2.jpg'

export default function PublicationModal({closeModal}) {

  return (
    <div>
        <div className='w-full h-full relative m-auto p-1'>
            <div className='flex justify-between items-center bg-gray-200 p-3 rounded-t-lg '>
          <button
            className='text-black'
          >
            <Icon className='text-xl' icon="iconamoon:close-bold" onClick={closeModal}/>
          </button>
          <h2 className='text-blakc text-md font-bold'>Crear evento</h2>
          <button className='text-black '>
            <Icon className='text-xl' icon='eva:arrow-ios-forward-fill' />
          </button>
        </div>
        {/* Separación */}
        <div className='flex justify-around'>
                <div className='m-2 relative flex-grow'>
                    <Icon className='text-4xl bg-gray-200 rounded-full p-2 mb-2' icon="mdi:user" color='gray' />
                    <p className='text-sm text-gray-500 mb-4'>Descripción del evento...</p>
                    <div className='absolute bottom-0 left-0 right-0'>
                        <hr />
                        <div className='my-2 flex justify-between'>
                            <p className='text-gray-400'>Precio</p>
                            <Icon icon="ph:money-fill" color='#A1A1A2'/>
                        </div>
                        <div className='my-2 flex justify-between'>
                            <p className='text-gray-400'>Ubicación</p>
                            <Icon icon="mdi:location" color="#A1A1A2" />
                        </div>
                    </div>
                </div>
                <div>
                    <img className='w-44' src={Flyer} alt="" />
                </div>
            </div>
        </div>
    </div>
  );
}
