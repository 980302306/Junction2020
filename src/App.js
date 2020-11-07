import React from 'react'
import Cow from './components/Cow'
import Header from './components/Header'
import Album from './components/Album'
import CO2 from './components/CO2'
import WaterVisualizatoin from './components/WaterVisualization'
import {
  Switch,
  Route
} from 'react-router-dom'
const App=()=>{

  return(
    <div >
      <Switch>
        <Route path='/meat/cows'>
          <Cow />
          {/* <WaterVisualizatoin /> */}
        </Route>
        <Route path='/meat/visualization'>
          <CO2 />
        </Route>
        <Route path='/'>
          <Album />
        </Route>
      </Switch>
    </div>
  )
}

export default App