import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import Logo from '../../assets/FunDit.png';
import BurgerContentLogged from '../BurgerContent/BurgerContentLogged';

export default function NavBar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    // The bg-opacity-80 class applies opacity to the background color only
    <div className='bg-black w-full'>
      {/* Add additional padding and container to center navbar content */}
      <div className='sm:7xl mx-auto px-2 sm:px-6 lg:px-8'>
        <nav className='p-3 navbar flex items-center justify-around  '>
          <Icon
            onClick={toggleMenu}
            className='text-2xl '
            icon='material-symbols:menu'
            color='white'
          />

          <img className='w-18 h-6' src={Logo} alt='FunDit Logo' />
          <input
            className='rounded-md border border-black bg-white w-40 h-7'
            type='text'
            placeholder='Buscar...'
          />
          <div className='bg-white w-6 h-6 rounded-full flex items-center justify-center'>
            <Icon className='text-xl' icon='heroicons:user-20-solid' />
          </div>
        </nav>
      </div>

      {isMenuOpen && (
        <BurgerContentLogged
          isMenuOpen={isMenuOpen}
          onClose={() => setMenuOpen(false)}
        />
      )}
    </div>
  );
}
