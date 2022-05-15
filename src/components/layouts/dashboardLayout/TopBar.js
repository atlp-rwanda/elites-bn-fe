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
import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import setCurrentUser, {
  setCurrentUserProfile,
} from '../../../redux/actions/currentUserActions';

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
  const currentUserState = useSelector((state) => state.currentUser);
  const { currentUser } = currentUserState;
  const { currentUserProfile } = currentUserState;
  // console.log(
  //   '%cCurrentUserProfile====',
  //   'background-color:green',
  //   currentUserProfile
  // );
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const getCurrentUserProfile = async (id, token) => {
    console.log('%cTokenInGetProfile====', 'background-color:green', token);
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
    dispatch(setCurrentUserProfile(res.data.payload));
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
  }, []);

  const { names, roleName } = currentUser;
  return (
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
          <Typography
            variant="h5"
            fontWeight="600"
            color="#07539F"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            {pathname}
          </Typography>
        </Box>
        <Search>
          <InputBase placeholder="search..." />
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
          <Badge badgeContent={2} color="error">
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
            sx={{ width: { xs: 30, sm: 40 }, height: { xs: 30, sm: 40 } }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </Icons>
      </Stack>
    </Box>
  );
};

export default TopBar;
