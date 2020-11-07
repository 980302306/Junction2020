import FeedingViz from './FeedingViz'
import HousingViz from './HousingViz'
import HealthViz from './HealthViz'
import BehaviourViz from './BehaviourViz'
// import React, { useRef, useLayoutEffect } from 'react';
import React from 'react';
const Vizcontent=({btnIndex})=>{
    if(btnIndex==="1"){
        return(
            <FeedingViz/>
        )
    }
    if(btnIndex==="2"){
        return(
            <HousingViz/>
        )
    }
    if(btnIndex==="3"){
        return(
            <HealthViz/>
        )
    }
    if(btnIndex==="4"){
        return(
            <BehaviourViz/>
        )
    }
}
export default Vizcontent