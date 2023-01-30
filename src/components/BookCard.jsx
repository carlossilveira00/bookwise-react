import { Box, Paper, Rating, Stack, Typography } from '@mui/material';
import Image from '../backgroundImage.png'

const BookCard = () => {
  return (
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
  )
}

export default BookCard;
