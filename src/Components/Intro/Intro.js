import React from 'react';
import './Intro.css';
import {faChartLine} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {useHistory} from 'react-router-dom';

function Intro(props) {
    const history=useHistory()
    const onStartClick = () => {
      history.push("/linear");
    }
    return (
        <div style={{backgroundColor: '#FFFFFF'}}>

          <header>
            <h1 className="introHeader">Linear vs. Logistic Regression</h1>
          </header>

          <div>
            <p id="Digression">
              Digression on Regression
            </p>

            <div>
              <Grid container spacing={2}>
                <Grid item xs={7}>
                  <p id="intro">
                    What is linear and logistic regression? 
                    Why does it matter? This lesson will give you an introduction to 
                    linear and logistic regression and explain why it is such an important topic. 
                  </p> 
                </Grid>
                <Grid item xs={3}>
                  <FontAwesomeIcon id="chart-icon" icon={faChartLine}/>
                </Grid>
              </Grid>
            </div>

            <div className="ParagraphStyle">
              <Button onClick={onStartClick} variant="contained" className="Green-button">
                Start
              </Button>
            </div>
    
          </div>
        </div>
      );
}

export default Intro;