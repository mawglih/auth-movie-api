import {
  SUBMIT_FORM_START,
  SUBMIT_FORM_SUCCESS,
  LOGOUT,
} from 'actions';

const INITIAL_STATE = {
  loggedIn: false,
  loading: false,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch(type) {
    case SUBMIT_FORM_START:
      return {
        ...state,
        data: payload,
        loading: true,
        loggedIn: false,
      };
    case SUBMIT_FORM_SUCCESS:
      console.log('loggedIn reducer: ', state.loggedIn)
      return {
        ...state,
        loading: false,
        loggedIn: true,
    };
    case LOGOUT:
      return {
        ...state,
        loggedIn: false,
      }
    default:
      return state;
  }
};
