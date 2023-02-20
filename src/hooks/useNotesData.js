import axios from "axios";
import { useMutation, useQuery } from "react-query";

const fetchBookNotes = ({user_book_id}) => {
  return axios.get(`http://localhost:3000/book_notes/${user_book_id}`)
};

const createBookNote = ({user_book_id}) => {
  const user = JSON.parse(sessionStorage.getItem('userData'));

  return axios.post('http://localhost:3000/notes', {user_book: user_book_id, user_id: user.user.id});
};

export const useFetchBookNotes = (onSuccess, onError) => {
  return useQuery('book_notes', fetchBookNotes, {
    onSuccess,
    onError,
  })
};

export const useCreateBookNote = () => {
  return useMutation(createBookNote);
};
