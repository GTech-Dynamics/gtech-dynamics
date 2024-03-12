import { Box, Typography} from '@mui/material';
import PortfolioComponent from './PortfolioComponent';
import '../../style/portfolio.css';
function Portfolio() { 
    return (
      <>
        <Box className="parent">
          <Box className="child1">
            <Typography variant='h2'>Projects We Conquered & Delivered Unparalleled Success</Typography>
          </Box>
        </Box>
        <PortfolioComponent />
      </> 
    );
  }
  
  export default Portfolio;