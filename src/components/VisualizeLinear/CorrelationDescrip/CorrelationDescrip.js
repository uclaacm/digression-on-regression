import React from 'react';
import './CorrelationDescrip.css'
import PositiveCorrelation from '../../../assets/VisualizeLinear/PositiveCorrelation.svg'
import NegativeCorrelation from '../../../assets/VisualizeLinear/NegativeCorrelation.svg'
import Box from '@material-ui/core/Box';
import { Typography } from "@material-ui/core";
import CorrelationModal from '../CorrelationModal/CorrelationModal'
import Button from '@material-ui/core/Button';

const CorrelationDescrip = () => {
    const [open, setOpen] = React.useState(0);

    const handleOpenA = () => {
        setOpen(1)
    }

    const handleOpenB = () => {
        setOpen(2)
    }

    const handleClose = () => {
        setOpen(0)
    }
    // const [openA, setOpenA] = React.useState(0);
    // const [openB, setOpenB] = React.useState(0);
    // console.log("CorrelationModal")
  
    // const handleOpenA = () => {
    //   setOpenA(true);
    // };

    // const handleOpenB = () => {
    //     setOpenB(true);
    // };
    
    // const handleCloseA = () => {
    //   setOpenA(false);
    // };
    
    // const handleCloseB = () => {
    //     setOpenB(false);
    // };

    return(
        <div className = "CorrelationDescrip">

            <div className = "visualizeDataDescrip">
                <Box fontWeight="fontWeightMedium" m={0}>
                    <Typography variant = "h5">
                        Let’s see what our data set looks like
                    </Typography>
                </Box>
                <p>
                    What do you think the data set on the right would look like on a graph? Click on the button below the 
                    graph that you think represents the data. Hint: Think about correlation.
                </p>
            </div>          

            <img className = "positiveCorrelation" src = {PositiveCorrelation} alt = ""/>
            
            <div className="graphButton">
                <Button onClick = {handleOpenA} variant="contained" color = "primary"> Graph A </Button>
            </div>

            <img className = "negativeCorrelation" src = {NegativeCorrelation} alt = ""/>
            
            <div className = "graphButton">
                <Button onClick = {handleOpenB} variant="contained" color = "primary"> Graph B </Button>
            </div>
            <CorrelationModal open = {open} handleClose = {handleClose}/>

        </div>
    )
}

export default CorrelationDescrip;