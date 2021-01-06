import React from 'react';
import { Stepper, Step, StepButton, Button } from "@material-ui/core";
import './Nav.css';

const Nav = ({ activeStep, setActiveStep }) => {
  const steps = [
    "Linear Regression",
    "Step 1: Visualize Data",
    "Step 2: Estimate Model",
    "Step 3: Testing/Validation",
    "Logistic Regression",
    "Step 1"
  ];

  const handleStep = (step) => {
    setActiveStep(step);
  }

  return (
    <div className="Nav">
      <Stepper nonLinear activeStep={activeStep} orientation="vertical" className="steps">
        {steps.map((label, i) => (
          <Step key={label}>
            <StepButton active={activeStep === i} onClick={() => handleStep(i)}>{label}</StepButton>
          </Step>
        ))} 
      </Stepper>
      {activeStep < steps.length - 1 && <Button variant="contained" color="primary" onClick={() => handleStep(activeStep + 1)} disableElevation className="next">
        NEXT
      </Button>}
    </div>
  );
}

export default Nav;