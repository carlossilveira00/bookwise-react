import { useTheme } from '@emotion/react';
import { AppBar, CssBaseline, Divider, Drawer, List, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SearchNotes from './SearchNotes';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import BooksAccordion from './BooksAccordion';
import HomeIcon from '@mui/icons-material/Home';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import LogoutIcon from '@mui/icons-material/Logout';

const SideBar = ({setOpen, open, colorMode, setColorMode}) => {
  const theme = useTheme();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleColorModeChange = () => {
    colorMode === 'light' ? setColorMode('dark') : setColorMode('light')
  };

  const handleLogout = () => {
    // auth.logout();
    // navigate('/', {replace: true})
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{bgcolor: theme.palette.background.default}}>
        <Toolbar>
          <IconButton
            color="secondary"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: 300,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 300,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <Box sx={{display: 'flex', alignItems: 'center', padding: 1,  justifyContent: 'flex-end',}}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </Box>
        <Divider textAlign='center' >
          <Typography variant="overline" fontSize={11} color="initial">Search</Typography>
        </Divider>
        <SearchNotes />
        <Divider textAlign='center' sx={{mt: 2}}>
          <Typography variant="overline" fontSize={11} color="initial">Books</Typography>
        </Divider>
        <Box mt={2}>
          <BooksAccordion
            title={'In Progress'}
          />
          <BooksAccordion
            title={'Completed'}
          />
        </Box>
        <Divider textAlign='center' sx={{mt: 2}}>
          <Typography variant="overline" fontSize={11} color="initial">Menu</Typography>
        </Divider>
        <List>
          <ListItem disablePadding>
            <ListItemButton href='/'>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton href='my-library'>
              <ListItemIcon>
                <AccountBoxIcon />
              </ListItemIcon>
              <ListItemText>Profile</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={handleColorModeChange}>
              <ListItemIcon>
                <Brightness4Icon />
              </ListItemIcon>
              <ListItemText>Mode</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={handleLogout}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText>Logout</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box />
    </Box>
  )
};

export default SideBar;
