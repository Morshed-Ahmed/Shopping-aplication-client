import { Button, Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const MyOrders = () => {
    return (
        <div>
            <Container>
                <Paper elevation={0} >
                    <Typography sx={{
                        fontFamily: "Mulish", marginBlockEnd: '20px',
                        fontSize: 'calc(.40rem + 1vw)', textAlign: 'left',/*  fontSize: '17px' */
                    }}>My Order</Typography>
                    <Paper sx={{ padding: '20px' }} variant="outlined">
                        <Grid container spacing={2}>

                            <Grid item xs={6}>

                                <Box sx={{ display: 'flex' }}>
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
                                            ₦ 10,000
                                        </Typography>
                                        <Typography variant="body2">
                                            Qty: 1
                                        </Typography>
                                        <Typography variant="body2">
                                            On 20/07/2020
                                        </Typography>

                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={3}>
                                <Box>
                                    <Typography variant="h6" component="div">
                                        Payment details
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        Item’s total - ₦ 10,000
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        Delivery fee - ₦ 2,000
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        TOTAL - ₦ 12,000
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={3}>

                                <Box>
                                    <Typography variant="h6" component="div">
                                        Delivery method
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        Door delivery
                                    </Typography>
                                    <Typography variant="h6" component="div">
                                        Shipping address
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        Ayokunle Oriolowo
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        4, Barnawa Close, Barnawa Kaduna.
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Paper>
                    <Button style={{ padding: '10px 60px', backgroundColor: '#ED165F', color: 'black', marginTop: '15px', width: '25%' }}>ORDER AGAIN</Button>
                </Paper>
            </Container>
        </div>
    );
};

export default MyOrders;