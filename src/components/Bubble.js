import React from 'react'
import './Font.css'

const Bubble=({text,left,top, show})=>{
  if (show==='No') return null 
  const BubbleStyle={
    position: 'absolute', left, top,
    width:230,
    height:100,
    opacity:0.5
  }
  return(
    <div>
      <div className='card is-rounded' style={BubbleStyle}>
        {/* <div className='subtitle is-6'> {text}</div> */}
      <div className="card-content">
        <div className='content is-6 BlackRegular'>{text}</div>
      </div>
      </div>
    </div>
    
  )
}

export default Bubble