import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import Logo from '../../assets/FunDit.png';
import BurgerContent from '../BurgerContent/BurgerContent';
import BurgerContentLogged from '../BurgerContent/BurgerContentLogged'; // Asegúrate de importar este componente
import Login from './Login';
import { useAuth0 } from "@auth0/auth0-react"; // Importa useAuth0 aquí también

export default function NavBar() {

  const { isAuthenticated } = useAuth0(); // Utiliza useAuth0 para obtener el estado de autenticación
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className='bg-black w-full'>
      <div className='sm:7xl mx-auto px-2 sm:px-6 lg:px-8'>
        <nav className='p-3 navbar flex items-center justify-around'>
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
          <div>
            <Login />
          </div>
        </nav>
      </div>

      {isMenuOpen && (
        isAuthenticated ?
        <BurgerContentLogged
          isOpen={isMenuOpen}
          onClose={() => setMenuOpen(false)}
        />
        :
        <BurgerContent
          isMenuOpen={isMenuOpen}
          onClose={() => setMenuOpen(false)}
        />
      )}
    </div>
  );
}
