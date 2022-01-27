/* import { Button, Checkbox, Container, Grid, Paper, Typography } from '@mui/material';
import { margin } from '@mui/system';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import Footer from '../../Home/Footer/Footer';
import Header from '../../Home/Header/Header';
import { useNavigate, useLocation, Link } from "react-router-dom";

const Login = () => {

    const [loginData, setLoginData] = useState({})

    

    const { register, handleSubmit, control, reset } = useForm({
        defaultValues: {
            checkbox: false,
        }
    });
    const onSubmit = data => {
        setLoginData(data)

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
                     textAlign: 'left', fontSize: '17px'
                    }}>SIGN IN</Typography>
                    <form style={{ }} onSubmit={handleSubmit(onSubmit)}>
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
                    
                    <Link to="/register">create account</Link>
                </Paper>
            </Container>

            <Footer />
        </div>
    );
};

export default Login; */


import { Alert, AlertTitle, Button, CircularProgress, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory, useNavigate, Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Footer from '../../Home/Footer/Footer';
import Header from '../../Home/Header/Header';


const Login = () => {




    const [loginData, setLoginData] = useState({})
    const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth()

    const location = useLocation()
    const navigate = useNavigate()

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }
    const handleLogInSubmit = e => {
        loginUser(loginData.email, loginData.password, location, navigate)
        e.preventDefault()
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, navigate)
    }

    return (

        <div>
            <Header></Header>
            <Container sx={{ /* marginBottom: 7, marginTop: 7 */ }}>
                <Paper sx={{ width: '40%', margin: 'auto', padding: '20px', marginY: '20px' }} elevation={0} >
                    <Typography variant="h4" sx={{
                        marginTop: '35px ', marginBottom: '20px', fontWeight: "bold", fontFamily: "Mulish",
                        textAlign: 'left', fontSize: '30px'
                    }}>Please Login</Typography>


                    <form onSubmit={handleLogInSubmit}>

                        <label style={{ fontSize: '20px' }} htmlFor="">Please Email</label> <br /> <br />
                        <TextField
                            sx={{ width: '100%' }}
                            id="outlined-basic"
                            label="Your Email"
                            name="email"
                            onBlur={handleOnChange}
                            variant="outlined" /> <br /> <br />

                        <label style={{ fontSize: '20px' }} htmlFor="">Your Password</label> <br /> <br />
                        <TextField
                            sx={{ width: '100%' }}
                            id="outlined-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onBlur={handleOnChange}
                            variant="outlined" /> <br /> <br />
                        <Button sx={{ width: '100%' }} variant="contained" type="submit">Login</Button> <br /> <br />
                        <Link style={{ texAlign: 'right', color: 'black', }} to="/register">
                            New User? Please Register
                        </Link> <br /> <br />

                        {isLoading && <CircularProgress color="inherit" />}
                        {user?.email && <Alert severity="success">
                            <AlertTitle>Success</AlertTitle>
                            User Login successful — <strong>check it out!</strong>
                        </Alert>}
                        {authError && <Alert severity="error">
                            <AlertTitle>Error</AlertTitle>
                            This is an error alert — <strong>check it out!</strong>
                        </Alert>}

                    </form>
                    {/* <Button onClick={handleGoogleSignIn} variant="contained">Google Sign In</Button> */}
                </Paper>
            </Container>
            <Footer></Footer>

        </div>
    );
};
export default Login;