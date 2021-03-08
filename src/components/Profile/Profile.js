import React from 'react';
import { useHistory } from 'react-router';
import { Actividades } from './Actividades';
import { BannerInsignias } from './BannerInsignias';
import BannerButtons from './BannerButtons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Profile = () => {
   const history = useHistory();

   const handleEditProfile = () => {
      history.push('/home/profile');
   };
   console.log(faExternalLinkAlt);
   return (
      <div className="profile">
         <BannerButtons />
         <div>
            <div className='profile-container'>
               <div className='profile-image'>
                  <img></img>
               </div>
               <div className='profile-name'>Usuario
                  <div className='profile-edit' onClick={handleEditProfile}>
                     <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </div>
               </div>
               <div className='profile-title'>Front End Dev</div>
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
   );
};
