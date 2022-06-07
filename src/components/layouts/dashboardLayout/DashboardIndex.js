import { Box, Stack } from '@mui/material';
import React from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
// import { sideBarData } from './adminMenuData';
// import Sidebar from './Sidebar';
import Widget from './Widget';
import TripStat from './TripStat';
import BodyDashboard from './BodyDashboard';

const Dashboardindex = () => (
  <section className="sectionBar">
     <Box sx={{ dispay: 'flex' }}>
      <Sidebar />
      <Stack direction="row" spacing={2} sx={{ backgroundColor: '#E5EAFF' }}>
        <TopBar />
      </Stack>
    </Box>
    <Box>
      <Widget />
      <Box className="barChart">
        <TripStat />
        <BodyDashboard />
      </Box>
    </Box>
  </section>
);

export default Dashboardindex;
