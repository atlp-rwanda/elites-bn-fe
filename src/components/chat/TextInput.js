import React from 'react';
import { makeStyles } from '@mui/styles';
import SendIcon from '@mui/icons-material/Send';
import { Button } from '@mui/material';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  wrapForm: {
    display: 'flex',
    justifyContent: 'center',
    width: '95%',
    margin: `0 auto`,
  },
  wrapText: {
    width: '90%',
    backgroundColor: '#C4DDFF',
  },
  button: {
    marginLeft: '5%',
    width: '5%',
  },
});

export const TextInput = (props) => {
  const classes = useStyles();
  return (
    <>
      <form
        className={classes.wrapForm}
        validate
        onSubmit={(e)=>e.preventDefault()}
        autoComplete="off"
      >
        <TextField
          id="fullWidth"
          label="Type message"
          className={classes.wrapText}
          variant="filled"
          onChange={props.onChange}
          value={props.Value}
          onKeyDown={props.onKeyPress}
        />

        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          disabled={props.disableButton}
          hidden
        >
          <SendIcon onClick={props.onClick} />
        </Button>
      </form>
    </>
  );
};
