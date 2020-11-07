import React from 'react'
// import './Card.css'
const Card=({left,top})=>{
  const cardStyle={
    position: 'absolute', left, top,
    width:300,
    opacity:0.5
  }
  return(
    <div className='card' style={cardStyle}>
      <div className="card-content">
        <p className="title">Beef</p>
        <div className='content'>Home: Finland <br/> Variety: </div>
      </div>
    </div>
  )
}
export default Card