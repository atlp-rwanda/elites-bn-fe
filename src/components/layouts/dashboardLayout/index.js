import { Box, Stack } from '@mui/material';
import React from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import { sideBarData } from './adminMenuData';

const index = () => (
  <Box sx={{ dispay: 'flex' }}>
    <Sidebar sideBarData={sideBarData} />
    <Stack direction="row" spacing={2} sx={{ backgroundColor: '#E5EAFF' }}>
      <TopBar />
    </Stack>
  </Box>
);

export default index;
