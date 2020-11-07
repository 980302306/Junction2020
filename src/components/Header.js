import React from 'react'
import Logo from '../img/Logo.png'
import Stripe from '../img/Stripe.png'
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
    <section class="hero" style={BgStyle} >
      <div class="hero-body">
        <div style={LogoStyle}>
          <img src={Logo} alt="logo" width='60%' height='60%'/>
        </div>
      </div>
    </section>
  )

}

export default Header