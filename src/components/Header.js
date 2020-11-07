import React from 'react'
import Logo from '../img/Logo.png'
import HKScan from '../img/HKScan.png'
import { Link } from "react-router-dom"
const Header=()=>{
  const LogoStyle={
    position: 'absolute', left: '46%', top: '10%'
  }
  const NavStyle={
    backgroundColor:'white'
  }
  return(
    <nav className="navbar" role="navigation" aria-label="main navigation" style={NavStyle}>
      <div className="navbar-brand">
        <a className="navbar-item" href="https://www.hkscan.com/en/">
          <img src={HKScan} alt='HKscan logo' width="112" height="28"/>
        </a>
      </div>

      <div className="navbar-item" style={LogoStyle}>
        <Link to={`/`}> 
          <img src={Logo} alt="logo"/>
        </Link>
      </div>
    </nav>
  )

}

export default Header