import React from 'react'
import Logo from '../img/Logo.png'
import Stripe from '../img/Stripe.png'
import { Link } from "react-router-dom"
const Header=()=>{
  const HeaderStyle={
    paddingTop  :'2em',
  }
  const LogoStyle={
    position: 'absolute', left: '45%', top:'3%'
  }
  const BgStyle = {
    backgroundSize: 'cover',
    height: "100%",
    backgroundImage: `url(${Stripe})`
  }

  return(
    <section className="hero" style={BgStyle} >
      <div className="hero-body">
        <div className='container'>
          <div style={LogoStyle}>
          <Link to={`/`}> 
          <img src={Logo} alt="logo" width='60%' height='60%'/>
          </Link>
          </div>
        </div>
      </div>
    </section>
  )

}

export default Header