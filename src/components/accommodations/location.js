import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import getLocations from '../../redux/actions/locationActions';
function location() {
  const locationState = useSelector((state) => state.allLocations);

  const { locations } =  locationState;
  return (
    <div>location</div>
  )
}

export default location