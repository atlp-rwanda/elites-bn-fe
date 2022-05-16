import React from 'react';
import Sidebar from '../layouts/dashboardLayout/Sidebar';
import TopBar from '../layouts/dashboardLayout/TopBar';
import RequestsTable from './RequestsTable';

const TripRequests = () => (
  <div>
    <Sidebar />
    <TopBar />
    <RequestsTable />
  </div>
);

export default TripRequests;
