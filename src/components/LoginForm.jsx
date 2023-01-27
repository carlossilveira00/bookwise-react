import React from 'react'
import { FormGroup, Stack, TextField, Typography, FormControlLabel, Checkbox, Button } from '@mui/material';
import { Box } from '@mui/system';

const LoginForm = ({ handleChange, handleSubmit }) => {
  return (
    <>
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
          <Typography variant="body1" color="initial" align='left'>Don't have an account?</Typography>
          <Button href='#' color='primary' size='large'>Sign Up</Button>
        </Stack>
      </form>
    </>
  )
}


export default LoginForm;
