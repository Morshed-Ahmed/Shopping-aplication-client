import { Box, Button, Checkbox, Container, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material';
import React from 'react';
import Footer from '../Home/Footer/Footer';
import Header from '../Home/Header/Header';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Controller, useForm } from 'react-hook-form';
import { Outlet } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


const AccountDashboard = () => {

    const { user, logOut } = useAuth();
    /* const { register, handleSubmit, control, reset } = useForm({
        defaultValues: {
            checkbox: false,
        }
    });
    const onSubmit = data => {
        console.log(data)
    }; */
    return (
        <div>
            <Header />
            <Container sx={{ marginY: '80px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <Paper sx={{ padding: '20px' }} variant="outlined" >
                            <Typography sx={{
                                fontWeight: "bold", fontFamily: "Mulish",
                                fontSize: 'calc(0rem + 1vw)', textAlign: 'center',/*  fontSize: '17px' */
                            }}>ACCOUNT DASHBOARD</Typography>


                            <br />


                            <List
                                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                                aria-label="contacts"
                            >

                                <Link style={{ color: 'black', textDecoration: 'none' }} to='accountInformation'>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <Link style={{ color: 'black' }} to='accountInformation'> <PersonIcon sx={{ marginLeft: '10px' }} /></Link>
                                            </ListItemIcon>
                                            <ListItemText primary="Account Information" />
                                        </ListItemButton>
                                    </ListItem>
                                </Link>

                                <Link style={{ color: 'black', textDecoration: 'none' }} to='addressBook'>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <Link style={{ color: 'black' }} to='addressBook'> <ImportContactsIcon sx={{ marginLeft: '10px' }} /></Link>
                                            </ListItemIcon>
                                            <ListItemText primary="Address Book" />
                                        </ListItemButton>
                                    </ListItem>
                                </Link>

                                <Link style={{ color: 'black', textDecoration: 'none' }} to='myOrder'>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <Link style={{ color: 'black' }} to='myOrder'> <ShoppingBagIcon sx={{ marginLeft: '10px' }} /></Link>
                                            </ListItemIcon>
                                            <ListItemText primary="My Orders" />
                                        </ListItemButton>
                                    </ListItem>
                                </Link>
                                <Link style={{ color: 'black', textDecoration: 'none' }} to='myFavorites'>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <Link style={{ color: 'black' }} to='myFavorites'> <FavoriteIcon sx={{ marginLeft: '10px' }} /></Link>
                                            </ListItemIcon>
                                            <ListItemText primary="My Favorites" />
                                        </ListItemButton>
                                    </ListItem>
                                </Link>

                                <Box sx={{ textAlign: 'center' }}>
                                    {
                                        user.email ?
                                            <Button onClick={logOut}>logout</Button> :
                                            <Link to="/login"><Button >login</Button></Link>
                                    }

                                </Box>

                            </List>
                        </Paper>
                    </Grid>
                    <Grid item xs={9}>

                        <Outlet />

                    </Grid>

                </Grid>

            </Container>

            <Footer />

        </div>

    );
};

export default AccountDashboard;