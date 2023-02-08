import { UserCard } from "../components/UserCard";
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { Alert, CircularProgress, Container, Grid } from "@mui/material";
import UserBookCard from "../components/UserBookCard";
import { useFetchUserBooksData } from "../hooks/useUserBookData";
import { useState } from "react";
import { Box } from "@mui/system";

const LibraryPage = () => {
  const [books, setBooks] = useState('');
  const [alert, setAlert] = useState(false);

  const onSuccess = (data) => {
    setBooks(data.data)
  };

  const onError = (data) => {
    setAlert({open: true, severity: 'error', message: 'Something went wrong, please try again!' });
  };

  const { isLoading } = useFetchUserBooksData(onSuccess, onError);

  if (isLoading){
    return(
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height={'100vh'}>
        <CircularProgress sx={{mx: 'auto'}}></CircularProgress>
      </Box>
    )
  }

  return (
    <Container sx={{mt: 5}}>
      { alert.open === true && <Alert onClose={() => {setAlert(false)}} sx={{width: '75%', mx: 'auto', marginTop: '20px', marginBottom: '20px'}} severity={alert.severity}>{alert.message}</Alert>}
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <UserCard></UserCard>
        </Grid>
        <Grid item xs={9}>
          {/* Wishlist Dropdown */}
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-label="Expand"
              aria-controls="-content"
              id="-header"
            >
              <Typography variant="body1" color="inherit">Wishlist</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{maxHeight: '500px', overflow: 'scroll'}}>
              <Grid container spacing={3}>
                {books.filter(book => book.status === 'Wishlist').map( filteredBook =>(
                  <Grid item xs={6} key={filteredBook.id} >
                    <UserBookCard
                    key={filteredBook.id}
                    title={filteredBook.book.title}
                    author={filteredBook.book.author}
                    description={filteredBook.book.description}
                    category={filteredBook.book.category}
                    thumbnail_url={filteredBook.book.thumbnail_url}
                    started_date={filteredBook.started_date}
                    ended_date={filteredBook.ended_date}
                    status={filteredBook.status}
                    bookId={filteredBook.id}
                    userBook={true}
                    />
                  </Grid>
                  ))
                }
              </Grid>
            </AccordionDetails>
          </Accordion>
          {/* In Progress Dropdown */}
          <Accordion sx={{marginTop: 2}}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-label="Expand"
              aria-controls="-content"
              id="-header"
            >
              <Typography variant="body1" color="inherit">In Progress</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{maxHeight: '500px', overflow: 'scroll'}}>
              <Grid container spacing={3}>
                {books.filter(book => book.status === 'In Progress').map( filteredBook =>(
                  <Grid item xs={6} key={filteredBook.id} >
                    <UserBookCard
                    key={filteredBook.id}
                    title={filteredBook.book.title}
                    author={filteredBook.book.author}
                    description={filteredBook.book.description}
                    category={filteredBook.book.category}
                    thumbnail_url={filteredBook.book.thumbnail_url}
                    started_date={filteredBook.started_date}
                    ended_date={filteredBook.ended_date}
                    status={filteredBook.status}
                    userBook={true}
                    />
                  </Grid>
                  ))
                }
              </Grid>
            </AccordionDetails>
          </Accordion>
          {/* Completed Dropdown */}
          <Accordion sx={{marginTop: 2}}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-label="Expand"
              aria-controls="-content"
              id="-header"
            >
              <Typography variant="body1" color="inherit">Completed</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{maxHeight: '500px', overflow: 'scroll'}}>
              <Grid container spacing={3}>
                {books.filter(book => book.status === 'Completed').map( filteredBook =>(
                  <Grid item xs={6} key={filteredBook.id} >
                    <UserBookCard
                    key={filteredBook.id}
                    title={filteredBook.book.title}
                    author={filteredBook.book.author}
                    description={filteredBook.book.description}
                    category={filteredBook.book.category}
                    thumbnail_url={filteredBook.book.thumbnail_url}
                    started_date={filteredBook.started_date}
                    ended_date={filteredBook.ended_date}
                    status={filteredBook.status}
                    userBook={true}
                    />
                  </Grid>
                  ))
                }
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </Container>
  )
};

export default LibraryPage;
