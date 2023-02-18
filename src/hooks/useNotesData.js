import axios from "axios";
import { useQuery } from "react-query";

const fetchBookNotes = ({user_book_id}) => {
  return axios.get(`http://localhost:3000/book_notes/${user_book_id}`)
};

export const useFetchBookNotes = (onSuccess, onError) => {
  return useQuery('book_notes', fetchBookNotes, {
    onSuccess,
    onError,
  })
};
