import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import axios from 'axios';
import ButtonGroup from '@mui/material/ButtonGroup';
import setAccommodations from '../../redux/actions/accommodationsActions';
import LinearProgress from '../progressBar/linearProgress';
import Sidebar from '../layouts/dashboardLayout/Sidebar';
import TopBar from '../layouts/dashboardLayout/TopBar';

const Accommodations = () => {
  const accommodationState = useSelector((state) => state.allAccommodations);
  const { accommodations } = accommodationState;
  const dispatch = useDispatch();

  const fetchAccommodations = async () => {
    const res = await axios
      .get('https://elites-barefoot-nomad.herokuapp.com/api/v1/accommodations')
      .catch((err) => {
        console.log(err);
      });
    dispatch(setAccommodations(res.data.payload));
  };

  useEffect(() => {
    fetchAccommodations();
  }, []);

  if (accommodationState.loading) {
    return (
      <>
        <Sidebar />
        <TopBar />
        <LinearProgress />
      </>
    );
  }
  return (
    <>
      <Sidebar />
      <TopBar />
      <div className="accommodation">
        <ButtonGroup>
          <Button color="primary" variant="contained">
            PRIMARY
          </Button>
          <Button color="secondary" variant="contained">
            SECONDARY
          </Button>
          <Button color="info" variant="contained">
            INFO
          </Button>
          <Button color="error" variant="contained">
            ERROR
          </Button>
          <Button color="success" variant="contained">
            SUCCESS
          </Button>
          <Button color="success" variant="outlined">
            OUTLINED
          </Button>
        </ButtonGroup>
        {accommodations.map((accommodation) => (
          <React.Fragment key={accommodation.id}>
            <h6>{accommodation.accommodationName}</h6>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default Accommodations;
