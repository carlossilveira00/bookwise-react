import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import BookCard from "../components/BookCard";

const HomePage = () => {

  return (
    <Container sx={{mt: 5}}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
        <BookCard title={'Hey Lion'}></BookCard>
        </Grid>
        <Grid item xs={6}>
        <BookCard title={'Hey Cat'}></BookCard>
        </Grid>
        <Grid item xs={6}>
          <BookCard title={'Hey John'}></BookCard>
        </Grid>
        <Grid item xs={6}>
          <BookCard title={'Hey Joe'}></BookCard>
        </Grid>
      </Grid>
    </Container>
  )
}

export default HomePage;
