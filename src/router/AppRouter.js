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

export const AppRouter = () => {
   const { setUser } = useContext(AuthContext);
   // const [uid, setUid] = useState(false);
   const [checking, setChecking] = useState(true);

   useEffect(() => {
      // firebase.auth().onAuthStateChanged(async (userFirebase) => {
      //    if (userFirebase?.uid) {
      //       login(
      //          userFirebase.uid,
      //          userFirebase.email,
      //          userFirebase.displayName,
      //          userFirebase.photoURL,
      //          setUser,
      //       );
      //       setUid(true);
      //    } else {
      //       setUid(false);
      //    }
      //    setChecking(false);
      // });

      if (isLocalStorage) {
         setUser(sendLocalStorage());
         console.log(sendLocalStorage());
         setChecking(false);
         // setUid(true);
      }
   }, [setChecking]);

   if (checking) {
      return <h1>Espere...</h1>;
   }

   return (
      <Router>
         <Navegacion />
         <div>
            <Switch>
               <PublicRoute
                  path="/auth"
                  component={AuthRouter}
                  // isAuthenticated={uid}
               />
               {/* 
                  Rutas privadas  
               */}

               <PrivateRoute
                  path="/home"
                  component={HomeRouter}
                  // isAuthenticated={!!uid}
               />
               <Redirect to="/auth/login" />
            </Switch>
         </div>
      </Router>
   );
};
