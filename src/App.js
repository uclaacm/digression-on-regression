import React, { useState } from 'react';
import {
  AppBar, Toolbar, Typography, Container, Button, Grid, Box,
} from '@material-ui/core';
import Nav from './components/Nav/Nav';

import IntroLinear from './container/IntroLinear/IntroLinear';
import VisualizeLinear from './container/VisualizeLinear/VisualizeLinear';
import './App.css';

const App = () => {
  const steps = [
    'Linear Regression',
    'Step 1: Visualize Data',
    'Step 2: Estimate Model',
    'Step 3: Testing/Validation',
    'Logistic Regression',
    'Step 1',
  ];

  const [activeStep, setActiveStep] = useState(0);

  const handleStep = (step) => {
    setActiveStep(step);
  };

  const getPageContent = (i) => {
    let page;

    // Map indices to pages.
    switch (i) {
      case 0:
        page = <IntroLinear />;
        break;
      case 1:
        page = <VisualizeLinear />;
        break;
      default:
        page = <Typography>default</Typography>;
        break;
    }

    return page;
  };

  return (
    <div className="App">
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" onClick={() => handleStep(0)} className="appbar">
            A Digression on Regression
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={3}>
          <Nav activeStep={activeStep} handleStep={handleStep} steps={steps} />
        </Grid>
        <Grid item xs={12} sm={9}>
          <Container className="content">
            {getPageContent(activeStep)}
          </Container>
        </Grid>
      </Grid>
      <Grid container justify="flex-end">
        <Box m={3}>
          {activeStep < steps.length - 1 && (
          <Button variant="contained" color="primary" onClick={() => handleStep(activeStep + 1)} disableElevation className="next">
            Next
          </Button>
          )}
        </Box>
      </Grid>
    </div>
  );
};

export default App;
