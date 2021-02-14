import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({hasRole, component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            hasRole ?
            <Component {...props}{...rest} />
            : <Redirect to="/login" />
        )} />
    );
};

export default PrivateRoute;
