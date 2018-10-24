import {
  GET_ITEMS_SUCCESS,
} from '../actions';

const INITIAL_STATE = {
  items: [],
};

const itemsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case GET_ITEMS_SUCCESS:
      return {
        ...state,
        items: payload,
      };
    default:
      return state;
  }
};
export default itemsReducer;
