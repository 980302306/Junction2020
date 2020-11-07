import React from 'react'
import Background from '../img/Index_bg.jpg'
import { Link } from "react-router-dom"
import Header from './Header'
import './Font.css'
const Album=()=>{
  const BgStyle = {
    backgroundSize: 'cover',
    height: "100%",
    backgroundImage: `url(${Background})`
  }
  const Link1Postion={
    fontSize:25,
    position:'absolute',
    top:'54%',
    left:'22%'
  }
  const Link2Postion={
    fontSize:25,
    position:'absolute',
    top:'54%',
    left:'69.5%'
  }
  return(
    <section className="hero is-fullheight" style={BgStyle}>
      <Header />
      <Link to={`/meat/cows`} style={Link1Postion} className='Bold'>Animal<br/>Welfare</Link>
      <Link to={`/meat/visualization`} style={Link2Postion} className='Bold'>Environmental<br/>Responsibility</Link>
    </section>
  )
}
export default Album