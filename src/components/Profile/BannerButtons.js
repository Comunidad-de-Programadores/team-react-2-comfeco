import React from 'react';
import { Link } from 'react-router-dom';
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
               <Link to="home/groups" className="btn btn-white">
                  Grupos
               </Link>
            </li>
            <li className="bannerbutton-item">
               <button className="btn btn-white">Eventos</button>
            </li>
         </ul>
      </>
   );
};

export default BannerButtons;
