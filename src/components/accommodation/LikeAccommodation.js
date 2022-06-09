import React, { useEffect, useState } from 'react';
import { Button, Typography } from '@mui/material';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import { likeCreateAccommodation } from '../../redux/actions/likeAccommodationCreateActions';
import { showSuccessSnackbar } from '../../redux/actions/snackbarActions';
import { connect, useDispatch } from 'react-redux';
import Tooltip from '@mui/material/Tooltip';

function LikeAccommodation({
  id,
  accommodation,
  likeCreateAccommodationData,
  likes,
  setLikes,
}) {
  const dispatch = useDispatch();

  const [likeAccommodation, setLikeAccommodation] = useState('');

  const handleLike = () => {
    dispatch(likeCreateAccommodation(accommodation.id));
    setLikes(likes + 1);
  };

  useEffect(() => {});

  return (
    <div>
      <Button>
        <ThumbUpAltOutlinedIcon
          padding={10}
          margin={5}
          size="small"
          color="primary"
          variant="contained"
          className="like"
          onClick={handleLike}
        />
      </Button>
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
          margin: '16px 20px',
        }}
      >
        {likes}
      </Typography>
    </div>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // likeCreateAccommodation: (id) => dispatch(likeCreateAccommodation(id)),
    likeCreateAccommodation: () => dispatch(likeCreateAccommodation()),
    showSuccessSnackbar: (message, severityMessage) =>
      dispatch(showSuccessSnackbar(message, severityMessage)),
    clearSnackbar: () => dispatch(clearSnackbar()),
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    likeCreateAccommodationData: state.likeAccommodationCreate,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LikeAccommodation);
