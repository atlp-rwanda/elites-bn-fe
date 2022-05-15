import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { MdNorthEast } from 'react-icons/md';
import { HiDotsHorizontal } from 'react-icons/hi';

const Widget = () => (
  <div className="AllWidget">
    <section className="WidgetCard">
      <div className="widget">
        <p>Total Requests</p>
        <p> 5852</p>
        <div className="MdNorthEastContainer">
          <MdNorthEast className="MdNortIcon" style={{ alignSelf: 'center' }} />
          <p> +14%Inc </p>
        </div>
      </div>
      <div className="widgetCircularBar">
        <HiDotsHorizontal className="DotHorizontal" />
        <CircularProgressbar value={100} text={`+${100}%`} />
      </div>

    </section>

    <section className="WidgetCard">
      <div className="widget">
        <p>Total Approved Requests</p>
        <p> 3145</p>
        <div className="MdNorthEastContainer">
          <MdNorthEast className="MdNortIcon" style={{ alignSelf: 'center' }} />
          <p> +0.6%Inc </p>
        </div>
      </div>
      <div className="widgetCircularBar">
        <HiDotsHorizontal className="DotHorizontal" />
        <CircularProgressbar value={60} text={`+${60}%`} />
      </div>

    </section>

    <section className="WidgetCard">
      <div className="widget">
        <p>Total Rejected Requests</p>
        <p> 1035</p>
        <div className="MdNorthEastContainer">
          <MdNorthEast className="MdNortIcon" style={{ alignSelf: 'center' }} />
          <p> +0.4%Inc </p>
        </div>
      </div>
      <div className="widgetCircularBar">
        <HiDotsHorizontal className="DotHorizontal" />
        <CircularProgressbar value={38} text={`+${38}%`} />
      </div>

    </section>
  </div>
);

export default Widget;
