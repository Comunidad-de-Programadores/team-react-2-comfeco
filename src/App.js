import React from 'react'

import Navegacion from './components/Navegacion';
import { Recuperar } from './components/auth/Recuperar'
import LoginApp from './components/LoginUsuario/LoginApp';


const App = () => {
   return (
      <div>
         <Navegacion />
        {/* <Recuperar /> */}
         <LoginApp/>

      </div>
   );
};

export default App;

