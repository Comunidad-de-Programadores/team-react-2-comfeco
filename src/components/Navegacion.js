import React, { useState, useEffect, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';

import { isLogin, logout } from '../shared/login';
import apiUser from '../shared/api/userRamdom';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AuthContext } from '../context/AuthContext';

import logo from '../assets/logo3.png';
import { startLogout } from '../actions/auth';

const Navegacion = ( props ) => {

   const [ isLoginState, setisLogin ] = useState(false);

   const { user, setUser } = useContext(AuthContext);

   const history = useHistory();

   // useEffect(() => {
   //    if (user) {
   //       apiUser.getUser().then((data) => {
   //          setUser(data);
   //          setisLogin(true);
   //       });
   //    }

   //    console.log(isLoginState);
   // }, []);

    console.log(user);

   const handleLogin = (e) => {
      e.preventDefault();
      history.push('/');
      //setisLogin(true);
   };

   const handleLogout = (e) => {
      e.preventDefault();
      logout();
      setisLogin(false);
      startLogout( setUser );
   };

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
         </header>

         <div className="navegacion__btn ">
            {/* ME GUSTARIA PONER TODO ESTO LOGICA EN UN FUNCIONAL COMPONENT PERO
             ME DA ERROR CON TIEMPO LO VOY VER */}
            { ( user ) && (
               <>
                  <div className="navegacion__nav">
                     <ul className="navegacion__nav-bar">
                        <li className="navegacion__nav-bar--item">
                           <Link
                              className="navegacion__nav-bar--link"
                              to="/home"
                           >
                              Inicio
                           </Link>
                        </li>
                        <li className="navegacion__nav-bar--item">
                           <Link
                              className="navegacion__nav-bar--link"
                              to="/home"
                           >
                              Contenidos
                           </Link>
                        </li>
                        <li className="navegacion__nav-bar--item">
                           <Link
                              className="navegacion__nav-bar--link"
                              to="/home"
                           >
                              Talleres
                           </Link>
                        </li>
                        <li className="navegacion__nav-bar--item">
                           <Link
                              className="navegacion__nav-bar--link"
                              to="/home"
                           >
                              Creadores de Contenidos
                           </Link>
                        </li>
                        <li className="navegacion__nav-bar--item user">
                           <span>{<FontAwesomeIcon icon={faBell} />}</span>
                           {
                              [ user.user ]?.map(( item, key ) => {
                                 return (
                                    <span key={ key } >
                                       {' '}
                                       <img
                                          src={item.picture.thumbnail}
                                          alt="photo"
                                       />{' '}
                                       {item.email}
                                    </span>
                                 );
                              })
                           }
                           <button onClick={handleLogout}>
                              {<FontAwesomeIcon icon={faTimes} />}
                           </button>
                        </li>
                        <li className="navegacion__nav-bar--item"></li>
                     </ul>
                  </div>
               </>
            )}
            {/* <pre>{JSON.stringify(user)}</pre> */}
         </div>
      </>
   );
};

export default Navegacion;
