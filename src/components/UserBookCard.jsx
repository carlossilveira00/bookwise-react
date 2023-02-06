import { Box, Button, Paper, Rating, Stack, Typography} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { useState } from 'react';
import Image from '../backgroundImage.png'
import UserBookModal from './UserBookModal';

const UserBookCard = ({title, userBook }) => {
  // Set State to track if the modal is open or not.
  const [open, setOpen] = useState(false);

  // Function to Open the modal setting the state of open to true.
  const handleOpen = () => setOpen(true);

  // Function to Close the modal setting the state of open to false.
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen}>
        <Paper color='white' sx={{textTransform: 'none'}}>
          <Stack direction='row'>
            <Box position={'relative'}>
              <img src={Image} alt="" width={"200px"} height={'100%'} style={{display: 'block'}} />
              { userBook && <StarIcon color='primary' fontSize='large' sx={{position: 'absolute', right: 0, left: 0, top: 0}}></StarIcon> }
            </Box>
            <Box padding={2}>
              <Typography variant="h6" color="inherit">The Compound Effect</Typography>
              <Typography variant="subtitle2" color="inherit">By Darren Hardy</Typography>
              <Rating name="read-only" size='small' value={3} readOnly />
              <Typography variant="body2" color="inherit" paragraph
              style={{
                height: '70px',
                overflow: 'scroll',
                textOverflow: 'ellipsis',
              }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit,
                quam beatae rerum inventore consectetur,
                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
              </Typography>
              <Typography variant="overline" align='right' display="block" gutterBottom sx={{ fontWeight: 'bolder' }}>
                Finances
              </Typography>
            </Box>
          </Stack>
        </Paper>
      </Button>
      <UserBookModal
      open={open}
      handleClose={handleClose}
      title={title}
      status={'In Progress'}
      />
    </>
  )
}

export default UserBookCard;
