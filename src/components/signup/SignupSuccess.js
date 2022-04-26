import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function SignupSuccess() {
	return (
		<div>
			<Grid container spacing={2}>
				<Grid item md={3} lg={4}>
				</Grid>
				<Grid item xs={12} md={6} lg={4} style={{ height: '100vh', background: '#07539F' }}>
					<div style={{ marginTop: '40%' }}>
						<Typography variant="h4" component="h3" style={{ color: '#f1f1f1', fontFamily: 'Montserrat, sans-serif', fontWeight:'bold' }}>
							Thank you for
						</Typography>
						<Typography variant="h4" component="h3" style={{ color: '#f1f1f1', fontFamily: 'Montserrat, sans-serif', fontWeight:'bold' }}>
							Registering with us!
						</Typography>
						<br />
						<Typography variant="body1" component="h3" style={{ color: '#f1f1f1', fontFamily: 'Montserrat, sans-serif' }}>
							To continue to the application, please verify your email and login!
						</Typography>
						<br />
						<br />
						<br />
						<Button component={Link} to="/signin" variant="outlined" style={{ color: '#f1f1f1', minWidth: '40%', borderColor: '#f1f1f1', borderRadius: '20px' }}>SIGN IN</Button>
					</div>
				</Grid>
				<Grid item md={3} lg={4}>
				</Grid>
			</Grid>
		</div>
	)
}

export default SignupSuccess