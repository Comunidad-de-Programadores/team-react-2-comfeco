import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Navegacion from '../Navegacion';
import AnimationLogin from './animation/AnimationLogin';
import LoginUsuario from './LoginUsuario';
import RegistrarUsuario from './RegistrarUsuario';

const LoginApp = () => {
   const [registro, setRegistro] = useState('Ingresar');

   const [dataLogin, setDataLogin] = useState(false);

   const handleToggle = (e) => {
      setRegistro('Ingresar');
   };
   const handleToggle2 = (e) => {
      setRegistro('Registrarse');
   };

   // function datafromLogin(datachild) {
   //    console.log('Datos recibidos de LoginUsuario: ' + datachild.isLogin);
   //    setDataLogin(datachild.isLogin);
   //    console.log('Datos recibidos de LoginUsuario: ' + dataLogin);
   // }

   return (
      <>
         <Navegacion>
            {
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
                  </div>
                  {registro == 'Ingresar' ? (
                     <LoginUsuario
                        registro={setRegistro}
                        // LoginAppfunction={datafromLogin}
                     />
                  ) : (
                     <RegistrarUsuario />
                  )}
               </div>
            }
         </Navegacion>
      </>
   );
};

export default LoginApp;
