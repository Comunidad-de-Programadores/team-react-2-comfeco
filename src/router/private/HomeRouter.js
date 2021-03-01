import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Recuperar } from '../../components/auth/Recuperar';
import HomePage from '../../components/HomePage/HomePage';
import { ScreenPerfil } from '../../components/HomePage/perfil/ScreenPerfil';
import LoginApp from '../../components/LoginUsuario/LoginApp';

export const HomeRouter = () => {

    return (
        <div>
            <Switch>
                    <Route
                        exact
                        path="/home"
                        component= { HomePage }
                    />
                     <Route
                        exact
                        path="/home/profile"
                        component= { ScreenPerfil }
                    />
                    {/* <Route
                        exact
                        path="/home/..."
                        component={ Recuperar }
                    /> */}

                    <Redirect to="/home" /> 



                </Switch>
        </div>
      
    )
}
