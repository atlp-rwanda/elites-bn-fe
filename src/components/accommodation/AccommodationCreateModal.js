import { Box, Modal, Button, Grid, Typography, TextField, MenuItem, TextareaAutosize } from '@mui/material';

import React, { useEffect, useState } from 'react'
import { createAccommodation } from '../../redux/actions/accommodationCreateActions';
import { connect } from 'react-redux';
import { async } from 'regenerator-runtime';

import {
	showSuccessSnackbar,
} from '../../redux/actions/snackbarActions';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import { fetchAccommodations } from '../../redux/actions/accommodationListActions';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '80%',
	bgcolor: 'background.paper',
	border: '2px solid #fff',
	boxShadow: 24,
	p: 4,
};
function AccommodationCreateModal({ isOpen, handleClose, locations, createAccommodation, fetchAccommodations, createAccommodationData, showSuccessSnackbar }) {


	const [accommodationName, setAccommodationName] = useState('')
	const [description, setDescription] = useState('')
	const [streetAddress, setStreetAddress] = useState('')
	const [locationId, setLocationId] = useState('')
	const [geoCoordinates, setGeoCoordinates] = useState('')
	const [ammenities, setAmmenities] = useState('')
	const [image, setImage] = useState(null)

	const handleImage = (e) => {
		setImage(e.target.files[0])
	}


	const handleCreateAccommodation = async () => {
		await createAccommodation({ description, accommodationName, streetAddress, locationId, geoCoordinates, ammenities, image })
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
				aria-labelledby="parent-modal-title"
				aria-describedby="parent-modal-description"
			>
				<Box sx={{ ...style, width: '80%' }}>
					<h2 id="parent-modal-title">CREATE A NEW ACCOMMODATION</h2>
					<ValidatorForm form="true" onSubmit={handleCreateAccommodation}>
						<Grid sx={{
							m: 4,

						}} container spacing={2}>
							<Grid item xs={12} md={4}>
								<TextValidator
									id=""
									label="Name"
									variant="filled"
									style={{ width: '100%' }}
									validators={['required',]}
									value={accommodationName}
									errorMessages={[
										'This field is required',
									]}
									onChange={(e) => setAccommodationName(e.target.value)}
								/>
								<br /><br />
								<TextValidator
									id=""
									label="Location"
									variant="filled"
									select
									helperText="Please select accommodation location"
									style={{ width: '100%' }}
									value={locationId}
									validators={['required',]}
									errorMessages={[
										'This field is required',
									]}
									onChange={(e) => setLocationId(e.target.value)}
								>
									{locations.map((option) => (
										<MenuItem key={option.id} value={option.id}>
											{option.locationName}
										</MenuItem>
									))}
								</TextValidator>
								<br /><br />
								<TextValidator
									id=""
									label="Street"
									variant="filled"
									validators={['required',]}
									style={{ width: '100%' }}
									value={streetAddress}
									errorMessages={[
										'This field is required',
									]}
									onChange={(e) => setStreetAddress(e.target.value)}
								/>
								<br /><br />
								<TextValidator
									id=""
									label="Map location"
									variant="filled"
									validators={['required',]}
									style={{ width: '100%' }}
									value={geoCoordinates}
									errorMessages={[
										'This field is required',
									]}
									onChange={(e) => setGeoCoordinates(e.target.value)}
								/>
							</Grid>
							<Grid item xs={12} md={8}>
								<TextValidator
									id=""
									variant="filled"
									style={{ width: '80%' }}
									type='file'
									onChange={handleImage}
								/>
								<br /><br />
								<TextValidator
									id=""
									label="add comma separated ammenity"
									variant="filled"
									style={{ width: '80%' }}
									value={ammenities}
									onChange={(e) => setAmmenities(e.target.value)}
								/>

								<br />
								<br />
								<TextareaAutosize
									aria-label="Description"
									placeholder="Description"
									minRows={4}
									style={{ width: '80%' }}
									value={description}
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
			</Modal>
		</div>
	)
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		createAccommodation: (accommodation) => dispatch(createAccommodation(accommodation)),
		fetchAccommodations: () => dispatch(fetchAccommodations()),
		showSuccessSnackbar: (message, severityMessage) => dispatch(showSuccessSnackbar(message, severityMessage)),
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		createAccommodationData: state.accommodationCreate,
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AccommodationCreateModal)