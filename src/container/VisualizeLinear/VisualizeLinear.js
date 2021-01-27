import React from 'react';
import { Typography } from "@material-ui/core";
import './VisualizeLinear.css';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import DataTable from '../../components/VisualizeLinear/DataTable/DataTable'
import CorrelationBody from '../../components/VisualizeLinear/CorrelationBody/CorrelationBody'

const VisualizeLinear = () => {
  return (
    <div className="VisualizeLinear">
        <Typography variant="h4" color = "primary">
            <Box fontWeight="fontWeightMedium" m={0}>
              Step 1: Visualizing Data - Correlation
            </Box>
        </Typography>

        <Card>    
            <CardContent>
            <div className = "cardVisLin">
                <CorrelationBody/>
                <DataTable className/>
            </div>
            </CardContent>
        </Card>
    </div>
  );
}

export default VisualizeLinear;
