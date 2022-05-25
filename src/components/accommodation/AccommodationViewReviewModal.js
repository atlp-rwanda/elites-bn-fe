import { Box, Button, Modal, Rating, Typography, TextField, TextareaAutosize, List, ListItem, ListItemText, Divider } from '@mui/material'

import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';

import { fetchAccommodations } from '../../redux/actions/accommodationListActions';
import { createAccommodationReview } from '../../redux/actions/accommodationReviewCreateAction';
import { clearSnackbar, showSuccessSnackbar } from '../../redux/actions/snackbarActions';

import { format, formatDistance, formatRelative, subDays } from 'date-fns'

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
function AccommodationViewReview({ isOpen, handleClose, accommodation, reviews, avg, reviewsCount }) {

	return (
		<div>

			<Modal
				open={isOpen}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					{accommodation ? <div>
						<Typography id="modal-modal-title" variant="h4" component="h2">
							{accommodation.accommodationName}
						</Typography>
						<Typography style={{ color: '#07539F' }} id="modal-modal-title" variant="h6" component="h2">
							Number of reviews {'\u2022'} {reviewsCount}
						</Typography>
						<Typography style={{ color: '#07539F' }} id="modal-modal-title" variant="h6" component="h2">
							Average rating {'\u2022'} {avg.toFixed(2)}
						</Typography>

						<Rating name="half-rating" precision={0.1} value={avg} disabled />
						<hr />
						<List
							sx={{
								width: '100%',
								bgcolor: 'background.paper',
								position: 'relative',
								overflow: 'auto',
								maxHeight: 300,
								'& ul': { padding: 0 },
							}}
						>
							{[...reviews].reverse().map((rev) => {
								return <ListItem key={rev.id}>
									<ListItemText
										// primary="Brunch this weekend?"
										secondary={
											<React.Fragment>
												<Typography
													sx={{ display: 'inline' }}
													component="span"
													variant="body2"
													color="text.primary"
												>
													{format(new Date(rev.createdAt), 'PPPP')}
												</Typography>
												{` — ${rev.feedback}`}
											</React.Fragment>
										}
									/>
									<Rating name="disabled" value={rev.rating} disabled />
								</ListItem>
							})}
						</List>

					</div> : 'null'}
					{'\u00A0'}{'\u00A0'}
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

export default connect(mapStateToProps, mapDispatchToProps)(AccommodationViewReview)