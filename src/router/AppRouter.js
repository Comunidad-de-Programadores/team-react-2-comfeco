import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import HomePage from '../components/HomePage/HomePage';
import Navegacion from '../components/Navegacion';
import { AuthContext } from '../context/AuthContext';
import { HomeRouter } from './private/HomeRouter';
import { firebase } from '../firebase/firebase-config';

import { PrivateRoute } from './PrivateRouter';
import { AuthRouter } from './public/AuthRouter';
import { PublicRoute } from './PublicRouter';
import { login } from '../actions/auth';
import { isLocalStorage, sendLocalStorage } from '../shared/login';
import { Footer } from '../components/Footer';

export const AppRouter = () => {



   // + CONTEXT 
   const { user, setUser } = useContext(AuthContext);

   const [checking, setChecking] = useState(false);


   useEffect(() => {

      if (user) {

         setChecking(user?.logged)

      } else {
         setChecking(false);
      }


   }, [user])





   return (
      <Router>
         <Navegacion />
         <div>
            <Switch>
               <PublicRoute
                  path="/auth"
                  component={AuthRouter}
                  isAuthenticated={checking}
               />
               {/* 
                  Rutas privadas  
               */}

               <PrivateRoute
                  path="/home"
                  component={HomeRouter}
                  isAuthenticated={checking}
               />
               <Redirect to="/auth/login" />
            </Switch>
         </div>
         <Footer/>
      </Router>
   );
};
