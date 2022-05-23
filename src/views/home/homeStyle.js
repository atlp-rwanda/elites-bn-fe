import { makeStyles } from '@mui/styles';
import background from '../../Assets/Images/background.jpg';

const useStyles = makeStyles({
  home: {
    backgroundImage: `url(${background})`,
    height: '100vh',
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    scrollBehavior: 'none',
  },

  centerDiv: {
    textAlign: 'center',
    margin: 'auto',
    padding: '20vh',
  },

});

export default useStyles;
