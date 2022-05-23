import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  loginPage: {
    height: '100vh',
    display: 'flex',
  },

  title: {
    color: '#07539F',
    fontWeight: '700',
    paddingBottom: '5px',
    fontFamily: 'Montserrat',
    fontSize: '26px',
  },

  form: {
    backgroundColor: 'inherit',
  },

  signinButton: {
    borderRadius: '20',
    color: '#07539F',
  },

  formContainer: {
    margin: '10% auto',
    alignContent: 'center',
    textAlign: 'center',
  },

  social: {
    color: '#9A9A9A',
  },

  googleIcon: {
    marginRight: '20px',
  },

  rightSideDiv: {
    margin: '40% auto',
    width: '100%',
    height: '30vh',
  },

  rightBanner: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: '26px',
  },

  rightBannerParagraph: {
    color: '#FFFFFF',
    fontWeight: 'regular',
    textAlign: 'center',
    width: '70%',
    height: '10vh',
    marginLeft: '20% ',
  },

  error: {
    color: '#ff0e02',
    fontSize: '9px',
  },

  backgroundDiv: {
    backgroundColor: '#FFFFFF',
    height: '288.58px',
    left: '1028.73px',
    width: '310.87px',
    top: '-92.85px',
    opacity: '20%',
    position: 'absolute',
    transform: 'rotate(40.54deg)',
  },
});

export default useStyles;
