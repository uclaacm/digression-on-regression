import React from 'react';
import './App.css';
import Intro from './Components/Intro/Intro.js';
import DefLinear from './Components/DefLinear/DefLinear.js';
import {BrowserRouter as Router,
        Switch,
        Route
      } from 'react-router-dom';
import LinearGoal from './Components/LinearGoal/LinearGoal.js';
import BasicPlot from './Components/BasicPlot/BasicPlot.js';

function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <BasicPlot />
          {/* <Intro /> */}
        </Route>
        <Route exact path="/linear">
          <DefLinear />
        </Route>
        <Route path="/LinearGoal">
          <LinearGoal />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
