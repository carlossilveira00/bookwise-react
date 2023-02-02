import { useQuery } from "react-query";
import axios from "axios";
import { useAuth } from '../context/Auth';

const instance = axios.create({
  baseURL: 'http://localhost:3000',
})

const addBook = (userToken,bookInformation) => {
  instance.defaults.headers.common['Authorization'] = userToken;
  return instance.post('/books', bookInformation);
};

const useAddBook = () => {

};
