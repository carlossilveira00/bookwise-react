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


const NotesPage = ({colorMode, setColorMode}) => {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [bookSelected, setBookSelected] = useState(null);
  const [noteSelected, setNoteSelected] = useState("null");
  const [notes,setNotes] = useState([]);

  // Fetch notes for a specific book.
  const { refetch } = useFetchBookNotes(bookSelected);

  // Create note for a specific book.
  const { mutate: createBookNote } = useCreateBookNote();

  // Creates an default note for the specific book selected and then refetches the notes in order to update the notes state.
  const handleCreateNote = () => {
    createBookNote({user_book_id: bookSelected})
    refetch();
  };

  // Function to set the book selected in order to be able to request the notes of a specific book.
  const handleSelectBook = (id) => {
    setBookSelected(id);
  };

  const handleSelectNote = (id) => {
    // Filter the notes array to find the right note and assign it to the note Selected.
    setNoteSelected(notes.find(note => note.id === id));
  };

  // Send GET request for the book notes only if the bookSelected isn't null and then setNotes to the response received from the request.
  useEffect(()=> {
    if (bookSelected !== null ) {
      refetch()
      .then(request => setNotes(request.data.data))
    }
  },[bookSelected, refetch]);


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
            {notes.map(note =>
              <Note
                key={note.id}
                id={note.id}
                title={note.title}
                body={note.body}
                handleSelectNote={handleSelectNote}
              />
            )}
            <Button variant="contained" disabled={!bookSelected && true} onClick={handleCreateNote}>Create Note</Button>
          </ShowNotes>
          <Box sx={{border: '1px solid red', height: '100vh', width: 'fill-available', padding: 3}}>
            <TrixToolbar />
            <TrixInput note={noteSelected}/>
          </Box>
        </Box>
      </Box>
    </Stack>
    </>
  )
};

export default NotesPage;
