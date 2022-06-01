import React from 'react';
import Sidebar from '../layouts/dashboardLayout/Sidebar';
import TopBar from '../layouts/dashboardLayout/TopBar';
import BookingRoomsDisplay from './BookingRoomsDisplay';

const BookingRooms = () => (
  <div>
    <Sidebar />
    <TopBar />
    <div
      style={{
        height: '100%',
        width: '78vw',
        borderRadius: '10px',
        m: 2,
        marginLeft: '20%',
      }}
    >
      <BookingRoomsDisplay />
    </div>
  </div>
);

export default BookingRooms;
