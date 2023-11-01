import React from 'react';
import profile from '../../assets/fotoperfil.png';
import { Icon } from '@iconify/react';

export default function BurgerContent({ onClose }) {
  return (
    <div className='bg-opacity-60 bg-black fixed top-0 left-0 h-screen w-screen flex justify-center items-center z-50'>
      <div className='bg-white h-screen fixed top-0 left-0 '>
      <div>
            <Icon onClick={onClose} className='text-4xl ml-auto my-1 mr-1' icon='iconamoon:close-thin' />
          </div>
        <div className='px-2 pb-4 flex items-end gap-2'>
          <img className='object-cover border-black rounded-full w-12 h-12' src={profile} alt="" />
          <h2 className='font-bold text-sm'>Luciano Epifani</h2>
        </div>
        <div className='sections'>
        <div className='flex items-center gap-6 mb-4 '>
                <div className='border border-black bg-black rounded-full w-10 h-10 flex justify-center items-center'>
                    <Icon className='text-3xl' icon="ic:round-home" color='white'/>
                </div>
                <h3 className=''>Inicio</h3>
            </div>
            <div className='flex items-center gap-6 mb-4'>
                <div className='border border-black bg-black rounded-full w-10 h-10 flex justify-center items-center'>
                    <Icon className=' text-2xl' icon="mdi:events" color='white'/>
                </div>
                <h3 className=''>Eventos</h3>
            </div>
            <div className='flex items-center gap-6 mb-4'>
            <div className='border border-black bg-black rounded-full w-10 h-10 flex justify-center items-center'>
                <Icon className=' text-2xl' icon="mdi:ticket-outline" color='white'/>
            </div>
                <h3 className=''>Entradas</h3>
            </div>
            <div className='flex items-center gap-6 mb-4'>
            <div className='border border-black bg-black rounded-full w-10 h-10 flex justify-center items-center'>
                <Icon className=' text-2xl' icon="material-symbols:settings-outline" color='white'/>
            </div>
                <h3 className=''>Contacto</h3>
            </div>
            <div className='flex items-center gap-6 mb-4'>
            <div className='border border-black bg-black rounded-full w-10 h-10 flex justify-center items-center'>
                <Icon className='text-2xl' icon="ri:user-line" color='white'/>
            </div>
                <h3 className=''>Perfil</h3>
            </div>
            <div className='flex items-center gap-6 mb-4'>
            <div className='border border-black bg-black rounded-full w-10 h-10 flex justify-center items-center'>
                <Icon className='text-2xl' icon="material-symbols:login-sharp" color='white'/>
            </div>
                <h3 className=''>Cerrar sesión</h3>
            </div>
        </div>
        </div>

    </div>
  );
}
