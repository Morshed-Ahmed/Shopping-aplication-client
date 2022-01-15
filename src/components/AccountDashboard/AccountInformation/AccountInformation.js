import { Checkbox, Container, Paper, Typography } from '@mui/material';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const AccountInformation = () => {

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
            <Container>
                <Paper sx={{ padding: '10px' }} elevation={0} >
                    <Typography sx={{
                        fontFamily: "Mulish", marginBlockEnd: '20px',
                        fontSize: 'calc(.40rem + 1vw)', textAlign: 'left',/*  fontSize: '17px' */
                    }}>User Information</Typography>
                    <Paper variant="outlined" >
                        <form style={{ /* display: 'flex', justifyContent: 'center' */ textAlign: 'left', padding: '20px' }} onSubmit={handleSubmit(onSubmit)}>
                            <label htmlFor="firstName">First Name</label> <br />
                            <input style={{ width: '40%', padding: '10px', marginBottom: '20px', marginTop: '18px' }} {...register("firstName", { required: true, maxLength: 20 })} /> <br />

                            <label htmlFor="lastName">Last Name</label> <br />
                            <input style={{ width: '40%', padding: '10px', marginBottom: '20px', marginTop: '18px' }} {...register("lastName", { pattern: /^[A-Za-z]+$/i })} /> <br />

                            <label htmlFor="Email">Email</label> <br />
                            <input style={{ width: '40%', padding: '10px', marginBottom: '20px', marginTop: '18px' }} type="email" {...register("email")} /> <br />

                            <label htmlFor="gender">Gender</label> <br /> <br />
                            <input style={{ width: '40%', padding: '10px', marginBottom: '20px' }} type="gender" {...register("gender")} /> <br />

                            <label htmlFor="birthDay">Date of Birth</label> <br /> <br />
                            <input style={{ width: '40%', padding: '10px', marginBottom: '20px' }} type="date" {...register("date")} /> <br />

                            <Link to=''><p>Change password</p></Link>

                            <Controller
                                name="checkbox"
                                style={{ display: 'inline' }}
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => <Checkbox {...field} />}
                            /> <small style={{ width: '100px' }}>Newsletter subsciption</small> <br />



                        </form>
                    </Paper>
                    <input style={{ marginTop: "10px", padding: '13px 90px', textAlign: 'left', backgroundColor: '#ED165F', borderRadius: '8px', border: '1px solid #ED165F', }} type="submit" />

                </Paper>
            </Container>
        </div>
    );
};

export default AccountInformation;