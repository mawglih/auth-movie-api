import { takeEvery } from 'redux-saga/effects';
import {
  SUBMIT_FORM_START,
  GET_ITEMS_START,
} from 'actions';
import { AuthSaga } from './auth';
import ItemsSaga from './items';

export default function* rootSaga() {
  yield takeEvery(SUBMIT_FORM_START, AuthSaga);
  yield takeEvery(GET_ITEMS_START, ItemsSaga);
}
