import React from 'react'
import Modal from '@material-ui/core/Modal'
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        modalBody:{
            background: "white",
            height: "40vh",
            margin: "20vh 20vw",
            padding: "5vh",
        },
        text: {
            lineHeight: "6vh",
        },
        exit:{
            marginTop: "10vh",
            fontSize: "17px"
        }
        // eslint-disable-next-line comma-dangle
    })
);

//{openA, openB, handleCloseA, handleCloseB}
const CorrelationModal = ({open, handleClose}) =>{

    console.log("This is open at the beginning:", open)
    const classes = useStyles();
      
    const bodyA = (
        <div className = {classes.modalBody}>
            <h1 id="simple-modal-title">Good job, graph A is correct!</h1>
                <p id="simple-modal-description" className = {classes.text}>
                    The data is positively correlated. You can tell that this is true because as hours of sleep increase in the
                    data table, test scores also increase. This means that the data is directly proportional, and thus has a 
                    positive correlation!
                </p>
                <p className = {classes.exit}>
                    Note: To exit this popup, click anywhere outside the box
                </p>
            <CorrelationModal />
        </div>
    );
    
    const bodyB = (
        <div className = {classes.modalBody}>
            <h1 id="simple-modal-title">Sorry, graph B is incorrect.</h1>
                <p id="simple-modal-description" className = {classes.text}>
                    Don't worry, try again! Think about how test scores change as we increase the hours of sleep that each student
                    gets. Do you notice anything about their relationship? Hint: Recall discussions about direct and indirect
                    relationships from math class
                </p>
                <p className = {classes.exit}>
                    Note: To exit this popup, click anywhere outside the box
                </p>
            <CorrelationModal />
        </div>
    );

    const getBodyContent = (i) => {
        let body;
        // Map indices to pages.
        console.log("This is open befor the switch case:", open)
        switch(i) {
            case 1:
                body = bodyA
                break;
            case 2:
                body = bodyB
                break;
            default:
                break;
        
        }
        console.log("This is open after the switch case:", open)
        return body;
    }

    return(
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            {getBodyContent(open)}
        </Modal>
    )
    
}

export default CorrelationModal