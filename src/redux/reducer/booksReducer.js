import { GET_BOOKS, GET_BOOK } from '../../constans';

const initialState = {
    books: [],
    book:{},

}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_BOOKS:
            return { ...state, books: action.books };
            case GET_BOOK:
                return { ...state, book: action.book };
        default:
            return state;
    }
}