import React from 'react';
import './LinearPurpose.css';
import { Typography } from "@material-ui/core";
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import LinearPurposeMan from '../../../assets/LinearPurposeMan.svg'

const LinearPurpose = () => {
  return (
      <div className = "LinearPurpose">
        <Card>
            <CardContent>
                <div className = "contain">
                <div className = "description">
                    <Typography variant = "h5">
                        <Box fontWeight="fontWeightMedium" m={1}>
                            What is Linear Regression, and why do we care?
                        </Box>
                    </Typography>
                    <p>
                        We care because regression tells us the relationship between two or more variables.
                    </p>
                    <p>
                        Data from the real world rarely carries a relationship among its variables that can be 
                        modeled perfectly by a function such as a linear function, a quadratic, an exponential, etc.  
                        Linear regression lines take the form:
                    </p>
                    <p className = "slope">
                        y = mx + b
                    </p>
                    <p>
                        The goal of linear regression is to create a line (or hyperplane) that models the universal relationship 
                        between several inputs and potentially several outputs (but ususally just one).
                    </p>
                </div>
                <img src = {LinearPurposeMan} alt = "" className = "linearPurposeMan"/>
                </div>
            </CardContent>
        </Card>
      </div>
  );
}

export default LinearPurpose;