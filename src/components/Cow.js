import React from 'react'
import Background from '../img/cow.png'
import SideBar from './SideBar'
import Card from './Card'
import ButtonImage from '../img/button.png'
const Cow=()=>{
  const sectionStyle = {
    backgroundSize: 'cover',
    height: "100%",
    backgroundImage: `url(${Background})`
  }
  const buttonStyle ={
    borderRadius: '50%',
    opacity:0.6
  }
  return(
    <div>
      <section className="hero is-fullheight" style={sectionStyle}>
        
        <div className='columns'>
          <div className='column is-1'><SideBar /></div>
          <div className='column is-one-quarter'></div>
          <div className='column is-one-quarter'></div>
          <div className='column is-one-fifth'></div>
          <div className='column is-1'></div>
          <div className='column is-1'></div>
        </div>
        
        <div className='columns'>
          <div className='column is-one-quarter'></div>
          <div className='column is-one-quarter'></div>
          <div className='column is-one-fifth'></div>
          <div className='column is-one-fifth'><Card /></div>
          <div className='column is-one-fifth'></div>
          <div className='column is-one-fifth'></div>
        </div>
        <div className='columns'>
          <div className='column is-one-quarter'></div>
          <div className='column is-one-quarter'></div>
        </div>
        <div className='columns'>
          <div className='column is-one-quarter'></div>
          <div className='column is-one-quarter'></div>
        </div>
        <div className='columns'>
          <div className='column is-one-quarter'></div>
          <div className='column is-one-quarter'></div>
        </div>
        <div className='columns'>
          <div className='column is-one-quarter'></div>
            <button className='button is-medium ' style={buttonStyle}>&nbsp;</button>
        </div>
        <div className='columns'>
          <div className='column is-1'></div>
          <div className='column is-1'></div>
          <div className='column is-1'></div>
          <div className='column is-1'></div>
        </div>
        <div className='columns'>
          <div className='column is-1'></div>
          <div className='column is-1'></div>
          <div className='column is-1'></div>
          <div className='column is-1'></div>
        </div>
     </section>
    </div>
    
  )
}

export default Cow