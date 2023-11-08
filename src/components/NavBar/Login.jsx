import { Icon } from '@iconify/react';
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
        <div className='bg-white w-6 h-6 rounded-full flex items-center justify-center'>
        <button onClick={loginWithRedirect}>
        <Icon className='text-xl' icon='heroicons:user-20-solid' />
        </button>
      </div>
    )
 
    );
};

export default LoginButton;
