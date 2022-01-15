import { Button, Container, Paper, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const AddressBook = () => {
    return (
        <div>
            <Container>
                <Paper elevation={0} >
                    <Typography sx={{
                        fontFamily: "Mulish", marginBlockEnd: '20px',
                        fontSize: 'calc(.40rem + 1vw)', textAlign: 'left',/*  fontSize: '17px' */
                    }}>Address Book</Typography>
                    <Paper sx={{ padding: '30px' }} variant="outlined" >
                        <Typography sx={{
                            fontFamily: "Mulish", marginBlockEnd: '20px',
                            fontSize: 'calc(.40rem + 1vw)', textAlign: 'left',/*  fontSize: '17px' */
                        }}>Default Shipping Address</Typography>
                        <p>Ayokunle Oriolowo</p>
                        <p>No 4 Barnawa Close, Barnawa, Kaduna</p>
                        <p>Kaduna, Kaduna</p>
                        <p>Nigeria</p>
                        <p>+234 708 568 5878</p>
                        <div style={{ display: 'flex', justifyContent: "right" }}>
                            <Link to=''>Edit</Link>
                            <Link style={{ marginLeft: '30px' }} to=''>Delete</Link>
                        </div>
                    </Paper>
                    <Button style={{ width: '25%', backgroundColor: '#ED165F', color: 'black', marginTop: '15px', width: '25%' }}>ADD NEW ADDRESS</Button>
                </Paper>
            </Container>
        </div>
    );
};

export default AddressBook;