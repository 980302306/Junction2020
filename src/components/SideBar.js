import React from 'react'
import './UL.css'
// import {Timeline, TimelineEvent} from 'react-event-timeline'


const SideBar=()=>{
  const data=[1, 2, 3, 4, 5, 6]
  return(
    <ul>
    {
      data.map(key => (
        <li key={key}><span key={key+10}></span></li>
      ))
    }
  </ul>
  )
}

export default SideBar