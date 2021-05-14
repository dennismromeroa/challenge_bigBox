import { combineReducers } from "redux"
import categoryReducer from './categoryReducer'
import booksReducer from './booksReducer'

export default combineReducers({category:categoryReducer, books:booksReducer})
