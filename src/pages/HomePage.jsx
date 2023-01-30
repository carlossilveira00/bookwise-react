import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import BookCard from "../components/BookCard";

const HomePage = () => {

  return (
    <Container sx={{mt: 5}}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <BookCard></BookCard>
        </Grid>
        <Grid item xs={6}>
          <BookCard></BookCard>
        </Grid>
        <Grid item xs={6}>
          <BookCard></BookCard>
        </Grid>
        <Grid item xs={6}>
          <BookCard></BookCard>
        </Grid>
      </Grid>
    </Container>
  )
}

export default HomePage;
