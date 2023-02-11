import { useState } from "react";
import { useAuth } from "../context/Auth";
import { Alert, Grid, Box, CircularProgress } from "@mui/material";
import { Container } from "@mui/system";
import BookCard from "../components/BookCard";
import { useFetchhBooksData } from "../hooks/useBooksData";
import axios from "axios";
import { useInfiniteQuery } from "react-query";

const HomePage = () => {
  // const [books, setBooks] = useState(null);
  const auth = useAuth();
  const [alert, setAlert] = useState(auth.alert.open);

  const fetchBooks = ({pageParam = 1}) => {
    return axios.get(`http://localhost:3000/books?page=${pageParam}`);
  };

  // const fetchBooks = async (page) => {
  //   const response = await fetch(`http://localhost:3000/books?page=${page}`)
  //   return response.json()
  // };

  const {data, isSuccess, hasNextPage, fetchNextPage, isFetchingNextPage} = useInfiniteQuery(
    'repos',
    fetchBooks,
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.data.length !== 0){
          return pages.length + 1
        } else {
          return undefined
        }
      }
    }
  );



  // const onSuccess = (data) => {
  //   setBooks(data.data)
  // };

  // const { isLoading } = useFetchhBooksData(onSuccess);

  // if (isLoading){
  //   return(
  //     <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height={'100vh'}>
  //       <CircularProgress sx={{mx: 'auto'}}></CircularProgress>
  //     </Box>
  //   )
  // }

  return (
    <>
      { alert === true && <Alert onClose={() => {setAlert(false)}} sx={{width: '50%', mx: 'auto', marginTop: '20px'}} severity={auth.alert.severity}>{auth.alert.message}</Alert>}
      <Container sx={{mt: 5}}>
        {/* <Grid container spacing={3}>
          {books.map( book =>(
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
        </Grid> */}
        <button disabled={!hasNextPage} onClick={fetchNextPage}>Load More</button>
      </Container>
    </>
  )
}

export default HomePage;
