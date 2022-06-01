import { Box, Button, Modal, Rating, Typography, TextField, TextareaAutosize } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';

import { fetchAccommodations } from '../../redux/actions/accommodationListActions';
import { createAccommodationReview } from '../../redux/actions/accommodationReviewCreateAction';
import { clearSnackbar, showSuccessSnackbar } from '../../redux/actions/snackbarActions';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '70%',
	bgcolor: 'background.paper',
	border: '2px solid #07539F',
	boxShadow: 24,
	p: 4,
};
import { openGlobalSnackBar, closeGlobalSnackBar } from '../../redux/actions/globalSnackBarActions';
function AccommodationReviewModal({ handleClose, isOpen, accommodation, createAccommodationReview, accommodationReviewData, showSuccessSnackbar, clearSnackbar, fetchAccommodations }) {

	const [rating, setRating] = useState(1);
	const [feedback, setFeedback] = useState('')
	const dispatch = useDispatch()
	return (
		<div>
			<Modal
				open={isOpen}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Typography style={{ color: '#07539F' }} id="modal-modal-title" variant="h4" component="h2">
						REVIEW
					</Typography>

					{accommodation ? <div>
						<Typography id="modal-modal-title" variant="h5" component="h2">
							{accommodation.accommodationName}
						</Typography>
						<Typography id="modal-modal-description" sx={{ mt: 2 }}>
							{accommodation.description}
						</Typography>
					</div> : 'null'}

					<Typography id="modal-modal-description" variant="body2" component="legend" sx={{ mt: 2 }}>
						PROVIDE RATING
					</Typography>
					<Rating
						name="simple-controlled"
						value={rating}
						onChange={(event, newValue) => {
							setRating(newValue);
						}}
					/>
					<Typography id="modal-modal-description" variant="body2" component="legend" sx={{ mt: 2 }}>
						PROVIDE FEEDBACK
					</Typography>
					<br />
					<TextareaAutosize
						id=""
						minRows={3}
						placeholder="Your feedback"
						value={feedback}
						style={{ width: '80%'}}
						onChange={(e) => setFeedback(e.target.value)}

					/>
					<br /><br />
					<Button onClick={async () => {
						dispatch(closeGlobalSnackBar())
						if (feedback.trim(' ') == '') {
							dispatch(openGlobalSnackBar({
								message: 'Feedback must be provided',
								severity: 'error',
							  }))
						} else {
							await createAccommodationReview(accommodation.id, { rating, feedback })
							handleClose()
						}

					}} variant="contained" style={{ background: '#07539F' }} color="primary">
						SUBMIT
					</Button>
					{'\u00A0'}{'\u00A0'}
					<Button onClick={handleClose} variant="contained" color="secondary">
						CANCEL
					</Button>
				</Box>
			</Modal>
		</div>
	)
}


const mapStateToProps = (state, ownProps) => {
	return {
		accommodationsData: state.accommodations,
		accommodationDeleteData: state.accommodationDelete,
		accommodationUpdateData: state.accommodationUpdate,
		snackbarData: state.SnackBar,
		accommodationReviewData: state.reviewAccommodation
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		fetchAccommodations: () => dispatch(fetchAccommodations()),
		showSuccessSnackbar: (message, severityMessage) => dispatch(showSuccessSnackbar(message, severityMessage)),
		clearSnackbar: () => dispatch(clearSnackbar()),
		createAccommodationReview: (accommodationId, review) => dispatch(createAccommodationReview(accommodationId, review))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AccommodationReviewModal)