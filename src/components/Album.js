import React from 'react'
import Background from '../img/Index_bg.png'
import { Link } from "react-router-dom"
import Header from './Header'
const Album=()=>{
  const BgStyle = {
    backgroundSize: 'cover',
    height: "100%",
    backgroundImage: `url(${Background})`
  }
  const Link1Postion={
    position:'absolute',
    top:'55%',
    left:'23.5%'
  }
  const Link2Postion={
    position:'absolute',
    top:'55%',
    left:'71.5%'
  }
  return(
    <section className="hero is-fullheight" style={BgStyle}>
      <Header />
      <Link to={`/meat/cows`} style={Link1Postion}>Animal<br/>Welfare</Link>
      <Link to={`/meat/visualization`} style={Link2Postion}>Environmental<br/>Responsibility</Link>
    </section>
  )
}
export default Album