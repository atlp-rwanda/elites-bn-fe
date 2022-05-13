import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import {
  setStepTwoTripRequestReason,
  setStepTwoTripRequestRememberMe,
} from '../../../redux/actions/tripRequestActions';

import Button from '@mui/material/Button';
const StepTwo = (props) => {
  const dispatch = useDispatch()
  const tripRequest = useSelector((state) => state.tripRequest);
  return (
    <div>
      <Typography 
      align = 'center'
      variant="body1" 
      gutterBottom
      sx={{margin:3,textDecoration: 'underline',fontWeight: 600}}>
         STEP TWO
      </Typography>

      <Typography variant="body1" gutterBottom
      sx={{margin:3,textAlign:'left'}}
      style={{display:props.active === undefined ? 'none' :'flex'}}>
         Fill in your trip reason with enough details for your manager to review, check the box to add your passport number and current address from your profile. 
      </Typography>

      <TextField
          id="standard-basic"
          label="Trip Reason"
          variant="standard"
          value={tripRequest.stepTwo.tripReason}
          sx={{marginLeft:2,marginRight:3,marginBottom:4,width:'60vw'}}
          inputProps={
            { readOnly: props.active == undefined ?true:false }
          }
          onChange = {(e)=>{dispatch(setStepTwoTripRequestReason(e.target.value))}}/>
       
        
      <FormControlLabel 
        
        style={{display: 'flex',justifyContent:'flex-start',marginLeft:15,marginTop:5}} 
        control={<Checkbox 
          disabled= { props.active == undefined ?true:false }       
          checked={tripRequest.stepTwo.rememberMe == "true"?true:false}
        style={{color:'#07539F'}}
         />} label="Remember me"
         onChange = {(e,checked)=>{
          
           dispatch(setStepTwoTripRequestRememberMe(checked.toString()))}}
      />
        
    </div>
  )
}

export default StepTwo