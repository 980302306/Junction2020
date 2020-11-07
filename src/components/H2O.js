import React from 'react'
import Background from '../img/envResonsibility.png'
import Header from './Header'
const H2O=()=>{
  const BgStyle={
    backgroundSize: 'cover',
    height: "100%",
    backgroundImage: `url(${Background})`
  }
  const CardStyle={
    position: 'absolute', left:'5%', top:'20%',
    width:1300,
    height:600,
    opacity:0.75
  }
  const TitleStyle={
    position: 'absolute', left:'10%', top:'40%',
  }
  const SubTitleStyle={
    position: 'absolute', left:'12%', top:'50%',
    fontSize: 13
  }
  const DatavizStyle={
    position: 'absolute', left:'15%', top:'15%',
    width:1700,
    height:600,
    opacity:1
  }
  return(
    <section className="hero is-fullheight" style={BgStyle}>
      <Header />
      <div>
        <div className='card' style={CardStyle}>
        <div className="card-content">
          {/* <div className='content is-6'>CO2</div> */}
          <div className='columns'>
            <div className='column is-one-third'>
              <h1 class="title is-1" style={TitleStyle}>H2O</h1>
              <span style={SubTitleStyle}> Water <br/>Footprint</span>
            </div>
            <div className='column is-one-third' style={DatavizStyle}>
              
            </div>
          </div>
          
        </div>
        </div>
      </div>
      {/* <div className="block">
       This text is within a
      </div> */}
    </section>
  )
}
export default H2O
