import React, { useState } from 'react';
import AnimationLogin from './animation/AnimationLogin';
import LoginUsuario from './LoginUsuario';
import RegistrarUsuario from './RegistrarUsuario';

const LoginApp = () => {
   const [registro, setRegistro] = useState('Registrarse');

   const handleToggle = (e) => {
      setRegistro('Ingresar');
   };
   const handleToggle2 = (e) => {
      setRegistro('Registrarse');
   };

   return (
      <>
         <div className="container-login">
            <div className="container-login__opt">
               <button className="btn-login" onClick={handleToggle}>
                  <span>Click!</span>
                  <span>Ingresar</span>
               </button>
               <button className="btn-login" onClick={handleToggle2}>
                  <span>Click!</span>
                  <span>Registrarse</span>
               </button>
               {/* <a onClick={handleToggle} >Registrarse</a> */}
            </div>
            {registro == 'Ingresar' ? (
               <LoginUsuario registro={setRegistro} />
            ) : (
               <RegistrarUsuario />
            )}
            {/* <AnimationLogin /> */}
         </div>
      </>
   );
};

export default LoginApp;
