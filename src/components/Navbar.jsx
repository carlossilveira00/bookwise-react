import { AppBar, Button, Menu, Stack, ToggleButton, Toolbar, MenuItem} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../Rero-8.svg';
import { SearchBar } from './SearchBar';
import { useAuth } from '../context/Auth';
import { useState } from 'react';


const Navbar = ({colorMode, setColorMode}) => {
  const auth = useAuth();
  let menu;
  const handleColorModeChange = () => {
    colorMode === 'light' ? setColorMode('dark') : setColorMode('light')
  };

  // Conditional Render the menu for the user depending if the user exists or not.
  if ( auth.user == null) {
    menu = (
    <>
      <Button href="login" color='primary' variant='contained'>Login</Button>
      <Button href="signup" color='secondary' variant='contained'>Sign Up</Button>
    </>
    )
  } else {
    menu = (
      <>
        <Button variant="text" color="primary">
          <MenuIcon></MenuIcon>
        </Button>
      </>
    )
  }

  return (
    <AppBar position='static' color='default'>
      <Toolbar>
          <img src={logo} alt="" width={"100px"}/>
          <SearchBar placeholder={'Search for Title, Author or ISBN'} />
          <ToggleButton value={colorMode} onChange={handleColorModeChange}>
            <Brightness4Icon></Brightness4Icon>
          </ToggleButton>
        <Stack direction="row" spacing={2} sx={{marginLeft: "auto"}}>
          {menu}
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar;
