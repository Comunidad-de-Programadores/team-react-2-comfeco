import React from 'react'

import Navegacion from './components/Navegacion';
import { Recuperar } from './components/auth/Recuperar'
import LoginApp from './components/LoginUsuario/LoginApp';
import HomePage from './components/HomePage/HomePage';


const App = () => {
   return (
      <div>
         <Navegacion />
        {/* <Recuperar /> */}
         <LoginApp/>
         <HomePage/>

      </div>
   );
};

export default App;

