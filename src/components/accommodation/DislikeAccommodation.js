import React, { useEffect, useState } from 'react';
import { Button, Typography } from '@mui/material';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import { dislikeCreateAccommodation } from '../../redux/actions/dislikeAccommodationCreateAction';
import { showSuccessSnackbar } from '../../redux/actions/snackbarActions';
import { connect, useDispatch } from 'react-redux';

function DislikeAccommodation({
  id,
  accommodation,
  likeCreateAccommodationData,
  dislikes,
  setDislikes,
}) {
  const dispatch = useDispatch();

  const [dislikeAccommodation, setDislikeAccommodation] = useState('');

  const handleDislike = () => {
    dispatch(dislikeCreateAccommodation(accommodation.id));
    setDislikes(dislikes - 1);
  };

  useEffect(() => {});

  return (
    <div>
      <ThumbDownOutlinedIcon
        padding={10}
        margin={5}
        size="small"
        color="primary"
        variant="contained"
        className="like"
        onClick={handleDislike}
      />

      <Typography
        sx={{
          top: '104px',
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: 'normal',
          lineHeight: '24px',
          fontSize: '16px',
          letterSpacing: '0.18px',
          color: '#172B4D',
          margin: '16px 0px',
        }}
      >
        {dislikes}
      </Typography>
    </div>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dislikeCreateAccommodation: () => dispatch(dislikeCreateAccommodation()),
    showSuccessSnackbar: () =>
      dispatch(showSuccessSnackbar(message, severityMessage)),
    clearSnackbar: () => dispatch(clearSnackbar()),
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    dislikeCreateAccommodationData: state.dislikeAccommodationCreate,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DislikeAccommodation);
