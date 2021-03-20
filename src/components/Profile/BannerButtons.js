import React from 'react';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faUsers, faUser, faMedal, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const BannerButtons = () => {
   const history = useHistory();

   const handleEvents = () => {
      history.push('/home/eventos');
   };
   return (
      <>
         <ul className="bannerbutton">
            <li className="bannerbutton-item">
               <a href='#'>
                  <FontAwesomeIcon icon={faUser} />
                  Mi Perfil
               </a>
            </li>
            <li className="bannerbutton-item">
               <a onClick={handleEvents}>
                  <FontAwesomeIcon icon={faMedal} />
                  Insignias
               </a>
            </li>
            <li className="bannerbutton-item">
               <a onClick={handleEvents}>
                  <FontAwesomeIcon icon={faUsers} />
                  Grupos
               </a>
            </li>
            <li className="bannerbutton-item">
               <a onClick={handleEvents}>
                  <FontAwesomeIcon icon={faCalendarAlt} />
                  Eventos
               </a>
            </li>
         </ul>
      </>
   );
};

export default BannerButtons;
