import { Box, Button, Typography, Modal, Stack, Rating, useTheme, Alert } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { useDestroyUserBookData, useUpdateUserBookStatus } from '../hooks/useUserBookData';

const UserBookModal = ({open, handleClose, title, author, description, category, thumbnail_url, started_date, ended_date, status, bookId}) => {
  const [bookStatus, setBookStatus] = useState(status);
  const [alert, setAlert] = useState(false);
  const theme = useTheme();

  const { mutate : removeUserBook } = useDestroyUserBookData();
  const { mutate: updateUserBookStatus } = useUpdateUserBookStatus();

  const handleChange = (event) => {
    setBookStatus(event.target.value);
  };

  const handleRemoveUserBook = () => {
    removeUserBook(bookId, {onSuccess: onSuccess, onError: onError });
  };

  const handleUpdateStatus = () => {
    updateUserBookStatus({status: bookStatus, book_id: bookId}, {onSuccess: onSuccess, onError: onError });
  };

  const onSuccess = () => {
    window.location.reload();
  };

  const onError = () => {
    setAlert({open: true, severity: 'error', message: 'Something went wrong, please try again!' });
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box padding={3} sx={{my:'20%', width: '50%', mx: 'auto', bgcolor: theme.palette.background.default}} position={'relative'}>
        <Stack direction='row'>
          <img src={thumbnail_url} alt="" width={"200px"} />
          <Box padding={5} color={theme.palette.text.primary}>
            <Typography variant="h6" color="inherit">{title}</Typography>
            <Typography variant="subtitle2" color="inherit">By {author}</Typography>
            <Rating name="read-only" size='small' value={3} readOnly />
            <Typography variant="body2" color="inherit" paragraph>
              {description}
            </Typography>
            <Stack direction={'row'} spacing={1}>
              <Button onClick={handleRemoveUserBook} color='secondary' variant='contained'>Remove from Library</Button>
              <Button onClick={handleUpdateStatus} color='primary' variant='contained'>Move to {bookStatus}!</Button>
            </Stack>
            <Box mt={5} sx={{position: 'absolute', right: 0, top: -20, marginRight: 2}}>
              <FormControl fullWidth>
                <InputLabel id="book-status">Status</InputLabel>
                <Select
                  labelId="book-status-select-label"
                  id="book-status"
                  value={bookStatus}
                  label="Status"
                  onChange={handleChange}
                  >
                  <MenuItem value={'Wishlist'}>Wishlist</MenuItem>
                  <MenuItem value={'In Progress'}>In Progress</MenuItem>
                  <MenuItem value={'Completed'}>Completed</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-evenly'} mt={2}>
              <Typography variant="overline" color="inherit">Started date: <strong>{started_date || '--'}</strong></Typography>
              <Typography variant="overline" color="inherit">Ended date: <strong>{ended_date || '---'}</strong></Typography>
            </Stack>
          </Box>
        </Stack>
        { alert.open === true && <Alert onClose={() => {setAlert(false)}} sx={{width: '95%', marginTop: 4}} severity={alert.severity}>{alert.message}</Alert>}
      </Box>
    </Modal>
  )
};

export default UserBookModal;
