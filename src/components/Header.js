import React from 'react'
import Logo from '../img/Logo.png'
const Header=()=>{
  return(
      <nav className="level">
        <p className="level-item has-text-centered">
        <img src={Logo} alt="logo" width='208' height='45'/>
        </p>
      </nav> 
  )

}

export default Header