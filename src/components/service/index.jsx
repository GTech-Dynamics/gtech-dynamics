import { Box, Typography, Button} from '@mui/material';
import ServicesComponent from './services';
import Image from '../../static/images/service_bg.avif';
function Service() { 
    return (
      <>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${Image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: `cover`,
        height: "600px",
        paddingTop: '20px',
    }}>
        <Box sx={{width: '60%',textAlign: 'center', color:'white', fontWeight: 'bold', animation: 'fadeIn 1.5s forwards',}}>
        <Typography variant='h2'>We Provide Custom Solutions According To Specific Buisness Requirements</Typography>
        <Typography variant="p" sx={{color:'white', paddingTop:'3px', animation: 'fadeIn 1.5s forwards',}}>Explore our services and pick one according to your buisness needs.</Typography>
        </Box>
      </Box>
        <ServicesComponent/>
      </> 
    );
  }
  
  export default Service;