import { Box, Stack, Grid, Typography } from '@mui/material';
import '../styles/AuthCard.css';
import React from 'react'
import Image from '../backgroundImage.png'
import LoginForm from '../components/LoginForm';
import { useTheme } from '@emotion/react';

const LoginPage = () => {

  return (
      <Grid container alignItems={'center'} justifyContent='space-between'>
        <Grid item xs={4} marginLeft="10%">
          <LoginForm />
        </Grid>
        <Grid item xs={6} sx={{ backgroundImage: `url(${Image})`, width: 'fill-available', height: '100vh', backgroundSize: 'cover'}}>
          <Typography variant="h4" color="initial">Hello World</Typography>
        </Grid>
      </Grid>
  )
}

export default LoginPage;
