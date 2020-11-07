import React from 'react'
import Background from '../img/Index_bg.png'
import { Link } from "react-router-dom"
const Album=()=>{
  const BgStyle = {
    backgroundSize: 'cover',
    height: "100%",
    backgroundImage: `url(${Background})`
  }
  const buttonStyle ={
    backgroundColor:'Transparent',
    outline:'none'
  }
  return(
    <section className="hero is-fullheight" style={BgStyle}>
    <div className='columns'>
      <div className='column is-one-fifth'></div>
    </div>
    <div className="columns">
    <div className="column is-3"></div>
      <div className="column is-half">
        <Link to={`/meat/cows`}>Animal<br/>Welfare</Link>
        {/* <button className="button  is-small is-text"  style={buttonStyle}>Animal<br/>Welfare</button> */}
      </div>
    </div>
    <div className='columns'>
      <div className='column is-one-fifth'></div>
    </div>
    </section>
  )
}
export default Album