import React from 'react';
import { Typography } from "@material-ui/core";
import Overview from '../../components/IntroLinear/Overview/Overview'
import StoryLine from '../../components/IntroLinear/StoryLine/StoryLine'
import Box from '@material-ui/core/Box';
import LinearPurpose from '../../components/IntroLinear/LinearPurpose/LinearPurpose'
import GradeApplication from '../../components/IntroLinear/GradeApplication/GradeApplication'
import LinearSteps from '../../components/IntroLinear/LinearSteps/LinearSteps'

const IntroLinear = () => {
  return (
    <div className="IntroLinear">
        <Typography variant="h4" color = "primary">
            <Box fontWeight="fontWeightMedium" m={1}>
              Intro to Linear Regression
            </Box>
        </Typography>
        <div className = "sections">
          <Overview/>
          <StoryLine/>
          <LinearPurpose/>
          <GradeApplication/>
          <LinearSteps/>
        </div>
    </div>
  );
}

export default IntroLinear;