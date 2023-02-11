import { useMutation, useQuery} from "react-query";
import axios from "axios";

const addBook = (bookInformation) => {
  // Set the JWT in the Headers of the POST Request.
  axios.defaults.headers.common['Authorization'] = sessionStorage.getItem('userData');

  return axios.post('http://localhost:3000/books', bookInformation);
};

const fetchBooks = () => {
  return axios.get('http://localhost:3000/books?limit=10&_offset=1');
};

export const useAddBookData = () => {
  return useMutation(addBook)
};


export const useFetchhBooksData = (onSuccess) => {
  return useQuery('books', fetchBooks,{
    onSuccess
  });
};
