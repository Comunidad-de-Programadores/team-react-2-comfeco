import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

import { isLogin, logout } from '../shared/login';
import apiUser from '../shared/api/userRamdom';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logo from '../assets/logo3.png';

const Navegacion = ({ children }) => {
   const [isLoginState, setisLogin] = useState(false);
   const [user, setUser] = useState([]);

   const history = useHistory();

   useEffect(() => {
      const Login = isLogin();
      if (Login) {
         apiUser.getUser().then((data) => {
            setUser(data);
            console.log(data);
         });
      }

      setisLogin(Login);
   }, []);

   const handleLogin = (e) => {
      e.preventDefault();
      history.push('/');
      //setisLogin(true);
   };

   const handleLogout = (e) => {
      e.preventDefault();
      logout();
      setisLogin(false);
      history.push('/');
   };

   return (
      <>
         <header className="navegacion">
            <div className="navegacion__img">
               <img src={logo} />
            </div>

            <div className="navegacion__btn ">
               {/* ME GUSTARIA PONER TODO ESTO LOGICA EN UN FUNCIONAL COMPONENT PERO
             ME DA ERROR CON TIEMPO LO VOY VER */}
               {!isLoginState && (
                  <button className="btn btn-white" onClick={handleLogin}>
                     Iniciar Sesion
                  </button>
               )}

               {/*------------------------------------------------------- */}
            </div>
         </header>

         {isLoginState && (
            <div className="navegacion__nav">
               <ul className="navegacion__nav-bar">
                  <li className="navegacion__nav-bar--item">
                     <Link className="navegacion__nav-bar--link" to="/home">
                        Inicio
                     </Link>
                  </li>
                  <li className="navegacion__nav-bar--item">
                     <Link className="navegacion__nav-bar--link" to="/home">
                        Contenidos
                     </Link>
                  </li>
                  <li className="navegacion__nav-bar--item">
                     <Link className="navegacion__nav-bar--link" to="/home">
                        Talleres
                     </Link>
                  </li>
                  <li className="navegacion__nav-bar--item">
                     <Link className="navegacion__nav-bar--link" to="/home">
                        Creadores de Contenidos
                     </Link>
                  </li>
                  <li className="navegacion__nav-bar--item user">
                     <span>{<FontAwesomeIcon icon={faBell} />}</span>

                     {user?.map((item) => {
                        return (
                           <span>
                              {' '}
                              <img
                                 src={item.picture.thumbnail}
                                 alt="photo"
                              />{' '}
                              {item.email}
                           </span>
                        );
                        // <img src={item.picture.medium} alt="photo"/>
                     })}
                     {/* <span>{user}</span> */}
                     <button onClick={handleLogout}>
                        {<FontAwesomeIcon icon={faTimes} />}
                        {/* <i class="far fa-window-close"></i> */}
                     </button>
                  </li>
                  <li className="navegacion__nav-bar--item"></li>
               </ul>
            </div>
         )}

         {children}
      </>
   );
};

export default Navegacion;
