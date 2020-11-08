import React from 'react'
import Background from '../img/envResonsibility.png'
import Header from './Header'
import { Link } from "react-router-dom"
const Env=()=>{
  const BgStyle={
    backgroundSize: 'cover',
    height: "100%",
    backgroundImage: `url(${Background})`
  }
  const TextStyle={
    position: 'absolute', left:'5%', top:'35%',
  }
  const Title1Style={
    position: 'absolute', left:'35%', top:'40%',
  }
  const SubTitle1Style={
    position: 'absolute', left:'42%', top:'50%',
    fontSize: 13
  }
  const Card1Style={
    position: 'absolute', left:'45%', top:'20%',
    width:300,
    height:600,
    opacity:0.5
  }
  const Title2Style={
    position: 'absolute', left:'35%', top:'40%',
  }
  const SubTitle2Style={
    position: 'absolute', left:'42%', top:'50%',
    fontSize: 13
  }
  const Card2Style={
    position: 'absolute', left:'70%', top:'20%',
    width:300,
    height:600,
    opacity:0.5
  }
  return(
    <section className="hero is-fullheight" style={BgStyle}>
      <Header />
      <div className='columns'>
        <div className='column is-one-third'>
          <div style={TextStyle}>
            <h3 className='title is-3 BI' >Towards Carbon neutrality</h3>
            <span>We make food from responsibly produced raw<br/> 
            materials in the middle of the cleanest nature in the<br/>
            world. Fresh air, abundant water resources and a high<br/>
            level of expertise available make the Baltic Sea region<br/>
            an excellent place for responsible food production.<br/>
            We continuously reduce our environmental impacts<br/>
            and promote sustainable use of resources.</span>
          </div>
        </div>
        <div className='column is-one-third'>
          <div className='card' style={Card1Style}>
            <div className="card-content">
              <Link to={`/env/co2`}>
                <h1 className="title is-1" style={Title1Style}>CO2</h1>
              </Link>
              <span style={SubTitle1Style}>Carbon <br/>Footprint</span>
            </div>
          </div>
        </div>
        <div className='column is-one-third'>
          <div className='card' style={Card2Style}>
            <div className="card-content">
              <Link to={`/env/h2o`}>
                <h1 class="title is-1" style={Title2Style}>H2O</h1>
              </Link>
              <span style={SubTitle2Style}>Water <br/>Footprint</span>
            </div>
          </div>
        </div>
      </div>

    </section>
    
  )
}
export default Env