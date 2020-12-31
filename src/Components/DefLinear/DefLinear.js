import React from 'react';
import './DefLinear.css';
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom';

function DefLinear(props) {
    const history=useHistory()
    const onBackClick = () => {
      history.push("/");
    }
    const onNextClick = () => {
        history.push("/LinearGoal");
    }

    return (

        <div style={{textAlign: "center", maxWidth: "70em", margin: "0 auto"}}>
            <h1 className="header">
                What is Linear Regression?
            </h1>
            <div className="Content">
                <p>
                    <span className="bold">
                        Regression {" "}
                    </span>
                    refers to the relationship between two or more variables.
                </p>
                <div>
                    <p>
                        Data from the real world {" "}
                        <span className="bold"> 
                            rarely
                        </span>
                            {" "}carries a relationship among its variables that can be {" "}
                        <span className="bold">
                            modeled perfectly {" "}
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
                            <Button variant="contained" onClick={onNextClick}
                                style={{
                                    backgroundColor: "#95CF67",
                                    color: "white",
                                    fontSize: "1em"
                                    }}>
                                Next
                            </Button>
                        </div>
                        <div style={{float: "left", marginLeft: "3em"}}>
                            <Button variant="contained" onClick={onBackClick}
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

export default DefLinear;