import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { isLogin, logout } from '../shared/login';

import logo from '../assets/logo3.png';

const Navegacion = ({ children }) => {
   const [isLoginState, setisLogin] = useState(false);
   const [user, setUser] = useState('');

   const history = useHistory();

   useEffect(() => {
      const Login = isLogin();
      if (Login) setUser(localStorage.getItem('email'));

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

   const clickHome = (e) => {
      e.preventDefault();
      history.push('/home');
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

               {isLoginState && (
                  <span
                     style={{
                        fontSize: '36px',
                        color: 'blue',
                        backgroundColor: 'yellow',
                     }}
                  >
                     {user}
                  </span>
               )}
               {isLoginState && (
                  <button className="btn btn-purple" onClick={handleLogout}>
                     Logout
                  </button>
               )}
               {/*------------------------------------------------------- */}
            </div>
            <div>
               <button className="btn btn-white" onClick={clickHome}>
                  Home
               </button>
            </div>
         </header>

         {children}
      </>
   );
};

export default Navegacion;
