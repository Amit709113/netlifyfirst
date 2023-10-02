import React from 'react'
import NoticeBox from '../components/NoticeBox'
import EventBox from '../components/EventBox'

import eventData from '../data/eventData.json'
const Notice = () => {
  return (
    <>
      <div className='notice-wrapper'>
        <NoticeBox/>
        <EventBox event={eventData.eventData}/>
    </div>
    </>
  )
}

export default Notice