import React from "react";

import {Typography } from "@material-ui/core";

import MobileStepper from "@material-ui/core/MobileStepper";

import Button from "@material-ui/core/Button";


const StoryStepper = ({ timesClicked, handleNextClick, handleBackClick }) => {

    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        handleNextClick();
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        handleBackClick();
    };

    if (timesClicked < 2) {
        return (
            <MobileStepper
                variant="dots"
                steps={3}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button onClick={handleNext} disabled={activeStep === 2}>
                        <Typography color = "primary">Next</Typography>
                    </Button>
                }
                backButton={
                    <Button onClick={handleBack} disabled={activeStep === 0}>
                        <Typography color = "primary">Back</Typography>
                    </Button>
                }
            />
        );
    } else {
        return (
            <MobileStepper
                variant="dots"
                steps={3}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button onClick={handleNext} disabled={activeStep === 2}>
                        <Typography color = "grey">Next</Typography>
                    </Button>
                }
                backButton={
                    <Button onClick={handleBack} disabled={activeStep === 0}>
                        <Typography color = "primary">Back</Typography>
                    </Button>
                }
            />
        );
    }
};

export default StoryStepper;
