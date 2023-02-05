import { useState } from "react";
import { useAuth } from "../context/Auth";
import { Alert, Grid } from "@mui/material";
import { Container } from "@mui/system";
import BookCard from "../components/BookCard";

const HomePage = () => {
  const auth = useAuth();
  const [alert, setAlert] = useState(auth.alert.open);

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
