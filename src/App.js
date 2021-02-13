import React from 'react'

import Navegacion from './components/Navegacion';
import { Recuperar } from './components/auth/Recuperar'
import LoginUsuario from './components/LoginUsuario/LoginUsuario';


const App = () => {
   return (
      <div>
         <Navegacion />
         {/* <LoginUsuario /> */}
         <Recuperar />
      </div>
   );
};

export default App;

