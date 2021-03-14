import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faUsers, faUser, faMedal, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const BannerButtons = () => {
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
               <button className="btn btn-white">
                  <FontAwesomeIcon icon={faMedal} />
                  Insignias
               </button>
            </li>
            <li className="bannerbutton-item">
               <button className="btn btn-white">
                  <FontAwesomeIcon icon={faUsers} />
                  Grupos
               </button>
            </li>
            <li className="bannerbutton-item">
               <button className="btn btn-white">
                  <FontAwesomeIcon icon={faCalendarAlt} />
                  Eventos
               </button>
            </li>
         </ul>
      </>
   );
};

export default BannerButtons;
