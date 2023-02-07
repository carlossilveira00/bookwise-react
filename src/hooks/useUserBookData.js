import { useMutation, useQuery} from "react-query";
import axios from "axios";
import { useEffect } from "react";

const addUserBook = (userBook) => {
  // Set the JWT in the Headers of the POST Request.
  axios.defaults.headers.common['Authorization'] = sessionStorage.getItem('userData');

  return axios.post('http://localhost:3000/user_library', userBook );
};

const fetchUserBooks = (user_id) => {
  return axios.get(`http://localhost:3000/user_library/${user_id}` );
};

export const useAddUserBookData = () => {
  return useMutation(addUserBook);
};

export const useFetchUserBooksData = (user_id,onSuccess, onError) => {
  return useQuery('user-library', () => fetchUserBooks(user_id), {
    onSuccess,
    onError,
  })
};
