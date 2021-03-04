import React from 'react';
import { Stepper, Step, StepButton } from '@material-ui/core';
import './Nav.css';

const Nav = ({ activeStep, handleStep, steps }) => (
  <div className="Nav">
    <Stepper nonLinear activeStep={activeStep} orientation="vertical" className="steps">
      {steps.map((label, i) => (
        <Step key={label}>
          <StepButton active={activeStep === i} onClick={() => handleStep(i)}>{label}</StepButton>
        </Step>
      ))}
    </Stepper>
  </div>
);

export default Nav;
