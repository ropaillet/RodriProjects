import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import ListSelectionReducer from './ListSelectionReducer';

export default combineReducers({
  libraries: LibraryReducer,
  selectedLibrary: ListSelectionReducer
});
