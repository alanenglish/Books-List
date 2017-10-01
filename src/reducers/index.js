import { combineReducers } from 'redux';
import BooksReducer from './BooksReducer';
import ActiveBookReducer from './ActiveBookReducer';

const rootReducer = combineReducers({
  // name of peice of state on left, value is whatever is returned from the right side
  books: BooksReducer,
  activeBook: ActiveBookReducer
});

export default rootReducer;
