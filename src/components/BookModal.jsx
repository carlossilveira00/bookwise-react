import { Box, Button, Typography, Modal, Stack, Rating, useTheme, Alert } from '@mui/material';
import { useState } from 'react';
import Image from '../backgroundImage.png'
import { useAuth } from '../context/Auth';
import { useAddUserBookData } from '../hooks/useUserBookData';

const BookModal = ({open, handleClose, title}) => {
  const [alert, setAlert] = useState(false);
  const { mutate : addBookToLibrary } = useAddUserBookData();
  const auth = useAuth();
  const theme = useTheme();
  // This function is passed to the mutate function to perform when the calling of the mutate function is a success.
  const onSuccess = (data) => {
      setAlert({open: true, severity: 'success', message: 'Book added to your library!' });
    }

  // This function is passed to the mutate function to perform when the calling of the mutate function is a success.
  const onError = () => {
    setAlert({open: true, severity: 'error', message: 'Something went wrong, please try again!' });
  };

  const handleAddBook = () => {
    // Check if the user has logged in, if not then return an alert and don't even make the post request.
    if (auth.user == null ) return setAlert({open: true, severity: 'error', message: 'You have to log in to able to add a book to your library!' });

    const userBook = { book_association: {book_id: 1, user_id: auth.user.user.id}}
    addBookToLibrary(userBook, {onSuccess: onSuccess, onError: onError})
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box padding={3} sx={{my:'20%', width: '50%', mx: 'auto', bgcolor: theme.palette.background.default}}>
        { alert.open === true && <Alert onClose={() => {setAlert(false)}} sx={{width: '50%',position: 'absolute', top: 10}} severity={alert.severity}>{alert.message}</Alert>}
        <Stack direction='row'>
          <img src={Image} alt="" width={"200px"} />
          <Box padding={5} color={theme.palette.text.primary}>
            <Typography variant="h6" color="inherit">The Compound Effect</Typography>
            <Typography variant="subtitle2" color="inherit">By Darren Hardy</Typography>
            <Rating name="read-only" size='small' value={3} readOnly />
            <Typography variant="body2" color="inherit" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit,
              quam beatae rerum inventore consectetur,
              neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
            <Stack direction={'row'} spacing={1}>
              <Button color='secondary' variant='contained'>Buy Now!</Button>
              <Button onClick={handleAddBook} color='primary' variant='contained'>Add to Whishlist!</Button>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Modal>
  )
};

export default BookModal;
