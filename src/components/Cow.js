import React,{useState} from 'react'
import Background from '../img/cow.png'

import Header from './Header'
import './Button.css'
import WelfarePanel from './WelfarePanel'
import Panel from './Panel'
const Cow=()=>{
  const [firstBubble,setFirstBubble]=useState('No')
  const [secondBubble,setSecondBubble]=useState('No')
  const [thirdBubble,setThirdBubble]=useState('No')
  const [fourthBubble,setFourthBubble]=useState('No')
  const [showPanel,setShowPanel]=useState('Yes')
  const [WelfarePanelTitle,setWelfarePanelTitle]=useState('')
  const sectionStyle = {
    backgroundSize: 'cover',
    height: "100%",
    backgroundImage: `url(${Background})`,
    backgroundPosition: 'center'
  }
  const showFirstBubble=()=>setFirstBubble('Yes')
  const hideFirstBubble=()=>setFirstBubble('No')
  const showSecondBubble=()=>setSecondBubble('Yes')
  const hideSecondBubble=()=>setSecondBubble('No')
  const showThirdBubble=()=>setThirdBubble('Yes')
  const hideThirdBubble=()=>setThirdBubble('No')
  const showFourthBubble=()=>setFourthBubble('Yes')
  const hideFourthBubble=()=>setFourthBubble('No')
  const clickSideBarBtn1=()=>{
    setShowPanel('No')
    setWelfarePanelTitle('We live in good house.')
  }
  const clickSideBarBtn2=()=>{
    setShowPanel('No')
    setWelfarePanelTitle('We have good relationship with human.')
  }
  const clickSideBarBtn3=()=>{
    setShowPanel('No')
    setWelfarePanelTitle('We are fed well.')
  }
  const clickSideBarBtn4=()=>{
    setShowPanel('No')
    setWelfarePanelTitle('We are in very good health.')
  }
  return(
    <div>
      <section className="hero is-fullheight" style={sectionStyle}>
      <Header />
        <div className='hero-body'>
          <div >
            <button className='TransparentButton pos1' onClick={clickSideBarBtn1}>0 day<br/>Born</button>
            <button className='TransparentButton pos2' onClick={clickSideBarBtn2}>200 days<br/>Weaned</button>
            <button className='TransparentButton pos3' onClick={clickSideBarBtn3}>400 days<br/>Finishing Phase</button>
            <button className='TransparentButton pos4' onClick={clickSideBarBtn4}>600 days<br/>Harvested</button>
            <Panel showFirstBubble={showFirstBubble} showSecondBubble={showSecondBubble} showThirdBubble={showThirdBubble} showFourthBubble={showFourthBubble}
                   hideFirstBubble={hideFirstBubble} hideSecondBubble={hideSecondBubble} hideThirdBubble={hideThirdBubble} hideFourthBubble={hideFourthBubble}
                   firstBubble={firstBubble} secondBubble={secondBubble} thirdBubble={thirdBubble} fourthBubble={fourthBubble}
                   showPanel={showPanel} />
            <WelfarePanel title={WelfarePanelTitle} show={showPanel} setShow={setShowPanel}/>
          </div>
        </div>
     </section>
    </div>
    
  )
}

export default Cow