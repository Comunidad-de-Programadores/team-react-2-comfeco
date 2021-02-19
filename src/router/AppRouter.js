import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
} from "react-router-dom";
import { PrivateRoute } from './PrivateRouter';
import { AuthRouter } from './public/AuthRouter';
import { PublicRoute } from './PublicRouter';



export const AppRouter = () => {

    const uid = false;
    
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute  
                        path="/auth" 
                        component={ AuthRouter } 
                        isAuthenticated={ !!uid }
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
    )
}