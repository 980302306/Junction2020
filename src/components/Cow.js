import React from 'react'
import Background from '../img/cow.png'
import Card from './Card'
import Header from './Header'
import { Link } from "react-router-dom"
const Cow=()=>{
  const sectionStyle = {
    backgroundSize: 'cover',
    height: "100%",
    backgroundImage: `url(${Background})`
  }
  const buttonStyle ={
    borderRadius: '50%',
  }
  const firstLinkStyle={
    position: 'absolute', left: '5%', top:'16%'
  }
  const secondLinkStyle={
    position: 'absolute', left: '5%', top:'33%'
  }
  const thirdLinkStyle={
    position: 'absolute', left: '5%', top:'50%'
  }
  const fourthLinkStyle={
    position: 'absolute', left: '5%', top:'67%'
  }
  const firstButtonStyle={
    position: 'absolute', left: '10.45138%', top:'86.9%',
    borderRadius: '50%'
  }
  const secondButtonStyle={
    position: 'absolute', left: '28.05%', top:'74.4%',
    borderRadius: '50%'
  }
  const thirdButtonStyle={
    position: 'absolute', left: '28.05%', top:'33.4%',
    borderRadius: '50%'
  }
  const fourthButtonStyle={
    position: 'absolute', left: '49.1%', top:'31.2%',
    borderRadius: '50%'
  }
  return(
    <div>
      <section className="hero is-fullheight" style={sectionStyle}>
      <Header />
      <Link to={`/meat/cows`} style={firstLinkStyle}>0 day<br/>Born</Link>
      <Link to={`/meat/cows`} style={secondLinkStyle}>200 days<br/>Weaned</Link>
      <Link to={`/meat/cows`} style={thirdLinkStyle}>400 days<br/>Finishing Phase</Link>
      <Link to={`/meat/cows`} style={fourthLinkStyle}>600 days<br/>Harvested</Link>
      <div>
        <button className='button is-small' style={firstButtonStyle}></button>
      </div>
      <div>
        <button className='button is-small' style={secondButtonStyle}></button>
      </div>
      <div>
        <button className='button is-small' style={thirdButtonStyle}></button>
      </div>
      <div>
        <button className='button is-small' style={fourthButtonStyle}></button>
      </div>
      
     </section>
    </div>
    
  )
}

export default Cow