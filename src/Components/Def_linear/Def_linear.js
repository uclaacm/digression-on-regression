import React from 'react';
import './Def_linear.css';
import Button from '@material-ui/core/Button';

function Def_linear(props) {
    return (

        <div style={{textAlign: "center", maxWidth: "70em", margin: "0 auto"}}>
            <h1 className="header">
                What is Linear Regression?
            </h1>
            <div className="Content">
                <p>
                    <span id="bold">
                        Regression &nbsp;
                    </span>
                    refers to the relationship between two or more variables.
                </p>
                <div>
                    <p>
                        Data from the real world &nbsp;
                        <span id="bold"> 
                            rarely &nbsp;
                        </span>
                        carries a relationship among its variables that can be &nbsp;
                        <span id="bold">
                            modeled perfectly &nbsp;
                        </span>
                        by a function such as a linear function, a quadratic, and exponential, etc. Linear regression lines take the form:
                    </p>
                    <div>
                        <h2>
                            Y = Mx + b
                        </h2>
                    </div>
                    <div style={{marginTop: "3em"}}>
                        <div style={{float: "right", marginRight: "3em"}}>
                            <Button variant="contained"
                                style={{
                                    backgroundColor: "#95CF67",
                                    color: "white",
                                    fontSize: "1em"
                                    }}>
                                Next
                            </Button>
                        </div>
                        <div style={{float: "left", marginLeft: "3em"}}>
                            <Button variant="contained"
                                style={{
                                    backgroundColor: "#95CF67",
                                    color: "white",
                                    fontSize: "1em"
                                    }}>
                                Back
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Def_linear;