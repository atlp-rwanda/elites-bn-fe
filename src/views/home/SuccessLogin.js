import React from 'react';
import { Snackbar } from '@mui/material';
import Alert from '@mui/material/Alert';
import { clearSnackbar } from '../../redux/actions/snackbarActions';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/loginActions';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { makeStyles } from "@mui/styles";

const SuccessLogin = (props) => {
  const handleClose = () => {
    props.clearSnackbar();
  };

  const handleLogout = () => {
    props.logout();
    window.location.reload();
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCloseModel = () => {
    setOpen(false);
  };

  const useStyles= makeStyles({
    body:{
        textAlign: 'center',
    }
  });

  const classes = useStyles();

  return (
    
    <div className={classes.body}>    
      <p>Successfully Login!</p>
      <Snackbar
        anchorOrigin={ {'vertical':"top", 'horizontal':"left"} }
        open={props.SnackBar.SnackbarOpen}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={props.SnackBar.severityMessage}
          sx={{ width: '100%' }}
        >
          {props.SnackBar.SnackbarMessage}
        </Alert>
      </Snackbar>

      <Button variant="contained" onClick={handleClickOpen}>
        Log Out
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to log out to barefoot Nomad?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModel}>No</Button>
          <Button onClick={handleLogout} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    SnackBar: state.SnackBar,
    login: state.login,
  };
};

export default connect(mapStateToProps, {
  clearSnackbar,
  logout,
})(SuccessLogin);
