import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import './Footer.css';

// Working Links for GitHub and Instagram, the Privacy Policy and TOS are just to make it look more like a footer.
const Footer = () => {
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }} className='footer-parent'>
        <div className='footer-links'>
          <Link to={'https://github.com/raul-tiron'} target={'_blank'} rel={'noreferrer'}>
            <Typography sx={{ minWidth: 100 }}>GitHub</Typography>
          </Link>
          <Link to={'https://instagram.com/trnraul'} target={'_blank'} rel={'noreferrer'}>
            <Typography sx={{ minWidth: 100 }}>Instagram</Typography>
          </Link>
        </div>
        <div className='tosandpos'>
          <p>
            Privacy Policy
          </p>
          <p>
            TOS (Terms of Service)
          </p>
        </div>
      </Box>
    </React.Fragment>
  );
};

export default Footer;
