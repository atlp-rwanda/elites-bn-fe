import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@mui/styles';
import Sidebar from '../layouts/dashboardLayout/Sidebar';
import TopBar from '../layouts/dashboardLayout/TopBar';
import {
  fetchedProfile,
  setGender,
  setBirthdate,
  setLanguage,
  setCurrency,
  setDepartment,
  setProfileImage,
  setAddress,
  setPassport,
  setResidence,
  initialize,
} from '../../redux/actions/profileActions';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import Modal from '@mui/material/Modal';
import './profile.scss';
import Loader from '../home/loader';


const useStyles = makeStyles(() => ({
  root: {
    '&&': {
      '& .MuiStepIcon-completed': { color: '07539F' },
    },
  },
}));

const blueColor = { color: '#07539F' };
const StackedTypography = ({ header, body, display }) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing="5px"
      sx={{ marginTop: '15px', display: display ? display : 'flex' }}
    >
      <Typography
        sx={{
          color: blueColor,
          fontWeight: 900,
          fontSize: 16,
          '@media screen and (max-width: 768px)': {
            width: '50%',
            textAlign: 'left',
          },
        }}
      >
        {header.toUpperCase()}:
      </Typography>
      <Typography
        sx={{
          color: 'black',
          fontWeight: 400,
          '@media screen and (max-width: 768px)': {
            textAlign: 'right',
          },
        }}
      >
        {!body ? '' : body}
      </Typography>
    </Stack>
  );
};

