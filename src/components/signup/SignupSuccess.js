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
						<Typography variant="h4" component="h3" style={{ color: '#f1f1f1', fontFamily: 'Montserrat, sans-serif', fontWeight:'bold', textAlign: 'center' }}>
							Thank you for
						</Typography>
						<Typography variant="h4" component="h3" style={{ color: '#f1f1f1', fontFamily: 'Montserrat, sans-serif', fontWeight:'bold', textAlign: 'center' }}>
							Registering with us!
						</Typography>
						<br />
						<Typography variant="body1" component="h3" style={{ color: '#f1f1f1', fontFamily: 'Montserrat, sans-serif', textAlign: 'center' }}>
							To continue to the application, please verify your email and login!
						</Typography>
						<br />
						<br />
						<br />
						<p style={{textAlign: 'center',}}><Button component={Link} to="/login" variant="outlined" style={{ color: '#f1f1f1', minWidth: '40%', borderColor: '#f1f1f1', borderRadius: '20px' }}>SIGN IN</Button></p>
					</div>
				</Grid>
				<Grid item md={3} lg={4}>
				</Grid>
			</Grid>
		</div>
	)
}

export default SignupSuccess