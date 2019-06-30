import { combineReducers } from 'redux';
import { USER_ACTIONS } from '../actions/userActions';

const id = (state = 3, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.payload.id || state;
    case USER_ACTIONS.UNSET_USER:
      return null;
    default:
      return state;
  }
};

const userName = (state = 'todd', action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.payload.username || state;
    case USER_ACTIONS.UNSET_USER:
      return null;
    default:
      return state;
  }
};

const isLoading = (state = false, action) => {
  switch (action.type) {
    case USER_ACTIONS.REQUEST_START:
      return true;
    case USER_ACTIONS.REQUEST_DONE:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  id,
  userName,
  isLoading,
});
