import React, { useEffect, useState } from 'react';
import { getAllChats } from '../../redux/actions/chatActions';
import { connect } from 'react-redux';
import { Paper } from '@material-ui/core';
import { TextInput } from './TextInput.js';
import { MessageLeft, MessageRight } from './Message';
import { makeStyles } from '@mui/styles';
import io from 'socket.io-client';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router';

const useStyles = makeStyles({
  paper: {
    backgroundColor: 'green',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'relative',
  },
  paper2: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'relative',
    padding: '50px',
    overflowY: 'hidden',
    scrollbarWidth: 'none',
    
  },
  container: {
    width: '80vw',
    // height: 'vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  messagesBody: {
    width: 'calc( 100% - 20px )',
    margin: 10,
    overflowY: 'visible',
    overflowX: 'hidden',
  },
});

const connectSocket = () => {
  const userToken = localStorage.getItem('userToken');
  const tok = JSON.parse(userToken);
  const socket = io('https://elites-barefoot-nomad.herokuapp.com', {
    auth: {
      token: tok.accesstoken,
    },
  });

  return socket;
};

const Chat = (props) => {
  const [message, setMessage] = useState('');
  const [count, setCount] = useState();
  const [storedMessage, setStoredMessage] = useState();
  const [openSend, setOpenSend] = useState(true);
  const [sockete, setSockete] = useState();

  const userToken = localStorage.getItem('userToken');
  const tok = JSON.parse(userToken);

  let navigate = useNavigate();
  useEffect(() => {
    const socket = connectSocket();

    if (!(tok || userToken)) {
      return navigate('/login');
    }

    socket?.on('message', (data) => {
      setStoredMessage(data);
    });
    socket?.on('chat', (data) => {
      setStoredMessage((storedMessage) => [...storedMessage, data]);
    });

    socket.on('register', (data) => {
      setCount(data);
    });

    setSockete(socket);
  }, []);

  const sendMessage = () => {
    const now = new Date();
    sockete.emit('chat', {
      message: message,
      sendBy: props.currentUser.currentUser.names,
      user: props.currentUser.currentUser.id,
      time: now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
      }),
    });
    setMessage('');
    setOpenSend(true);
  };

  const onChangeMessage = (e) => {
    if (!e.target.value) {
      setOpenSend(true);
    }
    const message = e.target.value;
    setMessage(message);
  };

  const keyPressEvent = () => {
    setOpenSend(false);
  };

  const classes = useStyles();

  const messaged = (storedMessage) =>
    storedMessage?.map((element, index) => {
      return element.postedBy === props.currentUser.currentUser.id ||
        element?.user === props.currentUser.currentUser.id ? (
        <>
          <MessageRight
            message={element.message}
            timestamp={element.createdAt || element.time}
            photoURL=""
            displayName={element.sender || element.sendBy}
            avatarDisp={true}
          />
        </>
      ) : (
        <>
          <MessageLeft
            message={element.message}
            timestamp={element.createdAt || element.time}
            photoURL=""
            displayName={element.sender || element.sendBy}
            avatarDisp={true}
          />
        </>
      );
    });


  return (
    <>  
      {/* <Typography style={{ color:'#07539F', fontWeight: '800'}}>{count} Online Users</Typography> */}
        <Paper id="style-1" className={classes.messagesBody} >
          {messaged(storedMessage)}
        </Paper>
        <TextInput
        sx={{ display: { sx: 'none'}}}
          onClick={sendMessage}
          onChange={onChangeMessage}
          Value={message}
          onKeyPress={keyPressEvent}
          disableButton={openSend}
          show
        />    
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    chat: state.chat,
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps, {
  getAllChats,
})(Chat);
