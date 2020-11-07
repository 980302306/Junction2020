import React from 'react'
import './Font.css'
const Card=({left,top})=>{
  const cardStyle={
    position: 'absolute', left, top,
    width:300,
    opacity:0.5
  }
  return(
    <div className='card' style={cardStyle}>
      <div className="card-content">
        <p className="title Bold">Beef</p>
        <div className='content BlackRegular'>Home: Finland <br/> Variety: Cute Cow</div>
      </div>
    </div>
  )
}
export default Card