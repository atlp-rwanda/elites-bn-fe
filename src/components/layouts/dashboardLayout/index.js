import { Box, Stack } from '@mui/material';
import React from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import { sideBarData } from './adminMenuData';
import Widget from './Widget';
import TripStat from './TripStat';
// import TripStatics from './TripStatics';
import BodyDashboard from './BodyDashboard';

const index = () => (
  <section className="sectionBar">
    <Box sx={{ dispay: 'flex' }}>
      <Sidebar sideBarData={sideBarData} />
      <Stack direction="row" spacing={2} sx={{ backgroundColor: '#E5EAFF' }}>
        <TopBar />
      </Stack>
    </Box>
    <Box>
      <Widget />
    </Box>
    <Box sx={{ dispay: 'flex' }} className="barChart">
      <TripStat />
      <BodyDashboard />
    </Box>
  </section>
);

export default index;
