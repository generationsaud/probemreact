import { Grid, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Footer.css'
import { useLocation } from 'react-router-dom';

function Footer() {

    const location = useLocation();
        const [showFooter, setShowFooter] = useState(true);
        
        useEffect(() => {
          if(location.pathname === '/navmob'){
            setShowFooter(false);

          }else{
            setShowFooter(true);
          }
        }, [location]);

    
    return (
        <>
            {showFooter && (
            <Grid container direction="row" justifyContent="center" alignItems="center" className='foot'>
                <Grid alignItems="center" item xs={12}>
                    <Box className='box1'>
                        <Box className='siga'  display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom className='textos'>Siga-nos nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.facebook.com" target="_blank">
                                <FacebookIcon className='redes' />
                            </a>
                            <a href="https://www.instagram.com" target="_blank">
                                <InstagramIcon className='redes' />
                            </a>
                            <a href="https://br.linkedin.com" target="_blank">
                                <LinkedInIcon className='redes' />
                            </a>
                            
                        </Box>
                        <Typography variant="subtitle2" align="center" gutterBottom className='textos' >© 2022 Copyright:</Typography>
                    </Box>
                </Grid>
            </Grid>
            )}
        
        </>
    );
}

export default Footer;