import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'


import { AuthContext } from '../context/AuthContext';

import logo from '../assets/logo3.png';
import { startLogout } from '../actions/auth';

const Navegacion = () => {

   const itemsNav = ['Inicio', 'Comunidades', 'Talleres', 'Creadores de Contenido'];

   const { user, setUser } = useContext(AuthContext);

   const [active, setActive] = useState(false);
   const history = useHistory();




   const handleLogin = (e) => {
      e.preventDefault();
      history.push('/');
   };

   const handleLogout = (e) => {
      e.preventDefault();
      startLogout(setUser).then(() => history.push('/auth/login'));
      setActive(false);
   };


   const handleShowMenu = () => {

      setActive(!active);

   }

   const handleShowPerfil = () => {
      setUser(prevUser => ({
         ...prevUser,
         perfil: true,
      }));

      setActive(!active);
   }

   const handleInicio = (e) => {
      e.preventDefault();
      if(user?.perfil){
         setUser(prevUser => ({
            ...prevUser, 
            perfil: false
         }));
      }
      setActive(false);

   }

   return (
      <>
         <header className="navegacion">
            <div className="navegacion__img">
               <img src={logo} />
            </div>
            {!user && (
               <button className="btn btn-white" onClick={handleLogin}>
                  Iniciar Sesion
               </button>
            )}

            {
               (user?.logged) && (

                  <div className="navegacion__logged">
                     <div className="navegacion__items">
                        {
                           itemsNav.map(item => (
                              <li key={item} onClick={handleInicio}>
                                 {item}
                              </li>
                           ))
                        }
                     </div>

                     <div className="navegacion__profile">
                        <div className="navegacion__profile-img" onClick={handleShowMenu}>
                           <img src={user.picture.thumbnail} />
                        </div>
                        <div className={`navegacion__profile-menu ${active ? 'active' : ''}`}>
                           <h3>{user.name}</h3>
                           <ul>
                              <li>
                                 <FontAwesomeIcon icon={faUserCircle} />
                                 <i onClick={handleShowPerfil}>Perfil</i>
                              </li>
                              <li>
                                 <FontAwesomeIcon icon={faTimesCircle} />
                                 <i onClick={handleLogout}>Logout</i>
                              </li>
                           </ul>
                        </div>
                     </div>

                  </div>
               )
            }
         </header>
      </>
   );
};

export default Navegacion;
