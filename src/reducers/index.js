import { combineReducers } from 'redux';
import BooksReducer from './BooksReducer';

const rootReducer = combineReducers({
  // name of peice of state on left, value is whatever is returned from the right side
  books: BooksReducer
});

export default rootReducer;
