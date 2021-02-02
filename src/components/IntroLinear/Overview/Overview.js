import React from 'react';
import './Overview.css';
import { Typography } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';

const Overview = () => {
  return (
      <div className = "Overview">
        <Card>
          <CardContent variant = "outlined">
            <Typography variant="h5">
              <Box fontWeight="fontWeightMedium" m={1}>
                Let's talk about Regression
              </Box>
            </Typography>

            <div className ="body">
              <Typography>
                In this learning lab, we'll answer the following topics:
              </Typography>
                <ol className = "list">
                    <li><Typography>What is linear and logistic regression?</Typography></li>
                    <li><Typography>How do you calculate linear and logistic regression?</Typography></li>
                    <li><Typography>When and why do we use liner and logistic regression?</Typography></li>
                </ol>
              </div>
            </CardContent>
        </Card>
      </div>
  );
}

export default Overview;