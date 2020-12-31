import React from 'react';
import './Overview.css';
import Plot from 'react-plotly.js';
import Grid from '@material-ui/core/Grid';


class Overview extends React.Component {

    constructor(props) {
        super(props);
            
        this.state = {
            percentage: [40,40,40,48,44,54,64,88,56,64,75,68,77,74,80,85,83,84,89,90,94,50,90,95,98,70,89,100,92,94,87,95,100,96,98,100,92,88,98,100],
            hoursSlept: [0,2,3,3,3,4,4,4,4,5,5,6,6,6,6,7,7,7,7,7,7,8,8,8,8,8,8,8,9,9,9,9,9,9,10,10,10,10,11,12]
        }

    }

    render() {
        return(
            <div id="background">

                <h1 className="header" id="headerColor">Step 2 - Estimating the Model: Overview</h1>

                <Grid container spacing={2}>
                    <Grid item xs={5}>
                        <div className="body">
                            <p>

                                <div className="header" id="bodyColor">
                                    How do we estimate a model?
                                </div>

                                <div className="bodyParagraph">
                                    Now that we have an idea of what the data should look like.
                                    Let's try to estimate a model by fitting a line of the form <strong>Y = Mx + b </strong> to the data.
                                </div>

                                <div className="bodyParagraph">
                                    We use <strong>Mean Squared Error (MSE)</strong> to figure out the line of best fit.
                                    (to learn more about <strong>MSE</strong> click here) The line of best fit will try to minimize the MSE.
                                </div>
                                
                                <div className="bodyParagraph">
                                    Another tool that we use to find the line of best fit is <strong>gradient descent </strong> 
                                    (to learn more about gradient descent click here)
                                </div>

                                <div className="bodyParagraph">
                                    But for now, the simple explanation is that gradient descent will tell you
                                    where the difference between our model and the expected value is as small as possible.
                                </div>
                            </p>
                        </div>

                    </Grid>

                    <Grid item xs>
                        <div className="body">
                            <Plot 
                                data={[
                                    {
                                        x: this.state.percentage,
                                        y: this.state.hoursSlept,
                                        type: 'scatter',
                                        mode: 'markers'
                                    }
                                ]}
                                layout={{title: 'Students: Comparing Test Grade to Hours Slept',
                                        xaxis: {title: 'Grade (%)'},
                                        yaxis: {title: 'Hours Slept'}}}
                            />
                        </div>
                    
                    </Grid>

                </Grid>

            </div>
        )
    }
}


export default Overview;