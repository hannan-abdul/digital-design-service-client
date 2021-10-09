import React from 'react';
import { Redirect, Route } from 'react-router';
import jwt_decode from "jwt-decode";
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children, ...rest }) => {
    const email = useSelector((state) => state.auth.userdetails.email)

    const isLoggedIn = () => {
        const token = sessionStorage.getItem('token');
        if(!token){
          return false;
        }
        const decodedToken = jwt_decode(token);
        const currentTime = new Date().getTime() / 1000;
        return decodedToken.exp > currentTime;
      }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                (email || isLoggedIn()) ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;