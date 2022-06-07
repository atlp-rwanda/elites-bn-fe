/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable arrow-parens */
/* eslint-disable no-plusplus */
/* eslint-disable radix */
import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import { Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import setTripStatics from '../../../redux/actions/landingDashboardActions';
import Loader from '../../home/loader';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function TripStat(props) {
  const token = JSON.parse(localStorage.getItem('userToken'))?.accesstoken;
  const [value, setValue] = React.useState(['', '']);
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState('1990-10-10');
  const [endDate, setEndDate] = useState('5050-10-10');
  // const [loading, setLoading] = useState(false);

  const handleChangeDate = (e) => {
    if (e.target.id === 'startDate') {
      setStartDate(e.target.value);
    }
    if (e.target.id === 'endDate') {
      setEndDate(e.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // setLoading(true);
    dispatch(setTripStatics(startDate, endDate, token));
  };

  const tripStatisticsState = useSelector((state) => state.tripStatistics);
  
  useEffect(() => {
      dispatch(setTripStatics(startDate, endDate, token));
  }, []);

  const pendingArray = [];
  const approvedArray = [];
  const rejectedArray = [];

  tripStatisticsState?.tripStatistics?.map((key) => {
    if (key.status === 'pending') {
      pendingArray.push(key.status);
    }
    if (key.status === 'approved') {
      approvedArray.push(key.status);
    }
    if (key.status === 'rejected') {
      rejectedArray.push(key.status);
    }
  });

  return (
    <>
      <div className="tripStatistics">
        <Typography mt={-2}>Filter From: </Typography>
        <div className="dates">
          <div>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateRangePicker
                label="Advanced keyboard"
                value={value}
                onChange={(newValue) => setValue(newValue)}
                renderInput={(startProps, endProps) => (
                  <form
                    onSubmit={handleSubmit}
                    style={{
                      display: 'flex',
                      marginBottom: '1rem',
                      flexWrap: 'wrap',
                    }}
                  >
                    <input
                      type="text"
                      id="startDate"
                      placeholder="yyyy-mm-dd"
                      onChange={handleChangeDate}
                    />
                    <Box sx={{ mx: 1 }}> to </Box>
                    <input
                      type="text"
                      id="endDate"
                      placeholder="yyyy-mm-dd"
                      onChange={handleChangeDate}
                    />
                    <Button
                      variant="contained"
                      type="submit"
                      className="btn"
                      sx={{ width: 50, marginLeft: 1 }}
                    >
                      SEND
                    </Button>
                  </form>
                )}
              />
            </LocalizationProvider>
          </div>
        </div>
        <div className="container-fluid mb-3 barVertical">
          <Chart
            type="bar"
            // width={520}
            series={[
              {
                name: 'LABELS',
                data: [
                  pendingArray.length,
                  approvedArray.length,
                  rejectedArray.length,
                ],
              },
            ]}
            options={{
              title: { text: 'TRIP STATISTICS' },
              noData: { text: 'Empty Data' },
              colors: ['#0d2ce4', '#f0f', '6bec5a'],
              xaxis: {
                categories: ['PENDING', 'APPROVED', 'REJECTED'],
              },
              maintainAspectRatio: false,
              background: {
                color: '#fffff',
              },
            }}
          />
        </div>
      </div>
    </>
  );
}
export default TripStat;
