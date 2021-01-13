import React from 'react';
import './Overview.css';
import { Typography } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';

const Overview = () => {
  return (
      <div className = "Overview">
        <Card className="card">
          <CardContent variant = "outlined">
            <Typography variant="h5">
              <Box fontWeight="fontWeightMedium" m={1}>
                Let's talk about Regression
              </Box>
            </Typography>

            <div className ="body">
              <p>
                In this learning lab, we'll answer the following topics:
              </p>
                <ol className = "list">
                    <li>What is linear and logistic regression?</li>
                    <li>How do you calculate linear and logistic regression?</li>
                    <li>When and why do we use liner and logistic regression?</li>
                </ol>
              </div>
            </CardContent>
        </Card>
      </div>
  );
}

export default Overview;