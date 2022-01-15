import { CardMedia, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import BannerImage from '../../../image/Group 6.png';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Banner = () => {
    return (
        <div style={{ backgroundColor: '#ED165F', textAlign: 'center' }}>
            <Container >
                <Box >
                    <img style={{ width: '58%', height: 'auto' }} src={BannerImage} alt="" />
                </Box>
                <Box sx={{ marginTop: '1em', }}>
                    <Typography sx={{
                        fontFamily: "Mulish",
                        fontSize: 'calc(1rem + 1vw)',
                        /* fontSize: '180%', */
                        fontWeight: 600,
                        color: 'white',
                        marginBottom: '10px'

                    }}>
                        Explore our collection
                    </Typography>
                    <ExpandMoreIcon sx={{ color: 'white', marginBottom: '20px' }} />
                </Box>

            </Container >
        </div>
    );
};

export default Banner;