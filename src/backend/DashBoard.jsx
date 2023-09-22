import React from 'react'
import BackendNav from './BackendNav'
import './backend-style.css'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
const DashBoard = () => {
  
  return (
    <>
      <div id='dashboard'>
      <h1 className='dashboard-heading'>Dashboard </h1>
        <nav>
          <ul className='dash-nav'>
            
            <li > 
              <NavLink to={"/user/dashboard/notice"}>
                Notice
              </NavLink>
             </li>

             <li > 
              <NavLink to={"/user/dashboard/carousel"}>
                carousel
              </NavLink>
             </li>

             <li > 
              <NavLink to={"/user/dashboard/category"}>
                category
              </NavLink>
             </li>
            <li > 
              <NavLink to={"/user/dashboard/gallery"}>
                gallery
              </NavLink>
            </li>

            <li > 
              <NavLink to={"/user/dashboard/topper"}>
                topper
              </NavLink>
            </li>

            <li > 
              <NavLink to={"/user/dashboard/users"}>
                users
              </NavLink>
            </li>
            
            
            
          </ul>
        </nav>

      </div>
      <Outlet />

    </>
  )
}

export default DashBoard
