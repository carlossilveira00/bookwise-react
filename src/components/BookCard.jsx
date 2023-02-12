import { Box, Button, Paper, Rating, Stack, Typography} from '@mui/material';
import { useState } from 'react';
import BookModal from './BookModal';

const BookCard = ({title, author, description, category, thumbnail_url, ISBN, bookId}) => {
  // Set State to track if the modal is open or not.
  const [open, setOpen] = useState(false);

  // Function to Open the modal setting the state of open to true.
  const handleOpen = () => setOpen(true);

  // Function to Close the modal setting the state of open to false.
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen}>
        <Paper color='white' sx={{textTransform: 'none', height: '250px'}}>
          <Stack direction='row'>
            <img src={thumbnail_url} alt="" width={"200px"} style={{display: 'block', height: '250px'}} />
            <Box padding={2}>
              <Typography variant="h6" color="inherit">{title}</Typography>
              <Typography variant="subtitle2" color="inherit">By {author}</Typography>
              <Rating name="read-only" size='small' value={3} readOnly />
              <Typography variant="body2" color="inherit" paragraph
              style={{
                height: '70px',
                overflow: 'scroll',
                textOverflow: 'ellipsis',
              }}>
                {description}
              </Typography>
              <Typography variant="overline" align='right' display="block" gutterBottom sx={{ fontWeight: 'bolder' }}>
                {category}
              </Typography>
            </Box>
          </Stack>
        </Paper>
      </Button>
      <BookModal
      open={open}
      handleClose={handleClose}
      title={title}
      author={author}
      description={description}
      category={category}
      thumbnail_url={thumbnail_url}
      ISBN={ISBN}
      bookId={bookId}
      />
    </>
  )
}

export default BookCard;
