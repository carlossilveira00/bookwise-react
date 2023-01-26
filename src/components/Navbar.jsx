import { AppBar, Button, Stack, Toolbar, Typography, IconButton, Box } from '@mui/material'
import logo from '../Rero-8.svg'


const Navbar = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
          <img src={logo} alt="" width={"100px"}/>
        <Stack direction="row" spacing={2} sx={{marginLeft: "auto"}}>
          <Button color='inherit' variant='outlined'>Login</Button>
          <Button color='inherit' variant='outlined'>Sign Up</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar;
