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
                    <p>
                        Given a data set, how do we  use linear regression?
                    </p>
                    <ol className = "list">
                        <li>Try to visualize the data. Ask yourself, what would the data look like? Hint: Think about correlation.</li>
                        <li>Try estimating the model, i.e., fitting the line of best fit. Hint: Remember y=mx+b from before?</li>
                        <li>Try evaluating the validity and usefulness of the model. Hint: We're going to talk about this some more in the next section</li>
                    </ol>
                </div>
                <DataTable/>
            </div>
        </CardContent>
    </Card>
  );
}

export default LinearSteps;