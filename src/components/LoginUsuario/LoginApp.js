import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Navegacion from '../Navegacion';
import Content from '../Content';

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


   return (
      <>
         <Content>
            {
               <div className="container-login">
                  <div className="container-login__opt">
                     <button className="btn-login" onClick={handleToggle}>
                        <span>Ingresar</span>
                     </button>
                     <button className="btn-login" onClick={handleToggle2}>
                       
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
         </Content>
      </>
   );
};

export default LoginApp;
