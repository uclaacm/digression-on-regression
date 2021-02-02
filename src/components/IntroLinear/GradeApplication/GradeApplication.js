import React from 'react';
import './GradeApplication.css';
import { Typography } from "@material-ui/core";
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import testPaper from '../../../assets/IntroLinear/testPaper.svg'

const GradeApplication = () => {
  return (
    <Card className = "cardContainer">
        <CardContent>
            <div className = "GradeApplication">
                <div className = "gradeAppDescrip">
                    <Typography variant = "h5">
                        <Box fontWeight="fontWeightMedium" m={1}>
                            What does this have to do with our grades?
                        </Box>
                    </Typography>
                    <Typography>
                        Like I mentioned, we can use regression when we’re trying to predict a continuous value such as
                        our grade on a test.
                    </Typography>
                    <Typography>
                        So we can use regression to predict our next test grade.
                    </Typography>
                </div>

                <img src = {testPaper} alt = ""/>
            </div>
        </CardContent>
    </Card>
  );
}

export default GradeApplication;