import { FormGroup, Stack, TextField, Typography, FormControlLabel, Checkbox, Button, Card } from '@mui/material';

const SignUpForm = ({ handleChange, handleSubmit }) => {
  return (
    <Card sx={{ boxShadow: 24 }}>
      <form action="" style={{padding: '20px'}} onSubmit={handleSubmit}>
        <Typography color='inherit' variant="h4" component='h4' align='left'>Sign Up</Typography>
        <Typography variant="body2" component='p' align='left' sx={{marginBottom: '20px'}}>Welcome to BookWise! 👋</Typography>
        <Stack spacing={4}>
          <TextField id="email" name='email' label="Email Address" placeholder='example@example.com' variant="outlined" fullWidth onChange={handleChange}/>
          <TextField id="password" name='password' label="Password" variant="outlined" type="password" fullWidth onChange={handleChange}/>
          <TextField id="password_confirmation" name='password_confirmation' label="Password Confirmation" variant="outlined" type="password" fullWidth onChange={handleChange}/>
          <FormGroup>
            <FormControlLabel label="Remember me?" control={<Checkbox />} />
          </FormGroup>
        </Stack>
        <Button color='primary' variant='contained' size='large' fullWidth type='submit'>Sign Up</Button>
        <Stack direction="row" alignItems='center'>
          <Typography color='inherit' variant="body1" align='left'>Already have an account?</Typography>
          <Button href='#' color='primary' size='large'>Log In</Button>
        </Stack>
      </form>
    </Card>
  )
}


export default SignUpForm;
