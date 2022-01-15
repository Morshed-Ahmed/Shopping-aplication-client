import { Grid, Link } from '@mui/material';
import React from 'react';
import logo from '../../../image/Logo.png';

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#F5F5F5', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Grid container spacing={2}>
                <Grid item xs={6} md={3}>
                    <img src={logo} alt="" />
                </Grid>
                <Grid item xs={6} md={2}>
                    <Link sx={{ color: 'black', textDecoration: 'none', }} >About Us</Link> <br />
                    <Link sx={{ color: 'black', textDecoration: 'none', }}>Contact</Link> <br />
                    <Link sx={{ color: 'black', textDecoration: 'none' }}>Terms & Conditions</Link>
                </Grid>
                <Grid item xs={6} md={2}>
                    <Link sx={{ color: 'black', textDecoration: 'none' }}>Facebook</Link> <br />
                    <Link sx={{ color: 'black', textDecoration: 'none' }}>Twitter</Link> <br />
                    <Link sx={{ color: 'black', textDecoration: 'none' }}>instagram</Link>
                </Grid>
                <Grid item xs={6} md={2}>
                    <small>Subscribe to our newsletter</small>

                </Grid>
                <Grid item xs={6} md={3}>
                    <small>Bagbari RD,Madla,Bogura.</small> <br />
                    <small>+72837849475</small><br />
                    <small>morshed50r@gmail.com</small>
                </Grid>
            </Grid>
        </div>
    );
};

export default Footer;