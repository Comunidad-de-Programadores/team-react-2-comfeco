import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
// import { Recuperar } from '../../components/auth/Recuperar';
import HomePage from '../../components/HomePage/HomePage';
import { ScreenPerfil } from '../../components/Profile/ScreenPerfil';

import { EventosActivos } from '../../components/Profile/EventosActivos';
import Grupos from '../../components/Profile/grupos/Grupos';

import LoginApp from '../../components/LoginUsuario/LoginApp';
import { Insignias } from '../../components/Profile/Insignias';

export const HomeRouter = () => {
   //    return (
   //       <div>
   //          <Switch>
   //             <Route exact path="/home" component={HomePage} />
   //             <Route exact path="/home/profile" component={ScreenPerfil} />
   //             <Route exact path="/home/groups" component={Grupos} />

   return (
      <div>
         <Switch>
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/home/profile" component={ScreenPerfil} />
            <Route exact path="/home/eventos" component={EventosActivos} />
            <Route exact path="/home/grupos" component={Grupos} />
            <Route exact path="/home/insignias" component={Insignias} />
            {/* <Route
                        exact
                        path="/home/..."
                        component={ Recuperar }
                    /> */}

            <Redirect to="/home" />
         </Switch>
      </div>
   );
};
