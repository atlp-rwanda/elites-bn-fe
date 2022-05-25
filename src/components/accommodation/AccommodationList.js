import {
  Box,
  Button,
  Typography,
  Avatar,
  CircularProgress,
  Snackbar,
  Alert,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchAccommodations } from '../../redux/actions/accommodationListActions';
import {
  clearSnackbar,
  showSuccessSnackbar,
} from '../../redux/actions/snackbarActions';
import Sidebar from '../layouts/dashboardLayout/Sidebar';
import TopBar from '../layouts/dashboardLayout/TopBar';
import AccommodationCreateModal from './AccommodationCreateModal';
import AccommodationDeleteModal from './AccommodationDeleteModal';
import AccommodationUpdateModal from './AccommodationUpdateModal';
import AccommodationViewModal from './AccommodationViewModal';

const roleId = localStorage.getItem('roleId');

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'image',
    headerName: 'Image',
    width: 100,
    renderCell: (params) => <Avatar variant="square" src={params.value} />,
    // editable: true,
  },
  {
    field: 'accommodationName',
    headerName: 'Accommodation',
    flex: 1,
    // editable: true,
  },
  {
    field: 'location',
    headerName: 'Location',
    flex: 1,
    // editable: true,
  },
  {
    field: 'actions',
    headerName: 'Actions',
    renderCell: (params) => {
      const [open, setOpen] = useState(false);
      const [openD, setOpenD] = useState(false);
      const [openU, setOpenU] = useState(false);

      return (
        <div>
          <AccommodationDeleteModal
            modalId={params.value.id + 'a'}
            accommodation={params.value.acc}
            handleClose={() => setOpenD(false)}
            isOpen={openD}
          />
          <AccommodationViewModal
            modalId={params.value.id}
            accommodation={params.value.acc}
            handleClose={() => setOpen(false)}
            isOpen={open}
          />
          <AccommodationUpdateModal
            accommodation={params.value.acc}
            handleClose={() => setOpenU(false)}
            isOpen={openU}
          />
          <Button
            id={params.value.id}
            onClick={() => setOpen(true)}
            sx={{ ml: 1, color: '#07539F', borderColor: '#07539F' }}
            variant="outlined"
          >
            VIEW
          </Button>
          {roleId == 2 && (
            <>
              <Button
                onClick={() => setOpenU(true)}
                sx={{ ml: 1, background: '#07539F' }}
                variant="contained"
              >
                EDIT
              </Button>
              <Button
                onClick={() => setOpenD(true)}
                sx={{ ml: 1, color: 'red', borderColor: 'red' }}
                variant="outlined"
              >
                DELETE
              </Button>
            </>
          )}
        </div>
      );
    },
    flex: 1,
  },
];

function AccommodationList(props) {
  const [state, setState] = useState({
    open: true,
    vertical: 'top',
    horizontal: 'center',
  });
  console.log('%cROLE ID', 'background-color:green', roleId);
  const handleClose = () => {
    props.clearSnackbar();
    setState({ ...state, open: false });
  };

  const [openC, setOpenC] = useState(false);
  const [locations, setLocations] = useState([]);

  const handleOpenCreate = () => {
    setOpenC(true);
  };

  useEffect(() => {
    const fetchA = async () => {
      const result = await axios(
        'https://elites-barefoot-nomad.herokuapp.com/api/v1/locations'
      );
      setLocations(result.data.payload);
      await props.fetchAccommodations();
    };
    fetchA();
  }, []);

  useEffect(() => {});

  const action = (
    <React.Fragment>
      <Button style={{ color: '#fff' }} size="small" onClick={handleClose}>
        UNDO
      </Button>
    </React.Fragment>
  );

  return (
    <div>
      <Sidebar />
      <TopBar />
      <div style={{ maxHeight: '84vh', width: '80vw', marginLeft: '19vw' }}>
        <br></br>

        <Box
          sx={{
            backgroundColor: 'white',
            borderRadius: '15px',
          }}
        >
          <AccommodationCreateModal
            locations={locations}
            handleClose={() => setOpenC(false)}
            isOpen={openC}
          />
          {roleId == 2 && (
            <Button
              onClick={handleOpenCreate}
              sx={{ m: 4, color: '#07539F' }}
              variant="outlined"
            >
              CREATE AN ACCOMMODATION
            </Button>
          )}
          <Typography
            variant="body1"
            sx={{
              color: '#07539F',
              ml: 4,
              fontWeight: 'bold',
              fontSize: '20px',
            }}
          >
            View accommodations
          </Typography>
          <br />
          <br />

          {props.accommodationsData.loading ? (
            <p style={{ textAlign: 'center' }}>
              <CircularProgress />
            </p>
          ) : props.accommodationsData.hasOwnProperty('data') ? (
            <DataGrid
              sx={{ mx: 2 }}
              autoHeight={true}
              rows={props.accommodationsData.data.payload.map((acc) => {
                return {
                  ...acc,
                  actions: { acc, id: acc.id },
                  roleId,
                  image:
                    acc.images[0] ??
                    'https://res.cloudinary.com/dpd4zujfh/image/upload/v1647960905/barefoot_api/cmniep6tdtlcz9vvxjty.jpg',
                  location: acc.location.locationName,
                };
              })}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              disableSelectionOnClick
            />
          ) : (
            ''
          )}
        </Box>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    accommodationsData: state.accommodations,
    accommodationDeleteData: state.accommodationDelete,
    accommodationUpdateData: state.accommodationUpdate,
    snackbarData: state.SnackBar,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchAccommodations: () => dispatch(fetchAccommodations()),
    showSuccessSnackbar: () =>
      dispatch(showSuccessSnackbar(message, severityMessage)),
    clearSnackbar: () => dispatch(clearSnackbar()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AccommodationList);
