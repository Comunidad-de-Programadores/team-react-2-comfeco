import React, { useState } from 'react';

import Navegacion from './components/Navegacion';
import { AuthContext } from './context/AuthContext';
import { AppRouter } from './router/AppRouter';

const App = () => {
   const [user, setUser] = useState(null);

   return (
      <AuthContext.Provider
         value={{
            user,
            setUser,
         }}
      >
         <AppRouter />
      </AuthContext.Provider>
   );
};

export default App;
