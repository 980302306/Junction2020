import React,{useEffect} from 'react'
import Cow from './components/Cow'
import Album from './components/Album'
import CO2 from './components/CO2'
import H2O from './components/H2O'
import Env from './components/Env'
import {
  Switch,
  Route
} from 'react-router-dom'
import service from './service/launch'
const App=()=>{
  // useEffect(()=>{
  //   service.start()
  //   .then(data=>console.log(data))
  //   .catch(error=>console.log(error))
  // },[])
  
  return(
    <div >
      <Switch>
        <Route path='/meat/cows'>
          <Cow />
        </Route>
        <Route path='/meat/visualization'>
          <Env />
        </Route>
        <Route path='/env/co2'>
          <CO2 />
        </Route>
        <Route path='/env/h2o'>
          <H2O/>
        </Route>
        <Route path='/'>
          <Album />
        </Route>
      </Switch>
    </div>
  )
}

export default App