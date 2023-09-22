import React, { useState } from 'react';
import './App.css'
import { BrowserRouter, Route,Routes,  } from 'react-router-dom';

import SharedLayout from './router/SharedLayout'
import Home from './router/Home'
import About from './router/About'
import Abuscus from './router/Abuscus'
import AdmProcedure from './router/AdmProcedure'
import CsLab from './router/CsLab'
import FeeStructure from './router/FeeStructure'
import GalleryRoute from './router/GalleryRoute'
import Library from './router/Library'
import ListOfHolyday from './router/ListOfHolyday'
import PrincipleMessage from './router/PrincipleMessage'
import SchoolStrength from './router/SchoolStrength'
import SchoolStatistic  from './router/SchoolStatistic';
import Staff from './router/Staff'
import SportsTeakwondo from './router/SportsTeakwondo';
import Transportation from './router/Transportation'
import WhyDps from './router/WhyDps'
import Notice from './router/Notice';
import Contect from './router/Contect';
// import TopperService from './services/topperService';

import LogIn from './crud/Login'
import Register from './crud/Register'

import DashBoard from './backend/DashBoard'
import PrivateRoute from './backend/PrivateRoute'
import CreateNotice from './backend/notice_backend/CreateNotice'
import DeleteNotice from './backend/notice_backend/DeleteNotice.jsx';
import GetAllNotice from './backend/notice_backend/GetAllNotice'
import GetAllCarousel from './backend/carousel_backend/GetAllCarousel'
import CreateCarousel from './backend/carousel_backend/CreateCarousel'
import DeleteCarousel from './backend/carousel_backend/DeleteCarousel'

import DeleteTopper from './backend/topper_backend/DeleteTopper'
import GetAllTopper from './backend/topper_backend/GetAllTopper'
import ElementNav from './backend//ElementNav'
import CreateTopper from './backend/topper_backend/CreateTopper'

import GetAllImageByCategory from './backend/gallery_backend/GetAllImageByCategory'
import DeleteCategory from './backend/category_backend/DeleteCategory'
import CreateCategory from './backend/category_backend/CreateCategory'
import GetAllCategory from './backend/category_backend/GetAllCategory'
import GetAllImage from './backend/gallery_backend/GetAllImage'
import UploadImage from './backend/gallery_backend/UploadImage'
import DeleteImage from './backend/gallery_backend/DeleteImage'
import GetAllUser from './backend/user_backend/GetAllUser'
import CreateUser from './backend/user_backend/CreateUser'
import DeleteUser from './backend/user_backend/DeleteUser'


import Headers from './router/Headers';
import MayBeShowNavbar from './router/MayBeShowNavbar';
import Footer from './components/Footer';

function App() {
  const [showFooter,setShowFooter]=useState(true);
  const [refNav,setRefNav]=useState(false);
  const setFoot=(value)=>{
    setShowFooter(value);
  }
  const fnSetter=(loginFlag)=>{
    setRefNav(loginFlag);
  }

  return (
    <>
      <BrowserRouter>
        <MayBeShowNavbar setFoot={setFoot} refNav={refNav}>
          <Headers />
        </MayBeShowNavbar>

        <Routes>
          <Route path='/' element={<SharedLayout />} >
            <Route index element={<Home />} />
            
            <Route path='/about' element={<About />}/>
            <Route path='/whydps' element={<WhyDps />}/>
            <Route path='/admprocedure' element={<AdmProcedure />}/>
            <Route path='/feestructure' element={<FeeStructure />}/>
            <Route path='/principlemsg' element={<PrincipleMessage />}/>
            <Route path='/schoolstatistic' element={<SchoolStatistic />}/>
            <Route path='/staff' element={<Staff />}/>
            <Route path='/schoolstrength' element={<SchoolStrength />}/>
            <Route path='/listofholyday' element={<ListOfHolyday />}/>
            <Route path='/cslab' element={<CsLab />}/>
            <Route path='/library' element={<Library />}/>
            <Route path='/abuscus' element={<Abuscus />}/>
            <Route path='/gallery' element={<GalleryRoute />}/>
            <Route path='/sports-teakwondo' element={<SportsTeakwondo />}/>
            <Route path='/transportation' element={<Transportation />}/>
          
            <Route path='/notice' element={<Notice/>} />
            <Route path='/contectus' element={<Contect />} />

            <Route path='/login' element={<LogIn fnSetter={fnSetter}/>} />   
            {/* I have data here */}
            <Route path='/register' element={<Register/>} />
            <Route path='/user' element={<PrivateRoute />}>

              <Route path="info" element={<h1>info</h1>}/>
              <Route path='dashboard' element={<DashBoard/>} >

                {/* notice relate routing */}
                <Route path='notice' element={<ElementNav element='notice' />}>
                  <Route path="all" element={<GetAllNotice />}/>
                  <Route path="create" element={<CreateNotice />}/>
                  <Route path="delete" element={<DeleteNotice />}/>
                </Route>
          
                {/* carousel related routing */}
                <Route path='carousel' element={<ElementNav element="carousel"/>}>
                  <Route path="all" element={<GetAllCarousel />}/>
                  <Route path="create" element={<CreateCarousel />}/>
                  <Route path="delete" element={<DeleteCarousel />}/>
                </Route>
        
                {/* topper related routing */}
                <Route path='topper' element={<ElementNav element="topper"/>}>
                  <Route path="all" element={<GetAllTopper />}/>
                  <Route path="create" element={<CreateTopper />}/>
                  <Route path="delete" element={<DeleteTopper />}/>
                </Route>
        
                {/* category related routing */}
                <Route path='category' element={<ElementNav element="category"/>}>
                  <Route path="all" element={<GetAllCategory />}/>
                  <Route path="create" element={<CreateCategory />}/>
                  <Route path="delete" element={<DeleteCategory />}/>
                  <Route path="cname" element={<GetAllImageByCategory />}/>
                </Route>
            
                {/* Image related routing */}
                <Route path='gallery' element={<ElementNav element="gallery"/>}>
                  <Route path="all" element={<GetAllImage  />}/>
                  <Route path="create" element={<UploadImage />}/>
                  <Route path="delete" element={<DeleteImage />}/>
                  <Route path="category" element={<GetAllImageByCategory />}/>
                </Route>

                {/* user related routing */}
                <Route path='users' element={<ElementNav element="users"/>}>
                  <Route path="all" element={<GetAllUser  />}/>
                  <Route path="create" element={<CreateUser />}/>
                  <Route path="delete" element={<DeleteUser />}/>
                </Route>
              </Route>
            </Route>

            
           
          </Route>
        </Routes>
        {showFooter ?<Footer />:null}
      </BrowserRouter>
    </>
  )
}

export default App