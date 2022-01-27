/* import { Alert, Checkbox, CircularProgress, Container, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Footer from '../../Home/Footer/Footer';
import Header from '../../Home/Header/Header';
import useAuth from '../../../Hooks/useAuth';


const Register = () => {

    const [loginData, setLoginData] = useState({})

    const { user, registerUser, isLoading, authError } = useAuth()

    const { register, handleSubmit, control, reset } = useForm({
        defaultValues: {
            checkbox: false,
        }
    });

    const onSubmit = data => {
        setLoginData(data)

        if (loginData.password !== loginData.password2) {
            alert('Your Password did not match')
            return;
        }

        registerUser(loginData.email, loginData.password);


        console.log(loginData)
    };
    return (
        <div>
            <Header />
            <Container>

                <Paper sx={{ width: '45%', margin: 'auto', padding: '20px', marginY: '20px' }} elevation={0} >
                    <Typography sx={{
                        marginTop: '35px ', marginBottom: '20px', fontWeight: "bold", fontFamily: "Mulish",
                     textAlign: 'left', fontSize: '17px'
                    }}>CREATE ACCOUNT</Typography>

                    {!isLoading && <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="firstName">First Name</label> <br />
                        <input style={{ width: '80%', padding: '10px', marginBottom: '20px', marginTop: '18px' }} {...register("firstName", { required: true, maxLength: 20 })} /> <br />

                       

                        <label htmlFor="Email">Email</label> <br />
                        <input style={{ width: '80%', padding: '10px', marginBottom: '20px', marginTop: '18px' }} type="email" {...register("email")} /> <br />

                        <label htmlFor="password">Create Password</label> <br /> <br />
                        <input style={{ width: '80%', padding: '10px', marginBottom: '20px' }} type="password" {...register("password")} /> <br />

                        <label htmlFor="password2">Conform Password</label> <br /> <br />
                        <input style={{ width: '80%', padding: '10px', marginBottom: '20px' }} type="password" {...register("password2")} /> <br />

                        <Controller
                            name="checkbox"
                            style={{ display: 'inline' }}
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => <Checkbox {...field} />}
                        /> <small style={{ width: '100px' }}>I want to receive Safari newsletters with the   best deals <br />
                            and offers</small> <br />

                        <input style={{ marginTop: "10px", width: '64%', padding: '10px', backgroundColor: '#ED165F', borderRadius: '5px', border: '1px solid #ED165F' }} type="submit" />

                    </form>}

                    {isLoading && <CircularProgress></CircularProgress>}
                    {
                        user?.email && <Alert>Account create successfully</Alert>
                    }
                    {
                        authError && <Alert>Account create not a successfully</Alert>
                    }
                </Paper>
            </Container>
            <Footer />
        </div>
    );
};

export default Register; */



import { Button, Container, Grid, TextField, Typography, CircularProgress, Alert, AlertTitle, Paper } from '@mui/material';
import React, { useState } from 'react';
import { Link, NavLink, useHistory, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Footer from '../../Home/Footer/Footer';
import Header from '../../Home/Header/Header';

/* import useFirebase from '../../../Hooks/useFirebase'; */

const Register = () => {
    const [loginData, setLoginData] = useState({})

    const navigate = useNavigate()

    const { user, registerUser, isLoading, authError } = useAuth();
    /* console.log(user) */
    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        /*  console.log(newLoginData) */
        setLoginData(newLoginData)
    }
    const handleLogInSubmit = (e) => {
        if (loginData.password !== loginData.password2) {
            alert('your password not match')
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, navigate)
        e.preventDefault()
    }
    return (
        <div>
            <Header></Header>
            <Container>
                <Paper sx={{ width: '40%', margin: 'auto', padding: '20px', marginY: '20px' }} elevation={0} >
                    <Typography variant="h5" sx={{
                        marginTop: '35px ', marginBottom: '20px', fontWeight: "bold", fontFamily: "Mulish",
                        textAlign: 'left', /* fontSize: '17px' */
                    }}>CREATE ACCOUNT</Typography>

                    {/*  <Typography variant="h5">Register</Typography> */}

                    {!isLoading && <form style={{ display: 'flex', flexDirection: 'column', /* justifyContent: 'center', *//*  alignItems: 'center' */ }} onSubmit={handleLogInSubmit}>

                        <label style={{ fontSize: '20px' }} htmlFor="">Full Name</label> <br />

                        <TextField
                            sx={{ width: '100%' }}
                            id="outlined-basic"
                            label="Your Name"
                            name="name"
                            onBlur={handleOnBlur}
                            variant="outlined" /> <br />

                        <label style={{ fontSize: '20px' }} htmlFor="">Please Email</label> <br />
                        <TextField

                            sx={{ width: '100%' }}
                            id="outlined-basic"
                            label="Your Email"
                            name="email"
                            type="email"
                            onBlur={handleOnBlur}
                            variant="outlined" /> <br />

                        <label style={{ fontSize: '20px' }} htmlFor="">Create Password</label> <br />

                        <TextField
                            sx={{ width: '100%' }}
                            id="outlined-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            variant="outlined" /> <br />

                        <label style={{ fontSize: '20px' }} htmlFor="">Conform Password</label> <br />

                        <TextField
                            sx={{ width: '100%' }}
                            id="outlined-basic"
                            label="ReType Your Password"
                            type="password"
                            name="password2"
                            onBlur={handleOnBlur}
                            variant="outlined" /> <br />

                        <Button sx={{ width: '100%' }} variant="contained" type="submit">Login</Button> <br /> <br />

                        <Link style={{ texAlign: 'right', color: 'black', }} to="/login">
                            Already Registered? Please Login
                        </Link>

                    </form>}


                    {isLoading && <CircularProgress color="inherit" />}

                    {user?.email && <Alert severity="success">
                        <AlertTitle>Success</AlertTitle>
                        User Login successful — <strong>check it out!</strong>
                    </Alert>}

                    {authError && <Alert severity="error">
                        <AlertTitle>Error</AlertTitle>
                        This is an error alert — <strong>check it out!</strong>
                    </Alert>}

                </Paper>
            </Container>
            <Footer />
        </div>
    );
};

export default Register;