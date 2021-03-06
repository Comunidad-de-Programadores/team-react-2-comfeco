import React from 'react';
import { useHistory } from 'react-router';
import { Actividades } from './Actividades';
import { BannerInsignias } from './BannerInsignias';
import BannerButtons from './BannerButtons';

export const Profile = () => {
   const history = useHistory();

   const handleEditProfile = () => {
      history.push('/home/profile');
   };
   return (
      <div className="profile">
         <BannerButtons />
         <div>
            Componente perfil Izquierda
            <a onClick={handleEditProfile}> Editar perfil </a>
            <BannerInsignias />
         </div>
         <Actividades />

         <div>Componente Eventos Derecha</div>
      </div>
   );
};
