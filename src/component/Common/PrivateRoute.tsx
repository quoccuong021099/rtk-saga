import * as React from 'react';
import { Navigate } from "react-router-dom";


export function PrivateRoute(props: any) {
    // check if user is logged in
    // if yes, show route
    // Otherwise, redirect to login page
    const isLoggedIn = Boolean(localStorage.getItem('access_token'));
    if (!isLoggedIn)
        return <Navigate replace to="/login" />
    return props.children

}
