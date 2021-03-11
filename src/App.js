import React, { useEffect, useState } from 'react';
import { loadUser } from './actions/auth';

import Navegacion from './components/Navegacion';
import { AuthContext } from './context/AuthContext';
import { AppRouter } from './router/AppRouter';
import { isLocalStorage, sendLocalStorage } from './shared/login/index';

const App = () => {
   
   const [ user, setUser ] = useState(sendLocalStorage());

   const [ dataUser, setDataUser ] = useState([]);

   // Aqui ya puedes verificar si esta completo los datos con completo 

   // TODO VERIFICAR CON ESTO DESDE EL CONTEXT TRUE O FALSES
   //    const { completo } = useContext( AuthContext );

   
   const [ completo, setCompleto ] = useState( false );

   useEffect(() => {

      if ( user ) {
         
         loadUser( user.uid, setCompleto, setDataUser );
      }

      
   }, [ user ]);

   return (
      <AuthContext.Provider
         value={{
            user,
            setUser,
            dataUser,
            setDataUser
         }}
      >
         <AppRouter />
      </AuthContext.Provider>
   );
};

export default App;
