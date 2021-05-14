import axios from "axios";
import { GET_BOOKS } from "../../constans";

const getBooks = (books) => ({
  type: GET_BOOKS,
  books,
});

export const getSearchBooks = (data, list) => (dispatch) =>{
  return axios
    .get(`https://api.nytimes.com/svc/books/v3/lists/${data}/${list}.json?api-key=wMrIxYjKdpTQq76wy7ngPAG1OD0VJy8j`,{
        headers: {
          "Accept": "application/json"
          }
    })
    .then((res) =>{
        return res.data.results.books
    })
    .then((books) => dispatch(getBooks(books)))
    .catch((err) => console.log("error: ",err))
}
