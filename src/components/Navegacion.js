import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import logo from '../assets/logo3.png';

const Navegacion = ({ children, Userdata }) => {
   const [isLogin, setisLogin] = useState(false);

   const history = useHistory();

   useEffect(() => {
      if (Userdata.email !== '') {
         setisLogin(Userdata.isLogin);
      }
   }, [Userdata]);

   const handleLogin = (e) => {
      e.preventDefault();
      history.push('/');
      //setisLogin(true);
   };

   const handleLogout = (e) => {
      e.preventDefault();
      setisLogin(false);
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
               {!isLogin && (
                  <button className="btn btn-purple" onClick={handleLogin}>
                     Iniciar Sesion
                  </button>
               )}
               {isLogin && (
                  <span
                     style={{
                        fontSize: '36px',
                        color: 'blue',
                        backgroundColor: 'yellow',
                     }}
                  >
                     {Userdata.email}
                  </span>
               )}
               {isLogin && (
                  <button className="btn btn-purple" onClick={handleLogout}>
                     Logout
                  </button>
               )}
               {/*------------------------------------------------------- */}
            </div>
         </header>

         {children}
      </>
   );
};

export default Navegacion;
