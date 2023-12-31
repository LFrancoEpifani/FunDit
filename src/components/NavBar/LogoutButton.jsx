import { Icon } from '@iconify/react';
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
        <div className=''>
        <button onClick={logout}>
        <p className='font-semibold'>Cerrar sesión</p>
        </button>
      </div>
    )
 
    );
};

export default LogoutButton;
