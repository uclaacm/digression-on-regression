import React from "react"
import {Button} from "@material-ui/core"

const NextButton = ({handleStep, activeStep}) =>{
    return(
        <Button 
            variant="contained" 
            color="primary" 
            onClick={() => 
            handleStep(activeStep + 1)} 
            disableElevation 
            className="next"
        >
            Next
        </Button>
    )
}

export default NextButton