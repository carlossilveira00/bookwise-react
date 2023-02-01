import { AppBar, Button, Menu, Stack, ToggleButton, Toolbar, MenuItem, Link} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/Auth';
import { SearchBar } from './SearchBar';
import logo from '../Rero-8.svg';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';

const Navbar = ({colorMode, setColorMode}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const auth = useAuth();
  const navigate = useNavigate();
  let menu;

  // Handles Color Mode Change.
  const handleColorModeChange = () => {
    colorMode === 'light' ? setColorMode('dark') : setColorMode('light')
  };

  // Opens Menu
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Closes Menu
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Handle the logout of the user when clicked on the Menu.
  const handleLogout = () => {
    auth.logout();
    navigate('/', {replace: true})
  };


  // Conditional Render the menu for the user depending if the user exists or not.
  if ( auth.user == 'null') {
    menu = (
    <>
      <Button href="login" color='primary' variant='contained'>Login</Button>
      <Button href="signup" color='secondary' variant='contained'>Sign Up</Button>
    </>
    )
  } else {
    menu = (
      <>
        <Button
          variant="text" color="primary" id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleOpen}
        >
          <MenuIcon></MenuIcon>
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>
            <Link href='create-book' underline='none' color='inherit'>Add Book</Link>
          </MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
          <MenuItem onClick={handleClose}>
            <ToggleButton value={colorMode} onChange={handleColorModeChange}>
              <Brightness4Icon></Brightness4Icon>
            </ToggleButton>
          </MenuItem>
        </Menu>
      </>
    )
  };

  return (
    <AppBar position='static' color='default'>
      <Toolbar>
        <img src={logo} alt="" width={"100px"}/>
        <SearchBar placeholder={'Search for Title, Author or ISBN'} />
        <Stack direction="row" spacing={2} sx={{marginLeft: "auto"}}>
          {menu}
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar;
