import { useTheme } from '@emotion/react';
import { Card, CardContent, CardMedia, Container, Grid, IconButton, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import BannerImage from '../../image/Logo.png';
import Footer from '../Home/Footer/Footer';
import Header from '../Home/Header/Header';


const Cart = () => {

    const theme = useTheme();
    return (
        <div>
            <Header />
            <Container>

                <Typography sx={{
                    maxWidth: '400px', textAlign: 'left', fontWeight: "bold", fontFamily: "Mulish",
                    fontSize: 'calc(1rem + 1vw)',
                }}>Shopping Cart (2 item)</Typography>

                <Grid sx={{ padding: '10px', textAlign: 'left' }} container spacing={2}>
                    <Grid item md={7} sm={12}>
                        <p>ITEM DESCRIPTION</p>
                    </Grid>
                    <Grid item md={1} sm={12}>
                        <p>QUANTITY</p>
                    </Grid>
                    <Grid item md={2} sm={12}>
                        <p>UNIT PRICE</p>
                    </Grid>
                    <Grid item md={2} sm={12}>
                        <p>SUB TOTAL</p>
                    </Grid>
                </Grid>
                <Paper elevation={3} >
                    <Grid sx={{ padding: '10px', textAlign: 'left' }} container spacing={2}>
                        <Grid sx={{ display: 'flex' }} item md={7} sm={12}>
                            <Box>
                                <img style={{ width: '200px', height: 'auto', marginRight: '30px' }} src="https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                            </Box>
                            <Box>
                                <Typography variant="h5" component="div">
                                    Casual flat loafers
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    Size - EU: 36 US: 5.5
                                </Typography>
                                <Typography variant="body2">
                                    MOVE TO FAVORITES
                                </Typography>
                                <small>REMOVE</small>
                            </Box>

                        </Grid>
                        <Grid style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} item md={1} sm={12}>
                            <p>1</p>
                        </Grid>
                        <Grid style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} item md={2} sm={12}>
                            <p>$1000</p>
                        </Grid>
                        <Grid style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} item md={2} sm={12}>
                            <p>$1000</p>
                        </Grid>
                    </Grid>
                </Paper>
                <Paper sx={{ marginY: '30px' }} elevation={3} >
                    <Grid sx={{ padding: '10px', textAlign: 'left' }} container spacing={2}>
                        <Grid sx={{ display: 'flex' }} item md={7} sm={12}>
                            <Box>
                                <img style={{ width: '200px', height: 'auto', marginRight: '30px' }} src="https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                            </Box>
                            <Box>
                                <Typography variant="h5" component="div">
                                    Casual flat loafers
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    Size - EU: 36 US: 5.5
                                </Typography>
                                <Typography variant="body2">
                                    MOVE TO FAVORITES
                                </Typography>
                                <small>REMOVE</small>
                            </Box>

                        </Grid>
                        <Grid style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} item md={1} sm={12}>
                            <p>1</p>
                        </Grid>
                        <Grid style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} item md={2} sm={12}>
                            <p>$1000</p>
                        </Grid>
                        <Grid style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} item md={2} sm={12}>
                            <p>$1000</p>
                        </Grid>
                    </Grid>
                </Paper>
                <Grid sx={{ padding: '10px', textAlign: 'right' }} container spacing={2}>
                    <Grid item md={10} sm={12}>

                    </Grid>

                    <Grid style={{ display: 'flex' }} item md={1} sm={12}>
                        <p>TOTAL:</p>
                    </Grid>
                    <Grid style={{ display: 'flex' }} item md={1} sm={12}>
                        <p>20,000</p>
                    </Grid>
                </Grid>
                <Box sx={{ textAlign: 'right', padding: '5px' }}>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Delivery fee not included yet
                    </Typography>
                    <button style={{ padding: '10px' }}>CONTINUE SHOPPING</button>
                    <button style={{ padding: '10px', marginLeft: '10px' }}>PROCEED TO CHECKOUT</button>
                </Box>
            </Container>
            <Footer />
        </div>
    );
};

export default Cart;