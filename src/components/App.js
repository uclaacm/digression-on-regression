import React, { useState } from 'react';
import Nav from './Nav/Nav';
import IntroLinear from './IntroLinear/IntroLinear';
import { AppBar, Toolbar, Typography, Container } from "@material-ui/core";

import './App.css';

const App = () => {
  const [activeStep, setActiveStep] = useState(0);

  const getPageContent = (i) => {
    let page;

    // Map indices to pages.
    switch(i) {
      case 0:
        page = <IntroLinear />;
        break;
      case 1:
        page = <Typography>2nd page</Typography>;
        break;
      default:
        page = <Typography>default</Typography>;
        break;
    }

    return page;
  }

  return (  
    <div className="App">
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" onClick={() => setActiveStep(0)} className="appbar">
            A Digression on Regression
          </Typography>
        </Toolbar>
      </AppBar>
      <Nav activeStep={activeStep} setActiveStep={setActiveStep} />
      <Container className="content">
        {getPageContent(activeStep)}
      </Container>
    </div>
  );
}

export default App;
