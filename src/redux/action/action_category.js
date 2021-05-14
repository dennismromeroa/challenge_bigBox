import axios from "axios";
import { GET_CATEGORY } from "../../constans";

const getBooksCategory = (category) => ({
  type: GET_CATEGORY,
  category,
});

export const getCategoryBooks = () => (dispatch) =>{
  return axios
    .get(`https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=wMrIxYjKdpTQq76wy7ngPAG1OD0VJy8j`,{
        headers: {
          "Accept": "application/json"
          }
    })
    .then((res) =>res.data.results)
    .then((category) => dispatch(getBooksCategory(category)))
    .catch((err) => console.log("error: ",err))
}