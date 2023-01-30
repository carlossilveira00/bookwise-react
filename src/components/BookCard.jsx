import { Box, Button, Paper, Rating, Stack, Typography, Modal } from '@mui/material';
import { useState } from 'react';
import Image from '../backgroundImage.png'

const BookCard = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen}>
        <Paper>
          <Stack direction='row'>
            <img src={Image} alt="" width={"200px"} />
            <Box padding={2}>
              <Typography variant="h6" color="initial">The Compound Effect</Typography>
              <Typography variant="subtitle2" color="initial">By Darren Hardy</Typography>
              <Rating name="read-only" size='small' value={3} readOnly />
              <Typography variant="body2" color="initial" paragraph
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
      </Modal>
    </>
  )
}

export default BookCard;
