import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'

const ElementNav = (props) => {
    const navigator=useNavigate();
  const {element}=props
  return (
    <>
    <div className='element-dashboard'>
          <ul className='dash-item'>  
            <li > 
              <NavLink to={`/user/dashboard/${element}/create`}>
                create {element}
              </NavLink>
            </li>

            <li > 
              <NavLink to={`/user/dashboard/${element}/delete`}>
              delete / update {element}
              </NavLink>
            </li>
  
            

            <li > 
              <NavLink to={`/user/dashboard/${element}/all`}>
                all {element}
              </NavLink>
            </li>
            {
            element==="gallery"?
            <li >
                <NavLink to={`/user/dashboard/${element}/category`}>
                    by category 
                </NavLink>
            </li>:null
            }
          </ul>
      </div>
      <Outlet />
    </>
  )
}

export default ElementNav
