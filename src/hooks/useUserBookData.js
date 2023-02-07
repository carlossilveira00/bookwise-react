import { useMutation} from "react-query";
import axios from "axios";

const addUserBook = (userBook) => {
  // Set the JWT in the Headers of the POST Request.
  axios.defaults.headers.common['Authorization'] = sessionStorage.getItem('userData');

  return axios.post('http://localhost:3000/user_library', userBook );
};

export const useAddUserBookData = () => {
  return useMutation(addUserBook);
};
