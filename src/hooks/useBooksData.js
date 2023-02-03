import { useMutation} from "react-query";
import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:3000',
})

const addBook = (userToken,bookInformation) => {
  instance.defaults.headers.common['Authorization'] = userToken;
  return instance.post('/books', bookInformation);
};

export const useAddBookData = () => {
  return useMutation(addBook)
};
