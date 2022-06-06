import LeftImage from '../../Assets/Images/forgot.jpg';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    leftContainer: {
      backgroundImage: `url(${LeftImage})`,
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
      width: '60vw',
    },

    rightContainer: {
      backgroundColor: '#FFFFFF',
      width: '40vw',
    },

    title: {
      color: '#07539F',
      fontWeight: 'bold',
      paddingBottom: '5px',
      fontFamily: 'Montserrat',
      fontSize: '26px',
    },
  });

  export default useStyles;