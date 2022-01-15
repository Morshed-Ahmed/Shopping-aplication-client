import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { ScrollingCarousel } from '@trendyol-js/react-carousel';
import React from 'react';
import Footer from '../Home/Footer/Footer';
import Header from '../Home/Header/Header';
import ShoesProduct from './ShoesProduct/ShoesProduct';

const Shoes = () => {
    return (
        <div >
            <Header />
            <Container>
                <Typography sx={{
                    maxWidth: '400px', margin: 'auto', fontWeight: "bold", fontFamily: "Mulish",
                    fontSize: 'calc(1rem + 1vw)',
                }}>SHOES</Typography> <hr style={{ width: '50%' }} />
                <Typography sx={{
                    marginTop: '30px ', fontWeight: "bold", fontFamily: "Mulish",
                    /* fontSize: 'calc(0rem + 1vw)', */ textAlign: 'left', fontSize: '17px'
                }}>CATEGORY</Typography>

                <div style={{ width: '50%', marginTop: '15px', backgroundColor: '#ED165F', color: 'white', borderRadius: '10px' }}>
                    <ScrollingCarousel >
                        <Button sx={{ color: 'white', marginRight: '20px' }} variant="text">Booties</Button>
                        <Button sx={{ color: 'white', marginRight: '20px' }} variant="text">Flats</Button>
                        <Button sx={{ color: 'white', marginRight: '20px' }} variant="text">Boots</Button>
                        <Button sx={{ color: 'white', marginRight: '20px' }} variant="text">Sandals</Button>
                        <Button sx={{ color: 'white', marginRight: '20px' }} variant="text">Sneakers</Button>
                        <Button sx={{ color: 'white', marginRight: '20px' }} variant="text">Slides & Slippers</Button>
                        <Button sx={{ color: 'white', marginRight: '20px' }} variant="text">Heels</Button>
                        <Button sx={{ color: 'white', marginRight: '20px' }} variant="text">Wedges</Button>
                        <Button sx={{ color: 'white', marginRight: '20px' }} variant="text">Mules</Button>
                        <Button sx={{ color: 'white', marginRight: '20px' }} variant="text">Party shoes</Button>
                        <Button sx={{ color: 'white', marginRight: '20px' }} variant="text">Vegan shoes</Button>
                        <Button sx={{ color: 'white', marginRight: '20px' }} variant="text">Oxfords</Button>
                    </ScrollingCarousel>
                </div>
                <Box>
                    <ShoesProduct></ShoesProduct>
                </Box>
            </Container>
            <Footer />
        </div>
    );
};

export default Shoes;