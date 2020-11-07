import React,{useState} from 'react'
import Background from '../img/cow.png'
import Card from './Card'
import Header from './Header'
import { Link } from "react-router-dom"
import Bubble from './Bubble'
const Cow=()=>{
  const [firstBubble,setFirstBubble]=useState('No')
  const [secondBubble,setSecondBubble]=useState('No')
  const [thirdBubble,setThirdBubble]=useState('No')
  const [fourthBubble,setFourthBubble]=useState('No')
  // const CowStyle={
  //   position: 'absolute',
  // }
  const sectionStyle = {
    backgroundSize: 'cover',
    height: "100%",
    backgroundImage: `url(${Background})`,
    backgroundPosition: 'center'
  }
  const buttonStyle ={
    borderRadius: '50%',
  }
  const firstLinkStyle={
    position: 'absolute', left: '5%', top:'15%'
  }
  const secondLinkStyle={
    position: 'absolute', left: '5%', top:'33%'
  }
  const thirdLinkStyle={
    position: 'absolute', left: '5%', top:'50%'
  }
  const fourthLinkStyle={
    position: 'absolute', left: '5%', top:'66%'
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
  const showFirstBubble=()=>setFirstBubble('Yes')
  const hideFirstBubble=()=>setFirstBubble('No')
  const showSecondBubble=()=>setSecondBubble('Yes')
  const hideSecondBubble=()=>setSecondBubble('No')
  const showThirdBubble=()=>setThirdBubble('Yes')
  const hideThirdBubble=()=>setThirdBubble('No')
  const showFourthBubble=()=>setFourthBubble('Yes')
  const hideFourthBubble=()=>setFourthBubble('No')
  return(
    <div>
      <section className="hero is-fullheight" style={sectionStyle}>
      <Header />
        <div className='hero-body'>
          <div >
            <Link to={`/meat/cows`} style={firstLinkStyle}>0 day<br/>Born</Link>
            <Link to={`/meat/cows`} style={secondLinkStyle}>200 days<br/>Weaned</Link>
            <Link to={`/meat/cows`} style={thirdLinkStyle}>400 days<br/>Finishing Phase</Link>
            <Link to={`/meat/cows`} style={fourthLinkStyle}>600 days<br/>Harvested</Link>
            <div>
              <button className='button is-small' style={firstButtonStyle} onMouseOver={showFirstBubble} onMouseLeave={hideFirstBubble}></button>
            </div>
            <div>
              <button className='button is-small' style={secondButtonStyle} onMouseOver={showSecondBubble} onMouseLeave={hideSecondBubble}></button>
            </div>
            <div>
              <button className='button is-small' style={thirdButtonStyle} onMouseOver={showThirdBubble} onMouseLeave={hideThirdBubble}></button>
            </div>
            <div>
              <button className='button is-small' style={fourthButtonStyle} onMouseOver={showFourthBubble} onMouseLeave={hideFourthBubble}></button>
            </div>
            <section className='section'>
              <Bubble text='We are fed well' left='13%' top='86.9%'  show={firstBubble}/>
              <Bubble text='We live in good house' left='31%' top='74.4%' show={secondBubble}/>
              <Bubble text='We have good relationships with human' left='31%' top='34.4%' show={thirdBubble}/>
              <Bubble text='We are in very good health' left='52%' top='31.2%' show={fourthBubble}/>
            </section>
            <section className='section'>
              <Card left='67%' top='50%'/>
            </section>
          </div>
        </div>
     </section>
    </div>
    
  )
}

export default Cow