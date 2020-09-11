import React from 'react';
import Plot from 'react-plotly.js';
import { Button } from '@material-ui/core';

class BasicPlot extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            x: [],
            y: [],
            currX: 0,
            currY: 0,
            permX: [],
            permY: []
        }
        
        for (var i = 0; i < 10; i++) {
            this.state.x.push(i);
            this.state.y.push(3*i);
        }

        this.state.permX = [...this.state.x];
        this.state.permY = [...this.state.y];

    }

    inputHandlerX = (event) => {
        this.setState({currX: event.target.value});
    }

    inputHandlerY = (event) => {
        this.setState({currY: event.target.value});
    }

    submitHandler = () => {
        let newX = parseFloat(this.state.currX);
        let newY = parseFloat(this.state.currY);

        this.setState({
            x: [...this.state.x, newX],
            y: [...this.state.y, newY],
            currX: 0,
            currY: 0
        });

    }

    ResetGraph = () => {
        this.setState({
            x: this.state.permX,
            y: this.state.permY,
            currX: 0,
            currY: 0
        })
    }

    render() {
        return (
            <div>
                <div>
                    <div>
                        X-Value: {" "}
                        <input type="number" value={this.state.currX} onChange={this.inputHandlerX} />
                    </div>
                    <br></br>  
                    <div>
                        Y-Value: {" "}
                        <input type="number" value={this.state.currY} onChange={this.inputHandlerY} />   
                    </div>
                    <Button onClick={this.submitHandler}>Add Coordinate</Button>
                    <Button onClick={this.ResetGraph}>Reset Graph</Button>
                </div>

                <h1>
                    {this.state.num}
                </h1>
                <Plot
                    data={[
                        {
                            x: this.state.x,
                            y: this.state.y,
                            type: 'scatter',
                            mode: 'lines+markers'
                        }
                    ]}
                    layout={{title: 'Experimental Plot'}}
                />
            </div>
        );
    }
}


export default BasicPlot;