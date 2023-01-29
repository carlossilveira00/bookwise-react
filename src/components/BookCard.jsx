import { Box, Paper, Rating, Stack, Typography } from '@mui/material';
import Image from '../backgroundImage.png'

const BookCard = () => {
  return (
    <Paper sx={{width: 'fit-content', maxHeight: '200px'}}>
      <Stack direction='row' sx={{border:'1px solid red'}}>
        <img src={Image} alt="" width={"150px"} height={'200px'} />
        <Box width={"200px"} padding={1}>
          <Typography variant="h6" color="initial">The Compound Effect</Typography>
          <Typography variant="subtitle2" color="initial">By Darren Hardy</Typography>
          <Rating name="read-only" size='small' value={3} readOnly />
          <Typography variant="body2" color="initial" paragraph noWrap>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit,
            quam beatae rerum inventore consectetur,
            neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
          <Typography variant="overline" align='right' display="block" gutterBottom>
            Category
          </Typography>
        </Box>
      </Stack>
    </Paper>
  )
}

export default BookCard;
