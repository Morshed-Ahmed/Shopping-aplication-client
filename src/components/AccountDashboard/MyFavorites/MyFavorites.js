import { Button, Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const MyFavorites = () => {
    return (
        <div>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Paper elevation={0} >
                            <Typography sx={{
                                fontFamily: "Mulish", marginBlockEnd: '20px',
                                fontSize: 'calc(.40rem + 1vw)', textAlign: 'left',/*  fontSize: '17px' */
                            }}>My Favorites</Typography>
                            <Paper style={{ padding: '20px' }} variant="outlined" >
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <Box>
                                            <img style={{ width: '200px', height: 'auto', marginRight: '30px' }} src="https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography variant="h5" component="div">
                                            Casual flat loafers
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">>
                                            ₦ 10,000
                                        </Typography>
                                    </Grid>

                                </Grid>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <Button style={{ backgroundColor: '#ED165F', color: 'black', /* width: '40%' */ }}>BUY NOW</Button>

                                    </Grid>
                                    <Grid item xs={6}>
                                        <Button>REMOVE</Button>
                                    </Grid>

                                </Grid>
                            </Paper>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper style={{ marginTop: '50px', padding: '20px' }} variant="outlined" >
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Box>
                                        <img style={{ width: '200px', height: 'auto', marginRight: '30px' }} src="https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                                    </Box>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="h5" component="div">
                                        Casual flat loafers
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">>
                                        ₦ 10,000
                                    </Typography>
                                </Grid>

                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Button style={{ backgroundColor: '#ED165F', color: 'black', /* width: '20%' */ }}>BUY NOW</Button>

                                </Grid>
                                <Grid item xs={6}>
                                    <Button>REMOVE</Button>
                                </Grid>

                            </Grid>
                        </Paper>
                    </Grid>

                </Grid>
            </Container>
        </div>
    );
};

export default MyFavorites;