import React from 'react'
import Vizcontent from './Vizcontent'
const WelfarePanel=({title,show,setShow,btnIndex})=>{
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
            <p className='title BI' style={titleStyle}>"{title}"</p>
          </div>
          <div className='column is-one-fifth'>
            <button className='delete' aria-label='delete' style={ButtonStyle} onClick={close}></button>
          </div>
        </div>
        <Vizcontent btnIndex={btnIndex}/>
      </div>
    </div>
  )
}
export default WelfarePanel