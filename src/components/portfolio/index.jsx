import NavBar from '../navbar';
import Footer from '../footer';
import { Box, Typography} from '@mui/material';
import Image from '../../static/images/service_bg.avif';
function Portfolio() { 
    return (
      <>
      <NavBar />
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${Image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: `cover`,
        height: "500px",
        paddingTop: '15px',
    }}>
        <Box sx={{width: '50%',textAlign: 'center', color:'white', fontWeight: 'bold', animation: 'fadeIn 1.5s forwards',}}>
        <Typography variant='h2'>Projects We Conquered & Delivered Unparalleled Success</Typography>
        </Box>
      </Box>
        <Footer />
      </> 
    );
  }
  
  export default Portfolio;