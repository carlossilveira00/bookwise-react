import { Box, Button, Typography, Modal, Stack, Rating, useTheme } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Image from '../backgroundImage.png'
import { useState } from 'react';

const UserBookModal = ({open, handleClose, status}) => {
  const [bookStatus, setBookStatus] = useState(status);
  const theme = useTheme();

  const handleChange = (event) => {
    setBookStatus(event.target.value);
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
          <img src={Image} alt="" width={"200px"} />
          <Box padding={5} color={theme.palette.text.primary}>
            <Typography variant="h6" color="inherit">The TITLE</Typography>
            <Typography variant="subtitle2" color="inherit">By Darren Hardy</Typography>
            <Rating name="read-only" size='small' value={3} readOnly />
            <Typography variant="body2" color="inherit" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit,
              quam beatae rerum inventore consectetur,
              neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
            <Stack direction={'row'} spacing={1}>
              <Button href="signup" color='secondary' variant='contained'>Remove from Library</Button>
              <Button href="login" color='primary' variant='contained'>Move to {bookStatus}!</Button>
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
          </Box>
        </Stack>
      </Box>
    </Modal>
  )
};

export default UserBookModal;
