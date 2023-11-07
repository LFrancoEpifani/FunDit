import React from 'react';
import profile from '../../assets/fotoperfil.png';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import UploadModal from '../UploadModal/UploadModal';

export default function BurgerContentLogged({ isOpen, openModal, onClose }) {
  
  const [modalVisible, setModalVisible] = useState(false);

  const handlePublication = () => {
    setModalVisible(true);
    openModal(); 
  };

  const closeModal = () => {
    setModalVisible(false);
    onClose(); 
  };

  return (
    <div className='bg-opacity-30 bg-black fixed top-0 left-0 h-screen w-screen flex justify-center items-center z-50'>
     <div className={`${
  modalVisible ? 'bg-opacity-30 w-full' : ''
} bg-white h-screen fixed top-0 left-0`}>
        {modalVisible && <UploadModal closeModal={closeModal} />}
        <div className=''>
          <Icon onClick={onClose} className='text-4xl ml-auto my-1 mr-1 bg-black rounded-full ' icon='iconamoon:close-thin' color='white'/>
        </div>
        <div className='flex items-center p-2 gap-2 m-4'>
          <img className='object-cover border-2 border-white rounded-full w-12 h-12 ' src={profile} alt="" />
          <h2 className='font-bold text-lg'>Luciano Epifani</h2>
        </div>
        <div className='px-4 py-2'>
          {[
            { icon: 'mdi:home-outline', text: 'Inicio' },
            { icon: 'mdi:calendar', text: 'Eventos' },
            { icon: 'mdi:ticket-outline', text: 'Entradas' },
            { icon: 'ic:outline-plus', text: 'Publicación', action: handlePublication },
            { icon: 'ri:user-line', text: 'Perfil' },
            { icon: 'material-symbols:login-sharp', text: 'Cerrar sesión' },
          ].map((item, index) => (
            <button
              key={index}
              className='text-xl flex items-center w-full gap-4 p-3 rounded-lg hover:bg-gray-100 transition-colors my-1'
              onClick={item.action}
            >
              <div className='bg-black rounded-full w-10 h-10 flex justify-center items-center'>
                <Icon className='text-2xl' icon={item.icon} color='white' />
              </div>
              <span className='font-semibold'>{item.text}</span>
            </button>
          ))}
        </div>
      </div>
      {modalVisible && <UploadModal closeModal={closeModal} />}
    </div>
  );
}
