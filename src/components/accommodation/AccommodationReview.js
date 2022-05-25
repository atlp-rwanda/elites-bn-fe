import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';

import { fetchAccommodations } from '../../redux/actions/accommodationListActions';
import { clearSnackbar, showSuccessSnackbar } from '../../redux/actions/snackbarActions';

import { Button, CardActionArea, CardActions, CardContent, CardMedia, Typography, Grid, Card, Box, Snackbar, Alert } from '@mui/material';

import Sidebar from '../layouts/dashboardLayout/Sidebar';
import TopBar from '../layouts/dashboardLayout/TopBar';
import { sideBarData } from './travelAdminMenuData';
import AccommodationReviewModal from './AccommodationReviewModal';
import AccommodationViewReviewModal from './AccommodationViewReviewModal';
import axios from 'axios';

function AccommodationReview(props) {
	const [open, setOpen] = useState(false)
	const [openV, setOpenV] = useState(false)
	const [accommodation, setAccommodation] = useState(null)
	const [reviews, setReviews] = useState(null)
	const [avgRev, setAvgRev] = useState(0)
	const [countRatings, setCountRatings] = useState(0)
	useEffect(() => {
		const fetchA = async () => {
			await props.fetchAccommodations()
		}
		fetchA()

	}, [])

	const handleClose = () => {
		props.clearSnackbar()
	};

	const findReviews = async (id) => {
		const res = await axios.get(`https://elites-barefoot-nomad.herokuapp.com/api/v1/accommodations/${id}/reviews`, {
			headers: {
				authorization: `Bearer ${JSON.parse(localStorage.getItem('userToken')).accesstoken}`,
			}
		})

		setReviews(res.data.payload.ratings.rows)
		setAvgRev(res.data.payload.averageRating ?? 0)
		setCountRatings(res.data.payload.ratings.count)

	}

	const action = (
		<React.Fragment>
			<Button style={{ color: '#fff' }} size="small" onClick={handleClose}>
				UNDO
			</Button>
		</React.Fragment>
	);

	return (
		<div>
			<AccommodationViewReviewModal reviews={reviews ?? []} avg={avgRev} reviewsCount={countRatings} isOpen={openV} handleClose={() => setOpenV(false)} accommodation={accommodation} />
			<AccommodationReviewModal isOpen={open} handleClose={() => setOpen(false)} accommodation={accommodation} />
			<Sidebar sideBarData={sideBarData} />
			<TopBar />
			<br /> <br />
			<div style={{ minHeight: '100vh', width: '78vw', borderRadius: '10px', m: 2, background: 'white', marginLeft: '20%' }}>

				<Grid container spacing={1}>
					{props.accommodationsData.hasOwnProperty('data') ? props.accommodationsData.data.payload.map(accommodation => {

						return <Grid key={accommodation.id} sx={{ position: 'relative' }} item xs={12} md={4} lg={3}>

							<Card sx={{ width: '98%' }}>
								<CardActionArea>
									<CardMedia
										component="img"
										height="140"
										image={accommodation.images[0]}
										alt="green iguana"
									/>
									<CardContent>
										<Typography gutterBottom variant="body1" component="div">
											{accommodation.accommodationName}
										</Typography>
									</CardContent>
								</CardActionArea>
								<CardActions>
									<Button onClick={async () => {
										await findReviews(accommodation.id)
										setAccommodation(accommodation)
										setOpenV(true)
									}} size="small" variant='outlined' color="primary">
										MORE
									</Button>
									<Button onClick={() => {
										setAccommodation(accommodation)
										setOpen(true)
									}} size="small" variant='contained' color="primary">
										REVIEW
									</Button>
								</CardActions>
							</Card>
						</Grid>
					}) : ''}
				</Grid>

			</div>

		</div>
	)
}


const mapStateToProps = (state, ownProps) => {
	return {
		accommodationsData: state.accommodations,
		accommodationDeleteData: state.accommodationDelete,
		accommodationUpdateData: state.accommodationUpdate,
		snackbarData: state.SnackBar
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		fetchAccommodations: () => dispatch(fetchAccommodations()),
		showSuccessSnackbar: () => dispatch(showSuccessSnackbar(message, severityMessage)),
		clearSnackbar: () => dispatch(clearSnackbar())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AccommodationReview)