import { combineReducers } from 'redux'
import reducerBooks from './reducerBooks'
import reducerCart from './reducerCart'

export default combineReducers({
	books: reducerBooks,
	cart: reducerCart

})
