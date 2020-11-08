import React,{useState} from 'react'
import Background from '../img/cow.jpg'

import Header from './Header'
import './Button.css'
import './Font.css'
import WelfarePanel from './WelfarePanel'
import Panel from './Panel'

// import SideBar from './SideBar'

const Cow=()=>{
  const [firstBubble,setFirstBubble]=useState('No')
  const [secondBubble,setSecondBubble]=useState('No')
  const [thirdBubble,setThirdBubble]=useState('No')
  const [fourthBubble,setFourthBubble]=useState('No')
  const [showPanel,setShowPanel]=useState('Yes')
  const [WelfarePanelTitle,setWelfarePanelTitle]=useState('')
  const [SidebarBthIndex,setSidebarBthIndex]=useState('')
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
    setSidebarBthIndex("1")
    setFirstBubble('No')
  }
  const clickSideBarBtn2=()=>{
    setShowPanel('No')
    setWelfarePanelTitle('We have good relationship with human.')
    setSidebarBthIndex("2")
    setSecondBubble('No')
  }
  const clickSideBarBtn3=()=>{
    setShowPanel('No')
    setWelfarePanelTitle('We are fed well.')
    setSidebarBthIndex("3")
    setThirdBubble('No')
  }
  const clickSideBarBtn4=()=>{
    setShowPanel('No')
    setWelfarePanelTitle('We are in very good health.')
    setSidebarBthIndex("4")
    setFourthBubble('No')
  }
  return(
    <div>
      <section className="hero is-fullheight" style={sectionStyle}>
      <Header />
        <div className='hero-body'>
          <div >
            {/* <SideBar/> */}
            <button className='TransparentButton pos1 WhiteRegular' onClick={clickSideBarBtn1}>0 day<br/>Born</button>
            <button className='TransparentButton pos2 WhiteRegular' onClick={clickSideBarBtn2}>200 days<br/>Weaned</button>
            <button className='TransparentButton pos3 WhiteRegular' onClick={clickSideBarBtn3}>400 days<br/>Finishing Phase</button>
            <button className='TransparentButton pos4 WhiteRegular' onClick={clickSideBarBtn4}>600 days<br/>Harvested</button>
            <Panel showFirstBubble={showFirstBubble} showSecondBubble={showSecondBubble} showThirdBubble={showThirdBubble} showFourthBubble={showFourthBubble}
                   hideFirstBubble={hideFirstBubble} hideSecondBubble={hideSecondBubble} hideThirdBubble={hideThirdBubble} hideFourthBubble={hideFourthBubble}
                   firstBubble={firstBubble} secondBubble={secondBubble} thirdBubble={thirdBubble} fourthBubble={fourthBubble}
                   setShow1={clickSideBarBtn1} setShow2={clickSideBarBtn2} setShow3={clickSideBarBtn3} setShow4={clickSideBarBtn4}
                   showPanel={showPanel}/>
            <WelfarePanel title={WelfarePanelTitle} show={showPanel} setShow={setShowPanel} btnIndex={SidebarBthIndex}/>
          </div>
        </div>
     </section>
    </div>
    
  )
}

export default Cow