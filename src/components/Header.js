import React from 'react'
import Logo from '../img/Logo.png'
const Header=()=>{
  const HeaderStyle={
    paddingTop  :'2em',
    paddingButtom  :'1em'
  }
  return(
      <nav className="level" style={HeaderStyle}>
        <p className="level-item has-text-centered">
        <img src={Logo} alt="logo" width='208' height='45'/>
        </p>
      </nav> 
  )

}

export default Header