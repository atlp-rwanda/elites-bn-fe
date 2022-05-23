/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable arrow-parens */
/* eslint-disable no-plusplus */
/* eslint-disable radix */
import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import { useDispatch, useSelector } from 'react-redux';
import setMostVisitedLocation from '../../../redux/actions/mostVisitedAction';

function BodyDashboard() {
  const dispatch = useDispatch();
  const mostVisitedLocationState = useSelector((state) => state.mostTravelledLocation);
  const visitArray = [];
  const locationArray = [];

  mostVisitedLocationState.mostVisitedLocation.map((key) => {
    locationArray.push(key.locationName);
    visitArray.push(key.visitCount);
  });

  useEffect(() => {
    dispatch(setMostVisitedLocation());
  }, []);
  return (
    <>
      <div className="container-fluid mb-3 donut">
        <Chart
          type="donut"
          // width={450}
          series={visitArray}
          options={{
            title: { text: 'Visited Location' },
            noData: { text: 'Empty Data' },
            colors: ['#04157d', '#40a3e8', '#0d2ce4', '#ff0e02'],
            labels: locationArray,
            maintainAspectRatio: false,
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
