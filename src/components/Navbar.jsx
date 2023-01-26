import { AppBar, Button, Stack, Toolbar} from '@mui/material'
import logo from '../Rero-8.svg'
import { SearchBar } from './SearchBar';


const Navbar = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
          <img src={logo} alt="" width={"100px"}/>
          <SearchBar placeholder={'Search for Title, Author or ISBN'} />
        <Stack direction="row" spacing={2} sx={{marginLeft: "auto"}}>
          <Button color='inherit' variant='outlined'>Login</Button>
          <Button color='inherit' variant='outlined'>Sign Up</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar;
