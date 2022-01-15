import { Checkbox, Container, Grid, Paper, Typography } from '@mui/material';
import { margin } from '@mui/system';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import Footer from '../../Home/Footer/Footer';
import Header from '../../Home/Header/Header';
import Register from '../Register/Register';

const Login = () => {

    const { register, handleSubmit, control, reset } = useForm({
        defaultValues: {
            checkbox: false,
        }
    });
    const onSubmit = data => {
        console.log(data)
    };


    return (
        <div>
            <Header />

            <Container sx={{ padding: '15px' }}>
                <Paper sx={{ width: '45%', margin: 'auto', padding: '20px', marginY: '20px' }} elevation={0}>
                    <Typography sx={{
                        maxWidth: '400px', fontWeight: "bold", fontFamily: "Mulish",
                        fontSize: 'calc(1rem + 1vw)',
                    }}>Hello there</Typography>
                    <p>Please sign in or create account to continue</p>




                    <Typography sx={{
                        marginTop: '35px ', marginBottom: '20px', fontWeight: "bold", fontFamily: "Mulish",
                    /* fontSize: 'calc(0rem + 1vw)', */ textAlign: 'left', fontSize: '17px'
                    }}>SIGN IN</Typography>
                    <form style={{ /* display: 'flex', justifyContent: 'center' */ }} onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="Email">Email</label> <br />
                        <input style={{ width: '80%', padding: '10px', marginBottom: '20px', marginTop: '18px' }} type="email" {...register("email")} /> <br />
                        <label htmlFor="password">Password</label> <br /> <br />
                        <input style={{ width: '80%', padding: '10px', marginBottom: '20px' }} type="password" {...register("password")} /> <br />

                        <Controller
                            name="checkbox"
                            style={{ display: 'inline' }}
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => <Checkbox {...field} />}
                        /> <small>Remeber my details</small> <br />
                        <input style={{ width: '64%', padding: '10px', backgroundColor: '#ED165F', borderRadius: '5px', border: '1px solid #ED165F' }} type="submit" />

                    </form>


                </Paper>
            </Container>

            <Footer />
        </div>
    );
};

export default Login;