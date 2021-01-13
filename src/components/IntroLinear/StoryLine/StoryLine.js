import React from 'react';
import './StoryLine.css';
import { Typography } from "@material-ui/core";
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import StoryLine1 from '../../../assets/StoryLine1.svg'
import StoryLine2 from '../../../assets/StoryLine2.svg'
import StoryLine3 from '../../../assets/StoryLine3.svg'
import StoryStepper from "./StoryStepper"

const StoryLine = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    
    const handleNextClick = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBackClick = () => {
        setActiveStep(activeStep - 1);
    };

    const getImgContent = (i) => {
        let image;
    
        // Map indices to pages.
        switch(i) {
          case 0:
            image = <img className = "storyImg" src = {StoryLine1} alt = ""/>
            break;
          case 1:
            image = <img className = "storyImg" src = {StoryLine2} alt = ""/>
            break;
          default:
            image = <img className = "storyImg" src = {StoryLine3} alt = ""/>
            break;
        }
    
        return image;
      }

  return (
      <div className = "StoryLine">
        <Card>
            <CardContent>
                <Typography variant = "h5">
                    <Box fontWeight="fontWeightMedium" m={1}>
                        Before we get into things, let's look at a scenario when we would want to use linear regression...
                    </Box>
                </Typography>
                {getImgContent(activeStep)}
                <StoryStepper setActiveStep = {setActiveStep} activeStep = {activeStep} handleNextClick={handleNextClick} handleBackClick={handleBackClick} />
            </CardContent>
        </Card>
      </div>
  );
}
  
export default StoryLine;