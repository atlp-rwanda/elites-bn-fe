import { Box, Modal, Typography, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { async } from 'regenerator-runtime';
import { deleteAccommodation } from '../../redux/actions/accommodationDeleteActions';
import { fetchAccommodations } from '../../redux/actions/accommodationListActions';
import { showSuccessSnackbar } from '../../redux/actions/snackbarActions';


const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #fff',
	boxShadow: 24,
	p: 4,
};

function srcset(image, size, rows = 1, cols = 1) {
	return {
		src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
		srcSet: `${image}?w=${size * cols}&h=${size * rows
			}&fit=crop&auto=format&dpr=2 2x`,
	};
}

function AccommodationDeleteModal({ isOpen, handleClose, accommodation, modalId, deleteAccommodation, accommodationDeleteData, fetchAccommodations, showSuccessSnackbar }) {

	const handleDelete = async () => {
		await deleteAccommodation(accommodation.id)
		await fetchAccommodations()
		if (accommodationDeleteData) {
			await showSuccessSnackbar('DELETE SUCCESSFULL', 'success')
		}

		handleClose()
	}

	return (
		<div>
			<Modal
				open={isOpen}
				onClose={handleClose}
				aria-labelledby={modalId}
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Typography id={modalId} variant="h5" component="h2">
						Are sure you want to remove {accommodation.accommodationName}?
					</Typography>
					<Typography variant="body1" component="h2">
						street: {accommodation.streetAddress}
					</Typography>
					<br />
					<Button onClick={handleDelete} variant="contained" color="primary">
						Comfirm
					</Button>
				</Box>
			</Modal>
		</div>
	)
}


const mapStateToProps = (state, ownProps) => {
	return {
		accommodationDeleteData: state.accommodationDelete
	}
}
deleteAccommodation
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		deleteAccommodation: (id) => dispatch(deleteAccommodation(id)),
		fetchAccommodations: () => dispatch(fetchAccommodations()),
		showSuccessSnackbar: (message, severityMessage) => dispatch(showSuccessSnackbar(message, severityMessage)),
		clearSnackbar: () => dispatch(clearSnackbar())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AccommodationDeleteModal)
