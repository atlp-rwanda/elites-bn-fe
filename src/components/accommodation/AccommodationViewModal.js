import {
  Button,
  Box,
  Chip,
  ImageList,
  ImageListItem,
  Modal,
  Typography,
  ButtonGroup,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import DislikeAccommodation from './DislikeAccommodation';
import LikeAccommodation from './LikeAccommodation';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function srcset(image, size, rows = 1, cols = 1) {
  if (image) {
    image = image.replace(/^http:/, 'https:');
  }
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

function AccommodationViewModal({
  isOpen,
  handleClose,
  accommodation,
  modalId,
}) {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  useEffect(() => {
    const fetchLikes = async () => {
      const resLikes = await axios.get(
        `https://elites-barefoot-nomad.herokuapp.com/api/v1/accommodations/${accommodation.id}/likes`
      );

      setLikes(resLikes.data.payload.likes);
      setDislikes(resLikes.data.payload.dislikes);
    };

    fetchLikes();
  }, [dislikes, likes]);

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby={modalId}
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id={modalId} variant="h4" component="h2">
            {accommodation.accommodationName}
          </Typography>
          <Typography variant="body1" component="h2">
            street: {accommodation.streetAddress}
          </Typography>
          <hr />
          <br />
          <Typography variant="body1" component="h2">
            {accommodation.description}
          </Typography>
          <Typography variant="h6" component="h2">
            Amenities
          </Typography>
          <ul>
            {accommodation.amenities.map((amenity) => (
              <li key={amenity}>{amenity}</li>
            ))}
          </ul>

          {/* <Typography variant="h6" component="h2">
						Approval status
					</Typography> */}
          {/* {accommodation.approvalStatus == "true" ? <Chip label="Approved" color="success" size="small" /> : <Chip label="Not Approved" color="secondary" size="small" />} */}
          <Typography variant="h6" component="h2">
            Images
          </Typography>
          <ImageList
            sx={{ width: 500, height: 200 }}
            variant="quilted"
            cols={4}
            rowHeight={121}
          >
            {accommodation.images.length >= 1 ? (
              accommodation.images.map((item) => (
                <ImageListItem
                  key={item}
                  cols={item.cols || 1}
                  rows={item.rows || 1}
                >
                  <img
                    {...srcset(item, 121, item.rows, item.cols)}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))
            ) : (
              <img
                {...srcset(
                  'https://res.cloudinary.com/dpd4zujfh/image/upload/v1647960905/barefoot_api/cmniep6tdtlcz9vvxjty.jpg',
                  121,
                  100,
                  100
                )}
                alt={'image'}
                loading="lazy"
              />
            )}
          </ImageList>
          <div
            className="likesdislikes"
            style={{ display: 'flex', marginLeft: '10%' }}
          >
            <LikeAccommodation
              accommodation={accommodation}
              likes={likes}
              setLikes={setLikes}
            />
            <Typography sx={{ m: 4 }} />
            <DislikeAccommodation
              accommodation={accommodation}
              dislikes={dislikes}
              setDislikes={setDislikes}
            />
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default AccommodationViewModal;
