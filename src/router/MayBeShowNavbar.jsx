import React from 'react'
import BackendNav from '../backend/BackendNav';
import { useLocation } from 'react-router-dom'
import { useEffect,useState } from 'react';

const MayBeShowNavbar = ({children,setFoot,refNav}) => {
    
  const [nav,setNav]=useState(true);
  const location=useLocation();

  useEffect(()=>{
      // console.log(location.pathname)
      if(location.pathname=="/login" || location.pathname=="/register"||location.pathname.substring(0,6)=="/user/"){
          setNav(false)
          setFoot(false);
      }else {
          setNav(true);
          setFoot(true);
      }
  },[location])

    return (
      <>
        {nav? children:<BackendNav refreshNav={refNav} /> }
      </>
  )
}

export default MayBeShowNavbar
