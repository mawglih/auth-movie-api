import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import auth from './auth';
import items from './items';
// import contact from './contact';

export default combineReducers({
  form: FormReducer,
  auth,
  items,
  // contact,
});
