import { useState } from "react";
import CreateBookForm from "../components/CreateBookForm";
import Typography from '@mui/material/Typography'
import { Box } from "@mui/system";
import { Grid, Alert } from "@mui/material";
import { Container } from "@mui/system";
import { useAddBookData } from "../hooks/useBooksData";

const CreateBookPage = () => {
  const [bookInformation, setBookInformation] = useState();
  const [alert, setAlert] = useState(false);
  const { mutate } = useAddBookData();

  // This function is passed to the mutate function to perform when the calling of the mutate function is a success.
  const onSuccess = (data) => {
    if (data.data.status === 'ok') {
      setAlert({open: true, severity: 'success', message: data.data.message });
    } else {
      setAlert({open: true, severity: 'warning', message: data.data.message });
    }
  };

  // This function is passed to the mutate function to perform when the calling of the mutate function is a success.
  const onError = () => {
    setAlert({open: true, severity: 'error', message: 'Something went wrong, please try again!' });
  };


  const handleChange = (event) => {
    event.preventDefault()
    setBookInformation(Object.assign({}, bookInformation, {[event.target.name]: event.target.value}))
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    mutate(bookInformation, {onSuccess: onSuccess, onError: onError });
    event.target.reset();
  };

  return (
    <Container>
      { alert.open === true && <Alert onClose={() => {setAlert(false)}} sx={{width: '50%', mx: 'auto', marginTop: '20px'}} severity={alert.severity}>{alert.message}</Alert>}
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
