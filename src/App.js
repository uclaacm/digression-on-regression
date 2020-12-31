import React from 'react';
import './App.css';
import Intro from './Components/Intro/Intro.js';
import BasicPlot from './Components/BasicPlot/BasicPlot.js';
import DefLinear from './Components/DefLinear/DefLinear.js';
import {BrowserRouter as Router,
        Switch,
        Route
      } from 'react-router-dom';
import LinearGoal from './Components/LinearGoal/LinearGoal.js';

function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Intro />
        </Route>
        <Route exact path="/linear">
          <DefLinear />
        </Route>
        <Route path="/LinearGoal">
          <LinearGoal />
        </Route>
        <Route path="/chart">
          <BasicPlot />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
