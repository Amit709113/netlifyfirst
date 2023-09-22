import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { isLoggedIn } from '../auth';
import "./backend-style.css";

const PrivateRoute = () => {
    
    //  in common
    return (
        <>
        { isLoggedIn()?<Outlet /> : <Navigate to={"/login"} />}
        </>
    )
}

export default PrivateRoute
