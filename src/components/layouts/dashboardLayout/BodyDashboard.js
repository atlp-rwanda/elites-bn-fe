/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable arrow-parens */
/* eslint-disable no-plusplus */
/* eslint-disable radix */
import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';

function BodyDashboard() {
  const [visitlocation, setVisitlocation] = useState([]);
  const [visitCount, setVisitCount] = useState([]);
  const visitArray = [];
  const locationArray = [];

  useEffect(() => {
    const getVisitdata = async () => {
      const reqData = await axios.get(
        'https://elites-barefoot-nomad.herokuapp.com/api/v1/locations/mostTravelled/all',
      );
      reqData.data.visitedLocations.map((key) => visitArray.push(key.visitCount));
      setVisitCount(visitArray);
      reqData.data.visitedLocations.map((key) => locationArray.push(key.locationName));
      setVisitlocation(locationArray);
    };
    getVisitdata();
  }, []);

  return (
    <>
      <div className="container-fluid mb-3 donut">
        <Chart
          // sx={{
          //   margins: '2rem',
          // }}
          type="donut"
          width={450}
          // height={250}
          series={visitCount}
          options={{
            title: { text: 'Visited Location' },
            noData: { text: 'Empty Data' },
            colors: ['#04157d', '#40a3e8', '#0d2ce4'],
            labels: visitlocation,
            style: {
              leftMargin: '2.8rem',
            },
            tooltip: {
              y: {
                formatter: (val) => '$$(val)',
              },
            },

          }}
        />
      </div>
    </>
  );
}
export default BodyDashboard;
