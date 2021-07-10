import React from 'react';
import { Component } from 'react';
import { getToken } from './Common';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest}) => {
    return(
        <Route 
        {...rest}
        render={props => {
          return  getToken() ? <Component {...props} />
            : <Redirect to={{pathname:'/sign-in'}} />
        }}
        />
    )
}

export default PrivateRoute