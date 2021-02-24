import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import HomePage from '../components/HomePage/HomePage';
import { AuthContext } from '../context/AuthContext';

import { PrivateRoute } from './PrivateRouter';
import { AuthRouter } from './public/AuthRouter';
import { PublicRoute } from './PublicRouter';

export const AppRouter = () => {
   const uid = false;

   // TODO realizar la validación de usuario
   // const { user, setUser } = useContext( AuthContext );
   // console.log( user );
   // useEffect(() => {

   //     setUser( user );
   //     console.log( user )

   // }, [ user ]);

   return (
      <Router>
         <div>
            <Switch>
               <PublicRoute
                  path="/auth"
                  component={AuthRouter}
                  isAuthenticated={!!uid}
               />

               <PublicRoute
                  path="/home"
                  component={HomePage}
                  isAuthenticated={!!uid}
               />

               {/* 
                        Rutas privadas 
                    */}

               {/* <PrivateRoute 
                        path="/"      
                        component={  }
                        isAuthenticated={ !!uid }
                    /> */}
               <Redirect to="/auth/login" />
            </Switch>
         </div>
      </Router>
   );
};
