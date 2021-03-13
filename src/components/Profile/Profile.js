import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router';
import { Actividades } from './Actividades';
import { BannerInsignias } from './BannerInsignias';
import BannerButtons from './BannerButtons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AuthContext } from '../../context/AuthContext';

export const Profile = () => {
   const history = useHistory();

   const handleEditProfile = () => {
      history.push('/home/profile');
   };
   const { user } = useContext(AuthContext);

   console.log(user);
   return (
      <>
         {(user?.logged) && (
            <div className="profile">
               <BannerButtons />
               <div>
                  <div className='profile-container'>
                     <div className='profile-image'>
                        <img src={user.picture.thumbnail} />
                     </div>
                     <div className='profile-name-box'>
                        <div className='profile-name'>{user.name}</div>
                        <div className='profile-edit' onClick={handleEditProfile}>
                           <FontAwesomeIcon icon={faExternalLinkAlt} />
                        </div>
                     </div>
                     <div className='profile-title'>Frontend Developer</div>
                     <div className='profile-content'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente facilis iure veniam dolor, ipsam cupiditate at quae ex, non molestias quas eveniet dignissimos! Dolorem eum totam possimus praesentium vitae aliquam!
               </div>
                  </div>
                  <a onClick={handleEditProfile}> Editar perfil </a>
                  <BannerInsignias />
               </div>
               <Actividades />

               <div>Componente Eventos Derecha</div>
            </div>
         )}
      </>
   );
};
