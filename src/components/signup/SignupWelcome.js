import { Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
function SignupWelcome() {
	return (
		<div style={{ marginTop: '40%' }}>
			<Typography variant="h3" component="h3" style={{ color: '#f1f1f1', fontFamily: 'Montserrat, sans-serif', fontWeight:'bold' }}>
				Welcome to
			</Typography>
			<Typography variant="h3" component="h3" style={{ color: '#f1f1f1', fontFamily: 'Montserrat, sans-serif', fontWeight:'bold' }}>
				Barefoot nomad
			</Typography>
			<br />
			<Typography variant="body1" component="h3" style={{ color: '#f1f1f1' }}>
				To keep connected with us please register with us!
			</Typography>
			<br />
			<br />
			<br />
			<Button component={Link} to="/signin" variant="outlined" style={{ color: '#f1f1f1', minWidth: '40%', borderColor: '#f1f1f1', borderRadius: '20px' }}>SIGN IN</Button>
		</div>
	)
}

export default SignupWelcome