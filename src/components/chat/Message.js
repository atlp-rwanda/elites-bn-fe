import React from "react";
import { makeStyles } from '@mui/styles';
import Avatar from "@material-ui/core/Avatar";
import { fontWeight } from "@mui/system";

const useStyles = makeStyles({
    messageRow:{
        display: 'flexbox',
        padding: '10px',
        ['@media (max-width:600px)']: {
          display: 'block'
        },
    },

     messageRowRight: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginLeft: '100px',
        ['@media (max-width:600px)']: {
          display: 'block'
        }

     },

     messageBlue: {
        position: "relative",
        marginLeft: "20px",
        marginBottom: "10px",
        padding: "10px",
        backgroundColor: "#A8DDFD",
        fontWeight: '400',
        width: "60%",
        //height: "50px",
        textAlign: "left",
        font: "400 .9em 'Open Sans', sans-serif",
        border: "1px solid #97C6E3",
        borderRadius: "10px",
        "&:after": {
          content: "''",
          position: "absolute",
          width: "0",
          height: "0",
          borderTop: "15px solid #A8DDFD",
          borderLeft: "15px solid transparent",
          borderRight: "15px solid transparent",
          top: "0",
          left: "-15px"
        },
        "&:before": {
          content: "''",
          position: "absolute",
          width: "0",
          height: "0",
          borderTop: "17px solid #97C6E3",
          borderLeft: "16px solid transparent",
          borderRight: "16px solid transparent",
          top: "-1px",
          left: "-17px"
        }
      },
      messageOrange: {
        position: "relative",
        marginRight: "20px",
        marginBottom: "10px",
        padding: "10px",
        backgroundColor: "#07539F",
        color: '#ffffff',
        width: "60%",
        //height: "50px",
        textAlign: "left",
        font: "400 .9em 'Open Sans', sans-serif",
        border: "1px solid #07539F",
        borderRadius: "10px",
        "&:after": {
          content: "''",
          position: "absolute",
          width: "0",
          height: "0",
          borderTop: "15px solid #07539F",
          borderLeft: "15px solid transparent",
          borderRight: "15px solid transparent",
          top: "0",
          right: "-15px"
        },
        "&:before": {
          content: "''",
          position: "absolute",
          width: "0",
          height: "0",
          borderTop: "17px solid #07539F",
          borderLeft: "16px solid transparent",
          borderRight: "16px solid transparent",
          top: "-1px",
          right: "-17px"
        }
      },
  
      messageContent: {
        padding: 0,
        marginBottom: '15px',
        width: '90%',
        overflow: 'auto',
        ['@media (max-width:600px)']: {
          padding: '10px'
        },
        ['@media (max-width:900px)']: {
          padding: '10px'
        },
        ['@media (max-width:1200px)']: {
          padding: '10px'
        }
      },
      messageTimeStampRight: {
        position: "absolute",
        fontSize: ".85em",
        fontWeight: "300",
        bottom: "3px",
        right: "5px",
        ['@media (max-width:600px)']: {
          paddingTop: '100%',
        },
        ['@media (max-width:900px)']: {
          marginTop: '50px'
        },
        ['@media (max-width:1200px)']: {
          marginTop: '50px'
        }
      },
      avatarNothing: {
        color: "transparent",
        backgroundColor: "transparent",
        width: '40px',
        height: '40px',
      },
      displayName: {
        marginLeft: "20px",
        fontWeight: 'bold',
        color: '#07539F',
      },
      messageContentRight:{
        padding: '10px',
        marginBottom: '15px',
        width: '90%',
        overflow: 'auto',
        ['@media (max-width:600px)']: {
          padding: '10px'
        },
        ['@media (max-width:900px)']: {
          padding: '10px'
        },
        ['@media (max-width:1200px)']: {
          padding: '10px'
        }
      },
      timeStampRight:{
        position: "absolute",
        fontSize: ".85em",
        fontWeight: "300",
        marginTop: "10px",
        bottom: "3px",
        right: "5px",
        paddingTop: "30px",
        ['@media (max-width:600px)']: {
          paddingTop: '100%',
        },
        ['@media (max-width:900px)']: {
          marginTop: '50px'
        },
        ['@media (max-width:1200px)']: {
          marginTop: '50px'
        }
      }
  
})

export const MessageLeft = (props) =>{
  const message = props.message ? props.message : "no message";
  const timestamp = props.timestamp ? props.timestamp : "";
  const photoURL = props.photoURL ? props.photoURL : "dummy.js";
  const displayName = props.displayName ? props.displayName : "user";
  const classes = useStyles();

  return (
      <>
      <div className={classes.messageRow}>
        <Avatar
          alt={displayName}
          src={photoURL}
        ></Avatar>
        <div>
          <div className={classes.displayName}>{displayName}</div>
          <div className={classes.messageBlue}>
            <div>
              <p className={classes.messageContent}>{message}</p>
            </div>
            <div className={classes.messageTimeStampRight}>{timestamp}</div>
          </div>
        </div>
      </div>
      </>
  );
};

export const MessageRight = (props) =>{
  const classes = useStyles();
  const message = props.message ? props.message : "no message";
  const timestamp = props.timestamp ? props.timestamp : "";
  return (
    <div className={classes.messageRowRight} >
      <div className={classes.messageOrange}>
        <p className={classes.messageContentRight}>{message}</p>
        <div className={classes.timeStampRight}>{timestamp}</div>
      </div>
    </div>
  );
}