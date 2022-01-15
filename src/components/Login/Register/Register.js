import { Checkbox, Container, Paper, Typography } from '@mui/material';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import Footer from '../../Home/Footer/Footer';
import Header from '../../Home/Header/Header';

const Register = () => {

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
            <Container>

                <Paper sx={{ width: '45%', margin: 'auto', padding: '20px', marginY: '20px' }} elevation={0} >
                    <Typography sx={{
                        marginTop: '35px ', marginBottom: '20px', fontWeight: "bold", fontFamily: "Mulish",
                    /* fontSize: 'calc(0rem + 1vw)', */ textAlign: 'left', fontSize: '17px'
                    }}>CREATE ACCOUNT</Typography>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="firstName">First Name</label> <br />
                        <input style={{ width: '80%', padding: '10px', marginBottom: '20px', marginTop: '18px' }} {...register("firstName", { required: true, maxLength: 20 })} /> <br />

                        <label htmlFor="lastName">Last Name</label> <br />
                        <input style={{ width: '80%', padding: '10px', marginBottom: '20px', marginTop: '18px' }} {...register("lastName", { pattern: /^[A-Za-z]+$/i })} /> <br />

                        <label htmlFor="Email">Email</label> <br />
                        <input style={{ width: '80%', padding: '10px', marginBottom: '20px', marginTop: '18px' }} type="email" {...register("email")} /> <br />

                        <label htmlFor="password">Create Password</label> <br /> <br />
                        <input style={{ width: '80%', padding: '10px', marginBottom: '20px' }} type="password" {...register("password")} /> <br />

                        <label htmlFor="password2">Conform Password</label> <br /> <br />
                        <input style={{ width: '80%', padding: '10px', marginBottom: '20px' }} type="password" {...register("password")} /> <br />

                        <Controller
                            name="checkbox"
                            style={{ display: 'inline' }}
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => <Checkbox {...field} />}
                        /> <small style={{ width: '100px' }}>I want to receive Safari newsletters with the   best deals <br />
                            and offers</small> <br />

                        <input style={{ marginTop: "10px", width: '64%', padding: '10px', backgroundColor: '#ED165F', borderRadius: '5px', border: '1px solid #ED165F' }} type="submit" />

                    </form>
                </Paper>
            </Container>
            <Footer />
        </div>
    );
};

export default Register;