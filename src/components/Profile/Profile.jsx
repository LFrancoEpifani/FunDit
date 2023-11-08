import { Icon } from '@iconify/react';
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
        <article className='flex items-end gap-2'>
            {user?.picture && <img className='rounded-full border border-black w-12' src={user.picture} alt={user?.name}/>}
            <h2>{user?.name}</h2>
        </article>
    )
 
    );
};

export default Profile;
