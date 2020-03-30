// /client/App.js
import React, { Component } from 'react';
import Family from './components/Family';
import {Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Landing from './components/Landing';
import Mapp from './components/Mapp';
import Mapp2 from './components/Mapp2'

import './App.css';

 
class App extends Component {
  // initialize our state
  state = {
  };
  speed=2
 
 
  
 
  // here is our UI
  // it is easy to understand their functions when you
  // see them render into our screen
  render() {
    return (
      <div>      <Router>
        <Fragment>
          <Route component={Navigation} />
          <Route exact path="/" component={Mapp} />
            <Switch>
              <Route exact path="/family" component={Family}/>
              <Route exact path="/Mapp2" component={Mapp2}/>

            </Switch>
        </Fragment>
      </Router>

      </div>
    );
  }
}
 
export default App;