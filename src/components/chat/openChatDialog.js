import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Chat from './Chat';


 const ChatDialoge = (props) =>{

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  
     return (
        <Dialog
        open={props.open}
        onClose={props.handleClose}
        fullWidth='true'
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        hideBackdrop
        sx={{
            // position: 'fixed',
            // backgroundColor: 'green',
            // marginLeft: '50vw',
            ['@media (max-width:1200px)']: {
              width: '100%'
              },
            ['@media (max-width:500px)']: {
                width: '100%'
                },
        }}
      >
        <DialogTitle id="scroll-dialog-title">Barefoot Chat</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
          >
            <Chat />
          </DialogContentText>
        </DialogContent>
      </Dialog>
         
     )

}

export default ChatDialoge;