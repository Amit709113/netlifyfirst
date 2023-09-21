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
            <Route path='/testvite' element={<Home />} />
            
            <Route path='/testvite/about' element={<About />}/>
            <Route path='/testvite/whydps' element={<WhyDps />}/>
            <Route path='/testvite/admprocedure' element={<AdmProcedure />}/>
            <Route path='/testvite/feestructure' element={<FeeStructure />}/>
            <Route path='/testvite/principlemsg' element={<PrincipleMessage />}/>
            <Route path='/testvite/schoolstatistic' element={<SchoolStatistic />}/>
            <Route path='/testvite/staff' element={<Staff />}/>
            <Route path='/testvite/schoolstrength' element={<SchoolStrength />}/>
            <Route path='/testvite/listofholyday' element={<ListOfHolyday />}/>
            <Route path='/testvite/cslab' element={<CsLab />}/>
            <Route path='/testvite/library' element={<Library />}/>
            <Route path='/testvite/abuscus' element={<Abuscus />}/>
            <Route path='/testvite/gallery' element={<GalleryRoute />}/>
            <Route path='/testvite/sports-teakwondo' element={<SportsTeakwondo />}/>
            <Route path='/testvite/transportation' element={<Transportation />}/>
          
            <Route path='/testvite/notice' element={<Notice/>} />
            <Route path='/testvite/contectus' element={<Contect />} />

            
           
          </Route>
        </Routes>
        {showFooter ?<Footer />:null}
      </BrowserRouter>
    </>
  )
}

export default App