import { height } from '@amcharts/amcharts4/.internal/core/utils/Utils'
import { Button } from '@amcharts/amcharts4/core'
import React from 'react'
const WelfarePanel=({title,show,setShow})=>{
  if(show==='Yes') return null
  const CardStyle={
    opacity:1,
    backgroundColor:'rgb(21,38,116)',
    position: 'absolute', left: '20%', top:'25%',
    width:900,
    height:500
  }
  const titleStyle={
    color:'white'
  }
  const ButtonStyle={
    left:"95%",
    top:"1%"
  }
  const close=()=>{
    setShow('Yes')
  }
  return(
    <div className='card' style={CardStyle}>
      <div className="card-content">
        <div className='columns'>
          <div className='column is-four-fifths'>
            <p className='title' style={titleStyle}>"{title}"</p>
          </div>
          <div className='column is-one-fifth'>
            <button className='delete' aria-label='delete' style={ButtonStyle} onClick={close}></button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default WelfarePanel