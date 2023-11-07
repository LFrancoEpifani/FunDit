import React from 'react';
import { Icon } from '@iconify/react';

export default function UploadModal({ closeModal }) {
  return (
    // Overlay container with a slight dark background
    <div className='max-w-max h-full p-4 flex justify-center items-center'>
      {/* Modal container with a subtle shadow and rounded corners */}
      <div className='bg-white shadow-lg rounded-lg w-full sm:w-1/2 lg:w-1/3'>
        
        {/* Modal header with a subtle gradient and padding */}
        <div className='flex justify-between items-center bg-gradient-to-r from-black to-gray-600 p-4 rounded-t-lg'>
          <button
            onClick={closeModal}
            className='text-white text-lg'
          >
            <Icon icon="iconamoon:close-bold" />
          </button>
          <h2 className='text-white text-lg font-bold'>Crear evento</h2>
          <button className='text-white text-lg'>
            <Icon icon='eva:arrow-ios-forward-fill' />
          </button>
        </div>

        {/* Horizontal divider */}
        <hr className='border-t border-gray-200' />

        {/* Content area with larger padding */}
        <div className='p-8 text-center flex justify-center items-center flex-col '>
          {/* Upload icon with a primary color */}
          <Icon className='text-7xl' icon='ic:sharp-cloud-upload' color='gray' />
          <h3 className='text-xl font-bold mt-4'>Carga el archivo</h3>
          <p className='text-gray-500'>Arrastra y suelta tu archivo aquí o haz clic para seleccionar un archivo</p>
          
          {/* Upload button */}
          <button className='sm: py-2 px-4 bg-gradient-to-r from-black to-gray-600 text-white rounded-md transition duration-300 m-6'>
            Subir archivo
          </button>
        </div>
      </div>
    </div>
  );
}
