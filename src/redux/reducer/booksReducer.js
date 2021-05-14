import { GET_BOOKS } from "../../constans";

const initialState = {
  books: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return { ...state, books: action.books };
    default:
      return state;
  }
};
