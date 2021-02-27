import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import { isLocalStorage } from '../shared/login';

export const PrivateRoute = ({
   //    isAuthenticated,
   component: Component,
   ...rest
}) => {
   return (
      <Route
         {...rest}
         component={(props) =>
            isLocalStorage() ? (
               <Component {...props} />
            ) : (
               <Redirect to="/auth/login" />
            )
         }
      />
   );
};

PrivateRoute.propTypes = {
   //    isAuthenticated: PropTypes.bool.isRequired,
   component: PropTypes.func.isRequired,
};
