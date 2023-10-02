import React from 'react'
import '../App.css'
import GoToTop from './GoToTop'

//working components import
import Carousel from '../components/Carousel';
import NoticeBox from '../components/NoticeBox';
import EventBox from '../components/EventBox';
import VlogList from '../components/VlogList';
import Topper from '../components/Topper';

//data import 


import eventData from '../data/eventData.json'
import vlog from '../data/vlogData.json'


const Home = () => {
  return (
    <>
    <Carousel  />
    <div className='notice-wrapper'>
      <NoticeBox />
      <EventBox event={eventData.eventData}/>
    </div>
    <VlogList data={vlog.articals}/>
    <Topper />
    <GoToTop />
      
    </>
  )
}

export default Home
