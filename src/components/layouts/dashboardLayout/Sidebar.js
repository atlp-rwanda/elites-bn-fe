import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { logout } from '../../../redux/actions/loginActions';
import {
  adminSideBarData,
  userSideBarData,
  travelAdminSidebarData,
} from './menuData';
import ForumIcon from '@mui/icons-material/Forum';
import './sidebar.scss';
import ChatDialoge from '../../chat/openChatDialog';
import { Tooltip } from '@mui/material';

const Sidebar = () => {
  const currentUserState = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { currentUser } = currentUserState;
  const [open, setOpen] = React.useState(false);
  const [openDrawer, setOpenDrawer] = React.useState(false);
    const handleClose = () => {
        setOpenDrawer(false);
      };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCloseModel = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    dispatch(logout());
    window.location.reload();
  };
  const navigate = useNavigate();
  const roleId = currentUser?.roleId;
  const menuData =
    roleId === 1
      ? adminSideBarData
      : roleId === 2
      ? travelAdminSidebarData
      : userSideBarData;

  return (
    <>
    <div className="sidebar">
      <Box
        position="fixed"
        sx={{
          backgroundColor: '#07539F',
          height: '100vh',
          width: '18vw',
          color: 'white',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            margin: '1rem auto',
            textAlign: 'center',
            fontSize: { xs: '1.5rem', sm: '2rem' },
            fontWeight: '600',
            letterSpacing: { xs: 'auto', sm: '0.8rem' },
          }}
        >
          BN
        </Typography>
        <List>
          {menuData.map((data) => (
            <ListItem
              className={pathname === data.route ? 'active' : ''}
              key={data.title}
              disablePadding
            >
              {data.title === 'Logout' ? (
                <ListItemButton onClick={() => handleClickOpen()}>
                  <ListItemIcon sx={{ color: 'white' }}>
                    {data.icon}
                  </ListItemIcon>
                  <ListItemText
                    sx={{ display: { xs: 'none', md: 'block' } }}
                    primary={data.title}
                  />
                </ListItemButton>
              ) : (
                <ListItemButton onClick={() => navigate(data.route)}>
                  <ListItemIcon sx={{ color: 'white' }}>
                    {data.icon}
                  </ListItemIcon>
                  <ListItemText
                    sx={{ display: { xs: 'none', md: 'block' } }}
                    primary={data.title}
                  />
                </ListItemButton>
              )}
            </ListItem>
          ))}

<Tooltip 
        title='Chat with us'>
        <Button
          sx={{
            color: 'white',
            fontSize: '19px',
            backgroundColor: 'white',
            marginTop: '30%',
            marginLeft:'20px',
            padding: '20px',
            borderRadius: '50%',
            color: '#07539F',
            position: 'absolute',
            ['@media (max-width:1200px)']: {
              width: '10%',
              marginLeft: '10px',
              backgroundSize: '10%'
              },
            ['@media (max-width:500px)']: {
                width: '20%',
                marginLeft: '10px',
                },
          }}
          onClick={() => {
            setOpenDrawer(true);
          }}
          onMouseOver={(event)=>{
              event.target.style.background = 'white';
          }}
          
        >
          <ForumIcon />
        </Button>

        </Tooltip>
        </List>
        
      </Box>
      
            
      <Box sx={{ width: 1000 }}></Box>

      
        <ChatDialoge open={openDrawer} handleClose={handleClose} />

      <Dialog
        open={open}
        onClose={handleCloseModel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to log out of barefoot Nomad?
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
    </>
  );
};

export default Sidebar;
