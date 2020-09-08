import React from 'react';
import './App.css';
import {faChartLine} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Button from '@material-ui/core/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Intro(props) {
    return (
        <div style={{backgroundColor: '#FBFBFB'}}>
          <header>
            <h1 className="introHeader">Linear vs. Logistic Regression</h1>
          </header>
          <div>
            <p className="App-header">
              Digression on Regression!
            </p>
            <Container>
              <Row>
                <Col xs={12} md={8}><p id="intro">What is linear and logistic regression? 
                Why does it even matter? This lesson will give you an introduction to 
                linear and logistic regression and explain why it is such an important topic. </p> </Col>
                <Col xs={6} md={4}><FontAwesomeIcon id="chart-icon" icon={faChartLine}/></Col>
              </Row>
            </Container>
    
            <div style={{textAlign: 'center', marginTop: "2vmin"}}>
              <Button variant="contained"
                style={{
                  backgroundColor: "#95CF67",
                  color: "white",
                  fontSize: "3vmin"
                }}
              >
                Start
              </Button>
            </div>
    
          </div>
        </div>
      );
}

export default Intro;