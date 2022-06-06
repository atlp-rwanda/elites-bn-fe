/* eslint-disable max-len */
/* eslint-disable array-callback-return */
import React, { useEffect } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { MdNorthEast } from 'react-icons/md';
import { HiDotsHorizontal } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import setTripStatics from '../../../redux/actions/landingDashboardActions';

const Widget = () => {
  const dispatch = useDispatch();
  const tripStatisticsState = useSelector((state) => state.tripStatistics);
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

  const TotalRequest =
    pendingArray.length + approvedArray.length + rejectedArray.length;
    let totPendingTripReq = (100 * pendingArray.length) / TotalRequest;
    let totApprovedTripReq = (100 * approvedArray.length) / TotalRequest;
    let totRejectedTripReq = (100 * rejectedArray.length) / TotalRequest;
    let totPendingTripReqPercentage;
    let totApprovedTripReqPercentage;
    let totRejectedTripReqPercentage;
    
    if(TotalRequest===0){
      
        totPendingTripReqPercentage = 0
        totApprovedTripReqPercentage = 0;
        totRejectedTripReqPercentage = 0;
      

    }else {
      totPendingTripReqPercentage = totPendingTripReq.toFixed(1);
      totApprovedTripReqPercentage = totApprovedTripReq.toFixed(1);
      totRejectedTripReqPercentage = totRejectedTripReq.toFixed(1);
    }
   
   
 

  
  useEffect(() => {
    dispatch(setTripStatics());
  }, []);

  return (
    <div className="AllWidget">
      <section className="WidgetCard">
        <div className="widget">
          <p>Total Pending Requests</p>
          <p> {pendingArray.length} </p>
          <div className="MdNorthEastContainer">
            <MdNorthEast
              className="MdNortIcon"
              style={{ alignSelf: 'center' }}
            />
            <p> +0.5%Inc </p>
          </div>
        </div>
        <div className="widgetCircularBar">
          <HiDotsHorizontal className="DotHorizontal" />
          <CircularProgressbar
            value={totPendingTripReqPercentage}
            text={`+${totPendingTripReqPercentage}%`}
          />
        </div>
      </section>

      <section className="WidgetCard">
        <div className="widget">
          <p>Total approved Requests</p>
          <p> {approvedArray.length} </p>
          <div className="MdNorthEastContainer">
            <MdNorthEast
              className="MdNortIcon"
              style={{ alignSelf: 'center' }}
            />
            <p> +0.5%Inc </p>
          </div>
        </div>
        <div className="widgetCircularBar">
          <HiDotsHorizontal className="DotHorizontal" />
          <CircularProgressbar
            value={totApprovedTripReqPercentage}
            text={`+${totApprovedTripReqPercentage}%`}
          />
        </div>
      </section>

      <section className="WidgetCard">
        <div className="widget">
          <p>Total Rejected Requests</p>
          <p> {rejectedArray.length} </p>
          <div className="MdNorthEastContainer">
            <MdNorthEast
              className="MdNortIcon"
              style={{ alignSelf: 'center' }}
            />
            <p> +0.0%Inc </p>
          </div>
        </div>
        <div className="widgetCircularBar">
          <HiDotsHorizontal className="DotHorizontal" />
          <CircularProgressbar
            value={totRejectedTripReqPercentage}
            text={`+${totRejectedTripReqPercentage}%`}
          />
        </div>
      </section>
    </div>
  );
};

export default Widget;
