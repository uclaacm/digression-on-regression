import React, { useState } from 'react';
import Nav from './Nav/Nav';
import IntroLinear from './IntroLinear/IntroLinear';
import { AppBar, Toolbar, Typography, Container } from "@material-ui/core";

import './App.css';

const App = () => {
  const [activeStep, setActiveStep] = useState(0);

  const getPageContent = (i) => {
    let page;

    switch(i) {
      case 0:
        page = <IntroLinear />;
        break;
      case 1:
        page = <div>2nd page</div>;
        break;
      default:
        page = <div>default page</div>
        break;
    }

    return page;
  }

  return (  
    <div className="App">
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6">
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
