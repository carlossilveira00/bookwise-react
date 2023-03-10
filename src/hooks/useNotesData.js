import axios from "axios";
import { useMutation, useQuery } from "react-query";

const fetchBookNotes = user_book_id => {
  return axios.get(`http://localhost:3000/book_notes/${user_book_id}`)
};

const createBookNote = ({user_book_id}) => {
  axios.defaults.headers.common['Authorization'] = sessionStorage.getItem('userData');
  const user = JSON.parse(sessionStorage.getItem('userData'));

  return axios.post('http://localhost:3000/notes', {user_id: user.user.id, user_book_id: user_book_id });
};

const updateBookNote = ({note}) => {
  axios.defaults.headers.common['Authorization'] = sessionStorage.getItem('userData');

  return axios.post('http://localhost:3000/notes', {note});
};

const deleteBookNote = ({note_id}) => {
  axios.defaults.headers.common['Authorization'] = sessionStorage.getItem('userData');

  return axios.delete(`http://localhost:3000/notes${note_id}`)
};

export const useFetchBookNotes = (user_book_id) => {
  return useQuery(['book_notes', user_book_id], () => fetchBookNotes(user_book_id), {
    enabled: false
  } )
};

export const useCreateBookNote = () => {
  return useMutation(createBookNote);
};

export const useUpdateBookNote = () => {
  return useMutation(updateBookNote);
};

export const useDeleteBookNote = (note_id) => {
  return useMutation(note_id)
};
