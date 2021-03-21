import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Recuperar } from '../../components/LoginUsuario/Recuperar';
import LoginApp from '../../components/LoginUsuario/LoginApp';

export const AuthRouter = () => {

    return (
        <div>
            <Switch>
                    <Route
                        exact
                        path="/auth/login"
                        component= { LoginApp }
                    />
                    <Route
                        exact
                        path="/auth/recuperar"
                        component={ Recuperar }
                    />

                    <Redirect to="/auth/login" /> 

                </Switch>
        </div>
      
    )
}
