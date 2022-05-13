import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import axios from 'axios';
import {
  getLocations,
  getAccomodations,
} from '../../../redux/actions/locationActions';
import {
  setStepOneRequests,
  setStepTwoTripRequest,
  setStepOneDepartDate,
  setStepOneReturnDate,
  addMulticity,
  updateTripRequest
} from '../../../redux/actions/tripRequestActions';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import { makeStyles } from '@mui/styles';
import './tripRequestStyles.scss'

const useStyles = makeStyles((theme) => {
  return {
    root: {
      '& .MuiTextField-root': {
        margin: 8,
        width: 250,
      },
    },
  };
});

const StepOne = (props) => {
  const dispatch = useDispatch();
  const locationState = useSelector((state) => state.Locations);
  const tripRequest = useSelector((state) => state.tripRequest);
  const blueColor = { backgroundColor: '#07539F' };
  const classes = useStyles();
  

  const fetchLocations = async () => {
    const res = await axios
      .get('https://elites-barefoot-nomad.herokuapp.com/api/v1/locations')
      .catch((err) => {
        console.log(err);
      });
    return dispatch(getLocations(res.data.payload));
  };

  const fetchAccomodations = async () => {
    const res = await axios
      .get('https://elites-barefoot-nomad.herokuapp.com/api/v1/accommodations')
      .catch((err) => {
        console.log(err);
      });

    return dispatch(getAccomodations(res.data.payload));
  };


  const handleChangeInput = (index, event) => {
    event.preventDefault();
    const values = [...tripRequest.stepOne.requests];
    values[index][event.target.name] = event.target.value;
    dispatch(setStepOneRequests(values));
  };

  const handleAddFields = () => {
    dispatch(
      addMulticity({ destination: '', departLocation: '', accomodation: '' })
    );
  };

  const handleRemoveFields = (index) => {
    const updatedRequest = tripRequest.stepOne.requests;
    if (updatedRequest.length > 1) {
      updatedRequest.pop();
    }
    dispatch(setStepOneRequests(updatedRequest));
  };

  useEffect(() => {
    fetchAccomodations();
  }, []);

  useEffect(() => {
    fetchLocations();
  }, []);

  return (
    <div>
      <Typography
        align =  'center'
        variant="body1"
        gutterBottom
        sx={{ margin: 3, textDecoration: 'underline', fontWeight: 600 }}
      >
        STEP ONE
      </Typography>

      <Typography
        align =  'center'
        variant="body1"
        gutterBottom
        sx={{ margin: 3, textAlign: 'left' }}
        style={{ display: props.active === undefined ? 'none' : 'flex' }}
      >
        Fill in your departure location, destination and an accomodation you
        will be staying in during your travel respectively from the field
        dropdowns below, also fill in both the dates of your departure and
        return .
      </Typography>

      {tripRequest.stepOne.requests &&
        tripRequest.stepOne.requests.map((inputField, index, array) => {
          
          return (
            <div
              key={index}
              className={classes.root}
              style={{
                marginBottom: 40,
                marginLeft: 20,
                marginRight: 20,
                backgroundColor: '#E5EAFF',
                borderRadius: 10,
              }}
            >
              <TextField
                id="standard-select-currency"
                label="Depart location"
                select
                value={ index-1 < 0 ? inputField.departLocation:array[index - 1].destination }
               // index - 1 < 0 ? response.data.payload.departLocation : JSON.parse(arr[index - 1]).//destinationId,
                inputProps={{
                  readOnly: props.active == undefined ? true : false,
                }}
                name="departLocation"
                onChange={(event) => {
                  handleChangeInput(index, event);
                }}
                variant="standard"
              >
                
                {locationState.locations &&
                  locationState.locations.map((location) => (
                    <MenuItem key={location.id} value={location.id}>
                      {location.locationName}
                    </MenuItem>
                  ))}
              </TextField>

              <TextField
                id="standard-select-currency"
                select
                label="Destination"
                value={inputField.destination}
                name="destination"
                variant="standard"
                inputProps={{
                  readOnly: props.active == undefined ? true : false,
                }}
                onChange={(event) => handleChangeInput(index, event)}
              >
                {locationState.locations &&
                  locationState.locations
                    .filter(
                      (destination) =>
                        destination.id !== inputField.departLocation
                    )
                    .map((destination) => (
                      <MenuItem key={destination.id} value={destination.id}>
                        {destination.locationName}
                      </MenuItem>
                    ))}
              </TextField>

              <TextField
                id="standard-select-currency"
                select
                value={inputField.accomodation}
                label="Accomodation"
                name="accomodation"
                variant="standard"
                inputProps={{
                  readOnly: props.active == undefined ? true : false,
                }}
                onChange={(event) => handleChangeInput(index, event)}
              >
                {locationState.locations &&
                  locationState.accomodations
                    .filter((accomodation) => {
                      return (
                        accomodation.locationId === inputField.destination
                      );
                    })
                    .map((accomodation) => (
                      <MenuItem key={accomodation.id} value={accomodation.id}>
                        {accomodation.accommodationName}
                      </MenuItem>
                    ))}
              </TextField>
            </div>
          );
        })}
      <br />
      <div
        className='destinationBtn'
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button
        
          variant="contained"
          sx={{
            margin: 5,
            width: 200,
            backgroundColor: blueColor,
          }}
          style={{ display: props.active == undefined ? 'none' : 'flex' }}
          onClick={() => handleAddFields()}
        >
          ADD DESTINATION
        </Button>
        <Button
          variant="contained"
          sx={{
            height: 37,
            width: 200,
            backgroundColor: blueColor,
          }}
          onClick={() => handleRemoveFields()}
          style={{ display: props.active == undefined ? 'none' : 'flex' }}
        >
          REMOVE DESTINATION
        </Button>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >

<LocalizationProvider dateAdapter={AdapterDateFns}>


        <div
         className = 'datePicker'
          style = {{
            display:'flex',
            justifyContent: 'space-around',
            alignSelf: 'center',

          }}
          >

        
          <DesktopDatePicker
            readOnly = {props.active == undefined ? true : false}            
            disableMaskedInput
            value={tripRequest.stepOne.departDate}
            onChange={(date) => {
              dispatch(
                setStepOneDepartDate(new Date(date).toISOString().split('T')[0])
              );
            }}
            label="Departure date"
            minDate={new Date()}
            renderInput={(params) => (
              <TextField
                style={{ marginBottom: 30,marginRight:20  }}
                {...params}
                onKeyDown={(e) => {
                  e.preventDefault();
                }}
              />
            )}
          />
          <DesktopDatePicker
            readOnly = {props.active == undefined ? true : false} 
            disableMaskedInput
            value={tripRequest.stepOne.returnDate}
            onChange={(date) => {
              dispatch(
                setStepOneReturnDate(new Date(date).toISOString().split('T')[0])
              );
            }}
            label="Return Date"
            minDate={new Date(tripRequest.stepOne.departDate)}
            renderInput={(params) => (
              <TextField
                
                style={{ marginBottom: 30 ,marginRight:20}}
                {...params}
              />
            )}
          />

           </div>
        </LocalizationProvider>

       
      </div>
    </div>
  );
};

export default StepOne;
