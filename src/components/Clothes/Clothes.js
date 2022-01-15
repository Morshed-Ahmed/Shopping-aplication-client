import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { ScrollingCarousel } from '@trendyol-js/react-carousel';
import React from 'react';
import Footer from '../Home/Footer/Footer';
import Header from '../Home/Header/Header';
import ClothesProduct from './ClothesProduct/ClothesProduct';

const Clothes = () => {
    return (
        <div >
            <Header />
            <Container>
                <Typography sx={{
                    maxWidth: '400px', margin: 'auto', fontWeight: "bold", fontFamily: "Mulish",
                    fontSize: 'calc(1rem + 1vw)',
                }}>CLOTHES</Typography> <hr style={{ width: '50%' }} />
                <Typography sx={{
                    marginTop: '30px ', fontWeight: "bold", fontFamily: "Mulish",
                    /* fontSize: 'calc(0rem + 1vw)', */ textAlign: 'left', fontSize: '17px'
                }}>CATEGORY</Typography>

                <div style={{ width: '50%', marginTop: '15px', backgroundColor: '#ED165F', color: 'white', borderRadius: '10px' }}>
                    <ScrollingCarousel >
                        <Button sx={{ color: 'white', marginRight: '20px' }} variant="text">Denim</Button>
                        <Button sx={{ color: 'white', marginRight: '20px' }} variant="text">Jeans</Button>
                        <Button sx={{ color: 'white', marginRight: '20px' }} variant="text">Jumpsuits</Button>
                        <Button sx={{ color: 'white', marginRight: '20px' }} variant="text">Jackets and coats</Button>
                        <Button sx={{ color: 'white', marginRight: '20px' }} variant="text">Pants</Button>
                        <Button sx={{ color: 'white', marginRight: '20px' }} variant="text">Shorts</Button>
                        <Button sx={{ color: 'white', marginRight: '20px' }} variant="text">Skirts</Button>
                        <Button sx={{ color: 'white', marginRight: '20px' }} variant="text">Loungerie & underwear</Button>
                        <Button sx={{ color: 'white', marginRight: '20px' }} variant="text">Leather</Button>
                        <Button sx={{ color: 'white', marginRight: '20px' }} variant="text">Sweaters & knits</Button>
                    </ScrollingCarousel>
                </div>
                <Box>
                    <ClothesProduct></ClothesProduct>
                </Box>
            </Container>
            <Footer />
        </div>
    );
};

export default Clothes;