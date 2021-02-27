import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import { isLocalStorage } from '../shared/login';

export const PublicRoute = ({
   //    isAuthenticated,
   component: Component,
   ...rest
}) => {
   return (
      <Route
         {...rest}
         component={(props) =>
            isLocalStorage() ? (
               <Redirect to="/home" />
            ) : (
               <Component {...props} />
            )
         }
      />
   );
};

PublicRoute.propTypes = {
   //    isAuthenticated: PropTypes.bool.isRequired,
   component: PropTypes.func.isRequired,
};
