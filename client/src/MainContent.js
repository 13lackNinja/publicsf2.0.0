import React from 'react'
import {Switch, Route } from 'react-router-dom';
import Home from './Home.js'
import Events from './Events.js'
import About from './About.js'
import Corporate from './Corporate.js'
import Connect from './Connect.js'
import Specs from './Specs.js'

import './styles/MainContent.css'

import grit from './images/grit.png'

const MainContent = () => (
  <div id="main-content">
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/events" component={Events}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/corporate" component={Corporate}></Route>
      <Route path="/connect" component={Connect}></Route>
      <Route path="/specs" component={Specs}></Route>
    </Switch>
    <div
      id="grit"
      style={{ backgroundImage: `url(${grit})`}}>
    </div>
  </div>
)

export default MainContent
