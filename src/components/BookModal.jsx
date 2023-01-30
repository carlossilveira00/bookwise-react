import { Box, Button, Typography, Modal, Stack, Rating } from '@mui/material';
import Image from '../backgroundImage.png'

const BookModal = ({open, handleClose, title}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box padding={3} sx={{border: '1px solid red', my:'20%', width: '50%', mx: 'auto', bgcolor: 'white'}}>
      <Stack direction='row'>
            <img src={Image} alt="" width={"200px"} />
            <Box padding={5}>
              <Typography variant="h6" color="initial">The Compound Effect</Typography>
              <Typography variant="subtitle2" color="initial">By Darren Hardy</Typography>
              <Rating name="read-only" size='small' value={3} readOnly />
              <Typography variant="body2" color="initial" paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit,
                quam beatae rerum inventore consectetur,
                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
              </Typography>
              <Stack direction={'row'} spacing={1}>
                <Button href="signup" color='secondary' variant='contained'>Buy Now!</Button>
                <Button href="login" color='primary' variant='contained'>Add to Whishlist!</Button>
              </Stack>
            </Box>
          </Stack>
          </Box>
    </Modal>
  )
};

export default BookModal;
