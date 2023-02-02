import { Box } from "@mui/system";
import CreateBookForm from "../components/CreateBookForm";
import Typography from '@mui/material/Typography'
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import axios from "axios";
import { useAuth } from '../context/Auth';

const CreateBookPage = () => {
  const auth = useAuth();
  const [bookInformation, setBookInformation] = useState();
  // axios.defaults.headers.common['Authorization'] = 'HELLO';
  const instance = axios.create({
    baseURL: 'http://localhost:3000',
  })

  const handleChange = (event) => {
    event.preventDefault()
    setBookInformation(Object.assign({}, bookInformation, {[event.target.name]: event.target.value}))
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    instance.defaults.headers.common['Authorization'] = auth.user.userToken;

    instance.post('/books', bookInformation)
    .then (data => console.log(data))
  };
  return (
    <Container>
      <Grid container columnSpacing={15} alignItems='center' marginTop={5}>
        <Grid item xs={5}>
          <Box padding={1}>
            <Typography variant="h4" color="inherit">Notice:</Typography>
            <Typography variant="body2" color="inherit" paragraph padding={3}>
              Please make sure you've tried to find the book before adding a new one. Each book added must have
              an ISBN that is unique. An International Standard Book Number (ISBN) it's a unique identifier for a book.
              If you're not able to add a book it's because it already exists on our databse. Please double check it.
            </Typography>
          </Box>
          <Box marginTop={5} padding={1}>
            <Typography variant="h4" color="inherit">Information:</Typography>
            <Typography variant="body2" color="inherit" paragraph padding={3}>
              We're working on adding podcasts to our app. Please be patient as we work on this feature where you'll be able
              to share you knowledge and information about podcasts with your friends and public groups!
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={7}>
          <CreateBookForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
          />
        </Grid>
      </Grid>
    </Container>
  )
};

export default CreateBookPage;
