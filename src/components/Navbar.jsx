import { ThemeContext } from '@emotion/react';
import { AppBar, Button, Stack, Toolbar} from '@mui/material'
import logo from '../Rero-8.svg'
import { SearchBar } from './SearchBar';


const Navbar = () => {
  return (
    <AppBar position='static' color='default'>
      <Toolbar>
          <img src={logo} alt="" width={"100px"}/>
          <SearchBar placeholder={'Search for Title, Author or ISBN'} />
        <Stack direction="row" spacing={2} sx={{marginLeft: "auto"}}>
          <Button color='primary' variant='contained'>Login</Button>
          <Button color='secondary' variant='contained'>Sign Up</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar;
