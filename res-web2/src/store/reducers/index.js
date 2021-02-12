import { combineReducers } from 'redux';
import userReducer from './user';
const app = combineReducers({
  userReducer
});
export default app;
