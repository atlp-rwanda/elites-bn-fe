import { Box, Stack } from '@mui/material';
import React from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

const index = () => (
  <Box sx={{ dispay: 'flex' }}>
    <Sidebar />
    <Stack direction="row" spacing={2} sx={{ backgroundColor: '#E5EAFF' }}>
      <TopBar />
    </Stack>
  </Box>
);

export default index;
