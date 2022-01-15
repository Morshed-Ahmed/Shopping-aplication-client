import React from 'react';
import Grid from '@mui/material/Grid';
import { Checkbox, Container, Paper, TextareaAutosize, Typography } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { Box } from '@mui/system';

const Checkout = () => {

  const { register, handleSubmit, control, reset } = useForm({
    defaultValues: {
      checkbox: false,
    }
  });
  const onSubmit = data => {
    console.log(data)
  };
  return (
    <Container>

      <Grid container spacing={2}>

        <Grid sx={{ /* border: '1px solid black', */ }} item xs={6} md={4}>
          <Paper sx={{ padding: '10px', paddingY: '35px', textAlign: 'left' }} >
            <Typography sx={{
              maxWidth: '400px', textAlign: 'left', fontWeight: "800", fontFamily: "Mulish",
              fontSize: 'calc(.40rem + 1vw)', marginBlockEnd: '30px'
            }}>Shipping Address</Typography>


            <form style={{ textAlign: 'left', }} onSubmit={handleSubmit(onSubmit)}>

              <label htmlFor="Email">Email</label> <br />
              <input style={{ width: '60%', padding: '10px', marginBottom: '20px', marginTop: '18px' }} type="email" {...register("email")} /> <br />

              <label htmlFor="fullName">Full name</label> <br />
              <input style={{ width: '60%', padding: '10px', marginBottom: '20px', marginTop: '18px' }} {...register("fullName", { required: true, maxLength: 20 })} /> <br />




              <label htmlFor="password">Address</label> <br /> <br />
              <TextareaAutosize
                aria-label="empty textarea"
                placeholder="Empty"
                style={{ width: '65%', height: '159px' }}
              /> <br /> <br />


              <label htmlFor="number">Phone number</label> <br /> <br />
              <input style={{ width: '60%', padding: '10px', marginBottom: '20px' }} type="number" {...register("number")} /> <br />

              <Controller
                name="checkbox"
                style={{ display: 'inline' }}
                control={control}
                rules={{ required: true }}
                render={({ field }) => <Checkbox {...field} />}
              /> <small style={{ width: '100px', textAlign: 'left' }}>Set default shipping address</small> <br />



            </form>
          </Paper>
        </Grid>

        <Grid sx={{ /* border: '1px solid black' */ }} item xs={6} md={4}>



          <Grid sx={{ marginBlockEnd: '10px', }} item xs={12} md={12}>
            <Paper sx={{ padding: '10px', paddingY: '35px', textAlign: 'left' }} >
              <Typography sx={{
                maxWidth: '400px', textAlign: 'left', fontWeight: "800", fontFamily: "Mulish", marginBottom: '5px',
                fontSize: 'calc(.40rem + 1vw)',
              }}>Delivery method</Typography>
              <small>₦ 2,000</small>
              <small style={{ marginRight: '20px', marginLeft: '10px' }}>Delivery fee</small>
              <small>Door delivery</small>
            </Paper>
          </Grid>
          <Grid item xs={12} md={12}>
            <Paper sx={{ padding: '10px', textAlign: 'left' }} >
              <Typography sx={{
                maxWidth: '400px', textAlign: 'left', fontWeight: "800", fontFamily: "Mulish",
                fontSize: 'calc(.40rem + 1vw)',
              }}>Payment Methods</Typography>
              <p>Pay with card </p>
              <small>(Get 5% off total price and money
                back guarantee)</small>
              <p>You will be redirected to Paystack payment gateway</p>

              <p>Pay on delivery</p>
              <ul>
                <li><small>Kindly note that we will only accept POS payment option on delivery</small></li>
                <li><small>You have to make payment before opening package</small></li>
                <li><small>Once the seal is broken, item can only be returned if damaged or defective</small> </li>
              </ul>
            </Paper>

          </Grid>

        </Grid>
        <Grid sx={{ /* border: '1px solid black' */ }} item xs={6} md={4}>
          <Paper sx={{ padding: '10px', paddingY: '35px', textAlign: 'left' }} >
            <Typography sx={{
              maxWidth: '400px', textAlign: 'center', fontWeight: "800", fontFamily: "Mulish",
              fontSize: 'calc(.40rem + 1vw)',
            }}>ORDER SUMMARY</Typography>

            <Grid sx={{ display: 'flex', /* justifyContent: 'center', */ alignItems: 'center', marginTop: '15px ' }} item md={12} sm={12}>
              <Box >
                <img style={{ width: '80px', height: 'auto', /* marginRight: '30px' */ }} src="https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
              </Box>
              <Box sx={{ marginLeft: '25px' }}>
                <Typography variant="" component="div">
                  Casual flat loafers
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Size - EU: 36 US: 5.5
                </Typography>
                <Typography variant="body2">
                  ₦ 10,000
                </Typography>

              </Box>

            </Grid>
            <Grid sx={{ display: 'flex', /* justifyContent: 'center', */ alignItems: 'center', marginTop: '15px ' }} item md={12} sm={12}>
              <Box >
                <img style={{ width: '80px', height: 'auto', /* marginRight: '30px' */ }} src="https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
              </Box>
              <Box sx={{ marginLeft: '25px' }}>
                <Typography variant="" component="div">
                  Casual flat loafers
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Size - EU: 36 US: 5.5
                </Typography>
                <Typography variant="body2">
                  ₦ 10,000
                </Typography>

              </Box>

            </Grid>
          </Paper>

          <Paper sx={{ padding: '10px', paddingY: '35px', textAlign: 'left', marginY: '20px' }} >
            <Grid sx={{ padding: '10px', }} container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="" component="div">
                  Cart sub-total
                </Typography>
              </Grid>
              <Grid sx={{ textAlign: 'right' }} item xs={6}>
                <Typography variant="" component="div">
                  ₦ 20,000
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="" component="div">
                  Card discount
                </Typography>
              </Grid>
              <Grid sx={{ textAlign: 'right' }} item xs={6}>
                <Typography variant="" component="div">
                  - ₦ 1,000
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="" component="div">
                  Delivery fee
                </Typography>
              </Grid>
              <Grid sx={{ textAlign: 'right' }} item xs={6}>
                <Typography variant="" component="div">
                  ₦ 2,000
                </Typography>
              </Grid>
            </Grid>
          </Paper>

          <Paper sx={{ padding: '10px', paddingY: '35px', textAlign: 'left', }} >
            <Grid sx={{ padding: '10px', }} container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="" component="div">
                  TOTAL
                </Typography>
              </Grid>
              <Grid sx={{ textAlign: 'right' }} item xs={6}>
                <Typography variant="" component="div">
                  ₦ 21,000
                </Typography>
              </Grid>
            </Grid>
          </Paper>

          <Grid sx={{/*  padding: '15px', */ marginY: '20px' }} container spacing={2}>
            <Grid sx={{ textAlign: 'left' }} item xs={6}>
              <Typography variant="" component="div">
                Is this a gift?
              </Typography>
            </Grid>
            <Grid sx={{ textAlign: 'right' }} item xs={6}>
              <Typography variant="" component="div">
                <button>Yes</button>
                <button style={{ marginLeft: '15px' }}>No</button>
              </Typography>
            </Grid>
          </Grid>

          <button style={{ width: '100%', padding: '10px' }}>PLACE ORDER</button>
        </Grid>
      </Grid>
    </Container>

  );
};

export default Checkout;