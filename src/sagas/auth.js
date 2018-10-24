import {
  put,
  select,
} from 'redux-saga/effects';
import { submitFormStart, SUBMIT_FORM_SUCCESS } from 'actions';

export function* AuthSaga() {
  const obj = yield select(submitFormStart);
  const response = yield obj.payload.auth.data;
  yield console.log('saga email and pass: ', response);
  yield put({
    type: SUBMIT_FORM_SUCCESS,
    payload: response,
  });
}

export default {};
