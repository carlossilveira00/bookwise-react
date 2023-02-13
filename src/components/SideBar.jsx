import { Accordion, AccordionDetails, AccordionSummary, AppBar, Button, CssBaseline, Divider, Drawer, FormControl, List, MenuItem, OutlinedInput, Paper, Select, Stack, Toolbar, Typography } from '@mui/material';
import React from 'react'
import { Box } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import InputBase from '@mui/material/InputBase';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { useTheme } from '@emotion/react';
import SearchNotes from './SearchNotes';

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

const SideBar = ({setOpen, open}) => {
  const theme = useTheme();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
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
        <Box>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="body1" color="initial">In Progress</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Stack onClick={() => {console.log('Hey')}} direction={'row'} alignItems={'center'} sx={{textDecoration: 'none', boxShadow: 1, my: 1}} padding={1}>
                <MenuBookIcon color='primary' sx={{mr: 1}}></MenuBookIcon>
                <Typography variant="body1" fontSize={14} color="initial">The Compound Effect</Typography>
              </Stack>
              <Stack onClick={() => {console.log('Hey')}} direction={'row'} alignItems={'center'} sx={{textDecoration: 'none', boxShadow: 1, my: 1}} padding={1}>
                <MenuBookIcon color='primary' sx={{mr: 1}}></MenuBookIcon>
                <Typography variant="body1" fontSize={14} color="initial">The Compound Effect</Typography>
              </Stack>
              <Stack onClick={() => {console.log('Hey')}} direction={'row'} alignItems={'center'} sx={{textDecoration: 'none', boxShadow: 1, my: 1}} padding={1}>
                <MenuBookIcon color='primary' sx={{mr: 1}}></MenuBookIcon>
                <Typography variant="body1" fontSize={14} color="initial">The Compound Effect</Typography>
              </Stack>
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
              <Stack onClick={() => {console.log('Hey')}} direction={'row'} alignItems={'center'} sx={{textDecoration: 'none', boxShadow: 1}} padding={1}>
                  <MenuBookIcon color='primary' sx={{mr: 1}}></MenuBookIcon>
                  <Typography variant="body1" fontSize={14} color="initial">The Compound Effect</Typography>
                </Stack>
                <Stack onClick={() => {console.log('Hey')}} direction={'row'} alignItems={'center'} sx={{textDecoration: 'none', boxShadow: 1}} padding={1}>
                  <MenuBookIcon color='primary' sx={{mr: 1}}></MenuBookIcon>
                  <Typography variant="body1" fontSize={14} color="initial">The Compound Effect</Typography>
                </Stack>
                <Stack onClick={() => {console.log('Hey')}} direction={'row'} alignItems={'center'} sx={{textDecoration: 'none', boxShadow: 1}} padding={1}>
                  <MenuBookIcon color='primary' sx={{mr: 1}}></MenuBookIcon>
                  <Typography variant="body1" fontSize={14} color="initial">The Compound Effect</Typography>
                </Stack>
            </AccordionDetails>
          </Accordion>
        </Box>

        <Divider textAlign='center' sx={{mt: 2}}>
          <Typography variant="overline" fontSize={11} color="initial">Books</Typography>
        </Divider>
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box />
    </Box>
  )
};

export default SideBar;
