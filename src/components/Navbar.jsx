import { AppBar, Button, Stack, ToggleButton, Toolbar} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import logo from '../Rero-8.svg';
import { SearchBar } from './SearchBar';


const Navbar = ({colorMode, setColorMode}) => {
  const handleColorModeChange = () => {
    colorMode === 'light' ? setColorMode('dark') : setColorMode('light')
  };

  return (
    <AppBar position='static' color='default'>
      <Toolbar>
          <img src={logo} alt="" width={"100px"}/>
          <SearchBar placeholder={'Search for Title, Author or ISBN'} />
          <ToggleButton value={colorMode} onChange={handleColorModeChange}>
            <Brightness4Icon></Brightness4Icon>
          </ToggleButton>
        <Stack direction="row" spacing={2} sx={{marginLeft: "auto"}}>
          <Button color='primary' variant='contained'>Login</Button>
          <Button color='secondary' variant='contained'>Sign Up</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar;
