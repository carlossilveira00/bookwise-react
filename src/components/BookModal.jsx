import { Box, Button, Typography, Modal, Stack, Rating, useTheme } from '@mui/material';
import Image from '../backgroundImage.png'

const BookModal = ({open, handleClose, title}) => {
  const theme = useTheme();
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box padding={3} sx={{my:'20%', width: '50%', mx: 'auto', bgcolor: theme.palette.background.default}}>
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
