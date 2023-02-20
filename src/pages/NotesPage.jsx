import { Box, Button} from "@mui/material";
import { Stack } from "@mui/system";
import { useTheme } from "@emotion/react";
import SideBar from "../components/SideBar";
import { useEffect, useState } from "react";
import Note from "../components/Note";
import ShowNotes from "../components/ShowNotes";
import TrixToolbar from "../components/TrixToolbar";
import TrixInput from "../components/TrixInput";
import { useCreateBookNote, useFetchBookNotes } from "../hooks/useNotesData";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useAuth } from "../context/Auth";


const NotesPage = ({colorMode, setColorMode}) => {
  const theme = useTheme();
  const auth = useAuth();
  const [open, setOpen] = useState(false);
  const [bookSelected, setBookSelected] = useState(null);

  // Fetch notes for a specific book.
  const { data, isLoading, refetch } = useFetchBookNotes();

  // Create note for a specific book.
  const { mutate: createBookNote, data: noteData } = useCreateBookNote();

  console.log(noteData)

  const handleCreateNote = () => {
    const newNote = {user_id: auth.user.user.id, user_book_id: bookSelected}
    createBookNote(newNote);
  };

  const handleSelectBook = (id) => {
    setBookSelected(id);
  }

  useEffect(()=> {
    if (bookSelected !== null) {
      refetch();
    }
  },[bookSelected]);


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
            <Button variant="contained" onClick={handleCreateNote}>Create Note</Button>
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
