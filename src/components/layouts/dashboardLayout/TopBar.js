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
import React from 'react';

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

const TopBar = () => (
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
          Admin Dashboard
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
            Brown Yvan
          </Typography>
          <Typography
            variant="h6"
            color="#07539F"
            fontWeight="300"
            textAlign="center"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Admin
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

export default TopBar;
