export const SUBMIT_FORM_START = 'SUBMIT_FORM_START';
export const SUBMIT_FORM_SUCCESS = 'SUBMIT_FORM_SUCCESS';
export const SUBMIT_FORM_FAILURE = 'SUBMIT_FORM_FAILURE';
export const LOGOUT = 'LOGOUT';
export const GET_ITEMS_START = 'GET_ITEMS_START';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_FAILURE = 'GET_ITEMS_FAILURE';
export const GET_ITEM_BY_ID_START = 'GET_ITEM_BY_ID_START';
export const GET_ITEM_BY_ID_SUCCESS = 'GET_ITEM_BY_ID_SUCCESS';
export const GET_ITEM_BY_ID_FAILURE = 'GET_ITEM_BY_ID_FAILURE';

export const submitFormStart = (payload) => {
  console.log('action submit form paylod: ', payload);
  return{
    type: SUBMIT_FORM_START,
    payload,
  };
};

export const submitFormSuccess = (payload) => {
  console.log('action success: ', payload);
  return{
    type: SUBMIT_FORM_SUCCESS,
  };
};

export const submitFormFailure = (payload) => {
  return{
    type: SUBMIT_FORM_FAILURE,
    error: payload,
  };
};

export const logout = () => {
  return{
    type: LOGOUT,
  };
};

export const getItemsStart = () => (
  {
    type: GET_ITEMS_START,
  }
);

export const getItemsSuccess = ({ payload }) => (
  {
    type: GET_ITEMS_SUCCESS,
    payload,
  }
);

export const getItemssFailure = ({ payload }) => (
  {
    type: GET_ITEMS_FAILURE,
    error: payload,
  }
);

export const getItemByIdStart = (payload) => (
  {
    type: GET_ITEM_BY_ID_START,
    payload,
  }
);
