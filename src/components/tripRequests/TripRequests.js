import React from 'react';
import { useSelector } from 'react-redux';
import Sidebar from '../layouts/dashboardLayout/Sidebar';
import TopBar from '../layouts/dashboardLayout/TopBar';
import RequestsTable from './RequestsTable';
import { sideBarData } from '../layouts/dashboardLayout/adminMenuData';
import SkeletonTable from './SkeletonTable';

const TripRequests = () => {
  const tripRequestsState = useSelector((state) => state.allTripRequests);

  // console.log('////', tripRequestsState);
  // if (tripRequestsState.loading) {
  //   return (
  //     <div>
  //       <Sidebar sideBarData={sideBarData} />
  //       <TopBar />
  //       <SkeletonTable />
  //     </div>
  //   );
  // }

  return (
    <div>
      <Sidebar sideBarData={sideBarData} />
      <TopBar />
      <RequestsTable />
    </div>
  );
};

export default TripRequests;
