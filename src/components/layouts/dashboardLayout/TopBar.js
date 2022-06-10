import { io } from 'socket.io-client';
import {
  Box,
  InputBase,
  styled,
  Typography,
  Stack,
  Badge,
  Avatar,
} from '@mui/material';
import { Notifications } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import setCurrentUser, {
  setCurrentUserProfile,
} from '../../../redux/actions/currentUserActions';
import { loadNotifications } from '../../../redux/actions/notificationsActions';
import { showNotificationPanel } from '../../../redux/actions/notificationPanelActions';
import setUserSearch from '../../../redux/actions/userSearchAction';
import DataTable from './search/DataTable';
import { loadLocations } from '../../../redux/actions/locationsActions';
import LanguageSwitcher from '../../i18next/LanguageSwitcher';
// import SearchBar from 'material-ui-search-bar';

const token = JSON.parse(localStorage.getItem('userToken'))?.accesstoken;

const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%',
  position: 'relative',
}));

const Icons = styled(Box)(({ theme }) => ({
  alignItems: 'center',
  gap: '20px',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
  },
}));

const TopBar = () => {
  const dispatch = useDispatch();
  const entireState = useSelector((state) => state);
  const notificationsState = entireState.allNotifications;
  const { pathname } = useLocation();
  const currentUserState = entireState.currentUser;
  const { currentUser, currentUserProfile } = currentUserState;
  const { notifications } = notificationsState;

  const [socket, setSocket] = useState(null);
  const [query, setQuery] = useState('');
  const { globalUserSearch } = useSelector((state) => state.globalUserSearch);
  const [show, setShow] = useState(false);

  const search = (x) =>
    globalUserSearch.filter(
      (globalUserSearch) =>
        globalUserSearch.tripReason.includes(x) ||
        globalUserSearch.status.includes(x) ||
        globalUserSearch.names.includes(x)
    );

  const unreadNotifications = () => {
    const unreads = notifications.filter(
      (notification) => !notification.isRead
    );
    return unreads.length;
  };

  const getCurrentUserProfile = async (id, token) => {
    // console.log('%cTokenInGetProfile====', 'background-color:green', token);
    const res = await axios
      .get(
        `https://elites-barefoot-nomad.herokuapp.com/api/v1/profiles/${id}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )
      .catch((err) => {
        console.log(err);
      });
    res && dispatch(setCurrentUserProfile(res.data.payload));
  };

  const getCurrentUser = () => {
    const token = JSON.parse(localStorage.getItem('userToken'))?.accesstoken;
    let currentUserInfo;
    if (token) {
      const decoded = jwtDecode(token);
      let roleName;
      switch (decoded.role) {
        case 1:
          roleName = 'Admin';
          break;
        case 2:
          roleName = 'Travel-Admin';
          break;
        case 3:
          roleName = 'Manager';
          break;
        case 4:
          roleName = 'Accommodation-Supplier';
          break;
        case 5:
          roleName = 'Requester';
          break;
        default:
          roleName = undefined;
      }
      currentUserInfo = {
        id: decoded.id,
        names: decoded.names,
        roleName,
        roleId: decoded.role,
        token,
      };
      dispatch(setCurrentUser(currentUserInfo));
      getCurrentUserProfile(decoded.id, token);
    }
  };

  useEffect(() => {
    getCurrentUser();
    const socket = io('https://elites-barefoot-nomad.herokuapp.com', {
      reconnectionDelayMax: 10000,
      reconnection: true,
      auth: {
        token: token,
      },
    });

    setSocket(socket);
    socket?.on('getNotification', (body) => {
      toast(body, {
        position: 'top-right',
        autoClose: 8000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        icon: '🔔',
      });
      dispatch(loadNotifications());
      console.log('%cTOAST NOTIFICATION', 'background-color:blue', body);
    });

    console.log('socket///', socket);
    dispatch(loadNotifications());
    dispatch(loadLocations());
  }, []);

  useEffect(() => {
    socket?.on('onconnectTesting1', () => {
      console.log('%c Server is listening to you', 'background-color:blue');
    });
  }, [socket]);

  const { names, roleName } = currentUser;
  return (
    <>
      <Box
        className="Topbar"
        sx={{
          height: '12vh',
          width: '82vw',
          marginLeft: '18vw',
          display: 'flex',
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-around"
          alignItems="center"
          width="100%"
        >
          <Box>
            <Box
              // variant="h5"
              // fontWeight="600"
              color="#07539F"
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              <LanguageSwitcher />
            </Box>
          </Box>
          <Search>
            <InputBase
              placeholder="search..."
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setShow(true)}
              onBlur={() => setShow(false)}
            />
            <SearchIcon
              sx={{
                color: 'white',
                backgroundColor: '#6674BB',
                position: 'absolute',
                right: 0,
                height: '100%',
                width: '2.5rem',
                borderRadius: '5px',
              }}
            />
          </Search>
          <Icons
            sx={{
              backgroundColor: { sm: '#CCD4FF' },
              paddingLeft: { xs: '0.8rem', sm: '1.5rem' },
              paddingRight: { xs: '0.8rem', sm: '1.5rem' },
            }}
          >
            <Badge
              badgeContent={unreadNotifications()}
              color="error"
              onClick={() => {
                dispatch(showNotificationPanel());
              }}
              sx={{ cursor: 'pointer' }}
            >
              <Notifications />
            </Badge>
            <Box>
              <Typography
                variant="h6"
                color="#07539F"
                fontWeight="600"
                textAlign="center"
                sx={{ display: { xs: 'none', sm: 'block' } }}
              >
                {names}
              </Typography>
              <Typography
                variant="h6"
                color="#07539F"
                fontWeight="300"
                textAlign="center"
                sx={{ display: { xs: 'none', sm: 'block' } }}
              >
                {roleName}
              </Typography>
            </Box>
            <Avatar
              sx={{
                width: { xs: 30, sm: 40 },
                height: { xs: 30, sm: 40 },
                cursor: 'pointer',
                objectFit: 'cover',
              }}
              src={currentUserProfile?.picture}
            />
          </Icons>
          {show && <DataTable tableData={search(query)} />}
        </Stack>
      </Box>
    </>
  );
};

export default TopBar;
