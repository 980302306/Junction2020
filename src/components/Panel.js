import React from 'react'
import Bubble from './Bubble'
import Card from './Card'
const Panel =({showFirstBubble,showSecondBubble,showThirdBubble,showFourthBubble,
               hideFirstBubble,hideSecondBubble,hideThirdBubble,hideFourthBubble,
              firstBubble,secondBubble,thirdBubble,fourthBubble,showPanel})=>{
  if(showPanel!=='Yes')return null
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
  )
}

export default Panel