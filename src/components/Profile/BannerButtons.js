import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faAward } from '@fortawesome/free-solid-svg-icons';

const BannerButtons = () => {
   return (
      <>
         <ul className="bannerbutton">
            <li className="bannerbutton-item">
               <button className="btn btn-white">
                  <FontAwesomeIcon icon={faUser} />
                  Mi Perfil
               </button>
            </li>
            <li className="bannerbutton-item">
               <button className="btn btn-white">
                  <FontAwesomeIcon icon={faAward} />
                  Insignias
               </button>
            </li>
            <li className="bannerbutton-item">
               <button className="btn btn-white">Grupos</button>
            </li>
            <li className="bannerbutton-item">
               <button className="btn btn-white">Eventos</button>
            </li>
         </ul>
      </>
   );
};

export default BannerButtons;
