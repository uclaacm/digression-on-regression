import React from 'react';
import './LinearSteps.css';
import { Typography } from "@material-ui/core";
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import DataTable from '../../VisualizeLinear/DataTable/DataTable'

const LinearSteps = () => {
  return (
    <Card className = "stepsCard">
        <CardContent>
            <div className = "LinearSteps">
                <div className = "stepsDescrip">
                    <Typography variant = "h5">
                        <Box fontWeight="fontWeightMedium" m={1}>
                            What are the steps to applying Linear Regression?
                        </Box>
                    </Typography>
                    <Typography>
                        Given a data set, how do we  use linear regression?
                    </Typography>
                    <ol className = "list">
                        <li><Typography>Try to visualize the data. Ask yourself, what would the data look like? Hint: Think about correlation. </Typography></li>
                        <li><Typography>Try estimating the model, i.e., fitting the line of best fit. Hint: Remember y=mx+b from before?</Typography></li>
                        <li><Typography>Try evaluating the validity and usefulness of the model. Hint: We're going to talk about this some more in the next section</Typography></li>
                    </ol>
                </div>
                <DataTable/>
            </div>
        </CardContent>
    </Card>
  );
}

export default LinearSteps;