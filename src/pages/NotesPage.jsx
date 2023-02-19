import { Box} from "@mui/material";
import { Stack } from "@mui/system";
import { useTheme } from "@emotion/react";
import SideBar from "../components/SideBar";
import { useEffect, useState } from "react";
import Note from "../components/Note";
import ShowNotes from "../components/ShowNotes";
import TrixToolbar from "../components/TrixToolbar";
import TrixInput from "../components/TrixInput";
import { useFetchBookNotes } from "../hooks/useNotesData";


const NotesPage = ({colorMode, setColorMode}) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [bookSelected, setBookSelected] = useState(null);

  const handleSelectBook = (id) => {
    setBookSelected(id);
  }

  useEffect(()=> {
    if (bookSelected == null) {
      console.log('Hello Wolrd')
    }
  },[bookSelected])

  // Fetch notes for a specific book.
  // const { data, isLoading } = useFetchBookNotes();

  return (
    <>
    <Stack direction={'row'}>
      <SideBar open={open} setOpen={setOpen} colorMode={colorMode} setColorMode={setColorMode} handleSelectBook={handleSelectBook}/>
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
            <TrixToolbar />
            <TrixInput />
          </Box>
        </Box>
      </Box>
    </Stack>
    </>
  )
};

export default NotesPage;
