import { combineReducers } from "redux";
import templatesReducer from './templates';
import searchReducer from './search';
import sortReducer from './sort';

export const rootReducer = combineReducers({
  templatesReducer,
  searchReducer,
  sortReducer

})