const Input = styled('input')({
  display: 'none',
});

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function profile() {
  const blueColor = { backgroundColor: '#CCD4FF' };
  const darkBlue = { backgroundColor: '#07539F' };
  const [change, setChange] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [severity, setSeverity] = React.useState('success');
  const [snackText, setSnackText] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [loadingTwo, setLoadingTwo] = React.useState(false);
  const [image, setImage] = React.useState(null);
  const [newProfile, setNewProfile] = React.useState('no');
  const [showCreateProfileModal, setShowCreateProfileModal] =
    React.useState(false);

  const handleImage = (e) => {
    setImage(e.target.files[0]);
    const image = e.target.files[0];
    if (image) {
      dispatch(setProfileImage(image));
    }
  };

  const close = () => {
    setShowCreateProfileModal(false);
  };

  const currentUser = useSelector((state) => state.currentUser.currentUser.id);

  const dispatch = useDispatch();
  const token = JSON.parse(localStorage.getItem('userToken'))?.accesstoken;
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const profile = useSelector((state) => state.profile);
  const createProfileFormData = new FormData();
  createProfileFormData.append('gender', profile.gender);
  createProfileFormData.append('birthdate', profile.birthdate);
  createProfileFormData.append('language', profile.language);
  createProfileFormData.append('currency', profile.currency);
  createProfileFormData.append('department', profile.department);
  createProfileFormData.append(
    'picture',
    image == null ? profile.image : image
  );
  createProfileFormData.append('residence', profile.residence);
  createProfileFormData.append('address', profile.address);
  createProfileFormData.append('passportNumber', profile.passportNumber);

  const createProfile = async () => {
    setLoading(true);
    const res = await axios
      .post(
        'https://elites-barefoot-nomad.herokuapp.com/api/v1/profiles',
        createProfileFormData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        if (response.status === 201) {
          setSeverity('success');
          setOpen(true);
          setSnackText(response.data.message);
          setLoading(false);
          setChange(false);
          fetchProfile();
          setShowCreateProfileModal(false);
          initialize();
        } else {
          setSeverity('error');
          setOpen(true);
          setSnackText(response.data.error);
          setLoading(false);
          setChange(false);
        }
      })
      .catch((error) => {
        setSeverity('error');
        setOpen(true);
        setSnackText(error.message);
        setLoading(false);
        setChange(false);
      });
  };
  const fetchProfile = async () => {
    setLoadingTwo(true);
    return axios
      .get('https://elites-barefoot-nomad.herokuapp.com/api/v1/profiles', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const fetchedUserProfile = response.data.payload.filter(
          (profileId, index) =>
            response.data.payload[index].User.id == currentUser
        );
        setLoadingTwo(false);
        let userProfile = fetchedUserProfile[0];

        if (fetchedUserProfile && fetchedUserProfile.length <= 0) {
          if (currentUser) {
            setShowCreateProfileModal(true);
          }
        } else {
          setShowCreateProfileModal(false);
          dispatch(
            fetchedProfile({
              names: userProfile.User.names,
              email: userProfile.User.email,
              gender: userProfile.gender,
              role: userProfile.User.roleId,
              image: userProfile.picture,
              birthdate: new Date(userProfile.birthdate)
                .toISOString()
                .split('T')[0],
              language: userProfile.language,
              currency: userProfile.currency,
              department: userProfile.department,
              passportNumber: userProfile.passportNumber,
              address: userProfile.address,
            })
          );
        }
      });
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const formData = new FormData();
  formData.append('gender', profile.gender);
  formData.append('birthdate', profile.birthdate);
  formData.append('language', profile.language);
  formData.append('currency', profile.currency);
  formData.append('department', profile.department);
  formData.append('address', profile.address);
  formData.append('passportNumber', profile.passportNumber);
  formData.append('picture', image == null ? profile.image : image);

  const updateProfile = async () => {
    setLoading(true);
    const res = await axios
      .patch(
        'https://elites-barefoot-nomad.herokuapp.com/api/v1/profiles',
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          setSeverity('success');
          setOpen(true);
          setSnackText(response.data.message);
          setLoading(false);
          setChange(false);
          fetchProfile();
          setShowCreateProfileModal(false);
          window.location.reload();
        }
      })
      .catch((error) => {
        setSeverity('error');
        setOpen(true);
        setSnackText(error.message);
        setLoading(false);
        setChange(false);
        fetchProfile();
      });
  };
  useEffect(() => {
    fetchProfile();
  }, [currentUser]);

  return (
    <Box>
      <Sidebar />
      <Stack
        direction="row"
        padding="0px 20px"
        spacing={2}
        sx={{ backgroundColor: '#E5EAFF' }}
      >
        <TopBar />
      </Stack>
      <div
        className="profile"
        style={{
          overflow: 'scroll',
          backgroundColor: 'white',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap',
          borderRadius: '30px',
          marginTop: '5vh',
          marginRight: '4vw',
          marginLeft: '22vw',
        }}
      >
        <Loader open={loadingTwo} />
        <Typography
          variant="body1"
          gutterBottom
          align="center"
          sx={{
            margin: 3,
            fontWeight: 700,
            fontSize: 20,
            textAlign: 'center',
            height: 'fit-content',
          }}
        >
          PROFILE DETAILS
        </Typography>

        <Box
          component="div"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            flexShrink: '0.5',
          }}
        >
          <Box
            component="img"
            sx={{
              alignSelf: 'center',
              height: 280,
              width: 300,
              marginTop: '32px',
              marginRight: '50px',
              borderRadius: 120,
            }}
            alt="Profile picture"
            src={profile.image}
          />

          <label htmlFor="contained-button-file">
            <Input
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
            />
            <Button
              component="label"
              style={{
                marginTop: '20px',
                display: change == true ? 'flex' : 'none',
              }}
              startIcon={<FileUploadIcon />}
              variant="contained"
            >
              Upload Image
              <input type="file" hidden onChange={handleImage} />
            </Button>
          </label>

          <StackedTypography
            header="Role"
            display={change == true ? 'none' : 'flex'}
            body={(() => {
              if (profile.role == 1) {
                return 'ADMIN';
              } else if (profile.role == 2) {
                return 'TRAVEL ADMIN';
              } else if (profile.role == 3) {
                return 'ACCOMODATION SUPPLIER';
              } else if (profile.role == 4) {
                return 'MANAGER';
              } else {
                return 'REQUESTER';
              }
            })()}
          />

          <Button
            onClick={() => setChange(true)}
            variant="contained"
            sx={{
              display: change == true ? 'none' : 'block',
              width: 150,
              marginTop: 3,
              marginBottom: 3,
              backgroundColor: darkBlue,
              color: 'white,',
              borderColor: 'white',
            }}
          >
            EDIT PROFILE
          </Button>

          <LoadingButton
            loading={loading}
            onClick={async () => {
              const res = await updateProfile();
            }}
            variant="contained"
            sx={{
              display: change == true ? 'block' : 'none',
              width: 150,
              marginTop: 3,
              marginBottom: 3,
              backgroundColor: darkBlue,
              color: 'white,',
              borderColor: 'white',
            }}
          >
            SAVE CHANGES
          </LoadingButton>
        </Box>

        <Container>
          <Box
            component="div"
            style={{
              marginTop: '32px',
              display: change == true ? 'none' : 'block',
            }}
          >
            <StackedTypography header="NAMES" body={profile.names} />
            <StackedTypography header="EMAIL" body={profile.email} />
            <StackedTypography header="GENDER" body={profile.gender} />
            <StackedTypography header="ADDRESS" body={profile.address} />
            <StackedTypography header="CURRENCY" body={profile.currency} />
            <StackedTypography header="DEPARTMENT" body={profile.department} />
            <StackedTypography
              header="PASSPORT"
              body={profile.passportNumber}
            />
            <StackedTypography header="BIRTHDATE" body={profile.birthdate} />
          </Box>
          <Box
            component="div"
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginTop: '30px',
            }}
          >
            <Box
              component="div"
              style={{
                marginLeft: '16px',
                display: change == true ? 'grid' : 'none',
              }}
            >
              <TextField
                label="email"
                variant="outlined"
                value={`${!profile.email ? '' : profile.email}`}
                sx={{
                  fontWeight: 600,
                  margin: 2,
                  textAlign: 'left',
                }}
                onChange={(e) => {
                  dispatch(setEmail(e.target.value));
                }}
                inputProps={{ readOnly: change == true ? false : true }}
              />

              <TextField
                label="gender"
                variant="outlined"
                value={`${!profile.gender ? '' : profile.gender}`}
                sx={{
                  fontWeight: 600,
                  margin: 2,
                  textAlign: 'left',
                }}
                onChange={(e) => {
                  dispatch(setGender(e.target.value));
                }}
                inputProps={{ readOnly: change == true ? false : true }}
              />
              <TextField
                label="address"
                variant="outlined"
                value={`${!profile.address ? '' : profile.address}`}
                sx={{
                  fontWeight: 600,
                  margin: 2,
                  textAlign: 'left',
                }}
                onChange={(e) => {
                  dispatch(setAddress(e.target.value));
                }}
              />

              <TextField
                label="language"
                variant="outlined"
                value={`${!profile.language ? '' : profile.language}`}
                sx={{
                  fontWeight: 600,
                  margin: 2,
                  textAlign: 'left',
                }}
                onChange={(e) => {
                  dispatch(setLanguage(e.target.value));
                }}
                inputProps={{ readOnly: change == true ? false : true }}
              />
            </Box>

            <Box
              component="div"
              style={{
                marginLeft: '16px',
                display: change == true ? 'grid' : 'none',
              }}
            >
              <TextField
                label="currency"
                variant="outlined"
                value={`${!profile.currency ? '' : profile.currency}`}
                sx={{
                  fontWeight: 600,
                  marginTop: 2,
                  marginLeft: 1.2,
                  marginRight: 1.2,
                  marginBottom: 0.6,
                  textAlign: 'left',
                }}
                onChange={(e) => {
                  dispatch(setCurrency(e.target.value));
                }}
                inputProps={{ readOnly: change == true ? false : true }}
              />

              <TextField
                label="department"
                variant="outlined"
                value={`${!profile.department ? '' : profile.department}`}
                sx={{
                  fontWeight: 600,
                  marginTop: 0.7,
                  marginBottom: 0.6,
                  marginLeft: 1.2,
                  marginRight: 1.2,
                  textAlign: 'left',
                }}
                onChange={(e) => {
                  dispatch(setDepartment(e.target.value));
                }}
                inputProps={{ readOnly: change == true ? false : true }}
              />

              <TextField
                label="passport"
                variant="outlined"
                value={`${
                  !profile.passportNumber ? '' : profile.passportNumber
                }`}
                sx={{
                  fontWeight: 600,
                  marginTop: 1.2,
                  marginLeft: 1.2,
                  marginRight: 1.2,
                  marginBottom: 1.4,
                  textAlign: 'left',
                }}
                onChange={(e) => {
                  dispatch(setPassport(e.target.value));
                }}
              />

              <LocalizationProvider
                style={{ color: 'blue' }}
                dateAdapter={AdapterDateFns}
              >
                <DesktopDatePicker
                  readOnly={change == true ? false : true}
                  disableMaskedInput
                  value={profile.birthdate}
                  onChange={(date) => {
                    dispatch(
                      setBirthdate(new Date(date).toISOString().split('T')[0])
                    );
                  }}
                  label="Birthdate"
                  maxDate={new Date()}
                  renderInput={(params) => (
                    <TextField
                      style={{
                        fontWeight: 600,
                        margin: 1.2,
                        textAlign: 'left',
                        color: blueColor,
                      }}
                      {...params}
                      onKeyDown={(e) => {
                        e.preventDefault();
                      }}
                    />
                  )}
                />
              </LocalizationProvider>
            </Box>
          </Box>
        </Container>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        action={action}
        bodystyle={{ backgroundColor: 'white', color: 'black' }}
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
          {`${snackText}`}
        </Alert>
      </Snackbar>
      <Modal
        open={showCreateProfileModal}
        onClose={() => setShowCreateProfileModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          overflow: 'scroll',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
          width: '100vw',
          height: '100vh',
        }}
      >
         <div
          style={{ backgroundColor: 'white',textAlign:'center' ,padding:'20px'}}>
         <Typography variant = 'h5' color = '#07539F'> You do not have a profile, create one to proceed!</Typography>

            
        <div
          className="box1"
          style={{ display: 'flex', backgroundColor: 'white', padding: '50px' }}
        >
          <Box
            component="div"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              className="img"
              style={{
                alignSelf: 'center',
                height: '35vh',
                width: '17.5vw',
                marginTop: '32px',
                marginRight: '2rem',
                marginLeft: '1rem',
                borderRadius: '1rem',
              }}
              alt="Profile picture"
              src="https://www.pngkit.com/png/detail/126-1262807_instagram-default-profile-picture-png.png"
            />

            <label htmlFor="contained-button-file">
              <Input
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"
              />
              <Button
                component="label"
                style={{
                  marginTop: '20px',
                }}
                startIcon={<FileUploadIcon />}
                variant="contained"
              >
                Upload Image
                <input type="file" hidden onChange={handleImage} />
              </Button>
            </label>

            <LoadingButton
              className="buttonOne"
              loading={loading}
              onClick={async () => {
                const res = await createProfile();
              }}
              variant="contained"
              sx={{
                width: 180,
                marginTop: 3,
                marginBottom: 3,
                backgroundColor: darkBlue,
                color: 'white,',
                borderColor: 'white',
              }}
            >
              CREATE PROFILE
            </LoadingButton>
          </Box>
          <Box
            component="div"
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <TextField
              label="gender"
              variant="outlined"
              value={`${!profile.gender ? '' : profile.gender}`}
              sx={{
                fontWeight: 600,
                margin: 2,
                textAlign: 'left',
              }}
              onChange={(e) => {
                dispatch(setGender(e.target.value));
              }}
            />

            <TextField
              label="language"
              variant="outlined"
              value={`${!profile.language ? '' : profile.language}`}
              sx={{
                fontWeight: 600,
                margin: 2,
                textAlign: 'left',
              }}
              onChange={(e) => {
                dispatch(setLanguage(e.target.value));
              }}
            />

            <TextField
              label="passport"
              variant="outlined"
              value={`${!profile.passportNumber ? '' : profile.passportNumber}`}
              sx={{
                fontWeight: 600,
                margin: 2,
                textAlign: 'left',
              }}
              onChange={(e) => {
                dispatch(setPassport(e.target.value));
              }}
            />

            <TextField
              label="address"
              variant="outlined"
              value={`${!profile.address ? '' : profile.address}`}
              sx={{
                fontWeight: 600,
                margin: 2,
                textAlign: 'left',
              }}
              onChange={(e) => {
                dispatch(setAddress(e.target.value));
              }}
            />
          </Box>

          <Box
            component="div"
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <TextField
              label="residence"
              variant="outlined"
              value={`${!profile.residence ? '' : profile.residence}`}
              sx={{
                fontWeight: 600,
                margin: 2,
                textAlign: 'left',
              }}
              onChange={(e) => {
                dispatch(setResidence(e.target.value));
              }}
            />

            <TextField
              label="department"
              variant="outlined"
              sx={{
                fontWeight: 600,
                margin: 2,
                textAlign: 'left',
              }}
              onChange={(e) => {
                dispatch(setDepartment(e.target.value));
              }}
            />

            <TextField
              label="currency"
              variant="outlined"
              value={`${!profile.currency ? '' : profile.currency}`}
              sx={{
                fontWeight: 600,
                margin: 2,
                textAlign: 'left',
              }}
              onChange={(e) => {
                dispatch(setCurrency(e.target.value));
              }}
            />

            <LocalizationProvider
              style={{ color: 'blue' }}
              dateAdapter={AdapterDateFns}
            >
              <DesktopDatePicker
                disableMaskedInput
                value={profile.birthdate}
                onChange={(date) => {
                  dispatch(
                    setBirthdate(new Date(date).toISOString().split('T')[0])
                  );
                }}
                label="Birthdate"
                maxDate={new Date()}
                renderInput={(params) => (
                  <TextField
                    style={{
                      fontWeight: 600,
                      marginTop: 15,
                      marginLeft: 1.2,
                      marginRight: 1.2,
                      marginBottom: 1.2,
                      textAlign: 'left',
                      color: blueColor,
                    }}
                    {...params}
                    onKeyDown={(e) => {
                      e.preventDefault();
                    }}
                  />
                )}
              />
            </LocalizationProvider>

            <LoadingButton
              className="buttonTwo"
              loading={loading}
              onClick={async () => {
                const res = await createProfile();
              }}
              variant="contained"
              sx={{
                alignSelf: 'center',
                width: 180,
                marginTop: 3,
                marginBottom: 3,
                backgroundColor: darkBlue,
                color: 'white',
                borderColor: 'white',
                display: 'none',
              }}
            >
              CREATE PROFILE
            </LoadingButton>
          </Box>
        </div>

         </div>
        
      </Modal>
    </Box>
  );
}

export default profile;
