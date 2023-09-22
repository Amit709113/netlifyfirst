//deplecited

import React, { useState,useEffect } from 'react'
import {doLogout, getCurrentUserDetail, isLoggedIn } from '../auth';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { BiLogIn,BiLogOut } from "react-icons/bi";

const BackendNav = (props) => {
    const navigate= useNavigate();
    const [login,setLogin]=useState(false);
    const[user,setUser]=useState(undefined);

    useEffect(()=>{
        setLogin(isLoggedIn())
        setUser(getCurrentUserDetail());
    },[login,props.refreshNav])

    const logoutHandler=()=>{
        doLogout(()=>{
            setLogin(false);
            navigate("/")

        });
    }

  return (<>
        <nav id='backend-nav'>
                <ul className='list'>
                    {
                        login && <> 
                        <li style={{padding:"12px"}}>{user.email}</li>
                        <li style={{padding:"12px"}} onClick={logoutHandler}>
                            <span className='icon-btn'> <BiLogOut /></span>
                        </li>
                        </>
                    }
                    {
                    !login && <>
                        <li >
                        <NavLink to={"/login"} >
                            login
                        </NavLink>
                        </li>
                        <li>
                            <NavLink to ={'/register'} > register </NavLink>
                        </li>
                    </>
                    }
                </ul>
        </nav>
        <Outlet />

    </>
  )
}

export default BackendNav
