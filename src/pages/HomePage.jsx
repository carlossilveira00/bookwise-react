import { Fragment, useState } from "react";
import { useAuth } from "../context/Auth";
import { Alert, Grid, Box, CircularProgress, Button, Stack } from "@mui/material";
import { Container } from "@mui/system";
import BookCard from "../components/BookCard";
import { useFetchBooksData } from "../hooks/useBooksData";

const HomePage = () => {
  const auth = useAuth();
  const [alert, setAlert] = useState(auth.alert.open);

  const { data, isLoading, hasNextPage, fetchNextPage} = useFetchBooksData();

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
          {data?.pages.map((group,index)=>{
            return (
            <Fragment key={index}>
              {
                group.data.map(book => (
                  <Grid item xs={6} key={book.id} >
                    <BookCard
                    key={book.id}
                    title={book.title}
                    author={book.author}
                    description={book.description}
                    category={book.category}
                    thumbnail_url={book.thumbnail_url}
                    ISBN={book.ISBN}
                    bookId={book.id}
                    />
                  </Grid>
                ))
              }
            </Fragment>
            )
          })}
        </Grid>
        <Stack direction={'row'} justifyContent={'center'} marginTop={3} marginBottom={3} >
          <Button disabled={!hasNextPage} onClick={fetchNextPage} color='primary' variant='contained' sx={{width: '25%'}}>Load More Books</Button>
        </Stack>
      </Container>
    </>
  )
}

export default HomePage;
