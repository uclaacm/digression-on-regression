import React from 'react';
import './LinearPurpose.css';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import LinearPurposeMan from '../../../assets/IntroLinear/LinearPurposeMan.svg';

const LinearPurpose = () => (
  <div className="LinearPurpose">
    <Card>
      <CardContent>
        <div className="contain">
          <div className="description">
            <Typography variant="h5">
              <Box fontWeight="fontWeightMedium" m={1}>
                What is Linear Regression, and why do we care?
              </Box>
            </Typography>
            <Typography>
              We care because regression tells us the relationship between two or more variables.
            </Typography>
            <Typography>
              Data from the real world rarely carries a relationship among its variables that can be
              modeled perfectly by a function such as a linear function, a quadratic, an exponential, etc.
              Linear regression lines take the form:
            </Typography>
            <Typography className="slope">
              y = mx + b
            </Typography>
            <Typography>
              The goal of linear regression is to create a line (or hyperplane) that models the universal relationship
              between several inputs and potentially several outputs (but ususally just one).
            </Typography>
          </div>
          <img src={LinearPurposeMan} alt="" className="linearPurposeMan" />
        </div>
      </CardContent>
    </Card>
  </div>
);

export default LinearPurpose;
