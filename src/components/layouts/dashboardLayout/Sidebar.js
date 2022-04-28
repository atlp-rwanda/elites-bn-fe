import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = (props) => {
  const navigate = useNavigate();
  const menuData = props.sideBarData;
  return (
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
            <ListItem key={data.title} disablePadding>
              <ListItemButton onClick={() => navigate(data.route)}>
                <ListItemIcon sx={{ color: 'white' }}>{data.icon}</ListItemIcon>
                <ListItemText
                  sx={{ display: { xs: 'none', sm: 'block' } }}
                  primary={data.title}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </div>
  );
};

export default Sidebar;
