import { useTheme } from '@emotion/react';
import { AppBar, CssBaseline, Divider, Drawer, List, Toolbar, Typography, Accordion, AccordionDetails, AccordionSummary, CircularProgress } from '@mui/material';
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
import HomeIcon from '@mui/icons-material/Home';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/Auth';
import React from 'react'
import BookIconWithTitle from './BookIconWithTitle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useFetchUserBooksData } from '../hooks/useUserBookData';

const SideBar = ({setOpen, open, colorMode, setColorMode}) => {
  const theme = useTheme();
  const auth = useAuth();
  const navigate = useNavigate();

  // Fetch all the Books that user has added to library.
  const {data : userBooks, isLoading} = useFetchUserBooksData();

  // Function used to open the drower component.
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  // Function used to close the drower.
  const handleDrawerClose = () => {
    setOpen(false);
  };

  // Function passed to the Color Mode to switch between light and dark mode for the application.
  const handleColorModeChange = () => {
    colorMode === 'light' ? setColorMode('dark') : setColorMode('light')
  };

  // Functions handles logout of the user and redirects to the home page.
  const handleLogout = () => {
    auth.logout();
    navigate('/', {replace: true})
  };

  if (isLoading){
    return(
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height={'100vh'}>
        <CircularProgress sx={{mx: 'auto'}}></CircularProgress>
      </Box>
    )
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
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="body1" color="initial">In Progress</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {
                userBooks.data.filter( book => book.status === 'In Progress').map( filteredBook => (
                  <BookIconWithTitle
                    key={filteredBook.id}
                    title={filteredBook.book.title}
                    description={filteredBook.book.description}
                    id={filteredBook.id}
                  />
                ))
              }
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="body1" color="initial">Completed</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {
                userBooks.data.filter( book => book.status === 'Completed').map( filteredBook => (
                  <BookIconWithTitle
                    key={filteredBook.id}
                    title={filteredBook.book.title}
                    description={filteredBook.book.description}
                    id={filteredBook.id}
                  />
                ))
              }
            </AccordionDetails>
          </Accordion>
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
