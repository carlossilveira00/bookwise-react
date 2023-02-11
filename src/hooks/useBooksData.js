import { useMutation, useInfiniteQuery} from "react-query";
import axios from "axios";

const addBook = (bookInformation) => {
  // Set the JWT in the Headers of the POST Request.
  axios.defaults.headers.common['Authorization'] = sessionStorage.getItem('userData');

  return axios.post('http://localhost:3000/books', bookInformation);
};

const fetchBooks = ({pageParam = 1}) => {
  return axios.get(`http://localhost:3000/books?page=${pageParam}`);
};

export const useAddBookData = () => {
  return useMutation(addBook)
};


export const useFetchBooksData = (onSuccess) => {
  return useInfiniteQuery(
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
};
