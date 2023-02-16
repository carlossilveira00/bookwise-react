import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import { useTheme } from "@emotion/react";
import SideBar from "../components/SideBar";
import { useState } from "react";
import Note from "../components/Note";
import ShowNotes from "../components/ShowNotes";
import Trix from "trix";
import { ReactTrixRTEInput, ReactTrixRTEToolbar } from "react-trix-rte";


const NotesPage = ({colorMode, setColorMode}) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  function handleChange(event, newValue) {
    setValue(newValue); // OR custom on change listener.
  }


  return (
    <>
    <Stack direction={'row'}>
      <SideBar open={open} setOpen={setOpen} colorMode={colorMode} setColorMode={setColorMode}/>
      <Box open={open}
        sx={{
          flexGrow: 1,
          // padding: theme.spacing(3),
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          marginLeft: `-300px`,
          ...(open && {
            transition: theme.transitions.create('margin', {
              easing: theme.transitions.easing.easeOut,
              duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
          }),
        }}
      >
        <Box display={'flex'}>
          <ShowNotes>
            <Note></Note>
            <Note></Note>
            <Note></Note>
          </ShowNotes>
          <Box sx={{border: '1px solid red', height: '100vh', width: 'fill-available', padding: 3}}>
            <ReactTrixRTEInput
                defaultValue="<div>React Trix Rich Text Editor</div>"
                onChange={handleChange}
                className={'text-editor'}
              />
          </Box>
        </Box>

      </Box>
      {/* <Box sx={{border: '1px solid red', height: '100vh', width: '20%'}} textAlign={'center'} paddingTop={1}>
        <Typography variant="overline" color="initial" fontSize={10}>Books</Typography>
        <Button sx={{borderRadius: '10px'}} color='secondary'>
          <Box display={'flex'} alignItems={'center'} sx={{textTransform: 'none', borderRadius: '10px'}} padding={1} >
            <LibraryBooksIcon fontSize="smaller" sx={{marginRight: 1}} color={'primary'}></LibraryBooksIcon>
            <Typography variant="body2" color={theme.palette.text.primary} sx={{fontWeight: 'bold'}}>The Coupound Effect</Typography>
          </Box>
        </Button>
        <Button sx={{borderRadius: '10px'}} color='secondary'>
          <Box display={'flex'} alignItems={'center'} sx={{textTransform: 'none', borderRadius: '10px'}} padding={1}>
            <LibraryBooksIcon fontSize="smaller" sx={{marginRight: 1}} color={'primary'}></LibraryBooksIcon>
            <Typography variant="body2" color="initial" sx={{fontWeight: 'bold'}}>The Coupound Effect</Typography>
          </Box>
        </Button>
        <Button sx={{borderRadius: '10px'}} color='secondary'>
          <Box display={'flex'} alignItems={'center'} sx={{textTransform: 'none', borderRadius: '10px'}} padding={1}>
            <LibraryBooksIcon fontSize="smaller" sx={{marginRight: 1}} color={'primary'}></LibraryBooksIcon>
            <Typography variant="body2" color="initial" sx={{fontWeight: 'bold'}}>The Coupound Effect</Typography>
          </Box>
        </Button>
      </Box> */}
      {/* <Box sx={{border: '1px solid red', height: '100vh', width: '20%'}}>

      </Box>
      <Box sx={{border: '1px solid red', height: '100vh', width: 'fill-available'}}>

      </Box> */}
    </Stack>
    </>
  )
};

export default NotesPage;
