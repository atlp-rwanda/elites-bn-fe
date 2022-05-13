import React from "react";
import { Modal, Typography, Fade, CircularProgress } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    modal:{
        display: 'Flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    loader:{
        color: '#07539F',
        outline: 'none',
        padding: '50% auto',
        margin: '20% auto',
        textAlign: 'center'
    }
})


const Loader = (props)=>{
    const classes = useStyles();
    return (
        <Modal 
        className={classes.model}
        open={props.open}
        closeAfterTransition
        >
            <Fade in={props.open}>
                <div className={classes.loader}>
                    <CircularProgress />
                    <Typography>wait .........</Typography>
                </div>
            </Fade>
          
        </Modal>
    )
}

export default Loader

