import { Grid, Typography } from '@mui/material';
import React, { useState } from 'react'
import Image from '../backgroundImage.png'
import LoginForm from '../components/LoginForm';
import { useAuth } from '../context/Auth';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [userCredentials, setUserCredentials] = useState(null);
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSubmit = ( event ) => {
    event.preventDefault();

    axios.post('http://localhost:3000/users/sign_in', {user: userCredentials})
    .then(data => {
      auth.login({
        "user": data.data.status.data,
        "userToken" : data.headers.authorization
      });
      navigate('/', {replace: true})
    })
  };

  const handleChange = (event) => {
    event.preventDefault()
    setUserCredentials(Object.assign({}, userCredentials, {[event.target.name]: event.target.value}))
  };



  return (
      <Grid container alignItems={'center'} justifyContent='space-between'>
        <Grid item xs={4} marginLeft="10%">
          <LoginForm handleSubmit={handleSubmit} handleChange={handleChange}/>
        </Grid>
        <Grid item xs={6} sx={{ backgroundImage: `url(${Image})`, width: 'fill-available', height: '100vh', backgroundSize: 'cover'}}>
          <Typography variant="h4" color="initial">Hello World</Typography>
        </Grid>
      </Grid>
  )
}

export default LoginPage;
