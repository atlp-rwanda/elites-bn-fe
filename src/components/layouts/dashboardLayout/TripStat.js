/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable arrow-parens */
/* eslint-disable no-plusplus */
/* eslint-disable radix */
import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';
// import { dark } from '@mui/material/styles/createPalette';

function TripStat() {
  // const [TripStatics, setTripStatics] = useState([]);
  // const [TripStatus, setTripStatus] = useState([]);
  // const TripStaticsArray= [];
  // const TripstatusArray = [];

  // useEffect(() => {
  //     const getVisitdata = async () => {
  //         const reqData = await axios.get(
  //             'https://elites-barefoot-nomad.herokuapp.com/api/v1/trips/tripstats',
  //         );
  //         reqData.data.visitedLocations.map((key) => visitArray.push(key.TripStatus));
  //         setTripStatus(visitArray);
  //         reqData.data.visitedLocations.map((key) => TripstatusArray.push(key.locationName));
  //         setTripStatics(TripstatusArray);
  //     };
  //     getVisitdata();
  // }, []);

  return (
    <>
      <div className="container-fluid mb-3 barVertical">
        <Chart
          type="bar"
          width={520}
          series={[
            {
              name: 'LABELS',
              data: [100, 200, 300],
            },
          ]}
          options={{
            title: { text: 'TRIP STATISTICS' },
            noData: { text: 'Empty Data' },
            colors: ['#0d2ce4', '#f0f', '6bec5a'],
            xaxis: {
              categories: ['PENDING', 'APPROVED', 'REJECTED'],
            },
            background: {
              color: '#fffff',
            },

          }}
        />
      </div>
    </>
  );
}
export default TripStat;
