import React from 'react';
import { Icon } from '@iconify/react';

export default function UploadModal({ closeModal  }) {

  const [nextModal, setNextModal] = useState(false);

  const changeModal = () =>{
    setNextModal(!nextModal)
  }

  return (
    // Overlay container with a slight dark background
    <div className='w-full h-full p-4 flex justify-center items-center'>
      {/* Modal container with a subtle shadow and rounded corners */}
      <div className='rounded-lg mx-auto p-6 max-w-md sm:max-w-lg'>
        
        {/* Modal header with a subtle gradient and padding */}
        <div className='flex justify-between items-center bg-gray-200 p-4 rounded-t-lg'>
          <button
            onClick={closeModal}
            className='text-blakc text-lg'
          >
            <Icon icon="iconamoon:close-bold" />
          </button>
          <h2 className='text-blakc text-lg font-bold'>Crear evento</h2>
          <button className='text-blakc text-lg' onClick={changeModal}>
            <Icon icon='eva:arrow-ios-forward-fill' />
          </button>
        </div>

        {/* Horizontal divider */}
        <hr className='border-t border-gray-500' />

        {/* Content area with larger padding */}
        <div className='p-8 text-center flex justify-center items-center flex-col bg-gray-200 '>
          {/* Upload icon with a primary color */}
          <Icon className='text-7xl' icon='ic:sharp-cloud-upload' color='gray' />
          <h3 className='text-md font-bold mt-4'>Carga el archivo</h3>
          <p className='text-gray-500 text-sm'>Arrastra y suelta tu archivo aquí o haz clic para seleccionar un archivo</p>
          
          {/* Upload button */}
          <button className='py-2 px-4 bg-black text-white rounded-md transition duration-300 m-6'>
            Subir archivo
          </button>
        </div>
      </div>
    </div>
  );
}
