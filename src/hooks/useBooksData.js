import { useMutation} from "react-query";
import axios from "axios";

const addBook = (bookInformation) => {
  // Set the JWT in the Headers of the POST Request.
  axios.defaults.headers.common['Authorization'] = sessionStorage.getItem('userData');

  return axios.post('http://localhost:3000/books', bookInformation);
};

export const useAddBookData = () => {
  return useMutation(addBook)
};
