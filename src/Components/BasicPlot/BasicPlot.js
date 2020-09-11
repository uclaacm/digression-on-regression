import React from 'react';
import Plot from 'react-plotly.js';
import { Button } from '@material-ui/core';

class BasicPlot extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            x: [],
            y: [],
            currY: 1,
            num: 1,
            currentNum: 1
        }
        
        for (var i = 0; i < 10; i++) {
            this.state.x.push(i);
            this.state.y.push(3*i);
        }
    }

    inputHandler = (event) => {
        this.setState({currentNum: event.target.value});
    }

    submitHandler = () => {
        let newCopy = parseFloat(this.state.currentNum);
        let newX = this.state.x;
        let newY = this.state.y;
        this.setState({num: newCopy});
        newX.push(newCopy);
        newY.push(this.state.currY)
        this.setState({currY: this.state.currY+1})
        this.setState({x: newX, y: newY});

        console.log(this.state.x);
        console.log(this.state.y);
    }

    render() {
        return (
            <div>
                <input type="number" value={this.state.currentNum} onChange={this.inputHandler} />
                <Button onClick={this.submitHandler}>Add Coordinate</Button>
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