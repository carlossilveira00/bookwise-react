import { useState } from "react";
import { useAuth } from "../context/Auth";
import { Alert, Grid, Box, CircularProgress } from "@mui/material";
import { Container } from "@mui/system";
import BookCard from "../components/BookCard";
import { useFetchhBooksData } from "../hooks/useBooksData";

const HomePage = () => {
  const [books, setBooks] = useState(null);
  const auth = useAuth();
  const [alert, setAlert] = useState(auth.alert.open);

  const onSuccess = (data) => {
    setBooks(data.data)
  };

  const { isLoading } = useFetchhBooksData(onSuccess);

  if (isLoading){
    return(
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height={'100vh'}>
        <CircularProgress sx={{mx: 'auto'}}></CircularProgress>
      </Box>
    )
  }

  return (
    <>
      { alert === true && <Alert onClose={() => {setAlert(false)}} sx={{width: '50%', mx: 'auto', marginTop: '20px'}} severity={auth.alert.severity}>{auth.alert.message}</Alert>}
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
    </>
  )
}

export default HomePage;
