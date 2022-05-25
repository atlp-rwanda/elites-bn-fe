import { Box, Modal, Typography, Button, TextField, Grid, MenuItem } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { Navigate } from 'react-router';
import { updateAccommodation } from '../../redux/actions/accommodationUpdateAction';
import { accommodationUpdateType } from '../../redux/types';
import { fetchAccommodations } from '../../redux/actions/accommodationListActions';
import { showSuccessSnackbar } from '../../redux/actions/snackbarActions';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '70%',
	bgcolor: 'background.paper',
	border: '2px solid #fff',
	boxShadow: 24,
	p: 4,
};
function AccommodationUpdateModal({ isOpen, handleClose, accommodation, accommodationUpdateData, updateAccommodation, fetchAccommodations, showSuccessSnackbar }) {

	const [accommodationName, setAccommodationName] = useState(accommodation.accommodationName)
	const [description, setDescription] = useState(accommodation.description)
	const [streetAddress, setStreetAddress] = useState(accommodation.streetAddress)
	const [locationId, setLocationId] = useState(accommodation.locationId)
	const [geoCoordinates, setGeoCoordinates] = useState(accommodation.geoCoordinates)
	const [amenities, setAmenities] = useState(accommodation.amenities)
	const [images, setImages] = useState(null)

	const handleImages = (e) => {
		setImages(e.target.files[0])
	}


	const [locations, setLocations] = useState([])

	useEffect(() => {
		const fetchLocations = async () => {
			const result = await axios('https://elites-barefoot-nomad.herokuapp.com/api/v1/locations')
			setLocations(result.data.payload)
		}
		fetchLocations()
	}, [])

	const handleUpdate = async () => {
		await updateAccommodation(
			accommodation.id, {
			accommodationName,
			description,
			amenities,
			locationId,
			images,
			geoCoordinates
		})
		await fetchAccommodations()
		handleClose()
	}

	useEffect(() => {

	})

	return (
		<div>
			<Modal
				open={isOpen}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Typography id="modal-modal-title" variant="h6" component="h2" color="primary">
						UPDATE ACCOMMODATION
					</Typography>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						{accommodation.accommodationName}
					</Typography>
					<hr />
					<Grid container spacing={2}>
						<Grid item xs={12} md={4}>
							<p style={{ textAlign: 'center' }}>
								<TextField
									id=""
									label="Name"
									variant='filled'
									onChange={(e) => setAccommodationName(e.target.value)}
									value={accommodationName}
								/><br /><br />
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
								</TextField><br /><br />
								<TextField
									id=""
									label="Street"
									variant='filled'
									onChange={(e) => setStreetAddress(e.target.value)}
									value={streetAddress}
								/>
							</p>
						</Grid>
						<Grid item xs={12} md={4}>
							<p style={{ textAlign: 'center' }}>
								<TextField
									id=""
									label="Map location"
									variant='filled'
									onChange={(e) => setGeoCoordinates(e.target.value)}
									value={geoCoordinates}
								/><br /><br />
								<TextField
									id=""
									label="Amenities"
									variant='filled'
									onChange={(e) => setAmenities(e.target.value)}
									value={amenities}
								/>
								<br /><br />
								<TextField
									id=""
									variant='filled'
									type='file'
									onChange={handleImages}
								/>
							</p>
						</Grid>
						<Grid item xs={12} md={4}>
							<p style={{ textAlign: 'center' }}>
								<Button onClick={handleUpdate} variant="outlined" color="primary">
									UPDATE
								</Button><br /><br />
								<Button onClick={handleClose} variant="contained" color='secondary'>
									CANCEL
								</Button>
							</p>
						</Grid>
					</Grid>
				</Box>
			</Modal>
		</div>
	);
}

const mapStateToProps = (state, ownProps) => {
	return {
		accommodationUpdateData: state.accommodationUpdate
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		updateAccommodation: (id, accommodation) => dispatch(updateAccommodation(id, accommodation)),
		fetchAccommodations: () => dispatch(fetchAccommodations()),
		showSuccessSnackbar: (message, severityMessage) => dispatch(showSuccessSnackbar(message, severityMessage)),
		clearSnackbar: () => dispatch(clearSnackbar())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AccommodationUpdateModal)