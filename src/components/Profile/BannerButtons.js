import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faUsers, faUser, faMedal, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const BannerButtons = () => {
   const history = useHistory();
   const handleEvents = () => {
      history.push('/home/eventos');
   };
   return (
      <>
         <div className="bannerbutton">
            <NavLink exact to='/home' className="bannerbutton-item" activeClassName='active-nav'>
               <a className='bannerbutton-item__nav' >
                  <FontAwesomeIcon icon={faUser} />
                  <p>Mi Perfil</p>
               </a>
            </NavLink>
            <NavLink exact to='/' className="bannerbutton-item" activeClassName='active-nav'>
               <a onClick='' to='/' className='bannerbutton-item__nav'>
                  <FontAwesomeIcon icon={faMedal} />
                  <p>Insignias</p>
               </a>
            </NavLink>
            <NavLink exact to='/' className="bannerbutton-item" activeClassName='active-nav'>
               <a onClick=''  className='bannerbutton-item__nav'>
                  <FontAwesomeIcon icon={faUsers} />
                  <p>Grupos</p>
               </a>
            </NavLink>
            <NavLink exact to='/home/eventos' className="bannerbutton-item" activeClassName='active-nav'>
               <a onClick={handleEvents} className='bannerbutton-item__nav'>
                  <FontAwesomeIcon icon={faCalendarAlt} />
                  <p>Eventos</p>
               </a>
            </NavLink>
         </div>
      </>
   );
};

export default BannerButtons;
