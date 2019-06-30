import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import listings from './listingsReducer'
import settings from './settingsReducer'

const store = combineReducers({
  listings,
  settings,
  user,
  login,
});

export default store;
