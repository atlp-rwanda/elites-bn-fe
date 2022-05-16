import { Box, Button, Grid, Typography, TextField, MenuItem, TextareaAutosize } from '@mui/material';
import { borderRadius } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createAccommodation } from '../../redux/actions/accommodationCreateActions';
import Sidebar from '../layouts/dashboardLayout/Sidebar';
import TopBar from '../layouts/dashboardLayout/TopBar';
import { sideBarData } from './travelAdminMenuData';
import {
  showSuccessSnackbar,
  clearSnackbar,
} from '../../redux/actions/snackbarActions';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
// const locations = [
//   {
//     value: 'Kigali',
//     label: 'Kigali',
//   },
//   {
//     value: 'Musanze',
//     label: 'Musanze',
//   },
//   {
//     value: 'Rubavu',
//     label: 'Rubavu',
//   },
//   {
//     value: 'Muhanga',
//     label: 'Muhanga',
//   },
// ];

function Accommodation(props) {

  const [accommodationName, setAccommodationName] = useState('')
  const [description, setDescription] = useState('')
  const [streetAddress, setStreetAddress] = useState('')
  const [locationId, setLocationId] = useState('')
  const [geoCoordinates, setGeoCoordinates] = useState('')
  const [ammenities, setAmmenities] = useState('')
  const [image, setImage] = useState(null)

  const handleImage = (e)=>{
    setImage(e.target.files[0])
  }

  const [locations, setLocations] = useState([])

  useEffect(() => {
    const fetchLocations = async () => {
      const result = await axios('https://elites-barefoot-nomad.herokuapp.com/api/v1/locations')
      setLocations(result.data.payload)
    }
    fetchLocations()
    
  }, [])

  return (
    <div>
      <Sidebar sideBarData={sideBarData} />
      <TopBar />
      <div style={{ height: '100vh', width: '100vw', marginLeft: '20%' }}>
        <br></br>
        <Box
          sx={{
            width: '78vw',
            height: '80%',
            backgroundColor: 'white',
            borderRadius: '15px',

          }}
        >
          <Button href='/accommodation/list' sx={{ m: 4, color: '#07539F', }} variant="outlined">VIEW ACCOMMODATIONS</Button>
          <Typography variant="body1" sx={{
            color: '#07539F',
            ml: 4,
            fontWeight: 'bold',
            fontSize: '20px'

          }}>
            Create an accommodation
          </Typography>
          <ValidatorForm form="true" onSubmit={() => props.createAccommodation({ description, accommodationName, streetAddress, locationId, geoCoordinates, ammenities, image })}>
          <Grid sx={{
            m: 4,

          }} container spacing={2}>
            <Grid item xs={3}>
              <TextField
                id=""
                label="Name"
                variant="filled"
                style={{ width: '80%' }}
                onChange={(e) => setAccommodationName(e.target.value)}
              />
              <br /><br />
              <TextField
                id=""
                label="Location"
                variant="filled"
                select
                helperText="Please select accommodation location"
                style={{ width: '80%' }}
                value={locationId}
                onChange={(e) => setLocationId(e.target.value)}
              >
                {locations.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.locationName}
                  </MenuItem>
                ))}
              </TextField>
              <br /><br />
              <TextField
                id=""
                label="Street"
                variant="filled"
                style={{ width: '80%' }}
                onChange={(e) => setStreetAddress(e.target.value)}
              />
              <br /><br />
              <TextField
                id=""
                label="Map location"
                variant="filled"
                style={{ width: '80%' }}
                onChange={(e) => setGeoCoordinates(e.target.value)}
              />
            </Grid>
            <Grid item xs={9}>
              <TextField
                id=""
                variant="filled"
                style={{ width: '80%' }}
                type='file'
                onChange={handleImage}
              />
              <br /><br />
              <TextField
                id=""
                label="add comma separated ammenity"
                variant="filled"
                style={{ width: '80%' }}
                onChange={(e) => setAmmenities(e.target.value)}
              />

              <br />
              <br />
              <TextareaAutosize
                aria-label="Description"
                placeholder="Description"
                minRows={4}
                style={{ width: '80%' }}
                onChange={(e) => setDescription(e.target.value)}
              />
              <br />
              <br />
              <Button type='submit' style={{ background: '#07539F' }} variant="contained" color="primary">
                SUBMIT
              </Button>
            </Grid>

          </Grid>
          </ValidatorForm>
          
        </Box>
      </div>

    </div>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createAccommodation: (accommodation) => dispatch(createAccommodation(accommodation)),
    showSuccessSnackbar: (message, severity)=>dispatch(showSuccessSnackbar(message, severity))
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    createAccommodationData: state.createAccommodationData,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Accommodation)