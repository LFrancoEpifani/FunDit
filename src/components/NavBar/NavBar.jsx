import { Icon } from '@iconify/react';
import Logo from '../../assets/FunDit.png'
import { useState } from 'react';
import BurgerContent from '../BurgerContent/BurgerContent';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className='bg-black w-full'>
      <nav className= 'p-3 navbar flex items-center justify-around '>
        <Icon onClick={toggleMenu}
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

      {isOpen && <BurgerContent className="transition-all duration-500 ease-in" onClose={closeMenu} />}
    </div>
  );
}
