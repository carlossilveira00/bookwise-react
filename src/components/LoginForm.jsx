import React from 'react'
import { FormGroup, Stack, TextField, Typography, FormControlLabel, Checkbox, Button, Box, Card } from '@mui/material';
import '../styles/AuthCard.css';

const LoginForm = ({ handleChange, handleSubmit }) => {
  return (
    <Card sx={{ boxShadow: 24 }}>
      <form action="" onSubmit={handleSubmit} style={{padding: '20px'}}>
        <Typography color='inherit' variant="h4" component='h4' align='left'>Login</Typography>
        <Typography variant="body2" component='p' align='left' sx={{marginBottom: '20px'}}>Hi, Welcome back 👋</Typography>
        <Stack spacing={4}>
          <TextField id="email" name='email' label="Email Address" placeholder='example@example.com' variant="outlined" fullWidth onChange={handleChange}/>
          <TextField id="password" name='password' label="Password" variant="outlined" type="password" fullWidth onChange={handleChange}/>
          <FormGroup>
            <FormControlLabel label="Remember me?" control={<Checkbox />} />
          </FormGroup>
        </Stack>
        <Button color='primary' variant='contained' size='large' fullWidth type='submit'>Login</Button>
        <Stack direction="row" alignItems='center'>
          <Typography color='inherit' variant="body1" align='left'>Don't have an account?</Typography>
          <Button href='#' color='primary' size='large'>Sign Up</Button>
        </Stack>
      </form>
    </Card>
  )
}


export default LoginForm;
