import React from 'react';
import './LinearGoal.css';
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom';

function LinearGoal() {
    const history=useHistory()
    const onBackClick = () => {
      history.push("/linear");
    }
    return (
        <div style={{textAlign: "center", maxWidth: "70em", margin: "0 auto"}}>
            <h1 className="header">
                The Goal
            </h1>
            <div>
                <p className="Content">
                    The goal of linear regression is to create a line (or hyperplane)
                    that models the universal relationship between serveral inputs and potentially
                    several outputs (but usually just one).
                </p>
                <div>
                    <div>
                        <Button variant="contained" className="Green-button">
                            Next
                        </Button>
                    </div>
                    <div>
                        <Button variant="contained" className="Green-button" onClick={onBackClick}>
                            Back
                        </Button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default LinearGoal;