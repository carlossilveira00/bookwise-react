import { useMutation, useQuery} from "react-query";
import axios from "axios";

const addUserBook = (userBook) => {
  // Set the JWT in the Headers of the POST Request.
  axios.defaults.headers.common['Authorization'] = sessionStorage.getItem('userData');

  return axios.post('http://localhost:3000/user_library', userBook );
};

const fetchUserBooks = () => {
  const user = JSON.parse(sessionStorage.getItem('userData'));

  return axios.get(`http://localhost:3000/user_library/${user.user.id}` );
};

export const useAddUserBookData = () => {
  return useMutation(addUserBook);
};

export const useFetchUserBooksData = (onSuccess, onError) => {
  return useQuery('user-library', fetchUserBooks, {
    onSuccess,
    onError,
  })
};
